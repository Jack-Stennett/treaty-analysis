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
        notes="The CWC is the cleanest example in China's record of binary obligations with centralised verification. The obligations are specific: declare facilities, destroy stockpiles, report production of scheduled chemicals, admit inspectors. The OPCW checks them independently. China has hosted hundreds of inspections, and the OPCW has never made an adverse finding against it. The main dissent comes from the US, which says it cannot certify China's compliance."
      />

      <Section title="Background & China's accession">
        <p>
          The CWC was negotiated at the Conference on Disarmament from 1980 and concluded in 1992, at the end of the Cold War, when the major powers shared an interest in getting rid of a weapon that was already stigmatised and of declining military use. It opened for signature in Paris in January 1993. China signed on the first day and ratified in April 1997, just before the treaty entered into force.
        </p>
        <p>
          China also had its own reason to want the treaty. Japan left large numbers of chemical munitions in China at the end of the Second World War. Japan estimates around 700,000; Chinese estimates are much higher. The CWC makes the state that abandoned such weapons responsible for destroying them. A Japan–China memorandum of understanding followed in 1999, and destruction work is still going on, with Japan aiming to finish the stored weapons by the end of 2027.
        </p>
      </Section>

      <Section title="Implementation & compliance record">
        <p>
          China brought the CWC into domestic law by administrative regulation rather than by statute. The State Council issued the Regulations on the Administration of Controlled Chemicals in 1995 (revised in 2011), which turned the CWC schedules into Chinese control lists, and implementing rules followed in 1996–97. Export controls on scheduled chemicals came in 2002, and were later folded into the Export Control Law (2020) and the dual-use export control regulations (2024).
        </p>
        <p>
          The OPCW carries out routine inspections of declared industrial sites in China, and of sites holding abandoned Japanese weapons. China's foreign ministry puts the total at about 750 by mid-2026; the OPCW does not publish per-country counts. These are routine inspections notified in advance. No state has ever requested a short-notice "challenge inspection" anywhere under the CWC, so that tougher mechanism has never been tested on China, or on anyone else.
        </p>
        <Flag type="success">
          <strong>Why it works:</strong> There is little room for interpretation. A chemical is on a schedule or it isn't; a facility has been declared or it hasn't; inspectors get in or they don't. The OPCW gives a verification channel that doesn't depend on the state of US–China relations. And staying out costs something: North Korea is one of only a handful of states outside the CWC, and China has no wish to be in that company.
        </Flag>
      </Section>

      <Section title="Limitations & caveats">
        <p>
          The picture isn't completely clean. The US State Department's annual compliance reports say the US cannot certify that China has met its CWC obligations. The April 2025 report cites Chinese research on pharmaceutical-based agents and toxins with possible dual-use applications; earlier reports questioned whether China fully declared its historical chemical weapons programme. China rejects these claims and the OPCW has made no finding. Without a challenge inspection, they are hard to settle either way, and routine inspections don't reach military facilities.
        </p>
        <p>
          Enforcement of export controls has also been patchy. The US sanctioned a series of Chinese companies in the late 1990s and 2000s for selling chemical-weapons-related materials and equipment, mostly to Iran.
        </p>
      </Section>

      <Section title="Relevance to AI governance">
        <p>
          The CWC is often cited alongside the IAEA as proof that major powers will accept intrusive verification. Its structure maps onto some AI proposals reasonably well: binary obligations, a dedicated technical secretariat, declared facilities, and a defined list of controlled items (compute thresholds or model registries, say). China's record suggests on-site verification isn't off the table, provided the obligation is specific and refusing would carry a real diplomatic cost.
        </p>
        <Flag type="info">
          The analogy has limits. Chemical weapons are a well-bounded category with mature detection science. AI capabilities are harder to define, and the relevant "facilities" (compute clusters, training runs, model weights) are much harder to inspect than a chemical plant. An AI equivalent would need to solve verification first.
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
        notes="《化学武器公约》是中国条约记录中二元式义务加集中核查最清晰的例子。义务非常具体：申报设施、销毁库存、报告附表化学品的生产、接受核查人员。禁止化学武器组织对此进行独立核查。中国已接待数百次视察，该组织从未对中国作出不利认定。主要的异议来自美国，美方称无法证明中国遵守了公约。"
      />

      <Section title="背景与中国的加入">
        <p>
          《化学武器公约》自1980年起在裁军谈判会议上谈判，1992年冷战结束之际完成。当时各大国都有意消除这一已被污名化、军事价值日益下降的武器。公约于1993年1月在巴黎开放签署，中国在首日签署，并于1997年4月、即公约生效前夕批准。
        </p>
        <p>
          中国还有自身的理由支持公约。二战结束时，日本在中国遗留了大量化学武器：日方估计约70万枚，中方估计则高得多。公约规定，遗弃此类武器的国家负责将其销毁。中日两国于1999年签署谅解备忘录，销毁工作至今仍在进行，日方力争在2027年底前完成已回收武器的销毁。
        </p>
      </Section>

      <Section title="实施与履约记录">
        <p>
          中国是通过行政法规而非法律将公约转化为国内法的。国务院于1995年发布《监控化学品管理条例》（2011年修订），把公约附表转化为中国的管控清单，实施细则随后于1996–97年出台。附表化学品的出口管制始于2002年，后并入《出口管制法》（2020年）和《两用物项出口管制条例》（2024年）。
        </p>
        <p>
          禁止化学武器组织对中国已申报的工业设施和日本遗弃化学武器所在地点开展例行视察。据中国外交部称，截至2026年年中累计约750次；该组织不公布分国别的统计。这些都是事先通知的例行视察。迄今没有任何国家在公约框架下提出过短时间通知的"质疑性视察"，因此这一更严格的机制从未在中国或任何其他国家接受过检验。
        </p>
        <Flag type="success">
          <strong>为何奏效：</strong>解释空间很小。某种化学品要么在附表上，要么不在；某个设施要么已申报，要么没有；核查人员要么获准进入，要么被拒之门外。禁止化学武器组织提供了一个不受中美关系起伏影响的核查渠道。置身其外也有代价：朝鲜是极少数游离于公约之外的国家之一，而中国并不想与之为伍。
        </Flag>
      </Section>

      <Section title="局限与注意事项">
        <p>
          情况并非无可挑剔。美国国务院的年度履约报告称，美方无法证明中国履行了公约义务。2025年4月的报告援引了中国对具有潜在军民两用性质的药物类制剂和毒素的研究；更早的报告则质疑中国是否完整申报了其历史上的化学武器项目。中国否认这些说法，禁止化学武器组织也未作出任何认定。在没有质疑性视察的情况下，这些争议很难有定论，而例行视察并不覆盖军事设施。
        </p>
        <p>
          出口管制的执行也时有疏漏。1990年代末和2000年代，美国曾多次因中国公司出售与化学武器相关的材料和设备（主要销往伊朗）而对其实施制裁。
        </p>
      </Section>

      <Section title="对人工智能治理的启示">
        <p>
          《化学武器公约》常与国际原子能机构一起被援引，用以说明大国会接受侵入性核查。它的结构与某些人工智能提案相当契合：二元式义务、专门的技术秘书处、申报设施，以及明确的管控清单（例如算力阈值或模型登记）。中国的记录表明，只要义务足够具体、拒绝的外交代价足够高，现场核查并非不可接受。
        </p>
        <Flag type="info">
          这一类比有其局限。化学武器是一个边界清晰、检测技术成熟的类别。人工智能能力更难界定，相关"设施"（算力集群、训练过程、模型权重）也远比化工厂难以检查。任何人工智能领域的对应机制都必须首先解决核查问题。
        </Flag>
      </Section>
    </>
  );
}

export default function CWCStudy() {
  const { lang } = useLang();

  const title = lang === 'zh' ? '《化学武器公约》（CWC）' : 'Chemical Weapons Convention (CWC)';
  const subtitle = lang === 'zh'
    ? '《关于禁止发展、生产、储存和使用化学武器及销毁此种武器的公约》——巴黎，1993年'
    : 'Convention on the Prohibition of the Development, Production, Stockpiling and Use of Chemical Weapons — Paris, 1993';

  const stats = lang === 'zh'
    ? [
        { label: '签署', value: '1993年' },
        { label: '批准', value: '1997年' },
        { label: '状态', value: '已生效', color: 'bg-sage/20 text-sage-dark' },
        { label: '行为', value: '合规', color: 'bg-sage/20 text-sage-dark' },
        { label: '中国境内OPCW视察次数', value: '约750次（中方数据）' },
      ]
    : [
        { label: 'Signed', value: '1993' },
        { label: 'Ratified', value: '1997' },
        { label: 'Status', value: 'In force', color: 'bg-sage/20 text-sage-dark' },
        { label: 'Behaviour', value: 'Compliant', color: 'bg-sage/20 text-sage-dark' },
        { label: 'OPCW inspections in China', value: '~750 (PRC figure)' },
      ];

  return (
    <CaseStudyLayout title={title} subtitle={subtitle} stats={stats}>
      {lang === 'zh' ? <ZhContent /> : <EnContent />}
      <References refs={REFERENCES.cwc} />
    </CaseStudyLayout>
  );
}
