/**
 * North Korea (DPRK) treaty status for each instrument in the TREATIES array.
 * DPRK provides the "floor" baseline: a country that signs basic UN instruments
 * to maintain international standing but routinely ignores their content.
 *
 * Notable pattern: DPRK ratified CRC (1990), ICCPR, and ICESCR early — formal
 * participation used as a diplomatic signal with no implementation intent.
 * It withdrew from the NPT in 2003 and is widely assessed to possess chemical
 * and biological weapons despite not joining those conventions.
 *
 * Sources: UN Treaty Collection (treaties.un.org), UN OHCHR, IAEA, NTI
 */
export const DPRK_STATUS = {
  // ── Bilateral / regional – not applicable ─────────────────────────────────
  1:   { status: 'n/a', notes: 'Bilateral China–Soviet treaty.' },
  23:  { status: 'n/a', notes: 'Bilateral UK–China instrument.' },
  38:  { status: 'n/a', notes: 'RCEP — regional; DPRK not a member.' },
  39:  { status: 'n/a', notes: 'SCO — DPRK not a member.' },
  72:  { status: 'n/a', notes: 'Asia-Pacific regional body.' },
  73:  { status: 'n/a', notes: 'South Centre.' },
  75:  { status: 'n/a', notes: 'Asia-Pacific regional framework.' },
  93:  { status: 'n/a', notes: 'International Copper Study Group.' },
  100: { status: 'n/a', notes: 'Asia-Pacific Telecommunity — regional.' },
  101: { status: 'n/a', notes: 'Asia-Pacific Broadcasting Institute — regional.' },
  109: { status: 'n/a', notes: 'US–China bilateral.' },
  110: { status: 'n/a', notes: 'US–China bilateral.' },
  111: { status: 'n/a', notes: 'US–China bilateral.' },
  112: { status: 'n/a', notes: 'US–China bilateral.' },
  113: { status: 'n/a', notes: 'US–China bilateral.' },
  114: { status: 'n/a', notes: 'US–China bilateral.' },
  115: { status: 'n/a', notes: 'US–China bilateral.' },
  116: { status: 'n/a', notes: 'US–China bilateral.' },
  117: { status: 'n/a', notes: 'US–China bilateral.' },
  118: { status: 'n/a', notes: 'US–China bilateral.' },
  119: { status: 'n/a', notes: 'US–China bilateral.' },
  120: { status: 'n/a', notes: 'US–China bilateral.' },

  // ── Military & security ───────────────────────────────────────────────────
  2:   { status: 'in-force',    notes: 'Acceded 1957. Compliance is effectively nil; the UN Commission of Inquiry (2014) documented systematic violations.' },
  83:  { status: 'not-signed',  notes: '' },
  84:  { status: 'in-force',    notes: '' },
  85:  { status: 'not-signed',  notes: '' },
  86:  { status: 'not-signed',  notes: 'Designated state sponsor of terrorism.' },
  87:  { status: 'not-signed',  notes: '' },
  88:  { status: 'not-signed',  notes: '' },
  89:  { status: 'not-signed',  notes: '' },
  90:  { status: 'not-signed',  notes: '' },
  91:  { status: 'not-signed',  notes: '' },

  // ── Arms control / CBRN ───────────────────────────────────────────────────
  3:   { status: 'not-signed',  notes: 'DPRK conducted multiple nuclear tests (2006–2017) in direct violation of the treaty\'s spirit.' },
  4:   { status: 'withdrew',    notes: 'Acceded 1985. Announced withdrawal Jan 2003 (effective Apr 2003) — the only state ever to formally withdraw from the NPT. Conducted six nuclear tests.' },
  5:   { status: 'not-signed',  notes: 'Never joined. Assessed to possess biological weapons programme.' },
  6:   { status: 'not-signed',  notes: 'Never joined. Assessed to possess and have used chemical weapons (VX assassination of Kim Jong-nam, 2017).' },
  7:   { status: 'not-signed',  notes: 'Has explicitly refused to sign; nuclear testing programme would directly violate it.' },
  24:  { status: 'not-signed',  notes: '' },
  25:  { status: 'not-signed',  notes: 'Possesses nuclear weapons; categorically opposes this treaty.' },
  26:  { status: 'not-signed',  notes: '' },
  27:  { status: 'not-signed',  notes: 'Uses anti-personnel mines extensively along the DMZ.' },
  34:  { status: 'in-force',    notes: 'Ratified 1967.' },
  35:  { status: 'not-signed',  notes: '' },
  99:  { status: 'not-signed',  notes: '' },
  102: { status: 'not-signed',  notes: '' },
  103: { status: 'not-signed',  notes: '' },

  // ── Environmental ─────────────────────────────────────────────────────────
  10:  { status: 'not-signed',  notes: '' },
  11:  { status: 'in-force',    notes: 'Ratified 1995.' },
  12:  { status: 'in-force',    notes: 'Ratified 1994.' },
  13:  { status: 'in-force',    notes: 'Ratified 2005.' },
  14:  { status: 'in-force',    notes: 'Ratified 2016.' },
  28:  { status: 'in-force',    notes: 'Ratified 1994.' },
  29:  { status: 'in-force',    notes: 'Ratified 1994.' },
  30:  { status: 'signed-only', notes: 'Signed but ratification status uncertain.' },
  31:  { status: 'in-force',    notes: 'Ratified 2001.' },
  40:  { status: 'in-force',    notes: 'Ratified 2003.' },
  104: { status: 'in-force',    notes: 'Ratified 1994.' },
  105: { status: 'not-signed',  notes: 'Has not ratified the Kigali Amendment.' },
  106: { status: 'in-force',    notes: 'Ratified 2002.' },
  107: { status: 'in-force',    notes: 'Ratified 2003.' },
  108: { status: 'not-signed',  notes: '' },

  // ── Human rights ──────────────────────────────────────────────────────────
  15:  { status: 'not-signed',  notes: 'Never joined CAT. UN Commission of Inquiry found crimes against humanity in DPRK detention facilities.' },
  16:  { status: 'in-force',    notes: 'Ratified 1981. Compliance is effectively nil; DPRK\'s periodic reports have been criticised as wholly fabricated by treaty body.' },
  17:  { status: 'in-force',    notes: 'Ratified 1981. One of the clearest cases of ratification with zero implementation intent.' },
  18:  { status: 'in-force',    notes: 'Ratified 2001.' },
  19:  { status: 'in-force',    notes: 'Ratified 1990 — one of the first states to ratify the CRC, before most Western democracies.' },
  20:  { status: 'not-signed',  notes: '' },
  44:  { status: 'in-force',    notes: 'Ratified 1981.' },
  45:  { status: 'in-force',    notes: 'Ratified 1981.' },
  46:  { status: 'in-force',    notes: '' },
  47:  { status: 'signed-only', notes: 'Signed but not ratified.' },
  48:  { status: 'signed-only', notes: 'Signed but not ratified.' },
  49:  { status: 'not-signed',  notes: 'DPRK is the origin of one of the world\'s largest forced migration flows; it has not joined the Refugee Convention.' },
  50:  { status: 'not-signed',  notes: '' },
  51:  { status: 'in-force',    notes: '' },
  52:  { status: 'not-signed',  notes: '' },
  53:  { status: 'not-signed',  notes: '' },
  54:  { status: 'not-signed',  notes: '' },
  55:  { status: 'not-signed',  notes: '' },
  56:  { status: 'in-force',    notes: '' },
  57:  { status: 'in-force',    notes: '' },
  58:  { status: 'in-force',    notes: 'Ratified 1989.' },
  59:  { status: 'not-signed',  notes: '' },
  60:  { status: 'not-signed',  notes: '' },
  61:  { status: 'not-signed',  notes: '' },
  62:  { status: 'not-signed',  notes: '' },
  63:  { status: 'not-signed',  notes: '' },
  64:  { status: 'not-signed',  notes: '' },
  65:  { status: 'not-signed',  notes: '' },
  66:  { status: 'not-signed',  notes: '' },
  67:  { status: 'not-signed',  notes: '' },
  68:  { status: 'in-force',    notes: 'Ratified 2005.' },
  69:  { status: 'not-signed',  notes: '' },
  82:  { status: 'not-signed',  notes: '' },

  // ── Economic & trade ──────────────────────────────────────────────────────
  21:  { status: 'not-signed',  notes: 'DPRK is not a WTO member; highly isolated economy under extensive sanctions.' },
  32:  { status: 'in-force',    notes: 'Ratified 2007.' },
  33:  { status: 'not-signed',  notes: '' },
  36:  { status: 'not-signed',  notes: '' },
  70:  { status: 'in-force',    notes: 'Member of IFAD.' },
  71:  { status: 'not-signed',  notes: '' },
  74:  { status: 'not-signed',  notes: '' },
  76:  { status: 'not-signed',  notes: '' },
  80:  { status: 'not-signed',  notes: '' },
  81:  { status: 'not-signed',  notes: '' },
  92:  { status: 'in-force',    notes: '' },
  96:  { status: 'in-force',    notes: 'Ratified 1985.' },
  97:  { status: 'not-signed',  notes: '' },

  // ── Technology & science ──────────────────────────────────────────────────
  22:  { status: 'in-force',    notes: 'Bound through WHO membership; withheld COVID-19 data for extended periods.' },

  // ── Maritime & territory ──────────────────────────────────────────────────
  9:   { status: 'in-force',    notes: 'Ratified 1982 — among the first signatories.' },
  37:  { status: 'not-signed',  notes: '' },
  77:  { status: 'not-signed',  notes: '' },
  78:  { status: 'not-signed',  notes: '' },
  79:  { status: 'in-force',    notes: 'Member of IMO.' },
  94:  { status: 'not-signed',  notes: '' },
  95:  { status: 'not-signed',  notes: '' },

  // ── Political & territorial ───────────────────────────────────────────────
  8:   { status: 'in-force',    notes: 'UN member since 1991 (simultaneous admission with South Korea).' },
  41:  { status: 'in-force',    notes: '' },
  42:  { status: 'in-force',    notes: '' },
  43:  { status: 'not-signed',  notes: '' },
  98:  { status: 'in-force',    notes: '' },
};
