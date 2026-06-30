'use client';

import { content } from '@/lib/content';
import { useLang } from './LangProvider';
import { useReveal } from './useReveal';

export default function Clientes() {
  const { lang } = useLang();
  const t = content.clientes[lang];
  const items = content.clientes.items;
  const ref = useReveal();

  // Duplicate for seamless loop
  const doubled = [...items, ...items];

  return (
    <section
      ref={ref}
      className="bg-midnight-800 py-20 lg:py-28 border-t border-cream-100/10 text-cream-100"
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 mb-12">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3 reveal">
            <div className="font-mono text-xs tracking-widest uppercase text-champagne-400 mb-3">
              {t.eyebrow}
            </div>
          </div>
          <div className="lg:col-span-9">
            <p className="reveal font-display text-2xl lg:text-3xl text-cream-100/90 leading-tight max-w-3xl font-light">
              {t.title}
            </p>
          </div>
        </div>
      </div>

      <div className="marquee-container">
        <div className="flex gap-16 lg:gap-24 animate-marquee whitespace-nowrap py-6">
          {doubled.map((c, i) => (
            <span
              key={i}
              className="font-display text-2xl lg:text-4xl xl:text-5xl text-cream-100/40 hover:text-champagne-400 transition-colors tracking-wider font-light"
            >
              {c}
              <span className="text-champagne-500 ml-16 lg:ml-24">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
