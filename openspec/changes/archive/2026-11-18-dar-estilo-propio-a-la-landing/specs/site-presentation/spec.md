# Spec Delta

## MODIFIED Requirements

### Requirement: Acento único
La web SHALL usar el cobalto como único color principal (`#0031e6` en claro y `#5b7fff` en oscuro) para la acción principal, la marca y lo que espera la decisión del usuario. Para etiquetas y tarjetas usa una paleta pastel de cinco colores de rol: lila, naranja, verde, rosa y amarillo. Fuera de los fragmentos de la app, cada color de rol se marca con un círculo. Ningún color se usa en degradado de neón ni en cristal esmerilado.

#### Scenario: Acento acotado
- **WHEN** se revisan los usos de color en ambos temas
- **THEN** el cobalto aparece en la acción principal, la marca, los botones de la demostración y la banda de la lista de espera, los colores de rol solo en etiquetas, marcadores y tarjetas, y no hay degradados de neón ni cristal esmerilado

#### Scenario: Marcadores circulares
- **WHEN** se inspeccionan las etiquetas de rol y los marcadores de color fuera de `[data-ui]`
- **THEN** su marcador tiene `border-radius: 50%`

### Requirement: Tipografías alojadas
Los titulares SHALL usar Bricolage Grotesque Variable, el texto Inter Variable y el código, comandos y rutas JetBrains Mono, servidas desde el propio sitio, sin peticiones a CDN de fuentes, con las fuentes del titular y del texto precargadas. Los fragmentos de la app (`data-ui`) usan Inter.

#### Scenario: Sin fuentes externas
- **WHEN** se carga la portada y se listan sus peticiones de red
- **THEN** todas las fuentes provienen del dominio del sitio, y las de Inter y Bricolage Grotesque se solicitan con `rel="preload"`

#### Scenario: Titulares con su fuente
- **WHEN** se mide la fuente calculada del `h1` y de los `h2` de sección
- **THEN** es Bricolage Grotesque Variable, y la de los textos dentro de `[data-ui]` es Inter Variable

## ADDED Requirements

### Requirement: Cabecera a todo el ancho
La cabecera SHALL ocupar todo el ancho de la ventana, con la marca pegada al margen izquierdo de la página y la acción «Pedir acceso» al derecho, sin limitarse al ancho del contenido.

#### Scenario: Ancho de la cabecera
- **WHEN** se abre la portada a 1440 y a 1920 px
- **THEN** la marca empieza a la distancia del margen de página del borde izquierdo y el botón «Pedir acceso» termina a esa misma distancia del borde derecho
