# Segunda pasada de la crítica

## Why

La segunda crítica de diseño (24 de 32) deja dos problemas mayores. La demostración deja aprobar sin enseñar qué se aprueba, justo lo contrario de lo que promete el producto. Y varias capturas se muestran a un tercio de su tamaño, con el texto a 7 o 9 px. Además, Roles confunde a quién habla y la página termina plana tras apuntarse.

## What Changes

- **Demostración**: la tarjeta enseña los criterios de aceptación de la spec antes de aprobarla y los archivos cambiados antes de aprobar el código. «Pedir cambios» y «Devolver» dejan una nota en la tarjeta. Las pistas dicen qué hacer en cada paso.
- **Capturas**: recortes de 700 px en Cómo funciona y LocalFirst, con un diff real en la tercera tarjeta. Estado pasa a tres filas, recorte y pie, con las franjas a su tamaño.
- **Roles**: las plantillas son una lista con sus instrucciones entre comillas, la de backend marcada, y el diálogo lleva pie.
- **Lista de espera**: la confirmación repite la dirección, conserva el alto de la banda y permite usar otro email. El botón conserva el foco mientras envía y el buzón del fallo es un enlace.
- **Detalles**: OpenSpec explicado donde se nombra, línea bajo la cabecera fija, contornos y subrayados visibles, medida de los párrafos pequeños y comillas según el idioma.
- `PRODUCT.md` deja de listar las ejecuciones en paralelo como pendientes: la app ya las hace.

## Impact

- Specs: `landing-content` (Demostración de las aprobaciones, Roles, Lista de espera y Vista Estado, modificados; Capturas legibles, nuevo) y `site-presentation` (Formulario de la lista de espera accesible, modificado).
- Código: `Demo.astro`, `Status.astro`, `Roles.astro`, `Waitlist.astro`, `Header.astro`, `Requirements.astro`, `global.css`, `landing.ts` y los textos.
- Recursos: recortes nuevos de `aprobacion-spec`, `sincronizacion-ordenadores`, `colaboracion-equipo` y `tablero-sin-cuenta`; `revision-diff` sustituye a `revision-acciones`.
- Documentación: `DESIGN.md`, `.impeccable/design.json` y `PRODUCT.md`.
