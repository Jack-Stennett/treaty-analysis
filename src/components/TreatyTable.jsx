import React, { useState, useMemo } from 'react';
import { ChevronUp, ChevronDown, Search, ExternalLink } from 'lucide-react';
import { STATUS_COLORS, CATEGORY_COLORS, OBLIGATION_TYPE_COLORS, ENFORCEMENT_CHANNEL_COLORS, BEHAVIOUR_STATUS_COLORS, REPORTING_STATUS_COLORS } from '../data/constants';
import { useLang } from '../i18n/LanguageContext';
import { t, label } from '../i18n/translations';

function Badge({ text, colorMap }) {
  const { lang } = useLang();
  if (!text) return null;
  const cls = colorMap[text] || 'bg-cream-dark/30 text-navy/50';
  return <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${cls}`}>{label(lang, text)}</span>;
}

function SortIcon({ col, sortKey, sortDir }) {
  if (sortKey !== col) return <ChevronUp size={12} className="text-cream/30" />;
  return sortDir === 'asc'
    ? <ChevronUp size={12} className="text-gold" />
    : <ChevronDown size={12} className="text-gold" />;
}

export default function TreatyTable({ treaties }) {
  const { lang } = useLang();
  const tr = (key, ...args) => t(lang, key, ...args);

  const COLUMNS = [
    { key: 'name',                label: tr('tableColTreaty') },
    { key: 'cat',                 label: tr('tableColCategory') },
    { key: 'signed',              label: tr('tableColSigned') },
    { key: 'ratified',            label: tr('tableColRatified') },
    { key: 'era',                 label: tr('tableColEra') },
    { key: 'status',              label: tr('tableColStatus') },
    { key: 'obligation_type',     label: tr('tableColObligation') },
    { key: 'enforcement_channel', label: tr('tableColEnforcement') },
    { key: 'behaviour_status',    label: tr('tableColBehaviour') },
    { key: 'reporting_status',    label: tr('tableColReporting') },
  ];

  const [search, setSearch] = useState('');
  const [sortKey, setSortKey] = useState('ratified');
  const [sortDir, setSortDir] = useState('asc');
  const [expanded, setExpanded] = useState(null);

  const sorted = useMemo(() => {
    const filtered = treaties.filter(t =>
      t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.cat.toLowerCase().includes(search.toLowerCase()) ||
      (t.notes || '').toLowerCase().includes(search.toLowerCase()) ||
      (t.tags || []).some(tag => tag.toLowerCase().includes(search.toLowerCase()))
    );
    return [...filtered].sort((a, b) => {
      let av = a[sortKey], bv = b[sortKey];
      if (av === null || av === undefined) av = sortDir === 'asc' ? Infinity : -Infinity;
      if (bv === null || bv === undefined) bv = sortDir === 'asc' ? Infinity : -Infinity;
      if (typeof av === 'string') return sortDir === 'asc' ? av.localeCompare(bv) : bv.localeCompare(av);
      return sortDir === 'asc' ? av - bv : bv - av;
    });
  }, [treaties, search, sortKey, sortDir]);

  const handleSort = (key) => {
    if (sortKey === key) setSortDir(d => d === 'asc' ? 'desc' : 'asc');
    else { setSortKey(key); setSortDir('asc'); }
  };

  return (
    <div className="bg-cream-light rounded-lg border border-cream-border shadow-sm">
      {/* Table header bar */}
      <div className="p-4 border-b border-cream-border flex items-center gap-3">
        <h2 className="font-serif font-semibold text-navy text-sm">{tr('tableTitle')}</h2>
        <div className="relative flex-1 max-w-xs">
          <Search size={14} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-navy/30" />
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder={tr('tableSearch')}
            className="w-full pl-8 pr-3 py-1.5 text-sm border border-cream-border rounded-lg bg-cream text-navy placeholder-navy/30
                       focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/60"
          />
        </div>
        <span className="text-xs text-navy/40">{tr('tableResults', sorted.length)}</span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-navy border-b border-navy/80">
              {COLUMNS.map(col => (
                <th
                  key={col.key}
                  onClick={() => handleSort(col.key)}
                  className="px-3 py-2.5 text-left text-xs font-semibold text-cream/70 cursor-pointer hover:text-cream whitespace-nowrap transition-colors"
                >
                  <span className="flex items-center gap-1">
                    {col.label} <SortIcon col={col.key} sortKey={sortKey} sortDir={sortDir} />
                  </span>
                </th>
              ))}
              <th className="px-3 py-2.5 text-left text-xs font-semibold text-cream/70">{tr('tableColMulti')}</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map(t => (
              <React.Fragment key={t.id}>
                <tr
                  className="border-b border-cream-border hover:bg-cream cursor-pointer transition-colors"
                  onClick={() => setExpanded(expanded === t.id ? null : t.id)}
                >
                  <td className="px-3 py-2 font-medium text-navy max-w-xs">
                    <div className="truncate">{t.name}</div>
                  </td>
                  <td className="px-3 py-2">
                    <span className="inline-block px-2 py-0.5 rounded text-xs font-medium text-white"
                      style={{ backgroundColor: CATEGORY_COLORS[t.cat] }}>
                      {label(lang, t.cat)}
                    </span>
                  </td>
                  <td className="px-3 py-2 text-navy/60">{t.signed ?? '—'}</td>
                  <td className="px-3 py-2 text-navy/60">{t.ratified ?? '—'}</td>
                  <td className="px-3 py-2 text-navy/40 text-xs whitespace-nowrap">{t.era ? label(lang, t.era) : '—'}</td>
                  <td className="px-3 py-2"><Badge text={t.status} colorMap={STATUS_COLORS} /></td>
                  <td className="px-3 py-2"><Badge text={t.obligation_type} colorMap={OBLIGATION_TYPE_COLORS} /></td>
                  <td className="px-3 py-2"><Badge text={t.enforcement_channel} colorMap={ENFORCEMENT_CHANNEL_COLORS} /></td>
                  <td className="px-3 py-2"><Badge text={t.behaviour_status} colorMap={BEHAVIOUR_STATUS_COLORS} /></td>
                  <td className="px-3 py-2"><Badge text={t.reporting_status} colorMap={REPORTING_STATUS_COLORS} /></td>
                  <td className="px-3 py-2 text-center text-gold/70 text-xs">{t.multi ? '✓' : ''}</td>
                </tr>
                {expanded === t.id && (
                  <tr className="border-b border-cream-border bg-cream">
                    <td colSpan={11} className="px-4 py-3">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                        <div>
                          {t.notes && <p className="text-navy/65 mb-2 leading-relaxed">{t.notes}</p>}
                          {t.parties && <p className="text-navy/50"><span className="font-semibold text-navy/70">{tr('tableParties')}</span> {t.parties}</p>}
                          {t.treaty_opened && <p className="text-navy/50"><span className="font-semibold text-navy/70">{tr('tableOpened')}</span> {t.treaty_opened}</p>}
                          {t.entry_into_force && <p className="text-navy/50"><span className="font-semibold text-navy/70">{tr('tableEntryForce')}</span> {t.entry_into_force}</p>}
                          {t.signing_lag_years != null && <p className="text-navy/50"><span className="font-semibold text-navy/70">{tr('tableSigningLag')}</span> {t.signing_lag_years} {tr('tableYr')}</p>}
                          {t.ratification_lag_years != null && <p className="text-navy/50"><span className="font-semibold text-navy/70">{tr('tableRatLag')}</span> {t.ratification_lag_years} {tr('tableYr')}</p>}
                          {t.adoption_percentile != null && <p className="text-navy/50"><span className="font-semibold text-navy/70">{tr('tableAdoptionPct')}</span> {Math.round(t.adoption_percentile * 100)}%</p>}
                        </div>
                        <div>
                          {t.reservations.length > 0 && (
                            <div className="mb-2">
                              <div className="font-semibold text-gold-dark mb-1">{tr('tableReservations')}</div>
                              <div className="bg-gold/10 border border-gold/25 rounded px-2 py-1.5 text-navy/65">
                                {t.reservations.map((r, i) => <div key={i}>{r}</div>)}
                              </div>
                            </div>
                          )}
                          {t.compliance_flags.length > 0 && (
                            <div className="mb-2">
                              <div className="font-semibold text-[#8B3A3A] mb-1">{tr('tableComplianceFlags')}</div>
                              {t.compliance_flags.map((f, i) => (
                                <div key={i} className="bg-[#8B3A3A]/8 border border-[#8B3A3A]/20 rounded px-2 py-1.5 text-[#8B3A3A] mb-1">
                                  <span className="font-semibold">{f.source} ({f.year}):</span> {f.summary}
                                </div>
                              ))}
                            </div>
                          )}
                          {t.tags.length > 0 && (
                            <div className="flex flex-wrap gap-1 mt-1">
                              {t.tags.map(tag => (
                                <span key={tag} className="px-1.5 py-0.5 bg-cream-dark/40 text-navy/50 rounded text-xs">#{tag}</span>
                              ))}
                            </div>
                          )}
                          {t.source_url && (
                            <a href={t.source_url} target="_blank" rel="noopener noreferrer"
                              className="text-gold-dark hover:text-navy transition-colors flex items-center gap-1 mt-2">
                              <ExternalLink size={12} /> {tr('tableUNTreaty')}
                            </a>
                          )}
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
