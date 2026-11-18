# Proposal

## Why

El usuario fijó las referencias de la web el 2026-11-18: las webs de producto de Craft, Notion, Dub y monday.com, con mucho color, al estilo de monday y Craft. De tres propuestas generadas aprobó la A: `.impeccable/mocks/comp-a-centrado.png`. La versión con taste-skill, que evitaba precisamente esos patrones, queda sustituida.

## What Changes

- **BREAKING (presentación):**
  - Vuelve la barra de navegación: la marca, cuatro enlaces, «English» y el botón «Pedir acceso».
  - Esquinas redondeadas y sombras suaves.
  - Una paleta de cinco colores de rol junto al cobalto: lila, naranja, verde, rosa y amarillo.
- **Hero centrado:**
  - un titular grande en dos líneas, la frase y dos botones («Pedir acceso» y «Ver cómo funciona»);
  - etiquetas de roles de colores alrededor;
  - una ventana grande de la app con el tablero completo.
  - La demostración se conserva: la tarjeta #4 lleva sus acciones y solo avanza cuando el visitante pulsa.
- **Secciones en el mundo del comp:**
  - Cómo funciona: tres tarjetas de color con la spec, la ejecución y la revisión.
  - Estado del grupo: texto y la ventana con la captura.
  - Roles: las plantillas como tarjetas de color, más el editor de la app.
  - Local, cuenta y equipo: tres tarjetas, cada una con una captura real o un recorte de una.
  - Requisitos: una franja de herramientas.
  - Lista de espera: una banda de color con el formulario (email y botón).
  - Pie con columnas.
- Se mantienen los textos verificados, los datos de demostración, el formulario y sus estados, los dos idiomas, el tema claro y oscuro, y el comportamiento sin JavaScript.

## Capabilities

### Modified Capabilities

- `landing-content`: secciones y navegación, hero, demostración, local y cuenta, lista de espera.
- `site-presentation`: uso del color.

## Impact

- **Código:** los componentes de `src/components/`, `src/i18n/*`, `src/styles/*` y `src/scripts/landing.ts`.
- **Activos:** sin activos nuevos. El comp aprobado vive en `.impeccable/mocks/`, con su prompt incrustado.
- **No publicable** hasta tener el destino del formulario, el aviso de privacidad, `og.png` y la URL.
