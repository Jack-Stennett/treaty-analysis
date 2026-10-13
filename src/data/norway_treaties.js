/**
 * Norway treaty status for each instrument in the TREATIES array.
 * Norway is among the most treaty-compliant states in the world — a useful
 * "gold standard" baseline for comparison.
 *
 * Notable: Norway was a lead champion of both the Ottawa Mine Ban Treaty and
 * the Convention on Cluster Munitions. It ratified UNCLOS early and strongly.
 * As a NATO member it has not signed TPNW.
 *
 * Sources: UN Treaty Collection (treaties.un.org), Norwegian MFA, OHCHR
 */
export const NORWAY_STATUS = {
  // ── Bilateral / regional – not applicable ─────────────────────────────────
  1:   { status: 'n/a', notes: 'Bilateral China–Soviet treaty.' },
  23:  { status: 'n/a', notes: 'Bilateral UK–China instrument.' },
  38:  { status: 'n/a', notes: 'RCEP — regional Asian trade agreement.' },
  39:  { status: 'n/a', notes: 'Shanghai Cooperation Organisation — Norway not a member.' },
  72:  { status: 'n/a', notes: 'Asian and Pacific Development Centre — regional body.' },
  73:  { status: 'n/a', notes: 'South Centre — developing-country organisation.' },
  75:  { status: 'n/a', notes: 'Asia-Pacific Paperless Trade Framework — regional.' },
  93:  { status: 'n/a', notes: 'International Copper Study Group.' },
  100: { status: 'n/a', notes: 'Asia-Pacific Telecommunity — regional body.' },
  101: { status: 'n/a', notes: 'Asia-Pacific Institute for Broadcasting Development — regional.' },
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
  2:   { status: 'in-force',    notes: 'Ratified 1951.' },
  83:  { status: 'in-force',    notes: '' },
  84:  { status: 'in-force',    notes: '' },
  85:  { status: 'in-force',    notes: '' },
  86:  { status: 'in-force',    notes: '' },
  87:  { status: 'in-force',    notes: '' },
  88:  { status: 'in-force',    notes: '' },
  89:  { status: 'in-force',    notes: '' },
  90:  { status: 'in-force',    notes: '' },
  91:  { status: 'not-signed',  notes: 'Norway expressed concerns about civil liberties implications and did not sign at 2025 opening.' },

  // ── Arms control / CBRN ───────────────────────────────────────────────────
  3:   { status: 'in-force',    notes: 'Ratified 1963.' },
  4:   { status: 'in-force',    notes: 'Non-nuclear weapon state party; ratified 1969.' },
  5:   { status: 'in-force',    notes: 'Ratified 1973.' },
  6:   { status: 'in-force',    notes: 'Ratified 1997.' },
  7:   { status: 'in-force',    notes: 'Ratified 1999. (Note: CTBT has not yet entered into force globally, pending ratification by 8 Annex-2 states including the US and China.)' },
  24:  { status: 'in-force',    notes: 'Ratified 2014.' },
  25:  { status: 'not-signed',  notes: 'NATO member; Norway has not signed TPNW, consistent with NATO alliance nuclear posture.' },
  26:  { status: 'in-force',    notes: 'Norway was the lead champion of the Oslo Process that produced the CCM. Ratified 2008.' },
  27:  { status: 'in-force',    notes: 'Norway co-hosted the Ottawa Process negotiations and was among the first to ratify (1998).' },
  34:  { status: 'in-force',    notes: 'Ratified 1967.' },
  35:  { status: 'not-signed',  notes: 'Norway has not signed the Moon Agreement.' },
  99:  { status: 'in-force',    notes: '' },
  102: { status: 'in-force',    notes: '' },
  103: { status: 'in-force',    notes: '' },

  // ── Environmental ─────────────────────────────────────────────────────────
  10:  { status: 'in-force',    notes: '' },
  11:  { status: 'in-force',    notes: '' },
  12:  { status: 'in-force',    notes: '' },
  13:  { status: 'in-force',    notes: 'Ratified 2002.' },
  14:  { status: 'in-force',    notes: 'Ratified 2016.' },
  28:  { status: 'in-force',    notes: '' },
  29:  { status: 'in-force',    notes: '' },
  30:  { status: 'in-force',    notes: '' },
  31:  { status: 'in-force',    notes: '' },
  40:  { status: 'in-force',    notes: 'Ratified 2014.' },
  104: { status: 'in-force',    notes: '' },
  105: { status: 'in-force',    notes: '' },
  106: { status: 'in-force',    notes: '' },
  107: { status: 'in-force',    notes: '' },
  108: { status: 'in-force',    notes: '' },

  // ── Human rights ──────────────────────────────────────────────────────────
  15:  { status: 'in-force',    notes: '' },
  16:  { status: 'in-force',    notes: 'Ratified 1972.' },
  17:  { status: 'in-force',    notes: 'Ratified 1972.' },
  18:  { status: 'in-force',    notes: 'Ratified 1981.' },
  19:  { status: 'in-force',    notes: 'Ratified 1991.' },
  20:  { status: 'in-force',    notes: 'Ratified 2013.' },
  44:  { status: 'in-force',    notes: '' },
  45:  { status: 'in-force',    notes: '' },
  46:  { status: 'in-force',    notes: '' },
  47:  { status: 'in-force',    notes: '' },
  48:  { status: 'in-force',    notes: '' },
  49:  { status: 'in-force',    notes: 'Party to the 1951 Convention and 1967 Protocol.' },
  50:  { status: 'in-force',    notes: '' },
  51:  { status: 'in-force',    notes: '' },
  52:  { status: 'in-force',    notes: '' },
  53:  { status: 'in-force',    notes: '' },
  54:  { status: 'in-force',    notes: '' },
  55:  { status: 'in-force',    notes: '' },
  56:  { status: 'in-force',    notes: '' },
  57:  { status: 'in-force',    notes: '' },
  58:  { status: 'in-force',    notes: '' },
  59:  { status: 'in-force',    notes: '' },
  60:  { status: 'in-force',    notes: '' },
  61:  { status: 'in-force',    notes: '' },
  62:  { status: 'in-force',    notes: '' },
  63:  { status: 'in-force',    notes: '' },
  64:  { status: 'in-force',    notes: '' },
  65:  { status: 'in-force',    notes: '' },
  66:  { status: 'in-force',    notes: '' },
  67:  { status: 'in-force',    notes: 'Norway is a founding member of the International Vaccine Institute.' },
  68:  { status: 'in-force',    notes: 'Ratified 2003.' },
  69:  { status: 'in-force',    notes: '' },
  82:  { status: 'in-force',    notes: '' },

  // ── Economic & trade ──────────────────────────────────────────────────────
  21:  { status: 'in-force',    notes: 'Member via EEA/EFTA arrangements; formal WTO member.' },
  32:  { status: 'in-force',    notes: '' },
  33:  { status: 'in-force',    notes: '' },
  36:  { status: 'in-force',    notes: '' },
  70:  { status: 'in-force',    notes: '' },
  71:  { status: 'in-force',    notes: '' },
  74:  { status: 'not-signed',  notes: 'Norway has not signed the UN Electronic Communications Convention.' },
  76:  { status: 'signed-only', notes: 'Signed 2023; ratification pending.' },
  80:  { status: 'not-signed',  notes: 'Norway did not join the UN Liner Code.' },
  81:  { status: 'in-force',    notes: '' },
  92:  { status: 'in-force',    notes: '' },
  96:  { status: 'in-force',    notes: '' },
  97:  { status: 'in-force',    notes: 'Ratified 2021.' },

  // ── Technology & science ──────────────────────────────────────────────────
  22:  { status: 'in-force',    notes: 'Bound through WHO membership.' },

  // ── Maritime & territory ──────────────────────────────────────────────────
  9:   { status: 'in-force',    notes: 'Ratified 1996. Norway strongly supports UNCLOS given its extensive maritime interests in the North Sea and Arctic.' },
  37:  { status: 'in-force',    notes: 'Consultative party; Norway has a significant Antarctic research presence.' },
  77:  { status: 'in-force',    notes: '' },
  78:  { status: 'in-force',    notes: 'Norway is a TIR contracting party.' },
  79:  { status: 'in-force',    notes: '' },
  94:  { status: 'in-force',    notes: '' },
  95:  { status: 'in-force',    notes: 'Among the early ratifiers; Norway was an active negotiating party.' },

  // ── Political & territorial ───────────────────────────────────────────────
  8:   { status: 'in-force',    notes: 'Founding member of the United Nations (1945).' },
  41:  { status: 'in-force',    notes: '' },
  42:  { status: 'in-force',    notes: '' },
  43:  { status: 'in-force',    notes: 'Norway ratified the Jurisdictional Immunities Convention.' },
  98:  { status: 'in-force',    notes: 'Ratified 1971.' },
};
