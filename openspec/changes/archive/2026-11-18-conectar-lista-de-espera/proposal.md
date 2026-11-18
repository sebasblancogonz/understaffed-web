# Conectar la lista de espera

## Why

La crítica de diseño del 2026-11-18 encontró que la única conversión de la portada no se podía completar: el formulario no tenía destino, el botón estaba deshabilitado pero parecía activo y se veían dos líneas `TODO:`. Además solo tenía dos de sus cinco estados: el error era un contorno sin texto, no había estado de envío ni de fallo, y la confirmación se veía con solo abrir `/#thanks`.

## What Changes

- El formulario envía el email y el idioma a la ruta de la lista de espera del servidor de Understaffed (`POST /v2/waitlist`, en JSON), que avisa por correo al buzón de la lista. El servidor no guarda la lista: la lista es el buzón.
- El envío lo hace el script de la portada. Sin JavaScript, en lugar del formulario se ve cómo apuntarse por correo.
- El formulario tiene todos sus estados: un error con texto bajo el campo (vacío, email que no vale, demasiados intentos o fallo del envío), el botón «Enviando…» mientras envía, y la confirmación, que sustituye al título y a la frase de la banda y recibe el foco. Un error conserva lo escrito.
- Desaparece la confirmación por el fragmento `#thanks`.
- Los `TODO:` del destino y del aviso de privacidad se sustituyen por un aviso de privacidad en borrador con el buzón de contacto. Sin destino configurado, el build falla.

## Impact

- Specs: `landing-content` (Lista de espera, modificado) y `site-presentation` (Formulario accesible sin JavaScript, sustituido por Formulario de la lista de espera accesible; Rendimiento y mejora progresiva no cambia).
- Código: `config.ts`, `Waitlist.astro`, `landing.ts` y los textos de `es.ts`, `en.ts` y `types.ts`.
- Fuera de este repositorio: la ruta `POST /v2/waitlist` del servidor (`understaffed/server`), que hay que desplegar con `--waitlist-to`.
- Documentación: `DESIGN.md` y las decisiones pendientes de `PRODUCT.md`.
