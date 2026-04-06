"""Quick test: scrape Chapter IV (Human Rights) only and validate parsing."""
import sys
sys.path.insert(0, ".")
from scrape_un_treaties import get_chapter_treaties, get_treaty_detail, CHAPTER_NAMES

ch = 4
print(f"Testing Chapter {ch}: {CHAPTER_NAMES[ch]}\n")

treaties = get_chapter_treaties(ch)
print(f"Found {len(treaties)} treaties\n")

print("--- China participation in all Chapter IV treaties ---\n")
china_found = 0
for t in treaties:
    d = get_treaty_detail(t, ch)
    if d and d["china_present"]:
        china_found += 1
        print(f"  {d['mtdsg_no']:10s}  {d['name'][:60]}")
        print(f"    Signed: {d['china_signed']}  Ratified: {d['china_ratified']}  Type: {d['action_type']}")
        print(f"    Opened: {d['treaty_opened']}  In force: {d['entry_into_force']}  Parties: {d['total_parties']}")
        if d["reservations_raw"]:
            for res in d["reservations_raw"]:
                print(f"    Reservations: {res[:120]}")
        print()

print(f"China is party to {china_found}/{len(treaties)} Chapter IV treaties")
