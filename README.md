# Orenday Asesores Corporativos — Sitio Web

Despacho jurídico boutique especializado en derecho fiscal, corporativo y empresarial.
Mexicali, Baja California.

Construido con Next.js 15, React 18, Tailwind CSS 3 y TypeScript.

---

## 🚀 CÓMO PUBLICAR EL SITIO (4 pasos, sin terminal)

Esta es la forma más fácil. No necesitas saber programar.

### Paso 1 — Crea cuenta en Vercel
1. Ve a **https://vercel.com/signup**
2. Crea cuenta con tu correo o con tu cuenta de GitHub/Google (lo que sea más fácil).
3. Si te pregunta por un plan, escoge **Hobby (Free)**.

### Paso 2 — Sube el proyecto
1. Una vez dentro de Vercel, click en **"Add New"** → **"Project"**.
2. En la nueva pantalla, busca el botón **"Import Third-Party Git Repository"** o **"Browse All Templates"**.
3. La opción más sencilla: arriba a la derecha verás **"Or, deploy from a folder"** o un botón **"Upload"** / **"Deploy from folder"**.
4. Si no ves esa opción, haz lo siguiente desde tu Mac/PC:
   - Arrastra esta carpeta completa (`orenday-site/`) directamente sobre la página de Vercel "New Project".
   - Vercel detectará automáticamente que es un proyecto Next.js.

### Paso 3 — Configura
1. Vercel te pedirá un nombre para el proyecto. Pon: `orenday-asesores`.
2. **NO toques** la configuración de "Build & Output". Vercel lo detecta automáticamente.
3. Click en **"Deploy"**.
4. Espera 1–2 minutos. Vercel construye el sitio.

### Paso 4 — Conecta tu dominio orendayrobles.com
1. Cuando termine el deploy, Vercel te dará una URL temporal tipo `orenday-asesores.vercel.app`. Pruébala.
2. Para conectar `orendayrobles.com`:
   - En Vercel, dentro del proyecto, ve a **Settings** → **Domains**.
   - Escribe `orendayrobles.com` y click **Add**.
   - Vercel te dará 2 registros DNS (uno tipo A, otro tipo CNAME).
3. Entra al panel donde compraste el dominio (GoDaddy, Namecheap, MercadoDominios, etc.) y agrega esos registros DNS.
4. Espera 1–24 horas. El sitio quedará en `orendayrobles.com`.

✅ Listo. Cualquier cambio que hagas después se publica automáticamente.

---

## 📝 Cómo hacer cambios al sitio

Toda la información editable está en **un solo archivo**: `lib/content.ts`

Ahí puedes cambiar:
- Textos de cada sección (en español y en inglés)
- Nombres de los testimonios cuando los tengas
- Áreas de práctica
- Información de contacto

Cuando guardes y vuelvas a subir a Vercel (o si tienes Git conectado, con un commit basta), el sitio se actualiza solo.

---

## 🎨 Lo que incluye este sitio

- **11 secciones funcionales**: Navegación, Hero editorial, La Firma, 7 Áreas de Práctica con imágenes generadas, Clientes (marquee), 3 Testimonios, Equipo (Socio Director + Asociado), 3 Insights placeholder, Portal Cliente con modal, Contacto con formulario + mapa, Footer.
- **Bilingüe ES/EN** con toggle funcional.
- **Diseño boutique sofisticado** estilo Wachtell con acentos modernos.
- **Paleta**: Azul medianoche `#0B1929` + Dorado champagne `#C9A961` + Crema cálido `#F5F1EA`.
- **Tipografías editoriales**: Fraunces (display) + Inter (body) + JetBrains Mono (detalles técnicos).
- **Responsive**: optimizado para móvil, tablet y desktop.
- **SEO básico**: metadata, OpenGraph, structured headings.
- **Botón flotante de Instagram** (@orendaylegal).
- **Modal funcional de Portal Cliente**.
- **Mapa de Google integrado** con la dirección de Mexicali.
- **Imágenes editoriales** generadas con IA para cada área de práctica.

---

## 📷 Notas sobre las imágenes

Las 7 imágenes de áreas de práctica están alojadas en el CDN de Higgsfield. El sitio las carga directamente desde ahí, lo que significa que **no agregan peso al deploy** y se ven perfecto.

Si en algún momento quieres descargarlas localmente y subirlas al proyecto:
1. Descarga las URLs (están en `lib/content.ts` con el patrón `https://d8j0ntlcm91z4.cloudfront.net/...`).
2. Guárdalas en `public/images/` con los nombres `area-litigio-fiscal.png`, etc.
3. Cambia las URLs en `lib/content.ts` por los paths locales (ej. `/images/area-litigio-fiscal.png`).

---

## ⚙️ Para desarrolladores (opcional)

Si tienes Node.js 18+ instalado y quieres correr el sitio localmente:

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`.

Para construir versión de producción:
```bash
npm run build
npm start
```

---

## 📂 Estructura del proyecto

```
orenday-site/
├── app/
│   ├── layout.tsx       → Layout raíz, fuentes, metadata SEO
│   ├── page.tsx         → Página principal (ensambla componentes)
│   └── globals.css      → Estilos globales y animaciones
├── components/
│   ├── Navigation.tsx   → Nav sticky con scroll, toggle ES/EN
│   ├── Hero.tsx         → Hero editorial split-screen
│   ├── Firma.tsx        → Sobre el despacho
│   ├── Areas.tsx        → 7 áreas con imágenes
│   ├── Clientes.tsx     → Marquee infinita
│   ├── Testimonios.tsx  → 3 testimonios
│   ├── Equipo.tsx       → Socio Director + Asociado
│   ├── Insights.tsx     → 3 cards de blog
│   ├── Portal.tsx       → Portal Cliente + modal de login
│   ├── Contacto.tsx     → Formulario + info + mapa
│   ├── Footer.tsx       → Footer editorial
│   ├── FloatingCTA.tsx  → Botón Instagram flotante
│   ├── LangProvider.tsx → Context ES/EN
│   └── useReveal.ts     → Hook de animaciones al scroll
├── lib/
│   └── content.ts       → TODO el contenido bilingüe (editar aquí)
├── public/
│   └── images/
│       ├── logo-orenday.png       → Logo del despacho
│       ├── jose-antonio-orenday.jpg → Foto Socio Director
│       └── angel-mendoza.png       → Foto Asociado
├── package.json
├── next.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

---

**Despacho:** Orenday Asesores Corporativos
**Dirección:** Av. Venustiano Carranza 109, Col. Vallarta, C.P. 21270, Mexicali, B.C.
**Correo:** contacto@orendayrobles.com
**Instagram:** [@orendaylegal](https://instagram.com/orendaylegal)
