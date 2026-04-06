"""
UN Treaty Collection scraper - China participation
Outputs: china_treaties_raw.json

Scrapes all 29 chapters of Multilateral Treaties Deposited with the
Secretary-General, extracts treaties where China appears as a participant,
and collects: name, mtdsg_no, chapter, opened, in_force, china_signed,
china_ratified, action_type, reservations, total_parties.
"""

import json
import re
import time
import sys
from datetime import datetime

import requests
from bs4 import BeautifulSoup

BASE = "https://treaties.un.org"
SESSION = requests.Session()
SESSION.headers["User-Agent"] = "treaty-research-scraper/1.0 (academic)"

CHAPTER_CATEGORIES = {
    1:  "Political & territorial",
    2:  "Political & territorial",
    3:  "Political & territorial",
    4:  "Human rights",
    5:  "Human rights",
    6:  "Human rights",
    7:  "Human rights",
    8:  "Human rights",
    9:  "Human rights",
    10: "Human rights",
    11: "Maritime & territory",
    12: "Economic & trade",
    13: "Economic & trade",
    14: "Economic & trade",
    15: "Arms control / CBRN",
    16: "Technology & science",
    17: "Technology & science",
    18: "Human rights",
    19: "Economic & trade",
    20: "Maritime & territory",
    21: "Environmental",
    22: "Economic & trade",
    23: "Arms control / CBRN",
    24: "Technology & science",
    25: "Political & territorial",
    26: "Maritime & territory",
    27: "Political & territorial",
    28: "Political & territorial",
    29: "Military & security",
}

CHAPTER_NAMES = {
    1: "Legal Status", 2: "Privileges and Immunities", 3: "Consular Relations",
    4: "Human Rights", 5: "Refugees and Stateless Persons", 6: "Narcotic Drugs",
    7: "Traffic in Persons", 8: "Obscene Publications", 9: "Health", 10: "Labour",
    11: "Navigation", 12: "Commerce", 13: "Intellectual Property", 14: "Transport",
    15: "Nuclear Material", 16: "Meteorology", 17: "Education and Culture",
    18: "Penal Matters", 19: "Commodities", 20: "Law of the Sea",
    21: "Environment", 22: "Multilateral Trade", 23: "Arms Regulation and Disarmament",
    24: "Outer Space", 25: "Diplomatic Relations", 26: "Maritime Law",
    27: "Miscellaneous", 28: "Privileges and Immunities (Organizations)",
    29: "International Peace and Security",
}


def get(url, retries=3, delay=1.5):
    for attempt in range(retries):
        try:
            r = SESSION.get(url, timeout=20)
            r.raise_for_status()
            time.sleep(delay)
            return r
        except Exception as e:
            if attempt == retries - 1:
                print(f"  ERROR fetching {url}: {e}", file=sys.stderr)
                return None
            time.sleep(delay * 2)


def parse_year(date_str):
    """Extract 4-digit year from a date string like '4 Oct 1988' or '1988'."""
    if not date_str:
        return None
    m = re.search(r'\b(1[89]\d\d|20[012]\d)\b', date_str)
    return int(m.group(1)) if m else None


def parse_action_type(date_str):
    """
    Detect action type from annotation suffix in date cell.
    'a' = accession, 'd' = succession, blank = ratification.
    """
    if not date_str:
        return None
    s = date_str.strip()
    if re.search(r'\ba\b', s):
        return "accession"
    if re.search(r'\bd\b', s):
        return "succession"
    if re.search(r'\bsuccession\b', s, re.I):
        return "succession"
    if re.search(r'\baccession\b', s, re.I):
        return "accession"
    return "ratification"


def find_participants_table(soup):
    """
    Find the main participants table.
    The UN Treaty Collection renders two nested tables — we want the inner one
    whose FIRST row (row 0) has exactly 3 cells with headers like
    'Participant', 'Signature', 'Ratification/Accession...'.
    The outer wrapper table has a giant first row containing all data as one cell.
    """
    for table in soup.find_all("table"):
        rows = table.find_all("tr")
        if len(rows) < 3:
            continue
        header = rows[0].find_all(["td", "th"])
        # Must have 3 columns, first is exactly "Participant[N]" (not a mega-blob)
        if len(header) != 3:
            continue
        first = header[0].get_text(strip=True)
        if re.match(r"^Participant\d*$", first, re.I):
            return table, rows
    return None, []


def find_china_row(rows):
    """Find the row where first cell starts with 'China' (may have footnote nums like China5,6)."""
    for row in rows[1:]:  # skip header
        cells = row.find_all(["td", "th"])
        if not cells:
            continue
        name = cells[0].get_text(strip=True)
        # China, China1, China6,7,8 — the footnote digits follow immediately after 'China'
        # Use negative lookahead for letters to avoid matching e.g. "Chinese Taipei"
        if re.match(r"^China(?![a-zA-Z])", name):
            return cells
    return None


def get_treaty_metadata(soup):
    """Extract opened year, entry into force year, total parties from the header tables."""
    opened = None
    in_force = None
    parties_count = None

    # Walk all table cells looking for key labels
    for cell in soup.find_all(["td", "th"]):
        text = cell.get_text(separator=" ", strip=True)

        # Entry into force: "3 January 1976"
        if not in_force and re.search(r"entry into force", text, re.I):
            # The value is usually in the next sibling cell
            nxt = cell.find_next_sibling(["td", "th"])
            if nxt:
                in_force = parse_year(nxt.get_text(strip=True))
            if not in_force:
                in_force = parse_year(text)

        # Location + date: "New York, 16 December 1966"
        if not opened and re.match(r"(New York|Geneva|Vienna|San Francisco|Montreal|The Hague|Paris|Rome|London|Washington|Nairobi|Basle|Basel|Bern|Tokyo|Brussels|Stockholm|Caracas|Aarhus|Rio de Janeiro|Kyoto|Ottawa|Bonn)\b", text, re.I):
            opened = parse_year(text)

        # Status cell: "Signatories : 72\nParties : 173"
        if not parties_count and re.search(r"Parties\s*:", text, re.I):
            m = re.search(r"Parties\s*:\s*(\d+)", text, re.I)
            if m:
                parties_count = int(m.group(1))

    return opened, in_force, parties_count


def get_china_reservations(soup):
    """
    Find reservation/declaration text for China in the declarations section.
    Returns list of reservation strings.
    """
    reservations = []
    full_text = soup.get_text(separator="\n")
    lines = full_text.split("\n")

    i = 0
    while i < len(lines):
        line = lines[i].strip()
        # Look for a line that is just "China" or "China N" (with footnote)
        if re.match(r"^China(?:\d+(?:,\d+)*)?$", line, re.I):
            # Collect following lines as reservation text until next country or blank x2
            res_lines = []
            blanks = 0
            j = i + 1
            while j < len(lines) and len(res_lines) < 20:
                l = lines[j].strip()
                if not l:
                    blanks += 1
                    if blanks >= 2:
                        break
                else:
                    blanks = 0
                    # Stop if this looks like a new country name heading
                    # (Title Case, 1-4 words, short line, not a reservation keyword)
                    if (re.match(r"^[A-Z][a-z]", l) and
                            len(l.split()) <= 5 and
                            len(l) < 45 and
                            not re.search(r"(reservation|declaration|interpretive|note:|article|paragraph|convention|treaty|protocol)", l, re.I)):
                        break
                    res_lines.append(l)
                j += 1

            text = " ".join(res_lines).strip()
            if text and len(text) > 10:
                reservations.append(text)
            i = j
            continue
        i += 1

    return reservations


def get_chapter_treaties(chapter_num):
    """Return list of {name, mtdsg_no, url} for a chapter."""
    url = f"{BASE}/Pages/Treaties.aspx?id={chapter_num}&subid=A&clang=_en"
    r = get(url)
    if not r:
        return []

    soup = BeautifulSoup(r.text, "html.parser")
    treaties = []

    for a in soup.find_all("a", href=re.compile(r"ViewDetails\.aspx.*mtdsg_no=", re.I)):
        href = a["href"]
        m = re.search(r"mtdsg_no=([^&]+)", href, re.I)
        if not m:
            continue
        mtdsg_no = m.group(1).strip()
        name = a.get_text(separator=" ", strip=True)
        # Remove emoji / garbage characters, normalize whitespace
        name = re.sub(r'[^\x20-\x7E\u00C0-\u024F]', '', name).strip()
        name = re.sub(r'\s+', ' ', name)
        if not name or len(name) < 5:
            continue
        # Remove trailing location/date fragment (e.g. ". New York, 16 December 1966")
        name = re.sub(r'\.\s*(New York|Geneva|Vienna|San Francisco|Montreal|The Hague|Paris|Rome|London|Washington|Nairobi|Basle|Basel|Bern|Tokyo|Brussels|Stockholm|Caracas|Aarhus|Rio de Janeiro|Kyoto|Ottawa|Bonn).*$', '', name, flags=re.I).strip()
        full_url = href if href.startswith("http") else f"{BASE}/Pages/{href}"
        treaties.append({"name": name, "mtdsg_no": mtdsg_no, "url": full_url})

    # Deduplicate by mtdsg_no
    seen = set()
    unique = []
    for t in treaties:
        if t["mtdsg_no"] not in seen:
            seen.add(t["mtdsg_no"])
            unique.append(t)
    return unique


def get_treaty_detail(treaty, chapter_num):
    """
    Scrape a treaty's ViewDetails page.
    Returns enriched dict (china_present may be False if China not a party).
    """
    r = get(treaty["url"])
    if not r:
        return None

    soup = BeautifulSoup(r.text, "html.parser")

    opened, in_force, parties_count = get_treaty_metadata(soup)

    table, rows = find_participants_table(soup)
    china_cells = find_china_row(rows) if rows else None

    china_signed = None
    china_ratified = None
    action_type = None

    if china_cells and len(china_cells) >= 3:
        sig_text = china_cells[1].get_text(strip=True)
        rat_text = china_cells[2].get_text(strip=True)
        china_signed = parse_year(sig_text)
        china_ratified = parse_year(rat_text)
        # action type from ratification cell
        if china_ratified:
            action_type = parse_action_type(rat_text)
        elif china_signed:
            action_type = "signed only"

    china_reservations = get_china_reservations(soup) if china_cells else []

    return {
        "name": treaty["name"],
        "mtdsg_no": treaty["mtdsg_no"],
        "chapter": chapter_num,
        "chapter_name": CHAPTER_NAMES.get(chapter_num, ""),
        "cat": CHAPTER_CATEGORIES.get(chapter_num, "Political & territorial"),
        "url": treaty["url"],
        "treaty_opened": opened,
        "entry_into_force": in_force,
        "total_parties": parties_count,
        "china_signed": china_signed,
        "china_ratified": china_ratified,
        "action_type": action_type,
        "china_present": china_cells is not None,
        "reservations_raw": china_reservations,
    }


def main():
    results = []
    chapter_index = {}

    print("=== UN Treaty Collection — China scraper ===\n")

    for ch in range(1, 30):
        print(f"Chapter {ch:2d} ({CHAPTER_NAMES.get(ch, '?')})...", end=" ", flush=True)
        treaties = get_chapter_treaties(ch)
        print(f"{len(treaties)} treaties found")
        chapter_index[ch] = treaties

    total = sum(len(v) for v in chapter_index.values())
    print(f"\nTotal treaties across all chapters: {total}")
    print("Now fetching China participation for each...\n")

    done = 0
    china_count = 0

    for ch, treaties in chapter_index.items():
        for t in treaties:
            done += 1
            print(f"  [{done:3d}/{total}] {t['mtdsg_no']:12s} {t['name'][:55]}", end=" ... ", flush=True)
            detail = get_treaty_detail(t, ch)
            if detail is None:
                print("FETCH ERROR")
                continue
            results.append(detail)  # keep all, even non-parties (china_present=False)
            if detail["china_present"]:
                china_count += 1
                status = f"CHINA ({'rat' if detail['china_ratified'] else 'sig' if detail['china_signed'] else '?'})"
                print(status)
            else:
                print("not party")

    out = {
        "scraped_at": datetime.utcnow().isoformat(),
        "total_treaties_checked": done,
        "china_treaties_found": china_count,
        "treaties": results,
    }

    with open("china_treaties_raw.json", "w", encoding="utf-8") as f:
        json.dump(out, f, indent=2, ensure_ascii=False)

    print(f"\nDone. {china_count} China treaties saved → china_treaties_raw.json")
    print(f"All {done} entries (including non-parties) saved for reference.")


if __name__ == "__main__":
    main()
