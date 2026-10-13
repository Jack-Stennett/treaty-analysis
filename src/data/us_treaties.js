/**
 * US treaty status for each instrument in the TREATIES array.
 * Keyed by treaty ID.
 *
 * status values:
 *   'in-force'    – signed, ratified, in effect for the US
 *   'signed-only' – signed but Senate has not given advice and consent
 *   'not-signed'  – US never signed
 *   'withdrew'    – US was party, then formally withdrew
 *   'n/a'         – bilateral or regional treaty where US participation is not applicable
 *
 * Sources: UN Treaty Collection (treaties.un.org), US State Dept., Congress.gov,
 * Arms Control Association, Wikipedia "List of treaties unsigned or unratified by the United States"
 */
export const US_STATUS = {
  // ── Bilateral / regional – not applicable ─────────────────────────────────
  1:   { status: 'n/a',         notes: 'Bilateral China–Soviet treaty; US not a party.' },
  23:  { status: 'n/a',         notes: 'Bilateral UK–China instrument; US not a party.' },
  38:  { status: 'n/a',         notes: 'RCEP — US not a member; withdrew from TPP (precursor) in 2017.' },
  39:  { status: 'n/a',         notes: 'Shanghai Cooperation Organisation — US not a member.' },
  72:  { status: 'n/a',         notes: 'Asian and Pacific Development Centre — regional body.' },
  73:  { status: 'n/a',         notes: 'South Centre — developing-country inter-governmental organisation.' },
  75:  { status: 'n/a',         notes: 'Asia-Pacific Cross-border Paperless Trade Framework — regional.' },
  93:  { status: 'n/a',         notes: 'International Copper Study Group — commodity body.' },
  100: { status: 'n/a',         notes: 'Asia-Pacific Telecommunity — regional body.' },
  101: { status: 'n/a',         notes: 'Asia-Pacific Institute for Broadcasting Development — regional body.' },
  109: { status: 'n/a',         notes: 'US–China bilateral trade agreement; US is a party by definition.' },
  110: { status: 'n/a',         notes: 'US–China S&T cooperation agreement; US is a party.' },
  111: { status: 'n/a',         notes: 'MMCA — US–China bilateral; US is a party.' },
  112: { status: 'n/a',         notes: 'US–China missile launch notifications — US is a party.' },
  113: { status: 'n/a',         notes: 'US–China MLAA — US is a party.' },
  114: { status: 'n/a',         notes: 'US–China Joint Announcement on Climate Change — US is a party.' },
  115: { status: 'n/a',         notes: 'US–China CERC Agreement — lapsed.' },
  116: { status: 'n/a',         notes: 'US–China Phase One Trade Agreement — US is a party.' },
  117: { status: 'n/a',         notes: 'US–China BIT — negotiations stalled; never concluded.' },
  118: { status: 'n/a',         notes: 'US–China Three Joint Communiqués — US is a party.' },
  119: { status: 'n/a',         notes: 'US–China 123 Agreement — US is a party.' },
  120: { status: 'n/a',         notes: 'US–China Cyber Agreement — US is a party.' },

  // ── Military & security ───────────────────────────────────────────────────
  2:   { status: 'in-force',    notes: 'Ratified all four Geneva Conventions (1956). Additional Protocols I and II not ratified.' },
  83:  { status: 'in-force',    notes: 'Ratified 1984.' },
  84:  { status: 'in-force',    notes: 'Ratified 1976; one of the original parties.' },
  85:  { status: 'in-force',    notes: 'Ratified 1999.' },
  86:  { status: 'in-force',    notes: 'Ratified 2002.' },
  87:  { status: 'in-force',    notes: 'Ratified 2002.' },
  88:  { status: 'in-force',    notes: 'Ratified as part of UNTOC package, 2005.' },
  89:  { status: 'in-force',    notes: 'Ratified 2002.' },
  90:  { status: 'in-force',    notes: 'Signed 2005; ratified 2015.' },
  91:  { status: 'not-signed',  notes: 'Adopted Dec 2024. US declined to sign at 2025 opening ceremony, citing civil liberties and human rights concerns over the treaty\'s scope.' },

  // ── Arms control / CBRN ───────────────────────────────────────────────────
  3:   { status: 'in-force',    notes: 'One of three original negotiating parties (alongside UK and USSR); ratified 1963.' },
  4:   { status: 'in-force',    notes: 'Nuclear weapons state party; ratified 1970.' },
  5:   { status: 'in-force',    notes: 'Ratified 1975.' },
  6:   { status: 'in-force',    notes: 'Ratified 1997. Declared and destroyed its chemical weapons stockpile.' },
  7:   { status: 'signed-only', notes: 'Clinton signed 1996. Senate voted 51–48 against ratification in Oct 1999 — the first time the Senate had rejected a major multilateral treaty since Versailles.' },
  24:  { status: 'withdrew',    notes: 'Kerry signed in 2013. Trump announced withdrawal Apr 2019, citing national sovereignty; formally completed. Biden did not rejoin.' },
  25:  { status: 'not-signed',  notes: 'US actively opposed negotiations at the UN and called on allies not to sign. 94 states party as of 2026.' },
  26:  { status: 'not-signed',  notes: 'Never signed; US cites continued military utility of cluster munitions. 111 states party.' },
  27:  { status: 'not-signed',  notes: 'Never signed; US cites strategic need to maintain anti-personnel mines on the Korean Peninsula. 164 states party.' },
  34:  { status: 'in-force',    notes: 'Ratified 1967; one of three original depositary states alongside USSR and UK.' },
  35:  { status: 'not-signed',  notes: 'Explicitly rejects; US argues it constrains legitimate commercial space activities. Only 18 states party.' },
  99:  { status: 'in-force',    notes: 'Ratified 1976.' },
  102: { status: 'in-force',    notes: 'Ratified 1979.' },
  103: { status: 'in-force',    notes: 'Ratified main convention 1995; protocols ratified incrementally.' },
  112: { status: 'n/a',         notes: 'US–China bilateral.' },
  119: { status: 'n/a',         notes: 'US–China bilateral.' },

  // ── Environmental ─────────────────────────────────────────────────────────
  10:  { status: 'in-force',    notes: 'Ratified 1973; one of the original parties.' },
  11:  { status: 'in-force',    notes: 'Ratified 1988; Senate approved unanimously.' },
  12:  { status: 'in-force',    notes: 'Ratified 1992.' },
  13:  { status: 'signed-only', notes: 'Clinton signed Nov 1998. Byrd-Hagel Resolution (1997, 95–0) made Senate ratification impossible; never submitted. Effectively abandoned under Bush.' },
  14:  { status: 'withdrew',    notes: 'Obama ratified 2016. Trump withdrew Nov 2020. Biden rejoined Jan 2021. Trump withdrew again Jan 27, 2026 — second withdrawal.' },
  28:  { status: 'signed-only', notes: 'Signed 1990. Never ratified; the only OECD member not to ratify. Requires RCRA amendments that Congress has not enacted.' },
  29:  { status: 'signed-only', notes: 'Signed 1993. The only UN member not to ratify CBD — also blocks US accession to Nagoya and Cartagena protocols. Senate opposition centred on genetic resources provisions.' },
  30:  { status: 'in-force',    notes: 'Ratified 2013.' },
  31:  { status: 'signed-only', notes: 'Signed 2001. Never ratified; requires TSCA and FIFRA legislative amendments that Congress has not passed. 185 states party.' },
  40:  { status: 'n/a',         notes: 'Cannot ratify; US is not party to the parent CBD convention.' },
  104: { status: 'in-force',    notes: 'Ratified 1988.' },
  105: { status: 'in-force',    notes: 'Senate ratified 69–27 in Sep 2022 — the first climate-related Senate ratification in decades.' },
  106: { status: 'n/a',         notes: 'Cannot ratify; US not party to parent CBD.' },
  107: { status: 'in-force',    notes: 'Ratified 2000.' },
  108: { status: 'signed-only', notes: 'Signed 1998. Never ratified; lacks domestic implementing authority.' },
  114: { status: 'n/a',         notes: 'US–China bilateral.' },

  // ── Human rights ──────────────────────────────────────────────────────────
  15:  { status: 'in-force',    notes: 'Ratified 1994, with reservations declaring CAT provisions non-self-executing. Geneva/Abu Ghraib-era conduct drew international compliance findings.' },
  16:  { status: 'signed-only', notes: 'Carter signed 1979. Never submitted to Senate. Objections to "social rights" as justiciable obligations and to possible self-executing effect.' },
  17:  { status: 'in-force',    notes: 'Ratified 1992, but with 5 reservations, 5 understandings, and 4 declarations — among the most heavily qualified ratifications of any democracy.' },
  18:  { status: 'signed-only', notes: 'Carter signed 1980. The only major industrialised democracy not to ratify CEDAW. Senate Foreign Relations Committee approved in 2002 but never brought to a full Senate vote.' },
  19:  { status: 'signed-only', notes: 'Clinton signed 1995. The sole UN member not to ratify the CRC after Somalia ratified in 2015. Opposition cites parental rights and constitutional concerns.' },
  20:  { status: 'signed-only', notes: 'Obama signed 2009. Senate voted 61–38 in Dec 2012 — five votes short of the required two-thirds. The only permanent UN Security Council member not party.' },
  44:  { status: 'in-force',    notes: 'Ratified 1994 after a delay of nearly three decades.' },
  45:  { status: 'not-signed',  notes: 'US voted against adoption in the UN General Assembly in 1973.' },
  46:  { status: 'not-signed',  notes: 'Never signed.' },
  47:  { status: 'in-force',    notes: 'Ratified Dec 2002 — notably without ratifying the main CRC. One of the rare cases where the US ratified an optional protocol to a convention it has not itself ratified.' },
  48:  { status: 'in-force',    notes: 'Ratified Dec 2002 alongside OP-CRC-AC.' },
  49:  { status: 'in-force',    notes: 'US acceded to the 1967 Protocol (1968), which incorporates the substantive obligations of the 1951 Convention.' },
  50:  { status: 'not-signed',  notes: 'US has not acceded to the Convention on Stateless Persons.' },
  // Older narcotics/trafficking instruments
  51:  { status: 'in-force',    notes: 'Party to the international narcotics control regime.' },
  52:  { status: 'in-force',    notes: 'Party to the 1931 Narcotics Convention as amended.' },
  53:  { status: 'in-force',    notes: 'Party; largely superseded by the 1961 Single Convention.' },
  54:  { status: 'in-force',    notes: '' },
  55:  { status: 'not-signed',  notes: 'US did not accede to the 1953 Opium Protocol.' },
  56:  { status: 'in-force',    notes: 'Ratified 1980.' },
  57:  { status: 'in-force',    notes: 'Ratified 1967.' },
  58:  { status: 'in-force',    notes: 'Ratified 1990.' },
  59:  { status: 'in-force',    notes: '' },
  60:  { status: 'in-force',    notes: 'US was party to the original 1921 convention.' },
  61:  { status: 'in-force',    notes: '' },
  62:  { status: 'in-force',    notes: 'US was party to the original 1904 agreement.' },
  63:  { status: 'in-force',    notes: '' },
  64:  { status: 'not-signed',  notes: '' },
  65:  { status: 'in-force',    notes: '' },
  66:  { status: 'in-force',    notes: '' },
  67:  { status: 'not-signed',  notes: 'US is not a member of the International Vaccine Institute.' },
  68:  { status: 'signed-only', notes: 'Signed 2004. Never ratified; tobacco industry lobbying cited as primary obstacle. US attends COP as non-voting observer. 183 states party.' },
  69:  { status: 'not-signed',  notes: 'US has not ratified the parent FCTC and did not sign this protocol.' },
  82:  { status: 'in-force',    notes: 'Ratified 1958.' },
  113: { status: 'n/a',         notes: 'US–China bilateral.' },

  // ── Economic & trade ──────────────────────────────────────────────────────
  21:  { status: 'in-force',    notes: 'Founding member 1995. Congress enacted implementing legislation via the Uruguay Round Agreements Act.' },
  32:  { status: 'in-force',    notes: 'Ratified 2006.' },
  33:  { status: 'in-force',    notes: 'Ratified 2005.' },
  36:  { status: 'in-force',    notes: 'Ratified 1999; implemented domestically via the DMCA (1998).' },
  70:  { status: 'in-force',    notes: 'Founding member of IFAD.' },
  71:  { status: 'in-force',    notes: 'Ratified 1986; entered into force for the US Jan 1, 1988.' },
  74:  { status: 'not-signed',  notes: 'US has not signed the UN Convention on Electronic Communications in International Contracts.' },
  76:  { status: 'signed-only', notes: 'Signed 2023; very new instrument, not yet ratified.' },
  80:  { status: 'not-signed',  notes: 'US opposed and never joined the UN Code of Conduct for Liner Conferences.' },
  81:  { status: 'in-force',    notes: 'Ratified 1974.' },
  92:  { status: 'not-signed',  notes: 'US did not ratify the Common Fund for Commodities.' },
  96:  { status: 'in-force',    notes: 'Ratified 1970. Implemented via the Federal Arbitration Act, Chapter 2.' },
  97:  { status: 'signed-only', notes: 'US signed at the 2019 opening ceremony. Not yet ratified.' },
  109: { status: 'n/a',         notes: 'US–China bilateral.' },
  116: { status: 'n/a',         notes: 'US–China bilateral.' },
  117: { status: 'n/a',         notes: 'US–China BIT negotiations stalled.' },

  // ── Technology & science ──────────────────────────────────────────────────
  22:  { status: 'in-force',    notes: 'Bound through WHO membership; entered into force for US 2007.' },
  110: { status: 'n/a',         notes: 'US–China bilateral.' },
  115: { status: 'n/a',         notes: 'US–China bilateral; lapsed.' },
  120: { status: 'n/a',         notes: 'US–China bilateral.' },

  // ── Maritime & territory ──────────────────────────────────────────────────
  9:   { status: 'signed-only', notes: 'Clinton signed 1994 to endorse the Implementation Agreement. Never ratified. 34+ Republican senators have consistently pledged opposition. Pentagon, multiple Secretaries of State, and both Bush and Obama urged ratification. The US then invokes UNCLOS to criticise Chinese behaviour in the South China Sea — a contradiction China exploits effectively.' },
  37:  { status: 'in-force',    notes: 'Original signatory and founding member, ratified 1960.' },
  77:  { status: 'in-force',    notes: '' },
  78:  { status: 'not-signed',  notes: 'US is not a contracting party to the TIR Convention.' },
  79:  { status: 'in-force',    notes: 'Founding member of the IMO.' },
  94:  { status: 'in-force',    notes: 'Ratified 1996.' },
  95:  { status: 'signed-only', notes: 'Biden signed Sep 2023. Transmitted to Senate Dec 2024. Not yet ratified. Treaty entered into force internationally Jan 2026.' },

  // ── Political & territorial ───────────────────────────────────────────────
  8:   { status: 'in-force',    notes: 'Founding member; Senate ratified 89–2 in 1945.' },
  41:  { status: 'in-force',    notes: 'Ratified 1972.' },
  42:  { status: 'in-force',    notes: 'Ratified 1969.' },
  43:  { status: 'not-signed',  notes: 'Not yet in force globally; US has not signed.' },
  98:  { status: 'not-signed',  notes: 'Signed 1970 but never submitted for ratification. The US applies VCLT as customary international law in practice but has not formally ratified it — an unusual position for a leading treaty-maker.' },
  118: { status: 'n/a',         notes: 'US–China bilateral.' },
};
