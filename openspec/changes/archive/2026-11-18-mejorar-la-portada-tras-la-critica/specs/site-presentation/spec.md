# Spec Delta

## MODIFIED Requirements

### Requirement: Rendimiento y JavaScript
La portada SHALL obtener 95 o más en Lighthouse de rendimiento, accesibilidad, buenas prácticas y SEO, sin saltos de diseño, y SHALL limitar el JavaScript de cliente a un único script pequeño para la demostración del hero, el menú de secciones, el envío de la lista de espera y las entradas de las secciones. Sin JavaScript, la página MUST mostrar todo su contenido; en lugar del formulario de la lista de espera muestra cómo apuntarse por correo.

#### Scenario: Puntuaciones Lighthouse
- **WHEN** se ejecuta Lighthouse sobre `/` y `/en/` del build en móvil
- **THEN** las cuatro categorías puntúan 95 o más y el CLS es 0,1 o menos

#### Scenario: Portada sin JavaScript
- **WHEN** se carga la portada con JavaScript desactivado
- **THEN** todo el texto y las capturas son visibles, en lugar del formulario se ve cómo apuntarse por correo y ningún elemento queda con opacidad cero

### Requirement: Cabecera a todo el ancho
La cabecera SHALL ocupar todo el ancho de la ventana, con la marca pegada al margen izquierdo de la página y la acción «Pedir acceso» al derecho, sin limitarse al ancho del contenido. La cabecera SHALL quedar fija en la parte superior al desplazar la página, para que las secciones y «Pedir acceso» estén siempre a mano.

#### Scenario: Ancho de la cabecera
- **WHEN** se abre la portada a 1440 y a 1920 px
- **THEN** la marca empieza a la distancia del margen de página del borde izquierdo y el botón «Pedir acceso» termina a esa misma distancia del borde derecho

#### Scenario: Cabecera fija
- **WHEN** se desplaza la portada hasta cualquier sección, a 1440 y a 390 px
- **THEN** la cabecera sigue visible en el borde superior y el título de la sección a la que lleva un enlace no queda tapado por ella

## ADDED Requirements

### Requirement: Controles táctiles
Los controles de la portada SHALL medir al menos 44 px de alto cuando el puntero es un dedo.

#### Scenario: Altura con puntero grueso
- **WHEN** se miden, con `pointer: coarse`, las acciones de la tarea de la demostración, el botón del menú y sus enlaces, y los enlaces del pie
- **THEN** cada uno mide 44 px de alto o más
