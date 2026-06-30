'use client';

import { useState } from 'react';
import Image from 'next/image';
import { content } from '@/lib/content';
import { useLang } from './LangProvider';
import { useReveal } from './useReveal';

export default function Areas() {
  const { lang } = useLang();
  const t = content.areas[lang];
  const ref = useReveal();
  const [active, setActive] = useState(0);

  return (
    <section
      id="areas"
      ref={ref}
      className="bg-midnight-800 py-24 lg:py-40 text-cream-100 relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#C9A961" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-16 lg:mb-24">
          <div className="lg:col-span-3 reveal">
            <div className="font-mono text-xs tracking-widest uppercase text-champagne-400 mb-3">
              {t.eyebrow}
            </div>
            <div className="hidden lg:block hairline mt-6" />
          </div>
          <div className="lg:col-span-9">
            <h2 className="reveal font-display text-[36px] sm:text-[44px] md:text-[56px] lg:text-[68px] leading-[1.05] tracking-tightest font-light max-w-3xl">
              {t.title}
            </h2>
            <p className="reveal mt-8 font-body text-base lg:text-lg leading-relaxed text-cream-100/70 max-w-2xl">
              {t.lede}
            </p>
          </div>
        </div>

        {/* Areas grid — desktop split view */}
        <div className="hidden lg:grid grid-cols-12 gap-8">
          {/* List of areas */}
          <div className="col-span-7">
            <ul className="divide-y divide-cream-100/15">
              {t.items.map((item, i) => (
                <li
                  key={item.n}
                  onMouseEnter={() => setActive(i)}
                  className={`group cursor-pointer py-7 grid grid-cols-12 gap-6 items-start transition-all ${
                    active === i ? 'opacity-100' : 'opacity-50 hover:opacity-90'
                  }`}
                >
                  <div className="col-span-1 numeral text-2xl text-champagne-400 font-light">
                    {item.n}
                  </div>
                  <div className="col-span-11">
                    <h3
                      className={`font-display text-3xl xl:text-4xl mb-3 leading-tight transition-colors ${
                        active === i ? 'text-champagne-300' : 'text-cream-100'
                      }`}
                    >
                      {item.t}
                    </h3>
                    <p
                      className={`font-body text-sm leading-relaxed text-cream-100/70 transition-all overflow-hidden ${
                        active === i
                          ? 'max-h-40 opacity-100 mt-2'
                          : 'max-h-0 opacity-0'
                      }`}
                    >
                      {item.d}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Active area image */}
          <div className="col-span-5 sticky top-32 self-start">
            <div className="relative aspect-[3/4] bg-midnight-900 overflow-hidden grain">
              {t.items.map((item, i) => (
                <div
                  key={item.n}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    active === i ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <Image
                    src={item.img}
                    alt={item.t}
                    fill
                    className="object-cover"
                    sizes="40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight-900/70 via-transparent to-transparent" />
                </div>
              ))}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="hairline mb-4" />
                <p className="font-mono text-[10px] tracking-widest uppercase text-champagne-300">
                  {t.items[active].n} / {String(t.items.length).padStart(2, '0')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile cards */}
        <div className="lg:hidden space-y-12">
          {t.items.map((item) => (
            <div key={item.n} className="reveal">
              <div className="relative aspect-[4/3] overflow-hidden grain mb-6">
                <Image
                  src={item.img}
                  alt={item.t}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-900/60 to-transparent" />
                <span className="absolute top-4 left-4 numeral text-2xl text-champagne-300">
                  {item.n}
                </span>
              </div>
              <h3 className="font-display text-2xl mb-3 text-cream-100">
                {item.t}
              </h3>
              <p className="font-body text-sm leading-relaxed text-cream-100/70">
                {item.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
