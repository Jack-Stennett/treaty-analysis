import React from 'react';

export default function TabNav({ tabs, active, onChange }) {
  return (
    <nav className="flex border-b border-cream-border bg-cream-light">
      {tabs.map(t => (
        <button
          key={t.id}
          onClick={() => onChange(t.id)}
          className={`px-5 py-3 text-sm font-serif font-medium transition-colors relative
            ${active === t.id
              ? 'text-navy border-b-2 border-gold -mb-px'
              : 'text-navy/45 hover:text-navy/75'
            }`}
        >
          {t.label}
        </button>
      ))}
    </nav>
  );
}
