import React from 'react';
import { X } from 'lucide-react';
import { STATUS_COLORS, CATEGORY_COLORS, OBLIGATION_TYPE_COLORS, ENFORCEMENT_CHANNEL_COLORS, BEHAVIOUR_STATUS_COLORS } from '../data/constants';
import { useLang } from '../i18n/LanguageContext';
import { t, label } from '../i18n/translations';

function Badge({ text, colorMap }) {
  const { lang } = useLang();
  const cls = colorMap[text] || 'bg-cream-dark/30 text-navy/50';
  return <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${cls}`}>{label(lang, text)}</span>;
}

export default function EraDetailPanel({ selection, treaties, onClose }) {
  const { lang } = useLang();
  const tr = (key, ...args) => t(lang, key, ...args);

  const { era, cat } = selection;
  const eraTreaties = treaties.filter(t =>
    (!era || t.era === era) && (!cat || t.cat === cat)
  );

  const eraLabel = era ? label(lang, era) : null;
  const catLabel = cat ? label(lang, cat) : null;

  const title = eraLabel && catLabel ? `${catLabel} · ${eraLabel}`
              : eraLabel              ? eraLabel
              : catLabel              ? catLabel
              : tr('panelAll');

  return (
    <div className="bg-cream-light rounded-lg border border-gold/40 p-4 mb-6 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-base font-semibold font-serif text-navy">
          {title}
          <span className="ml-2 text-sm font-normal text-gold-dark">{tr('panelTreaties', eraTreaties.length)}</span>
        </h2>
        <button onClick={onClose} className="text-navy/30 hover:text-navy transition-colors">
          <X size={16} />
        </button>
      </div>
      <div className="space-y-2 max-h-96 overflow-y-auto pr-1">
        {eraTreaties.map(t => (
          <div key={t.id} className="border border-cream-border rounded-lg p-3 bg-cream">
            <div className="flex items-start justify-between gap-2">
              <div className="font-medium text-sm text-navy">{t.name}</div>
              <Badge text={t.status} colorMap={STATUS_COLORS} />
            </div>
            <div className="flex flex-wrap gap-1.5 mt-2">
              <span className="inline-block px-2 py-0.5 rounded text-xs font-medium text-white"
                style={{ backgroundColor: CATEGORY_COLORS[t.cat] }}>
                {label(lang, t.cat)}
              </span>
              {t.obligation_type && <Badge text={t.obligation_type} colorMap={OBLIGATION_TYPE_COLORS} />}
              {t.enforcement_channel && <Badge text={t.enforcement_channel} colorMap={ENFORCEMENT_CHANNEL_COLORS} />}
              {t.behaviour_status && <Badge text={t.behaviour_status} colorMap={BEHAVIOUR_STATUS_COLORS} />}
            </div>
            {t.notes && <p className="text-xs text-navy/50 mt-2 leading-relaxed">{t.notes}</p>}
            {t.compliance_flags.length > 0 && (
              <div className="mt-2 space-y-1">
                {t.compliance_flags.map((f, i) => (
                  <div key={i} className="text-xs text-[#8B3A3A] bg-[#8B3A3A]/8 border border-[#8B3A3A]/20 rounded px-2 py-1.5">
                    <span className="font-semibold">{f.source} ({f.year}):</span> {f.summary}
                  </div>
                ))}
              </div>
            )}
            {t.reservations.length > 0 && (
              <div className="mt-2">
                <div className="text-xs text-gold-dark bg-gold/10 border border-gold/25 rounded px-2 py-1.5">
                  <span className="font-semibold">{lang === 'zh' ? '保留条款：' : 'Reservations:'}</span> {t.reservations.join('; ')}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
