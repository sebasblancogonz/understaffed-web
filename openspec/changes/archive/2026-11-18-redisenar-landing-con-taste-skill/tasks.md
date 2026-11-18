# Tasks

## 1. Base

- [x] 1.1 Tokens (cinco tamaños, esquinas cuadradas, cobalto) y estilos globales; verificar con `lint.mjs` que no quedan filetes, cajas ni monoespaciada fuera de `code` y `pre`
- [x] 1.2 Textos nuevos en `types.ts`, `es.ts` y `en.ts` con `// DRAFT`; verificar que `pnpm astro check` pasa con las mismas claves en los dos idiomas
- [x] 1.3 Script de cliente: clase `js`, demostración del hero, pestañas, panel y entradas; verificar que sin JavaScript todo el contenido es visible

## 2. Secciones

- [x] 2.1 Hero con la marca, el titular, «Pedir acceso» y el fragmento del tablero; verificar el recorrido completo, la región `aria-live` y el foco
- [x] 2.2 Cómo funciona (tres intercambios); requisitos como tablero; Estado del grupo; roles con notas; local y cuenta en pestañas; lista de espera en una frase; pie en una línea
- [x] 2.3 Verificar en `dist/` el orden de secciones, un solo `h1`, un solo `form`, el campo oculto `lang`, el botón deshabilitado y los `href` del pie

## 3. Comprobaciones

- [x] 3.1 `pnpm astro check` y `pnpm build` sin errores
- [x] 3.2 `lint.mjs` e `inspect.mjs` de taste-skill sobre `/` y `/en/` sin FAIL; capturas a 360 px y en oscuro
- [x] 3.3 Crítica con `references/critique.md`, como mucho tres rondas
- [x] 3.4 Actualizar `PRODUCT.md` (decisión de diseño y afirmaciones nuevas con su fuente) y redactar la entrega
