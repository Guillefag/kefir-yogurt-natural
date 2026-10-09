# Kefir Natural · Landing

Landing para la venta de kefir artesanal (yogurt natural), hecha con [Astro](https://astro.build).

## Cómo correrla

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera el sitio estático en dist/
npm run preview  # previsualiza el build
```

## Qué editar

Todo el contenido está en **`src/data/site.ts`**:

- `site.whatsapp`: tu número en formato internacional, sin `+` ni espacios (ej. `5491112345678`).
- `site.instagram`, `site.zone`, `site.deliveryDays`: redes, zona y días de entrega.
- `products`: nombres, tamaños, precios y descripciones.
- `benefits`, `steps`, `faqs`: textos de las secciones.

Los colores y tipografías están en `src/styles/global.css` (variables en `:root`).

## Estructura

```
src/
  data/site.ts         # contenido editable
  layouts/Layout.astro # <head>, fuentes, SEO
  components/          # secciones: Header, Hero, Benefits, Products, HowTo, Faq, Footer
  pages/index.astro    # arma la página
  styles/global.css    # estilos globales
```

## Publicar

Es un sitio estático: se puede publicar gratis en Vercel o Netlify conectando este repo
(build command `npm run build`, carpeta `dist`).
