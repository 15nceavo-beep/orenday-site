'use client';

import Image from 'next/image';
import { content } from '@/lib/content';
import { useLang } from './LangProvider';
import { useReveal } from './useReveal';

export default function Clientes() {
  const { lang } = useLang();
  const t = content.clientes[lang];
  const items = content.clientes.items;
  const ref = useReveal();

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

      <div className="marquee-container overflow-hidden">
        <div className="flex gap-16 lg:gap-24 animate-marquee items-center py-6">
          {doubled.map((c, i) => (
            <div key={i} className="flex items-center gap-16 lg:gap-24 shrink-0">
              <div className="relative h-10 lg:h-14 w-36 lg:w-48 opacity-40 hover:opacity-80 transition-opacity grayscale hover:grayscale-0">
                <Image
                  src={c.img}
                  alt={c.name}
                  fill
                  className="object-contain"
                  sizes="192px"
                />
              </div>
              <span className="text-champagne-500 text-2xl">·</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
