import React from 'react';
import { useLang } from '../i18n/LanguageContext';

const SOURCES = [
  {
    name: 'UN Treaty Collection (MTDSG)',
    url: 'https://treaties.un.org/pages/ParticipationStatus.aspx',
    note: 'Main source for multilateral treaty data: official participation status, reservations and entry-into-force dates for the 560+ treaties deposited with the UN Secretary-General.',
    note_zh: '多边条约数据的主要来源：交由联合国秘书长保存的560余项条约的官方参与状态、保留及生效日期。',
  },
  {
    name: 'US Trade Representative (USTR) Annual Reports',
    url: 'https://ustr.gov/sites/default/files/files/Countries%20and%20Regions/China%2C%20Mongolia%20%26%20Taiwan/2025%20USTR%20Report%20to%20Congress%20on%20China\'s%20WTO%20Compliance%20(Final%202025).pdf',
    note: 'Annual assessments of China\'s WTO compliance across tariff, subsidy, IP, and services commitments.',
    note_zh: '对中国在关税、补贴、知识产权及服务承诺方面履行世贸组织义务情况的年度评估。',
  },
  {
    name: 'Peterson Institute for International Economics (PIIE)',
    url: 'https://www.piie.com/research/piie-charts/us-china-phase-one-tracker-chinas-purchases-us-goods',
    note: 'Chad Bown\'s month-by-month tracker of China\'s Phase One purchases against its commitments.',
    note_zh: '逐月追踪中国第一阶段采购承诺相对于目标值的完成情况。',
  },
  {
    name: 'International Atomic Energy Agency (IAEA)',
    url: 'https://www.iaea.org/newscenter/news/strengthening-chinas-national-nuclear-legal-framework-and-future-cooperation-in-nuclear-law',
    note: 'IAEA reporting on its cooperation with China, including the 2024 consultation on China\'s draft Atomic Energy Law.',
    note_zh: '国际原子能机构关于其与中国合作的报道，包括2024年就中国《原子能法》草案开展的磋商。',
  },
  {
    name: 'Organisation for the Prohibition of Chemical Weapons (OPCW)',
    url: 'https://www.opcw.org/about-us/member-states/china',
    note: 'Official CWC membership records. The OPCW does not publish inspection counts by country.',
    note_zh: '《化学武器公约》成员国官方记录。禁止化学武器组织不公布分国别的视察次数。',
  },
  {
    name: 'US Department of State — Compliance Reports',
    url: 'https://www.state.gov/wp-content/uploads/2025/04/Condition-10-c-Report-Accessible-4.23.2025.pdf',
    note: 'Annual reports on compliance with arms control, non-proliferation and disarmament agreements, including a separate report on the Chemical Weapons Convention (linked).',
    note_zh: '关于军控、防扩散及裁军协议遵守情况的年度报告，包括关于《化学武器公约》的专项报告（链接）。',
  },
  {
    name: 'Human Rights Watch',
    url: 'https://www.hrw.org/news/2013/10/08/china-ratify-key-international-human-rights-treaty',
    note: 'Documentation of China\'s compliance record on human rights treaties, in particular the ICCPR non-ratification.',
    note_zh: '记录中国在人权条约方面的履约状况，尤其是《公民权利和政治权利国际公约》未批准问题。',
  },
  {
    name: 'Xue Hanqin & Jin Qian — "International Treaties in the Chinese Domestic Legal System" (2009)',
    url: 'https://doi.org/10.1093/chinesejil/jmp007',
    note: 'A detailed account of how China brings treaty obligations into domestic law, written by two foreign ministry legal officials (Xue later became a judge at the ICJ).',
    note_zh: '详细阐述中国如何将条约义务纳入国内法，作者为两位外交部法律官员（薛捍勤后任国际法院法官）。',
  },
  {
    name: 'Tim Rühlig, European Institute for Asian Studies (2018)',
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
                <strong className="text-navy">覆盖范围不完整。</strong>本数据库收录120项文书：106项多边条约（约93项交由联合国秘书长保存）和14项双边文书。联合国秘书长保存的多边条约共有560余项，本数据库只涵盖其中一部分。
              </p>
              <p>
                <strong className="text-navy">双边文书为选择性收录。</strong>中国每年签订数以百计的双边条约和协定。本数据库只收录了少数对分析有意义的双边文书，主要是中美之间的，其中4项并非条约，已作标注。如需系统的双边数据，请参阅中国外交部条约数据库或美国国务院的相关数据库。
              </p>
              <p>
                <strong className="text-navy">合规评估为作者综合判断。</strong>"行为状态"（合规/部分合规/不合规）及合规标注，系作者基于公开文献对中国条约履行情况的综合研判，并非官方或法律认定。合理的分析人士对部分评级可能存在不同意见。
              </p>
              <p>
                <strong className="text-navy">数据存在截止时效。</strong>条约记录反映截至2026年10月的情况，不会自动更新。如需最新参与状态，请以联合国条约汇编为准。2026年10月，本数据库经过一次系统的事实核查，更正了大量日期、状态和引文错误。
              </p>
              <p>
                <strong className="text-navy">不涵盖以下内容：</strong>交由国际货币基金组织、世界银行等专门机构保存的条约；不具约束力的谅解备忘录（包括大多数"一带一路"合作文件）；大多数区域性协定（RCEP除外）。
              </p>
            </>
          ) : (
            <>
              <p>
                <strong className="text-navy">Coverage is incomplete.</strong> The database holds 120 instruments: 106 multilateral treaties (about 93 of them deposited with the UN Secretary-General) and 14 bilateral instruments. The UN Secretary-General holds more than 560 multilateral treaties, so this is a selection.
              </p>
              <p>
                <strong className="text-navy">Bilateral instruments are selective.</strong> China concludes hundreds of bilateral treaties and agreements every year. This database includes only a handful that are useful for the analysis, mostly US–China, and four of those are not treaties (they are labelled). For systematic bilateral data, see China's Ministry of Foreign Affairs treaty database or the US State Department.
              </p>
              <p>
                <strong className="text-navy">Compliance assessments are the author's judgement.</strong> The "behaviour status" ratings (compliant / partial / non-compliant) and compliance flags are based on publicly available sources. They are not official or legal determinations, and reasonable people may disagree with individual ratings.
              </p>
              <p>
                <strong className="text-navy">Data has a cutoff date.</strong> Treaty records reflect the position as of October 2026 and are not updated automatically. For current status, the UN Treaty Collection is authoritative. In October 2026 the whole database was fact-checked, and a large number of dates, statuses and citations were corrected.
              </p>
              <p>
                <strong className="text-navy">Not covered:</strong> treaties deposited with the IMF, World Bank and other specialised agencies; non-binding memoranda (including most Belt and Road cooperation documents); and most regional agreements (RCEP is an exception).
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
