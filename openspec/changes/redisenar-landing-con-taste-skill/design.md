# Design

## Context

Dirección `product-performs` de taste-skill (semilla 333130445), con las notas en `.taste-skill/notes.md`. La verdad de producto está en `PRODUCT.md`. Los textos y datos de los fragmentos salen de la app: `../understaffed/src/locales/es.json` y `en.json`, `../understaffed/src-tauri/src/catalog/mod.rs`, `../understaffed/src/features/team/RoleForm.tsx` y el README. Los datos de demostración son los de las capturas (proyecto storefront, grupo «Tienda online»).

## Decisions

- **Paleta:** se conservan los colores del tema (fondo, superficie, tinta y cobalto) con las proporciones de la paleta dealt: fondo neutro, un único color saturado en la acción y una sección entera de ese color. Se descarta el amarillo dealt porque el cobalto es el color propio de la marca y de todas las capturas.
- **Tipo:** Inter Variable, la letra de la interfaz de la app, como pide la propia hoja. JetBrains Mono solo dentro de `code` y `pre`. Cinco pasos de tamaño.
- **Motivo:** la marca es una U de siete puestos con un cuadrado (el agente). Fuera de los fragmentos las esquinas son cuadradas; los círculos quedan para personas.
- **Fragmentos de interfaz:** su raíz lleva `data-ui` y dentro rigen las convenciones de la app (radios de 6 a 12 px, bordes de 1 px). Ninguno se presenta como captura: llevan etiqueta de demostración cuando simulan algo.
- **Demostración del hero:** una máquina de estados con los estados reales (Backlog «Espera tu aprobación», Por hacer, En curso «En marcha», En revisión «Espera tu revisión», Integrando, Hecho).
  - Nada avanza sin pulsar; solo la ejecución avanza sola, como en la app.
  - «Pedir cambios» y «Devolver» muestran el texto real de la app.
  - El foco pasa a la siguiente acción y los cambios se anuncian en una región `aria-live`.
  - Sin JavaScript se ve la tarjeta esperando aprobación y los pasos escritos.
- **Pestañas y panel:** con JavaScript, `tablist` accesible y filas seleccionables. Sin él, los tres paneles uno tras otro y todas las filas con su detalle.
- **Entradas:** un `IntersectionObserver` bajo `html.js`, solo con `prefers-reduced-motion: no-preference`. El contenido nunca queda oculto si el script falla.
- **Formulario:** las palabras «Mi email es» son la `label` del campo. El campo es un bloque blanco sobre el cobalto, con contraste de 3:1 o más.

## Risks / Trade-offs

- [Dejar el estándar de la categoría] → Decisión del usuario, recogida en `PRODUCT.md`. Las capturas siguen siendo la interfaz real.
- [Datos de demostración que parezcan reales] → Son los de las capturas, con nombres y servidores de ejemplo, y el hero lo dice.
- [JavaScript en cliente] → Un solo script pequeño. Sin él, la página está completa.
