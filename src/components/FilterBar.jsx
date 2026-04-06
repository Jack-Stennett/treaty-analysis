import React from 'react';
import { CATEGORIES, STATUS_VOCAB } from '../data/constants';
import { useLang } from '../i18n/LanguageContext';
import { t, label } from '../i18n/translations';

export default function FilterBar({ filters, onChange }) {
  const { lang } = useLang();
  const tr = (key, ...args) => t(lang, key, ...args);

  const toggle = (key, val) => {
    onChange(prev => ({
      ...prev,
      [key]: prev[key] === val ? null : val,
    }));
  };

  const pillClass = (active) =>
    `px-3 py-1 rounded-full text-xs font-medium cursor-pointer transition-colors border ${
      active
        ? 'bg-navy text-cream border-navy'
        : 'bg-cream text-navy/70 border-cream-border hover:border-navy/40 hover:text-navy'
    }`;

  const sectionLabel = 'text-xs font-semibold text-navy/40 uppercase tracking-widest mb-2';

  return (
    <div className="space-y-3 mb-6 bg-cream-light rounded-lg border border-cream-border p-4 shadow-sm">
      <div>
        <div className={sectionLabel}>{tr('filterCategory')}</div>
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map(c => (
            <button key={c} className={pillClass(filters.cat === c)} onClick={() => toggle('cat', c)}>
              {label(lang, c)}
            </button>
          ))}
        </div>
      </div>
      <div>
        <div className={sectionLabel}>{tr('filterStatus')}</div>
        <div className="flex flex-wrap gap-2">
          {STATUS_VOCAB.map(s => (
            <button key={s} className={pillClass(filters.status === s)} onClick={() => toggle('status', s)}>
              {label(lang, s)}
            </button>
          ))}
        </div>
      </div>
      <div>
        <div className={sectionLabel}>{tr('filterObligation')}</div>
        <div className="flex flex-wrap gap-2">
          {['binary', 'scalar', 'mixed'].map(v => (
            <button key={v} className={pillClass(filters.obligation_type === v)} onClick={() => toggle('obligation_type', v)}>
              {label(lang, v)}
            </button>
          ))}
        </div>
      </div>
      <div>
        <div className={sectionLabel}>{tr('filterEnforcement')}</div>
        <div className="flex flex-wrap gap-2">
          {['centralised', 'distributed', 'none'].map(v => (
            <button key={v} className={pillClass(filters.enforcement_channel === v)} onClick={() => toggle('enforcement_channel', v)}>
              {label(lang, v)}
            </button>
          ))}
        </div>
      </div>
      <div>
        <div className={sectionLabel}>{tr('filterBehaviour')}</div>
        <div className="flex flex-wrap gap-2">
          {['compliant', 'partial', 'non-compliant', 'disputed'].map(v => (
            <button key={v} className={pillClass(filters.behaviour_status === v)} onClick={() => toggle('behaviour_status', v)}>
              {label(lang, v)}
            </button>
          ))}
        </div>
      </div>
      {Object.values(filters).some(v => v !== null) && (
        <button
          onClick={() => onChange({ cat: null, status: null, obligation_type: null, enforcement_channel: null, behaviour_status: null })}
          className="text-xs text-gold-dark hover:text-navy transition-colors underline underline-offset-2"
        >
          {tr('filterClearAll')}
        </button>
      )}
    </div>
  );
}
