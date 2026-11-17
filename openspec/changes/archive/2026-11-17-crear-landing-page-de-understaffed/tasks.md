# Tasks

## 1. Andamiaje del proyecto

- [x] 1.1 Crear el proyecto Astro estable con TypeScript estricto, pnpm, Node 22 y `output: 'static'`; verificar que `pnpm build` genera `dist/` y que `openspec/` sigue intacto
- [x] 1.2 Añadir `@astrojs/sitemap`, `@astrojs/check` y las dos fuentes `@fontsource-variable`; verificar que `pnpm install` y `pnpm astro check` terminan sin errores
- [x] 1.3 Configurar el i18n de Astro (`es` por defecto sin prefijo, `en` en `/en/`) con `site` configurable y `TODO:` para la URL pública; verificar que `pnpm build` genera `dist/index.html` y `dist/en/index.html`

## 2. Sistema visual y layout base

- [x] 2.1 Definir las variables de color claro/oscuro y de acento una sola vez en `src/styles/tokens.css`, con `prefers-color-scheme` y `prefers-reduced-motion`; verificar en el navegador que los fondos calculados son `#ffffff` y `#0d1017` según tema
- [x] 2.2 Crear el layout base único con `lang`, fuentes autoalojadas, precarga de Inter, enlace de saltar al contenido y foco visible; verificar con Tab que el primer foco es el enlace y que no hay peticiones a CDN de fuentes
- [x] 2.3 Crear las piezas de `src/components/ui/` (acción principal, contenedor de sección, marcador `TODO:` de captura); verificar que el marcador se muestra sin romper el build cuando falta el archivo

## 3. Textos e internacionalización

- [x] 3.1 Crear `src/i18n/es.ts` y `src/i18n/en.ts` con una interfaz común, textos marcados `DRAFT` y solo hechos verificados (Claude Code, sin claves, OpenSpec, dos aprobaciones, local con cuenta opcional); verificar que quitar una clave en un idioma hace fallar `pnpm astro check`
- [x] 3.2 Añadir el enlace de cambio de idioma y las alternativas `hreflang` (`es`, `en`, `x-default`); verificar en el HTML de ambas páginas que las URLs son absolutas y el enlace funciona sin JavaScript

## 4. Secciones de la portada

- [x] 4.1 Implementar cabecera, hero y pie en `src/components/sections/` y componerlos en ambas páginas; verificar un único `h1` y una única acción principal por página
- [x] 4.2 Implementar las secciones cómo funciona, aprobaciones y local con cuenta opcional con sus huecos de capturas; verificar que el texto usa roles, tareas, tablero, revisión y spec, y que no hay precios, métricas, testimonios ni logos
- [x] 4.3 Revisar a 360 px y en escritorio, en claro y oscuro, que no hay scroll horizontal, que el contraste cumple AA y que no hay animaciones bajo movimiento reducido; adjuntar capturas de pantalla

## 5. SEO y compartir

- [x] 5.1 Añadir título, descripción, canónica, Open Graph y Twitter por página desde los textos de cada idioma; verificar que ninguna etiqueta queda vacía en el HTML generado
- [x] 5.2 Añadir `robots.txt` con la referencia al sitemap, favicon y la ruta esperada de la imagen Open Graph con `TODO:` si falta; verificar que `dist/` contiene `sitemap-index.xml`, `robots.txt` y el favicon

## 6. Verificación integral

- [x] 6.1 Ejecutar `pnpm astro check` y `pnpm build` y verificar código 0 sin avisos nuevos
- [x] 6.2 Ejecutar Lighthouse móvil sobre `/` y `/en/` con `astro preview` y verificar 95 o más en las cuatro categorías y CLS ≤ 0,1; si faltan activos, anotarlo en la entrega
- [ ] 6.3 Invocar la skill impeccable sobre el resultado, aplicar las correcciones materiales y redactar la entrega con textos en borrador, capturas y datos pendientes, y skills usadas

## Workflow follow-up

- Archivar el cambio cuando el equipo haya revisado la entrega y aportado la URL pública, el enlace de descarga, las capturas y la imagen Open Graph.
