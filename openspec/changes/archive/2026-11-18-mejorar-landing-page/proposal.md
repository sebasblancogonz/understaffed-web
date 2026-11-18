# Proposal

## Why

La tarea pide «mejorar la landing page» sin concretar el alcance. Se acota a tres carencias comprobables en el repositorio: la portada no dice qué hace falta para usar la app (plataformas, git, Claude Code con sesión), el flujo de «cómo funciona» no sigue el orden real de una tarea (la revisión aparece después de aprobar el código) y las capturas existen en claro y oscuro (`media/capturas/`) pero la web solo muestra una variante, sin seguir el tema del sistema.

## What Changes

- Corregir la sección «cómo funciona» para que sus pasos sigan el orden real: spec, aprobación de la spec, ejecución, revisión y aprobación del código.
- Añadir una sección «Requisitos» tras «Funciona en local», con solo lo que `PRODUCT.md` y el README de la app confirman: Windows y macOS, git 2.30 o posterior, Claude Code instalado y con sesión iniciada, y que la app no instala ninguno de los dos pero explica cómo hacerlo.
- Añadir «Requisitos» a la navegación y mantener las mismas secciones en español e inglés.
- Mostrar cada captura en la variante que corresponde al tema del sistema (claro u oscuro), en ambos idiomas, usando las capturas de `media/capturas/`.
- Textos nuevos o reescritos como borrador (`// DRAFT`) pendientes del redactor.
- No es **BREAKING**: no cambian rutas, idiomas ni metadatos.

Fuera de alcance: enlace de descarga, imagen Open Graph y URL pública (siguen como `TODO:`), nueva sección de Estado/coste, precios, métricas, testimonios, selector manual de tema, cambios al vídeo del hero y despliegue.

## Capabilities

### New Capabilities

Ninguna.

### Modified Capabilities

- `landing-content`: cambia el orden de secciones de la portada (se añade «Requisitos»), el flujo de «cómo funciona» y se añade el requisito de mostrar los requisitos de uso.
- `site-presentation`: se añade que las capturas siguen el tema del sistema.

## Impact

- Código: `src/components/sections/` (nuevo `Requirements.astro`, ajustes en `HowItWorks.astro` y `Header.astro` vía diccionario), `src/components/ui/Placeholder.astro`, `src/components/LandingPage.astro`.
- Textos: `src/i18n/types.ts`, `es.ts`, `en.ts` (claves nuevas en ambos).
- Activos: copiar a `src/assets/` las capturas claras y oscuras de `media/capturas/`; sustituir las actuales de una sola variante.
- Sin dependencias nuevas, sin JavaScript de cliente.
- Afecta a SEO solo en que `h2` y anclas aumentan en uno.
