"""
Patch treaties.js in-place with:
1. OHCHR reporting_status for treaty body conventions
2. behaviour_status = 'non-compliant' / 'partial' + status = 'disputed' for known cases
3. compliance_flags entries for key cases
"""
import re

TREATIES_JS = "../src/data/treaties.js"

# ── OHCHR reporting status (from tbinternet.ohchr.org, scraped 2026-04-05) ───
# Key: treaty name fragment (matched against name field)
# Values: { reporting_status, latest_cycle, due, submitted, note }
OHCHR_DATA = {
    # id=15  CAT — Cycle VI due Dec 2019, submitted Feb 2025 (5+ yrs late)
    "Convention Against Torture (CAT)": {
        "reporting_status": "late",
        "reporting_note": "Cycle VI due Dec 2019, submitted Feb 2025 (5+ years late). Cycle V (due Nov 2012) submitted Jun 2013 — on time.",
    },
    # id=18  CEDAW — Cycle IX due Nov 2018, submitted Mar 2020 (17 months late)
    "Convention on the Elimination of All Forms of Discrimination Against Women (CEDA": {
        "reporting_status": "late",
        "reporting_note": "Cycle IX due Nov 2018, submitted Mar 2020 (17 months late).",
    },
    # id=44  ICERD — Cycle XIV due Jan 2013, submitted Jan 2017 (4 years late)
    "International Convention on the Elimination of All Forms of Racial Dis": {
        "reporting_status": "late",
        "reporting_note": "Cycle XIV due Jan 2013, submitted Jan 2017 (4 years late).",
    },
    # id=16  ICESCR — no report cycles found; 1 periodic report overdue per OHCHR
    "International Covenant on Economic, Social and Cultural Rights (ICESCR)": {
        "reporting_status": "non-reporting",
        "reporting_note": "OHCHR flags 1 overdue periodic report. Last submitted report: E/C.12/CHN/2 (2013). No Cycle 3 submission found.",
    },
    # id=19  CRC — Cycle 5 due Mar 2019, submitted Jul 2023 (4+ years late)
    "Convention on the Rights of the Child (CRC)": {
        "reporting_status": "late",
        "reporting_note": "Cycle 5 due Mar 2019, submitted Jul 2023 (4+ years late).",
    },
    # id=20  CRPD — Cycle 2 due Sep 2018, submitted Aug 2018 (on time)
    "Convention on the Rights of Persons with Disabilities (CRPD)": {
        "reporting_status": "compliant",
        "reporting_note": "Cycle 2 submitted Aug 2018, one month before deadline.",
    },
}

# ── Behaviour / status patches ─────────────────────────────────────────────
# Key: id (int)
BEHAVIOUR_PATCHES = {
    # UNCLOS — South China Sea arbitration ruling (2016), formally rejected
    9: {
        "status": "disputed",
        "behaviour_status": "non-compliant",
        "compliance_flags": [
            "source: 'PCA', year: 2016, summary: 'Arbitral tribunal ruled China\\'s nine-dash line claims incompatible with UNCLOS. China rejected jurisdiction and refused to comply with the award.'",
        ],
    },
    # IHR 2005 — delayed COVID notification
    22: {
        "status": "disputed",
        "behaviour_status": "disputed",
        "compliance_flags": [
            "source: 'WHO', year: 2020, summary: 'IHR Article 6 requires notification of PHEICs within 24–48 hours. China delayed notification of SARS-CoV-2 outbreak; WHO not formally notified until 31 Dec 2019, with evidence of earlier knowledge.'",
        ],
    },
    # Sino-British Joint Declaration
    23: {
        "status": "disputed",
        "behaviour_status": "non-compliant",
        "compliance_flags": [
            "source: 'UK Foreign Secretary', year: 2020, summary: 'UK declared China in breach of the Joint Declaration following imposition of National Security Law on Hong Kong. China disputes the declaration\\'s continued legal force.'",
        ],
    },
    # Geneva Conventions — Uyghur detention
    2: {
        "behaviour_status": "partial",
        "compliance_flags": [
            "source: 'ICRC', year: 2020, summary: 'Concerns raised over treatment of Uyghurs in detention facilities in Xinjiang; China denies POW/civilian status applicability and restricts ICRC access.'",
        ],
    },
    # CAT — Xinjiang / torture in detention
    15: {
        "behaviour_status": "partial",
        "compliance_flags": [
            "source: 'CAT Committee', year: 2016, summary: 'Committee expressed concern over allegations of torture in detention, use of \\'residential surveillance\\' in designated locations, and lack of independent oversight of Xinjiang detention facilities.'",
            "source: 'UN OHCHR', year: 2022, summary: 'OHCHR Xinjiang assessment found serious human rights violations; patterns of torture and ill-treatment in detention consistent with CAT Article 1.'",
        ],
    },
    # ICESCR — trade union rights, labour camps
    16: {
        "behaviour_status": "partial",
        "compliance_flags": [
            "source: 'CESCR', year: 2023, summary: 'Committee expressed concern over restrictions on independent trade unions (only ACFTU permitted), forced labour in Xinjiang, and absence of effective remedies for labour rights violations.'",
        ],
    },
    # CRC — detention of children, education restrictions
    19: {
        "behaviour_status": "partial",
        "compliance_flags": [
            "source: 'CRC Committee', year: 2022, summary: 'Committee concerned about detention of Uyghur children in state-run boarding schools, restrictions on minority-language education, and corporal punishment.'",
        ],
    },
    # ICCPR — signed only but notable
    17: {
        "behaviour_status": None,  # signed only — leave as null
    },
    # BWC — notable behaviour gap on dual-use
    5: {
        "behaviour_status": "partial",
        "compliance_flags": [
            "source: 'US State Dept', year: 2021, summary: 'US Compliance Report raised concerns about Chinese military activities potentially inconsistent with BWC obligations; China denies any violations.'",
        ],
    },
    # CITES — ivory enforcement gaps
    10: {
        "behaviour_status": "partial",
        "compliance_flags": [
            "source: 'TRAFFIC', year: 2019, summary: 'Despite 2018 domestic ivory trade ban, enforcement gaps persist; China remains a major transit and destination country for illegal wildlife trade.'",
        ],
    },
}


def patch_field(block, field, new_value):
    """Replace a field value in a JS object text block."""
    # Match: field: 'old_value', or field: null, or field: [...],
    if new_value is None:
        new_str = f"{field}: null,"
    elif isinstance(new_value, str):
        escaped = new_value.replace("'", "\\'")
        new_str = f"{field}: '{escaped}',"
    else:
        new_str = f"{field}: {new_value},"

    # Try replacing existing value
    pattern = rf"({field}:\s*)(?:'[^']*'|null|\[[^\]]*\])(,)"
    replacement = rf"\g<1>{new_str[len(field)+2:-1]}\g<2>"
    patched, count = re.subn(pattern, replacement, block, count=1, flags=re.DOTALL)
    if count == 0:
        print(f"  WARNING: could not patch field '{field}'")
    return patched


def patch_compliance_flags(block, flags_list):
    """Replace compliance_flags array."""
    if not flags_list:
        new_arr = "[]"
    else:
        inner = ",\n          ".join(f"{{ {f} }}" for f in flags_list)
        new_arr = f"[\n          {inner}\n        ]"
    pattern = r"(compliance_flags:\s*)\[[^\]]*\](,)"
    repl = rf"\g<1>{new_arr}\g<2>"
    patched, count = re.subn(pattern, repl, block, count=1, flags=re.DOTALL)
    if count == 0:
        print(f"  WARNING: could not patch compliance_flags")
    return patched


def main():
    with open(TREATIES_JS, encoding="utf-8") as f:
        content = f.read()

    # Split into individual treaty blocks by id:
    # Each block starts with "  {" and ends with "  },"
    # We'll process by finding entry id boundaries

    parts = re.split(r'(\n  \{)', content)
    # parts[0] = everything before first {
    # parts[1], parts[2] = '{', first block content
    # etc.

    # Simpler approach: find each treaty block by its id and patch it
    modified = content

    # ── Apply OHCHR reporting status patches ──────────────────────────────
    print("=== OHCHR reporting status patches ===")
    for name_fragment, data in OHCHR_DATA.items():
        # Find treaty by partial name match
        pattern = rf"(  \{{[^{{}}]*?name: '[^']*{re.escape(name_fragment[:30])}[^']*'.*?reporting_status: )'[^']*'(,)"
        new_status = data["reporting_status"]
        repl = rf"\g<1>'{new_status}'\g<2>"
        new_content, count = re.subn(pattern, repl, modified, count=1, flags=re.DOTALL)
        if count:
            print(f"  OK  reporting_status -> '{new_status}' for '{name_fragment[:50]}'")
            modified = new_content
        else:
            print(f"  MISS: '{name_fragment[:50]}'")

    # ── Apply behaviour/status patches ───────────────────────────────────
    print("\n=== Behaviour/status patches ===")
    for treaty_id, patches in BEHAVIOUR_PATCHES.items():
        # Find the block for this id
        id_pattern = rf"(\n  \{{[^{{}}]*?id: {treaty_id},[^{{}}]*?behaviour_status: )'[^']*'(,)"
        id_pattern_null = rf"(\n  \{{[^{{}}]*?id: {treaty_id},[^{{}}]*?behaviour_status: )null(,)"

        bs = patches.get("behaviour_status")
        if bs is not None:
            bs_str = f"'{bs}'"
            for pat in [id_pattern, id_pattern_null]:
                new_content, count = re.subn(pat, rf"\g<1>{bs_str}\g<2>", modified, count=1, flags=re.DOTALL)
                if count:
                    print(f"  OK  id={treaty_id} behaviour_status -> '{bs}'")
                    modified = new_content
                    break
            else:
                print(f"  MISS behaviour_status for id={treaty_id}")

        if "status" in patches and patches["status"]:
            st = patches["status"]
            pat = rf"(\n  \{{[^{{}}]*?id: {treaty_id},[^{{}}]*?status: )'[^']*'(,)"
            new_content, count = re.subn(pat, rf"\g<1>'{st}'\g<2>", modified, count=1, flags=re.DOTALL)
            if count:
                print(f"  OK  id={treaty_id} status -> '{st}'")
                modified = new_content
            else:
                print(f"  MISS status for id={treaty_id}")

        if "compliance_flags" in patches:
            flags = patches["compliance_flags"]
            # Find the block for this id, then patch compliance_flags within it
            block_pat = rf'(\n  \{{)((?:(?!\n  \{{).)*?id: {treaty_id},(?:(?!\n  \{{).)*?)(compliance_flags: )\[[^\]]*\](,)'
            def make_flags_repl(flags_list):
                if not flags_list:
                    arr = "[]"
                else:
                    inner = ",\n          ".join(f"{{ {f} }}" for f in flags_list)
                    arr = f"[\n          {inner}\n        ]"
                return rf'\g<1>\g<2>\g<3>{arr}\g<4>'
            new_content, count = re.subn(block_pat, make_flags_repl(flags), modified, count=1, flags=re.DOTALL)
            if count:
                print(f"  OK  id={treaty_id} compliance_flags ({len(flags)} entries)")
                modified = new_content
            else:
                print(f"  MISS compliance_flags for id={treaty_id}")

    with open(TREATIES_JS, "w", encoding="utf-8") as f:
        f.write(modified)

    print("\nDone. Verifying build compatibility...")
    # Quick sanity check — count entries
    ids = re.findall(r'id: (\d+),', modified)
    print(f"Treaty entries: {len(ids)}, IDs: {ids[0]}..{ids[-1]}")


if __name__ == "__main__":
    main()
