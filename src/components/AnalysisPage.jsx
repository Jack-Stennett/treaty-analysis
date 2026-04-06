import React from 'react';
import { useLang } from '../i18n/LanguageContext';

// ── Minimal sub-components ────────────────────────────────────────────────

function Finding({ n, title, body, verdict }) {
  const verdictColor = {
    good:    'bg-sage/15 text-sage-dark border-sage/30',
    bad:     'bg-[#8B3A3A]/8 text-[#8B3A3A] border-[#8B3A3A]/20',
    mixed:   'bg-gold/12 text-gold-dark border-gold/25',
    neutral: 'bg-[#2E4A6B]/8 text-[#2E4A6B] border-[#2E4A6B]/20',
  }[verdict] || 'bg-cream-dark/30 text-navy/50 border-cream-border';

  return (
    <div className="border border-cream-border rounded-lg p-5 bg-cream-light">
      <div className="flex items-start gap-4">
        <span className="shrink-0 w-7 h-7 rounded-full bg-navy text-cream text-xs font-bold flex items-center justify-center font-serif mt-0.5">
          {n}
        </span>
        <div className="flex-1 min-w-0">
          <h3 className="font-serif font-semibold text-navy text-base mb-2">{title}</h3>
          <p className="text-sm text-navy/70 leading-relaxed mb-3">{body}</p>
          <div className={`text-xs px-3 py-2 rounded-lg border leading-relaxed ${verdictColor}`}>
            {verdict === 'good' && <span className="font-semibold">Implication: </span>}
            {verdict === 'bad' && <span className="font-semibold">Warning: </span>}
            {verdict === 'mixed' && <span className="font-semibold">Mixed signal: </span>}
            {verdict === 'neutral' && <span className="font-semibold">Note: </span>}
          </div>
        </div>
      </div>
    </div>
  );
}

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

function ScopeNote({ lang }) {
  if (lang === 'zh') return (
    <div className="bg-[#2E4A6B]/5 border border-[#2E4A6B]/15 rounded-lg p-4 text-xs text-navy/60 leading-relaxed">
      <div className="font-semibold text-navy/80 mb-1">关于数据集的说明</div>
      <p>
        本数据库现收录<strong className="text-navy">108项条约</strong>，来源于联合国条约汇编（MTDSG）——该数据库收录了约570项多边条约，均向联合国秘书长存档。本数据库不涵盖：双边条约（中国签订了约3,000项）、存档于IMF和世界银行等机构的技术性条约，以及不具法律约束力的谅解备忘录（包括"一带一路"合作协议）。收录的108项条约代表了对中国参与国际治理具有战略意义的主要多边条约。
      </p>
      <div className="mt-3 pt-3 border-t border-[#2E4A6B]/10">
        <div className="font-semibold text-navy/80 mb-1">值得注意的缺口</div>
        <p>
          BRI（"一带一路"）：非正式条约，是双边谅解备忘录的集合，不属于联合国条约体系。IMF和世界银行协议：由各自机构存档，不在MTDSG系统内。RCEP（《区域全面经济伙伴关系协定》，2022年）：中国已参加的最新主要多边贸易协定。ICSID公约：《解决国家与他国国民之间投资争端公约》，中国于1993年批准，但附有大量保留条款。
        </p>
      </div>
    </div>
  );

  return (
    <div className="bg-[#2E4A6B]/5 border border-[#2E4A6B]/15 rounded-lg p-4 text-xs text-navy/60 leading-relaxed">
      <div className="font-semibold text-navy/80 mb-1">About this dataset</div>
      <p>
        This database covers <strong className="text-navy">108 treaties</strong> drawn from the UN Treaty Collection (MTDSG) — which holds ~570 multilateral treaties deposited with the Secretary-General. It does not cover: bilateral treaties (China has signed ~3,000), technical treaties deposited with bodies like the IMF and World Bank, or non-binding MoUs (including most Belt and Road cooperation agreements). The 108 represent the major multilateral instruments with strategic relevance to China's international governance participation.
      </p>
      <div className="mt-3 pt-3 border-t border-[#2E4A6B]/10">
        <div className="font-semibold text-navy/80 mb-1">Notable gaps</div>
        <p>
          <strong>BRI (Belt and Road):</strong> Not a treaty — a collection of bilateral MoUs outside the UN treaty system. <strong>IMF & World Bank Articles:</strong> Deposited with those institutions, not MTDSG. <strong>RCEP (2022):</strong> China's most recent major multilateral trade agreement. <strong>ICSID Convention:</strong> Investment dispute arbitration; China ratified 1993 with significant reservations. <strong>Paris Agreement / UNFCCC:</strong> Worth verifying coverage in the current dataset.
        </p>
      </div>
    </div>
  );
}

// ── English version ───────────────────────────────────────────────────────

function EnAnalysis() {
  const findings = [
    {
      n: 1,
      title: 'Binary obligations survive; scalar ones don\'t',
      body: 'Every case study confirms the same pattern. "Close all CFC plants by 2010" was met early. "Progressively liberalise your services sector" was not. Binary obligations have a clear pass/fail threshold; China either did the thing or it didn\'t, and everyone can see which. Scalar obligations — which require an ongoing direction of travel — give China room to comply with the letter while ignoring the spirit, and they are nearly impossible to enforce once the political mood shifts.',
      verdict: 'good',
      implication: 'Obligations in an AI treaty must specify precise, observable thresholds (compute limits, mandatory evaluation before deployment, registry of frontier models). Vague aspirational language ("make efforts to ensure safety") will not survive the translation into Chinese domestic law.',
    },
    {
      n: 2,
      title: 'Centralised gatekeeping works; distributed monitoring doesn\'t',
      body: 'When compliance depends on a single checkpoint — IAEA certification required before nuclear technology transfer, WTO dispute settlement visible to all trading partners — China tends to meet the threshold. When it depends on thousands of actors across dozens of provinces being monitored over time, it fails. The CFC-11 episode is the purest example: provincial authorities had neither the incentive nor the capacity to monitor foam insulation manufacturers, and they didn\'t.',
      verdict: 'good',
      implication: 'AI governance mechanisms should be designed as chokepoints — pre-deployment evaluation by a designated authority, compute acquisition visible to hardware supply chains — rather than as distributed reporting obligations that depend on provincial enforcement.',
    },
    {
      n: 3,
      title: 'Concrete incentives beat normative architecture',
      body: 'China joined the IAEA regime because it wanted civilian nuclear technology. It complied with WTO tariff schedules because it needed market access. The Montreal Protocol worked because the Multilateral Fund paid for the transition and trade provisions made non-compliance commercially costly. In every case of reliable compliance, there is a concrete, near-term payoff — not a normative commitment to "global governance". The "good global citizen" argument does not move China when interests conflict.',
      verdict: 'neutral',
      implication: 'Any AI treaty that wants Chinese participation needs to offer something China concretely wants — access to compute, safety research, or international legitimacy — rather than relying on shared normative commitment to AI safety.',
    },
    {
      n: 4,
      title: 'China complies with the letter, tests the spirit',
      body: 'This is the most consistent pattern. Tariff schedules: met precisely. Subsidy reporting: ignored for 15 years. Formal IP law: passed. IP enforcement in courts: notional for a decade. Nuclear inspections of declared civil facilities: accepted. Military nuclear transparency: near-zero. China does not "defect" from treaties; it navigates them. It locates the measurable threshold, meets it, and preserves maximal discretion in everything else. Treaty designers who rely on good-faith interpretation of spirit will be consistently disappointed.',
      verdict: 'bad',
      implication: 'Close every interpretive gap. Do not rely on "appropriate measures" or "best efforts" language. Any element you care about must be specified with enough precision that compliance is binary and independently verifiable.',
    },
    {
      n: 5,
      title: 'Leadership transitions can undo everything',
      body: 'Zhu Rongji\'s reform agenda made WTO accession possible; Xi Jinping\'s consolidation of state economic control hollowed out many of its commitments. China does not have institutional barriers — independent courts, a legislature with genuine power — that insulate treaty obligations from shifts in political direction. A treaty designed around the preferences of a reformist leadership may be unrecognisable within a decade.',
      verdict: 'bad',
      implication: 'AI governance obligations should not depend on any particular Chinese leadership\'s worldview. They need to be embedded in administrative processes with external verification, so that compliance becomes a technical routine rather than a political commitment that can be withdrawn.',
    },
  ];

  const implications = [
    {
      icon: '⚖️',
      title: 'Make obligations binary and observable',
      body: 'Compute thresholds with hardware supply chain visibility. Mandatory pre-deployment evaluation with a pass/fail output. Model registries with mandatory disclosure. Every element that matters must have a clear, external checkmark.',
    },
    {
      icon: '🔒',
      title: 'Design chokepoints, not monitoring networks',
      body: 'A single certification requirement (like IAEA before nuclear tech transfer) is more enforceable than a reporting framework relying on provincial authorities. Find the chokepoints in AI development — compute acquisition, model deployment gates — and build requirements there.',
    },
    {
      icon: '💰',
      title: 'Attach concrete payoffs',
      body: 'Access to safety research, compute cooperation, or international legitimacy certification are all potential levers. The Multilateral Fund model — where compliance is directly financed — is worth exploring for AI transition costs.',
    },
    {
      icon: '📐',
      title: 'Close every interpretive gap',
      body: '"Best efforts" and "appropriate measures" are compliance escape hatches. An AI treaty will be tested at every ambiguous margin. Assume the letter of every clause will be read as narrowly as possible and draft accordingly.',
    },
    {
      icon: '🔄',
      title: 'Build in leadership-proof robustness',
      body: 'Obligations embedded in administrative process with external verification survive political transitions better than ones that depend on a government\'s current ideology. The IAEA model — routine technical inspections, not political commitments — is more durable than the WTO model.',
    },
    {
      icon: '⚠️',
      title: 'Accept the limits of this approach',
      body: 'China\'s notable absences (ICC, ICCPR Optional Protocol, ILO 87) reveal a structural limit: external adjudication of domestic conduct is a constitutive red line, not a negotiating position. Any AI treaty requiring independent investigation of domestic AI incidents will face the same resistance.',
    },
  ];

  return (
    <>
      <div className="mb-8">
        <p className="text-sm text-navy/70 leading-relaxed">
          This database catalogues 108 multilateral treaties to which China is a party or notable absentee, coded across obligation type (binary vs scalar), enforcement channel (centralised vs distributed), and behavioural compliance record. The case studies provide detailed analysis of the four most instructive examples. This page synthesises the patterns.
        </p>
        <p className="text-sm text-navy/70 leading-relaxed mt-3">
          The goal is not to predict whether China will comply with a hypothetical AI governance treaty — that depends on treaty design choices that haven't been made yet. The goal is to identify which design choices are likely to produce reliable compliance, and which are likely to be navigated around.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="font-serif text-sm font-semibold text-navy/50 uppercase tracking-widest mb-4">Five Patterns</h3>
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
                    <span className="font-semibold">Design implication: </span>{f.implication}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h3 className="font-serif text-sm font-semibold text-navy/50 uppercase tracking-widest mb-4">
          Implications for AI Governance Design
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {implications.map((imp, i) => (
            <ImplicationCard key={i} {...imp} />
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="font-serif text-sm font-semibold text-navy/50 uppercase tracking-widest mb-4">Dataset Scope & Gaps</h3>
        <ScopeNote lang="en" />
      </div>

      <div className="bg-gold/8 border border-gold/25 rounded-lg p-4 text-xs text-navy/60 leading-relaxed">
        <div className="font-semibold text-navy/80 mb-1">A note on Chinese media sources</div>
        <p>
          Chinese state media (Xinhua, People's Daily, Global Times) covers treaty signings and ratifications but rarely provides independent compliance analysis — coverage tracks the official position. CCTV and official government websites (gov.cn, mfa.gov.cn) are useful as primary sources for understanding how China presents its own compliance record, but should not be treated as independent verification. Academic sources such as <em>Chinese Journal of International Law</em> (Oxford) and Chinese law review journals contain more rigorous analysis, though these often require institutional access.
        </p>
      </div>
    </>
  );
}

// ── Chinese version ───────────────────────────────────────────────────────

function ZhAnalysis() {
  const findings = [
    {
      n: 1,
      title: '二元式义务得以延续；渐进式义务则不然',
      body: '每一个案例研究都印证了同一规律。"在2010年前关停所有氯氟烃工厂"——提前完成。"逐步推进服务业自由化"——从未实现。二元式义务具有明确的合格/不合格门槛；中国或做了这件事，或没有，所有人都看得清楚。而渐进式义务——要求保持某种持续的改革方向——给了中国遵守文字而无视精神的空间，一旦政治风向转变，便几乎无从执行。',
      implication: '人工智能条约中的义务必须规定精确、可观察的门槛（算力限制、部署前强制评估、前沿模型登记制度）。模糊的愿景性表述（"采取措施确保安全"）无法在转化为中国国内法的过程中得以留存。',
    },
    {
      n: 2,
      title: '集中式守门有效；分散式监督则不然',
      body: '当合规依赖于单一检查节点——技术转让前必须获得IAEA认证，WTO争端解决对所有贸易伙伴公开可见——中国倾向于满足该门槛。而当合规依赖于数十年间对分散于数十个省的成千上万行为体的监督，就会失败。CFC-11事件是最典型的案例：省级当局既没有监督泡沫绝热材料制造商的激励，也不具备相应能力，于是监督付之阙如。',
      implication: '人工智能治理机制应设计为阻塞点——由指定机构进行的部署前评估、通过硬件供应链可见的算力获取——而非依赖省级执法的分散式申报义务。',
    },
    {
      n: 3,
      title: '具体激励胜过规范性架构',
      body: '中国加入IAEA机制，是因为它想要民用核技术；它遵守WTO关税表，是因为它需要市场准入；蒙特利尔议定书奏效，是因为多边基金为转型买了单，贸易条款使不合规在商业上代价高昂。每一个可靠履约案例背后，都有一个具体的、近期可得的收益——而非对"全球治理"的规范性承诺。"做负责任的全球公民"这一论点，在利益冲突时对中国没有说服力。',
      implication: '任何希望获得中国参与的人工智能条约，都需要提供中国具体渴望的东西——算力获取、安全研究合作或国际合法性认证——而非依赖对人工智能安全的共同规范性承诺。',
    },
    {
      n: 4,
      title: '中国遵守文字，考验精神',
      body: '这是最一贯的规律。关税表：严格履行。补贴申报：无视长达15年。知识产权法律：通过立法。知识产权法院执法：十年来形同虚设。已申报民用设施的核查：接受。军事核透明度：近乎为零。中国不会"违背"条约，而是在条约的缝隙间腾挪。它找到可量化的门槛，满足之，并在其他一切方面保留最大限度的自由裁量权。依赖对条约精神善意解释的设计者，将持续失望。',
      implication: '封堵每一个解释空间。不要依赖"适当措施"或"尽力而为"的措辞。任何你真正在意的要素，都必须以足够精确的方式加以规定，使合规二元化且可独立核查。',
    },
    {
      n: 5,
      title: '领导层更迭可以颠覆一切',
      body: '朱镕基的改革议程使入世成为可能；习近平对国家经济控制的强化，则使入世承诺的大部分内容名存实亡。中国没有任何制度性屏障——独立法院、具有实权的立法机构——可以使条约义务免受政治方向转变的冲击。围绕改革派领导人偏好设计的条约，十年后可能面目全非。',
      implication: '人工智能治理义务不应依赖于任何特定中国领导层的世界观。它们需要嵌入具有外部核查机制的行政程序，使合规成为技术惯例而非可随时撤回的政治承诺。',
    },
  ];

  const implications = [
    {
      icon: '⚖️',
      title: '使义务二元化且可观察',
      body: '通过硬件供应链可见的算力门槛；具有合格/不合格结果的强制部署前评估；附带强制披露的模型登记制度。每一个重要要素都必须有清晰的、外部可验证的合规标志。',
    },
    {
      icon: '🔒',
      title: '设计阻塞点，而非监督网络',
      body: '单一认证要求（如IAEA认证先于核技术转让）比依赖省级当局的申报框架更具可执行性。识别人工智能开发中的阻塞点——算力获取、模型部署关口——并在这些节点设置要求。',
    },
    {
      icon: '💰',
      title: '附加具体收益',
      body: '安全研究获取渠道、算力合作或国际合法性认证，都是潜在的杠杆。多边基金模式——直接为合规提供资金——值得在人工智能转型成本方面加以借鉴。',
    },
    {
      icon: '📐',
      title: '封堵每一个解释空间',
      body: '"尽力"和"适当措施"是合规逃避的后门。人工智能条约将在每一个模糊边际处受到考验。假设每一条款的文字都将被尽可能狭义地解读，并据此起草。',
    },
    {
      icon: '🔄',
      title: '构建能经受领导层更迭的稳健机制',
      body: '嵌入外部核查机制的行政流程式义务，比依赖政府当前意识形态的义务，更能承受政治更迭。IAEA模式——例行技术检查，而非政治承诺——比WTO模式更为持久。',
    },
    {
      icon: '⚠️',
      title: '正视这一方法的局限',
      body: '中国的重要缺席（国际刑事法院、《公民权利和政治权利国际公约任择议定书》、国际劳工组织第87号公约）揭示了一个结构性边界：对国内行为的外部裁决是一条构成性红线，而非谈判立场。任何要求对国内人工智能事故进行独立调查的条约，都将遭遇同等阻力。',
    },
  ];

  return (
    <>
      <div className="mb-8">
        <p className="text-sm text-navy/70 leading-relaxed">
          本数据库收录108项多边条约，记录中国作为缔约方或重要缺席方的情况，并按义务类型（二元式与渐进式）、执行渠道（集中式与分散式）及行为履约记录进行编码。案例研究对四个最具启示性的案例进行了详细分析。本页综合梳理这些规律。
        </p>
        <p className="text-sm text-navy/70 leading-relaxed mt-3">
          目标不是预测中国是否会履行假想的人工智能治理条约——这取决于尚未作出的设计选择。目标是识别哪些设计选择可能产生可靠的履约效果，哪些可能被绕过。
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
                    <span className="font-semibold">设计启示：</span>{f.implication}
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
        <ScopeNote lang="zh" />
      </div>

      <div className="bg-gold/8 border border-gold/25 rounded-lg p-4 text-xs text-navy/60 leading-relaxed">
        <div className="font-semibold text-navy/80 mb-1">关于中国媒体来源的说明</div>
        <p>
          中国官方媒体（新华社、人民日报、环球时报）报道条约签署和批准，但鲜少提供独立的履约分析——报道内容与官方立场保持一致。中央电视台及官方政府网站（gov.cn、mfa.gov.cn）作为了解中国如何呈现自身履约记录的一手资料具有参考价值，但不应视为独立核查来源。《中国国际法学刊》（牛津）及中文法律评论期刊中的学术文章包含更为严谨的分析，但通常需要机构访问权限。
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
    ? '从条约记录中提炼的关于中国与国际承诺的规律，及其对人工智能治理的意义'
    : 'What China\'s treaty record reveals about international commitment, and what it means for AI governance design';

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
