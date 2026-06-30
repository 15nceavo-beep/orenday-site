'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { content } from '@/lib/content';
import { useLang } from './LangProvider';

interface NavProps {
  onPortalClick: () => void;
}

export default function Navigation({ onPortalClick }: NavProps) {
  const { lang, toggle } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = content.nav[lang];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#firma', label: t.firma },
    { href: '#areas', label: t.areas },
    { href: '#equipo', label: t.equipo },
    { href: '#insights', label: t.insights },
    { href: '#contacto', label: t.contacto },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-cream-200/95 backdrop-blur-md border-b border-midnight-800/10 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3" aria-label="Inicio">
            <Image
              src="/images/logo-orenday.png"
              alt="Orenday Asesores Corporativos"
              width={180}
              height={54}
              className="h-10 md:h-12 w-auto"
              priority
            />
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[13px] tracking-widest uppercase text-midnight-800 hover:text-champagne-600 transition-colors underline-link font-body"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={toggle}
              className="text-xs tracking-widest uppercase font-mono text-midnight-800 hover:text-champagne-600 transition-colors px-2 py-1 border border-midnight-800/20 hover:border-champagne-500"
              aria-label="Toggle language"
            >
              {lang === 'es' ? 'EN' : 'ES'}
            </button>

            <button
              onClick={onPortalClick}
              className="hidden md:inline-flex items-center gap-2 text-[12px] tracking-widest uppercase font-body bg-midnight-800 text-cream-100 px-5 py-3 hover:bg-champagne-500 hover:text-midnight-800 transition-all"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="opacity-80"
              >
                <rect x="2" y="5" width="8" height="6" stroke="currentColor" strokeWidth="1" />
                <path d="M4 5V3.5C4 2.4 4.9 1.5 6 1.5C7.1 1.5 8 2.4 8 3.5V5" stroke="currentColor" strokeWidth="1" />
              </svg>
              {t.portal}
            </button>

            <button
              className="lg:hidden p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              <div className="w-6 flex flex-col gap-1.5">
                <span
                  className={`h-px bg-midnight-800 transition-all ${
                    mobileOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                />
                <span
                  className={`h-px bg-midnight-800 transition-all ${
                    mobileOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`h-px bg-midnight-800 transition-all ${
                    mobileOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-30 bg-cream-200 transition-all duration-500 lg:hidden ${
          mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="pt-32 px-6 flex flex-col gap-1">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="font-display text-3xl py-4 border-b border-midnight-800/10 text-midnight-800 hover:text-champagne-600 transition-colors"
              style={{
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.6s ${i * 0.08}s, transform 0.6s ${i * 0.08}s`,
              }}
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileOpen(false);
              onPortalClick();
            }}
            className="mt-8 bg-midnight-800 text-cream-100 px-6 py-4 text-sm tracking-widest uppercase"
          >
            {t.portal}
          </button>
        </div>
      </div>
    </>
  );
}
