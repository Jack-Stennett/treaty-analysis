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
        notes="The WTO is the most complicated case in China's record. Binary, measurable obligations with a clear enforcement route (tariff schedules, quota removal) were carried out reliably. Scalar, process-based obligations that needed continuing domestic reform (subsidy transparency, IP enforcement, real market access) were not. The gap widened under Xi Jinping as China moved back toward a more state-led economy."
      />

      <Section title="The political economy of accession">
        <p>
          China's accession in December 2001, after 15 years of negotiation, was as much a domestic political project as an economic one. Premier Zhu Rongji, a committed reformer, used it as a lever against inefficient and often corrupt state-owned enterprises that survived on protection. An international commitment gave reformers an outside reason for changes that would otherwise have met fierce resistance at home. In effect they could say: "Sorry, our hands are tied."
        </p>
        <p>
          This is one version of what Robert Putnam called a "two-level game": leaders using an international agreement to push through domestic changes they already wanted. China's WTO entry is the clearest modern example of it.
        </p>
      </Section>

      <Section title="The implementation process">
        <p>
          Accession set off one of the largest legislative clean-ups in PRC history. According to China's 2018 white paper, about 2,300 laws, regulations and departmental rules were revised or repealed at central level, and around 190,000 local measures. Chinese courts do not apply the WTO agreements directly. The Supreme People's Court's 2002 rules on international trade cases tell judges to apply Chinese law, but also to prefer whichever reading of it is consistent with China's WTO commitments. So the treaty works through domestic law, provision by provision.
        </p>
        <p>
          Where obligations were binary and checkable, such as tariff rates against published schedules or the removal of quotas, compliance was prompt. A 2004 review prepared for the US-China Economic and Security Review Commission found that tariff cuts had been made on time and most specific market-access commitments met. It was much more critical of transparency, subsidies and IP enforcement. Tariffs are "legible" obligations in this database's sense: anyone can check a rate against the schedule in seconds.
        </p>
      </Section>

      <Section title="Where compliance broke down">
        <p>
          Compliance split along the binary/scalar line. China is required to notify its subsidies to the WTO; it did not notify a single sub-central (provincial or local) subsidy until 2016, fifteen years after joining, and USTR says it still under-reports. IP laws were rewritten quickly. Enforcement against counterfeiting and piracy stayed weak for years, although Chinese courts now hear a very large volume of IP cases and set up specialised IP courts from 2014. In services, market access was granted on paper and then limited by licensing and administrative barriers the commitments never spelled out.
        </p>
        <p>
          Under Xi Jinping the gap grew. The market-oriented reform path WTO members had hoped for stalled, and China has resisted new disciplines on state-owned enterprises and industrial subsidies. USTR describes its approach as "state-led, non-market" policies and practices. China has, however, backed restoring the WTO's Appellate Body, which the US has blocked since 2019. In September 2025 it also said it would not seek new "special and differential treatment" as a developing country in future WTO negotiations.
        </p>
        <Flag type="danger">
          <strong>The scalar compliance gap:</strong> Subsidy reporting, IP enforcement and market-access reform are classic scalar obligations. They need continuing behavioural change from thousands of government bodies and firms, with no clear pass/fail line. WTO dispute settlement is centralised in principle, but it works after the fact and only when another member brings a case, which is slow, expensive and politically costly. The <em>behaviour_status</em> field in this database is meant to capture exactly this gap between formal obligation and actual behaviour.
        </Flag>
      </Section>

      <Section title="The dispute settlement record">
        <p>
          China has been the respondent in about 50 WTO disputes, the third-highest number after the US and the EU. It has generally complied with rulings that required a specific, binary fix, such as dropping particular export restrictions. It has been slower with rulings that required structural change. In a couple of cases it has appealed "into the void", to an Appellate Body that can no longer hear appeals.
        </p>
        <p>
          China has also brought about 25 cases of its own, mostly against the US. Its readiness to use the system on both sides suggests it treats WTO law as a useful tool, even while it contests some of the market-economy assumptions behind it.
        </p>
      </Section>

      <Section title="Relevance to AI governance">
        <p>
          The WTO is the closest precedent to what a broad AI governance framework would need to do: turn wide, process-based international commitments into domestic regulatory change across a large and economically important sector. The partial result is sobering. China delivered where obligations were specific and any shortfall was visible. It didn't where obligations needed continuing, distributed reform, or where political incentives pointed the other way.
        </p>
        <p>
          The Zhu Rongji mechanism, using a treaty as domestic political cover, could have an AI analogue. Chinese officials who want to rein in some domestic actors (unsafe deployment practices, for example) might welcome an international commitment that gives them an outside justification. That depends on there being a domestic constituency for reform, which can't be taken for granted in AI.
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
        notes="世贸组织是中国条约记录中最复杂的案例。二元式、可衡量且有明确执行途径的义务（关税减让表、取消配额）得到了可靠执行；需要持续国内改革的渐进式、程序性义务（补贴透明度、知识产权执法、实质性市场准入）则没有。随着中国在习近平时期转向更加国家主导的经济模式，这一差距进一步扩大。"
      />

      <Section title="入世的政治经济学">
        <p>
          经过15年谈判，中国于2001年12月加入世贸组织。这在国内既是经济工程，也是政治工程。坚定的改革者朱镕基总理借入世之力，向依靠保护主义存活、往往低效且腐败的国有企业开刀。一项国际承诺为改革派提供了外部理由，使原本会在国内遭遇强烈阻力的改革得以推进，等于是说："对不起，我们也是身不由己。"
        </p>
        <p>
          这正是帕特南所说的"双层博弈"的一种形式：领导人借助国际协议推动自己本就想要的国内改革。中国入世是这一机制在当代最清晰的例子。
        </p>
      </Section>

      <Section title="实施过程">
        <p>
          入世引发了中华人民共和国历史上规模最大的法律清理之一。据中国2018年白皮书，中央层面清理了约2300件法律、行政法规和部门规章，地方层面清理了约19万件地方性政策法规。中国法院并不直接适用世贸组织协定。最高人民法院2002年关于审理国际贸易行政案件的规定要求法官适用中国法律，但当法律存在多种合理解释时，应选择与中国入世承诺相一致的解释。因此，条约是通过国内法逐条发挥作用的。
        </p>
        <p>
          凡是二元式、可核查的义务，如按已公布的减让表调整关税税率、取消配额，履约都很及时。2004年为美中经济与安全审查委员会撰写的一份评估发现，关税减让按时完成，大部分具体的市场准入承诺也已兑现，但对透明度、补贴和知识产权执法的评价要严厉得多。关税是本数据库意义上"可读"的义务：任何人都能在几秒钟内对照减让表核查税率。
        </p>
      </Section>

      <Section title="履约在哪里出了问题">
        <p>
          履约沿着二元式与渐进式的分界线出现了分化。中国有义务向世贸组织通报补贴，但直到2016年、即入世十五年后，才首次通报地方层面的补贴，美国贸易代表办公室称至今仍存在少报。知识产权法律很快完成修订，但打击假冒和盗版的执法多年来一直薄弱；不过如今中国法院审理的知识产权案件数量非常庞大，并自2014年起设立了专门的知识产权法院。在服务业，市场准入在纸面上开放，随后却受到承诺中从未写明的许可和行政壁垒的限制。
        </p>
        <p>
          习近平时期，这一差距进一步扩大。世贸成员所期待的市场化改革路径陷入停滞，中国抵制针对国有企业和产业补贴的新纪律。美国贸易代表办公室称其做法为"国家主导的非市场"政策和做法。不过，中国支持恢复世贸组织上诉机构，而美国自2019年起一直阻挠上诉机构成员的任命。2025年9月，中国还表示在今后的世贸谈判中不再寻求新的发展中国家"特殊与差别待遇"。
        </p>
        <Flag type="danger">
          <strong>渐进式义务的履约差距：</strong>补贴通报、知识产权执法和市场准入改革都是典型的渐进式义务，需要成千上万个政府机构和企业持续改变行为，且没有明确的合格线。世贸组织争端解决机制在原则上是集中式的，但它只能事后发挥作用，且须由其他成员提起诉讼，过程缓慢、成本高昂、政治代价大。本数据库的 <em>behaviour_status</em> 字段正是为了捕捉正式义务与实际行为之间的这种差距。
        </Flag>
      </Section>

      <Section title="争端解决记录">
        <p>
          中国在约50起世贸争端中作为被诉方，数量仅次于美国和欧盟，位列第三。对于只需作出具体、二元式纠正的裁决（例如取消特定出口限制），中国总体上予以执行；对需要结构性改变的裁决则执行较慢。在少数案件中，中国向已无法审理上诉的上诉机构提起了"空诉"。
        </p>
        <p>
          中国自己也提起了约25起诉讼，主要针对美国。它同时以起诉方和被诉方身份使用这一体系，说明它把世贸法律当作有用的工具，尽管它对其背后的某些市场经济假设持有异议。
        </p>
      </Section>

      <Section title="对人工智能治理的启示">
        <p>
          世贸组织是最接近全面人工智能治理框架所需完成任务的先例：把宽泛的、程序性的国际承诺转化为一个庞大且经济上重要的行业中的国内监管变革。部分成功的结果发人深省。凡是义务具体、差距一目了然的地方，中国都做到了；凡是义务需要持续、分散的改革，或政治激励方向相反的地方，则没有做到。
        </p>
        <p>
          "朱镕基机制"，即以条约作为国内政治掩护，在人工智能领域可能也有对应。希望约束某些国内主体（例如不安全的部署做法）的中国官员，或许会欢迎一项为他们提供外部理由的国际承诺。但前提是国内存在支持改革的群体，而在人工智能领域这一点并不能想当然。
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
        { label: '中央层面清理法规', value: '约2300件' },
        { label: '状态', value: '已生效', color: 'bg-sage/20 text-sage-dark' },
        { label: '行为', value: '部分合规', color: 'bg-gold/20 text-gold-dark' },
      ]
    : [
        { label: 'Accession', value: 'Dec 2001' },
        { label: 'Negotiation period', value: '15 years' },
        { label: 'Central laws & rules revised', value: '~2,300' },
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
