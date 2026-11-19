# Spec Delta

## MODIFIED Requirements

### Requirement: Hero con acción principal
El hero SHALL contener un único `h1` que diga que cada tarea pasa dos veces por el usuario, una frase que explique que contrata roles de IA, les asigna tareas de un tablero y aprueba la spec y después el código antes de que llegue a su rama, una única acción principal, «Pedir acceso», con el color principal, que lleve a la lista de espera, y como mucho una acción secundaria sin el color principal, «Probar la demo», que lleva a la demostración.

#### Scenario: Una sola acción principal
- **WHEN** se renderiza el hero
- **THEN** existe exactamente un enlace con estilo de acción principal, su `href` es el `id` de la sección de la lista de espera y no hay ningún enlace ni texto de descarga

#### Scenario: Titular corto
- **WHEN** se mide el `h1` a 1440, 768 y 360 px
- **THEN** ocupa dos líneas o menos en 1440 y 768 px

#### Scenario: Probar la demo
- **WHEN** el visitante activa «Probar la demo»
- **THEN** la ventana de la demostración queda a la vista y el foco pasa a la acción que toca en la tarea #6

#### Scenario: Aire en el hero
- **WHEN** se mide el hero a 1440 px de ancho
- **THEN** el titular arranca 5rem por debajo de la cabecera y la pista de la demostración 5.5rem por debajo de los botones

#### Scenario: Las acciones de la demo en el primer pliegue
- **WHEN** se carga la portada a 1440 × 900
- **THEN** la pista de la demostración y el arranque de su ventana quedan dentro de la ventana del navegador; las acciones de la tarea pueden quedar por debajo, porque el aire del hero manda
