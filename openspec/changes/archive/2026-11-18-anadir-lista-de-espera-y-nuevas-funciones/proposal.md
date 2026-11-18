# Proposal

## Why

`PRODUCT.md` fija desde el 2026-11-18 que Understaffed se lanza con lista de espera (acceso anticipado, sin instalador público) y que la web puede anunciar cuatro funciones que la portada aún no cuenta: la vista Estado, los grupos de proyectos, la sincronización entre ordenadores y la colaboración entre personas. La portada actual ofrece «Descargar» con un enlace que no existirá y solo explica el flujo básico. El brief confirmado con el usuario amplía la página sin cambiar su mundo visual: primero el trabajo de una persona con sus agentes y, después, sus ordenadores y su equipo.

## What Changes

- **BREAKING (contenido):** la acción principal del hero deja de ser «Descargar» y pasa a «Apuntarme a la lista de espera», que lleva a la nueva sección de cierre. Se retiran `config.downloadUrl` y el texto `ctaTodo`.
- Nueva sección **Estado** tras «Aprobaciones»: lo que espera tu decisión, lo que está en marcha, la actividad y el coste por rol, con su captura.
- Nueva sección **Grupos de proyectos**: Estado conjunto, equipo compartido y funcionalidades que reparten tareas entre repositorios, con su captura.
- La sección **En local** se amplía a «En local, y con cuenta si la quieres», con dos bloques: tus ordenadores (sincronizar) y tu equipo (colaborar), cada uno con su captura.
- Nueva sección **Lista de espera** al final: un único formulario sin JavaScript que pide solo el email y envía el idioma de la página en un campo oculto. El destino es `config.waitlistUrl`; mientras esté vacío, se ve un `TODO:` y el botón está deshabilitado. Hay una confirmación opcional en `#thanks` que se muestra con CSS si el servicio redirige allí, y un hueco `TODO:` para el aviso de privacidad.
- La navegación pasa a cinco enlaces (Cómo funciona, Estado, Local y cuenta, Requisitos, Lista de espera). En móvil, la marca y el cambio de idioma comparten la primera fila.
- Las capturas por debajo del hero se cargan en diferido. Se añade un color de borde para campos con contraste 3:1, el cursor de texto en cobalto y la selección de texto tintada con el acento.
- Todos los textos nuevos o reescritos van marcados `// DRAFT`.

Fuera de alcance: el servicio que recibe los emails, el texto legal, las 16 capturas nuevas (las aporta el usuario), la imagen Open Graph, la URL pública, la marca y el favicon, el vídeo del hero y rutas nuevas.

## Capabilities

### New Capabilities

Ninguna.

### Modified Capabilities

- `landing-content`: orden de secciones, acción principal del hero, secciones Estado, Grupos y la ampliación de En local, lista de espera y límites de lo que se puede afirmar.
- `site-presentation`: formulario accesible sin JavaScript, contraste de los campos y carga diferida de las capturas.

## Impact

- **Código:**
  - `src/config.ts`;
  - `src/i18n/{types,es,en}.ts`;
  - `src/components/LandingPage.astro`;
  - en `src/components/sections/`: `Header`, `Hero` y `LocalFirst`, más las nuevas `Status`, `Groups` y `Waitlist`;
  - en `src/components/ui/`: `Button`, `Section` y `Placeholder`;
  - `src/styles/{tokens,global}.css`.
- **Activos:** se esperan `{estado,grupos,sincronizacion,colaboracion}-{es,en}-{light,dark}.png` en `src/assets/`. Hasta entonces se ven los marcadores `TODO:`.
- **No publicable** hasta tener destino del formulario, aviso de privacidad y capturas.
- Sin dependencias nuevas ni JavaScript de cliente.
