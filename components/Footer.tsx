'use client';

import Image from 'next/image';
import { content, EMAIL, INSTAGRAM_URL } from '@/lib/content';
import { useLang } from './LangProvider';

export default function Footer() {
  const { lang } = useLang();
  const t = content.footer[lang];
  const nav = content.nav[lang];

  return (
    <footer className="bg-midnight-900 text-cream-100 pt-20 pb-10 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="footer-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#C9A961" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-grid)" />
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-cream-100/15">
          <div className="lg:col-span-5">
            <Image
              src="/images/logo-orenday.png"
              alt="Orenday Asesores Corporativos"
              width={220}
              height={66}
              className="h-14 w-auto brightness-0 invert opacity-90 mb-8"
            />
            <p className="font-display text-2xl lg:text-3xl leading-tight max-w-md text-cream-100/90 font-light">
              {t.tagline}
            </p>

            <div className="mt-10 space-y-2">
              <a
                href={`mailto:${EMAIL}`}
                className="block font-body text-sm text-cream-100/70 hover:text-champagne-400 transition-colors underline-link"
              >
                {EMAIL}
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block font-body text-sm text-cream-100/70 hover:text-champagne-400 transition-colors underline-link"
              >
                instagram · @orendaylegal
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="font-mono text-[10px] tracking-widest uppercase text-champagne-400 mb-5">
              {t.nav}
            </div>
            <ul className="space-y-3">
              <li>
                <a href="#firma" className="font-body text-sm text-cream-100/80 hover:text-champagne-300 transition-colors">
                  {nav.firma}
                </a>
              </li>
              <li>
                <a href="#areas" className="font-body text-sm text-cream-100/80 hover:text-champagne-300 transition-colors">
                  {nav.areas}
                </a>
              </li>
              <li>
                <a href="#equipo" className="font-body text-sm text-cream-100/80 hover:text-champagne-300 transition-colors">
                  {nav.equipo}
                </a>
              </li>
              <li>
                <a href="#insights" className="font-body text-sm text-cream-100/80 hover:text-champagne-300 transition-colors">
                  {nav.insights}
                </a>
              </li>
              <li>
                <a href="#contacto" className="font-body text-sm text-cream-100/80 hover:text-champagne-300 transition-colors">
                  {nav.contacto}
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <div className="font-mono text-[10px] tracking-widest uppercase text-champagne-400 mb-5">
              {t.legal}
            </div>
            <ul className="space-y-3 mb-8">
              <li>
                <a href="#" className="font-body text-sm text-cream-100/80 hover:text-champagne-300 transition-colors">
                  {t.privacy}
                </a>
              </li>
              <li>
                <a href="#" className="font-body text-sm text-cream-100/80 hover:text-champagne-300 transition-colors">
                  {t.terms}
                </a>
              </li>
              <li>
                <a href="#" className="font-body text-sm text-cream-100/80 hover:text-champagne-300 transition-colors">
                  {t.ethics}
                </a>
              </li>
            </ul>
            <address className="not-italic font-body text-xs text-cream-100/60 leading-relaxed">
              Av. Venustiano Carranza 109<br />
              Col. Vallarta, C.P. 21270<br />
              Mexicali, Baja California, México
            </address>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="font-mono text-[10px] tracking-widest uppercase text-cream-100/50">
            {t.copyright}
          </div>
          <div className="font-mono text-[10px] tracking-widest uppercase text-cream-100/50">
            {t.domain}
          </div>
        </div>
      </div>
    </footer>
  );
}
