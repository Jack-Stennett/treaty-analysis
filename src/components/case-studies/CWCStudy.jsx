import React from 'react';
import CaseStudyLayout, { Section, FrameworkBox, Flag, References } from './CaseStudyLayout';
import { useLang } from '../../i18n/LanguageContext';
import { REFERENCES } from '../../data/references';

function EnContent() {
  return (
    <>
      <FrameworkBox
        obligationType="binary"
        enforcementChannel="centralised"
        verdict="compliant"
        notes="The CWC is the clearest case of binary obligation + centralised enforcement in China's treaty record. Obligations are highly specific (destroy stockpiles, permit inspections, report production); the OPCW has independent verification authority. China's compliance record is strong, and the treaty is analytically important as the only case where an external body physically enters China to verify adherence."
      />

      <Section title="Background & China's accession">
        <p>
          Negotiated in the early 1990s during the final phase of the Cold War, the CWC was driven by shared great-power interest in eliminating a category of weapons that had already become militarily marginal and politically stigmatised. China signed in January 1993 and ratified in April 1997, playing a broadly cooperative role throughout the negotiating process.
        </p>
        <p>
          A critical factor in China's early engagement was Japan's legacy chemical weapons on Chinese soil — an estimated 700,000 munitions abandoned at the end of the Second World War. The CWC created a specific framework (Article 3 and the Annex on Implementation) for their destruction, making Chinese participation directly advantageous. The bilateral Japan–China Memorandum of Understanding on the issue was signed in 1999, and destruction operations continue to this day.
        </p>
      </Section>

      <Section title="Implementation & compliance record">
        <p>
          China's CWC compliance has been consistently positive by the OPCW's assessments. China has accepted over 500 routine and challenge inspections of both civilian chemical production facilities and sites containing abandoned Japanese munitions. It has met all declaration deadlines and has not been subject to any formal challenge inspection. Domestically, China promulgated the Regulations on the Control of Export of Dual-Use Chemicals and Related Equipment and Technology (2002) and subsequent amendments to align its export control regime with the CWC's Schedule system.
        </p>
        <p>
          The OPCW's verification mechanism — which allows independent inspectors to enter and sample facilities without prior notice in some circumstances — represents the most intrusive international compliance check that China accepts in any domain. The fact that this has operated smoothly for nearly three decades is analytically significant.
        </p>
        <Flag type="success">
          <strong>Why it works:</strong> The CWC obligation structure is almost entirely binary and precisely specified — a chemical is either scheduled or not; a facility is either declared or not; an inspection is either granted or refused. There is little interpretive latitude. The OPCW provides a centralised enforcement channel that is independent of the bilateral political relationship. Non-participation carries a real reputational cost: North Korea's absence from the CWC is a marker of pariah status, and China has strong incentives to distinguish itself from that category.
        </Flag>
      </Section>

      <Section title="Limitations & caveats">
        <p>
          The compliance picture is not entirely clean. US State Department compliance reports (most recently 2021) have flagged concerns about Chinese military activities — specifically, whether China may have retained a small offensive CW research programme inconsistent with its CWC obligations. China denies these allegations, and the OPCW has not issued any formal finding. The concern is essentially unverifiable given the limits of the inspection regime, which does not cover all military facilities.
        </p>
        <p>
          Additionally, China's export controls have historically had enforcement gaps, and dual-use chemical precursors have reached state actors of concern via Chinese manufacturers, though often below the threshold of direct CWC violation.
        </p>
      </Section>

      <Section title="Relevance to AI governance">
        <p>
          The CWC is frequently cited in AI governance literature (alongside the IAEA model) as an example of an intrusive verification regime that a major power accepted. The key structural features — binary obligations, centralised enforcement, a dedicated technical secretariat, a clear class of prohibited items — map plausibly onto certain AI governance proposals, such as compute thresholds or model registries with mandatory disclosure. China's acceptance of OPCW inspections suggests that intrusive verification is not categorically off the table, provided the obligation is sufficiently specific and the diplomatic costs of refusal are sufficiently high.
        </p>
        <Flag type="info">
          The CWC analogy has limits. Chemical weapons are a clearly bounded category with established detection science. AI capabilities are harder to define and the relevant "facilities" (compute clusters, training runs, weights) are less physically legible than chemical production plants. Any AI analogue would need to solve the verification problem first.
        </Flag>
      </Section>
    </>
  );
}

function ZhContent() {
  return (
    <>
      <FrameworkBox
        obligationType="binary"
        enforcementChannel="centralised"
        verdict="compliant"
        notes="《化学武器公约》是中国条约记录中二元式义务加集中执行渠道最典型的案例。义务规定极为具体（销毁库存、允许检查、申报生产）；禁止化学武器组织拥有独立核查权。中国的履约记录良好，且该条约具有重要的分析价值——这是唯一一个外部机构实地进入中国核查履约情况的案例。"
      />

      <Section title="背景与中国的加入">
        <p>
          《化学武器公约》于冷战最后阶段的1990年代初谈判形成，其动力来自大国消除这一在军事上已趋边缘化、在政治上已被污名化的武器类别的共同利益。中国于1993年1月签署、1997年4月批准，在整个谈判过程中发挥了广泛合作的作用。
        </p>
        <p>
          推动中国早期参与的一个关键因素，是日本遗留在中国境内的化学武器——据估计约有70万枚于二战结束时被遗弃的弹药。《化学武器公约》为其销毁建立了专门框架（第3条及执行附件），使中国参与直接有利可图。2009年双方签署了涉及该问题的日中双边谅解备忘录，销毁行动延续至今。
        </p>
      </Section>

      <Section title="实施与履约记录">
        <p>
          根据禁止化学武器组织的评估，中国的《化学武器公约》履约情况持续良好。中国已接受超过500次例行及挑战性检查，涵盖民用化工生产设施和存放日本遗弃弹药的地点。中国已满足所有申报期限，且未受到任何正式挑战性检查。在国内，中国颁布了《两用化学品及相关设备技术出口控制规定》（2002年）及后续修订，使其出口管制制度与《化学武器公约》的物质清单体系相衔接。
        </p>
        <p>
          禁止化学武器组织的核查机制——在某些情况下允许独立检查员在不预先通知的情况下进入设施并采集样品——是中国在任何领域所接受的最具侵入性的国际合规检查。这一机制近三十年来运转顺畅，本身就具有重要的分析意义。
        </p>
        <Flag type="success">
          <strong>为何奏效：</strong>《化学武器公约》的义务结构几乎全部是二元式且经过精确界定的——某种化学品或在清单之内，或不在；某一设施或已申报，或未申报；某次检查或获准，或遭拒绝。解释空间极为有限。禁止化学武器组织提供了独立于双边政治关系的集中执行渠道。不参与会带来真实的声誉代价：朝鲜缺席《化学武器公约》是"弃绝国"地位的标志，而中国有充分的激励与这一类别划清界限。
        </Flag>
      </Section>

      <Section title="局限与注意事项">
        <p>
          履约状况并非无懈可击。美国国务院合规报告（最近一次发布于2021年）对中国的军事活动提出了关切——具体而言，中国是否可能保留了一个与其《化学武器公约》义务不符的小规模进攻性化学武器研究项目。中国否认上述指控，禁止化学武器组织亦未作出任何正式认定。鉴于检查制度的局限性（并不涵盖所有军事设施），上述关切在本质上难以核实。
        </p>
        <p>
          此外，中国的出口管制历史上存在执法漏洞，双用途化学前体曾通过中国制造商流向受关切的国家行为体，尽管通常低于直接违反《化学武器公约》的门槛。
        </p>
      </Section>

      <Section title="对人工智能治理的启示">
        <p>
          《化学武器公约》在人工智能治理文献中经常与国际原子能机构模式一道被援引，作为大国接受具有侵入性核查机制的范例。其核心结构特征——二元式义务、集中执行、专属技术秘书处、明确的禁止事项类别——可较为合理地对应某些人工智能治理提案，如算力阈值或附带强制披露的模型登记制度。中国接受禁止化学武器组织检查，表明侵入性核查并非原则上不可接受——前提是义务足够具体，且拒绝的外交代价足够高昂。
        </p>
        <Flag type="info">
          《化学武器公约》类比存在局限。化学武器是一个界定清晰、具有成熟检测科学的类别。人工智能能力更难界定，相关"设施"（算力集群、训练运行、模型权重）的物理可读性远不及化工生产厂。任何人工智能类比方案都需首先解决核查难题。
        </Flag>
      </Section>
    </>
  );
}

export default function CWCStudy() {
  const { lang } = useLang();

  const title = lang === 'zh' ? '《化学武器公约》（CWC）' : 'Chemical Weapons Convention (CWC)';
  const subtitle = lang === 'zh'
    ? '《关于禁止发展、生产、储存和使用化学武器及销毁此种武器的公约》——海牙，1993年'
    : 'Convention on the Prohibition of the Development, Production, Stockpiling and Use of Chemical Weapons — The Hague, 1993';

  const stats = lang === 'zh'
    ? [
        { label: '签署', value: '1993年' },
        { label: '批准', value: '1997年' },
        { label: '状态', value: '已生效', color: 'bg-sage/20 text-sage-dark' },
        { label: '行为', value: '合规', color: 'bg-sage/20 text-sage-dark' },
        { label: '中国境内OPCW检查次数', value: '500+次' },
      ]
    : [
        { label: 'Signed', value: '1993' },
        { label: 'Ratified', value: '1997' },
        { label: 'Status', value: 'In force', color: 'bg-sage/20 text-sage-dark' },
        { label: 'Behaviour', value: 'Compliant', color: 'bg-sage/20 text-sage-dark' },
        { label: 'OPCW inspections in China', value: '500+' },
      ];

  return (
    <CaseStudyLayout title={title} subtitle={subtitle} stats={stats}>
      {lang === 'zh' ? <ZhContent /> : <EnContent />}
      <References refs={REFERENCES.cwc} />
    </CaseStudyLayout>
  );
}
