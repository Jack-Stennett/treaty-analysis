import React from 'react';
import { ExternalLink } from 'lucide-react';
import { useLang } from '../../i18n/LanguageContext';
import { t, label } from '../../i18n/translations';
import { REF_TYPE_STYLES } from '../../data/references';

export function StatPill({ label: pillLabel, value, color = 'bg-navy/10 text-navy' }) {
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${color}`}>
      <span className="text-current/60 font-normal">{pillLabel}</span>
      <span>{value}</span>
    </span>
  );
}

export function Section({ title, children }) {
  return (
    <div className="mb-8">
      <h3 className="font-serif text-base font-semibold text-navy mb-3 pb-2 border-b border-cream-border">
        {title}
      </h3>
      <div className="text-sm text-navy/75 leading-relaxed space-y-3">
        {children}
      </div>
    </div>
  );
}

export function FrameworkBox({ obligationType, enforcementChannel, verdict, notes }) {
  const { lang } = useLang();
  const tr = (key, ...args) => t(lang, key, ...args);

  const oblColor = {
    binary: 'bg-[#2E4A6B]/10 text-[#2E4A6B]',
    scalar: 'bg-[#6B4E7A]/10 text-[#6B4E7A]',
    mixed:  'bg-navy/10 text-navy',
  }[obligationType] || 'bg-navy/10 text-navy';

  const enfColor = {
    centralised:  'bg-[#3D6B7A]/10 text-[#3D6B7A]',
    distributed:  'bg-[#2A6080]/10 text-[#2A6080]',
    none:         'bg-cream-dark/30 text-navy/40',
  }[enforcementChannel] || 'bg-cream-dark/30 text-navy/40';

  const verdictColor = {
    compliant:      'border-sage text-sage-dark',
    partial:        'border-gold text-gold-dark',
    'non-compliant':'border-[#8B3A3A] text-[#8B3A3A]',
    disputed:       'border-gold text-gold-dark',
  }[verdict] || 'border-navy/30 text-navy';

  return (
    <div className="bg-cream-light border border-cream-border rounded-lg p-4 mb-6">
      <div className="text-xs font-semibold text-navy/40 uppercase tracking-widest mb-3">
        {tr('analyticalFramework')}
      </div>
      <div className="flex flex-wrap gap-2 mb-3">
        <span className={`inline-block px-2.5 py-1 rounded text-xs font-medium ${oblColor}`}>
          {tr('obligation')} {label(lang, obligationType)}
        </span>
        <span className={`inline-block px-2.5 py-1 rounded text-xs font-medium ${enfColor}`}>
          {tr('enforcement')} {label(lang, enforcementChannel)}
        </span>
        <span className={`inline-block px-2.5 py-1 rounded text-xs font-medium border ${verdictColor}`}>
          {tr('behaviour')} {label(lang, verdict)}
        </span>
      </div>
      {notes && <p className="text-xs text-navy/60 leading-relaxed">{notes}</p>}
    </div>
  );
}

export function Flag({ children, type = 'warning' }) {
  const styles = {
    warning: 'bg-gold/10 border-gold/30 text-gold-dark',
    danger:  'bg-[#8B3A3A]/8 border-[#8B3A3A]/25 text-[#8B3A3A]',
    success: 'bg-sage/10 border-sage/30 text-sage-dark',
    info:    'bg-[#2A6080]/8 border-[#2A6080]/25 text-[#2A6080]',
  }[type];

  return (
    <div className={`border rounded-lg px-4 py-3 text-xs leading-relaxed ${styles}`}>
      {children}
    </div>
  );
}

export function References({ refs }) {
  const { lang } = useLang();
  if (!refs || refs.length === 0) return null;
  const heading = lang === 'zh' ? '参考文献' : 'References & Sources';

  return (
    <div className="mt-10 pt-6 border-t border-cream-border">
      <h3 className="font-serif text-sm font-semibold text-navy/50 uppercase tracking-widest mb-4">{heading}</h3>
      <div className="space-y-2">
        {refs.map((ref, i) => {
          const style = REF_TYPE_STYLES[ref.type] || REF_TYPE_STYLES.official;
          return (
            <div key={i} className="flex items-start gap-3 text-xs">
              <span className={`shrink-0 mt-0.5 px-1.5 py-0.5 rounded text-xs font-medium ${style.cls}`}>
                {style.label}
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex items-start gap-1.5 flex-wrap">
                  <span className="font-medium text-navy">{ref.title}</span>
                  {ref.year && <span className="text-navy/40">({ref.year})</span>}
                </div>
                <div className="text-navy/50 mt-0.5">{ref.source}</div>
                {ref.note && <div className="text-navy/40 mt-0.5 italic leading-relaxed">{ref.note}</div>}
                {ref.url && (
                  <a href={ref.url} target="_blank" rel="noopener noreferrer"
                    className="text-gold-dark hover:text-navy transition-colors flex items-center gap-1 mt-1">
                    <ExternalLink size={11} />
                    <span className="truncate max-w-sm">{ref.url.replace(/^https?:\/\//, '').split('/')[0]}</span>
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function CaseStudyLayout({ title, subtitle, stats, children }) {
  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <div className="mb-6">
        <h2 className="font-serif text-2xl font-bold text-navy tracking-tight mb-1">{title}</h2>
        {subtitle && <p className="text-navy/50 text-sm italic">{subtitle}</p>}
        {stats && (
          <div className="flex flex-wrap gap-2 mt-3">
            {stats.map((s, i) => <StatPill key={i} {...s} />)}
          </div>
        )}
      </div>
      {children}
    </div>
  );
}
