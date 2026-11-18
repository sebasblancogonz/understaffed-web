# Spec Delta

## MODIFIED Requirements

### Requirement: Acento único
La web SHALL usar un único color de acento, `#2f5bea` en claro y `#5b7fff` en oscuro, con texto `#ffffff` y `#0d1017` encima respectivamente. Fuera de los fragmentos de interfaz se usa solo en la acción principal, en el cuadrado que representa a un agente (la marca y las marcas de agente), en la pieza que encabeza el tablero de requisitos y como campo entero de la sección de la lista de espera. Dentro de los fragmentos sigue las reglas de la app: lo que espera la decisión del usuario, el agente y la acción principal.

#### Scenario: Acento acotado
- **WHEN** se revisan los usos del color de acento en ambos temas fuera de los fragmentos `data-ui`
- **THEN** solo aparece en la acción principal, en los cuadrados de agente, en la pieza que encabeza los requisitos y en el campo de la lista de espera, nunca como decoración, y no hay degradados ni cristal esmerilado

### Requirement: Rendimiento y JavaScript
La portada SHALL obtener 95 o más en Lighthouse de rendimiento, accesibilidad, buenas prácticas y SEO, sin saltos de diseño, y SHALL limitar el JavaScript de cliente a un único script pequeño para la demostración del hero, las pestañas, el panel de Estado y las entradas de las secciones. Sin JavaScript, la página MUST mostrar todo su contenido.

#### Scenario: Puntuaciones Lighthouse
- **WHEN** se ejecuta Lighthouse sobre `/` y `/en/` del build en móvil
- **THEN** las cuatro categorías puntúan 95 o más y el CLS es 0,1 o menos

#### Scenario: Portada sin JavaScript
- **WHEN** se carga la portada con JavaScript desactivado
- **THEN** todo el texto, las capturas y el formulario son visibles y ningún elemento queda con opacidad cero

### Requirement: Carga diferida de capturas
Todas las capturas SHALL cargarse en diferido (`loading="lazy"`): el hero ya no lleva captura sino un fragmento de interfaz en HTML.

#### Scenario: Atributo de carga
- **WHEN** se inspeccionan las `img` del HTML generado
- **THEN** todas tienen `loading="lazy"`

## ADDED Requirements

### Requirement: Fragmentos de interfaz
Los fragmentos de la app construidos en HTML SHALL llevar el atributo `data-ui` en su raíz, usar las etiquetas reales de la app y los datos de demostración de las capturas, y marcar como demostración lo que simula un comportamiento.

#### Scenario: Datos de demostración
- **WHEN** se revisan los fragmentos
- **THEN** los proyectos, tareas, personas, ordenadores y servidores son los de las capturas (storefront, «Tienda online», Marta Ruiz, sync.example.com) y no aparecen datos de personas reales
