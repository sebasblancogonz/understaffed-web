# Tasks

## 1. Capturas según el tema

- [x] 1.1 Copiar a `src/assets/` las 12 capturas de `media/capturas/` y retirar las seis de una sola variante; verificar con `Glob` que existen `{tablero,revision,aprobacion}-{es,en}-{light,dark}.png` y que las dos variantes de cada una tienen las mismas dimensiones (si no, anotarlo para la entrega)
- [x] 1.2 Adaptar `Placeholder.astro` para emitir `<picture>` con `<source media="(prefers-color-scheme: dark)">` y `<img>` clara con `width`, `height` y `alt`, y el marcador `TODO:` con el nombre del archivo que falta si falta una variante; verificar en `dist/` que cada `picture` tiene ambas fuentes y que quitar una captura de `src/assets/` no rompe `pnpm build`
- [x] 1.3 Actualizar las claves `shot.file` de `types.ts`, `es.ts` y `en.ts` al nombre base y el idioma; verificar que `pnpm astro check` pasa y que `/en/` referencia solo archivos `-en-`
- [ ] 1.4 Comprobar en navegador, en claro y en oscuro, que la captura mostrada cambia con el tema y que en las peticiones de red no se descarga la variante del otro tema; verificar sin saltos de diseño (CLS ≤ 0,1)

## 2. Flujo de «cómo funciona»

- [x] 2.1 Reescribir `how.steps` en `es.ts` y `en.ts` con el orden spec, aprobación de la spec, ejecución, revisión y aprobación del código, marcados `// DRAFT`, sin nuevas funciones; verificar con una revisión de los textos que aparecen «roles», «tareas», «tablero», «revisión» y «spec» (y equivalentes en inglés) y que la revisión precede a la aprobación del código
- [ ] 2.2 Ajustar el `grid` de `HowItWorks.astro` al número de pasos resultante; verificar a 360 px, 768 px y 1280 px que no hay scroll horizontal

## 3. Sección de requisitos

- [x] 3.1 Añadir la clave `requirements` a `Dict` y a `es.ts` y `en.ts` (Windows y macOS, git 2.30 o posterior, Claude Code con sesión iniciada, la app no los instala pero explica cómo), `// DRAFT`; verificar que `pnpm astro check` falla si se quita la clave de un idioma
- [x] 3.2 Crear `src/components/sections/Requirements.astro` a partir de `LocalFirst.astro`, con `git` y `claude` en `<code>`; verificar que el componente no contiene cadenas de marketing escritas directamente
- [x] 3.3 Insertarla en `LandingPage.astro` tras `LocalFirst` y añadir su entrada a `nav.items`; verificar en `dist/index.html` y `dist/en/index.html` el orden de secciones, que el `href` del enlace coincide con el `id` y que hay un solo `h1` y ningún `h3` sin `h2` previo
- [x] 3.4 Verificar que el HTML generado no nombra otros sistemas operativos ni otros CLI de IA como compatibles, ni precios o métricas (`Grep` sobre `dist/`)

## 4. Integración

- [x] 4.1 Ejecutar `pnpm astro check` y `pnpm build` y verificar código 0 sin avisos nuevos
- [ ] 4.2 Ejecutar Lighthouse en móvil sobre `/` y `/en/` y verificar 95 o más en las cuatro categorías, sin `script` de aplicación en el HTML
- [ ] 4.3 Revisar con la skill impeccable la portada en móvil (360 px) y escritorio, en claro y oscuro, y adjuntar capturas a la entrega
- [x] 4.4 Redactar la entrega: secciones cambiadas, textos en borrador, huecos pendientes (enlace de descarga, imagen Open Graph, URL pública) y lo que queda fuera
