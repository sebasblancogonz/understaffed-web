# Mejorar la portada tras la crítica

## Why

La crítica de diseño del 2026-11-18 (19 de 32) encontró, además del formulario ya resuelto en `conectar-lista-de-espera`, que la prueba de la sección Estado no se podía leer (una captura de 1440 × 900 mostrada a 689 px, y a 356 px en móvil), que el editor de Roles tenía campos reales junto a botones que no hacían nada y ocupaba unos 1.150 px en móvil, y que por debajo de 64rem no había navegación ni «Pedir acceso» a mano en una página de unas doce pantallas.

## What Changes

- **Estado** enseña tres recortes de la captura real, cada uno con su pie: la lista «Espera tu decisión», la franja «En marcha» y la franja «Coste por rol». En pantallas estrechas el recorte conserva un ancho que se lee y su marco se desplaza de lado.
- **Roles** enseña el diálogo de contratar como una imagen, sin controles ni textos de ayuda. En móvil pasa de unos 1.150 px a unos 600.
- **Requisitos** junta Windows y macOS en una ficha y enlaza Claude Code, Git y OpenSpec a sus páginas.
- **Cabecera** fija arriba. Por debajo de 64rem lleva un menú con las secciones y el idioma.
- **Demostración**: al terminar ofrece «Pedir acceso». Con el dedo, sus acciones miden 44 px.
- La etiqueta «QA» del hero pasa a «Analista», que sí es una plantilla de la app. Las etiquetas de la banda conservan sus colores claros en el tema oscuro, y la sombra de la tarea de la demostración sigue al color del tema.

## Impact

- Specs: `landing-content` (Navegación, Requisitos de uso, Vista Estado y Roles, modificados) y `site-presentation` (Rendimiento y JavaScript y Cabecera a todo el ancho, modificados; Controles táctiles, nuevo).
- Código: `Status.astro`, `Roles.astro`, `Requirements.astro`, `Header.astro`, `Footer.astro`, `Demo.astro`, `Waitlist.astro`, `landing.ts` y los textos.
- Recursos: los recortes `estado-decision` y `estado-en-marcha`, en las cuatro variantes, sacados de la captura `grupos`.
- Documentación: `DESIGN.md` y `.impeccable/design.json`.
