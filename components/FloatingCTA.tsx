'use client';

import { useEffect, useState } from 'react';
import { INSTAGRAM_URL } from '@/lib/content';

export default function FloatingCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram @orendaylegal"
      className={`fixed bottom-6 right-6 z-30 inline-flex items-center gap-3 bg-midnight-800 text-cream-100 px-5 py-4 shadow-2xl border border-champagne-500/30 hover:bg-champagne-500 hover:text-midnight-800 transition-all group ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      } duration-500`}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
      <span className="font-mono text-[10px] tracking-widest uppercase hidden sm:inline">
        @orendaylegal
      </span>
    </a>
  );
}
