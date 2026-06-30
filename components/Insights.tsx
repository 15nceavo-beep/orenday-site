'use client';

import { content } from '@/lib/content';
import { useLang } from './LangProvider';
import { useReveal } from './useReveal';

export default function Insights() {
  const { lang } = useLang();
  const t = content.insights[lang];
  const ref = useReveal();

  return (
    <section
      id="insights"
      ref={ref}
      className="bg-cream-200 py-24 lg:py-40 border-t border-midnight-800/10"
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-16 lg:mb-20">
          <div className="lg:col-span-3 reveal">
            <div className="font-mono text-xs tracking-widest uppercase text-champagne-600 mb-3">
              {t.eyebrow}
            </div>
            <div className="hidden lg:block hairline mt-6" />
          </div>
          <div className="lg:col-span-9">
            <h2 className="reveal font-display text-[36px] sm:text-[44px] md:text-[56px] lg:text-[68px] leading-[1.05] tracking-tightest text-midnight-800 font-light max-w-3xl">
              {t.title}
            </h2>
            <p className="reveal mt-8 font-body text-base lg:text-lg leading-relaxed text-midnight-600 max-w-2xl">
              {t.lede}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-midnight-800/15">
          {t.items.map((it, i) => (
            <article
              key={i}
              className="reveal bg-cream-200 p-8 lg:p-10 group cursor-pointer hover:bg-cream-100 transition-colors"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="font-mono text-[10px] tracking-widest uppercase text-champagne-600">
                  {it.tag}
                </span>
                <span className="h-px flex-1 bg-midnight-800/20" />
                <span className="numeral text-sm text-midnight-600">
                  {it.date}
                </span>
              </div>
              <h3 className="font-display text-2xl lg:text-[28px] leading-tight text-midnight-800 mb-5 group-hover:text-champagne-600 transition-colors">
                {it.t}
              </h3>
              <p className="font-body text-sm leading-relaxed text-midnight-600 mb-8">
                {it.d}
              </p>
              <div className="flex items-center gap-2 text-[11px] tracking-widest uppercase font-body text-midnight-800 group-hover:text-champagne-600 transition-colors">
                {t.cta}
                <svg
                  width="14"
                  height="10"
                  viewBox="0 0 14 10"
                  fill="none"
                  className="group-hover:translate-x-1 transition-transform"
                >
                  <path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" strokeWidth="1" />
                </svg>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
