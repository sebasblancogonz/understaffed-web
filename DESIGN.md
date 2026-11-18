---
name: Understaffed (web)
description: Portada SaaS colorida y amable de una app de escritorio que dirige un equipo de agentes de IA; el producto se demuestra en un tablero interactivo.
colors:
  accent: "#0031e6"
  accent-hover: "#0028bd"
  on-accent: "#ffffff"
  brand: "#2f5bea"
  on-brand: "#ffffff"
  bg: "#ffffff"
  surface: "#f1f4f6"
  surface-2: "#e9ecf0"
  ink: "#0d1017"
  muted: "#5b6474"
  border: "#e3e6eb"
  field-border: "#7c8494"
  lilac: "#e0bffc"
  lilac-ink: "#7909dd"
  lilac-soft: "#f4eafe"
  orange: "#fecd9f"
  orange-ink: "#fe6403"
  orange-soft: "#fff1e4"
  green: "#c6fad8"
  green-ink: "#04b61c"
  green-soft: "#e9fdf0"
  pink: "#fec0de"
  pink-ink: "#fb0579"
  pink-soft: "#ffeef6"
  yellow: "#fee4a2"
  yellow-ink: "#fcab01"
  yellow-soft: "#fff7e0"
  accent-dark: "#5b7fff"
  accent-hover-dark: "#7895ff"
  on-accent-dark: "#0d1017"
  brand-dark: "#5b7fff"
  on-brand-dark: "#0d1017"
  bg-dark: "#0d1017"
  surface-dark: "#161a22"
  surface-2-dark: "#1f2430"
  ink-dark: "#eceef2"
  muted-dark: "#9aa3b2"
  border-dark: "#262d39"
  field-border-dark: "#6b7383"
  lilac-dark: "#4b2a86"
  lilac-ink-dark: "#c99cff"
  lilac-soft-dark: "#1f1730"
  orange-dark: "#7a3912"
  orange-ink-dark: "#ff9a5a"
  orange-soft-dark: "#251a12"
  green-dark: "#14603a"
  green-ink-dark: "#4ae07a"
  green-soft-dark: "#12241a"
  pink-dark: "#7d1d4d"
  pink-ink-dark: "#ff6fb1"
  pink-soft-dark: "#26141d"
  yellow-dark: "#6e5310"
  yellow-ink-dark: "#ffc94d"
  yellow-soft-dark: "#231e10"
  band: "#0031e6"
  on-band: "#ffffff"
  on-band-muted: "#dfe6ff"
  on-band-danger: "#ffb4ab"
  band-ink: "#0d1017"
  band-ink-hover: "#232937"
typography:
  display:
    fontFamily: "'Inter Variable', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(2.75rem, 1rem + 4.15vw, 4.75rem)"
    fontWeight: 850
    lineHeight: 1.04
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "'Inter Variable', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(2rem, 1.1rem + 3.2vw, 3.75rem)"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  title:
    fontFamily: "'Inter Variable', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(1.25rem, 1.1rem + 0.5vw, 1.5rem)"
    fontWeight: 750
    lineHeight: 1.08
    letterSpacing: "-0.02em"
  lead:
    fontFamily: "'Inter Variable', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(1.125rem, 1rem + 0.5vw, 1.375rem)"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "'Inter Variable', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(1rem, 0.95rem + 0.2vw, 1.125rem)"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "'Inter Variable', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.55
  action:
    fontFamily: "'Inter Variable', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 650
    lineHeight: 1.55
  ui-body:
    fontFamily: "'Inter Variable', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1.4
  ui-meta:
    fontFamily: "'Inter Variable', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.4
  mono:
    fontFamily: "'JetBrains Mono Variable', ui-monospace, 'Cascadia Code', Menlo, monospace"
    fontSize: "0.875em"
rounded:
  sm: "10px"
  md: "14px"
  lg: "24px"
  xl: "32px"
  ui: "6px"
  ui-tab: "8px"
  ui-column: "12px"
  pill: "999px"
spacing:
  margin: "clamp(1rem, 0.4rem + 2.4vw, 2.5rem)"
  section: "clamp(5rem, 3rem + 6vw, 9rem)"
  container: "80rem"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.md}"
    padding: "0.75rem 1.5rem"
    height: "3rem"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
  button-secondary:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "0.75rem 1.5rem"
    height: "3rem"
  button-secondary-hover:
    backgroundColor: "{colors.surface}"
  button-large:
    padding: "0.75rem 1.75rem"
    height: "3.0625rem"
  tag-role:
    backgroundColor: "{colors.lilac}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.4rem 0.9rem 0.4rem 0.7rem"
  card-tone:
    backgroundColor: "{colors.lilac-soft}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "clamp(1.5rem, 1rem + 1.5vw, 2rem)"
  window:
    backgroundColor: "{colors.bg}"
    rounded: "{rounded.lg}"
  shot-frame:
    backgroundColor: "{colors.bg}"
    rounded: "{rounded.md}"
  requirement-tile:
    backgroundColor: "{colors.bg}"
    rounded: "{rounded.md}"
    padding: "1.25rem"
  ui-button-primary:
    backgroundColor: "{colors.brand}"
    textColor: "{colors.on-brand}"
    rounded: "{rounded.ui}"
    padding: "0.5rem 1rem"
    height: "2.25rem"
  ui-field:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.ink}"
    rounded: "{rounded.ui}"
    padding: "0.5rem 0.75rem"
    height: "2.25rem"
---

# Design System: Understaffed (web)

## Overview

**Creative North Star: "El tablero a la vista"**

La web es la portada de un producto SaaS en la línea de Craft, Notion, Dub y monday.com: fondo blanco, mucho aire, titulares de Inter muy pesada y centrados, y el producto enseñado a lo grande dentro de ventanas blancas redondeadas con sombra suave. No describe el producto, lo demuestra. En el hero, el tablero de la app es interactivo: la tarea #6 espera tu aprobación en Backlog y solo avanza cuando el visitante pulsa. (El contrato de dirección habla de la tarea #4; en el build la #4 está quieta en «En revisión» con «Espera tu revisión» y la tarea interactiva es la #6.)

El color es doble y está repartido con intención. El cobalto (`accent`) es la acción: botones principales, foco, selección, la banda de la lista de espera. Los cinco colores de rol (lila, naranja, verde, rosa y amarillo) son la parte amable y colorida: etiquetas de rol en forma de píldora con su cuadrado de agente, y tarjetas de fondo suave. El cuadrado viene de la marca (siete puestos en U: seis círculos son personas y el cuadrado es el agente) y es el motivo gráfico que se repite en todo el sistema.

Hay dos lenguajes en la página. Fuera de los fragmentos de interfaz rige el lenguaje de marketing: esquinas de 14 a 24 px, botones grandes, colores de rol. Dentro de los fragmentos marcados con `data-ui` rigen las convenciones de la app: su cobalto propio (`brand`), radios pequeños (6 a 12 px), bordes de 1 px, sus textos reales y sus datos de demostración (proyecto storefront). La densidad general es baja y la página sigue completa sin JavaScript.

**Key Characteristics:**
- Hero centrado con titular en dos líneas, frase gris, dos botones y la ventana de la app debajo, casi a todo el ancho y cortada por el borde inferior.
- Cobalto para la acción; cinco colores de rol para etiquetas y tarjetas.
- El cuadrado del agente como marcador: en la etiqueta, antes del título de tarjeta, en las viñetas y en los pies de figura.
- Capturas reales de la app, en el idioma y el tema de la página.
- Tema claro y oscuro por `prefers-color-scheme`, sin conmutador.
- Las entradas y la demostración solo mejoran una página que ya está completa.

## Colors

Fondo blanco y tinta casi negra, un cobalto intenso para la acción y cinco pares de colores de rol vivos y suaves. Cada valor oscuro está en la clave `*-dark` del frontmatter; el tema cambia solo con `prefers-color-scheme`.

### Primary
- **Cobalto de acción** (`accent`): botón principal, contorno de foco (3 px, separado 3 px), selección de texto al 22 % y cursor de los campos. También el cuadrado de la marca en `Mark` y el cuadrado del pie «Espera tu decisión» en Estado. Al pasar el ratón se oscurece a `accent-hover`. En oscuro se aclara para mantener contraste y el texto sobre él pasa a tinta.
- **Cobalto de la app** (`brand`): solo dentro de los fragmentos `data-ui`. Pinta las píldoras de estado («Espera tu aprobación»), los botones principales de la app, el interruptor activo, el borde de la tarjeta que espera aprobación y el cuadrado de cada rol en las tarjetas del tablero. En claro es distinto del cobalto de acción; en oscuro los dos valen lo mismo.

### Secondary
- **Los cinco colores de rol**, cada uno en tres tonos:
  - **Tono** (`lilac`, `orange`, `green`, `pink`, `yellow`): el fondo de la etiqueta de rol.
  - **Tinta** (`*-ink`): el cuadrado del agente, en la etiqueta, antes de un título o como viñeta.
  - **Suave** (`*-soft`): el fondo de una tarjeta de color.
  - Se aplican siempre por la clase de tono (`tone-lilac`, etc.), que define `--tone`, `--tone-ink` y `--tone-soft` a la vez.
  - El reparto que usa el build: Backend lila, QA verde, Tester amarillo, Frontend naranja, Full-stack rosa.

### Neutral
- **Blanco papel** (`bg`): fondo de página, de ventanas, de marcos de captura y de las fichas de requisitos.
- **Gris niebla** (`surface`): fondo de la sección Estado y del botón secundario al pasar el ratón.
- **Gris niebla profundo** (`surface-2`): hueco de una captura que falta.
- **Tinta** (`ink`): texto, titulares y el texto de las etiquetas de rol.
- **Gris pizarra** (`muted`): frases de entrada, textos de tarjeta, enlaces de navegación y pies.
- **Línea** (`border`): borde de ventanas y fichas, contorno del botón secundario (2 px por dentro) y separador del pie.
- **Línea de campo** (`field-border`): bordes de campos y botones dentro de `data-ui`, y el interruptor apagado.

### Banda de la lista de espera
- **Banda** (`band`, `on-band`, `on-band-muted`, `on-band-danger`, `band-ink`, `band-ink-hover`): la banda es cobalto en los dos temas, así que tiene sus propios colores y no cambia en oscuro. El texto secundario va en `on-band-muted`, el contorno de error del campo en `on-band-danger` y el botón de envío en `band-ink`.

### Named Rules
**La regla de las dos voces.** El cobalto de acción pide algo al visitante; los colores de rol nombran o agrupan. Un color de rol nunca es un botón, y el cobalto nunca es el fondo de una tarjeta de contenido.

**La regla del cobalto propio.** Dentro de `data-ui` el azul es `brand`, nunca `accent`. Así un fragmento de la app se ve igual que en la app.

**La regla del trío.** Un color de rol nunca se usa suelto: tono, tinta y suave van juntos por su clase `tone-*`.

## Typography

**Display Font:** Inter Variable (con system-ui, -apple-system y Segoe UI)
**Body Font:** Inter Variable
**Label/Mono Font:** JetBrains Mono Variable (con ui-monospace, Cascadia Code y Menlo), solo para rutas, comandos y código

**Character:** una sola familia en pesos muy altos (750 a 850) para titulares compactos y amables, y en 400 o 500 para el texto. El contraste está en el peso y el tamaño, no en un cambio de familia.

### Hierarchy
- **Display** (850, `clamp(2.75rem, 1rem + 4.15vw, 4.75rem)`, interlineado 1.04, -0.02em): solo el h1 del hero, en dos líneas forzadas.
- **Headline** (800, `clamp(2rem, 1.1rem + 3.2vw, 3.75rem)`, 1.08, -0.025em): el h2 de cada sección. En la banda de la lista de espera sube a 850 con -0.035em.
- **Title** (750, `clamp(1.25rem, 1.1rem + 0.5vw, 1.5rem)`, -0.02em): títulos de tarjeta, pies de figura, fichas de requisitos y etiquetas de LocalFirst.
- **Lead** (400, `clamp(1.125rem, 1rem + 0.5vw, 1.375rem)`): la frase gris bajo el h1 y bajo cada h2, hasta 40 o 46rem de ancho.
- **Body** (400, `clamp(1rem, 0.95rem + 0.2vw, 1.125rem)`, 1.55): texto corrido.
- **Label** (500, 0.875rem): leyendas, textos secundarios y todo el interior de `data-ui`.
- **UI body / UI meta** (0.8125rem / 0.75rem): solo dentro de la demostración del tablero, como en la app, con números tabulares; el bloque de código de «Cómo funciona» usa también 0.8125rem.
- **Action** (650, 1.1875rem, `--step-action`): el texto de los botones grandes (`.button.large`) del hero y de la lista de espera, como en el comp.

Todos los titulares llevan `text-wrap: balance` y los párrafos `text-wrap: pretty`. Los botones de marketing van en 650; los enlaces de navegación en 500 y gris.

### Named Rules
**La regla del peso.** Los titulares de marketing nunca bajan de 750. Los títulos dentro de `data-ui` usan los pesos de la app (600 y 650), no los de la web.

**La regla de la monoespaciada.** JetBrains Mono solo aparece en rutas, comandos y código, nunca como tono decorativo.

## Layout

- **Contenedor:** una sola columna centrada de hasta `container`, con márgenes laterales fluidos (`margin`). Cada sección respira `section` arriba y abajo. Requisitos y la lista de espera solo llevan el relleno inferior, porque siguen a una sección con aire propio.
- **Encabezado de sección:** siempre centrado, hasta 46rem, con h2 y frase gris.
- **Rejillas:** el contenido arranca `clamp(2.5rem, 1.5rem + 3vw, 4rem)` por debajo del encabezado. Las rejillas de tarjetas separan sus elementos 1.25rem.
  - En móvil todo va en una columna.
  - Desde 64rem, Cómo funciona y LocalFirst pasan a tres columnas iguales.
  - Desde 64rem, Roles reparte `1fr` y `27rem` entre las plantillas y el editor.
  - Desde 64rem, Estado reparte `1.45fr` y `1fr` entre sus dos figuras.
  - Requisitos usa dos columnas y pasa a cinco desde 48rem.
- **Hero:** el titular, la frase y los botones van centrados. Las cinco etiquetas de rol forman una fila bajo los botones; desde 72rem flotan alrededor del titular, tres a la izquierda y dos a la derecha, giradas entre -9° y 3°. La ventana del tablero va debajo a todo el ancho del contenedor.
- **Demo del tablero:**
  - La barra lateral aparece desde 60rem.
  - La altura es fija: 25rem en móvil y 28rem desde 60rem.
  - Desde 72rem se ven las cinco columnas; por debajo, la pista se desplaza para seguir a la tarea.
- **Cabecera:** desde 64rem, una rejilla `1fr auto 1fr` con la marca, los cuatro enlaces centrados, English y «Pedir acceso». Por debajo, los enlaces se ocultan.
- **Ancho mínimo:** la página se lee desde 360 px. Por debajo de 30rem, los botones del hero ocupan todo el ancho y el enlace de idioma se acorta a partir de 24rem.

## Elevation & Depth

Es un sistema híbrido. Las superficies de contenido (las tarjetas de color) son planas y se separan por su fondo suave. Las piezas que enseñan el producto (ventanas, marcos de captura y fichas) flotan sobre sombras grandes, difusas y de poca opacidad. En oscuro las sombras se vuelven más densas y pasan a negro puro (los valores están en el sidecar).

### Shadow Vocabulary
- **Sombra de ventana** (`--shadow-lg`): la ventana del tablero en el hero, el editor de rol, las capturas de Estado. Es la que dice «esto es la app».
- **Sombra de marco** (`--shadow-sm`): marcos de captura dentro de una tarjeta de color y fichas de requisitos.

### Named Rules
**La regla de la tarjeta plana.** Una tarjeta de color nunca lleva sombra; la sombra es para lo que enseña la app.

## Shapes

- **Esquinas:** amables y redondeadas, en tres pasos.
  - `rounded.sm` para el enlace de saltar al contenido.
  - `rounded.md` para botones, campos de marketing, marcos de captura y fichas.
  - `rounded.lg` para tarjetas de color y ventanas.
  - Las etiquetas de rol son píldoras completas.
  - La banda de la lista de espera es la única pieza con 32 px (`rounded.xl`, `--radius-xl`).
- **Dentro de `data-ui`:** radios de la app. 6 px en campos y botones, 8 px en pestañas y en el elemento activo de la barra lateral, 10 px en las tarjetas del tablero y 12 px en sus columnas. Los bordes son de 1 px.
- **El cuadrado del agente:** sin redondeo, siempre. Mide 0.85em en la etiqueta, 0.7em antes de un título o pie y 0.6em como viñeta. Es la única forma recta de la página y por eso se reconoce.
- **Recortes:** las ventanas y los marcos recortan su contenido (`overflow: hidden`), así que la captura hereda la esquina del marco.

## Components

### Buttons
Los botones son grandes y firmes, y se hunden un poco al pulsarlos.
- **Shape:** esquina media (`rounded.md`), altura mínima de 3rem.
- **Primary:** fondo cobalto de acción, texto `on-accent`, peso 650.
- **Hover / Focus:** con puntero fino, el fondo pasa a `accent-hover` en 180 ms. Al pulsar baja a `scale(0.97)` en 140 ms con `--ease-out`. El foco es el contorno global de cobalto de 3 px.
- **Secondary:** fondo `bg` y texto `ink`, con un contorno interior de 2 px en `border`. Al pasar el ratón el fondo pasa a `surface`.
- **Large:** en el hero, 3.0625rem de alto, 1.75rem de relleno lateral y 1.1875rem de letra. En la cabecera, el botón baja a 2.75rem.

### Chips (etiquetas de rol)
- **Style:** píldora del color de rol (`--tone`) con texto en tinta, peso 700, y un cuadrado de 0.85em en `--tone-ink` delante.
- **Uso:** nombran un rol. Flotan giradas en el hero y en la banda de la lista de espera (con `aria-hidden`, porque son decoración) y van rectas en las plantillas de Roles.

### Cards / Containers
- **Tarjeta de color:** esquina `rounded.lg`, fondo `--tone-soft`, plana, relleno `clamp(1.5rem, 1rem + 1.5vw, 2rem)`. El título va precedido del cuadrado de 0.7em en `--tone-ink`, no de una etiqueta. La imagen se ancla al pie con `margin-top: auto`, para que todas las tarjetas de una fila alineen sus capturas.
- **Ventana:** borde de 1 px en `border`, esquina `rounded.lg`, fondo `bg` y sombra de ventana. Contiene la demo, el editor de rol y las capturas de Estado.
- **Marco de captura:** esquina `rounded.md`, fondo `bg` y sombra de marco. Su proporción es la del recorte: 16:10 en Cómo funciona, 4:3 en LocalFirst y la natural (1159:186) en la franja del coste.
- **Ficha de requisito:** borde de 1 px, esquina `rounded.md`, sombra de marco y texto centrado (título y una línea gris).
- **Banda de la lista de espera:** cobalto `#0031e6` fijo en los dos temas, texto blanco, esquina de 32 px y cuatro etiquetas de rol en las esquinas desde 64rem.

### Inputs / Fields
- **Marketing (lista de espera):** campo blanco sin borde, de 3.5rem de alto y esquina `rounded.md`. El foco es un contorno blanco de 3 px. El botón de envío es tinta sobre la banda y queda deshabilitado mientras no haya destino.
- **Dentro de `data-ui`:**
  - Los campos llevan borde de 1 px en `field-border` y esquina `rounded.ui`, con 2.25rem de alto y letra de 0.875rem.
  - El interruptor es una píldora de 2.25 × 1.25rem que pasa a `brand` al activarse.

### Navigation
- **Cabecera:** marca (`Mark` más la palabra en 750 y -0.03em), enlaces grises en 500 y 1.0625rem que pasan a tinta al pasar el ratón, el enlace de idioma y el botón «Pedir acceso». Los enlaces se ocultan por debajo de 64rem.
- **Pie:** separado por una línea en `border` y con letra pequeña. Lleva tres columnas desde 48rem: la marca con su frase, la lista de producto y el idioma.

### Demo del tablero (componente propio)
Es la ventana de la app con el tablero de storefront, construida en HTML dentro de `data-ui`. Tiene su paleta local (`--ui-*`), que imita la de la app en los dos temas.
- **Estado inicial:** la tarea #6 espera aprobación en Backlog, con el borde y la sombra en `brand`, y sus acciones («Aprobar spec» y «Pedir cambios») están en la propia tarjeta. La #4 está quieta en «En revisión» con «Espera tu revisión».
- **Recorrido:** cada acción mueve la tarea por las columnas con una transición de 650 ms en `--ease-in-out` y una entrada de 520 ms.
- **Accesibilidad:** un texto de ayuda bajo la ventana cambia en cada paso, y una región `aria-live` lo anuncia.
- **Sin JavaScript:** se ocultan los botones y se muestran los pasos escritos.

### Captura (`Shot`)
Es una captura real de la app en `src/assets/{nombre}-{idioma}-{tema}.png`, servida como `<picture>` que elige el tema del sistema. El navegador solo descarga la variante que corresponde.
- **Recortes de afirmación:** son recortes rasterizados de las capturas completas, en las cuatro variantes, y no un zoom con CSS: `aprobacion-spec`, `revision-acciones`, `estado-coste`, `tablero-sin-cuenta`, `sincronizacion-ordenadores` y `colaboracion-equipo`.
- **Si falta una variante:** queda un hueco en `surface-2` con el nombre del archivo pendiente.

### Entradas
- **Secciones:** las piezas con `data-reveal` suben 20 px y aparecen en 600 y 800 ms con `--ease-out`, escalonadas 80 ms por índice, cuando entran en pantalla.
- **Hero:** el titular, la frase y los botones suben de forma escalonada (0, 90 y 180 ms). Después, las etiquetas aparecen una a una.
- **Seguridad:** las entradas solo existen con la clase `js` y sin movimiento reducido. El script en línea añade `js` y la quita a los 3 s si `window.__landingReady` no aparece, así que nunca ocultan contenido.

## Do's and Don'ts

### Do:
- **Do** pon la acción principal en cobalto de acción (`accent`) y las secundarias con el contorno interior de 2 px.
- **Do** aplica los colores de rol con su clase `tone-*`, que define tono, tinta y suave a la vez.
- **Do** marca con el cuadrado del agente: dentro de la píldora para nombrar un rol, y delante del título o como viñeta en una tarjeta.
- **Do** enseña el producto con capturas reales en el idioma y el tema de la página, a través de `Shot`. Si una afirmación necesita un detalle, recorta la captura completa en las cuatro variantes y ajusta el marco a la proporción del recorte.
- **Do** marca con `data-ui` todo fragmento que imite la app y usa dentro sus convenciones: `brand`, radios de 6 a 12 px, bordes de 1 px y sus textos y datos reales.
- **Do** haz que cada mejora con JavaScript dependa de la clase `js`, con respaldo escrito y respeto a `prefers-reduced-motion`.
- **Do** centra los encabezados de sección y mantén los h2 en 800.

### Don't:
- **Don't** pintes con `accent` fondos, bordes o píldoras dentro de un fragmento `data-ui`, ni uses `brand` fuera de él; el contorno de foco global es la única excepción.
- **Don't** amplíes una captura con CSS para destacar un detalle; usa un recorte rasterizado.
- **Don't** pongas sombra a una tarjeta de color; la sombra es de las ventanas, los marcos y las fichas.
- **Don't** redondees el cuadrado del agente ni lo cambies por otra forma o un icono.
- **Don't** pongas una píldora de color sobre el título de una tarjeta a modo de antetítulo; en las tarjetas, el color va en el cuadrado.
- **Don't** escondas contenido a la espera de un script: sin JavaScript la página tiene que estar completa.
- **Don't** inventes datos de demostración; los de la app son el proyecto storefront, el grupo «Tienda online» y las cuentas @example.com.
