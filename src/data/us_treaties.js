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
  93:  { status: 'in-force',   notes: 'Accepted 1994.' },
  100: { status: 'n/a',         notes: 'Asia-Pacific Telecommunity — regional body.' },
  101: { status: 'n/a',         notes: 'Asia-Pacific Institute for Broadcasting Development — regional body.' },
  109: { status: 'n/a',         notes: 'US–China bilateral trade agreement; US is a party by definition.' },
  110: { status: 'n/a',         notes: 'US–China S&T cooperation agreement; US is a party.' },
  111: { status: 'n/a',         notes: 'MMCA — US–China bilateral; US is a party.' },
  112: { status: 'n/a',        notes: 'US–China joint statement on nuclear detargeting — US is a party.' },
  113: { status: 'n/a',         notes: 'US–China MLAA — US is a party.' },
  114: { status: 'n/a',         notes: 'US–China Joint Announcement on Climate Change — US is a party.' },
  115: { status: 'n/a',         notes: 'US–China CERC Agreement — lapsed.' },
  116: { status: 'n/a',         notes: 'US–China Phase One Trade Agreement — US is a party.' },
  117: { status: 'n/a',         notes: 'US–China BIT — negotiations stalled; never concluded.' },
  118: { status: 'n/a',         notes: 'US–China Three Joint Communiqués — US is a party.' },
  119: { status: 'n/a',         notes: 'US–China 123 Agreement — US is a party.' },
  120: { status: 'n/a',        notes: 'US–China cyber commitment — US is a party.' },

  // ── Military & security ───────────────────────────────────────────────────
  2:   { status: 'in-force',   notes: 'Ratified 1955 (in force for the US 1956). Additional Protocols I and II not ratified.' },
  83:  { status: 'in-force',    notes: 'Ratified 1984.' },
  84:  { status: 'in-force',    notes: 'Ratified 1976; one of the original parties.' },
  85:  { status: 'signed-only', notes: 'Signed 1994. Never ratified.' },
  86:  { status: 'in-force',    notes: 'Ratified 2002.' },
  87:  { status: 'in-force',    notes: 'Ratified 2002.' },
  88:  { status: 'in-force',    notes: 'Ratified as part of UNTOC package, 2005.' },
  89:  { status: 'not-signed', notes: '' },
  90:  { status: 'in-force',    notes: 'Signed 2005; ratified 2015.' },
  91:  { status: 'not-signed', notes: 'Opened for signature in Hanoi in October 2025; the US did not sign.' },

  // ── Arms control / CBRN ───────────────────────────────────────────────────
  3:   { status: 'in-force',    notes: 'One of three original negotiating parties (alongside UK and USSR); ratified 1963.' },
  4:   { status: 'in-force',    notes: 'Nuclear weapons state party; ratified 1970.' },
  5:   { status: 'in-force',    notes: 'Ratified 1975.' },
  6:   { status: 'in-force',    notes: 'Ratified 1997. Declared and destroyed its chemical weapons stockpile.' },
  7:   { status: 'signed-only', notes: 'Clinton signed 1996. Senate voted 51–48 against ratification in Oct 1999 — the first time the Senate had rejected a major multilateral treaty since Versailles.' },
  24:  { status: 'signed-only', notes: 'Kerry signed in 2013; never ratified. In July 2019 the US notified the UN that it does not intend to become a party and has no legal obligations arising from its signature.' },
  25:  { status: 'not-signed', notes: 'US actively opposed negotiations at the UN and called on allies not to sign. 75 states party as of 2026.' },
  26:  { status: 'not-signed', notes: 'Never signed; US cites continued military utility of cluster munitions. 112 states party.' },
  27:  { status: 'not-signed', notes: 'Never signed; US cites strategic need to maintain anti-personnel mines on the Korean Peninsula. 162 states party after the Baltic states, Finland and Poland withdrew in 2025–26.' },
  34:  { status: 'in-force',    notes: 'Ratified 1967; one of three original depositary states alongside USSR and UK.' },
  35:  { status: 'not-signed', notes: 'Explicitly rejects; US argues it constrains legitimate commercial space activities. Only 17 states party.' },
  99:  { status: 'in-force',    notes: 'Ratified 1976.' },
  102: { status: 'in-force',   notes: 'Ratified 1980.' },
  103: { status: 'in-force',    notes: 'Ratified main convention 1995; protocols ratified incrementally.' },

  // ── Environmental ─────────────────────────────────────────────────────────
  10:  { status: 'in-force',   notes: 'Signed 1973; ratified January 1974, the first state to do so.' },
  11:  { status: 'in-force',    notes: 'Ratified 1988; Senate approved unanimously.' },
  12:  { status: 'in-force',   notes: 'Ratified 1992. Withdrawal ordered in January 2026; notice given February 2026, taking effect February 2027.' },
  13:  { status: 'signed-only', notes: 'Clinton signed Nov 1998. Byrd-Hagel Resolution (1997, 95–0) made Senate ratification impossible; never submitted. Effectively abandoned under Bush.' },
  14:  { status: 'withdrew',   notes: 'Obama joined 2016. Trump withdrew (effective Nov 2020). Biden rejoined Jan 2021. Trump gave notice again in Jan 2025, effective Jan 2026.' },
  28:  { status: 'signed-only', notes: 'Signed 1990. Never ratified; the only OECD member not to ratify. Requires RCRA amendments that Congress has not enacted.' },
  29:  { status: 'signed-only', notes: 'Signed 1993. The only UN member not to ratify CBD — also blocks US accession to Nagoya and Cartagena protocols. Senate opposition centred on genetic resources provisions.' },
  30:  { status: 'in-force',    notes: 'Ratified 2013.' },
  31:  { status: 'signed-only', notes: 'Signed 2001. Never ratified; requires TSCA and FIFRA legislative amendments that Congress has not passed. 186 states party.' },
  40:  { status: 'not-signed', notes: 'Not a party; the US cannot join without joining the parent CBD.' },
  104: { status: 'in-force',   notes: 'Ratified 1986.' },
  105: { status: 'in-force',    notes: 'Senate ratified 69–27 in Sep 2022 — the first climate-related Senate ratification in decades.' },
  106: { status: 'not-signed', notes: 'Not a party; the US cannot join without joining the parent CBD.' },
  107: { status: 'in-force',    notes: 'Ratified 2000.' },
  108: { status: 'signed-only', notes: 'Signed 1998. Never ratified; lacks domestic implementing authority.' },

  // ── Human rights ──────────────────────────────────────────────────────────
  15:  { status: 'in-force',    notes: 'Ratified 1994, with reservations declaring CAT provisions non-self-executing. Geneva/Abu Ghraib-era conduct drew international compliance findings.' },
  16:  { status: 'signed-only', notes: 'Carter signed 1977 and sent it to the Senate in 1978, which never voted. Objections centre on treating "social rights" as justiciable obligations.' },
  17:  { status: 'in-force',    notes: 'Ratified 1992, but with 5 reservations, 5 understandings, and 4 declarations — among the most heavily qualified ratifications of any democracy.' },
  18:  { status: 'signed-only', notes: 'Carter signed 1980. The only major industrialised democracy not to ratify CEDAW. Senate Foreign Relations Committee approved in 2002 but never brought to a full Senate vote.' },
  19:  { status: 'signed-only', notes: 'Clinton signed 1995. The sole UN member not to ratify the CRC after Somalia ratified in 2015. Opposition cites parental rights and constitutional concerns.' },
  20:  { status: 'signed-only', notes: 'Obama signed 2009. Senate voted 61–38 in Dec 2012 — five votes short of the required two-thirds. The only permanent UN Security Council member not party.' },
  44:  { status: 'in-force',    notes: 'Ratified 1994 after a delay of nearly three decades.' },
  45:  { status: 'not-signed',  notes: 'US voted against adoption in the UN General Assembly in 1973.' },
  46:  { status: 'not-signed',  notes: 'Never signed.' },
  47:  { status: 'in-force',    notes: 'Ratified Dec 2002 — notably without ratifying the main CRC. One of the rare cases where the US ratified an optional protocol to a convention it has not itself ratified.' },
  48:  { status: 'in-force',    notes: 'Ratified Dec 2002 alongside OP-CRC-AC.' },
  49:  { status: 'not-signed', notes: 'Not a party to the 1951 Convention itself. The US acceded to the 1967 Protocol (1968), which incorporates the Convention\'s substantive obligations.' },
  50:  { status: 'not-signed',  notes: 'US has not acceded to the Convention on Stateless Persons.' },
  // Older narcotics/trafficking instruments
  51:  { status: 'in-force',    notes: 'Party to the international narcotics control regime.' },
  52:  { status: 'in-force',    notes: 'Party to the 1931 Narcotics Convention as amended.' },
  53:  { status: 'not-signed', notes: '' },
  54:  { status: 'in-force',    notes: '' },
  55:  { status: 'in-force',   notes: 'Signed 1953, ratified 1955.' },
  56:  { status: 'in-force',    notes: 'Ratified 1980.' },
  57:  { status: 'in-force',    notes: 'Ratified 1967.' },
  58:  { status: 'in-force',    notes: 'Ratified 1990.' },
  59:  { status: 'not-signed', notes: '' },
  60:  { status: 'not-signed', notes: '' },
  61:  { status: 'in-force',    notes: '' },
  62:  { status: 'in-force',    notes: 'US was party to the original 1904 agreement.' },
  63:  { status: 'not-signed', notes: '' },
  64:  { status: 'not-signed',  notes: '' },
  65:  { status: 'in-force',    notes: '' },
  66:  { status: 'in-force',    notes: '' },
  67:  { status: 'not-signed',  notes: 'US is not a member of the International Vaccine Institute.' },
  68:  { status: 'signed-only', notes: 'Signed 2004. Never ratified; tobacco industry lobbying cited as primary obstacle. US attends COP as non-voting observer. 183 states party.' },
  69:  { status: 'not-signed',  notes: 'US has not ratified the parent FCTC and did not sign this protocol.' },
  82:  { status: 'not-signed', notes: '' },

  // ── Economic & trade ──────────────────────────────────────────────────────
  21:  { status: 'in-force',    notes: 'Founding member 1995. Congress enacted implementing legislation via the Uruguay Round Agreements Act.' },
  32:  { status: 'in-force',    notes: 'Ratified 2006.' },
  33:  { status: 'in-force',    notes: 'Ratified 2005.' },
  36:  { status: 'in-force',    notes: 'Ratified 1999; implemented domestically via the DMCA (1998).' },
  70:  { status: 'in-force',    notes: 'Founding member of IFAD.' },
  71:  { status: 'in-force',    notes: 'Ratified 1986; entered into force for the US Jan 1, 1988.' },
  74:  { status: 'not-signed',  notes: 'US has not signed the UN Convention on Electronic Communications in International Contracts.' },
  76:  { status: 'not-signed', notes: '' },
  80:  { status: 'not-signed',  notes: 'US opposed and never joined the UN Code of Conduct for Liner Conferences.' },
  81:  { status: 'in-force',   notes: 'Ratified 1973.' },
  92:  { status: 'signed-only', notes: 'Signed 1980. Never ratified.' },
  96:  { status: 'in-force',    notes: 'Ratified 1970. Implemented via the Federal Arbitration Act, Chapter 2.' },
  97:  { status: 'signed-only', notes: 'US signed at the 2019 opening ceremony. Not yet ratified.' },

  // ── Technology & science ──────────────────────────────────────────────────
  22:  { status: 'in-force',   notes: 'Applied to the US from 2007 through WHO membership. The US rejected the 2024 IHR amendments in July 2025 and left WHO in January 2026; whether IHR (2005) still binds it is unclear.' },

  // ── Maritime & territory ──────────────────────────────────────────────────
  9:   { status: 'not-signed', notes: 'Never signed the Convention itself; signed only the 1994 Part XI Implementation Agreement. Never ratified: in 2012, 34 Republican senators (enough to block) publicly opposed it. Pentagon, multiple Secretaries of State, and both Bush and Obama urged ratification. The US treats the navigation rules as customary law and invokes UNCLOS to criticise Chinese behaviour in the South China Sea, which China is quick to point out.' },
  37:  { status: 'in-force',    notes: 'Original signatory and founding member, ratified 1960.' },
  77:  { status: 'in-force',    notes: '' },
  78:  { status: 'in-force',   notes: 'Acceded 1981.' },
  79:  { status: 'in-force',    notes: 'Founding member of the IMO.' },
  94:  { status: 'in-force',    notes: 'Ratified 1996.' },
  95:  { status: 'signed-only', notes: 'Biden signed Sep 2023. Transmitted to Senate Dec 2024. Not yet ratified. Treaty entered into force internationally Jan 2026.' },

  // ── Political & territorial ───────────────────────────────────────────────
  8:   { status: 'in-force',    notes: 'Founding member; Senate ratified 89–2 in 1945.' },
  41:  { status: 'in-force',    notes: 'Ratified 1972.' },
  42:  { status: 'in-force',    notes: 'Ratified 1969.' },
  43:  { status: 'not-signed',  notes: 'Not yet in force globally; US has not signed.' },
  98:  { status: 'signed-only', notes: 'Signed 1970 but never ratified. The US treats much of the VCLT as customary international law, an unusual position for a leading treaty-maker.' },
};
