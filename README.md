# Clínica Vida Plus — Landing demo

Landing page premium para clínica / odontología / centro de estética. Demo profesional
lista para mostrar en Instagram y a futuros clientes.

## Stack

- **Next.js 14** (App Router)
- **Tailwind CSS** (paleta clínica: azul profesional, celeste, menta y dorado suave)
- **Framer Motion** (animaciones suaves)
- **lucide-react** (iconos)

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:4090
npm run build    # build de producción
```

## Secciones

Navbar (con menú hamburguesa móvil) · Hero · Stats de confianza · Servicios ·
Antes y Después (comparador deslizable) · Profesionales · Testimonios ·
CTA WhatsApp · Ubicación y horarios (mapa embebido) · Footer · Botón flotante de WhatsApp.

## Personalización rápida

Casi todo el contenido vive en **`src/lib/site.ts`**:

- `site.whatsapp` → número, teléfono visible y mensaje automático.
- `site.address`, `site.mapsUrl`, `site.mapsEmbed`, `site.hours` → ubicación y horarios.
- `services`, `results`, `professionals`, `testimonials`, `stats` → tarjetas de cada sección.

### Reemplazar imágenes

Las fotos usan placeholders de Unsplash (definidos en `src/lib/site.ts` y `Hero.tsx`).
Para usar fotos reales: subí las imágenes a `public/` y cambiá las URLs por rutas
locales (ej. `"/profesionales/camila.jpg"`). El dominio remoto permitido está en
`next.config.mjs`.

## Deploy en Vercel

1. Subí el proyecto a un repo de GitHub.
2. Importalo en [vercel.com](https://vercel.com) → detecta Next.js automáticamente.
3. Deploy. Sin variables de entorno necesarias.

---
Diseño y desarrollo por **Ever Núñez**.
