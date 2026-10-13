import React from 'react';
import ReactMarkdown from 'react-markdown';

/**
 * Renders markdown with the app's navy/cream/gold visual language.
 *
 * Conventions used in content .md files:
 *   ## Heading   → section label (small caps, gold underline)
 *   ### Heading  → numbered finding card header
 *   > blockquote → implication / callout box
 *   **bold**     → emphasis
 *   *italic*     → italic
 *   ---          → divider
 */

let findingCounter = 0; // reset per render via key prop on parent

const components = {
  // ── Block elements ────────────────────────────────────────────────────────

  h2({ children }) {
    // Reset the finding counter each time we hit a top-level h2
    findingCounter = 0;
    return (
      <h3 className="font-serif text-sm font-semibold text-navy/50 uppercase tracking-widest mt-8 mb-4 pb-1 border-b border-cream-border">
        {children}
      </h3>
    );
  },

  h3({ children }) {
    findingCounter += 1;
    const n = findingCounter;
    return (
      <div className="flex items-start gap-3 mt-5 mb-1">
        <span className="shrink-0 w-6 h-6 rounded-full bg-navy text-cream text-xs font-bold flex items-center justify-center font-serif mt-0.5">
          {n}
        </span>
        <h4 className="font-serif font-semibold text-navy text-base leading-snug">{children}</h4>
      </div>
    );
  },

  blockquote({ children }) {
    return (
      <div className="my-3 ml-9 px-3 py-2.5 rounded-lg border bg-[#2E4A6B]/6 border-[#2E4A6B]/15 text-[#2E4A6B] text-xs leading-relaxed">
        {children}
      </div>
    );
  },

  p({ children }) {
    return (
      <p className="text-sm text-navy/70 leading-relaxed mb-3">
        {children}
      </p>
    );
  },

  ul({ children }) {
    return (
      <ul className="list-disc list-outside ml-5 space-y-1.5 mb-3 text-sm text-navy/70">
        {children}
      </ul>
    );
  },

  li({ children }) {
    return <li className="leading-relaxed">{children}</li>;
  },

  strong({ children }) {
    return <strong className="font-semibold text-navy/85">{children}</strong>;
  },

  em({ children }) {
    return <em className="italic text-navy/60">{children}</em>;
  },

  a({ href, children }) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="text-[#2A6080] underline underline-offset-2 hover:text-navy transition-colors"
      >
        {children}
      </a>
    );
  },

  hr() {
    return (
      <div className="my-6 border-t border-cream-border" />
    );
  },
};

export default function MarkdownContent({ content, className = '' }) {
  // Reset counter on each full render
  findingCounter = 0;
  return (
    <div className={className}>
      <ReactMarkdown components={components}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
