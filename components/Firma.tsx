'use client';

import { content } from '@/lib/content';
import { useLang } from './LangProvider';
import { useReveal } from './useReveal';

export default function Firma() {
  const { lang } = useLang();
  const t = content.firma[lang];
  const ref = useReveal();

  return (
    <section
      id="firma"
      ref={ref}
      className="bg-cream-200 py-24 lg:py-40 border-t border-midnight-800/10"
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Eyebrow column */}
          <div className="lg:col-span-3 reveal">
            <div className="font-mono text-xs tracking-widest uppercase text-champagne-600 mb-3">
              {t.eyebrow}
            </div>
            <div className="hidden lg:block hairline mt-6" />
          </div>

          {/* Content column */}
          <div className="lg:col-span-9">
            <h2 className="reveal font-display text-[36px] sm:text-[44px] md:text-[56px] lg:text-[68px] leading-[1.05] tracking-tightest text-midnight-800 font-light max-w-4xl">
              {t.title}
            </h2>

            <div className="mt-12 lg:mt-16 grid lg:grid-cols-2 gap-10 lg:gap-16">
              <p className="reveal dropcap font-body text-base lg:text-lg leading-[1.8] text-midnight-700">
                {t.p1}
              </p>
              <p className="reveal font-body text-base lg:text-lg leading-[1.8] text-midnight-700">
                {t.p2}
              </p>
            </div>

            {/* Pillars */}
            <div className="mt-20 lg:mt-28">
              <div className="font-mono text-xs tracking-widest uppercase text-champagne-600 mb-10">
                {t.pillarsTitle}
              </div>
              <div className="grid md:grid-cols-3 gap-10 lg:gap-14">
                {t.pillars.map((p, i) => (
                  <div
                    key={p.n}
                    className="reveal border-t border-midnight-800/15 pt-8"
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    <div className="numeral text-5xl lg:text-6xl text-champagne-500 mb-6 font-light">
                      {p.n}
                    </div>
                    <h3 className="font-display text-xl lg:text-2xl text-midnight-800 mb-4 leading-tight">
                      {p.t}
                    </h3>
                    <p className="font-body text-sm lg:text-base text-midnight-600 leading-relaxed">
                      {p.d}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
