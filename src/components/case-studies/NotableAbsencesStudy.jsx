import React from 'react';
import CaseStudyLayout, { Section, Flag, References } from './CaseStudyLayout';
import { REFERENCES } from '../../data/references';
import { NOTABLE_ABSENCES, CATEGORY_COLORS, OBLIGATION_TYPE_COLORS, ENFORCEMENT_CHANNEL_COLORS } from '../../data/constants';
import { useLang } from '../../i18n/LanguageContext';
import { t, label } from '../../i18n/translations';

function AbsenceCard({ item }) {
  const { lang } = useLang();
  const tr = (key, ...args) => t(lang, key, ...args);
  const oblColor = OBLIGATION_TYPE_COLORS[item.obligation_type] || 'bg-navy/10 text-navy';
  const enfColor = ENFORCEMENT_CHANNEL_COLORS[item.enforcement_channel] || 'bg-navy/10 text-navy';

  return (
    <div className="border border-cream-border rounded-lg p-4 bg-cream">
      <div className="flex items-start justify-between gap-2 mb-2">
        <div>
          <span className="font-semibold text-navy">{item.name}</span>
          <span className="ml-2 text-xs text-navy/40 italic">{item.full}</span>
        </div>
        <span className="text-xs px-2 py-0.5 rounded font-medium bg-[#8B3A3A]/10 text-[#8B3A3A] whitespace-nowrap">
          {tr('notParty')}
        </span>
      </div>
      <div className="flex flex-wrap gap-1.5 mb-2">
        <span className="inline-block px-2 py-0.5 rounded text-xs font-medium text-white"
          style={{ backgroundColor: CATEGORY_COLORS[item.cat] }}>
          {label(lang, item.cat)}
        </span>
        {item.obligation_type && (
          <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${oblColor}`}>
            {label(lang, item.obligation_type)}
          </span>
        )}
        {item.enforcement_channel && (
          <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${enfColor}`}>
            {label(lang, item.enforcement_channel)}
          </span>
        )}
        {item.signed && (
          <span className="inline-block px-2 py-0.5 rounded text-xs font-medium bg-gold/15 text-gold-dark">
            {tr('signedYear', item.signed)}
          </span>
        )}
      </div>
      <p className="text-xs text-navy/60 leading-relaxed">{item.notes}</p>
    </div>
  );
}

function EnContent() {
  return (
    <>
      <Section title="What absences reveal">
        <p>
          What a country stays out of tells you as much as what it joins. When a state declines to sign or ratify a treaty, especially one in an area where it has signed similar instruments, it is usually marking a limit. China's absences are not random. They cluster around two things: outside bodies that could investigate or judge Chinese conduct, and rights that would require independent civil society.
        </p>
        <p>
          China's general approach is to limit what it signs up to so that it isn't formally in breach, rather than to join and then ignore its obligations. The ICCPR is the standard example. China signed it in 1998, a signal of engagement at a time of warming relations with the West, and has not ratified it in nearly three decades since. That keeps the option open without taking on legal exposure. It is more useful to ask why particular treaties stay unsigned or unratified than simply to list them.
        </p>
      </Section>

      <Section title="The pattern: what China won't sign">
        <Flag type="warning">
          <strong>The accountability line:</strong> The clearest pattern is refusal of instruments that let outside bodies investigate or rule on Chinese conduct. The Rome Statute (ICC jurisdiction over individuals, including officials), the ICCPR's First Optional Protocol (individual complaints to the Human Rights Committee) and the Optional Protocol to the Convention against Torture (independent visits to places of detention) all have this feature. China has also opted out of the inquiry procedure in the Torture Convention and of ICJ dispute settlement clauses in many treaties it has joined. The objection is consistent across decades and subject areas, which suggests it is a matter of principle rather than a bargaining position.
        </Flag>
        <p>
          A second pattern is refusal of obligations that would require independent institutions at home, most clearly freedom of association and independent trade unions (ILO Convention 87). These aren't just international commitments. Meeting them would mean dismantling arrangements the Party treats as foundational. It is telling that in 2022 China did ratify the ILO forced-labour conventions, which ask nothing of that kind, while leaving Convention 87 alone.
        </p>
      </Section>

      <Section title="Implications for AI governance">
        <p>
          This matters for AI treaty design. An AI agreement that includes (a) outside investigation of domestic AI incidents, (b) a route for individuals to complain to an international body, or (c) a requirement for independent domestic regulators is likely to meet the same resistance that has kept China out of the ICC and the ICCPR for decades.
        </p>
        <p>
          That doesn't mean those features don't belong in an AI treaty. They may be essential to making it work. But including them should be treated as a real obstacle to Chinese participation, not something clever diplomatic wording can get round.
        </p>
      </Section>
    </>
  );
}

function ZhContent() {
  return (
    <>
      <Section title="缺席揭示了什么">
        <p>
          一个国家不加入什么，和加入什么一样能说明问题。当一国拒绝签署或批准某项条约，尤其是在它已签署类似文书的领域，这通常是在划定底线。中国的缺席并非随机，而是集中在两类事情上：可能调查或裁决中国行为的外部机构，以及需要独立公民社会才能实现的权利。
        </p>
        <p>
          中国的总体做法是限制自己承担的义务，使自己不至于在形式上违约，而不是先加入、再无视义务。《公民权利和政治权利国际公约》是典型例子：中国于1998年签署，当时正值与西方关系回暖，借此表示参与姿态；此后近三十年一直未予批准。这样既保留了选择余地，又不承担法律风险。与其简单罗列这些条约，不如追问它们为何始终未签署或未批准。
        </p>
      </Section>

      <Section title="规律：中国不签什么">
        <Flag type="warning">
          <strong>问责底线：</strong>最清晰的规律是，中国拒绝任何允许外部机构调查或裁决中国行为的文书。《罗马规约》（国际刑事法院对包括官员在内的个人的管辖权）、《公民权利和政治权利国际公约》第一任择议定书（个人向人权事务委员会申诉）以及《禁止酷刑公约任择议定书》（对羁押场所的独立查访）都具有这一特征。中国还在《禁止酷刑公约》中排除了调查程序，并在许多已加入的条约中对国际法院争端解决条款作出保留。这一立场跨越数十年、横贯多个领域始终如一，说明它是原则问题，而非谈判筹码。
        </Flag>
        <p>
          第二个规律是拒绝那些要求在国内建立独立机构的义务，最明显的是结社自由和独立工会（国际劳工组织第87号公约）。这些不只是国际承诺；要履行它们，就得拆除党视为根基的制度安排。耐人寻味的是，中国在2022年批准了不涉及此类要求的国际劳工组织强迫劳动公约，却始终没有触碰第87号公约。
        </p>
      </Section>

      <Section title="对人工智能治理的启示">
        <p>
          这对人工智能条约的设计很重要。如果一项人工智能协议包括：（甲）对国内人工智能事故的外部调查，（乙）个人向国际机构申诉的渠道，或（丙）要求设立独立的国内监管机构，那么它很可能遭遇与几十年来使中国置身国际刑事法院和《公民权利和政治权利国际公约》之外相同的阻力。
        </p>
        <p>
          这并不是说人工智能条约不应包含这些内容。它们可能恰恰是条约发挥作用的关键。但应当把它们视为中国参与的真实障碍，而不是靠巧妙的外交措辞就能绕过的问题。
        </p>
      </Section>
    </>
  );
}

export default function NotableAbsencesStudy() {
  const { lang } = useLang();
  const title = lang === 'zh' ? '重要缺席' : 'Notable Absences';
  const subtitle = lang === 'zh'
    ? '中国未签署或未批准的条约——及其揭示的意义'
    : "Treaties China has not signed or not ratified — and what that reveals";

  return (
    <CaseStudyLayout title={title} subtitle={subtitle}>
      {lang === 'zh' ? <ZhContent /> : <EnContent />}
      <div className="space-y-3 mt-2">
        {NOTABLE_ABSENCES.map((item, i) => (
          <AbsenceCard key={i} item={item} />
        ))}
      </div>
      <References refs={REFERENCES.absences} />
    </CaseStudyLayout>
  );
}
