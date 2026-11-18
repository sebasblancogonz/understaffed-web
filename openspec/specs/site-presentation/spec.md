# site-presentation Specification

## Purpose
Define la identidad visual, la accesibilidad y el rendimiento de la web: tema claro y oscuro, tipografías propias, uso del acento, adaptación a móvil y movimiento reducido.

## Requirements

### Requirement: Tema según el sistema
La web SHALL adoptar el tema claro u oscuro según `prefers-color-scheme`, con los colores definidos una sola vez como variables. Claro: fondo `#ffffff`, texto `#0d1017`, secundario `#5b6474`, superficie `#f1f4f6`, borde `#e3e6eb`. Oscuro: fondo `#0d1017`, texto `#eceef2`, secundario `#9aa3b2`, superficie `#1f2430`, borde `#262d39`.

#### Scenario: Preferencia oscura
- **WHEN** el sistema del usuario prefiere el tema oscuro
- **THEN** el fondo calculado de la página es `#0d1017` y el texto `#eceef2`

#### Scenario: Preferencia clara
- **WHEN** el sistema del usuario prefiere el tema claro
- **THEN** el fondo calculado es `#ffffff` y el texto `#0d1017`

### Requirement: Acento único
La web SHALL usar un único color de acento, `#2f5bea` en claro y `#5b7fff` en oscuro, con texto `#ffffff` y `#0d1017` encima respectivamente, solo para la acción principal y el elemento que se debe mirar primero.

#### Scenario: Acento acotado
- **WHEN** se revisan los usos del color de acento en ambos temas
- **THEN** solo aparece en la acción principal y en un elemento de énfasis por sección, nunca como decoración, y no hay degradados de neón ni cristal esmerilado

### Requirement: Tipografías alojadas
El texto SHALL usar Inter Variable y el código, comandos y rutas JetBrains Mono, servidas desde el propio sitio, sin peticiones a CDN de fuentes, con la fuente principal precargada.

#### Scenario: Sin fuentes externas
- **WHEN** se carga la portada y se listan sus peticiones de red
- **THEN** todas las fuentes provienen del dominio del sitio y la de Inter se solicita con `rel="preload"`

### Requirement: Accesibilidad
La web SHALL cumplir contraste AA en ambos temas, permitir navegación completa con teclado, mostrar foco visible, ofrecer un enlace para saltar al contenido y etiquetar todos los controles.

#### Scenario: Saltar al contenido
- **WHEN** el usuario pulsa Tab al cargar la página
- **THEN** el primer elemento enfocado es un enlace visible "saltar al contenido" que mueve el foco a `main`

#### Scenario: Recorrido con teclado
- **WHEN** el usuario recorre la página solo con teclado
- **THEN** cada elemento interactivo recibe foco con un indicador visible y ninguno queda inalcanzable

### Requirement: Movimiento reducido
Toda animación SHALL tener una alternativa bajo `prefers-reduced-motion: reduce` que la elimine o la sustituya por un cambio instantáneo.

#### Scenario: Animación desactivada
- **WHEN** el usuario tiene activado el movimiento reducido
- **THEN** ningún elemento muestra transiciones ni animaciones de desplazamiento o aparición

### Requirement: Diseño adaptable
La web SHALL ser legible desde 360 px de ancho sin desplazamiento horizontal.

#### Scenario: Ancho mínimo
- **WHEN** se abre cualquier página con un ancho de 360 px
- **THEN** el ancho del documento no supera el de la ventana y no hay contenido recortado

### Requirement: Rendimiento y JavaScript
La portada SHALL obtener 95 o más en Lighthouse de rendimiento, accesibilidad, buenas prácticas y SEO, sin saltos de diseño, y SHALL enviar cero JavaScript al cliente salvo que una función concreta lo requiera.

#### Scenario: Puntuaciones Lighthouse
- **WHEN** se ejecuta Lighthouse sobre `/` y `/en/` del build en móvil
- **THEN** las cuatro categorías puntúan 95 o más y el CLS es 0,1 o menos

#### Scenario: Portada sin JavaScript
- **WHEN** se revisa el HTML generado de la portada
- **THEN** no incluye etiquetas `script` de la aplicación

### Requirement: Comprobaciones de entrega
El proyecto SHALL superar `pnpm astro check` y `pnpm build` sin avisos nuevos.

#### Scenario: Comprobaciones limpias
- **WHEN** se ejecutan ambos comandos
- **THEN** terminan con código 0 y sin avisos

### Requirement: Capturas según el tema
Cada captura de la app SHALL mostrarse en la variante que corresponde al tema del sistema, clara u oscura, y en el idioma de la página. El navegador MUST NOT descargar la variante del otro tema.

#### Scenario: Preferencia oscura
- **WHEN** el sistema prefiere el tema oscuro y se abre `/en/`
- **THEN** cada captura mostrada es la variante oscura en inglés

#### Scenario: Preferencia clara
- **WHEN** el sistema prefiere el tema claro y se abre `/`
- **THEN** cada captura mostrada es la variante clara en español

#### Scenario: Una sola variante descargada
- **WHEN** se listan las peticiones de imágenes de la portada con el tema oscuro
- **THEN** no hay ninguna petición a un archivo de captura de la variante clara

#### Scenario: Variante ausente
- **WHEN** falta en `src/assets/` la variante de un tema para una captura
- **THEN** la sección muestra el marcador con `TODO:` y el nombre del archivo esperado en ese tema, y el build no falla

#### Scenario: Sin saltos de diseño
- **WHEN** las dos variantes de una captura tienen las mismas dimensiones y se cambia el tema del sistema
- **THEN** la imagen declara las mismas proporciones y el CLS sigue siendo 0,1 o menos

### Requirement: Formulario accesible sin JavaScript
El formulario de la lista de espera SHALL funcionar sin JavaScript, con etiqueta visible y foco visible, validar el formato del email con la validación nativa del navegador y mostrar el borde del campo con un contraste de 3:1 o más frente a su fondo en ambos temas.

#### Scenario: Validación nativa
- **WHEN** el usuario intenta enviar el formulario con un texto que no es un email
- **THEN** el navegador impide el envío y señala el campo, sin JavaScript de la aplicación

#### Scenario: Contraste del campo
- **WHEN** se mide el borde del campo de email frente al fondo de la sección, en claro y en oscuro
- **THEN** la relación de contraste es 3:1 o más

#### Scenario: Botón deshabilitado reconocible
- **WHEN** el botón de envío está deshabilitado
- **THEN** se distingue visualmente del habilitado y un texto visible explica por qué

### Requirement: Carga diferida de capturas
Las capturas que no están en el hero SHALL cargarse en diferido (`loading="lazy"`), y la del hero SHALL cargarse de inmediato.

#### Scenario: Atributo de carga
- **WHEN** se inspeccionan las `img` del HTML generado
- **THEN** la captura del hero no tiene `loading="lazy"` y todas las demás sí
