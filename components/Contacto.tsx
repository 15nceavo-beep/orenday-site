'use client';

import { useState } from 'react';
import { content, EMAIL, INSTAGRAM_URL } from '@/lib/content';
import { useLang } from './LangProvider';
import { useReveal } from './useReveal';

export default function Contacto() {
  const { lang } = useLang();
  const t = content.contacto[lang];
  const ref = useReveal();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const company = formData.get('company') as string;
    const message = formData.get('message') as string;

    const subject = encodeURIComponent(`Consulta web · ${name}`);
    const body = encodeURIComponent(
      `Nombre: ${name}\nCorreo: ${email}\nEmpresa: ${company || '—'}\n\nMensaje:\n${message}`
    );

    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section
      id="contacto"
      ref={ref}
      className="bg-cream-100 py-24 lg:py-40 border-t border-midnight-800/10"
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-16 lg:mb-20">
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
            <p className="reveal mt-8 font-body text-base lg:text-lg leading-relaxed text-midnight-700 max-w-2xl">
              {t.lede}
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-7 reveal">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block font-mono text-[10px] tracking-widest uppercase text-midnight-700 mb-2">
                  {t.formName}
                </label>
                <input
                  required
                  name="name"
                  type="text"
                  className="w-full bg-transparent border-b border-midnight-800/30 px-0 py-3 font-body text-base text-midnight-800 focus:border-champagne-500 focus:outline-none transition-colors"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-mono text-[10px] tracking-widest uppercase text-midnight-700 mb-2">
                    {t.formEmail}
                  </label>
                  <input
                    required
                    name="email"
                    type="email"
                    className="w-full bg-transparent border-b border-midnight-800/30 px-0 py-3 font-body text-base text-midnight-800 focus:border-champagne-500 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-mono text-[10px] tracking-widest uppercase text-midnight-700 mb-2">
                    {t.formCompany}
                  </label>
                  <input
                    name="company"
                    type="text"
                    className="w-full bg-transparent border-b border-midnight-800/30 px-0 py-3 font-body text-base text-midnight-800 focus:border-champagne-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-[10px] tracking-widest uppercase text-midnight-700 mb-2">
                  {t.formMessage}
                </label>
                <textarea
                  required
                  name="message"
                  rows={5}
                  className="w-full bg-transparent border-b border-midnight-800/30 px-0 py-3 font-body text-base text-midnight-800 focus:border-champagne-500 focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-3 bg-midnight-800 text-cream-100 px-8 py-4 text-[12px] tracking-widest uppercase font-body hover:bg-champagne-500 hover:text-midnight-800 transition-colors group"
              >
                {t.formSubmit}
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

              {submitted && (
                <p className="text-xs text-champagne-700 font-body">
                  {lang === 'es'
                    ? 'Abriendo su cliente de correo…'
                    : 'Opening your mail client…'}
                </p>
              )}

              <p className="text-[11px] leading-relaxed font-body text-midnight-600 pt-4 max-w-md">
                {t.formNote}
              </p>
            </form>
          </div>

          {/* Info */}
          <div className="lg:col-span-5 reveal space-y-10">
            <div>
              <div className="font-mono text-[10px] tracking-widest uppercase text-champagne-600 mb-3">
                {t.addressLabel}
              </div>
              <p className="font-display text-xl lg:text-2xl text-midnight-800 whitespace-pre-line leading-tight">
                {t.address}
              </p>
              <a
                href="https://maps.google.com/?q=Av.+Venustiano+Carranza+109,+Vallarta,+Mexicali,+BC"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-xs tracking-widest uppercase font-body text-midnight-700 underline-link hover:text-champagne-600 transition-colors"
              >
                {lang === 'es' ? 'Abrir en Google Maps' : 'Open in Google Maps'} →
              </a>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="font-mono text-[10px] tracking-widest uppercase text-champagne-600 mb-3">
                  {t.emailLabel}
                </div>
                <a
                  href={`mailto:${EMAIL}`}
                  className="font-body text-sm lg:text-base text-midnight-800 break-all underline-link hover:text-champagne-600 transition-colors"
                >
                  {t.email}
                </a>
              </div>
              <div>
                <div className="font-mono text-[10px] tracking-widest uppercase text-champagne-600 mb-3">
                  {t.socialLabel}
                </div>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm lg:text-base text-midnight-800 underline-link hover:text-champagne-600 transition-colors"
                >
                  {t.social}
                </a>
              </div>
            </div>

            <div className="aspect-video bg-midnight-100 overflow-hidden border border-midnight-800/15">
              <iframe
                title="Mapa Orenday Asesores Corporativos"
                src="https://www.google.com/maps?q=Av.+Venustiano+Carranza+109,+Vallarta,+Mexicali,+BC&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(0.4) contrast(1.05)' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
