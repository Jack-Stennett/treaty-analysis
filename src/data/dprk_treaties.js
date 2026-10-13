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
  73:  { status: 'in-force',   notes: 'Member since 1995.' },
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
  2:   { status: 'in-force',   notes: 'Acceded 1957. The 2014 UN Commission of Inquiry found crimes against humanity and systematic human rights violations.' },
  83:  { status: 'in-force',   notes: 'Acceded 2001.' },
  84:  { status: 'in-force',    notes: '' },
  85:  { status: 'in-force',   notes: 'Acceded 2003.' },
  86:  { status: 'not-signed',  notes: 'Designated state sponsor of terrorism.' },
  87:  { status: 'in-force',   notes: 'Signed 2001, ratified 2013.' },
  88:  { status: 'not-signed',  notes: '' },
  89:  { status: 'not-signed',  notes: '' },
  90:  { status: 'not-signed',  notes: '' },
  91:  { status: 'signed-only', notes: 'Signed at the Hanoi opening, October 2025.' },

  // ── Arms control / CBRN ───────────────────────────────────────────────────
  3:   { status: 'not-signed',  notes: 'DPRK conducted multiple nuclear tests (2006–2017) in direct violation of the treaty\'s spirit.' },
  4:   { status: 'withdrew',    notes: 'Acceded 1985. Announced withdrawal Jan 2003 (effective Apr 2003) — the only state ever to formally withdraw from the NPT. Conducted six nuclear tests.' },
  5:   { status: 'in-force',   notes: 'Acceded 1987. US compliance reports assess that it has an offensive biological weapons programme.' },
  6:   { status: 'not-signed',  notes: 'Never joined. Assessed to possess and have used chemical weapons (VX assassination of Kim Jong-nam, 2017).' },
  7:   { status: 'not-signed',  notes: 'Has explicitly refused to sign; nuclear testing programme would directly violate it.' },
  24:  { status: 'not-signed',  notes: '' },
  25:  { status: 'not-signed',  notes: 'Possesses nuclear weapons; categorically opposes this treaty.' },
  26:  { status: 'not-signed',  notes: '' },
  27:  { status: 'not-signed',  notes: 'Uses anti-personnel mines extensively along the DMZ.' },
  34:  { status: 'in-force',   notes: 'Acceded 2009.' },
  35:  { status: 'not-signed',  notes: '' },
  99:  { status: 'in-force',   notes: 'Acceded 2009.' },
  102: { status: 'in-force',   notes: 'Acceded 1984.' },
  103: { status: 'not-signed',  notes: '' },

  // ── Environmental ─────────────────────────────────────────────────────────
  10:  { status: 'not-signed',  notes: '' },
  11:  { status: 'in-force',    notes: 'Ratified 1995.' },
  12:  { status: 'in-force',    notes: 'Ratified 1994.' },
  13:  { status: 'in-force',    notes: 'Ratified 2005.' },
  14:  { status: 'in-force',    notes: 'Ratified 2016.' },
  28:  { status: 'in-force',   notes: 'Acceded 2008.' },
  29:  { status: 'in-force',    notes: 'Ratified 1994.' },
  30:  { status: 'not-signed', notes: '' },
  31:  { status: 'in-force',   notes: 'Acceded 2002.' },
  40:  { status: 'in-force',   notes: 'Acceded 2019.' },
  104: { status: 'in-force',   notes: 'Acceded 1995.' },
  105: { status: 'in-force',   notes: 'Accepted 2017.' },
  106: { status: 'in-force',   notes: 'Signed 2001, ratified 2003.' },
  107: { status: 'in-force',    notes: 'Ratified 2003.' },
  108: { status: 'in-force',   notes: 'Acceded 2004.' },

  // ── Human rights ──────────────────────────────────────────────────────────
  15:  { status: 'not-signed',  notes: 'Never joined CAT. UN Commission of Inquiry found crimes against humanity in DPRK detention facilities.' },
  16:  { status: 'in-force',   notes: 'Acceded 1981. Has engaged only sporadically with the treaty body.' },
  17:  { status: 'in-force',    notes: 'Ratified 1981. One of the clearest cases of ratification with zero implementation intent.' },
  18:  { status: 'in-force',    notes: 'Ratified 2001.' },
  19:  { status: 'in-force',    notes: 'Ratified 1990 — one of the first states to ratify the CRC, before most Western democracies.' },
  20:  { status: 'in-force',   notes: 'Signed 2013, ratified 2016.' },
  44:  { status: 'not-signed', notes: '' },
  45:  { status: 'not-signed', notes: '' },
  46:  { status: 'not-signed', notes: '' },
  47:  { status: 'not-signed', notes: '' },
  48:  { status: 'in-force',   notes: 'Signed and ratified 2014.' },
  49:  { status: 'not-signed',  notes: 'DPRK is the origin of one of the world\'s largest forced migration flows; it has not joined the Refugee Convention.' },
  50:  { status: 'not-signed',  notes: '' },
  51:  { status: 'not-signed', notes: '' },
  52:  { status: 'not-signed',  notes: '' },
  53:  { status: 'not-signed',  notes: '' },
  54:  { status: 'not-signed',  notes: '' },
  55:  { status: 'not-signed',  notes: '' },
  56:  { status: 'in-force',    notes: '' },
  57:  { status: 'in-force',    notes: '' },
  58:  { status: 'in-force',   notes: 'Acceded 2007.' },
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
  32:  { status: 'not-signed', notes: '' },
  33:  { status: 'in-force',   notes: 'Acceded 2016.' },
  36:  { status: 'in-force',   notes: 'Acceded January 2024.' },
  70:  { status: 'in-force',    notes: 'Member of IFAD.' },
  71:  { status: 'in-force',   notes: 'Acceded 2019.' },
  74:  { status: 'not-signed',  notes: '' },
  76:  { status: 'not-signed',  notes: '' },
  80:  { status: 'not-signed',  notes: '' },
  81:  { status: 'not-signed',  notes: '' },
  92:  { status: 'in-force',    notes: '' },
  96:  { status: 'not-signed', notes: '' },
  97:  { status: 'not-signed',  notes: '' },

  // ── Technology & science ──────────────────────────────────────────────────
  22:  { status: 'in-force',    notes: 'Bound through WHO membership; withheld COVID-19 data for extended periods.' },

  // ── Maritime & territory ──────────────────────────────────────────────────
  9:   { status: 'signed-only', notes: 'Signed 1982; never ratified.' },
  37:  { status: 'in-force',   notes: 'Acceded 1987 (non-consultative party).' },
  77:  { status: 'not-signed',  notes: '' },
  78:  { status: 'not-signed',  notes: '' },
  79:  { status: 'in-force',    notes: 'Member of IMO.' },
  94:  { status: 'not-signed',  notes: '' },
  95:  { status: 'in-force',   notes: 'Acceded October 2026.' },

  // ── Political & territorial ───────────────────────────────────────────────
  8:   { status: 'in-force',    notes: 'UN member since 1991 (simultaneous admission with South Korea).' },
  41:  { status: 'in-force',    notes: '' },
  42:  { status: 'in-force',    notes: '' },
  43:  { status: 'not-signed',  notes: '' },
  98:  { status: 'not-signed', notes: '' },
};
