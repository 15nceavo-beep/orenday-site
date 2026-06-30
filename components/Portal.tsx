'use client';

import { useEffect } from 'react';
import { content, EMAIL } from '@/lib/content';
import { useLang } from './LangProvider';
import { useReveal } from './useReveal';

interface PortalProps {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
}

export default function Portal({ modalOpen, setModalOpen }: PortalProps) {
  const { lang } = useLang();
  const t = content.portal[lang];
  const ref = useReveal();

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [modalOpen]);

  return (
    <>
      <section
        ref={ref}
        className="bg-midnight-800 py-24 lg:py-40 text-cream-100 relative overflow-hidden border-t border-midnight-900"
      >
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="#C9A961" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>

        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-7 reveal">
              <div className="font-mono text-xs tracking-widest uppercase text-champagne-400 mb-6">
                {t.eyebrow}
              </div>
              <h2 className="font-display text-[36px] sm:text-[44px] md:text-[56px] lg:text-[68px] leading-[1.05] tracking-tightest font-light mb-8 max-w-3xl">
                {t.title}
              </h2>
              <p className="font-body text-base lg:text-lg leading-relaxed text-cream-100/70 max-w-xl mb-10">
                {t.lede}
              </p>
              <ul className="space-y-3 mb-10">
                {t.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-4 font-body text-sm lg:text-base text-cream-100/85"
                  >
                    <span className="mt-2 w-2 h-2 bg-champagne-500 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-3 bg-champagne-500 text-midnight-800 px-8 py-4 text-[12px] tracking-widest uppercase font-body hover:bg-cream-100 transition-colors group"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <rect x="2" y="6" width="10" height="7" stroke="currentColor" strokeWidth="1" />
                  <path d="M4 6V4C4 2.9 4.9 2 6 2H8C9.1 2 10 2.9 10 4V6" stroke="currentColor" strokeWidth="1" />
                </svg>
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
              </button>
            </div>

            <div className="lg:col-span-5 reveal">
              <div className="relative">
                {/* Mock portal preview card */}
                <div className="bg-midnight-900 border border-champagne-500/30 p-8 lg:p-10 shadow-2xl">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
                    </div>
                    <span className="font-mono text-[10px] tracking-widest uppercase text-cream-100/40">
                      portal.orenday.com.mx
                    </span>
                  </div>
                  <div className="space-y-5">
                    <div>
                      <div className="font-mono text-[10px] tracking-widest uppercase text-champagne-400 mb-2">
                        {lang === 'es' ? 'Matter activo' : 'Active matter'}
                      </div>
                      <div className="font-display text-xl text-cream-100 leading-tight">
                        {lang === 'es' ? 'Juicio de Nulidad TFJA · 2025-0142' : 'Nullity Proceeding TFJA · 2025-0142'}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-cream-100/10">
                      <div>
                        <div className="font-mono text-[9px] tracking-widest uppercase text-cream-100/50 mb-1">
                          {lang === 'es' ? 'Estado' : 'Status'}
                        </div>
                        <div className="font-body text-sm text-champagne-300">
                          {lang === 'es' ? 'En sentencia' : 'Awaiting ruling'}
                        </div>
                      </div>
                      <div>
                        <div className="font-mono text-[9px] tracking-widest uppercase text-cream-100/50 mb-1">
                          {lang === 'es' ? 'Próximo evento' : 'Next event'}
                        </div>
                        <div className="font-body text-sm text-cream-100">12·07·2026</div>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-cream-100/10">
                      <div className="flex items-center justify-between mb-3">
                        <div className="font-mono text-[9px] tracking-widest uppercase text-cream-100/50">
                          {lang === 'es' ? 'Documentos' : 'Documents'}
                        </div>
                        <div className="numeral text-sm text-champagne-300">14</div>
                      </div>
                      <div className="space-y-2">
                        {[1, 2, 3].map((n) => (
                          <div
                            key={n}
                            className="flex items-center gap-3 text-xs text-cream-100/60 font-body"
                          >
                            <span className="w-3 h-4 border border-cream-100/40" />
                            {lang === 'es'
                              ? `Documento_${n.toString().padStart(2, '0')}.pdf`
                              : `Document_${n.toString().padStart(2, '0')}.pdf`}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Decorative corner */}
                <div className="absolute -top-3 -right-3 w-20 h-20 border-t border-r border-champagne-500/40" />
                <div className="absolute -bottom-3 -left-3 w-20 h-20 border-b border-l border-champagne-500/40" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setModalOpen(false)}
        >
          <div className="absolute inset-0 bg-midnight-900/80 backdrop-blur-sm" />
          <div
            className="relative bg-cream-100 max-w-md w-full p-8 lg:p-10 border border-champagne-500/30"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-5 right-5 text-midnight-800 hover:text-champagne-600 transition-colors"
              aria-label="Cerrar"
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M5 5L17 17M5 17L17 5" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>

            <div className="font-mono text-[10px] tracking-widest uppercase text-champagne-600 mb-3">
              Orenday · Portal
            </div>
            <h3 className="font-display text-3xl text-midnight-800 mb-8 font-light">
              {t.modalTitle}
            </h3>

            <form
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = `mailto:${EMAIL}?subject=Acceso%20Portal%20Cliente`;
              }}
            >
              <div>
                <label className="block font-mono text-[10px] tracking-widest uppercase text-midnight-700 mb-2">
                  {t.modalEmail}
                </label>
                <input
                  type="email"
                  required
                  className="w-full bg-transparent border border-midnight-800/30 px-4 py-3 font-body text-sm text-midnight-800 focus:border-champagne-500 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block font-mono text-[10px] tracking-widest uppercase text-midnight-700 mb-2">
                  {t.modalPassword}
                </label>
                <input
                  type="password"
                  required
                  className="w-full bg-transparent border border-midnight-800/30 px-4 py-3 font-body text-sm text-midnight-800 focus:border-champagne-500 focus:outline-none transition-colors"
                />
              </div>
              <div className="flex items-center justify-between text-xs">
                <a
                  href={`mailto:${EMAIL}?subject=Recuperar%20contraseña%20portal`}
                  className="underline-link font-body text-midnight-600 hover:text-champagne-600 transition-colors"
                >
                  {t.modalForgot}
                </a>
              </div>
              <button
                type="submit"
                className="w-full bg-midnight-800 text-cream-100 py-4 text-[12px] tracking-widest uppercase font-body hover:bg-champagne-500 hover:text-midnight-800 transition-colors mt-2"
              >
                {t.modalSubmit}
              </button>
            </form>

            <p className="mt-6 text-[11px] leading-relaxed font-body text-midnight-600 border-t border-midnight-800/15 pt-5">
              {t.modalNote}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
