import React from 'react';
import CaseStudyLayout, { Section, FrameworkBox, Flag, References } from './CaseStudyLayout';
import { useLang } from '../../i18n/LanguageContext';
import { REFERENCES } from '../../data/references';

function EnContent() {
  return (
    <>
      <FrameworkBox
        obligationType="mixed"
        enforcementChannel="distributed"
        verdict="partial"
        notes="The Montreal Protocol is the most-cited success in international environmental governance — and a mixed lesson for China specifically. Binary, centrally-enforced obligations (close these plants) succeeded spectacularly. Distributed, ongoing monitoring obligations (ensure no illegal resumption of production) broke down when central attention moved on. The partial verdict reflects both genuine compliance successes and the well-documented CFC-11 re-emission episode."
      />

      <Section title="Background & China's accession">
        <p>
          The Montreal Protocol, adopted in 1987 and entering into force in 1989, committed parties to phasing out the production and consumption of chlorofluorocarbons (CFCs), halons, and other ozone-depleting substances. China acceded in 1991, later than most industrialised nations, partly because as a developing country it was initially outside the core negotiating group.
        </p>
        <p>
          By the early 1990s China had become the world's largest producer and consumer of CFCs. Its participation was essential to the treaty's effectiveness — without Chinese compliance, global phase-out would have been largely decorative. The treaty's Multilateral Fund, which compensates developing countries for the costs of transition, was specifically designed to bring major emitters like China on board.
        </p>
      </Section>

      <Section title="The binary success: CFC phase-out">
        <p>
          China's phase-out of CFC production is one of the most striking compliance successes in China's entire treaty record. The government shut down CFC production facilities through direct, centralised administrative action. The last six CFC plants were closed on 1 July 2007 — two and a half years ahead of the 2010 deadline. Production of halons was similarly eliminated ahead of schedule.
        </p>
        <p>
          Two structural factors made this politically viable. First, the Multilateral Fund directly financed the transition — China received over $440 million for its CFC phase-out programme and a further $385 million for the subsequent HCFC phase. The financial case for compliance was essentially made for Chinese policymakers. Second, the Protocol's trade provisions meant non-compliance would block Chinese manufacturers from selling refrigeration equipment, aerosols, and other products to global markets. The costs of refusal were concrete and immediate.
        </p>
        <Flag type="success">
          <strong>Why the binary obligation succeeded:</strong> Factory closures are a classic binary, one-off administrative act. The central government could issue the order, enforce it through the same channels used to manage state-owned enterprises, and verify compliance through factory visits. There was no need for ongoing distributed enforcement or provincial cooperation.
        </Flag>
      </Section>

      <Section title="The distributed failure: CFC-11 re-emissions">
        <p>
          Where continuous, distributed monitoring was required rather than one-off plant closures, compliance broke down. In 2018, atmospheric scientists detected that global emissions of CFC-11 had been rising since around 2013 — years after the global production ban took effect. Follow-up research published in <em>Nature</em> (Rigby et al., 2019) identified eastern China, specifically Shandong and Hebei provinces, as the source. Emissions from this region were approximately 7,000 tonnes per year higher in 2014–2017 than in 2008–2012, accounting for roughly 40–60% of the unexplained global increase.
        </p>
        <p>
          The likely cause was economic substitution: when HCFC-141b (the legal replacement) began to be restricted in 2013, some foam insulation producers reverted to banned CFC-11, which remained cheaper than legal alternatives and was readily available on the black market. Enforcement had been delegated to provincial authorities, who lacked both the incentive and the capacity to monitor the production decisions of thousands of small manufacturers.
        </p>
        <p>
          The central government's response — once the research became internationally embarrassing — was swift. Inspections were conducted, arrests were made, and production facilities were demolished. By 2019 Chinese CFC-11 emissions had returned to expected levels. But the self-correction only happened because external atmospheric monitoring, unconnected to China's domestic enforcement apparatus, detected the problem.
        </p>
        <Flag type="danger">
          <strong>The enforcement dependency:</strong> The CFC-11 episode reveals a structural vulnerability: when enforcement depends on provincial authorities monitoring ongoing production by small private manufacturers, compliance degrades as soon as central political attention moves elsewhere. The treaty's verification mechanism — which relies on national reporting rather than independent monitoring — was insufficient to catch the violation. It was atmospheric chemistry, not the treaty body, that provided accountability.
        </Flag>
      </Section>

      <Section title="Relevance to AI governance">
        <p>
          The Montreal Protocol offers perhaps the most directly applicable lesson for AI governance design. Its successes (binary obligations, direct financial incentives, trade consequences for non-compliance) and its failures (distributed monitoring of ongoing production choices) map directly onto the types of obligations any AI treaty would need to specify.
        </p>
        <p>
          The CFC-11 episode is particularly instructive. If AI governance relies on China's domestic enforcement apparatus to monitor ongoing deployment or training decisions by thousands of companies across many provinces, the Montreal Protocol suggests that compliance will be imperfect and self-correcting only when external detection mechanisms exist. The implication is that verification must be intrinsic to the treaty design — not an add-on — and must not depend solely on national reporting.
        </p>
      </Section>
    </>
  );
}

function ZhContent() {
  return (
    <>
      <FrameworkBox
        obligationType="mixed"
        enforcementChannel="distributed"
        verdict="partial"
        notes="《蒙特利尔议定书》是国际环境治理中引用最频繁的成功案例——对中国而言，却是一堂喜忧参半的课。二元式、集中执行的义务（关停这些工厂）取得了显著成功；而需要持续分散式监督的义务（确保不违规恢复生产）则在中央注意力转移后走向失败。「部分合规」的评定，既体现了真实的履约成就，也反映了有据可查的CFC-11再排放事件。"
      />

      <Section title="背景与中国的加入">
        <p>
          《蒙特利尔议定书》于1987年通过、1989年生效，要求缔约方逐步淘汰氯氟烃（CFCs）、哈龙及其他消耗臭氧层物质的生产和消费。中国于1991年加入——晚于大多数工业化国家，部分原因在于作为发展中国家，中国最初并未参与核心谈判小组。
        </p>
        <p>
          1990年代初，中国已成为全球最大的CFCs生产国和消费国。中国的参与对议定书的有效性至关重要——若无中国合规，全球淘汰行动将流于形式。议定书设立的多边基金——用以补偿发展中国家的转型成本——正是专门为吸引中国等主要排放国加入而设计的。
        </p>
      </Section>

      <Section title="二元式成功：氯氟烃淘汰">
        <p>
          中国对CFC生产的淘汰，是其整个条约记录中最为突出的履约成功之一。政府通过直接的集中式行政行动关停了CFC生产设施。最后六座CFC工厂于2007年7月1日关闭——比2010年的截止期限提前了两年半。哈龙的生产同样提前完成淘汰。
        </p>
        <p>
          两个结构性因素使这一举措在政治上具有可行性。其一，多边基金直接为转型提供资金——中国为CFC淘汰项目获得了逾4.4亿美元资助，以及后续HCFC淘汰阶段的3.85亿美元。合规的经济账，基本上已由政策制定者代为算清。其二，议定书的贸易条款意味着不合规将阻断中国制造商向全球市场销售制冷设备、气溶胶及其他产品的渠道。拒绝合规的代价具体而迫切。
        </p>
        <Flag type="success">
          <strong>为何二元式义务奏效：</strong>工厂关停是典型的二元式、一次性行政行为。中央政府可以发出指令，通过管理国有企业的同一渠道加以执行，并通过现场检查核实合规情况。无需持续的分散式执法，也无需省级协作。
        </Flag>
      </Section>

      <Section title="分散式失败：CFC-11再排放">
        <p>
          在需要持续分散式监督而非一次性关停的领域，履约走向失败。2018年，大气科学家检测到全球CFC-11排放自约2013年起持续上升——彼时全球生产禁令已生效多年。发表于《自然》杂志的后续研究（Rigby等人，2019年）将排放源指向中国东部，具体为山东和河北省。该地区2014至2017年间的年排放量比2008至2012年高出约7,000吨，占全球不明原因增量的40%至60%。
        </p>
        <p>
          可能的原因是经济替代：2013年HCFC-141b（法定替代品）开始受限后，部分泡沫隔热材料生产商回归被禁用的CFC-11——其价格仍低于合法替代品，且在黑市上唾手可得。执法权已下放至省级当局，而省级当局既缺乏监督数千家小型制造商生产决策的激励，也不具备相应能力。
        </p>
        <p>
          一旦上述研究在国际上造成尴尬，中央政府的反应迅速：开展检查、实施逮捕、拆除生产设施。2019年，中国的CFC-11排放已回归预期水平。但这次自我纠正之所以得以发生，完全是因为与中国国内执法体系毫无关联的外部大气监测发现了问题。
        </p>
        <Flag type="danger">
          <strong>执法依赖：</strong>CFC-11事件揭示了一个结构性脆弱点：当执法依赖于省级当局对小型私营制造商持续生产活动的监督时，一旦中央政治注意力转移，合规就会退化。议定书的核查机制——依赖国家报告而非独立监督——不足以发现违规行为。提供问责的是大气化学，而非条约机构。
        </Flag>
      </Section>

      <Section title="对人工智能治理的启示">
        <p>
          《蒙特利尔议定书》或许是对人工智能治理设计最具直接适用价值的案例。其成功之处（二元式义务、直接财政激励、不合规的贸易后果）与失败之处（对持续生产决策的分散式监督）直接对应任何人工智能条约所需规定的义务类型。
        </p>
        <p>
          CFC-11事件尤为发人深省。如果人工智能治理依赖中国国内执法体系来监督数千家分散于各省的企业的部署或训练决策，《蒙特利尔议定书》表明：履约将是不完整的，且只有在外部检测机制存在时才能实现自我纠正。其含义是：核查必须内嵌于条约设计之中——而非附加其上——且不得仅依赖国家报告。
        </p>
      </Section>
    </>
  );
}

export default function MontrealStudy() {
  const { lang } = useLang();

  const title = lang === 'zh' ? '《蒙特利尔议定书》' : 'Montreal Protocol on Ozone-Depleting Substances';
  const subtitle = lang === 'zh'
    ? '《关于消耗臭氧层物质的蒙特利尔议定书》——蒙特利尔，1987年'
    : 'Montreal Protocol on Substances that Deplete the Ozone Layer — Montreal, 1987';

  const stats = lang === 'zh'
    ? [
        { label: '加入', value: '1991年' },
        { label: '状态', value: '已生效', color: 'bg-sage/20 text-sage-dark' },
        { label: '行为', value: '部分合规', color: 'bg-gold/20 text-gold-dark' },
        { label: '多边基金所获资金', value: '逾8亿美元' },
        { label: 'CFC淘汰', value: '2007年（提前2.5年）' },
      ]
    : [
        { label: 'Acceded', value: '1991' },
        { label: 'Status', value: 'In force', color: 'bg-sage/20 text-sage-dark' },
        { label: 'Behaviour', value: 'Partial', color: 'bg-gold/20 text-gold-dark' },
        { label: 'Multilateral Fund received', value: '$800m+' },
        { label: 'CFC phase-out', value: '2007 (2.5 yrs early)' },
      ];

  return (
    <CaseStudyLayout title={title} subtitle={subtitle} stats={stats}>
      {lang === 'zh' ? <ZhContent /> : <EnContent />}
      <References refs={REFERENCES.montreal} />
    </CaseStudyLayout>
  );
}
