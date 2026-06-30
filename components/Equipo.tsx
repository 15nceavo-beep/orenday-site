'use client';

import Image from 'next/image';
import { content } from '@/lib/content';
import { useLang } from './LangProvider';
import { useReveal } from './useReveal';

export default function Equipo() {
  const { lang } = useLang();
  const t = content.equipo[lang];
  const members = content.equipo.members[lang];
  const ref = useReveal();

  return (
    <section
      id="equipo"
      ref={ref}
      className="bg-cream-100 py-24 lg:py-40 border-t border-midnight-800/10"
    >
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
            <p className="reveal mt-8 font-body text-base lg:text-lg leading-relaxed text-midnight-600 max-w-2xl">
              {t.lede}
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {members.map((m, i) => (
            <article
              key={m.name}
              className="reveal grid grid-cols-12 gap-6"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="col-span-12 md:col-span-5">
                <div className="relative aspect-[3/4] bg-midnight-100 overflow-hidden">
                  <Image
                    src={m.img}
                    alt={m.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 35vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight-900/30 via-transparent to-transparent" />
                </div>
              </div>

              <div className="col-span-12 md:col-span-7 flex flex-col">
                <div className="font-mono text-[10px] tracking-widest uppercase text-champagne-600 mb-2">
                  {m.role}
                </div>
                <h3 className="font-display text-3xl lg:text-4xl text-midnight-800 leading-tight mb-5 font-light">
                  {m.name}
                </h3>
                <div className="hairline mb-6 max-w-[120px]" />
                <p className="font-body text-sm lg:text-base leading-relaxed text-midnight-700 mb-6">
                  {m.bio}
                </p>
                <div className="mt-auto">
                  <div className="font-mono text-[10px] tracking-widest uppercase text-midnight-600 mb-3">
                    {lang === 'es' ? 'Áreas' : 'Areas'}
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {m.areas.map((a) => (
                      <li
                        key={a}
                        className="text-[11px] tracking-wide font-body px-3 py-1.5 border border-midnight-800/20 text-midnight-700"
                      >
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
