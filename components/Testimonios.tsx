'use client';

import { content } from '@/lib/content';
import { useLang } from './LangProvider';
import { useReveal } from './useReveal';

export default function Testimonios() {
  const { lang } = useLang();
  const t = content.testimonios[lang];
  const items = content.testimonios.items[lang];
  const ref = useReveal();

  return (
    <section ref={ref} className="bg-cream-200 py-24 lg:py-40 border-t border-midnight-800/10">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-16 lg:mb-24">
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
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-10">
          {items.map((tt, i) => (
            <figure
              key={i}
              className="reveal flex flex-col bg-cream-100 p-8 lg:p-10 border border-midnight-800/10 hover:border-champagne-500/50 transition-colors"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="numeral text-6xl text-champagne-500 leading-none mb-6">
                &ldquo;
              </div>
              <blockquote className="font-display text-lg lg:text-xl leading-snug text-midnight-800 mb-8 flex-1">
                {tt.q}
              </blockquote>
              <figcaption className="border-t border-midnight-800/15 pt-6">
                <div className="font-body font-medium text-midnight-800 text-sm">
                  {tt.n}
                </div>
                <div className="font-mono text-[10px] tracking-widest uppercase text-midnight-600 mt-1">
                  {tt.c}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
