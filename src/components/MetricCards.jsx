import React from 'react';
import { useLang } from '../i18n/LanguageContext';
import { t } from '../i18n/translations';

export default function MetricCards({ treaties }) {
  const { lang } = useLang();
  const tr = (key, ...args) => t(lang, key, ...args);

  const total = treaties.length;
  const signed = treaties.filter(t => t.by).length;
  const ratified = treaties.filter(t => t.rat).length;
  const signedOnly = treaties.filter(t => t.by && !t.rat).length;
  const notSigned = treaties.filter(t => !t.by).length;
  const inForce = treaties.filter(t => t.status === 'in force').length;
  const disputed = treaties.filter(t => t.status === 'disputed').length;
  const nonCompliant = treaties.filter(t => t.behaviour_status === 'non-compliant').length;

  const cards = [
    { label: tr('metricTotal'),        value: total,        border: 'border-navy/20',      accent: 'text-navy' },
    { label: tr('metricPartyTo'),      value: signed,       border: 'border-navy/30',      accent: 'text-navy',       sub: tr('metricSubPct', Math.round(signed/total*100)) },
    { label: tr('metricRatified'),     value: ratified,     border: 'border-sage',          accent: 'text-sage-dark',  sub: tr('metricSubPct', Math.round(ratified/total*100)) },
    { label: tr('metricSignedOnly'),   value: signedOnly,   border: 'border-gold',          accent: 'text-gold-dark',  sub: tr('metricSubAwaiting') },
    { label: tr('metricNotSigned'),    value: notSigned,    border: 'border-[#8B3A3A]/40', accent: 'text-[#8B3A3A]', sub: tr('metricSubAbsent') },
    { label: tr('metricInForce'),      value: inForce,      border: 'border-sage/60',       accent: 'text-sage-dark' },
    { label: tr('metricDisputed'),     value: disputed,     border: 'border-gold/60',       accent: 'text-gold-dark',  sub: tr('metricSubFormal') },
    { label: tr('metricNonCompliant'), value: nonCompliant, border: 'border-[#8B3A3A]/50', accent: 'text-[#8B3A3A]', sub: tr('metricSubBehaviour') },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
      {cards.map(c => (
        <div key={c.label} className={`rounded-lg border-l-4 bg-cream-light p-4 shadow-sm ${c.border}`}>
          <div className={`text-2xl font-bold font-serif ${c.accent}`}>{c.value}</div>
          <div className="text-sm font-medium text-navy mt-0.5">{c.label}</div>
          {c.sub && <div className="text-xs text-navy/50 mt-0.5">{c.sub}</div>}
        </div>
      ))}
    </div>
  );
}
