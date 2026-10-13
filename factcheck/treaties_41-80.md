# Fact-check: treaties.js records 41–80

Checked 2026-10-13 against UNTC participant tables (treaties.un.org, source_url of each record).

General findings:
- None of records 41–80 have compliance_flags (all `[]`), so there were no fabricated flags to find.
- No fabricated reservations either. The reservations and notes fields look like scraped UNTC text. The problems are scrape artefacts (footnote numbers, hyphenation, wrong snippet picked), missing reservations, and many dates that were actually acts of the Republic of China (ROC) attributed to the PRC.
- `entry_into_force` is null in every record in this range. It can be filled from UNTC; values are given below where useful.
- All source_url values point to the correct UNTC treaty page.

Abbreviations: ROC = Republic of China (Nationalist government, before 1 Oct 1949 on the mainland, after that on Taiwan). DS = definitive signature (on UNTC this makes the state a party, the same as ratification).

---

## 41 Vienna Convention on Diplomatic Relations (III-3)
- reservations / notes: start with a stray footnote number "19 " and contain a PDF hyphenation artefact "representa- tive". The substance is correct: arts 14 and 16 (nuncios / Holy See) and art 37(2)-(4). Remove the prefix and fix the hyphenation. Confidence: high. https://treaties.un.org/Pages/ViewDetails.aspx?src=TREATY&mtdsg_no=III-3&chapter=3&clang=_en
- entry_into_force: should be 1964 (24 Apr 1964), not null. Note that China's action was accession, 25 Nov 1975, so ratified 1975 is correct. The ROC signed (1961) and ratified (1969), and the PRC declared those acts null and void. Confidence: high. Same URL.

## 42 Vienna Convention on Consular Relations (III-6)
- Dates are correct: accession 2 Jul 1979, no reservations.
- notes: optionally add the PRC declaration that the ROC's 1963 signature is "illegal and null and void". Confidence: high (low priority). https://treaties.un.org/Pages/ViewDetails.aspx?src=TREATY&mtdsg_no=III-6&chapter=3&clang=_en

## 43 UN Convention on Jurisdictional Immunities (III-13)
- treaty_opened: 2004 is the adoption year (UNGA, Dec 2004). It was opened for signature on 17 Jan 2005. China signed 14 Sep 2005, so signing_lag is 0 if counted from opening. Confidence: high. https://treaties.un.org/Pages/ViewDetails.aspx?src=TREATY&mtdsg_no=III-13&chapter=3&clang=_en
- status 'signed only' is correct. The treaty is still not in force (25 parties).

## 44 ICERD (IV-2)
- reservations: currently `['5 , 6 , 7 , 8']`, which are UNTC footnote reference numbers, not a reservation. Correct value: reservation to art 22 (ICJ dispute settlement), plus a declaration that the ROC signature and ratification are null and void. Confidence: high. https://treaties.un.org/Pages/ViewDetails.aspx?src=TREATY&mtdsg_no=IV-2&chapter=4&clang=_en
- notes: begins with the junk "5 , 6 , 7 , 8 | 22 ...". Clean it up. Confidence: high.
- entry_into_force: 1969 (4 Jan 1969). Accession 29 Dec 1981 is correct.
- reporting_status 'late': UNVERIFIED. The last review found was 2018 (CERD/C/CHN/CO/14-17). I could not confirm whether the 18th-19th reports have been filed. https://ungeneva.org/en/news-media/meeting-summary/2018/08/committee-elimination-racial-discrimination-reviews-report-china

## 45 Apartheid Convention (IV-7)
- OK: accession 18 Apr 1983. entry_into_force could be set to 1976.

## 46 International Convention against Apartheid in Sports (IV-10)
- Correct: signed 21 Oct 1987, no ratification. UNTC opening is 10 Dec 1985. OK.

## 47 OPAC (IV-11-b)
- Correct: signed 15 Mar 2001, ratified 20 Feb 2008, declaration of minimum voluntary recruitment age 17. OK. Note that the declaration is labelled as a reservation in the field.

## 48 OPSC (IV-11-c)
- era: ratified 3 Dec 2002, after Hu became General Secretary (15 Nov 2002) but before he became President (Mar 2003). This is a borderline coding choice. Confidence: low.
- reservations: [] is technically right. UNTC records a note that the Protocol does not apply to Hong Kong SAR until legislation is enacted, and that it does apply to Macao. Optional note. Confidence: high.

## 49 Refugee Convention (V-2)
- reservations: the text is correct (latter half of art 14; art 16(3)), but it contains tab characters and "(3)." formatting junk. Accession 24 Sep 1982 is correct. Confidence: high. https://treaties.un.org/Pages/ViewDetails.aspx?src=TREATY&mtdsg_no=V-2&chapter=5&clang=_en

## 50 Convention relating to the Status of Stateless Persons (V-3)
- status: currently 'in force'. China is not a party: it never signed or acceded. UNTC lists China only because in 1997 it notified that the Convention continues to apply to Hong Kong SAR, with a declaration that art 25(1)-(2) will not be given effect there. Correct value: not party (applies to HKSAR only). Confidence: high. https://treaties.un.org/Pages/ViewDetails.aspx?src=TREATY&mtdsg_no=V-3&chapter=5&clang=_en
- by: true contradicts China's non-party status. notes should explain the HKSAR-only application. Confidence: high.

## 51 1946 Protocol amending narcotics agreements (VI-1)
- era: 'Mao (1949–76)' is wrong. This was a definitive signature on 11 Dec 1946 by the ROC government, before the PRC existed. Correct value: pre-1949 (ROC). Confidence: high. https://treaties.un.org/Pages/ViewDetails.aspx?src=TREATY&mtdsg_no=VI-1&chapter=6&clang=_en
- treaty_opened: null; should be 1946. entry_into_force: 1946.
- cat: 'Human rights' for drug-control treaties is a questionable coding. This applies to records 51–58. Confidence: low.

## 52 1931 Narcotic Drugs Limitation Convention as amended (VI-7)
- status / signed: currently 'signed only' with signed 1946. Wrong: the 11 Dec 1946 entry is in the column for definitive signature of the Protocol / ratification of the Convention, so China is listed as a party, not a signatory. Correct value: party (ROC, 1946). Confidence: high. https://treaties.un.org/Pages/ViewDetails.aspx?src=TREATY&mtdsg_no=VI-7&chapter=6&clang=_en
- signing_lag_years: 15 is meaningless; it measures the 1931 Convention against the 1946 Protocol action.
- era: Mao is wrong; this was a pre-1949 ROC act. Confidence: high.
- entry_into_force: 1947 (21 Nov 1947, amended version).

## 53 1936 Illicit Traffic in Dangerous Drugs Convention as amended (VI-11)
- status / signed: same error as 52. The 11 Dec 1946 entry is a definitive signature of the Protocol / acceptance, so China is a party, not 'signed only'. Confidence: high. https://treaties.un.org/Pages/ViewDetails.aspx?src=TREATY&mtdsg_no=VI-11&chapter=6&clang=_en
- era: should be pre-1949 ROC. Confidence: high.
- signing_lag_years: 10 is meaningless.

## 54 1948 Protocol (synthetic drugs) (VI-13)
- era: should be pre-1949 ROC. This was a definitive signature on 19 Nov 1948. Confidence: high. https://treaties.un.org/Pages/ViewDetails.aspx?src=TREATY&mtdsg_no=VI-13&chapter=6&clang=_en
- entry_into_force: 1949 (1 Dec 1949).

## 55 1953 Opium Protocol (VI-14)
- era / attribution: the ratification on 25 May 1954 (and signature on 18 Sep 1953) were acts of the ROC authorities on Taiwan, not the PRC. Several states objected on that basis. Coding this as 'Mao (1949–76)' attributes it to the PRC. Correct value: ROC (Taiwan) act, not attributable to the PRC. Confidence: high. https://treaties.un.org/Pages/ViewDetails.aspx?src=TREATY&mtdsg_no=VI-14&chapter=6&clang=_en
- status: 'in force' is misleading. UNTC marks the Protocol as superseded: under art 44(1) of the 1961 Single Convention it is terminated and replaced as between parties to that Convention, and China is one (record 57). Confidence: high.
- signed: null; should be 1953 (ROC).

## 56 Convention on Psychotropic Substances (VI-16)
- Correct: accession 23 Aug 1985. The reservation text (art 31(2), plus the declaration on Taiwan's signature) is accurate. Tab characters in the string. OK.

## 57 Single Convention 1961 as amended (VI-18)
- reservations: [] is missing China's reservation to art 48(2) (ICJ dispute settlement), which also extends to the HKSAR. UNTC's VI-18 page cross-refers to VI-16 for the text. Correct value: "Reservation to article 48, paragraph 2". Confidence: high. https://treaties.un.org/Pages/ViewDetails.aspx?src=TREATY&mtdsg_no=VI-18&chapter=6&clang=_en
- treaty_opened 1975 is the entry into force of the amended version (8 Aug 1975). That is acceptable, but entry_into_force should also be 1975. Accession 23 Aug 1985 is correct.

## 58 1988 Drug Trafficking Convention (VI-19)
- Correct: signed 20 Dec 1988, ratified 25 Oct 1989, art 32(4) declaration (not bound by art 32(2)-(3)). OK. The notes snippet about the 2012 extradition authority is accurate. entry_into_force: 1990.

## 59 1947 Protocol on Traffic in Women and Children (VII-1)
- era: should be pre-1949 ROC. This was a definitive signature on 12 Nov 1947. Confidence: high. https://treaties.un.org/Pages/ViewDetails.aspx?src=TREATY&mtdsg_no=VII-1&chapter=7&clang=_en
- treaty_opened: should be 1947.

## 60 1921 Traffic in Women and Children Convention as amended (VII-2)
- status: 'signed only' is wrong. China's 12 Nov 1947 entry is a definitive signature of the Protocol, so China is a party to the amended Convention. Correct value: party (ROC, 1947). Confidence: high. https://treaties.un.org/Pages/ViewDetails.aspx?src=TREATY&mtdsg_no=VII-2&chapter=7&clang=_en
- era: should be pre-1949 ROC. Confidence: high.

## 61 1949 Protocol amending White Slave Traffic instruments (VII-6)
- era: Mao is wrong. The definitive signature was on 4 May 1949, by the ROC, before the PRC was founded on 1 Oct 1949. Confidence: high. https://treaties.un.org/Pages/ViewDetails.aspx?src=TREATY&mtdsg_no=VII-6&chapter=7&clang=_en

## 62 1904 White Slave Traffic Agreement as amended (VII-7)
- status: 'signed only' is wrong. The 4 May 1949 definitive signature of the Protocol makes China a party. Correct value: party (ROC, 1949). Confidence: high. https://treaties.un.org/Pages/ViewDetails.aspx?src=TREATY&mtdsg_no=VII-7&chapter=7&clang=_en
- era: should be pre-1949 ROC. Confidence: high.

## 63 1947 Protocol on Obscene Publications (VIII-1)
- era: should be pre-1949 ROC (definitive signature 12 Nov 1947). Confidence: high. Applied to HKSAR from 1997. https://treaties.un.org/Pages/ViewDetails.aspx?src=TREATY&mtdsg_no=VIII-1&chapter=8&clang=_en

## 64 1923 Obscene Publications Convention as amended (VIII-2)
- status: 'signed only' is wrong. Correct value: party, through the definitive signature of the Protocol on 12 Nov 1947. Confidence: high. https://treaties.un.org/Pages/ViewDetails.aspx?src=TREATY&mtdsg_no=VIII-2&chapter=8&clang=_en
- era: should be pre-1949 ROC. Confidence: high.

## 65 1949 Protocol on Obscene Publications Agreement (VIII-4)
- era: should be pre-1949 ROC (definitive signature 4 May 1949). Confidence: high. https://treaties.un.org/Pages/ViewDetails.aspx?src=TREATY&mtdsg_no=VIII-4&chapter=8&clang=_en

## 66 1910 Obscene Publications Agreement as amended (VIII-5)
- status: 'signed only' is wrong. Correct value: party, through definitive signature on 4 May 1949. Confidence: high. https://treaties.un.org/Pages/ViewDetails.aspx?src=TREATY&mtdsg_no=VIII-5&chapter=8&clang=_en
- era: should be pre-1949 ROC. Confidence: high.

## 67 International Vaccine Institute Agreement (IX-3)
- Correct: signed 13 Jan 1997, approval 18 Aug 1997. Opened 28 Oct 1996; in force 29 May 1997. OK. "Human rights" category is questionable (low).

## 68 WHO FCTC (IX-4)
- Correct: signed 10 Nov 2003, ratified 11 Oct 2005, art 16(5) vending-machine declaration. OK. entry_into_force: 2005.

## 69 Protocol to Eliminate Illicit Trade in Tobacco Products (IX-4-a)
- treaty_opened: null; should be 2013 (opened 10 Jan 2013, the same day China signed). signing_lag_years should be 0. Confidence: high. https://treaties.un.org/Pages/ViewDetails.aspx?src=TREATY&mtdsg_no=IX-4-a&chapter=9&clang=_en
- entry_into_force: 2018 (25 Sep 2018). China has still not ratified, so 'signed only' is correct.

## 70 IFAD Agreement (X-8)
- Correct: accession 15 Jan 1980. Opened 20 Dec 1976; in force 30 Nov 1977. OK.

## 71 CISG (X-10)
- reservations: the field contains only the 2022 Hong Kong declaration, with a stray "12 " footnote prefix. It omits China's operative declaration made on approval in 1986: not bound by art 1(1)(b). That declaration remains in force; only the art 11 / written-form part was withdrawn, on 16 Jan 2013. Correct value: "Declaration: not bound by art 1(1)(b) (art 11 written-form declaration withdrawn 16 Jan 2013); 2022: art 1(1)(b) declaration not applicable to HKSAR". Confidence: high. https://treaties.un.org/Pages/ViewDetails.aspx?src=TREATY&mtdsg_no=X-10&chapter=10&clang=_en
- notes: the same stray "12 " prefix. ratified 1986 is correct, but the act was approval (AA), not ratification. entry_into_force: 1988.

## 72 Charter of the Asian and Pacific Development Centre (X-11)
- Correct: definitive signature 18 Feb 1983 (counts as consent; no separate ratification). treaty_opened: null; could be 1982. Confidence: high.
- status 'in force': UNVERIFIED. The APDC had a funding crisis in 2002 and may no longer operate; I could not confirm whether it was dissolved. https://treaties.un.org/Pages/ViewDetails.aspx?src=TREATY&mtdsg_no=X-11&chapter=10&clang=_en

## 73 South Centre Agreement (X-14)
- Correct: accession 4 May 1995; in force 30 Jul 1995. OK.

## 74 UN Electronic Communications Convention (X-18)
- treaty_opened: 2005 is the adoption year. It was opened for signature 16 Jan 2006. China signed 6 Jul 2006, so the lag is 0. Confidence: high. https://treaties.un.org/Pages/ViewDetails.aspx?src=TREATY&mtdsg_no=X-18&chapter=10&clang=_en
- entry_into_force: 2013 (1 Mar 2013). Not ratified by China, so 'signed only' is correct.

## 75 Cross-border Paperless Trade Framework Agreement (X-20)
- Dates correct: signed 29 Aug 2017, approval (AA) 22 Nov 2020. treaty_opened: null; should be 2016 (open 1 Oct 2016). signing_lag_years: null; should be 1. Confidence: high. https://treaties.un.org/Pages/ViewDetails.aspx?src=TREATY&mtdsg_no=X-20&chapter=10&clang=_en
- entry_into_force: 2021 (20 Feb 2021).

## 76 Convention on International Effects of Judicial Sales of Ships (X-21)
- treaty_opened: 2022 is the adoption date (7 Dec 2022). It was opened for signature in Beijing on 5 Sep 2023, the day China signed, so signing_lag_years should be 0, not 1. Confidence: high. https://treaties.un.org/Pages/ViewDetails.aspx?src=TREATY&mtdsg_no=X-21&chapter=10&clang=_en
- entry_into_force: null; should be 2026. It entered into force on 17 Feb 2026 (5 parties; China not among them, so 'signed only' remains correct for China). Confidence: high.
- notes: worth noting that this is the "Beijing Convention" and that China was host and sponsor, yet has not ratified. Confidence: high.

## 77 Customs Convention on Containers 1972 (XI-A-15)
- Correct: accession 22 Jan 1986; in force 6 Dec 1975. OK. cat 'Maritime & territory' for a customs convention is questionable (low).

## 78 TIR Convention (XI-A-16)
- Correct: accession 5 Jul 2016, art 57(2)-(6) reservation verbatim. Missing the declaration that the Convention does not apply to Hong Kong SAR / Macao SAR pending further notice (medium significance). Confidence: high. https://treaties.un.org/Pages/ViewDetails.aspx?src=TREATY&mtdsg_no=XI-A-16&chapter=11&clang=_en
- treaty_opened 1975 is the adoption year; signature was open in 1976. Minor. entry_into_force: 1978. cat 'Maritime & territory' is a questionable coding (low).

## 79 IMO Convention (XII-1)
- reservations: the field holds the full 1997 Hong Kong continuity letter, which is not a reservation. China made no reservations. The text is also corrupted ("Great Britaid Norn Ireland" should be "Great Britain and Northern Ireland"). Correct value: [] (move a one-line HKSAR note into notes). Confidence: high. https://treaties.un.org/Pages/ViewDetails.aspx?src=TREATY&mtdsg_no=XII-1&chapter=12&clang=_en
- notes: should mention the PRC acceptance on 1 Mar 1973, which is correct, and the earlier ROC acceptance of 1 Jul 1958, which the PRC declared null and void. entry_into_force: 1958.

## 80 Liner Conferences Code (XII-6)
- Correct: accession 23 Sep 1980; the joint-shipping-services text is verbatim. UNTC shows it as a declaration on the main page but calls it a "reservation" in note 4, so the label is acceptable. entry_into_force: 1983. OK.

---

OK (no substantive problems): 42, 45, 46, 47, 56, 58, 67, 68, 70, 73, 77, 80

UNVERIFIED: 44 reporting_status 'late'; 72 current status of the APDC (whether it was dissolved).
