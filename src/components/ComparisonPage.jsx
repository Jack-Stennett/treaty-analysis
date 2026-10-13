import React, { useState, useMemo } from 'react';
import { TREATIES } from '../data/treaties';
import { US_STATUS } from '../data/us_treaties';
import { NORWAY_STATUS } from '../data/norway_treaties';
import { DPRK_STATUS } from '../data/dprk_treaties';
import { CATEGORY_COLORS } from '../data/constants';
import MarkdownContent from './MarkdownContent';
import comparisonEnMd from '../content/comparison-en.md?raw';

// ── Helpers ────────────────────────────────────────────────────────────────

/** Map China's status field to a normalised 4-way bucket. */
function normaliseChinaStatus(treaty) {
  const s = treaty.status;
  if (['in force', 'disputed'].includes(s)) return 'in-force';
  if (s === 'signed only') return 'signed-only';
  if (s === 'not signed') return 'not-signed';
  if (['expired', 'superseded', 'lapsed', 'suspended'].includes(s)) return 'other';
  return 'other';
}

const US_STATUS_LABEL = {
  'in-force':    'In force',
  'signed-only': 'Signed, not ratified',
  'not-signed':  'Not signed',
  'withdrew':    'Withdrew',
  'n/a':         'N/A',
};

const CHINA_STATUS_LABEL = {
  'in-force':  'In force',
  'signed-only': 'Signed, not ratified',
  'not-signed':  'Not signed',
  'other':       'Expired / superseded',
};

// colour tokens for each status bucket
const STATUS_STYLE = {
  'in-force':    { bg: 'bg-sage/20',          text: 'text-sage-dark',    bar: '#7D8F69' },
  'signed-only': { bg: 'bg-gold/15',           text: 'text-gold-dark',    bar: '#C2A46D' },
  'not-signed':  { bg: 'bg-cream-dark/40',     text: 'text-navy/50',      bar: '#DDD5C0' },
  'withdrew':    { bg: 'bg-[#8B3A3A]/10',      text: 'text-[#8B3A3A]',   bar: '#8B3A3A' },
  'other':       { bg: 'bg-cream-dark/25',     text: 'text-navy/35',      bar: '#DDD5C0' },
  'n/a':         { bg: 'bg-cream-dark/20',     text: 'text-navy/30',      bar: '#F0EBE0' },
};

function StatusBadge({ status }) {
  const s = STATUS_STYLE[status] || STATUS_STYLE['n/a'];
  const label = US_STATUS_LABEL[status] ?? status;
  return (
    <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${s.bg} ${s.text}`}>
      {label}
    </span>
  );
}

function ChinaBadge({ status }) {
  const s = STATUS_STYLE[status] || STATUS_STYLE['n/a'];
  const label = CHINA_STATUS_LABEL[status] ?? status;
  return (
    <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${s.bg} ${s.text}`}>
      {label}
    </span>
  );
}

// ── FourCountryBaseline ───────────────────────────────────────────────────

/**
 * Given a status map (keyed by treaty id → {status}) and the full TREATIES
 * array (for China), compute a {in-force, signed-only, not-signed, withdrew}
 * count over the multilateral subset.
 */
function computeCounts(statusMap, treaties, normFn) {
  const multilateral = treaties.filter(t => {
    const s = statusMap ? statusMap[t.id] : null;
    return s?.status !== 'n/a' && s != null;
  });
  const c = { 'in-force': 0, 'signed-only': 0, 'not-signed': 0, 'withdrew': 0 };
  multilateral.forEach(t => {
    const s = normFn(t, statusMap);
    if (s in c) c[s]++;
  });
  return { counts: c, total: multilateral.length };
}

const COUNTRIES = [
  {
    id: 'no',
    flag: '🇳🇴',
    name: 'Norway',
    subtitle: 'Ratifies widely and implements reliably',
    color: '#2A6080',
    getStatus: (t, map) => map[t.id]?.status ?? 'n/a',
  },
  {
    id: 'cn',
    flag: '🇨🇳',
    name: 'China',
    subtitle: 'Ratifies broadly; the gap comes at implementation',
    color: '#8B3A3A',
    getStatus: (t) => normaliseChinaStatus(t),
  },
  {
    id: 'us',
    flag: '🇺🇸',
    name: 'United States',
    subtitle: 'Two-thirds Senate rule leaves many treaties signed but unratified',
    color: '#C2A46D',
    getStatus: (t, map) => map[t.id]?.status ?? 'n/a',
  },
  {
    id: 'kp',
    flag: '🇰🇵',
    name: 'North Korea',
    subtitle: 'Joins some UN treaties; implements very little',
    color: '#7D8F69',
    getStatus: (t, map) => map[t.id]?.status ?? 'n/a',
  },
];

function BaselineRow({ country, counts, total }) {
  const bars = [
    { key: 'in-force',    label: 'In force',   color: country.color },
    { key: 'signed-only', label: 'Signed only', color: '#C2A46D' },
    { key: 'not-signed',  label: 'Not signed',  color: '#DDD5C0' },
    { key: 'withdrew',    label: 'Withdrew',    color: '#8B3A3A' },
  ];
  const inForcePct = total > 0 ? Math.round((counts['in-force'] / total) * 100) : 0;
  return (
    <div className="flex items-center gap-4 py-3 border-b border-cream-border last:border-0">
      <div className="w-36 shrink-0">
        <div className="flex items-center gap-1.5">
          <span className="text-base leading-none">{country.flag}</span>
          <span className="font-serif font-semibold text-navy text-sm">{country.name}</span>
        </div>
        <div className="text-[10px] text-navy/40 mt-0.5 leading-tight">{country.subtitle}</div>
      </div>
      <div className="flex-1">
        <div className="flex h-4 rounded-full overflow-hidden bg-cream-dark/30 gap-px">
          {bars.map(b => {
            const pct = total > 0 ? (counts[b.key] ?? 0) / total * 100 : 0;
            if (pct < 0.5) return null;
            return (
              <div
                key={b.key}
                className="h-full transition-all"
                style={{ width: `${pct}%`, backgroundColor: b.color, opacity: b.key === 'in-force' ? 0.85 : b.key === 'signed-only' ? 0.6 : b.key === 'not-signed' ? 0.35 : 0.9 }}
                title={`${b.label}: ${counts[b.key] ?? 0}`}
              />
            );
          })}
        </div>
      </div>
      <div className="w-28 shrink-0 text-right">
        <span className="font-serif font-bold text-navy text-sm">{counts['in-force']}</span>
        <span className="text-navy/35 text-xs"> / {total} in force</span>
        <div className="text-[10px] text-navy/40">{inForcePct}%</div>
      </div>
    </div>
  );
}

// ── StatusBreakdownCard ────────────────────────────────────────────────────

function StatusBreakdownCard({ label, counts, total, flag }) {
  const bars = [
    { key: 'in-force',    label: 'In force',            color: '#7D8F69' },
    { key: 'signed-only', label: 'Signed, not ratified', color: '#C2A46D' },
    { key: 'not-signed',  label: 'Not signed',           color: '#B0A898' },
    { key: 'withdrew',    label: 'Withdrew',             color: '#8B3A3A' },
  ];
  return (
    <div className="border border-cream-border rounded-lg p-5 bg-cream-light flex-1">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xl leading-none">{flag}</span>
        <h3 className="font-serif font-semibold text-navy text-base">{label}</h3>
        <span className="ml-auto text-xs text-navy/40 font-medium">{total} multilateral</span>
      </div>
      <div className="space-y-2.5">
        {bars.map(b => {
          const n = counts[b.key] ?? 0;
          const pct = total > 0 ? (n / total) * 100 : 0;
          return (
            <div key={b.key}>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-navy/60">{b.label}</span>
                <span className="font-semibold text-navy/80">{n}</span>
              </div>
              <div className="h-2 rounded-full bg-cream-dark/40 overflow-hidden">
                <div
                  className="h-full rounded-full transition-all"
                  style={{ width: `${pct}%`, backgroundColor: b.color }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── DivergenceTable ────────────────────────────────────────────────────────

function DivergenceSection({ title, subtitle, treaties, highlight }) {
  const [expanded, setExpanded] = useState(false);
  const shown = expanded ? treaties : treaties.slice(0, 6);
  if (!treaties.length) return null;
  return (
    <div className="mb-6">
      <div className="flex items-baseline gap-3 mb-2">
        <h4 className="font-serif font-semibold text-navy text-sm">{title}</h4>
        <span className="text-xs text-navy/40">{treaties.length} treaties</span>
      </div>
      {subtitle && <p className="text-xs text-navy/55 mb-3 leading-relaxed">{subtitle}</p>}
      <div className="divide-y divide-cream-border border border-cream-border rounded-lg overflow-hidden">
        {shown.map(({ treaty, us, china }) => (
          <div key={treaty.id} className="flex items-start gap-3 px-4 py-3 bg-cream-light hover:bg-cream-dark/20 transition-colors">
            <div className="flex-1 min-w-0">
              <div className="flex items-start gap-2 flex-wrap">
                <span
                  className="inline-block w-2 h-2 rounded-full mt-1.5 shrink-0"
                  style={{ backgroundColor: CATEGORY_COLORS[treaty.cat] ?? '#999' }}
                />
                <span className="text-sm font-serif text-navy font-medium leading-snug">
                  {treaty.name}
                  {treaty.instrument_type && (
                    <span className="ml-1.5 align-middle inline-block px-1.5 py-px rounded text-[10px] uppercase tracking-wide bg-gold/15 text-gold-dark font-sans">
                      Not a treaty: {treaty.instrument_type}
                    </span>
                  )}
                </span>
              </div>
              {us?.notes && (
                <p className="text-xs text-navy/50 mt-1 ml-4 leading-relaxed">{us.notes}</p>
              )}
            </div>
            <div className="shrink-0 flex flex-col items-end gap-1 pt-0.5">
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] text-navy/35 uppercase tracking-wide">CN</span>
                <ChinaBadge status={china} />
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] text-navy/35 uppercase tracking-wide">US</span>
                <StatusBadge status={us?.status ?? 'n/a'} />
              </div>
            </div>
          </div>
        ))}
      </div>
      {treaties.length > 6 && (
        <button
          onClick={() => setExpanded(e => !e)}
          className="mt-2 text-xs text-navy/50 hover:text-navy transition-colors"
        >
          {expanded ? '▲ Show fewer' : `▼ Show all ${treaties.length}`}
        </button>
      )}
    </div>
  );
}

// ── Compliance case ────────────────────────────────────────────────────────

function ComplianceCase({ flag, country, title, body, verdict }) {
  const colors = verdict === 'partial'
    ? 'border-gold/30 bg-gold/5'
    : 'border-[#8B3A3A]/20 bg-[#8B3A3A]/4';
  return (
    <div className={`border rounded-lg p-4 ${colors}`}>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-base leading-none">{flag}</span>
        <span className="text-xs font-semibold text-navy/50 uppercase tracking-widest">{country}</span>
      </div>
      <div className="font-serif font-semibold text-navy text-sm mb-1.5">{title}</div>
      <p className="text-xs text-navy/65 leading-relaxed">{body}</p>
    </div>
  );
}

// ── Main page ──────────────────────────────────────────────────────────────

export default function ComparisonPage() {
  const [activeSection, setActiveSection] = useState('divergence');

  // 4-country baseline data
  const baselineData = useMemo(() => {
    const maps = { cn: null, us: US_STATUS, no: NORWAY_STATUS, kp: DPRK_STATUS };
    return COUNTRIES.map(country => {
      const map = maps[country.id];
      // For China, use all treaties; for others filter to non-n/a
      const multilateral = TREATIES.filter(t => {
        if (country.id === 'cn') {
          return !['expired', 'n/a'].includes(t.status) && t.multi !== false && !t.tags?.includes('bilateral');
        }
        return map?.[t.id]?.status !== 'n/a' && map?.[t.id] != null;
      });
      const c = { 'in-force': 0, 'signed-only': 0, 'not-signed': 0, 'withdrew': 0 };
      multilateral.forEach(t => {
        const s = country.getStatus(t, map ?? {});
        if (s in c) c[s]++;
      });
      return { country, counts: c, total: multilateral.length };
    });
  }, []);

  // Build paired data: one row per treaty with both US and China status
  const pairs = useMemo(() => {
    return TREATIES.map(treaty => {
      const us = US_STATUS[treaty.id];
      const chinaStatus = normaliseChinaStatus(treaty);
      return { treaty, us, china: chinaStatus };
    });
  }, []);

  // Only multilateral treaties (exclude n/a on both sides)
  const multilateral = useMemo(() =>
    pairs.filter(({ us }) => us?.status !== 'n/a' && us != null),
  [pairs]);

  const total = multilateral.length;

  // US counts
  const usCounts = useMemo(() => {
    const c = { 'in-force': 0, 'signed-only': 0, 'not-signed': 0, 'withdrew': 0 };
    multilateral.forEach(({ us }) => { if (us?.status in c) c[us.status]++; });
    return c;
  }, [multilateral]);

  // China counts (over same multilateral set)
  const chinaCounts = useMemo(() => {
    const c = { 'in-force': 0, 'signed-only': 0, 'not-signed': 0, 'withdrew': 0 };
    multilateral.forEach(({ china }) => {
      if (china === 'in-force') c['in-force']++;
      else if (china === 'signed-only') c['signed-only']++;
      else if (china === 'not-signed') c['not-signed']++;
    });
    return c;
  }, [multilateral]);

  // Divergence groups
  const chinaInForce_USNot = useMemo(() =>
    multilateral.filter(({ china, us }) =>
      china === 'in-force' && us?.status !== 'in-force' && us?.status !== 'n/a'
    ),
  [multilateral]);

  const usInForce_ChinaNot = useMemo(() =>
    multilateral.filter(({ china, us }) =>
      us?.status === 'in-force' && china !== 'in-force' && china !== 'other'
    ),
  [multilateral]);

  const bothSignedOnly = useMemo(() =>
    multilateral.filter(({ china, us }) =>
      china === 'signed-only' && us?.status === 'signed-only'
    ),
  [multilateral]);

  const bothNotSigned = useMemo(() =>
    multilateral.filter(({ china, us }) =>
      china === 'not-signed' && us?.status === 'not-signed'
    ),
  [multilateral]);

  const usWithdrew = useMemo(() =>
    multilateral.filter(({ us }) => us?.status === 'withdrew'),
  [multilateral]);

  const sections = [
    { id: 'divergence', label: 'Treaty Gap' },
    { id: 'compliance', label: 'Compliance' },
    { id: 'framing',    label: 'Analysis' },
  ];

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      {/* Header */}
      <div className="mb-8">
        <h2 className="font-serif text-2xl font-bold text-navy tracking-tight mb-2">
          The US–China Treaty Gap
        </h2>
        <p className="text-navy/50 text-sm italic mb-4">
          How the two countries fall short of international law in different ways, and what that means for AI governance
        </p>
        <p className="text-sm text-navy/70 leading-relaxed">
          Debates about AI treaties often assume a country is either trustworthy or it isn't. Comparing
          the US and China complicates that. Both engage selectively with international law, but they
          fall short at <em>different stages</em> of the treaty process, for different structural
          reasons, and that matters for how a treaty should be designed.
        </p>
      </div>

      {/* 4-country baseline */}
      <div className="border border-cream-border rounded-lg bg-cream-light mb-8">
        <div className="px-5 pt-4 pb-2 border-b border-cream-border">
          <h3 className="font-serif text-sm font-semibold text-navy/50 uppercase tracking-widest">
            Country Baseline
          </h3>
          <p className="text-xs text-navy/45 mt-0.5">
            Treaties in force, signed but not ratified, and not signed. Norway is included as a high-participation benchmark and North Korea as a low one.
          </p>
        </div>
        <div className="px-5 py-1">
          {baselineData.map(({ country, counts, total }) => (
            <BaselineRow key={country.id} country={country} counts={counts} total={total} />
          ))}
        </div>
        <div className="px-5 py-3 border-t border-cream-border flex gap-4 text-[10px] text-navy/35">
          {[
            { color: '#2A6080', label: 'In force', opacity: '0.85' },
            { color: '#C2A46D', label: 'Signed, not ratified', opacity: '0.6' },
            { color: '#DDD5C0', label: 'Not signed', opacity: '1' },
            { color: '#8B3A3A', label: 'Withdrew', opacity: '0.9' },
          ].map(l => (
            <span key={l.label} className="flex items-center gap-1">
              <span className="inline-block w-3 h-2 rounded-sm" style={{ backgroundColor: l.color, opacity: l.opacity }} />
              {l.label}
            </span>
          ))}
        </div>
      </div>

      {/* Summary cards */}
      <div className="flex gap-4 mb-8 flex-col sm:flex-row">
        <StatusBreakdownCard
          label="United States"
          flag="🇺🇸"
          counts={usCounts}
          total={total}
        />
        <StatusBreakdownCard
          label="China"
          flag="🇨🇳"
          counts={chinaCounts}
          total={total}
        />
      </div>

      {/* Callout: the headline numbers */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
        <div className="border border-gold/30 rounded-lg p-4 bg-gold/5 text-center">
          <div className="font-serif text-2xl font-bold text-gold-dark mb-1">
            {chinaInForce_USNot.length}
          </div>
          <div className="text-xs text-navy/60 leading-snug">
            treaties China has ratified that the US has <strong>not</strong>
          </div>
        </div>
        <div className="border border-[#2E4A6B]/20 rounded-lg p-4 bg-[#2E4A6B]/5 text-center">
          <div className="font-serif text-2xl font-bold text-[#2E4A6B] mb-1">
            {usInForce_ChinaNot.length}
          </div>
          <div className="text-xs text-navy/60 leading-snug">
            treaties the US has ratified that China has <strong>not</strong>
          </div>
        </div>
        <div className="border border-[#8B3A3A]/20 rounded-lg p-4 bg-[#8B3A3A]/4 text-center">
          <div className="font-serif text-2xl font-bold text-[#8B3A3A] mb-1">
            {bothSignedOnly.length + bothNotSigned.length}
          </div>
          <div className="text-xs text-navy/60 leading-snug">
            treaties where <strong>neither</strong> has ratified or signed
          </div>
        </div>
      </div>

      {/* Section nav */}
      <div className="flex gap-1 mb-6 border-b border-cream-border pb-1">
        {sections.map(s => (
          <button
            key={s.id}
            onClick={() => setActiveSection(s.id)}
            className={`px-4 py-1.5 text-sm font-serif rounded-t transition-colors ${
              activeSection === s.id
                ? 'text-navy font-semibold border-b-2 border-gold -mb-px bg-cream'
                : 'text-navy/45 hover:text-navy/70'
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* ── Treaty Gap section ─────────────────────────────────────────── */}
      {activeSection === 'divergence' && (
        <div>
          <div className="bg-[#2E4A6B]/5 border border-[#2E4A6B]/15 rounded-lg p-4 text-sm text-navy/70 leading-relaxed mb-6">
            <strong className="text-navy/85">The US ratification problem.</strong>{' '}
            The US has one of the weakest ratification records of any major democracy, and the reason
            is structural. Ratification needs a two-thirds Senate majority, so a third of senators can
            block any treaty. As polarisation has grown, that bar has become very hard to clear, and
            many treaties signed by Democratic administrations have stalled because of Republican
            opposition on sovereignty or ideological grounds. Some of the treaties left unratified are
            striking.
          </div>

          <DivergenceSection
            title="China has ratified — US has not"
            subtitle="Treaties in force for China that the US has signed but not ratified, or never signed. They include many of the most notable US ratification failures."
            treaties={chinaInForce_USNot}
          />

          <DivergenceSection
            title="US has ratified — China has not"
            subtitle="Treaties where the US is a full party but China has only signed or stayed out. There are fewer of these, and they attract less attention."
            treaties={usInForce_ChinaNot}
          />

          {usWithdrew.length > 0 && (
            <DivergenceSection
              title="US has withdrawn"
              subtitle="Cases where the US was a party and formally withdrew. China has no equivalent in this dataset."
              treaties={usWithdrew}
            />
          )}

          <DivergenceSection
            title="Both signed, neither ratified"
            subtitle="Both countries signed but neither has ratified, usually a sign that neither wants to be bound."
            treaties={bothSignedOnly}
          />

          <DivergenceSection
            title="Neither signed"
            subtitle="Treaties both countries have stayed out of, mostly arms control and disarmament instruments that both nuclear powers oppose."
            treaties={bothNotSigned}
          />
        </div>
      )}

      {/* ── Compliance section ─────────────────────────────────────────── */}
      {activeSection === 'compliance' && (
        <div>
          <div className="text-sm text-navy/70 leading-relaxed mb-6">
            <p className="mb-3">
              Ratification is only part of the picture. Where both countries are parties, their
              compliance problems look different. China tends to ratify and then implement narrowly or
              not at all. The US generally complies at home once it ratifies, but sometimes acts against
              a treaty abroad, especially in military operations.
            </p>
            <p>
              The examples below are among the most significant cases on each side.
            </p>
          </div>

          <h3 className="font-serif text-sm font-semibold text-navy/50 uppercase tracking-widest mb-4">
            US Compliance Failures
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            <ComplianceCase
              flag="🇺🇸"
              country="United States"
              verdict="partial"
              title="Geneva Conventions — Abu Ghraib & Guantánamo"
              body="The US ratified all four Geneva Conventions, but the post-2001 period produced Abu Ghraib, Guantánamo and the CIA's 'enhanced interrogation' programme. International bodies found these in breach of US obligations, and the Senate Intelligence Committee's own 2014 report documented the abuses in detail."
            />
            <ComplianceCase
              flag="🇺🇸"
              country="United States"
              verdict="partial"
              title="UN Charter — Use of Force"
              body="The Charter's ban on the use of force has been tested repeatedly by the US: Iraq in 2003, strikes on Syria in 2017 and 2018, and targeted-killing drone programmes. The Iraq invasion is the clearest case, and most international lawyers consider it unlawful. (The 2011 Libya intervention was authorised by the Security Council; the criticism there is that NATO went beyond its mandate.)"
            />
            <ComplianceCase
              flag="🇺🇸"
              country="United States"
              verdict="partial"
              title="UNCLOS — South China Sea critique"
              body="The US has never signed or ratified UNCLOS, though it treats the navigation rules as customary law. It still invokes the Convention when criticising China's conduct in the South China Sea. China makes effective use of this inconsistency in multilateral forums, and the point lands with many non-aligned states."
            />
            <ComplianceCase
              flag="🇺🇸"
              country="United States"
              verdict="partial"
              title="Arms Trade Treaty — 'Unsigning'"
              body="The US was a principal architect of the ATT and signed it in 2013, but never ratified. In 2019 the Trump administration told the UN it did not intend to become a party, which releases a signatory from its obligation not to undermine the treaty. There is no formal 'unsigning' procedure, but the signal was clear. China, for its part, joined the ATT in 2020."
            />
          </div>

          <h3 className="font-serif text-sm font-semibold text-navy/50 uppercase tracking-widest mb-4">
            China Compliance Failures
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            <ComplianceCase
              flag="🇨🇳"
              country="China"
              verdict="partial"
              title="WTO — Subsidies & State Ownership"
              body="China met its tariff commitments closely but fell short on subsidy transparency and on the market reforms many members expected. It did not notify any local-government subsidies until 2016, fifteen years after joining, and the US has brought several WTO cases against prohibited Chinese subsidies."
            />
            <ComplianceCase
              flag="🇨🇳"
              country="China"
              verdict="partial"
              title="UNCLOS — South China Sea"
              body="China is a party to UNCLOS but rejected the 2016 award of the arbitral tribunal (administered by the Permanent Court of Arbitration) in the case brought by the Philippines. The tribunal found the nine-dash line had no legal basis for historic rights, and that China had violated the Philippines' sovereign rights and its environmental obligations. China has continued island-building and enforcement activity regardless."
            />
            <ComplianceCase
              flag="🇨🇳"
              country="China"
              verdict="partial"
              title="Montreal Protocol — CFC-11 Rebound"
              body="China met its phase-out schedules on paper, but atmospheric monitoring reported in 2018–19 traced a sustained rise in CFC-11 emissions to eastern China. Chinese inspections then confirmed illegal production by manufacturers that provincial enforcement had missed. Emissions fell back after a crackdown."
            />
            <ComplianceCase
              flag="🇨🇳"
              country="China"
              verdict="partial"
              title="Sino-British Joint Declaration — Hong Kong"
              body="China ratified this treaty, which commits it to a 'high degree of autonomy' for Hong Kong until 2047. The UK says the 2020 National Security Law and later electoral changes breach it, and many international lawyers agree. China calls the declaration a historical document."
            />
          </div>
        </div>
      )}

      {/* ── Framing / Analysis section ─────────────────────────────────── */}
      {activeSection === 'framing' && (
        <MarkdownContent content={comparisonEnMd} />
      )}
    </div>
  );
}
