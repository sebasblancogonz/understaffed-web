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
La portada SHALL obtener 95 o más en Lighthouse de rendimiento, accesibilidad, buenas prácticas y SEO, sin saltos de diseño, y SHALL limitar el JavaScript de cliente a un único script pequeño para la demostración del hero, el menú de secciones, el envío de la lista de espera y las entradas de las secciones. Sin JavaScript, la página MUST mostrar todo su contenido; en lugar del formulario de la lista de espera muestra cómo apuntarse por correo.

#### Scenario: Puntuaciones Lighthouse
- **WHEN** se ejecuta Lighthouse sobre `/` y `/en/` del build en móvil
- **THEN** las cuatro categorías puntúan 95 o más y el CLS es 0,1 o menos

#### Scenario: Portada sin JavaScript
- **WHEN** se carga la portada con JavaScript desactivado
- **THEN** todo el texto y las capturas son visibles, en lugar del formulario se ve cómo apuntarse por correo y ningún elemento queda con opacidad cero

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

### Requirement: Carga diferida de capturas
Todas las capturas SHALL cargarse en diferido (`loading="lazy"`): el hero ya no lleva captura sino un fragmento de interfaz en HTML.

#### Scenario: Atributo de carga
- **WHEN** se inspeccionan las `img` del HTML generado
- **THEN** todas tienen `loading="lazy"`

### Requirement: Fragmentos de interfaz
Los fragmentos de la app construidos en HTML SHALL llevar el atributo `data-ui` en su raíz, usar las etiquetas reales de la app y los datos de demostración de las capturas, y marcar como demostración lo que simula un comportamiento.

#### Scenario: Datos de demostración
- **WHEN** se revisan los fragmentos
- **THEN** los proyectos, tareas, personas, ordenadores y servidores son los de las capturas (storefront, «Tienda online», Marta Ruiz, sync.example.com) y no aparecen datos de personas reales

### Requirement: Cabecera a todo el ancho
La cabecera SHALL ocupar todo el ancho de la ventana, con la marca pegada al margen izquierdo de la página y la acción «Pedir acceso» al derecho, sin limitarse al ancho del contenido. La cabecera SHALL quedar fija en la parte superior al desplazar la página, para que las secciones y «Pedir acceso» estén siempre a mano.

#### Scenario: Ancho de la cabecera
- **WHEN** se abre la portada a 1440 y a 1920 px
- **THEN** la marca empieza a la distancia del margen de página del borde izquierdo y el botón «Pedir acceso» termina a esa misma distancia del borde derecho

#### Scenario: Cabecera fija
- **WHEN** se desplaza la portada hasta cualquier sección, a 1440 y a 390 px
- **THEN** la cabecera sigue visible en el borde superior y el título de la sección a la que lleva un enlace no queda tapado por ella

### Requirement: Formulario de la lista de espera accesible
El formulario de la lista de espera SHALL tener etiqueta visible y foco visible, y decir con texto, bajo el campo, cada error: campo vacío, email que no vale, demasiados intentos y fallo del envío. El error MUST anunciarse a los lectores de pantalla, devolver el foco al campo y conservar lo escrito. Ningún estado se comunica solo con color. Sin JavaScript, en lugar del formulario la sección SHALL mostrar cómo apuntarse por correo.

#### Scenario: Email que no vale
- **WHEN** el usuario envía el formulario vacío o con un texto que no es un email
- **THEN** no se hace ninguna petición, bajo el campo aparece un texto en un elemento con `role="alert"` que dice qué pasa y cómo arreglarlo, el campo lleva `aria-invalid="true"` y tiene el foco

#### Scenario: Fallo del envío
- **WHEN** el servidor no responde, responde con un error o tarda más de 15 segundos
- **THEN** bajo el campo aparece un texto que lo dice y ofrece el buzón de la lista como enlace `mailto:`, el campo conserva el email y no queda marcado como inválido, y el botón vuelve a estar habilitado

#### Scenario: Demasiados intentos
- **WHEN** el servidor responde `429`
- **THEN** bajo el campo aparece un texto que pide esperar un rato

#### Scenario: Botón mientras envía
- **WHEN** el formulario está enviando
- **THEN** el botón lleva `aria-disabled="true"`, no envía otra vez, dice «Enviando…», se distingue visualmente del habilitado y conserva su ancho y el foco si lo tenía

#### Scenario: Sin JavaScript
- **WHEN** se carga la portada con JavaScript deshabilitado
- **THEN** en la banda no se ve el formulario y se ve un texto con un enlace `mailto:` al buzón de la lista

### Requirement: Controles táctiles
Los controles de la portada SHALL medir al menos 44 px de alto cuando el puntero es un dedo.

#### Scenario: Altura con puntero grueso
- **WHEN** se miden, con `pointer: coarse`, las acciones de la tarea de la demostración, el botón del menú y sus enlaces, y los enlaces del pie
- **THEN** cada uno mide 44 px de alto o más
