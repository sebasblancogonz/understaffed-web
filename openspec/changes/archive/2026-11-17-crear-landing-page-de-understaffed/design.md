# Design

## Context

El repositorio solo contiene `openspec/`: no hay proyecto Astro, ni `PRODUCT.md`, ni `DESIGN.md`, ni capturas. Se parte de la identidad y los hechos del producto dados en la tarea. Ver `proposal.md` (Why) para la motivación y `specs/` para los requisitos.

## Goals / Non-Goals

**Goals:**
- Un sitio estático, sin JavaScript de cliente en la portada, que cumpla los requisitos de las cuatro specs.
- Que añadir una sección o un idioma sea copiar una estructura existente, no tocar varios sitios.

**Non-Goals:**
- Islas interactivas: ninguna sección actual las necesita; si luego hace falta una, usará `client:visible` o `client:idle` en TypeScript sin framework.
- Despliegue, analítica, blog, precios, documentación.
- Redirección automática por idioma del navegador.

## Decisions

- **Astro estático (`output: 'static'`) sin adaptador.** Lo exige la tarea y es lo que mejor sirve al objetivo de Lighthouse. Alternativa descartada: SPA con framework, por coste de JavaScript.
- **Estructura**: `src/layouts/Base.astro` único; una sección por componente en `src/components/sections/` (Header, Hero, HowItWorks, Approvals, LocalFirst, Footer); piezas repetidas en `src/components/ui/` (Button, Section, Placeholder). Las páginas `src/pages/index.astro` y `src/pages/en/index.astro` solo componen secciones pasando el idioma.
- **i18n**: `i18n` de Astro con `defaultLocale: 'es'` y `prefixDefaultLocale: false`. Textos en `src/i18n/es.ts` y `src/i18n/en.ts`, tipados con una misma interfaz para que `astro check` detecte claves que falten. Los textos nuevos se marcan con un comentario `// DRAFT`. Alternativa: biblioteca i18n externa, descartada por no aportar nada a dos idiomas.
- **Tema**: variables CSS en `src/styles/tokens.css`, claro en `:root` y oscuro dentro de `@media (prefers-color-scheme: dark)`; `color-scheme: light dark`. Sin selector manual de tema (no pedido y requeriría JS). El acento se expone como `--accent` y `--on-accent`.
- **Fuentes**: `@fontsource-variable/inter` y `@fontsource-variable/jetbrains-mono`, importados en el layout; precarga del archivo `woff2` de Inter latino. Se importan solo los subconjuntos necesarios (latino) para limitar el peso.
- **Capturas**: `<Image>` de `astro:assets` desde `src/assets/`. Un componente `Placeholder` muestra el hueco con `TODO:` y el nombre esperado cuando la captura no existe. Se resuelve con `import.meta.glob` para que la ausencia no rompa el build.
- **SEO**: el layout recibe título, descripción, ruta y imagen; construye canónica y `hreflang` con `Astro.site`, que requiere la URL pública (ver Riesgos). `@astrojs/sitemap` con `i18n` configurado para generar alternativas. `robots.txt` en `public/` con la URL del sitemap.
- **Dependencias justificadas**: `@astrojs/sitemap` (lo pide la tarea), las dos fuentes (autoalojadas), `typescript` y `@astrojs/check` (verificación). Nada más.
- **Verificación**: `pnpm astro check`, `pnpm build`, una comprobación sobre `dist/` (un solo `h1`, `hreflang`, ausencia de `script`, atributos de imagen) y Lighthouse sobre `astro preview`.

## Risks / Trade-offs

- [Sin `PRODUCT.md`/`DESIGN.md` ni textos finales] → Textos en borrador marcados; la entrega lo declara y el redactor los sustituye en `src/i18n/` sin tocar componentes.
- [Sin URL pública ni enlace de descarga definidos] → `site` y el destino de la acción principal quedan como valor configurable con `TODO:`; canónicas y sitemap no son correctos hasta fijarlo.
- [Sin capturas ni imagen Open Graph] → Huecos marcados; la puntuación SEO/compartir no es final hasta recibirlas.
- [Sin selector manual de tema] → Se acepta: sigue al sistema, como pide la tarea.
- [Lighthouse 95+ depende de la imagen y fuentes finales] → Fuentes en subconjunto latino, imágenes con dimensiones y formatos optimizados por `astro:assets`; se mide al recibir los activos.
- [Afirmaciones que dejen de ser ciertas (p. ej. otros CLI soportados)] → Los hechos viven solo en `src/i18n/`; revisar contra la app antes de publicar.
