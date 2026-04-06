import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { NOTABLE_ABSENCES, CATEGORY_COLORS, OBLIGATION_TYPE_COLORS, ENFORCEMENT_CHANNEL_COLORS } from '../data/constants';
import { useLang } from '../i18n/LanguageContext';
import { t, label } from '../i18n/translations';

function Badge({ text, colorMap }) {
  const { lang } = useLang();
  const cls = colorMap[text] || 'bg-cream-dark/30 text-navy/50';
  return <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${cls}`}>{label(lang, text)}</span>;
}

export default function NotableAbsences() {
  const { lang } = useLang();
  const tr = (key, ...args) => t(lang, key, ...args);
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-cream-light border border-gold/35 rounded-lg mb-6 shadow-sm">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-4 py-3 text-left"
      >
        <div>
          <span className="font-semibold font-serif text-navy text-sm">{tr('notableTitle')}</span>
          <span className="ml-2 text-xs text-gold-dark">{tr('notableItems', NOTABLE_ABSENCES.length)}</span>
        </div>
        {open
          ? <ChevronUp size={16} className="text-gold" />
          : <ChevronDown size={16} className="text-gold" />}
      </button>
      {open && (
        <div className="px-4 pb-4 space-y-2 border-t border-gold/20 pt-3">
          {NOTABLE_ABSENCES.map((a, i) => (
            <div key={i} className="bg-cream border border-cream-border rounded-lg p-3">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className="font-semibold text-sm text-navy">{a.name}</span>
                  <span className="ml-2 text-xs text-navy/40 italic">{a.full}</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-2">
                <span className="inline-block px-2 py-0.5 rounded text-xs font-medium text-white"
                  style={{ backgroundColor: CATEGORY_COLORS[a.cat] }}>
                  {label(lang, a.cat)}
                </span>
                {a.obligation_type && <Badge text={a.obligation_type} colorMap={OBLIGATION_TYPE_COLORS} />}
                {a.enforcement_channel && <Badge text={a.enforcement_channel} colorMap={ENFORCEMENT_CHANNEL_COLORS} />}
              </div>
              <p className="text-xs text-navy/55 mt-2 leading-relaxed">{a.notes}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
