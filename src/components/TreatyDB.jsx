import React, { useState, useMemo } from 'react';
import { TREATIES } from '../data/treaties';
import MetricCards from './MetricCards';
import FilterBar from './FilterBar';
import EraBarChart from './EraBarChart';
import CategoryBarChart from './CategoryBarChart';
import EraDetailPanel from './EraDetailPanel';
import NotableAbsences from './NotableAbsences';
import TreatyTable from './TreatyTable';
import TabNav from './TabNav';
import CWCStudy from './case-studies/CWCStudy';
import MontrealStudy from './case-studies/MontrealStudy';
import IAEAStudy from './case-studies/IAEAStudy';
import WTOStudy from './case-studies/WTOStudy';
import NotableAbsencesStudy from './case-studies/NotableAbsencesStudy';
import { useLang } from '../i18n/LanguageContext';
import { t } from '../i18n/translations';
import AnalysisPage from './AnalysisPage';
import AboutPage from './AboutPage';

const DEFAULT_FILTERS = {
  cat: null,
  status: null,
  obligation_type: null,
  enforcement_channel: null,
  behaviour_status: null,
};

export default function TreatyDB() {
  const { lang, setLang } = useLang();
  const tr = (key, ...args) => t(lang, key, ...args);

  const CASE_STUDIES = [
    { id: 'absences',  label: tr('tabCaseStudies') === '案例研究' ? '重要缺席' : 'Notable Absences',      component: NotableAbsencesStudy },
    { id: 'wto',       label: 'WTO',                                                                       component: WTOStudy },
    { id: 'iaea',      label: 'IAEA',                                                                      component: IAEAStudy },
    { id: 'cwc',       label: lang === 'zh' ? '化学武器公约' : 'CWC',                                     component: CWCStudy },
    { id: 'montreal',  label: lang === 'zh' ? '蒙特利尔议定书' : 'Montreal Protocol',                     component: MontrealStudy },
  ];

  const TOP_TABS = [
    { id: 'overview',      label: tr('tabOverview') },
    { id: 'index',         label: tr('tabIndex') },
    { id: 'case-studies',  label: tr('tabCaseStudies') },
    { id: 'analysis',      label: lang === 'zh' ? '分析' : 'Analysis' },
    { id: 'about',         label: lang === 'zh' ? '关于' : 'About' },
  ];

  const [tab, setTab] = useState('overview');
  const [caseStudy, setCaseStudy] = useState('absences');
  const [filters, setFilters] = useState(DEFAULT_FILTERS);
  const [selection, setSelection] = useState(null);

  const filtered = useMemo(() => {
    return TREATIES.filter(t => {
      if (filters.cat && t.cat !== filters.cat) return false;
      if (filters.status && t.status !== filters.status) return false;
      if (filters.obligation_type && t.obligation_type !== filters.obligation_type) return false;
      if (filters.enforcement_channel && t.enforcement_channel !== filters.enforcement_channel) return false;
      if (filters.behaviour_status && t.behaviour_status !== filters.behaviour_status) return false;
      return true;
    });
  }, [filters]);

  const ActiveCaseStudy = CASE_STUDIES.find(c => c.id === caseStudy)?.component;

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="bg-navy px-6 py-5 flex items-start justify-between">
        <div>
          <h1 className="font-serif text-2xl font-bold text-cream tracking-tight">
            {tr('siteTitle')}
          </h1>
          <p className="text-sm text-cream/50 mt-1 font-serif">
            {tr('siteSubtitle')}
            <span className="ml-2 text-gold/80">{TREATIES.length} {lang === 'zh' ? '项条约文书' : 'instruments'}</span>
          </p>
        </div>
        <button
          onClick={() => setLang(l => l === 'en' ? 'zh' : 'en')}
          className="mt-1 shrink-0 px-3 py-1.5 text-xs font-medium rounded-lg border border-gold/40 text-gold hover:bg-gold/10 transition-colors"
        >
          {tr('langToggle')}
        </button>
      </header>
      <div className="h-px bg-gold/60" />

      {/* Top tab nav */}
      <TabNav tabs={TOP_TABS} active={tab} onChange={setTab} />

      {/* Overview */}
      {tab === 'overview' && (
        <main className="max-w-7xl mx-auto px-4 pt-6 pb-16">
          <MetricCards treaties={TREATIES} />
          <FilterBar filters={filters} onChange={setFilters} />
          <EraBarChart treaties={filtered} onSelect={setSelection} selection={selection} />
          <CategoryBarChart treaties={filtered} onSelect={setSelection} selection={selection} />
          {selection && (
            <EraDetailPanel selection={selection} treaties={filtered} onClose={() => setSelection(null)} />
          )}
          <NotableAbsences />
        </main>
      )}

      {/* Treaty Index */}
      {tab === 'index' && (
        <main className="max-w-7xl mx-auto px-4 pt-6 pb-16">
          <TreatyTable treaties={TREATIES} />
        </main>
      )}

      {/* Analysis */}
      {tab === 'analysis' && (
        <main className="max-w-7xl mx-auto px-4 pt-6 pb-16">
          <AnalysisPage />
        </main>
      )}

      {/* About */}
      {tab === 'about' && (
        <main className="max-w-7xl mx-auto px-4 pt-6 pb-16">
          <AboutPage />
        </main>
      )}

      {/* Case Studies */}
      {tab === 'case-studies' && (
        <div className="flex min-h-[calc(100vh-120px)]">
          {/* Sidebar */}
          <aside className="w-52 shrink-0 border-r border-cream-border bg-cream-light pt-6 px-3">
            <div className="text-xs font-semibold text-navy/35 uppercase tracking-widest px-2 mb-3">
              {tr('studiesSidebarLabel')}
            </div>
            <nav className="space-y-0.5">
              {CASE_STUDIES.map(cs => (
                <button
                  key={cs.id}
                  onClick={() => setCaseStudy(cs.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm font-serif transition-colors ${
                    caseStudy === cs.id
                      ? 'bg-navy text-cream'
                      : 'text-navy/60 hover:text-navy hover:bg-cream-dark/30'
                  }`}
                >
                  {cs.label}
                </button>
              ))}
            </nav>
          </aside>

          {/* Content */}
          <div className="flex-1 overflow-y-auto">
            {ActiveCaseStudy && <ActiveCaseStudy />}
          </div>
        </div>
      )}
    </div>
  );
}
