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
        verdict="partial"
        notes="The WTO case is the most complex in China's treaty record. Binary, measurable obligations with centralised enforcement (tariff schedules, quantitative restrictions) were implemented reliably. Scalar, process-based obligations requiring ongoing domestic reform (transparency, subsidy reporting, IP enforcement, market access for state-adjacent sectors) were not. The compliance gap widened significantly under Xi Jinping as China moved back toward a more state-directed economic model."
      />

      <Section title="The political economy of accession">
        <p>
          China's WTO accession after 15 years of negotiation was, domestically, a political project as much as an economic one. Premier Zhu Rongji — widely regarded as the most reform-minded Chinese leader of his generation — used WTO accession as a lever to attack inefficient and often corrupt state-owned enterprises that had survived on protectionism. The international commitment gave domestic reformers a compelling external justification for changes that would otherwise have faced devastating political opposition: "our hands are tied."
        </p>
        <p>
          This "two-level game" dynamic — using international commitments to achieve domestic goals that would otherwise be politically blocked — is one of the most important mechanisms by which international treaties produce real domestic change, and the WTO accession is its clearest illustration in China's modern history.
        </p>
      </Section>

      <Section title="The implementation process">
        <p>
          What followed accession was one of the most significant legislative programmes in PRC history. China revised or repealed over 3,000 laws, regulations, and administrative orders. Uniquely among major treaties in China's record, the WTO agreements were <em>not</em> published in the NPC Standing Committee Gazette — meaning Chinese courts could not refer to them directly. Instead, the entire treaty had to be transformed into domestic Chinese law, provision by provision, across dozens of policy areas.
        </p>
        <p>
          This transformation process illustrates both the strengths and limits of China's treaty implementation model. Where obligations were binary and checkable — tariff rates against published schedules, removal of quantitative restrictions — compliance was prompt and verifiable. The USTR's first two-year WTO compliance review (2004) noted that tariff reductions were implemented on schedule, quantitative restrictions were removed, and most specific market access commitments were met. These are "legible" obligations in the framework of this database: you can check a tariff rate in seconds and know whether China is compliant.
        </p>
      </Section>

      <Section title="Where compliance broke down">
        <p>
          Compliance fractured along the scalar/binary divide. Transparency obligations — requiring China to report domestic subsidies to the WTO's Committee on Subsidies and Countervailing Measures — were chronically unfulfilled. A recent USTR report notes that China took 15 years to report its first subsidy through a local government, and continues to systematically under-report. Intellectual property law was substantially revised on paper; enforcement in Chinese courts remained largely notional for years. In services sectors, formal market access was extended but then constrained by administrative and licensing barriers that were never specified in the commitments.
        </p>
        <p>
          Under Xi Jinping, the compliance picture worsened. China abandoned the market-oriented reform path that WTO architects had anticipated and has since blocked WTO reform proposals — most notably on dispute settlement and the treatment of state enterprises — that would constrain China's industrial policy model. The USTR has characterised China's approach as a "state-directed, non-market" model incompatible with WTO norms.
        </p>
        <Flag type="danger">
          <strong>The scalar compliance gap:</strong> Subsidy reporting, IP enforcement, and market access reform are quintessentially scalar obligations: they require ongoing behavioural change by thousands of government bodies and private actors, with no clear pass/fail threshold. The WTO dispute settlement mechanism provides <em>centralised</em> enforcement in principle, but it operates ex post and requires a complaining party to bring a case — which is slow, expensive, and politically costly. This gap between formal obligation and actual behaviour is precisely what the <em>behaviour_status</em> field in this database is designed to capture.
        </Flag>
      </Section>

      <Section title="The dispute settlement record">
        <p>
          China has been the respondent in approximately 50 WTO dispute settlement cases — the most of any country alongside the US and EU. Its record is mixed. China has largely complied with panel and Appellate Body rulings in cases involving binary obligations (e.g., removing specific export restrictions, correcting specific tariff classifications). It has been slower to implement rulings that require ongoing structural change, and has appealed into the WTO's now-dysfunctional Appellate Body in several cases.
        </p>
        <p>
          China has also been an active complainant — bringing approximately 25 cases against other parties, mostly the US. This active use of the dispute settlement system, both as respondent and complainant, is itself analytically significant: it suggests China treats the WTO's legal mechanisms as instrumentally useful even while contesting some of their normative premises.
        </p>
      </Section>

      <Section title="Relevance to AI governance">
        <p>
          The WTO case is the closest precedent to what a comprehensive AI governance framework would need to do: transform broad, process-based international commitments into domestic regulatory change across a complex, economically significant sector. Its partial success is sobering. China implemented well where obligations were specific and the compliance gap was visible; it did not implement well where obligations required ongoing distributed reform or where political incentives pointed the other way.
        </p>
        <p>
          The Zhu Rongji mechanism — using treaty commitments as domestic political cover — also has an AI analogue: Chinese AI governance actors who want to constrain some domestic actors (e.g., unsafe deployment practices) might welcome an international commitment that gives them external justification. But this depends on whether there are domestic reform constituencies who would benefit, which is not guaranteed in the AI context.
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
        verdict="partial"
        notes="WTO案例是中国条约记录中最为复杂的案例。二元式、可量化且具有集中执行机制的义务（关税表、数量限制）得到了可靠执行；而需要持续国内改革的渐进式、程序性义务（透明度、补贴申报、知识产权执法、邻国市场准入）则未能履行。随着习近平时代中国回归更具国家主导性的经济模式，履约差距显著扩大。"
      />

      <Section title="入世的政治经济学">
        <p>
          经过15年谈判，中国加入世贸组织在国内既是政治工程，也是经济项目。时任总理朱镕基——被广泛视为其那一代最具改革精神的中国领导人——将入世作为杠杆，打击靠保护主义存活的低效且腐败的国有企业。国际承诺为国内改革派提供了一个令人信服的外部理由，使原本将遭遇巨大政治阻力的改革得以推进："我们别无选择。"
        </p>
        <p>
          这种"双层博弈"动态——利用国际承诺实现在国内层面原本会被政治封堵的目标——是国际条约推动真实国内变革最重要的机制之一，而入世是中国现代史上最清晰的体现。
        </p>
      </Section>

      <Section title="实施过程">
        <p>
          入世之后，中国启动了中华人民共和国历史上规模最大的立法工程之一，修订或废止了3,000余部法律、法规及行政规章。与中国重大条约记录中的独特之处在于，世贸组织协议<em>未</em>发表于全国人大常委会公报——这意味着中国法院无法直接援引。相应地，整个条约必须逐条款地转化为中国国内法，涵盖数十个政策领域。
        </p>
        <p>
          这一转化过程既体现了中国条约执行模式的优势，也揭示了其局限。在义务为二元式且可核查的领域——对照公布的时间表核查关税税率、取消数量限制——履约及时且可验证。美国贸易代表办公室2004年发布的首份入世合规两年期审查报告指出，关税削减按时落实、数量限制已被取消、大多数具体市场准入承诺得到履行。这些都是本数据库框架下的"可读"义务：只需几秒钟核查关税税率，即可判断中国是否合规。
        </p>
      </Section>

      <Section title="履约的失效之处">
        <p>
          履约在渐进式/二元式分野处出现断裂。透明度义务——要求中国向世贸组织补贴与反补贴措施委员会申报国内补贴——长期未能履行。美国贸易代表办公室近期报告指出，中国花了15年才首次申报地方政府补贴，且持续存在系统性少报。知识产权法律在文本层面得到了实质性修订，但中国法院的执法多年来基本流于形式。在服务业领域，形式上的市场准入已经开放，随后却受到承诺文本从未载明的行政壁垒和许可证门槛的制约。
        </p>
        <p>
          习近平时代，履约状况进一步恶化。中国放弃了世贸组织设计者所预期的市场化改革路径，并此后阻挠世贸组织改革提案——尤其是在争端解决和国有企业处理方式方面——这些提案将制约中国的产业政策模式。美国贸易代表办公室将中国的做法定性为与世贸组织规范不相容的"国家主导、非市场"模式。
        </p>
        <Flag type="danger">
          <strong>渐进式履约差距：</strong>补贴申报、知识产权执法和市场准入改革是典型的渐进式义务：它们要求数千个政府机构和私人行为体持续改变行为，却没有明确的合格/不合格门槛。世贸组织争端解决机制在原则上提供了集中式执行渠道，但其运作是事后性的，且需要由提出申诉的一方启动——这一过程缓慢、代价高昂且政治成本不菲。正式义务与实际行为之间的这种差距，正是本数据库<em>行为状态</em>字段所要记录的内容。
        </Flag>
      </Section>

      <Section title="争端解决记录">
        <p>
          中国在约50起世贸组织争端解决案件中担任被申诉方，与美国和欧盟并列最多。其记录参差不齐。在涉及二元式义务的案件中（如取消特定出口限制、纠正特定关税分类），中国大体遵守了专家组和上诉机构的裁决；而在需要持续性结构性变革的裁决方面，执行则相对迟缓，且在若干案件中向如今已陷入瘫痪的上诉机构提出了上诉。
        </p>
        <p>
          中国也是积极的申诉方，对其他方（主要是美国）提起了约25起案件。作为被申诉方和申诉方同时积极使用争端解决体系，本身具有重要的分析意义：这表明中国即便对某些规范性前提持有异议，仍将世贸组织的法律机制视为具有工具价值。
        </p>
      </Section>

      <Section title="对人工智能治理的启示">
        <p>
          WTO案例是与综合性人工智能治理框架所需做的工作最为接近的先例：将宽泛的、程序性的国际承诺转化为涵盖复杂、具有重大经济意义领域的国内监管变革。其有限成功令人警醒：义务具体且违规差距显而易见的领域，中国执行良好；义务要求持续分散式改革或政治激励指向相反的领域，中国则未能落实。
        </p>
        <p>
          "朱镕基机制"——将条约承诺作为国内政治掩护——在人工智能领域也有类似情形：希望约束某些国内行为体（如不安全部署实践）的中国人工智能治理参与者，可能会欢迎一项提供外部依据的国际承诺。但这取决于国内是否存在受益的改革派力量，而在人工智能背景下，这一点并无保障。
        </p>
      </Section>
    </>
  );
}

export default function WTOStudy() {
  const { lang } = useLang();

  const title = lang === 'zh' ? '世界贸易组织（WTO）' : 'World Trade Organisation (WTO)';
  const subtitle = lang === 'zh'
    ? '建立世界贸易组织的马拉喀什协定——中国入世，2001年12月'
    : 'Marrakesh Agreement establishing the WTO — China\'s accession, December 2001';

  const stats = lang === 'zh'
    ? [
        { label: '入世时间', value: '2001年12月' },
        { label: '谈判历时', value: '15年' },
        { label: '修订法规', value: '3,000余部' },
        { label: '状态', value: '已生效', color: 'bg-sage/20 text-sage-dark' },
        { label: '行为', value: '部分合规', color: 'bg-gold/20 text-gold-dark' },
      ]
    : [
        { label: 'Accession', value: 'Dec 2001' },
        { label: 'Negotiation period', value: '15 years' },
        { label: 'Laws revised', value: '3,000+' },
        { label: 'Status', value: 'In force', color: 'bg-sage/20 text-sage-dark' },
        { label: 'Behaviour', value: 'Partial', color: 'bg-gold/20 text-gold-dark' },
      ];

  return (
    <CaseStudyLayout title={title} subtitle={subtitle} stats={stats}>
      {lang === 'zh' ? <ZhContent /> : <EnContent />}
      <References refs={REFERENCES.wto} />
    </CaseStudyLayout>
  );
}
