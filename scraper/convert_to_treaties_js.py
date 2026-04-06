"""
Convert china_treaties_raw.json into new treaties.js entries.

- Skips treaties already in treaties.js (matched by mtdsg_no or name)
- Fixes chapter→category mapping
- Infers obligation_type, enforcement_channel, era, status
- Outputs: new_treaties.js  (append to existing treaties.js)
           merge_report.txt (summary of what was added / skipped)
"""

import json
import re

# ── Already-present in treaties.js (by mtdsg_no or close name match) ─────────
ALREADY_IN_DB = {
    # mtdsg_no → existing name (for reference)
    "XXVI-4":   "CTBT",
    "XXVI-3":   "CWC",
    "XXI-6":    "UNCLOS",
    "XXVII-2-a":"Montreal Protocol",
    "XXVII-7":  "UNFCCC",
    "XXVII-7-a":"Kyoto Protocol",
    "XXVII-7-d":"Paris Agreement",
    "IV-9":     "CAT",
    "IV-3":     "ICESCR",
    "IV-4":     "ICCPR",
    "IV-8":     "CEDAW",
    "IV-11":    "CRC",
    "IV-15":    "CRPD",
    "XXVII-3":  "Basel Convention",
    "XXVII-8":  "CBD",
    "XXVII-17": "Minamata",
    "XXVII-15": "Stockholm Convention",
    "XVIII-14": "UNCAC",
    "XVIII-12": "UNTOC",
    "XXVII-8-b":"Nagoya Protocol",
    "IV-1":     "Genocide Convention",
}

# ── Category overrides by mtdsg_no prefix ─────────────────────────────────────
def get_category(mtdsg_no, chapter):
    prefix = mtdsg_no.split("-")[0]
    overrides = {
        "III":   "Political & territorial",   # diplomatic/consular
        "IV":    "Human rights",
        "V":     "Human rights",              # refugees
        "VI":    "Human rights",              # narcotic drugs / criminal justice
        "VII":   "Human rights",              # trafficking
        "VIII":  "Human rights",              # obscene publications
        "IX":    "Human rights",              # health
        "X":     "Economic & trade",          # labour/commerce
        "XI":    "Maritime & territory",      # navigation
        "XII":   "Maritime & territory",      # IMO / shipping
        "XIV":   "Economic & trade",          # phonograms / transport IP
        "XVI":   "Human rights",              # nationality conventions
        "XVIII": "Military & security",       # penal / terrorism / transnational crime
        "XIX":   "Economic & trade",          # commodities
        "XXI":   "Maritime & territory",      # UNCLOS family
        "XXII":  "Economic & trade",          # arbitration / trade law
        "XXIII": "Political & territorial",   # law of treaties
        "XXIV":  "Technology & science",      # outer space
        "XXV":   "Technology & science",      # telecoms
        "XXVI":  "Arms control / CBRN",       # ENMOD, CCW, CWC, CTBT
        "XXVII": "Environmental",             # ozone, climate, biodiversity, chemicals
        "XXVIII":"Economic & trade",
        "XXIX":  "Military & security",
    }
    return overrides.get(prefix, "Political & territorial")


# ── Obligation type inference ─────────────────────────────────────────────────
OBLIGATION_BY_CAT = {
    "Arms control / CBRN":   "binary",
    "Environmental":         "scalar",
    "Human rights":          "scalar",
    "Economic & trade":      "mixed",
    "Maritime & territory":  "binary",
    "Political & territorial":"binary",
    "Military & security":   "binary",
    "Technology & science":  "binary",
}

# ── Enforcement channel inference ─────────────────────────────────────────────
ENFORCEMENT_BY_CAT = {
    "Arms control / CBRN":   "centralised",   # OPCW/IAEA inspection
    "Environmental":         "distributed",
    "Human rights":          "distributed",   # treaty body reporting
    "Economic & trade":      "centralised",   # arbitration / WTO DSB
    "Maritime & territory":  "distributed",
    "Political & territorial":"none",
    "Military & security":   "distributed",
    "Technology & science":  "none",
}

# Fine-grained overrides for specific treaties
OBL_OVERRIDE = {
    "XXVII-7":    "scalar",   # UNFCCC
    "XXVII-7-a":  "scalar",   # Kyoto
    "XXVII-7-d":  "scalar",   # Paris
    "XXVII-8":    "mixed",    # CBD
    "XXI-6":      "mixed",    # UNCLOS
    "XXII-1":     "binary",   # NY Arbitration
}
ENF_OVERRIDE = {
    "XXVII-7-d":  "distributed",  # Paris — pledge-review, not centralised enforcement
    "XXVII-7-a":  "centralised",  # Kyoto — CDM/compliance committee
    "XXI-6":      "centralised",  # UNCLOS — ITLOS/ISA
    "XXII-1":     "centralised",  # NY Arbitration
    "XVIII-14":   "distributed",  # UNCAC
    "XVIII-12":   "distributed",  # UNTOC
}

# ── Era assignment ─────────────────────────────────────────────────────────────
def get_era(year):
    if year is None:
        return None
    if year <= 1976:
        return "Mao (1949\u201376)"
    if year <= 1992:
        return "Deng (1978\u201392)"
    if year <= 2002:
        return "Jiang (1992\u201302)"
    if year <= 2012:
        return "Hu (2002\u201312)"
    return "Xi (2012\u2013)"


# ── Status inference ─────────────────────────────────────────────────────────
# Treat as 'in force' unless we know it's terminated or signed-only
SIGNED_ONLY_MTDSG = {"IV-4", "III-13", "IV-10"}  # known signed-not-ratified

def get_status(t):
    no = t["mtdsg_no"]
    if no in SIGNED_ONLY_MTDSG:
        return "signed only"
    if t["action_type"] == "signed only":
        return "signed only"
    if t["china_ratified"]:
        return "in force"
    if t["china_signed"]:
        return "signed only"
    return "in force"  # accession with no parsed date — assume in force


# ── Truncate reservation text for notes field ─────────────────────────────────
def make_notes(t):
    parts = []
    if t.get("reservations_raw"):
        for r in t["reservations_raw"][:2]:
            cleaned = re.sub(r'\s+', ' ', r).strip()
            if len(cleaned) > 200:
                cleaned = cleaned[:197] + "..."
            if cleaned:
                parts.append(cleaned)
    return " | ".join(parts) if parts else None


# ── Main conversion ─────────────────────────────────────────────────────────
def convert(raw_path="china_treaties_raw.json", start_id=41):
    with open(raw_path, encoding="utf-8") as f:
        data = json.load(f)

    china_treaties = [t for t in data["treaties"] if t["china_present"]]
    new_entries = []
    skipped = []
    problematic = []

    for t in china_treaties:
        no = t["mtdsg_no"]

        if no in ALREADY_IN_DB:
            skipped.append((no, t["name"][:60], "already in DB"))
            continue

        cat = get_category(no, t["chapter"])
        obl = OBL_OVERRIDE.get(no, OBLIGATION_BY_CAT.get(cat, "binary"))
        enf = ENF_OVERRIDE.get(no, ENFORCEMENT_BY_CAT.get(cat, "none"))
        status = get_status(t)
        join_year = t["china_ratified"] or t["china_signed"]
        era = get_era(join_year)
        notes = make_notes(t)

        # Flag ones with no dates parsed for manual review
        if not t["china_signed"] and not t["china_ratified"]:
            problematic.append((no, t["name"][:60]))

        lag_sign = None
        lag_rat = None
        if t["china_signed"] and t["treaty_opened"]:
            lag_sign = t["china_signed"] - t["treaty_opened"]
        if t["china_ratified"] and t["china_signed"]:
            lag_rat = t["china_ratified"] - t["china_signed"]
        elif t["china_ratified"] and t["treaty_opened"] and t["action_type"] == "accession":
            lag_rat = None  # accession: no separate signing lag

        # Scraper sometimes captures today's "STATUS AS AT 2026" as entry_into_force — null it out
        eif = t["entry_into_force"]
        if eif and eif >= 2025:
            eif = None

        entry = {
            "id": start_id + len(new_entries),
            "name": t["name"],
            "mtdsg_no": no,
            "signed": t["china_signed"],
            "ratified": t["china_ratified"],
            "era": era,
            "cat": cat,
            "multi": True,
            "parties": "Multilateral",
            "by": True,
            "rat": t["china_ratified"] is not None,
            "imp": False,
            "status": status,
            "treaty_opened": t["treaty_opened"],
            "entry_into_force": eif,
            "signing_lag_years": lag_sign,
            "ratification_lag_years": lag_rat,
            "adoption_percentile": None,
            "reservations": t["reservations_raw"][:1] if t["reservations_raw"] else [],
            "optional_protocols_accepted": False,
            "complaints_mechanism_accepted": False,
            "reporting_status": "n/a",
            "compliance_flags": [],
            "behaviour_status": None,
            "obligation_type": obl,
            "enforcement_channel": enf,
            "verification_mechanism": False,
            "source_url": t["url"],
            "tags": [],
            "notes": notes or f"UN Treaty Collection {no}.",
        }
        new_entries.append(entry)

    return new_entries, skipped, problematic


def format_js_entry(e):
    def jv(v):
        if v is None:
            return "null"
        if isinstance(v, bool):
            return "true" if v else "false"
        if isinstance(v, (int, float)):
            return str(v)
        if isinstance(v, str):
            # Escape single quotes
            escaped = v.replace("'", "\\'")
            return f"'{escaped}'"
        if isinstance(v, list):
            if not v:
                return "[]"
            items = ", ".join(f"'{x.replace(chr(39), chr(92)+chr(39))}'" for x in v)
            return f"[{items}]"
        return repr(v)

    lines = [
        f"  {{",
        f"    id: {e['id']},",
        f"    name: {jv(e['name'])},",
        f"    mtdsg_no: {jv(e['mtdsg_no'])},",
        f"    signed: {jv(e['signed'])}, ratified: {jv(e['ratified'])},",
        f"    era: {jv(e['era'])},",
        f"    cat: {jv(e['cat'])},",
        f"    multi: {jv(e['multi'])},",
        f"    parties: {jv(e['parties'])},",
        f"    by: {jv(e['by'])}, rat: {jv(e['rat'])}, imp: {jv(e['imp'])},",
        f"    status: {jv(e['status'])},",
        f"    treaty_opened: {jv(e['treaty_opened'])},",
        f"    entry_into_force: {jv(e['entry_into_force'])},",
        f"    signing_lag_years: {jv(e['signing_lag_years'])},",
        f"    ratification_lag_years: {jv(e['ratification_lag_years'])},",
        f"    adoption_percentile: null,",
        f"    reservations: {jv(e['reservations'])},",
        f"    optional_protocols_accepted: false,",
        f"    complaints_mechanism_accepted: false,",
        f"    reporting_status: 'n/a',",
        f"    compliance_flags: [],",
        f"    behaviour_status: null,",
        f"    obligation_type: {jv(e['obligation_type'])},",
        f"    enforcement_channel: {jv(e['enforcement_channel'])},",
        f"    verification_mechanism: false,",
        f"    source_url: {jv(e['source_url'])},",
        f"    tags: [],",
        f"    notes: {jv(e['notes'])},",
        f"  }},",
    ]
    return "\n".join(lines)


if __name__ == "__main__":
    new_entries, skipped, problematic = convert()

    # Write JS append file
    with open("new_treaties.js", "w", encoding="utf-8") as f:
        f.write("// === NEW ENTRIES FROM UN TREATY COLLECTION SCRAPE ===\n")
        f.write(f"// {len(new_entries)} new treaties (IDs 41-{40+len(new_entries)})\n\n")
        for e in new_entries:
            f.write(format_js_entry(e) + "\n")

    # Write report
    with open("merge_report.txt", "w", encoding="utf-8") as f:
        f.write(f"MERGE REPORT\n{'='*60}\n\n")
        f.write(f"New entries: {len(new_entries)}\n")
        f.write(f"Skipped (already in DB): {len(skipped)}\n")
        f.write(f"Problematic (no dates): {len(problematic)}\n\n")

        f.write("NEW ENTRIES:\n")
        for e in new_entries:
            f.write(f"  [{e['id']}] {e['mtdsg_no']:12s} {e['name'][:60]}\n")
            f.write(f"        sig:{e['signed']} rat:{e['ratified']} era:{e['era']} cat:{e['cat']}\n")

        f.write("\nSKIPPED (already in DB):\n")
        for no, name, reason in skipped:
            f.write(f"  {no:12s} {name} ({reason})\n")

        if problematic:
            f.write("\nPROBLEMATIC (no dates parsed - review manually):\n")
            for no, name in problematic:
                f.write(f"  {no:12s} {name}\n")

    print(f"Done: {len(new_entries)} new entries -> new_treaties.js")
    print(f"      {len(skipped)} skipped (already in DB)")
    if problematic:
        print(f"      {len(problematic)} need manual date review (see merge_report.txt)")
    print("Review merge_report.txt, then append new_treaties.js to treaties.js")
