import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { ERAS, CATEGORIES, CATEGORY_COLORS } from '../data/constants';
import { useLang } from '../i18n/LanguageContext';
import { t, label } from '../i18n/translations';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

export default function EraBarChart({ treaties, onSelect, selection }) {
  const { lang } = useLang();
  const tr = (key, ...args) => t(lang, key, ...args);

  const eraLabels = ERAS.map(e => label(lang, e.label));
  const catLabels = CATEGORIES.map(c => label(lang, c));

  const datasets = CATEGORIES.map((cat, catIdx) => {
    const baseColor = CATEGORY_COLORS[cat];
    const translatedCat = catLabels[catIdx];

    const backgroundColor = ERAS.map(era => {
      if (!selection) return hexToRgba(baseColor, 0.85);
      const isSelected = selection.era === era.label && selection.cat === cat;
      if (isSelected) return baseColor;
      return hexToRgba(baseColor, 0.18);
    });

    const borderColor = ERAS.map(era => {
      if (!selection) return 'transparent';
      return (selection.era === era.label && selection.cat === cat)
        ? '#C2A46D'
        : 'transparent';
    });

    const borderWidth = ERAS.map(era =>
      selection && selection.era === era.label && selection.cat === cat ? 2 : 0
    );

    return {
      label: translatedCat,
      _dataKey: cat, // keep original English key for selection logic
      data: ERAS.map(era =>
        treaties.filter(t => t.era === era.label && t.cat === cat).length
      ),
      backgroundColor,
      borderColor,
      borderWidth,
    };
  });

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          boxWidth: 10,
          boxHeight: 10,
          font: { size: 11, family: "'Playfair Display', Georgia, serif" },
          color: '#1F2A36',
          padding: 16,
          generateLabels: (chart) => {
            const defaults = ChartJS.defaults.plugins.legend.labels.generateLabels(chart);
            return defaults.map(item => ({
              ...item,
              fontColor: selection && selection.cat && label(lang, selection.cat) !== item.text
                ? 'rgba(31,42,54,0.3)'
                : '#1F2A36',
            }));
          },
        },
        onClick: (e, legendItem, legend) => {
          // Map translated label back to English data key
          const catIdx = catLabels.indexOf(legendItem.text);
          const cat = catIdx >= 0 ? CATEGORIES[catIdx] : legendItem.text;
          if (selection && selection.cat === cat && !selection.era) {
            onSelect(null);
          } else {
            onSelect({ era: null, cat });
          }
        },
      },
      title: { display: false },
      tooltip: {
        backgroundColor: '#1F2A36',
        titleColor: '#F7F3EB',
        bodyColor: '#D4BC8E',
        borderColor: '#C2A46D',
        borderWidth: 1,
        titleFont: { family: "'Playfair Display', Georgia, serif", size: 12 },
        bodyFont: { family: "'Playfair Display', Georgia, serif", size: 11 },
        callbacks: {
          title: (items) => {
            if (!items.length) return '';
            return `${items[0].dataset.label} — ${items[0].label}`;
          },
          label: (item) => tr('chartTooltipTreaties', item.raw),
          footer: (items) => {
            const eraLabel = items[0]?.label;
            // Map translated era label back to English for data lookup
            const era = ERAS.find(e => label(lang, e.label) === eraLabel);
            const total = era
              ? treaties.filter(t => t.era === era.label).length
              : 0;
            return `${tr('chartEraTotal')} ${total}`;
          },
        },
      },
    },
    scales: {
      x: {
        stacked: true,
        ticks: { font: { family: "'Playfair Display', Georgia, serif", size: 11 }, color: '#4A6070' },
        grid: { color: '#DDD5C0' },
        border: { color: '#DDD5C0' },
      },
      y: {
        stacked: true,
        ticks: { stepSize: 1, font: { family: "'Playfair Display', Georgia, serif", size: 11 }, color: '#4A6070' },
        grid: { color: '#DDD5C0' },
        border: { color: '#DDD5C0' },
      },
    },
    onClick: (event, elements) => {
      if (!elements.length) {
        onSelect(null);
        return;
      }
      const eraIndex = elements[0].index;
      const catIndex = elements[0].datasetIndex;
      const era = ERAS[eraIndex].label; // always English for data key
      const cat = CATEGORIES[catIndex]; // always English for data key
      if (selection && selection.era === era && selection.cat === cat) {
        onSelect(null);
      } else {
        onSelect({ era, cat });
      }
    },
    onHover: (event, elements) => {
      event.native.target.style.cursor = elements.length > 0 ? 'pointer' : 'default';
    },
  };

  const data = { labels: eraLabels, datasets };

  // Build selection label using translated values
  let selectionLabel = null;
  if (selection?.era && selection?.cat) {
    selectionLabel = `${label(lang, selection.cat)} · ${label(lang, selection.era)}`;
  } else if (selection?.era) {
    selectionLabel = label(lang, selection.era);
  } else if (selection?.cat) {
    selectionLabel = `${label(lang, selection.cat)}${tr('chartAllEras')}`;
  }

  return (
    <div className="bg-cream-light rounded-lg border border-cream-border p-5 mb-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-semibold text-navy/60 uppercase tracking-widest">
          {tr('chartTitle')}
        </h2>
        {selectionLabel ? (
          <div className="flex items-center gap-2">
            <span className="text-xs text-navy font-medium bg-gold/15 border border-gold/30 px-2.5 py-1 rounded-full">
              {selectionLabel}
            </span>
            <button
              onClick={() => onSelect(null)}
              className="text-xs text-navy/40 hover:text-navy transition-colors"
            >
              {tr('chartClear')}
            </button>
          </div>
        ) : (
          <span className="text-xs text-navy/35 italic">{tr('chartClickHint')}</span>
        )}
      </div>
      <Bar data={data} options={options} />
    </div>
  );
}
