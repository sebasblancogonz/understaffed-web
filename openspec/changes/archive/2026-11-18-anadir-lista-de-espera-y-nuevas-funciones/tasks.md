# Tasks

## 1. Datos y textos

- [x] 1.1 Sustituir `downloadUrl` por `waitlistUrl` (vacío, con `TODO:`) en `src/config.ts`; verificar con `Grep` que no queda ninguna referencia a `downloadUrl`
- [x] 1.2 Añadir a `Dict` las claves `status`, `groups`, `waitlist` y los bloques `local.sync` y `local.team`, y retirar `hero.ctaTodo`; rellenar `es.ts` y `en.ts` con `// DRAFT`; verificar que `pnpm astro check` pasa
- [x] 1.3 Revisar los textos contra `PRODUCT.md`: solo Claude Code; Windows y macOS; colaboración de las fases 1 y 2; sin servicio alojado; el coste no es un precio; «equipo» solo para personas; verificar con `Grep` sobre `src/i18n/`

## 2. Componentes

- [x] 2.1 `Button`: admitir `type="submit"` y `disabled` además de enlace; verificar el estilo deshabilitado en ambos temas
- [x] 2.2 `Section`: admitir el tono `surface` como franja a todo el ancho; `Placeholder`: admitir `loading` y `sizes`; verificar que el hero carga de inmediato
- [x] 2.3 Crear `Status.astro` y `Groups.astro`, y ampliar `LocalFirst.astro` con los bloques de ordenadores y equipo; verificar que no contienen cadenas de marketing escritas directamente
- [x] 2.4 Crear `Waitlist.astro` con el formulario, el `TODO:` del destino, el del aviso de privacidad y la confirmación en `#thanks`; verificar en `dist/` un solo `form`, el campo oculto `lang` y el botón `disabled`
- [x] 2.5 Cambiar la acción del hero a `#waitlist` y reorganizar `Header` con cinco enlaces; verificar a 360 px que no hay desplazamiento horizontal

## 3. Integración

- [x] 3.1 Componer el orden nuevo en `LandingPage.astro`; verificar en `dist/index.html` y `dist/en/index.html` el orden, que cada `href` de la navegación coincide con un `id`, que hay un solo `h1` y ningún `h3` sin `h2` previo
- [x] 3.2 Ejecutar `pnpm astro check` y `pnpm build`; verificar código 0, ningún `script` de aplicación y que solo la captura del hero carece de `loading="lazy"`
- [x] 3.3 Capturar la portada en escritorio y móvil, en claro y oscuro, y revisarla con impeccable
- [x] 3.4 Redactar la entrega: textos en borrador, las 16 capturas esperadas, el destino del formulario, el aviso de privacidad y lo que queda fuera
