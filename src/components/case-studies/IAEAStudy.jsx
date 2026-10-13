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
        notes="China's move from nuclear exporter of concern to broadly responsible nuclear power owed more to bilateral leverage than to the IAEA itself. The US held a civil nuclear deal that China wanted, and Congress would not let it take effect until the president certified China's non-proliferation conduct. China tightened its export controls, the certification came in 1998, and IAEA safeguards (voluntary, as for every nuclear-weapon state) sat alongside. Everything ran through administrative regulation and the courts played no part."
      />

      <Section title="Background">
        <p>
          China joined the IAEA in 1984 and signed a Voluntary Offer safeguards agreement in 1988 (in force 1989). That agreement is the kind nuclear-weapon states have: China offers a list of civil facilities and the IAEA chooses which ones to inspect. It joined the NPT in 1992, the same year as France and more than twenty years after the US, UK and USSR. Beijing had long seen the treaty as a club rule written by the existing nuclear powers.
        </p>
        <p>
          Through the 1980s and early 1990s China was also a worrying nuclear exporter. It helped Pakistan's programme (including the sale of ring magnets for uranium enrichment in 1995–96) and cooperated with Iran.
        </p>
      </Section>

      <Section title="The leverage: the 1985 US–China agreement">
        <p>
          The US and China signed an Agreement for Cooperation on peaceful nuclear energy (a "123 Agreement") in July 1985. Congress approved it only on condition that the president first certify China's non-proliferation behaviour. Tiananmen-era sanctions in 1990 added further conditions. For almost thirteen years no president made the certification, so US firms could not sell China reactors or nuclear fuel.
        </p>
        <p>
          China wanted that technology, and over 1996–98 it changed its behaviour to get it. It pledged in 1996 not to assist unsafeguarded nuclear facilities, joined the Zangger Committee of nuclear suppliers in 1997, issued its first comprehensive nuclear export control regulations the same year, and promised to stop new nuclear cooperation with Iran. Clinton certified in January 1998 and the agreement was implemented that March. China signed an IAEA Additional Protocol later in 1998 (in force 2002) and joined the Nuclear Suppliers Group in 2004.
        </p>
        <Flag type="info">
          <strong>The leverage model:</strong> China wasn't won over by non-proliferation norms in the abstract. It was offered something concrete it wanted, on condition that it met specific, checkable standards. The gatekeeper was a US presidential certification, not the IAEA. The IAEA's role was to supply the safeguards that made the new rules credible.
        </Flag>
      </Section>

      <Section title="Building the domestic system">
        <p>
          China's domestic nuclear regulation was built piece by piece over four decades rather than by one act of legislation. The National Nuclear Safety Administration was set up in 1984. The State Council issued the Regulations on the Safety Supervision of Civil Nuclear Facilities in 1986, followed by export control regulations in 1997–98. The Nuclear Safety Law came in 2017, and the Atomic Energy Law was finally adopted in September 2025 (in force January 2026) after decades of drafting.
        </p>
        <p>
          The IAEA has been involved throughout, through regulatory review missions, technical cooperation and legal advice. In October 2024 a Chinese delegation went to Vienna specifically to discuss the draft Atomic Energy Law. This is what "transformation" looks like in practice: international standards turned into Chinese regulations over time, with outside experts consulted along the way.
        </p>
      </Section>

      <Section title="Compliance record & limits">
        <p>
          The IAEA has made no adverse findings against China, and China is now broadly seen as a responsible civil nuclear power. Two caveats are needed. First, safeguards under the Voluntary Offer agreement cover only the handful of facilities the IAEA picks from China's list, so "accepts IAEA inspections" covers far less than it would for a non-nuclear-weapon state. Second, China still builds reactors in Pakistan (at Chashma and Karachi). These are under IAEA safeguards, but critics argue they go beyond what China grandfathered in when it joined the Nuclear Suppliers Group.
        </p>
        <p>
          The bigger gap is military. China's arsenal has grown fast, to roughly 600 warheads by 2026 according to SIPRI and the Pentagon, and the NPT gives the IAEA no role there. China is also less transparent about its arsenal than the US, UK or France.
        </p>
        <Flag type="warning">
          <strong>The military carve-out:</strong> IAEA safeguards apply only to civil facilities that are declared and selected. Warhead development, new delivery systems and silo construction are all outside them. That is consistent with the NPT, but it limits the analogy to AI, where much of the worrying activity could be military or dual-use.
        </Flag>
      </Section>

      <Section title="Relevance to AI governance">
        <p>
          The nuclear story is the precedent people reach for most often in AI governance, and it does show that China will accept outside rules and some outside monitoring when the price is right. What made it work was a gate (the presidential certification) held by a party with something China wanted, plus a technical body to make the commitments checkable.
        </p>
        <p>
          The catch is the leverage. In the 1990s the US had civilian nuclear technology China couldn't easily get elsewhere. In AI the obvious equivalent is advanced chips and chipmaking tools, which the US already restricts as a matter of security policy rather than offering as an incentive. China is also a frontier AI developer in its own right. The terms of trade are much less one-sided than they were in nuclear power.
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
        notes="中国从令人担忧的核出口国转变为总体负责任的核大国，主要靠的是双边杠杆，而非国际原子能机构本身。美国手中握有中国想要的民用核合作协定，而国会要求总统先就中国的防扩散表现作出认证，协定才能实施。中国收紧了出口管制，认证于1998年作出；国际原子能机构的保障监督（与所有核武器国家一样属自愿性质）与之并行。整个过程通过行政法规完成，法院没有参与。"
      />

      <Section title="背景">
        <p>
          中国于1984年加入国际原子能机构，1988年签署自愿提交保障监督协定（1989年生效）。这是核武器国家适用的协定类型：由中国提供一份民用设施清单，再由机构从中选择核查对象。中国于1992年加入《不扩散核武器条约》，与法国同年，比美、英、苏晚了二十多年。北京长期认为，这一条约是既有核大国为自己制定的俱乐部规则。
        </p>
        <p>
          1980年代至1990年代初，中国也是一个令人担忧的核出口国：曾援助巴基斯坦的核项目（包括1995–96年出售用于铀浓缩的环形磁铁），并与伊朗开展核合作。
        </p>
      </Section>

      <Section title="杠杆：1985年中美核合作协定">
        <p>
          1985年7月，中美签署和平利用核能合作协定（即"123协定"）。国会批准该协定的前提是，总统须先就中国的防扩散行为作出认证；1990年天安门事件后的制裁又增加了条件。此后近十三年，没有一位总统作出认证，美国企业因此无法向中国出售反应堆和核燃料。
        </p>
        <p>
          中国想要这些技术，并在1996–98年间为此调整了行为：1996年承诺不援助未受保障监督的核设施；1997年加入桑戈委员会，同年颁布首部全面的核出口管制条例，并承诺停止与伊朗开展新的核合作。克林顿于1998年1月作出认证，协定当年3月开始实施。同年晚些时候，中国签署国际原子能机构附加议定书（2002年生效），并于2004年加入核供应国集团。
        </p>
        <Flag type="info">
          <strong>杠杆模式：</strong>中国并不是被抽象的防扩散规范说服的，而是获得了一项实实在在想要的东西，条件是满足具体、可核查的标准。把关的是美国总统的认证，而不是国际原子能机构；机构的作用是提供保障监督，使新的规则可信。
        </Flag>
      </Section>

      <Section title="国内制度建设">
        <p>
          中国的核监管体系是四十年间逐步建立起来的，而非一次立法完成：1984年成立国家核安全局；1986年国务院发布《民用核设施安全监督管理条例》；1997–98年出台出口管制条例；2017年通过《核安全法》；起草数十年的《原子能法》终于在2025年9月通过（2026年1月施行）。
        </p>
        <p>
          国际原子能机构在整个过程中通过监管评审任务、技术合作和法律咨询持续参与。2024年10月，中国代表团专程赴维也纳讨论《原子能法》草案。这就是"转化"在实践中的样子：国际标准随着时间推移被转化为中国的法规，并在此过程中征询外部专家意见。
        </p>
      </Section>

      <Section title="履约记录与局限">
        <p>
          国际原子能机构从未对中国作出不利认定，中国如今也被普遍视为负责任的民用核大国。但有两点需要说明。其一，自愿提交协定下的保障监督只覆盖机构从中国清单中选取的少数设施，因此"接受机构核查"的含义远不如无核武器国家那样广泛。其二，中国仍在巴基斯坦建设反应堆（恰希玛和卡拉奇）。这些反应堆处于机构保障监督之下，但批评者认为，它们超出了中国加入核供应国集团时获得"祖父条款"豁免的范围。
        </p>
        <p>
          更大的缺口在军事领域。据斯德哥尔摩国际和平研究所和五角大楼估计，到2026年中国核弹头已增至约600枚，而《不扩散核武器条约》不赋予国际原子能机构任何相关职能。中国在核武库方面的透明度也低于美国、英国和法国。
        </p>
        <Flag type="warning">
          <strong>军事豁免：</strong>国际原子能机构的保障监督只适用于经申报并被选中的民用设施。弹头研发、新型运载系统和发射井建设都不在其范围内。这符合《不扩散核武器条约》的框架，却限制了与人工智能的类比，因为人工智能领域许多令人担忧的活动可能属于军用或军民两用。
        </Flag>
      </Section>

      <Section title="对人工智能治理的启示">
        <p>
          核领域是人工智能治理讨论中最常被援引的先例。它确实表明，只要条件合适，中国会接受外部规则和一定程度的外部监督。其成功的关键在于：由一个手握中国所需之物的一方把守关口（总统认证），再加上一个技术机构使承诺可以核查。
        </p>
        <p>
          问题在于杠杆。1990年代，美国拥有中国难以从别处获得的民用核技术。在人工智能领域，最明显的对应物是先进芯片和芯片制造设备，而美国已经出于安全考虑对其实施管制，而不是把它当作激励条件。中国本身也是前沿人工智能开发者。双方的交易条件远不如当年核能领域那样一边倒。
        </p>
      </Section>
    </>
  );
}

export default function IAEAStudy() {
  const { lang } = useLang();

  const title = lang === 'zh' ? '国际原子能机构（IAEA）' : 'International Atomic Energy Agency (IAEA)';
  const subtitle = lang === 'zh'
    ? '自愿提交保障监督协定（1988年）与附加议定书（1998年签署）'
    : 'Voluntary Offer Safeguards Agreement (1988) & Additional Protocol (signed 1998)';

  const stats = lang === 'zh'
    ? [
        { label: '加入IAEA', value: '1984年' },
        { label: '加入NPT', value: '1992年' },
        { label: '保障监督协定', value: '1988年（自愿提交）' },
        { label: '附加议定书生效', value: '2002年' },
        { label: '行为', value: '合规', color: 'bg-sage/20 text-sage-dark' },
      ]
    : [
        { label: 'Joined IAEA', value: '1984' },
        { label: 'NPT accession', value: '1992' },
        { label: 'Safeguards agreement', value: '1988 (voluntary offer)' },
        { label: 'Additional Protocol in force', value: '2002' },
        { label: 'Behaviour', value: 'Compliant', color: 'bg-sage/20 text-sage-dark' },
      ];

  return (
    <CaseStudyLayout title={title} subtitle={subtitle} stats={stats}>
      {lang === 'zh' ? <ZhContent /> : <EnContent />}
      <References refs={REFERENCES.iaea} />
    </CaseStudyLayout>
  );
}
