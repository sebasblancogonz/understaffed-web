# Dar a la landing un estilo propio

## Why

El rediseño al estilo SaaS se parece demasiado a la portada de Notion. Comparten el titular negro muy pesado y centrado, el botón azul con otro secundario al lado, la píldora pastel con un círculo y la ventana de la app con un tablero kanban debajo. El usuario pide además etiquetas de color más claras, con círculos en lugar de cuadrados, y una cabecera que ocupe todo el ancho de la ventana.

## What Changes

- Las etiquetas de rol pasan a colores pastel más claros, con un círculo en lugar del cuadrado. Lo mismo vale para los marcadores de color del resto de la página (títulos de tarjeta, viñetas, pies de captura). Los fragmentos de la app (`data-ui`) conservan sus cuadrados de rol, porque son la interfaz real.
- Los titulares usan una tipografía propia, Bricolage Grotesque, alojada en el sitio y con eje de tamaño óptico. Inter sigue en el texto y en los fragmentos de la app.
- Los botones de la web pasan a forma de píldora.
- La demostración del hero se apoya sobre un escenario de color pastel en lugar de flotar sobre el blanco.
- Los encabezados de sección se alinean a la izquierda, con la entradilla a su derecha en escritorio. El hero y la banda de la lista de espera siguen centrados.
- La cabecera ocupa todo el ancho de la ventana, con el margen lateral de la página.

## Impact

- Specs: `site-presentation` (Acento único y Tipografías alojadas, modificados; Cabecera a todo el ancho, nuevo).
- Código: `tokens.css`, `global.css`, `Base.astro`, las secciones y `package.json` (nueva dependencia `@fontsource-variable/bricolage-grotesque`).
- Documentación: `DESIGN.md`, su anexo y la decisión de marca de `PRODUCT.md`.
