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
          In treaty analysis, non-participation is as analytically important as participation. A country's decision not to sign or ratify a treaty — especially when it has signed comparable instruments in the same domain — is a deliberate signal about where it draws its limits. China's pattern of absences is not random; it clusters tightly around two specific threat categories: external accountability mechanisms and independent civic rights.
        </p>
        <p>
          China's general approach has been to limit its commitments so that it does not formally breach them, rather than to accept and then ignore binding obligations. The ICCPR is the paradigm case: signed in 1998 to signal international engagement, but never ratified in the 27 years since — maintaining optionality without incurring formal legal risk. Understanding <em>why</em> specific treaties remain unsigned or unratified is more instructive than cataloguing the absence alone.
        </p>
      </Section>

      <Section title="The pattern: what China won't sign">
        <Flag type="warning">
          <strong>The accountability threshold:</strong> The clearest pattern across China's notable absences is the rejection of instruments that would allow external bodies to investigate or adjudicate Chinese conduct. The Rome Statute (ICC jurisdiction over state officials), ICCPR Optional Protocol (individual complaints to the Human Rights Committee), and CAT Optional Protocol (independent monitoring of detention facilities) all share this feature. China's objection is structural, not circumstantial: it consistently refuses to accept the legitimacy of external adjudication of domestic conduct.
        </Flag>
        <p>
          A secondary pattern is the refusal of obligations that would require independent institutions domestically — specifically, independent trade unions (ILO Convention 87) and independent courts. These are not merely international commitments; complying with them would require dismantling domestic institutional arrangements that the Party regards as foundational.
        </p>
      </Section>

      <Section title="Implications for AI governance">
        <p>
          The notable absences pattern is directly relevant to AI governance design. Any AI treaty that includes: (a) external investigation of domestic AI incidents, (b) individual complaint mechanisms, or (c) independent domestic regulatory bodies — would face the same structural resistance that has kept China outside the ICC and ICCPR for decades. This is not a negotiating position; it is a constitutive feature of the Party-state model.
        </p>
        <p>
          The implication is not that these features are undesirable in an AI treaty — they may well be essential to its effectiveness — but that their inclusion should be understood as a genuine obstacle to Chinese participation, not a cosmetic objection that can be resolved through diplomatic framing.
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
          在条约分析中，不参与与参与具有同等的分析价值。一个国家选择不签署或不批准某项条约——尤其是在同一领域已签署类似文书的情况下——是一种关于其底线边界的刻意表态。中国缺席的规律并非随机，而是紧密集中在两类特定威胁领域：外部问责机制，以及独立公民权利。
        </p>
        <p>
          中国的总体策略是将义务限定在不会产生正式违约的范围内，而非接受约束后再予以无视。《公民权利和政治权利国际公约》是典型案例：1998年签署以彰显国际参与姿态，但此后27年间始终未予批准——在不承担正式法律风险的同时保留了选择余地。理解特定条约为何保持未签署或未批准状态，比仅仅记录缺席本身更具启示意义。
        </p>
      </Section>

      <Section title="规律：中国拒绝签署的条约">
        <Flag type="warning">
          <strong>问责门槛：</strong>中国重要缺席中最清晰的规律，是拒绝任何允许外部机构调查或裁决中国行为的文书。《罗马规约》（国际刑事法院对国家官员的管辖权）、《公民权利和政治权利国际公约任择议定书》（个人向人权事务委员会申诉）以及《禁止酷刑公约任择议定书》（对羁押设施的独立监察）均具备这一特征。中国的反对是结构性的，而非偶然性的：它始终拒绝承认外部机构对国内行为进行司法裁决的合法性。
        </Flag>
        <p>
          次一级的规律是拒绝承担在国内要求建立独立机构的义务——尤其是独立工会（国际劳工组织第87号公约）和独立司法机构。这些不仅仅是国际承诺；遵守它们将需要拆解党国模式视为根本性的国内制度安排。
        </p>
      </Section>

      <Section title="对人工智能治理的启示">
        <p>
          上述缺席规律与人工智能治理设计直接相关。任何包含以下内容的人工智能条约——（甲）对国内人工智能事故进行外部调查，（乙）个人申诉机制，或（丙）独立国内监管机构——都将面临与几十年来使中国游离于国际刑事法院和《公民权利和政治权利国际公约》之外相同的结构性阻力。这不是谈判立场，而是党国模式的构成性特征。
        </p>
        <p>
          其含义并非上述特征在人工智能条约中不可取——它们很可能是条约有效性的关键——而是应将其纳入条款视为中国参与的真实障碍，而非可通过外交措辞加以化解的表面异议。
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
