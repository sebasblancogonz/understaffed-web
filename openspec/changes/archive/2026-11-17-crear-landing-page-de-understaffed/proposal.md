# Proposal

## Why

Understaffed no tiene web pública: quien oye hablar del producto no puede entender qué hace, cómo se trabaja con él ni cómo conseguirlo. Hace falta una landing clara y fiel a la app que explique el producto con sus propios términos (roles, tareas, tablero, revisión, spec) sin prometer nada que la app no haga hoy.

## What Changes

- Crear el proyecto `understaffed-web` desde cero (el repositorio solo contiene `openspec/`): Astro estable, TypeScript estricto, salida estática, pnpm y Node 22.
- Añadir la portada en español (`/`) y en inglés (`/en/`) con las secciones: cabecera con navegación, hero con acción principal, cómo funciona (tablero → spec → código → revisión), las dos aprobaciones humanas, funciona en local con cuenta opcional, y pie.
- Añadir el sistema visual: variables CSS definidas una sola vez, tema claro y oscuro según el sistema, acento cobalto único, Inter Variable y JetBrains Mono alojadas en la web.
- Añadir SEO y compartir: `title`, descripción, canónica, `hreflang`, Open Graph/Twitter, sitemap, `robots.txt` y favicon.
- Cumplir accesibilidad y rendimiento: enlace para saltar al contenido, foco visible, `prefers-reduced-motion`, móvil desde 360 px, Lighthouse ≥ 95, sin JavaScript en cliente en la portada.
- Contenido: no se inventan precios, métricas, testimonios, logos ni capturas. Donde falte un dato o una captura se deja un `TODO:` visible; los textos nuevos se marcan como borrador.
- Fuera de alcance: despliegue y configuración del alojamiento, blog, página de precios, documentación, generación de imágenes, formularios o analítica.

## Capabilities

### New Capabilities
- `landing-content`: secciones de la portada, veracidad de las afirmaciones sobre el producto, marcado de textos borrador, capturas y datos pendientes.
- `site-localization`: textos por idioma, rutas `/` (es) y `/en/` (en), selector de idioma y alternativas `hreflang`.
- `site-seo`: metadatos por página, canónica, Open Graph/Twitter, sitemap, `robots.txt`, favicon y estructura de encabezados.
- `site-presentation`: tema claro/oscuro, identidad visual, tipografías propias, accesibilidad, diseño adaptable, movimiento reducido y presupuesto de rendimiento.

### Modified Capabilities

<!-- Ninguna: no existen specs previas en openspec/specs/. -->

## Impact

- Código nuevo en la raíz: `package.json`, `astro.config.*`, `tsconfig.json`, `src/` (`components/sections`, `components/ui`, `layouts`, `i18n`, `assets`, `styles`), `public/` (`robots.txt`, favicon).
- Dependencias nuevas a justificar: `astro`, `@astrojs/sitemap`, `@fontsource-variable/inter`, `@fontsource-variable/jetbrains-mono`, TypeScript y `@astrojs/check`.
- Dependencias de equipo: capturas de la app, imagen Open Graph, URL pública definitiva (`site`), enlace de descarga/instalación y textos finales del redactor. `PRODUCT.md` y `DESIGN.md` no existen aún; se usa la identidad indicada en la tarea y se anota en la entrega.
- Sin impacto en la app de escritorio ni en el alojamiento.
