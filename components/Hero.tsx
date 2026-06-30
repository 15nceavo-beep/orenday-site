'use client';

import Image from 'next/image';
import { content } from '@/lib/content';
import { useLang } from './LangProvider';

export default function Hero() {
  const { lang } = useLang();
  const t = content.hero[lang];

  return (
    <section
      id="top"
      className="relative min-h-screen bg-cream-200 overflow-hidden pt-28 lg:pt-32"
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-8 lg:gap-12 pb-16 lg:pb-24">
        {/* LEFT — Editorial column */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-6 reveal is-visible">
            <span className="h-px w-12 bg-champagne-500" />
            <span className="font-mono text-xs tracking-widest uppercase text-champagne-600">
              {t.eyebrow}
            </span>
          </div>

          <h1 className="font-display text-[44px] sm:text-[56px] md:text-[72px] lg:text-[88px] xl:text-[104px] leading-[0.95] tracking-tightest text-midnight-800 font-light">
            {t.title.split('.')[0]}
            <span className="text-champagne-600">.</span>
          </h1>

          <p className="mt-8 lg:mt-10 max-w-xl font-body text-lg lg:text-xl leading-relaxed text-midnight-700">
            {t.lede}
          </p>

          <div className="mt-10 lg:mt-12 flex flex-col sm:flex-row gap-4">
            <a
              href="#firma"
              className="inline-flex items-center justify-center gap-3 bg-midnight-800 text-cream-100 px-8 py-4 text-[12px] tracking-widest uppercase font-body hover:bg-champagne-500 hover:text-midnight-800 transition-all group"
            >
              {t.cta1}
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="group-hover:translate-x-1 transition-transform"
              >
                <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1" />
              </svg>
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-3 border border-midnight-800/40 text-midnight-800 px-8 py-4 text-[12px] tracking-widest uppercase font-body hover:border-champagne-500 hover:text-champagne-600 transition-all"
            >
              {t.cta2}
            </a>
          </div>

          {/* Editorial meta */}
          <div className="mt-16 lg:mt-20 pt-8 border-t border-midnight-800/15 grid grid-cols-3 gap-4 max-w-2xl">
            <div>
              <div className="font-mono text-[10px] tracking-widest uppercase text-midnight-600 mb-2">
                {t.meta1}
              </div>
              <div className="numeral text-3xl lg:text-4xl text-midnight-800">
                {t.meta1Value}
              </div>
            </div>
            <div>
              <div className="font-mono text-[10px] tracking-widest uppercase text-midnight-600 mb-2">
                {t.meta2}
              </div>
              <div className="numeral text-3xl lg:text-4xl text-midnight-800">
                {t.meta2Value}
              </div>
            </div>
            <div>
              <div className="font-mono text-[10px] tracking-widest uppercase text-midnight-600 mb-2">
                {t.meta3}
              </div>
              <div className="numeral text-3xl lg:text-4xl text-midnight-800">
                {t.meta3Value}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — Editorial image */}
        <div className="lg:col-span-5 relative">
          <div className="relative aspect-[3/4] lg:aspect-auto lg:h-full lg:min-h-[720px] bg-midnight-800 overflow-hidden grain">
            <Image
              src="https://d8j0ntlcm91z4.cloudfront.net/user_3FmeicpEOywjab1mhomZiFuQzoR/hf_20260629_214540_40b53b1e-1ab2-44d0-b469-e90dabe7e3db.png"
              alt="Editorial — Despacho boutique"
              fill
              priority
              className="object-cover opacity-90"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-midnight-900/80 via-midnight-900/20 to-transparent" />

            {/* Bottom overlay caption */}
            <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
              <div className="hairline mb-6" />
              <p className="font-mono text-[10px] tracking-widest uppercase text-champagne-300 mb-2">
                Vol. 01 · Mexicali · MMXXVI
              </p>
              <p className="font-display text-cream-100 text-xl lg:text-2xl leading-tight">
                {lang === 'es'
                  ? 'Un despacho construido para clientes que entienden la diferencia entre asesor y consejero.'
                  : 'A firm built for clients who understand the difference between advisor and counselor.'}
              </p>
            </div>

            {/* Corner mark */}
            <div className="absolute top-6 right-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-champagne-500 rounded-full" />
              <span className="font-mono text-[10px] tracking-widest uppercase text-cream-100">
                {lang === 'es' ? 'Activo' : 'Active'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="hidden lg:flex absolute bottom-6 left-1/2 -translate-x-1/2 items-center gap-3 font-mono text-[10px] tracking-widest uppercase text-midnight-600">
        <span className="h-px w-8 bg-midnight-600 animate-pulse" />
        {lang === 'es' ? 'Continúe' : 'Continue'}
      </div>
    </section>
  );
}
