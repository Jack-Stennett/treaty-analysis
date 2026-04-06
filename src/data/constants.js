export const CATEGORIES = [
  'Environmental',
  'Arms control / CBRN',
  'Human rights',
  'Economic & trade',
  'Military & security',
  'Technology & science',
  'Maritime & territory',
  'Political & territorial',
];

export const CATEGORY_COLORS = {
  'Environmental':          '#5C7A52',
  'Arms control / CBRN':    '#8B3A3A',
  'Human rights':           '#6B4E7A',
  'Economic & trade':       '#8A7040',
  'Military & security':    '#2E4A6B',
  'Technology & science':   '#3D6B7A',
  'Maritime & territory':   '#2A6080',
  'Political & territorial':'#7A5C42',
};

export const ERAS = [
  { label: 'Mao (1949–76)',   start: 1949, end: 1976 },
  { label: 'Deng (1978–92)',  start: 1978, end: 1992 },
  { label: 'Jiang (1992–02)', start: 1992, end: 2002 },
  { label: 'Hu (2002–12)',    start: 2002, end: 2012 },
  { label: 'Xi (2012–)',      start: 2012, end: 2100 },
];

export const STATUS_VOCAB = [
  'in force',
  'expired',
  'disputed',
  'signed only',
  'not signed',
  'suspended',
  'non-binding',
  'superseded',
  'lapsed',
];

export const STATUS_COLORS = {
  'in force':    'bg-sage/20 text-sage-dark',
  'expired':     'bg-cream-dark/40 text-navy/50',
  'disputed':    'bg-gold/20 text-gold-dark',
  'signed only': 'bg-gold/10 text-gold-dark',
  'not signed':  'bg-cream-dark/30 text-navy/40',
  'suspended':   'bg-gold/25 text-[#7A5010]',
  'non-binding': 'bg-[#2A6080]/10 text-[#2A6080]',
  'superseded':  'bg-[#6B4E7A]/10 text-[#6B4E7A]',
  'lapsed':      'bg-cream-dark/40 text-navy/50',
};

export const REPORTING_STATUS_COLORS = {
  'compliant':      'bg-sage/20 text-sage-dark',
  'late':           'bg-gold/20 text-gold-dark',
  'non-reporting':  'bg-[#8B3A3A]/15 text-[#8B3A3A]',
  'n/a':            'bg-cream-dark/30 text-navy/40',
};

export const BEHAVIOUR_STATUS_COLORS = {
  'compliant':     'bg-sage/20 text-sage-dark',
  'partial':       'bg-gold/20 text-gold-dark',
  'non-compliant': 'bg-[#8B3A3A]/15 text-[#8B3A3A]',
  'disputed':      'bg-gold/25 text-[#7A5010]',
};

export const OBLIGATION_TYPE_COLORS = {
  'binary':  'bg-[#2E4A6B]/10 text-[#2E4A6B]',
  'scalar':  'bg-[#6B4E7A]/10 text-[#6B4E7A]',
  'mixed':   'bg-navy/10 text-navy',
};

export const ENFORCEMENT_CHANNEL_COLORS = {
  'centralised':  'bg-[#3D6B7A]/10 text-[#3D6B7A]',
  'distributed':  'bg-[#2A6080]/10 text-[#2A6080]',
  'bilateral':    'bg-[#7A5C42]/10 text-[#7A5C42]',
  'none':         'bg-cream-dark/30 text-navy/40',
};

export const NOTABLE_ABSENCES = [
  {
    name: 'ICCPR',
    full: 'International Covenant on Civil and Political Rights',
    signed: 1998,
    notes: 'Signed in 1998 but not ratified in 27+ years. Key sticking point: independent oversight body and freedoms of expression/assembly incompatible with Party governance model.',
    cat: 'Human rights',
    obligation_type: 'scalar',
    enforcement_channel: 'distributed',
  },
  {
    name: 'Rome Statute (ICC)',
    full: 'Rome Statute of the International Criminal Court',
    signed: null,
    notes: 'China has not signed. Objects to ICC jurisdiction over state officials and to the court\'s role in defining crimes of aggression.',
    cat: 'Human rights',
    obligation_type: 'binary',
    enforcement_channel: 'centralised',
  },
  {
    name: 'Convention 87 (ILO)',
    full: 'ILO Convention on Freedom of Association',
    signed: null,
    notes: 'Not ratified. Independent trade unions prohibited under Chinese law; the ACFTU is state-controlled. Major friction point in EU-China trade negotiations.',
    cat: 'Human rights',
    obligation_type: 'binary',
    enforcement_channel: 'distributed',
  },
  {
    name: 'Hague Convention on Apostille',
    full: 'Hague Convention Abolishing the Requirement of Legalisation for Foreign Public Documents',
    signed: null,
    notes: 'China only acceded in 2023 (effective 2023-11-07). Long holdout created bureaucratic friction for cross-border document recognition.',
    cat: 'Economic & trade',
    obligation_type: 'binary',
    enforcement_channel: 'centralised',
  },
  {
    name: 'OECD Anti-Bribery Convention',
    full: 'Convention on Combating Bribery of Foreign Public Officials in International Business Transactions',
    signed: null,
    notes: 'Not a party (non-OECD member). China has domestic anti-corruption law but no international reporting obligations under this framework.',
    cat: 'Economic & trade',
    obligation_type: 'scalar',
    enforcement_channel: 'distributed',
  },
];
