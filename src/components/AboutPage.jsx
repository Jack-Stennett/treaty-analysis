import React from 'react';
import { useLang } from '../i18n/LanguageContext';

const SOURCES = [
  {
    name: 'UN Treaty Collection (MTDSG)',
    url: 'https://treaties.un.org/pages/ParticipationStatus.aspx',
    note: 'Primary source for all multilateral treaty data — official participation status, reservation records, and entry-into-force dates for ~570 instruments deposited with the UN Secretary-General.',
    note_zh: '所有多边条约数据的主要来源——联合国秘书长存档的约570项文书的官方参与状态、保留条款记录及生效日期。',
  },
  {
    name: 'US Trade Representative (USTR) Annual Reports',
    url: 'https://ustr.gov/about/policy-offices/press-office/press-releases/2025/january/ustr-releases-annual-report-chinas-wto-compliance',
    note: 'Annual assessments of China\'s WTO compliance across tariff, subsidy, IP, and services commitments.',
    note_zh: '对中国在关税、补贴、知识产权及服务承诺方面履行世贸组织义务情况的年度评估。',
  },
  {
    name: 'Peterson Institute for International Economics (PIIE)',
    url: 'https://www.piie.com/research/piie-charts/2022/chinas-purchases-us-goods-services-under-phase-one-deal',
    note: 'Month-by-month tracking of China\'s Phase One purchase commitments against targets.',
    note_zh: '逐月追踪中国第一阶段采购承诺相对于目标值的完成情况。',
  },
  {
    name: 'International Atomic Energy Agency (IAEA)',
    url: 'https://www.iaea.org/newscenter/news/strengthening-chinas-national-nuclear-legal-framework-and-future-cooperation-in-nuclear-law',
    note: 'Safeguards documentation, inspection reports, and country profiles for nuclear treaty compliance.',
    note_zh: '核查文件、检查报告及核条约履约情况的国家概况。',
  },
  {
    name: 'Organisation for the Prohibition of Chemical Weapons (OPCW)',
    url: 'https://www.opcw.org/about-opcw/member-states/list-member-states',
    note: 'Official CWC member state records, inspection data, and declaration status.',
    note_zh: '《化学武器公约》成员国官方记录、核查数据及申报状态。',
  },
  {
    name: 'US Department of State — Compliance Reports',
    url: 'https://www.state.gov/wp-content/uploads/2021/04/2021-Adherence-and-Compliance-Report.pdf',
    note: 'Annual Bureau of Arms Control reports on adherence to and compliance with arms control, nonproliferation, and disarmament agreements.',
    note_zh: '军备控制局关于军控、防扩散及裁军协议遵守情况的年度报告。',
  },
  {
    name: 'Human Rights Watch',
    url: 'https://www.hrw.org/news/2013/10/08/china-ratify-key-international-human-rights-treaty',
    note: 'Documentation of China\'s compliance record on human rights treaties, in particular the ICCPR non-ratification.',
    note_zh: '记录中国在人权条约方面的履约状况，尤其是《公民权利和政治权利国际公约》未批准问题。',
  },
  {
    name: 'Xue Hanqin & Jin Qian — "International Treaties in the Chinese Domestic Legal System" (2009)',
    url: 'https://danielturpqc.org/upload/2015findoc/XUE_et_JIN-_International_Treaties_in_China.pdf',
    note: 'The authoritative academic account of how China incorporates treaty obligations into domestic law.',
    note_zh: '关于中国将条约义务纳入国内法体系方式的权威学术论述。',
  },
  {
    name: 'European Institute for Asian Studies (EIAS)',
    url: 'https://www.eias.org/policy-briefs/how-china-approaches-international-law-implications-for-europe/',
    note: 'Analysis of China\'s functionalist (as opposed to normative) approach to international law.',
    note_zh: '分析中国对国际法的功能主义（而非规范主义）立场。',
  },
];

export default function AboutPage() {
  const { lang } = useLang();
  const zh = lang === 'zh';

  return (
    <div className="max-w-3xl mx-auto py-8 px-4">

      {/* Title */}
      <div className="mb-8">
        <h2 className="font-serif text-2xl font-bold text-navy tracking-tight mb-2">
          {zh ? '关于本数据库' : 'About this database'}
        </h2>
        <p className="text-navy/50 text-sm italic">
          {zh
            ? '数据来源、局限性说明及使用目的'
            : 'Data sources, limitations, and purpose'}
        </p>
      </div>

      {/* Purpose */}
      <section className="mb-8">
        <h3 className="font-serif text-sm font-semibold text-navy/50 uppercase tracking-widest mb-4">
          {zh ? '用途' : 'Purpose'}
        </h3>
        <div className="border border-cream-border rounded-lg p-5 bg-cream-light space-y-3 text-sm text-navy/70 leading-relaxed">
          {zh ? (
            <>
              <p>
                本数据库是一篇关于中国条约参与情况及其对<strong className="text-navy">人工智能治理</strong>影响的研究文章的配套工具。核心问题是：若要设计一项要求中国参与的人工智能治理协议，哪些设计选择更可能产生可靠的履约效果？
              </p>
              <p>
                数据由研究者 <strong className="text-navy">Jack Stennett</strong>（巴黎）整理，他专注于确保21世纪对所有未来生命的福祉。
              </p>
              <p>
                本数据集<strong className="text-navy">欢迎任何感兴趣的人使用</strong>——无论是研究人员、政策制定者、记者，还是对中国如何参与国际制度感到好奇的人。如有引用需求，请注明来源。如发现数据错误，欢迎提交GitHub Issue。
              </p>
            </>
          ) : (
            <>
              <p>
                This database is a companion tool to a research piece on China's treaty engagement and its implications for <strong className="text-navy">AI governance</strong>. The central question is: if you were designing an AI governance agreement that requires Chinese participation, which design choices are most likely to produce reliable compliance?
              </p>
              <p>
                The data was compiled by <strong className="text-navy">Jack Stennett</strong> (Paris), a researcher working on making sure the 21st century goes well for all future beings.
              </p>
              <p>
                This dataset is <strong className="text-navy">open for anyone to use</strong> — researchers, policymakers, journalists, or anyone curious about how China engages with international institutions. If you use it, a citation is appreciated. If you spot errors, please open a GitHub issue.
              </p>
            </>
          )}
        </div>
      </section>

      {/* Data sources */}
      <section className="mb-8">
        <h3 className="font-serif text-sm font-semibold text-navy/50 uppercase tracking-widest mb-4">
          {zh ? '数据来源' : 'Data sources'}
        </h3>
        <div className="space-y-2">
          {SOURCES.map((s, i) => (
            <div key={i} className="border border-cream-border rounded-lg p-4 bg-cream-light">
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif font-semibold text-navy text-sm hover:text-gold transition-colors underline decoration-navy/20 underline-offset-2"
              >
                {s.name}
              </a>
              <p className="text-xs text-navy/60 leading-relaxed mt-1">
                {zh ? s.note_zh : s.note}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Limitations */}
      <section className="mb-8">
        <h3 className="font-serif text-sm font-semibold text-navy/50 uppercase tracking-widest mb-4">
          {zh ? '局限性' : 'Limitations'}
        </h3>
        <div className="bg-gold/8 border border-gold/25 rounded-lg p-5 space-y-3 text-sm text-navy/70 leading-relaxed">
          {zh ? (
            <>
              <p>
                <strong className="text-navy">覆盖范围不完整。</strong>本数据库现收录约120项文书，主要来源于联合国条约汇编（MTDSG），该数据库共收录约570项向联合国秘书长存档的多边条约。目前尚未完整覆盖所有条目，仍在持续完善中。
              </p>
              <p>
                <strong className="text-navy">双边条约为选择性收录。</strong>中国签订了约3,000项双边条约，本数据库仅收录了部分具有分析价值的美中双边条约。若需系统性的双边数据，建议参阅中国外交部或美国国务院的官方数据库。
              </p>
              <p>
                <strong className="text-navy">合规评估为作者综合判断。</strong>"行为状态"（合规/部分合规/不合规）及合规标注，系作者基于公开文献对中国条约履行情况的综合研判，并非官方或法律认定。合理的分析人士对部分评级可能存在不同意见。
              </p>
              <p>
                <strong className="text-navy">数据存在截止时效。</strong>条约记录以2026年初为基准，不会自动更新。如需最新参与状态，请以联合国条约汇编官方数据为准。
              </p>
              <p>
                <strong className="text-navy">不涵盖以下内容：</strong>存档于国际货币基金组织、世界银行等机构的技术性条约；不具法律约束力的谅解备忘录（包括大多数"一带一路"合作协议）；地区性协定（如《区域全面经济伙伴关系协定》RCEP）。
              </p>
            </>
          ) : (
            <>
              <p>
                <strong className="text-navy">Coverage is incomplete.</strong> The database currently holds ~120 instruments drawn primarily from the UN Treaty Collection (MTDSG), which covers ~570 multilateral treaties deposited with the Secretary-General. Not all entries have been populated yet and the dataset is being actively expanded.
              </p>
              <p>
                <strong className="text-navy">Bilateral treaties are selective.</strong> China has signed approximately 3,000 bilateral treaties. This database includes only a subset of analytically significant US–China bilaterals. For comprehensive bilateral coverage, consult China's Ministry of Foreign Affairs or the US State Department treaty databases.
              </p>
              <p>
                <strong className="text-navy">Compliance assessments are the author's synthesis.</strong> The "behaviour status" ratings (compliant / partial / non-compliant) and compliance flags are the author's judgement based on publicly available literature — not official or legal determinations. Reasonable analysts may disagree on individual ratings.
              </p>
              <p>
                <strong className="text-navy">Data has a cutoff date.</strong> Treaty records reflect the position as of early 2026 and are not automatically updated. For current participation status, the UN Treaty Collection is authoritative.
              </p>
              <p>
                <strong className="text-navy">Not covered:</strong> technical treaties deposited with the IMF, World Bank, and other specialised agencies; non-binding MoUs (including most Belt and Road cooperation agreements); regional agreements such as RCEP.
              </p>
            </>
          )}
        </div>
      </section>

      {/* GitHub */}
      <section>
        <h3 className="font-serif text-sm font-semibold text-navy/50 uppercase tracking-widest mb-4">
          {zh ? '贡献与反馈' : 'Contribute or give feedback'}
        </h3>
        <div className="border border-cream-border rounded-lg p-4 bg-cream-light text-sm text-navy/70 leading-relaxed">
          {zh ? (
            <p>
              本项目在 GitHub 上开源：
              {' '}
              <a href="https://github.com/Jack-Stennett/treaty-analysis" target="_blank" rel="noopener noreferrer"
                className="text-navy font-semibold underline decoration-navy/20 underline-offset-2 hover:text-gold transition-colors">
                github.com/Jack-Stennett/treaty-analysis
              </a>。如发现数据错误、遗漏条约或有改进建议，欢迎提交Issue或Pull Request。
            </p>
          ) : (
            <p>
              The project is open source on GitHub:{' '}
              <a href="https://github.com/Jack-Stennett/treaty-analysis" target="_blank" rel="noopener noreferrer"
                className="text-navy font-semibold underline decoration-navy/20 underline-offset-2 hover:text-gold transition-colors">
                github.com/Jack-Stennett/treaty-analysis
              </a>. If you spot a data error, a missing treaty, or have a suggestion, please open an issue or pull request.
            </p>
          )}
        </div>
      </section>

    </div>
  );
}
