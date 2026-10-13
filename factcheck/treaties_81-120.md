# Fact-check: treaties.js ids 81–120 (checked 2026-10-13)

UNTC = https://treaties.un.org/Pages/ViewDetails.aspx?src=TREATY&mtdsg_no=<NO>&chapter=<CH>&clang=_en. Every source_url for 81–108 resolves to the correct treaty.

## Dataset-level

- **"108 treaties" (analysis-en.md:1, :53; AnalysisPage.jsx:56, :71, :165, :293).** The file holds **120 records**. Breakdown:
  - 106 have `multi: true` and 14 have `multi: false`. The bilaterals are ids 1 (Sino-Soviet 1950), 23 (Sino-British Joint Declaration) and 109–120 (US–China).
  - "108" is the old count of ids 1–108, taken before the US–China block (109–120) was added. Even those 108 are **not** "108 multilateral treaties": ids 1 and 23 are bilateral, so ids 1–108 contain 106 multilateral and 2 bilateral.
  - Only **68 records carry an `mtdsg_no`** (ids 41–108, the "UN Treaty Collection scrape" block).
  - Ids 1–40 are hand-coded with no mtdsg_no. About 25 of them are in fact deposited with the UN Secretary-General (e.g. CWC, CTBT, UNCLOS, ICCPR, ICESCR, CAT, CEDAW, CRC, CRPD, UNFCCC, Kyoto, Paris, Montreal, Basel, CBD, Stockholm, Minamata, UNCAC, UNTOC, ATT, TPNW, CCM, Ottawa, Moon, Nagoya). The rest are not: Geneva Conventions (Switzerland), PTBT/NPT/BWC/OST (US/UK/Russia), UN Charter (US), Antarctic (US), CITES (Switzerland), WTO, IHR (WHO), WCT (WIPO), RCEP (ASEAN), SCO.
  - So the statement that the database "covers 108 treaties drawn from the UN Treaty Collection (MTDSG)" is false on both the number and the source. The analysis text also says the database "does not cover: bilateral treaties", which contradicts the 14 bilateral records. AboutPage.jsx:165 ("~120 instruments… includes only a subset of US–China bilaterals") is the accurate version.
  - Suggested wording: "120 instruments: 106 multilateral (about 93 deposited with the UN Secretary-General, 68 of them coded from MTDSG) and 14 bilateral (12 US–China)." Confidence high on 120/106/14/68. Medium on ~93, since the depositary status of ids 1–40 was checked from memory only.
  - Caveat: 4 of the 12 US–China records are not treaties. Id 114 is a joint announcement, 118 is a set of communiqués, 120 is a leaders' oral commitment, and 117 is a failed negotiation.
- **Systematic gap.** `entry_into_force` is null for every record in ids 81–108. Known dates: 81 1973; 82 1958; 83 1983; 84 1977; 85 1999; 86 2001; 87 2002; 88 2003; 89 2005; 90 2007; 91 not yet in force; 92 1989; 93 1992; 94 2001; 95 2026; 96 1959; 97 2020; 98 1980; 99 1976; 100 1979; 101 1981; 102 1978; 103 1983; 104 1988; 105 2019; 106 2003; 107 1996; 108 2004. Confidence: high for those checked on UNTC this session (89, 91–93, 95, 97, 100–102, 108), medium for the rest.
- **Systematic: "ratified" covers several action types.** Many scrape records store accession, approval or acceptance in `ratified` (e.g. 81, 83–86, 88, 92 AA, 93 A, 96, 98, 99, 100 A, 101–102, 104, 105 A, 106 AA). This is acceptable only if the UI does not say "ratified".

## Records

**82 – Convention on the Nationality of Married Women (XVI-2)**
- signed/ratified/era: current 1957/1958, 'Mao (1949–76)'. **Correct: both acts were by the Republic of China (Taipei), not the PRC** (UNTC footnote 3; several states objected at the time). The PRC has taken no action. The record should be recoded (e.g. ROC-era action, not PRC). As it stands it falsely shows Mao-era PRC participation. Confidence high. Source: UNTC XVI-2.

**89 – Firearms Protocol (XVIII-12-c)**
- Dates verified (signed 9 Dec 2002, ratified 19 Dec 2023). OK.

**90 – Nuclear Terrorism Convention (XVIII-15)**
- reservations: the text is labelled "Declaration" on UNTC but is substantively a reservation to art. 23(1). Fine as is. OK.

**91 – UN Convention against Cybercrime (XVIII-16)**
- treaty_opened: current 2024 (GA adoption 24 Dec 2024). Opened for signature in Hanoi on 25 Oct 2025. signing_lag_years: current 1 → 0 if measured from opening (signed 25 Oct 2025). Confidence high. Source: UNTC XVIII-16.
- name: truncated with "Electro...". The full title ends "...Electronic Form of Serious Crimes". Low severity.
- Status 'signed only' correct. The treaty is not yet in force (3 parties).

**92 – Common Fund for Commodities (XIX-21)**
- Signed 5 Nov 1980; **approval** (AA) on 2 Sep 1981, not ratification. Years correct. Low.

**93 – Copper Study Group ToR (XIX-35)**
- Acceptance 12 Jul 1990; treaty adopted 24 Feb 1989. OK (action type is acceptance).

**95 – BBNJ Agreement (XXI-10)**
- Verified: signed 20 Sep 2023, ratified 15 Dec 2025, declarations dated 15 Dec 2025, in force 17 Jan 2026. entry_into_force null → 2026. OK otherwise.

**97 – Singapore Mediation Convention (XXII-4)**
- treaty_opened: current 2018 (adoption). Opened for signature 7 Aug 2019, the day China signed. signing_lag_years 1 → 0. Low. Not ratified as of UNTC today; status correct.

**100 – Asia-Pacific Telecommunity Constitution (XXV-2)**
- era: current 'Deng (1978–92)'. Correct: signed 25 Oct 1976 and accepted (A) on 2 Jun 1977, both before the Deng era (the Hua Guofeng interregnum; the Mao era if the record is coded by signature). Confidence high. Source: UNTC XXV-2.
- treaty_opened: null → 1976 (27 Mar 1976). signing_lag_years null → 0. Medium.

**101 – AIBD Agreement (XXV-3)**
- treaty_opened: null → 1977. China acceded 5 Feb 1988 (verified). Low.

**102 – ENMOD (XXVI-1)**
- China acceded 8 Jun 2005 (verified). treaty_opened 1976 is the adoption date; it opened for signature 18 May 1977. Low.
- reservations empty is fine; there is only an HK/Macao application notice.

**103 – CCW (XXVI-2)**
- reservations: [] omits China's substantive **statement on signature (14 Sep 1981)**. It criticises the Convention for having no supervision or verification mechanism, the Mines Protocol for not restricting an aggressor's use of mines, and the Incendiary Protocol for not covering combatants. Medium. Source: UNTC XXVI-2.
- enforcement_channel 'centralised' is odd for a treaty with no verification body (subjective; flagged only).

**104 – Vienna Ozone Convention (XXVII-2)**
- reservations: [] — UNTC footnote 4 refers to "the reservation made by China" when the Convention was extended to Hong Kong, but the text is not on the status page. **UNVERIFIED** whether China lodged a reservation on accession (11 Sep 1989).

**105 – Kigali Amendment (XXVII-2-f)**
- treaty_opened null → 2016. China's act was acceptance on 17 Jun 2021, in force for China 15 Sep 2021. Low.

**106 – Cartagena Protocol (XXVII-8-a)**
- reservations: [] omits China's declaration on approval that the Protocol does not apply to HK and Macao until notified. A later declaration (9 May 2011) extended it to HK. Approval (AA) on 8 Jun 2005, not ratification. Low. Source: UNTC XXVII-8-a.

**107 – UNCCD (XXVII-10)**
- Signed 14 Oct 1994, ratified 18 Feb 1997, no declarations. OK.

**108 – Rotterdam Convention (XXVII-14)**
- treaty_opened: null → 1998 (adopted 10 Sep 1998). signing_lag_years null → 1. Low.
- reservations: [] omits China's declaration on ratification: the Convention applies to Macao and not to HK until notified. An HK extension followed on 26 Aug 2008. Low. Source: UNTC XXVII-14.

**109 – US–China Agreement on Trade Relations**
- Dates OK (signed 7 Jul 1979, in force 1 Feb 1980).
- status 'in force' is debatable: it was functionally superseded by PNTR and China's 2001 WTO accession. Low.

**110 – US–China S&T Agreement**
- compliance_flags[0] (US Congress, 2024, "allowed to lapse… renewal negotiations ongoing"): partly true but outdated. The STA lapsed 27 Aug 2024 after two 6-month extensions, then was **renewed for 5 years on 13 Dec 2024** with a narrowed scope (basic research only). "Source: US Congress" is the wrong attribution; the lapse and renewal were executive (State Dept) actions. Confidence high. Source: https://www.nbcnews.com/news/world/us-china-renew-science-technology-pact-growing-rivalry-rcna184231
- notes: "A six-month extension was agreed in February 2025" is **false** (likely fabricated). The extensions were Aug 2023 and Feb 2024, the lapse Aug 2024, and the renewal Dec 2024 (to about Dec 2029). High.
- status 'in force' is correct today. The 'lapsed' tag and behaviour_status 'partial' rest on the wrong premise; the STA governs US decisions, not Chinese non-compliance. Medium.

**111 – MMCA**
- compliance_flags (DoD 2023): the substance is correct. China cancelled MMCA meetings in Aug 2022 after the Pelosi visit. The exact DoD 2023 document was not checked: **UNVERIFIED** attribution; the claim itself is plausible.
- notes are outdated. MMCA talks **resumed 3–4 Apr 2024 (Honolulu)** and a plenary was held Nov 2024 (Qingdao). Medium. Source: https://www.pacom.mil/Media/News/News-Articles/Article/3731939/
- signed 19 Jan 1998: OK.

**112 – "US–China Agreement on Notifications of Missile Launches and Space Launch Vehicles" (1998)**
- **Entire record LIKELY FABRICATED.** No such US–China agreement exists. The 1998 Clinton–Jiang summit produced a nuclear detargeting pledge, not a launch-notification deal. The US has such agreements with Russia (1988), and China has one with Russia (2009). The US is still asking China for one (e.g. the 2024–25 calls for 24-hour notice after Chinese ICBM/SLBM tests; China resists). Confidence high. Sources: https://fas.org/publication/missile-prelaunch-notification-china/ ; https://nuke.fas.org/control/detarget/news/980614-china-us.htm
- compliance_flags (Arms Control Association 2019, "notifications irregular… largely dormant") is **LIKELY FABRICATED**, because there is no agreement to be dormant.
- The record should be deleted, or replaced with the 1998 detargeting statement (political, non-binding) or the 2008 Defense Telephone Link agreement.

**113 – US–China Mutual Legal Assistance Agreement**
- signed 19 Jun 2000 OK (UNTS No. 50902). Entry into force 2001: UNVERIFIED this session (believed 8 Mar 2001).
- cat: 'Human rights' → law enforcement / criminal justice (e.g. 'Military & security' or a legal category). Medium.
- tags 'extradition' is wrong: there is no US–China extradition treaty and the MLAA does not cover extradition. Medium.
- compliance_flags (DOJ 2022, "US has effectively suspended use of the MLAA for political cases; China used the bilateral channel to seek repatriation… Fox Hunt") is **LIKELY FABRICATED**. No DOJ 2022 finding of this kind was found. DOJ's Fox Hunt prosecutions (2020–23) concern Chinese agents operating *outside* formal channels, which contradicts "used the bilateral channel". High.
- notes "US has largely stopped routing requests through the formal MLAA mechanism": UNVERIFIED. The commentary that does exist (NYU L. Rev. 2019) describes the MLAA's limitations, not a suspension. Source: https://nyulawreview.org/issues/volume-94-number-6/the-past-present-and-future-of-united-states-china-mutual-legal-assistance/

**114 – US–China Joint Announcement on Climate Change (12 Nov 2014)**
- notes: "China committed to peak emissions before 2030" is wrong. Correct: "peak CO2 emissions **around 2030** and make best efforts to peak early", plus a non-fossil share of primary energy of **around 20% by 2030**. US 26–28% below 2005 by 2025: OK. High.
- compliance_flags (IEA 2023, "coal capacity additions… exceeded trajectory implied by 2014 and 2015 commitments") is **LIKELY FABRICATED / UNVERIFIED**. No IEA 2023 finding framed this way was found, and the 2014 pledges set no coal-capacity trajectory. Medium.
- status 'in force' and signed 2014: this is a non-binding political announcement that was not signed. Status should be something like 'political commitment'. Medium.

**115 – US–China CERC**
- Protocol 15 Jul 2009; renewed 2014 for Phase II (2016–2020). "Wound down after 2018": UNVERIFIED. Phase II ran to 2020 and the end date was not found. Low.

**116 – Phase One Agreement**
- compliance_flags[0] (PIIE 2022): the figures are internally inconsistent and wrong. "57%… $228bn of the $502bn" is wrong because $228bn/$502bn = 45%. PIIE's final tracker: China bought **58% of committed goods + services**. For **covered goods** it bought $210.1bn (US export data, 60%) or $235.3bn (Chinese import data, 62%), against a two-year commitment of $352.2bn / $380.5bn. High. Source: https://www.piie.com/research/piie-charts/us-china-phase-one-tracker-chinas-purchases-us-goods
- notes "China met ~57% of goods purchase targets" → about 58% overall (60–62% for covered goods). High.
- compliance_flags[1] (USTR 2022 report: China "met structural reform commitments… more consistently than purchase commitments") is **UNVERIFIED / likely fabricated**. No USTR 2022 report with this finding was found; USTR under Tai stated China had not met its commitments. Medium.
- source_url https://ustr.gov/phase-one is valid.

**117 – US–China BIT negotiations**
- notes: "the US sought ISDS provisions… China refused" is **wrong**. Both sides agreed to include ISDS (announced Mar 2016). The main sticking point was the market-access negative lists, plus SOE and national-security issues. High. Source: https://www.iisd.org/itn/2016/05/16/china-united-states-bit-isds-to-be-included-ongoing-negotiations-on-negative-lists/
- "35+ rounds… continued into Trump's first term… collapsed definitively in 2018": UNVERIFIED and likely overstated. There were 24 rounds by spring 2016 and about 30+ by the end of the Obama administration; talks went dormant from Jan 2017 rather than "collapsing in 2018". Medium.

**118 – Three Joint Communiqués**
- notes "Shanghai Communiqué (Feb 1972, Nixon–Mao)": it was issued 28 Feb 1972 and negotiated and issued by Nixon/Kissinger with Zhou Enlai. Low.
- compliance_flags (State Dept 2022, "August 2022 $1.1bn package"): the $1.1bn Taiwan arms package was announced **2 Sep 2022**, not August. Attributing China's characterisation to "State Dept" is odd but the substance is true. Medium.

**119 – US–China 123 Agreement**
- notes "in force December 1985" omits that it was **not implemented until March 1998**. Congress (P.L. 99-183) required presidential certifications, which Clinton signed 12 Jan 1998. Medium. Source: CRS RL33192 https://www.congress.gov/crs_external_products/RL/PDF/RL33192/RL33192.25.pdf
- notes "verification through IAEA safeguards on Chinese civilian facilities" is inaccurate. The 1985 agreement relied on bilateral exchanges and visits, not IAEA safeguards, and critics in 1998 objected to the lack of full-scope safeguards. Medium. Source: https://www.armscontrol.org/act/1998-01/arms-control-today/clinton-moves-implement-sino-us-nuclear-agreement
- compliance_flags[0] (DOE 2019): the year is wrong. The DOE "U.S. Policy Framework on Civil Nuclear Cooperation with China" is dated **11 Oct 2018** and sets a presumption of denial for Part 810 transfers to CGN. High. Source: https://www.energy.gov/management/articles/pf-2019-03-us-policy-framework-civil-nuclear-cooperation-china
- compliance_flags[1] (NTI 2021, "CNNC subsidiaries added to export control lists"): the verifiable fact is that Commerce added **CGN plus 3 affiliates** to the Entity List on **14 Aug 2019**. The CNNC/2021/NTI attribution is UNVERIFIED. Medium.
- The 2015 renewal (30-year term) is OK.

**120 – US–China cyber commitment (2015)**
- notes "Signed September 25, 2015 at the White House" is wrong. Nothing was signed; it was an oral commitment announced at the Obama–Xi joint press conference and in a White House fact sheet. The 'signed' and 'in force' fields are therefore questionable. Medium.
- compliance_flags[0] (FireEye/Mandiant 2017):
  - FireEye's June 2016 "Redline Drawn" report found the decline began **mid-2014**, *before* the agreement, so "late 2015 and 2016… consistent with initial compliance" is a misstatement.
  - "Rebounded to pre-agreement levels by mid-2017" is UNVERIFIED.
  - "APT10 and related **PLA**-affiliated groups" is wrong: APT10 is tied to the **MSS** Tianjin State Security Bureau.
  - Confidence high on the 2014 start and on the MSS link. Source: https://www.darkreading.com/attacks-breaches/china-still-successfully-hacking-us-but-less
- compliance_flags[1] (DOJ 2018, APT10 indictment of 20 Dec 2018):
  - "45 companies across 12 countries" conflates two figures. Correct: 45+ technology companies plus US agencies in at least **12 US states**, and a separate MSP campaign hitting clients in 12 countries.
  - "Declined extradition" is unsupported, since there is no US–China extradition treaty.
  - Medium. Source: https://www.darkreading.com/network-and-perimeter-security/us-indicts-2-apt-10-members-for-years-long-hacking-campaign/d/d-id/1333535

## OK (no material problems; dates and reservations match UNTC or well-established record)
81, 83, 84, 85, 86, 87, 88, 89, 90, 93, 94, 96, 98, 99, 107

(Records 81–108 still need the systematic entry_into_force fill-in. 81, 83, 84, 86, 94, 96, 98 and 99 were checked from established knowledge rather than fetched page by page this session. 81 (accession 5 Jan 1993), 89, 90 and 107 were confirmed on UNTC.)
