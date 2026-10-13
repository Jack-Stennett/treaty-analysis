# Fact-check: us_treaties.js, norway_treaties.js, dprk_treaties.js (as of 2026-10-13)

Main source: the UN Treaty Collection (UNTC) status page for each treaty. The URL pattern is
`https://treaties.un.org/Pages/ViewDetails.aspx?src=TREATY&mtdsg_no=<NO>&chapter=<CH>&clang=_en`.
Each item below gives its UNTC number as [UNTC <NO>]. All UNTC pages were fetched on 2026-10-13.
"Not listed" means the state has no row in the UNTC participant table: no signature and no ratification.

## us_treaties.js

Structural problem: ids 109–120 appear twice in the object (duplicate keys). The later entry silently overrides the earlier one.

- **2** Geneva Conventions: the note says "Ratified … (1956)". The correct date is ratified 2 Aug 1955 (in force for the US 2 Feb 1956). Confidence high. Source: https://guide-humanitarian-law.org/countries/united-states
- **9** UNCLOS: the status is `signed-only` with "Clinton signed 1994". It should be `not-signed`. The US never signed UNCLOS itself, and UNTC XXI-6 has no US row. The US signed only the Part XI Implementation Agreement (29 Jul 1994) [UNTC XXI-6-a]. "34+ Republican senators have consistently pledged opposition" is overstated: 34 GOP senators publicly opposed it in 2012, the number needed to block, but "34+" and "consistently" are unsupported. Confidence high for status, medium for the senator figure.
- **10** CITES: the note says "Ratified 1973". The US signed in 1973 and ratified on 14 Jan 1974 (it was the first state to ratify). Confidence high. Source: https://www.animallaw.info/treaty/cites-party-states
- **12** UNFCCC: the status `in-force` is still technically correct, but the note omits the pending withdrawal. The 7 Jan 2026 presidential memorandum ordered withdrawal. The US notified the UN on 27 Feb 2026, and the withdrawal takes effect 27 Feb 2027. The note must say so. Confidence high. Sources: [UNTC XXVII-7] note 9; https://www.govinfo.gov/content/pkg/DCPD-202600010/html/DCPD-202600010.htm
- **16** ICESCR: the note says "Carter signed 1979. Never submitted to Senate." Carter signed on 5 Oct 1977 [UNTC IV-3] and transmitted it to the Senate in Feb 1978, together with the ICCPR, CERD and ACHR. Confidence high.
- **22** IHR: the note says "Bound through WHO membership." It is outdated. US withdrawal from WHO took effect 22 Jan 2026, and the US formally rejected the 2024 IHR amendments on 18 Jul 2025. Whether IHR (2005) still binds the US is UNVERIFIED; Art. 64 allows non-WHO states. The note must be rewritten at minimum. Confidence high on the facts. Source: https://hhs.gov/press-room/secretary-kennedy-rubio-reject-ihr-amendments-joint-statement.html
- **24** ATT: the status is `withdrew`. It should be `signed-only` (signature repudiated) or `not-signed`. The US was never a party and so cannot "withdraw". On 18 Jul 2019 it notified the UN that it "does not intend to become a party … no legal obligations arising from its signature". Confidence high. Source: [UNTC XXVI-8] US note 3.
- **25** TPNW: the note says "94 states party as of 2026". UNTC shows 75 states parties; the ~94–99 figure is the signatory count. Confidence high. Source: [UNTC XXVI-9]
- **26** CCM: the note says "111 states party". UNTC currently lists 112. Confidence medium. Source: [UNTC XXVI-6]
- **27** Ottawa: the note says "164 states party". It is now 162. Estonia, Latvia and Lithuania withdrew effective 27 Dec 2025, Finland effective 10 Jan 2026, and Poland effective 20 Feb 2026. Confidence high. Source: [UNTC XXVI-5]
- **31** Stockholm: the note says "185 states party". UNTC lists 186. Confidence medium. Source: [UNTC XXVII-15]
- **35** Moon Agreement: the note says "Only 18 states party". There are 17, because Saudi Arabia's withdrawal took effect 5 Jan 2024. Confidence high. Source: [UNTC XXIV-2]
- **40, 106** Nagoya/Cartagena: the status is `n/a`, which the file defines as bilateral/regional. It should be `not-signed`. Confidence medium; this is a taxonomy issue.
- **49** 1951 Refugee Convention: the status is `in-force`. The US is not a party to the 1951 Convention [UNTC V-2]. It acceded only to the 1967 Protocol (1 Nov 1968) [UNTC V-5]. Use status `not-signed`, or label the entry explicitly as a Protocol-only party. Confidence high on the facts.
- **53** 1936 Illicit Traffic Convention: the status is `in-force`. It should be `not-signed`, because the US is not listed [UNTC VI-11]. Confidence high.
- **55** 1953 Opium Protocol: the status is `not-signed`. It should be `in-force`: signed 23 Jun 1953, ratified 18 Feb 1955. Confidence high. Source: [UNTC VI-14]
- **59** 1947 Protocol (Traffic in Women): the status is `in-force`. It should be `not-signed`, because the US is not listed [UNTC VII-1]. Confidence high.
- **60** 1921 Convention as amended: the status is `in-force` with the note "US was party to the original 1921 convention". Both are false. The US is not listed [UNTC VII-2, VII-3]. It should be `not-signed`. Confidence high.
- **63** 1947 Protocol (Obscene Publications): the status is `in-force`. It should be `not-signed`, because the US is not listed [UNTC VIII-1]. Confidence high.
- **76** Judicial Sales of Ships: the status is `signed-only` ("Signed 2023"). It should be `not-signed`, because the US is not listed [UNTC X-21]. Confidence high.
- **78** TIR Convention: the status is `not-signed`. It should be `in-force`; the US acceded 18 Sep 1981. Confidence high. Source: [UNTC XI-A-16]
- **81** Phonograms: the note says "Ratified 1974". The US ratified on 26 Nov 1973; this is minor. Confidence high. Source: [UNTC XIV-4]
- **82** Nationality of Married Women: the status is `in-force` ("Ratified 1958"). It should be `not-signed`, because the US is not listed [UNTC XVI-2]. Confidence high.
- **85** Safety of UN Personnel: the status is `in-force` ("Ratified 1999"). It should be `signed-only`: signed 19 Dec 1994, never ratified. Confidence high. Source: [UNTC XVIII-8]
- **89** Firearms Protocol: the status is `in-force` ("Ratified 2002"). It should be `not-signed`, because the US is not listed [UNTC XVIII-12-c]. Confidence high.
- **91** Cybercrime Convention: the status `not-signed` is OK [UNTC XVIII-16]. The stated reason ("citing civil liberties and human rights concerns") is UNVERIFIED.
- **92** Common Fund for Commodities: the status is `not-signed`. It should be `signed-only` (signed 5 Nov 1980, never ratified). Confidence high. Source: [UNTC XIX-21]
- **93** International Copper Study Group: the status is `n/a`. It should be `in-force`. The US accepted on 11 Nov 1994, UNTC lists no withdrawal, and ICSG is not on the Jan 2026 withdrawal list. Confidence high. Source: [UNTC XIX-35]
- **98** VCLT: the status is `not-signed`, but the note itself says "Signed 1970". It should be `signed-only` (signed 24 Apr 1970). Confidence high. Source: [UNTC XXIII-1]
- **102** ENMOD: the note says "Ratified 1979". The correct date is 17 Jan 1980. Confidence high. Source: [UNTC XXVI-1]
- **104** Vienna Ozone Convention: the note says "Ratified 1988". The correct date is 27 Aug 1986. Confidence high. Source: [UNTC XXVII-2]
- **68** FCTC: the status is OK. "183 states party" includes the EU (182 states). The claim "tobacco industry lobbying cited as primary obstacle" is UNVERIFIED editorial.
- **14** Paris: OK. Notice was given 27 Jan 2025 and took effect 27 Jan 2026 [UNTC XXVII-7-d]. Optional clarification: "notified 27 Jan 2025, effective 27 Jan 2026".
- **95** BBNJ: OK. The transmittal to the Senate on 18 Dec 2024 (Treaty Doc 118-2) is confirmed, and the treaty entered into force 17 Jan 2026. Source: https://www.everycrsreport.com/files/2026-01-20_IF12283_ae2dc736b08722df0c3e55e8f7c662694f6b5c70.html

**OK:** 1, 3, 4, 5, 6, 7, 8, 11, 13, 14, 15, 17, 18, 19, 20, 21, 23, 28, 29, 30, 32, 33, 34, 36, 37, 38, 39, 41, 42, 43, 44, 45, 46, 47, 48, 50, 51, 52, 54, 56, 57, 58, 61, 62, 64, 65, 66, 67, 69, 70, 71, 72, 73, 74, 75, 77, 79, 80, 83, 84, 86, 87, 88, 90, 94, 95, 96, 97, 99, 100, 101, 103, 105, 107, 108, 109–120

## norway_treaties.js

Header: "It ratified UNCLOS early." This is wrong; Norway ratified in 1996, after UNCLOS entered into force in 1994. Confidence low; minor.

- **6** CWC: the note says "Ratified 1997". The correct date is 7 Apr 1994. Confidence high. Source: [UNTC XXVI-3]
- **7** CTBT: the note says entry into force is pending "8 Annex-2 states". It is now 9, because Russia revoked its ratification in Nov 2023; UNTC shows Russia with signature only. Confidence high. Source: [UNTC XXVI-4]
- **21** WTO: the note says "Member via EEA/EFTA arrangements". This is misleading. Norway is a WTO member in its own right (an original member since 1995); the EEA is irrelevant. Confidence high.
- **34** Outer Space Treaty: the note says "Ratified 1967". The correct year is 1969. Confidence medium; sources give 6 Jun or 1 Jul 1969. Source: https://practiceguides.chambers.com/practice-guides/space-law-2026/norway
- **36** WIPO Copyright Treaty: the status is `in-force`. Norway is not listed on WIPO Lex, neither as party nor as signatory. It should be `not-signed`. Confidence medium-high. Source: https://www.wipo.int/wipolex/en/treaties/parties/16
- **40** Nagoya: the note says "Ratified 2014". The correct date is 1 Oct 2013. Confidence high. Source: [UNTC XXVII-8-b]
- **45** Apartheid Convention: the status is `in-force`. It should be `not-signed`, because Norway is not listed [UNTC IV-7]. Confidence high.
- **46** Apartheid in Sports: the status is `in-force`. It should be `not-signed`, because Norway is not listed [UNTC IV-10]. Confidence high.
- **53** 1936 Illicit Traffic Convention: the status is `in-force`. It should be `not-signed`, because Norway is not listed [UNTC VI-11]. Confidence high.
- **55** 1953 Opium Protocol: the status is `in-force`. It should be `not-signed`, because Norway is not listed [UNTC VI-14]. Confidence high.
- **67** IVI: the status is `in-force` with the note "founding member". Both are false; Norway is not listed [UNTC IX-3]. It should be `not-signed`. Confidence high.
- **76** Judicial Sales of Ships: the status is `signed-only` ("Signed 2023"). It should be `not-signed`, because Norway is not listed [UNTC X-21]. Confidence high.
- **77** Containers Convention 1972: the status is `in-force`. It should be `not-signed`, because Norway is not listed [UNTC XI-A-15]. Confidence medium-high.
- **80** Liner Code: the status is `not-signed`. It should be `in-force`; Norway acceded 28 Jun 1985. Confidence high. Source: [UNTC XII-6]
- **91** Cybercrime Convention: the status is `not-signed`. It should be `signed-only`; Norway signed 25 Sep 2026. Not signing at Hanoi in 2025 is consistent with UNTC. The "civil liberties concerns" rationale is UNVERIFIED. Confidence high. Source: [UNTC XVIII-16]
- **93** Copper Study Group: the status is `n/a`. It should be `withdrew`; Norway was a member and withdrew effective 12 Sep 2000. Confidence high. Source: [UNTC XIX-35] note 1
- **97** Singapore Mediation Convention: the status is `in-force` ("Ratified 2021"). It should be `not-signed`, because Norway is not listed [UNTC XXII-4]. Confidence high.
- **98** VCLT: the status is `in-force` ("Ratified 1971"). It should be `not-signed`; Norway is not a party [UNTC XXIII-1]. Confidence high.

**OK:** 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 35, 37, 38, 39, 41, 42, 43, 44, 47, 48, 49, 50, 51, 52, 54, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 68, 69, 70, 71, 72, 73, 74, 75, 78, 79, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 92, 94, 95, 96, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109–120

## dprk_treaties.js

- **2** Geneva Conventions: the status is OK (acceded 1957). The note says the 2014 COI documented "systematic violations". That is imprecise; the COI found human-rights violations and crimes against humanity, not specifically Geneva Conventions breaches. Confidence medium; minor.
- **4** NPT: OK. The effective date is disputed: the DPRK claimed 11 Jan 2003, others compute 10 Apr 2003, and the NPT parties never formally ruled. Consider adding "(withdrawal legally contested)". Confidence low.
- **5** BWC: the status is `not-signed` ("Never joined"). It should be `in-force`; the DPRK acceded 13 Mar 1987. Confidence high. Sources: https://www.unrcpd.org/?p=473 ; https://northkoreaintheworld.org/node/397
- **9** UNCLOS: the status is `in-force` ("Ratified 1982"). It should be `signed-only`: signed 10 Dec 1982, never ratified. Confidence high. Source: [UNTC XXI-6]
- **20** CRPD: the status is `not-signed`. It should be `in-force`: signed 3 Jul 2013, ratified 6 Dec 2016. Confidence high. Source: [UNTC IV-15]
- **28** Basel: the note says "Ratified 1994". The correct date is acceded 10 Jul 2008. Confidence high. Source: [UNTC XXVII-3]
- **30** Minamata: the status is `signed-only`. It should be `not-signed`, because the DPRK is not listed [UNTC XXVII-17]. Confidence high.
- **31** Stockholm: the note says "Ratified 2001". The correct date is acceded 26 Aug 2002. Confidence high. Source: [UNTC XXVII-15]
- **32** UNCAC: the status is `in-force` ("Ratified 2007"). It should be `not-signed`, because the DPRK is not listed [UNTC XVIII-14]. Confidence high.
- **33** UNTOC: the status is `not-signed`. It should be `in-force`; the DPRK acceded 17 Jun 2016. Confidence high. Source: [UNTC XVIII-12]
- **34** Outer Space Treaty: the note says "Ratified 1967". The correct date is acceded 5 Mar 2009. Confidence high. Source: https://www.38north.org/articles/affiliates/north-korea-leadership-watch/27005/
- **36** WIPO Copyright Treaty: the status is `not-signed`. It should be `in-force`; the DPRK acceded 30 Jan 2024 and it entered into force 30 Apr 2024. Confidence high. Source: https://www.wipo.int/wipolex/en/treaties/parties/16
- **37** Antarctic Treaty: the status is `not-signed`. It should be `in-force` as a non-consultative party; the DPRK acceded 21 Jan 1987. Confidence high. Source: https://northkoreaintheworld.org/node/397
- **40** Nagoya: the note says "Ratified 2003". That is impossible, since the protocol was adopted in 2010. The correct date is acceded 1 Oct 2019. Confidence high. Source: [UNTC XXVII-8-b]
- **44** CERD: the status is `in-force` ("Ratified 1981"). It should be `not-signed`, because the DPRK is not listed [UNTC IV-2]. Confidence high.
- **45** Apartheid Convention: the status is `in-force` ("Ratified 1981"). It should be `not-signed`, because the DPRK is not listed [UNTC IV-7]. Confidence high.
- **46** Apartheid in Sports: the status is `in-force`. It should be `not-signed`, because the DPRK is not listed [UNTC IV-10]. Confidence high.
- **47** OPAC: the status is `signed-only`. It should be `not-signed`, because the DPRK is not listed at all [UNTC IV-11-b]. Confidence high.
- **48** OPSC: the status is `signed-only`. It should be `in-force`: signed 9 Sep 2014, ratified 10 Nov 2014. Confidence high. Source: [UNTC IV-11-c]
- **51** 1946 Narcotics Protocol: the status is `in-force`. It should be `not-signed`, because the DPRK is not listed [UNTC VI-1]. Confidence high.
- **58** 1988 Drugs Convention: the note says "Ratified 1989". The correct date is acceded 19 Mar 2007; 56 and 57 were acceded the same day. Confidence high. Source: [UNTC VI-19]
- **71** CISG: the status is `not-signed`. It should be `in-force`; the DPRK acceded 27 Mar 2019. Confidence high. Source: [UNTC X-10]
- **73** South Centre: the status is `n/a`. The DPRK is a member (approved 31 May 1995), so it should be `in-force`. Confidence high. Source: [UNTC X-14]
- **83** Hostages Convention: the status is `not-signed`. It should be `in-force`; the DPRK acceded 12 Nov 2001. Confidence high. Source: [UNTC XVIII-5]
- **85** UN Personnel Convention: the status is `not-signed`. It should be `in-force`; the DPRK acceded 8 Oct 2003. Confidence high. Source: [UNTC XVIII-8]
- **87** Terrorism Financing: the status is `not-signed`. It should be `in-force`: signed 12 Nov 2001, ratified 25 Jul 2013. Confidence high. Source: [UNTC XVIII-11]
- **91** Cybercrime Convention: the status is `not-signed`. It should be `signed-only`; the DPRK signed 25 Oct 2025 at Hanoi. Confidence high. Source: [UNTC XVIII-16]
- **95** BBNJ: the status is `not-signed`. The DPRK acceded 6 Oct 2026, and the treaty enters into force for it ~5 Nov 2026. The status should be `in-force`, or "acceded; in force Nov 2026". Confidence high. Source: [UNTC XXI-10]
- **96** New York Arbitration Convention: the status is `in-force` ("Ratified 1985"). It should be `not-signed`, because the DPRK is not listed [UNTC XXII-1]. Confidence high.
- **98** VCLT: the status is `in-force`. It should be `not-signed`, because the DPRK is not listed [UNTC XXIII-1]. Confidence high.
- **99** Registration Convention: the status is `not-signed`. It should be `in-force`; the DPRK acceded 10 Mar 2009. Confidence high. Source: [UNTC XXIV-1]
- **102** ENMOD: the status is `not-signed`. It should be `in-force`; the DPRK acceded 8 Nov 1984. Confidence high. Source: [UNTC XXVI-1]
- **104** Vienna Ozone Convention: the note says "Ratified 1994". The correct date is acceded 24 Jan 1995. Confidence high. Source: [UNTC XXVII-2]
- **105** Kigali Amendment: the status is `not-signed` ("Has not ratified"). It should be `in-force`; the DPRK accepted 21 Sep 2017. Confidence high. Source: [UNTC XXVII-2-f]
- **106** Cartagena: the note says "Ratified 2002". The correct dates are signed 20 Apr 2001, ratified 29 Jul 2003. Confidence high. Source: [UNTC XXVII-8-a]
- **108** Rotterdam: the status is `not-signed`. It should be `in-force`; the DPRK acceded 6 Feb 2004. Confidence high. Source: [UNTC XXVII-14]
- **100, 101** (Asia-Pacific Telecommunity, AIBD): `n/a` is questionable, because the DPRK is in the region and may be a member. UNVERIFIED.
- **10** CITES: `not-signed` was not checked against the CITES party list. It is believed correct but UNVERIFIED.

**OK:** 1, 3, 4, 6, 7, 8, 11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 23, 24, 25, 26, 27, 29, 35, 38, 39, 41, 42, 43, 49, 50, 52, 53, 54, 55, 56, 57, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 72, 74, 75, 76, 77, 78, 79, 80, 81, 82, 84, 86, 88, 89, 90, 92, 93, 94, 97, 103, 107, 109–120
