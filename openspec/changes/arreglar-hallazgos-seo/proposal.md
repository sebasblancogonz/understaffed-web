# Arreglar los hallazgos de la auditoría SEO

## Why

La auditoría del 2026-11-27 (`seo-audit-2026-11-27/REPORT.md`) dio 50 sobre 100. La web publicada declara un dominio que no existe, no tiene imagen para compartir ni datos estructurados, el cuerpo no dice qué es Understaffed y Cloudflare oculta el correo de la lista.

## What Changes

- **Metadatos**: títulos y descripciones más cortos, imagen para compartir por idioma (borrador) y datos estructurados JSON-LD.
- **Texto**: una frase que define Understaffed al empezar «cómo funciona» y la del servidor propio sin ambigüedad.
- **HTML**: espacio entre las dos líneas del titular, correo sin ofuscar y comentarios internos fuera de lo publicado.
- **Archivos**: página 404, `favicon.ico`, `apple-touch-icon.png` y hreflang del sitemap igual al del `<head>`.
- **Presentación**: el titular y la entradilla ya no empiezan invisibles, la cabecera cabe en 320 px y los enlaces pequeños son más fáciles de tocar.
- **Despliegue**: `vercel.json` con una sola URL por página y cabeceras básicas.

## Enfoque

Arreglos en el código sin cambiar las secciones ni el hero que fija `landing-content`. Se descartó una sección nueva «Qué es Understaffed» porque cambia el orden de secciones.

## Fuera de alcance

- Páginas de privacidad y aviso legal, y quién hace Understaffed: faltan datos del equipo.
- Guía y comparativa para búsquedas amplias.
- Política CSP completa, hasta probarla en un navegador.
- Recorte de fuentes.

## Impact

- Specs: `site-seo`.
- Código: `Base.astro`, `Header.astro`, `Hero.astro`, `Roles.astro`, `Status.astro`, `Waitlist.astro`, `config.ts`, textos, `astro.config.mjs`, `404.astro`, `public/`, `media/og/`, `vercel.json` y `DESIGN.md`.
