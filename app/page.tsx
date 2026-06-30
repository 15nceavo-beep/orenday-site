'use client';

import { useState } from 'react';
import { LangProvider } from '@/components/LangProvider';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Firma from '@/components/Firma';
import Areas from '@/components/Areas';
import Clientes from '@/components/Clientes';
import Testimonios from '@/components/Testimonios';
import Equipo from '@/components/Equipo';
import Insights from '@/components/Insights';
import Portal from '@/components/Portal';
import Contacto from '@/components/Contacto';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';

export default function Home() {
  const [portalOpen, setPortalOpen] = useState(false);

  return (
    <LangProvider>
      <main className="overflow-x-hidden">
        <Navigation onPortalClick={() => setPortalOpen(true)} />
        <Hero />
        <Firma />
        <Areas />
        <Clientes />
        <Testimonios />
        <Equipo />
        <Insights />
        <Portal modalOpen={portalOpen} setModalOpen={setPortalOpen} />
        <Contacto />
        <Footer />
        <FloatingCTA />
      </main>
    </LangProvider>
  );
}
