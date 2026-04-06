// UI string translations
export const UI = {
  en: {
    // Header
    siteTitle: 'China Treaty Database',
    siteSubtitle: 'Cataloguing treaty engagement, compliance, and obligation structure',
    langToggle: '中文',

    // Tabs
    tabOverview: 'Overview',
    tabIndex: 'Treaty Index',
    tabCaseStudies: 'Case Studies',
    studiesSidebarLabel: 'Studies',

    // Metric cards
    metricTotal: 'Total Treaties',
    metricPartyTo: 'China Party To',
    metricRatified: 'Ratified',
    metricSignedOnly: 'Signed Only',
    metricNotSigned: 'Not Signed',
    metricInForce: 'In Force',
    metricDisputed: 'Disputed',
    metricNonCompliant: 'Non-Compliant',
    metricSubPct: (pct) => `${pct}% of dataset`,
    metricSubAwaiting: 'Awaiting ratification',
    metricSubAbsent: 'China absent',
    metricSubFormal: 'Formal vs behaviour gap',
    metricSubBehaviour: 'Behaviour assessment',

    // FilterBar
    filterCategory: 'Category',
    filterStatus: 'Status',
    filterObligation: 'Obligation Type',
    filterEnforcement: 'Enforcement Channel',
    filterBehaviour: 'Behaviour Status',
    filterClearAll: 'Clear all filters',

    // EraBarChart
    chartTitle: 'Treaties by Era & Category',
    chartClickHint: 'click a segment or legend to filter',
    chartClear: '✕ clear',
    chartAllEras: '— all eras',
    chartTooltipTreaties: (n) => ` ${n} treaties`,
    chartEraTotal: 'Era total:',

    // EraDetailPanel
    panelTreaties: (n) => `${n} treaties`,
    panelAll: 'All',
    panelAllEras: '— all eras',

    // NotableAbsences widget
    notableTitle: 'Notable Absences & Analytical Flags',
    notableItems: (n) => `${n} items`,

    // TreatyTable
    tableTitle: 'Treaty Index',
    tableSearch: 'Search treaties, categories, tags…',
    tableResults: (n) => `${n} results`,
    tableColTreaty: 'Treaty',
    tableColCategory: 'Category',
    tableColSigned: 'Signed',
    tableColRatified: 'Ratified',
    tableColEra: 'Era',
    tableColStatus: 'Status',
    tableColObligation: 'Obligation',
    tableColEnforcement: 'Enforcement',
    tableColBehaviour: 'Behaviour',
    tableColReporting: 'Reporting',
    tableColMulti: 'Multi',
    tableParties: 'Parties:',
    tableOpened: 'Opened:',
    tableEntryForce: 'Entry into force:',
    tableSigningLag: 'Signing lag:',
    tableRatLag: 'Ratification lag:',
    tableAdoptionPct: 'Adoption percentile:',
    tableYr: 'yr',
    tableReservations: 'Reservations',
    tableComplianceFlags: 'Compliance flags',
    tableUNTreaty: 'UN Treaty Collection',

    // CaseStudyLayout
    analyticalFramework: 'Analytical Framework',
    obligation: 'Obligation:',
    enforcement: 'Enforcement:',
    behaviour: 'Behaviour:',

    // NotableAbsencesStudy
    notParty: 'not party',
    signedYear: (y) => `signed ${y}`,
  },

  zh: {
    // Header
    siteTitle: '中国条约数据库',
    siteSubtitle: '记录条约参与、履约情况与义务结构',
    langToggle: 'English',

    // Tabs
    tabOverview: '总览',
    tabIndex: '条约索引',
    tabCaseStudies: '案例研究',
    studiesSidebarLabel: '研究',

    // Metric cards
    metricTotal: '条约总数',
    metricPartyTo: '中国为缔约方',
    metricRatified: '已批准',
    metricSignedOnly: '仅签署',
    metricNotSigned: '未签署',
    metricInForce: '已生效',
    metricDisputed: '存在争议',
    metricNonCompliant: '不合规',
    metricSubPct: (pct) => `占数据集${pct}%`,
    metricSubAwaiting: '待批准',
    metricSubAbsent: '中国缺席',
    metricSubFormal: '形式与行为差距',
    metricSubBehaviour: '行为评估',

    // FilterBar
    filterCategory: '类别',
    filterStatus: '状态',
    filterObligation: '义务类型',
    filterEnforcement: '执行渠道',
    filterBehaviour: '行为状态',
    filterClearAll: '清除所有筛选',

    // EraBarChart
    chartTitle: '按时期与类别分布',
    chartClickHint: '点击图表区段或图例进行筛选',
    chartClear: '✕ 清除',
    chartAllEras: '—所有时期',
    chartTooltipTreaties: (n) => ` ${n}项条约`,
    chartEraTotal: '该时期合计：',

    // EraDetailPanel
    panelTreaties: (n) => `${n}项条约`,
    panelAll: '全部',
    panelAllEras: '—所有时期',

    // NotableAbsences widget
    notableTitle: '重要缺席与分析标注',
    notableItems: (n) => `${n}项`,

    // TreatyTable
    tableTitle: '条约索引',
    tableSearch: '搜索条约、类别、标签…',
    tableResults: (n) => `${n}条结果`,
    tableColTreaty: '条约',
    tableColCategory: '类别',
    tableColSigned: '签署',
    tableColRatified: '批准',
    tableColEra: '时期',
    tableColStatus: '状态',
    tableColObligation: '义务',
    tableColEnforcement: '执行',
    tableColBehaviour: '行为',
    tableColReporting: '报告',
    tableColMulti: '多边',
    tableParties: '缔约方：',
    tableOpened: '开放时间：',
    tableEntryForce: '生效日期：',
    tableSigningLag: '签署滞后：',
    tableRatLag: '批准滞后：',
    tableAdoptionPct: '加入百分位：',
    tableYr: '年',
    tableReservations: '保留条款',
    tableComplianceFlags: '合规标注',
    tableUNTreaty: '联合国条约汇编',

    // CaseStudyLayout
    analyticalFramework: '分析框架',
    obligation: '义务：',
    enforcement: '执行：',
    behaviour: '行为：',

    // NotableAbsencesStudy
    notParty: '非缔约方',
    signedYear: (y) => `已签署（${y}年）`,
  },
};

/** Translate a UI key */
export function t(lang, key, ...args) {
  const val = UI[lang]?.[key] ?? UI.en[key] ?? key;
  return typeof val === 'function' ? val(...args) : val;
}

// ── Data-label translations (category names, status values, etc.) ──────────

const LABELS_ZH = {
  // Categories
  'Environmental': '环境',
  'Arms control / CBRN': '军备控制/化生放核',
  'Human rights': '人权',
  'Economic & trade': '经济与贸易',
  'Military & security': '军事与安全',
  'Technology & science': '技术与科学',
  'Maritime & territory': '海洋与领土',
  'Political & territorial': '政治与领土',

  // Eras
  'Mao (1949–76)': '毛泽东时代（1949–76）',
  'Deng (1978–92)': '邓小平时代（1978–92）',
  'Jiang (1992–02)': '江泽民时代（1992–02）',
  'Hu (2002–12)': '胡锦涛时代（2002–12）',
  'Xi (2012–)': '习近平时代（2012–）',

  // Status
  'in force': '已生效',
  'expired': '已到期',
  'disputed': '存在争议',
  'signed only': '仅签署',
  'not signed': '未签署',
  'suspended': '已暂停',
  'non-binding': '非约束性',
  'superseded': '已取代',

  // Obligation type
  'binary': '二元式',
  'scalar': '渐进式',
  'mixed': '混合式',

  // Enforcement channel
  'centralised': '集中式',
  'distributed': '分散式',
  'bilateral': '双边',
  'none': '无',

  // Status
  'lapsed': '已失效',

  // Behaviour / reporting status
  'compliant': '合规',
  'partial': '部分合规',
  'non-compliant': '不合规',
  'late': '逾期',
  'non-reporting': '未报告',
  'n/a': '不适用',
};

/** Translate a data value (category, status, etc.) — falls back to original */
export function label(lang, val) {
  if (!val) return val;
  if (lang !== 'zh') return val;
  return LABELS_ZH[val] ?? val;
}
