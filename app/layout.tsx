import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Orenday Asesores Corporativos | Despacho Jurídico Fiscal en Mexicali',
  description:
    'Despacho boutique especializado en derecho fiscal, corporativo y empresarial. Litigio fiscal, planeación patrimonial y asesoría estratégica para empresas en Mexicali, Baja California.',
  keywords: [
    'despacho legal mexicali',
    'abogado fiscal mexicali',
    'litigio fiscal',
    'derecho corporativo baja california',
    'planeación patrimonial',
    'asesoría tributaria',
    'orenday asesores',
  ],
  authors: [{ name: 'Orenday Asesores Corporativos' }],
  openGraph: {
    title: 'Orenday Asesores Corporativos',
    description:
      'Asesoría jurídica boutique en materia fiscal, corporativa y empresarial. Mexicali, Baja California.',
    url: 'https://orenday.com.mx',
    siteName: 'Orenday Asesores Corporativos',
    locale: 'es_MX',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-cream-200 text-midnight-800 antialiased">
        {children}
      </body>
    </html>
  );
}
