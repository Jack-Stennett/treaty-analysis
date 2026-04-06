import React from 'react';
import CaseStudyLayout, { Section, FrameworkBox, Flag, References } from './CaseStudyLayout';
import { useLang } from '../../i18n/LanguageContext';
import { REFERENCES } from '../../data/references';

function EnContent() {
  return (
    <>
      <FrameworkBox
        obligationType="mixed"
        enforcementChannel="centralised"
        verdict="compliant"
        notes="The IAEA case is unique in China's treaty record: compliance was achieved not through normative commitment but through sustained bilateral leverage — specifically, the US conditioning access to civilian nuclear technology on IAEA certification. The mechanism was entirely administrative (no judicial role). China built regulatory infrastructure gradually in response to external prompting, and the process is still ongoing as of 2024."
      />

      <Section title="Background & the leverage mechanism">
        <p>
          China's relationship with the IAEA predates its NPT accession. China joined the IAEA in 1984 and signed a comprehensive safeguards agreement in 1989. NPT accession followed in 1992 — relatively late for a nuclear weapon state (the US, USSR, UK had ratified in 1968–70). The delay reflected China's historical ambivalence toward a non-proliferation regime it had not helped design and which it saw as primarily serving US interests.
        </p>
        <p>
          The key turning point was the 1985 US–China Agreement for Peaceful Nuclear Cooperation (the "123 Agreement"). Under US law, such agreements cannot be activated unless the partner accepts IAEA monitoring and meets non-proliferation standards. The US refused to activate the 1985 agreement for nearly a decade because China was selling nuclear materials and technology to Iran and Pakistan throughout the early 1990s. The mechanism was simple: China wanted access to US civilian nuclear technology; the US used that desire to demand domestic regulatory changes and IAEA certification.
        </p>
        <Flag type="info">
          <strong>The leverage model:</strong> This is the most explicitly coercive compliance mechanism in China's treaty record. China was not persuaded by norms or treaty obligations in the abstract — it was offered a concrete benefit (civilian nuclear cooperation) conditional on meeting specific standards. The treaty body (IAEA) provided the certification function; the bilateral relationship provided the enforcement incentive.
        </Flag>
      </Section>

      <Section title="Domestic regulatory development">
        <p>
          Unlike treaties that require a single legislative act, China's nuclear governance framework was built incrementally over more than two decades, often directly prompted by IAEA review missions. Key milestones include: the establishment of the National Nuclear Safety Administration (NNSA) in 1984; the Civil Nuclear Facility Safety Supervision Regulations (1993); the Atomic Energy Law (still being drafted, with active IAEA engagement as recently as October 2024); and the Nuclear Safety Law (2017), which consolidated many existing regulations.
        </p>
        <p>
          This gradualist, mission-prompted approach is unusual in China's treaty history. It suggests that sustained external engagement — through IAEA peer review missions, technical cooperation projects, and bilateral consultations — can drive domestic institutional development even absent a single legislative transformation moment.
        </p>
        <p>
          In October 2024, China sent a high-level delegation to IAEA headquarters specifically to discuss nuclear law and aspects of its draft Atomic Energy Law — indicating that alignment between China's domestic nuclear governance framework and IAEA standards remains an active, ongoing process more than 40 years after IAEA accession.
        </p>
      </Section>

      <Section title="Compliance record & limitations">
        <p>
          China is broadly regarded as a responsible civil nuclear power, and the IAEA has not issued significant formal compliance findings against it. China accepts routine inspections of its declared civil nuclear facilities, participates in IAEA technical cooperation programmes, and has substantially stopped exporting nuclear materials without adequate safeguards.
        </p>
        <p>
          There are ongoing concerns, however. The IAEA's oversight of China's military nuclear programme — which includes an estimated 500+ warheads — is limited by the NPT's distinction between civil and military uses. China's transparency on its nuclear arsenal is substantially less than that of the US, UK, or France. Additionally, US intelligence assessments have flagged ongoing Chinese assistance to Pakistan's nuclear programme, though below the threshold that would trigger IAEA action.
        </p>
        <Flag type="warning">
          <strong>The military carve-out:</strong> IAEA safeguards apply to declared civil facilities. China's military nuclear activities — development of tactical nuclear weapons, new warhead designs, silo construction — are largely outside the IAEA's reach. This is formally consistent with the NPT framework, but it limits the analogy to AI governance, where the relevant activities (frontier model training, autonomous weapons development) would be military in character.
        </Flag>
      </Section>

      <Section title="Relevance to AI governance">
        <p>
          The IAEA case is the most-cited precedent in the AI governance literature, and for good reason: it demonstrates that China can accept an intrusive international monitoring regime when the incentive structure is right. The key features of the mechanism — bilateral leverage, a technical secretariat with independent verification authority, incremental domestic regulatory development — are all potentially replicable.
        </p>
        <p>
          The critical caveat is that the IAEA leverage mechanism depended on something the US had that China wanted: civilian nuclear technology. For AI governance, it is not obvious what the analogous offering would be. China is, in several domains, a frontier AI developer in its own right. Access to US AI technology may provide some leverage, but the terms of trade are less asymmetric than in the nuclear case.
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
        enforcementChannel="centralised"
        verdict="compliant"
        notes="IAEA案例在中国条约记录中独一无二：履约并非源于规范性承诺，而是通过持续的双边杠杆压力实现的——具体而言，美国将获得民用核技术的渠道与IAEA认证挂钩。该机制完全是行政性的（不涉及司法角色）。中国在外部推动下逐步建立监管基础设施，这一进程截至2024年仍在持续。"
      />

      <Section title="背景与杠杆机制">
        <p>
          中国与国际原子能机构的关系早于其加入《不扩散核武器条约》。中国于1984年加入国际原子能机构，并于1989年签署全面保障协定。《不扩散核武器条约》的加入则发生在1992年——对于一个核武器国家而言相当滞后（美国、苏联、英国均于1968至70年间完成批准）。这一延迟折射出中国对于一个并非由其参与设计、且被视为主要服务于美国利益的防扩散机制的历史性矛盾心态。
        </p>
        <p>
          关键转折点是1985年《美中和平利用核能合作协定》（"123协定"）。依据美国法律，此类协定须待合作方接受国际原子能机构监督并满足防扩散标准后方可生效。由于中国在1990年代初期持续向伊朗和巴基斯坦出售核材料和技术，美国拒绝激活这一协定长达近十年。机制十分简单：中国希望获得美国民用核技术，美国则借此要求中国进行国内监管改革并取得国际原子能机构认证。
        </p>
        <Flag type="info">
          <strong>杠杆模式：</strong>这是中国条约记录中最具显性强制性质的履约机制。中国并非被抽象的规范或条约义务所说服——而是获得了一项以满足具体标准为条件的具体利益（民用核合作）。条约机构（国际原子能机构）提供了认证功能，双边关系则提供了执行激励。
        </Flag>
      </Section>

      <Section title="国内监管体系的发展">
        <p>
          与需要单一立法行动的条约不同，中国的核治理框架在超过二十年的时间里逐步建立，往往直接由国际原子能机构审查任务所推动。重要里程碑包括：1984年国家核安全局的成立、1993年《民用核设施安全监督管理条例》、至今仍在起草中的《原子能法》（2024年10月国际原子能机构仍在积极参与推动）以及整合诸多现行法规的2017年《核安全法》。
        </p>
        <p>
          这种渐进式、由任务驱动的方式在中国条约史上颇为罕见，表明即便没有单一的立法转型时刻，通过国际原子能机构同行评审任务、技术合作项目和双边磋商开展的持续外部接触，也能推动国内制度建设。
        </p>
        <p>
          2024年10月，中国专门向国际原子能机构总部派遣高级别代表团，就核法律及《原子能法》草案若干方面进行商讨——表明中国国内核治理框架与国际原子能机构标准的对接，在加入国际原子能机构四十余年后仍是一个持续进行的活跃进程。
        </p>
      </Section>

      <Section title="履约记录与局限">
        <p>
          中国被普遍视为负责任的民用核大国，国际原子能机构迄今未对其发布重大正式合规认定。中国接受对已申报民用核设施的例行检查，参与国际原子能机构技术合作项目，并已基本停止在缺乏充分保障措施的情况下出口核材料。
        </p>
        <p>
          然而，担忧依然存在。国际原子能机构对中国军事核项目的监督——据估计涉及500枚以上核弹头——受到《不扩散核武器条约》对民用与军用核活动区分的制约。中国在核武库方面的透明度远低于美国、英国或法国。此外，美国情报评估还指出，中国对巴基斯坦核项目的持续援助仍在延续，尽管尚未达到触发国际原子能机构采取行动的门槛。
        </p>
        <Flag type="warning">
          <strong>军事豁免：</strong>国际原子能机构保障措施适用于已申报的民用设施。中国的军事核活动——战术核武器研发、新型弹头设计、导弹发射井建设——基本在国际原子能机构的管辖范围之外。这在形式上符合《不扩散核武器条约》框架，但限制了与人工智能治理的类比空间——因为人工智能领域的相关活动（前沿模型训练、自主武器研发）往往具有军事性质。
        </Flag>
      </Section>

      <Section title="对人工智能治理的启示">
        <p>
          IAEA案例是人工智能治理文献中引用最频繁的先例，理由充分：它表明，当激励结构合理时，中国能够接受具有侵入性的国际监督机制。该机制的核心特征——双边杠杆、拥有独立核查权威的技术秘书处、渐进式国内监管建设——均具有潜在可复制性。
        </p>
        <p>
          关键的警示在于，国际原子能机构的杠杆机制依赖于美国拥有而中国渴望的东西：民用核技术。对于人工智能治理而言，类似的等价物并不明显。中国在若干领域本身已是前沿人工智能开发者。获取美国人工智能技术或许能提供一定杠杆，但贸易条件的不对称程度远不及核领域。
        </p>
      </Section>
    </>
  );
}

export default function IAEAStudy() {
  const { lang } = useLang();

  const title = lang === 'zh' ? '国际原子能机构（IAEA）' : 'International Atomic Energy Agency (IAEA)';
  const subtitle = lang === 'zh'
    ? '《不扩散核武器条约》保障协定与附加议定书——维也纳，1972年/1998年'
    : 'NPT Safeguards Agreement & Additional Protocol — Vienna, 1972 / 1998';

  const stats = lang === 'zh'
    ? [
        { label: '《不扩散核武器条约》批准', value: '1992年' },
        { label: 'IAEA保障协定', value: '1972年（前身）' },
        { label: '附加议定书', value: '2002年' },
        { label: '状态', value: '已生效', color: 'bg-sage/20 text-sage-dark' },
        { label: '行为', value: '合规', color: 'bg-sage/20 text-sage-dark' },
      ]
    : [
        { label: 'NPT ratified', value: '1992' },
        { label: 'IAEA Safeguards', value: '1972 (antecedent)' },
        { label: 'Additional Protocol', value: '2002' },
        { label: 'Status', value: 'In force', color: 'bg-sage/20 text-sage-dark' },
        { label: 'Behaviour', value: 'Compliant', color: 'bg-sage/20 text-sage-dark' },
      ];

  return (
    <CaseStudyLayout title={title} subtitle={subtitle} stats={stats}>
      {lang === 'zh' ? <ZhContent /> : <EnContent />}
      <References refs={REFERENCES.iaea} />
    </CaseStudyLayout>
  );
}
