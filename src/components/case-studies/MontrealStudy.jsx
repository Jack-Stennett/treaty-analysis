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
        notes="The Montreal Protocol is the best-known success story in international environmental governance, and for China it teaches two lessons. The binary, centrally enforced obligation (close the plants) went very well. The ongoing, distributed one (make sure nobody quietly starts making the stuff again) broke down once Beijing's attention moved on. The 'partial' verdict covers both the real success and the CFC-11 episode."
      />

      <Section title="Background & China's accession">
        <p>
          The Montreal Protocol was adopted in 1987 and entered into force in 1989. It commits parties to phase out chlorofluorocarbons (CFCs), halons and other ozone-depleting substances. China held back at first, and joined in June 1991, once the 1990 London Amendment had created the Multilateral Fund to pay developing countries' costs of switching.
        </p>
        <p>
          China's CFC production grew rapidly through the 1990s and peaked in the late 1990s, by which point it was the world's largest producer. Without China, the global phase-out would not have worked.
        </p>
      </Section>

      <Section title="The binary success: CFC phase-out">
        <p>
          China's CFC phase-out is one of the clearest compliance successes in its whole treaty record. The government shut production down by direct administrative order. In July 2007 it closed five of its six remaining CFC plants, two and a half years ahead of the 2010 deadline; the last kept running only for a narrow exempted use. Halon production was also eliminated ahead of schedule.
        </p>
        <p>
          Money made this easier. The Multilateral Fund paid for much of the transition, organised sector by sector rather than project by project, which closed loopholes and made targets easier to enforce. The World Bank alone channelled around $440 million in Fund grants to China through one multi-sector phase-out project, and a further $385 million was approved in 2013 just for closing HCFC production. For Chinese policymakers the financial case for compliance was largely made for them.
        </p>
        <Flag type="success">
          <strong>Why the binary obligation succeeded:</strong> Closing a factory is a one-off administrative act that is easy to check. Beijing could issue the order, enforce it through the same channels it uses to manage state-owned industry, and verify it with site visits. No ongoing provincial cooperation was needed.
        </Flag>
      </Section>

      <Section title="The distributed failure: CFC-11 re-emissions">
        <p>
          Where the obligation needed continuous, distributed monitoring, compliance broke down. In 2018, atmospheric scientists reported that global CFC-11 emissions had been rising since around 2013, years after production was supposed to have ended (Montzka et al., <em>Nature</em>). A follow-up study (Rigby et al., <em>Nature</em>, 2019) traced much of it to eastern China, around Shandong and Hebei. Emissions there were about 7,000 tonnes a year higher in 2014–17 than in 2008–12, roughly 40–60% of the global increase.
        </p>
        <p>
          The likely cause was cost. As the legal substitute (HCFC-141b) began to be restricted, some makers of foam insulation went back to cheaper, banned CFC-11. Policing this fell to provincial authorities, who had neither the incentive nor the capacity to track the production choices of thousands of small firms.
        </p>
        <p>
          Once the findings became an international embarrassment, Beijing moved quickly: inspections, arrests and demolished production lines. A second study (Park et al., <em>Nature</em>, 2021) found eastern China's emissions had fallen back to pre-2013 levels by 2019. But the fix only came because outside monitoring stations in South Korea and Japan picked up the problem. China's own reporting and enforcement system didn't.
        </p>
        <Flag type="danger">
          <strong>The enforcement dependency:</strong> When compliance depends on provincial officials policing ongoing production by small private firms, it decays once central attention moves elsewhere. The Protocol relies on national reporting, which didn't catch the problem. Atmospheric chemistry did.
        </Flag>
      </Section>

      <Section title="Relevance to AI governance">
        <p>
          The Montreal Protocol may be the most directly useful precedent for AI governance design. What worked (binary obligations, direct funding, central enforcement) and what didn't (distributed monitoring of ongoing production choices) map closely onto the kinds of obligations an AI treaty would need.
        </p>
        <p>
          The CFC-11 episode is the warning. If an AI agreement relies on Chinese authorities to police the ongoing training or deployment decisions of many companies across many provinces, expect imperfect compliance that gets corrected only when someone outside notices. Verification has to be built into the design from the start, and can't rest on national reporting alone. There is no AI equivalent of atmospheric chemistry that would catch a violation by default.
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
        notes="《蒙特利尔议定书》是国际环境治理中最著名的成功案例，对中国而言则给出了两个教训。二元式、由中央执行的义务（关闭工厂）完成得非常好；持续性、分散式的义务（确保没有人悄悄恢复生产）则在北京的注意力转移后出了问题。“部分合规”的评定同时反映了真实的成功和CFC-11事件。"
      />

      <Section title="背景与中国的加入">
        <p>
          《蒙特利尔议定书》于1987年通过、1989年生效，要求缔约方逐步淘汰氯氟烃（CFCs）、哈龙等消耗臭氧层物质。中国起初持观望态度，直到1990年《伦敦修正案》设立多边基金、为发展中国家承担转型成本之后，才于1991年6月加入。
        </p>
        <p>
          1990年代中国的CFC产量迅速增长，并在90年代末达到峰值，成为全球最大的生产国。没有中国，全球淘汰不可能成功。
        </p>
      </Section>

      <Section title="二元式成功：淘汰CFC">
        <p>
          中国淘汰CFC是其整个条约记录中最清晰的履约成功之一。政府以直接的行政命令关停生产。2007年7月，中国关闭了剩余六家CFC工厂中的五家，比2010年的期限提前两年半；最后一家仅为一项狭窄的豁免用途继续生产。哈龙的生产同样提前淘汰。
        </p>
        <p>
          资金让这一切更容易。多边基金承担了大部分转型成本，并按行业而非按项目拨付，堵住了漏洞，也使目标更易执行。仅世界银行一个多行业淘汰项目就向中国转拨了约4.4亿美元的基金赠款，2013年又专门为关停HCFC生产批准了3.85亿美元。对中国决策者而言，履约的经济账基本上已经替他们算好了。
        </p>
        <Flag type="success">
          <strong>二元式义务为何成功：</strong>关闭工厂是一次性的行政行为，容易核查。北京可以下达命令，通过管理国有工业的同一渠道执行，再通过现场检查加以核实，无需地方的持续配合。
        </Flag>
      </Section>

      <Section title="分散式失败：CFC-11重新排放">
        <p>
          在需要持续、分散监测的地方，履约出了问题。2018年，大气科学家报告称，全球CFC-11排放量自2013年前后一直在上升，而此时距离停产已有多年（Montzka等，《自然》）。后续研究（Rigby等，《自然》，2019年）将大部分增量追溯到中国东部的山东、河北一带：2014–17年该地区排放量比2008–12年每年高出约7000吨，约占全球增量的40–60%。
        </p>
        <p>
          原因很可能是成本。随着合法替代品HCFC-141b开始受到限制，一些泡沫保温材料生产商又用回了更便宜的、已被禁止的CFC-11。监管落在地方政府身上，而它们既无动力也无能力追踪成千上万家小企业的生产选择。
        </p>
        <p>
          研究结果令中国在国际上颇为难堪，北京随即迅速行动：开展检查、实施逮捕、拆除生产线。另一项研究（Park等，《自然》，2021年）发现，到2019年中国东部的排放已回落到2013年前的水平。但问题之所以得到纠正，是因为韩国和日本的境外监测站发现了它，而不是中国自身的报告和执法体系。
        </p>
        <Flag type="danger">
          <strong>执法依赖：</strong>当履约取决于地方官员监管小型私营企业的持续生产时，一旦中央的注意力转向别处，履约就会松懈。议定书依赖国家报告，而国家报告没有发现问题，发现问题的是大气化学。
        </Flag>
      </Section>

      <Section title="对人工智能治理的启示">
        <p>
          对人工智能治理的制度设计而言，《蒙特利尔议定书》或许是最直接有用的先例。成功的部分（二元式义务、直接资金支持、中央执行）和失败的部分（对持续生产选择的分散监测），与人工智能条约需要规定的义务类型高度对应。
        </p>
        <p>
          CFC-11事件是一个警示。如果人工智能协议依靠中国当局去监管众多省份、众多企业持续的训练或部署决定，那么可以预期履约会不完美，且只有在外部有人察觉时才会得到纠正。核查必须从一开始就纳入设计，而不能只依赖国家报告。人工智能领域并不存在像大气化学那样能够自动发现违规的手段。
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
        { label: 'CFC淘汰', value: '2007年（提前2.5年）' },
        { label: '接受基加利修正案', value: '2021年' },
      ]
    : [
        { label: 'Acceded', value: '1991' },
        { label: 'Status', value: 'In force', color: 'bg-sage/20 text-sage-dark' },
        { label: 'Behaviour', value: 'Partial', color: 'bg-gold/20 text-gold-dark' },
        { label: 'CFC phase-out', value: '2007 (2.5 yrs early)' },
        { label: 'Kigali Amendment accepted', value: '2021' },
      ];

  return (
    <CaseStudyLayout title={title} subtitle={subtitle} stats={stats}>
      {lang === 'zh' ? <ZhContent /> : <EnContent />}
      <References refs={REFERENCES.montreal} />
    </CaseStudyLayout>
  );
}
