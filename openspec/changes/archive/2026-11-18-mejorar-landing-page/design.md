# Design

## Context

La portada ya existe (ver `proposal.md`). Cada sección es un componente en `src/components/sections/` que recibe el diccionario tipado (`src/i18n/types.ts`, `es.ts`, `en.ts`). Las capturas se resuelven en `Placeholder.astro` con `import.meta.glob` sobre `src/assets/*` y `<Image>`; hoy hay una sola variante por captura (`tablero.png`, `tablero-en.png`, etc.), mientras que `media/capturas/` tiene `{tablero,revision,aprobacion}-{es,en}-{light,dark}.png`. Los hechos de los requisitos vienen de `PRODUCT.md` y del README de la app.

## Goals / Non-Goals

**Goals:**
- Que añadir la sección de requisitos y las variantes de captura sea copiar patrones existentes, sin JavaScript de cliente.
- Que ausencias (una variante de captura) degraden al marcador `TODO:` ya existente, no rompan el build.

**Non-Goals:**
- Selector manual de tema, nuevas secciones de producto (Estado, grupos, colaboración), enlace de descarga, imagen Open Graph.

## Decisions

- **Capturas por tema con `<picture>` y `media`.** `Placeholder` pasa a recibir el nombre base (`tablero`) y construye, con el idioma y el tema, `{base}-{lang}-{light|dark}.png`. Genera ambas variantes con `getImage` de `astro:assets` y las emite como `<source media="(prefers-color-scheme: dark)">` más una `<img>` clara por defecto, con `width`, `height`, `alt`, `srcset` y `sizes`. El navegador solo descarga la variante que cumple el `media`. Alternativas descartadas: dos `<Image>` alternadas con `display:none` (la oculta puede descargarse si es `eager`, p. ej. la del hero) y un script que cambie `src` (JavaScript innecesario).
- **Nombres de archivo.** Se copian las 12 capturas de `media/capturas/` a `src/assets/` conservando su nombre y se retiran las seis de una sola variante, para que no haya dos convenciones. Las dimensiones de las dos variantes de cada captura deben coincidir; si no, se avisa en la entrega.
- **Variante ausente.** Si falta cualquiera de las dos variantes, se muestra el marcador existente con el nombre del archivo que falta; no se mezcla una variante con otra.
- **Sección de requisitos.** Nuevo `Requirements.astro` basado en `LocalFirst.astro` (mismo `Section`, lista de requisitos y párrafo final), con el id en el diccionario y entrada en `nav.items`. Nombres de comandos (`git`, `claude`) en `<code>` con la fuente monoespaciada ya definida. Sin acento: el elemento de énfasis por sección sigue las reglas de `site-presentation`.
- **Diccionario.** Claves nuevas `requirements` en `Dict` y en ambos idiomas, para que `astro check` detecte omisiones; los textos nuevos o reescritos llevan `// DRAFT`.
- **Orden de pasos.** Se reescriben los cuatro pasos de `how.steps` sin añadir funciones: la spec se redacta y se aprueba, el rol ejecuta, se hace la revisión y se aprueba el código. El cuadro de pasos pasa de cuatro a cinco solo si el redactor lo decide; con cuatro, se fusionan «contrata» y «asigna» según el borrador final.

## Risks / Trade-offs

- [Las capturas de `media/capturas/` pueden no estar al día con la app] → Confirmar con el equipo antes de publicarlas; si no, quedan como `TODO:`.
- [Más peso en el repositorio: 12 PNG en lugar de 6] → `astro:assets` las optimiza al construir y solo se descarga una variante; vigilar Lighthouse de rendimiento en móvil.
- [Los requisitos pueden cambiar (versión de git, otros CLI)] → Los datos viven solo en `src/i18n/`; revisarlos contra el README de la app antes de publicar.
- [Cuatro enlaces de navegación en 360 px] → La cabecera ya envuelve; comprobar que no hay scroll horizontal.
- [Textos en borrador] → Marcados `// DRAFT` y declarados en la entrega.
