import React from 'react';
import { useLang } from '../i18n/LanguageContext';
import MarkdownContent from './MarkdownContent';
import analysisEnMd from '../content/analysis-en.md?raw';

// ── Minimal sub-components ────────────────────────────────────────────────

function ImplicationCard({ icon, title, body }) {
  return (
    <div className="border border-cream-border rounded-lg p-4 bg-cream">
      <div className="flex items-start gap-3">
        <span className="text-lg leading-none mt-0.5">{icon}</span>
        <div>
          <div className="font-serif font-semibold text-navy text-sm mb-1">{title}</div>
          <p className="text-xs text-navy/65 leading-relaxed">{body}</p>
        </div>
      </div>
    </div>
  );
}

function ScopeNote() {
  return (
    <div className="bg-[#2E4A6B]/5 border border-[#2E4A6B]/15 rounded-lg p-4 text-xs text-navy/60 leading-relaxed">
      <div className="font-semibold text-navy/80 mb-1">关于数据集的说明</div>
      <p>
        本数据库收录<strong className="text-navy">120项国际文书</strong>。其中<strong className="text-navy">106项为多边条约</strong>，约93项交由联合国秘书长保存；68项记录直接依据联合国条约汇编编码，该汇编收录了560余项此类条约。另有<strong className="text-navy">14项双边文书</strong>，其中12项为中美之间的文书。中美文书中有4项并非条约（联合声明、联合公报、一项口头承诺和一次未果的谈判），已作标注；之所以收录，是因为它们在两国关系的实际运作中居于核心地位。
      </p>
      <div className="mt-3 pt-3 border-t border-[#2E4A6B]/10">
        <div className="font-semibold text-navy/80 mb-1">未涵盖的内容</div>
        <p>
          中国的大部分双边协定（每年签订数以百计）、国际货币基金组织和世界银行协定（由各该机构保存），以及不具约束力的谅解备忘录，包括大多数"一带一路"合作文件。RCEP（2022年生效）已收录。中国于1993年批准、并通知限定提交争端范围的《解决投资争端国际中心公约》未收录。
        </p>
      </div>
    </div>
  );
}

// ── English version (markdown-driven) ────────────────────────────────────

function EnAnalysis() {
  return <MarkdownContent content={analysisEnMd} />;
}

// ── Chinese version ───────────────────────────────────────────────────────

function ZhAnalysis() {
  const findings = [
    {
      n: 1,
      title: '二元式义务得以延续；渐进式义务则不然',
      body: '"在2010年前关闭氯氟烃工厂"提前完成了；"通报补贴"则拖了十五年才通报地方补贴，至今仍不完整。二元式义务有明确的合格线：中国要么做了，要么没做，人人看得清楚。渐进式义务要求朝某个方向持续推进，这就留下了遵守文字、无视精神的空间，一旦政治风向转变，便几乎无从执行。',
      implication: '义务需要精确、可观察的门槛，例如算力上限、强制性部署前评估或前沿模型登记制度。"努力确保安全"之类的表述，在转化为中国国内法的过程中不会留下多少实质内容。',
    },
    {
      n: 2,
      title: '把关有效；分散监督则不然',
      body: '当履约要经过单一关口时，中国往往能够通过。例如，美国总统认证曾横亘在中国与民用核合作之间；又如任何贸易伙伴都能核查的关税减让表。当履约取决于多年来对数十个省份成千上万个主体的监督时，就会出现松懈。CFC-11是最清楚的例子：地方当局既无动力也无能力监管小型泡沫生产商，结果也确实没有监管。',
      implication: '围绕关键节点设置要求，例如由指定机构进行部署前评估，或通过硬件供应链掌握算力采购情况；避免依赖地方执法的报告义务。',
    },
    {
      n: 3,
      title: '具体激励胜过良好意愿',
      body: '中国改变核出口行为，是因为它想要美国的核技术；它遵守世贸关税减让表，是因为它想要市场准入；《蒙特利尔议定书》之所以奏效，部分原因是多边基金为转型买了单。凡是履约可靠的地方，都有具体的、近期可得的回报，而不仅仅是对"全球治理"的承诺。当利益指向相反方向时，"做负责任的国际公民"之类的说法对中国作用不大。',
      implication: '希望中国参与的协议，需要提供中国真正想要的东西，例如算力获取、联合安全研究或国际认可，而不是依赖对人工智能安全的共同承诺。',
    },
    {
      n: 4,
      title: '中国遵守文字，试探精神',
      body: '这是最一贯的规律。关税减让表：严格履行。地方补贴通报：十五年未通报。知识产权法律：迅速通过。知识产权执法：十年间一直薄弱。对其自愿提交的少数民用设施的国际原子能机构视察：接受。核武库透明度：极低。中国很少公开违背条约，而是在条约中周旋：找到可衡量的门槛，满足它，在其他方面尽可能保留自由裁量权。指望对条约精神作善意解读的设计者会失望。',
      implication: '堵住解释空间，避免使用"适当措施"和"尽最大努力"。凡是重要的内容，都应规定得足够精确，使履约成为外部可以核查的是非题。',
    },
    {
      n: 5,
      title: '领导层更替可以推翻很多东西',
      body: '朱镕基的改革议程使入世成为可能；习近平加强国家对经济的控制，则使改革派对入世的许多期待落空。中国没有独立的法院，也没有真正有实权的立法机构，来使条约义务免受政治方向转变的冲击。围绕某一届领导层偏好设计的条约，十年后可能面目全非。',
      implication: '义务不应依赖任何一届中国领导层的世界观，而应嵌入有外部核查的行政常规，使履约成为技术习惯，而不是可以撤回的政治承诺。',
    },
  ];

  const implications = [
    {
      icon: '⚖️',
      title: '使义务二元化且可观察',
      body: '硬件供应链可见的算力门槛；结果为合格或不合格的部署前评估；附带强制披露的模型登记制度。凡是重要的内容，都应有清晰的外部核查手段。',
    },
    {
      icon: '🔒',
      title: '设计关口，而非监督网络',
      body: '一项认证要求比依赖地方官员的报告制度更容易执行。人工智能领域可能的关口是算力获取和模型部署。',
    },
    {
      icon: '💰',
      title: '附加具体回报',
      body: '安全研究的获取渠道、算力合作和国际认可都是可能的杠杆。多边基金模式，即直接为履约买单，值得在人工智能领域探索。',
    },
    {
      icon: '📐',
      title: '堵住解释空间',
      body: '"尽最大努力"和"适当措施"都是逃生口。应假定每一条款都会被尽可能狭义地解读，并据此起草。',
    },
    {
      icon: '🔄',
      title: '经得起领导层更替',
      body: '嵌入日常行政并有外部核查的义务，比依赖政府当前意识形态的义务更持久。事实证明，《化学武器公约》和国际原子能机构保障监督那样的例行技术视察，比入世时宽泛的改革承诺更经得起时间考验。',
    },
    {
      icon: '⚠️',
      title: '承认局限',
      body: '中国的重要缺席，包括国际刑事法院、《公民权利和政治权利国际公约》（1998年签署，始终未批准）和国际劳工组织第87号公约，显示出一条一贯的底线：中国不接受外部机构调查或裁决其国内行为。要求独立调查国内人工智能事故的条约，会碰上同一堵墙。',
    },
  ];

  return (
    <>
      <div className="mb-8">
        <p className="text-sm text-navy/70 leading-relaxed">
          本数据库收录120项中国已加入、已签署或明显置身其外的国际文书，并按义务类型（二元式或渐进式）、执行渠道（集中式或分散式）以及中国的实际行为进行编码。案例研究详细考察了最有价值的几个例子，本页则对其中的规律加以归纳。
        </p>
        <p className="text-sm text-navy/70 leading-relaxed mt-3">
          目的不是预测中国是否会遵守一项假想的人工智能条约，那取决于尚未作出的设计选择；而是弄清哪些设计选择往往带来可靠的履约，哪些往往被绕开。由于详细案例只有寥寥几个，这些只是规律而非定律，但它们相当一致。
        </p>
      </div>

      <div className="mb-8">
        <h3 className="font-serif text-sm font-semibold text-navy/50 uppercase tracking-widest mb-4">五条规律</h3>
        <div className="space-y-4">
          {findings.map((f, i) => (
            <div key={i} className="border border-cream-border rounded-lg p-5 bg-cream-light">
              <div className="flex items-start gap-4">
                <span className="shrink-0 w-7 h-7 rounded-full bg-navy text-cream text-xs font-bold flex items-center justify-center font-serif mt-0.5">
                  {f.n}
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-serif font-semibold text-navy text-base mb-2">{f.title}</h3>
                  <p className="text-sm text-navy/70 leading-relaxed mb-3">{f.body}</p>
                  <div className="text-xs px-3 py-2 rounded-lg border bg-[#2E4A6B]/6 border-[#2E4A6B]/15 text-[#2E4A6B] leading-relaxed">
                    <span className="font-semibold">对人工智能的启示：</span>{f.implication}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h3 className="font-serif text-sm font-semibold text-navy/50 uppercase tracking-widest mb-4">
          对人工智能治理设计的启示
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {implications.map((imp, i) => (
            <ImplicationCard key={i} {...imp} />
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="font-serif text-sm font-semibold text-navy/50 uppercase tracking-widest mb-4">数据集范围与缺口</h3>
        <ScopeNote />
      </div>

      <div className="bg-gold/8 border border-gold/25 rounded-lg p-4 text-xs text-navy/60 leading-relaxed">
        <div className="font-semibold text-navy/80 mb-1">关于中国媒体来源的说明</div>
        <p>
          中国官方媒体（新华社、人民日报、环球时报）报道条约的签署和批准，但很少就履约情况作独立分析，报道口径与官方一致。中央电视台和政府网站（gov.cn、mfa.gov.cn）是了解中国如何呈现自身记录的有用一手来源，但不能作为独立核查。《中国国际法论刊》和国内法学期刊上的学术研究更为严谨，但往往需要付费访问。
        </p>
      </div>
    </>
  );
}

// ── Main export ───────────────────────────────────────────────────────────

export default function AnalysisPage() {
  const { lang } = useLang();

  const title = lang === 'zh' ? '分析：规律与启示' : 'Analysis: Patterns & Implications';
  const subtitle = lang === 'zh'
    ? '中国的条约记录对国际承诺意味着什么，对人工智能治理设计又意味着什么'
    : 'What China\'s treaty record says about its international commitments, and what that means for designing AI governance';

  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <div className="mb-8">
        <h2 className="font-serif text-2xl font-bold text-navy tracking-tight mb-2">{title}</h2>
        <p className="text-navy/50 text-sm italic">{subtitle}</p>
      </div>
      {lang === 'zh' ? <ZhAnalysis /> : <EnAnalysis />}
    </div>
  );
}
