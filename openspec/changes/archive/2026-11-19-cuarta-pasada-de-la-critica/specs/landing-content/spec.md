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
- **THEN** el titular arranca 6rem por debajo de la cabecera y la pista de la demostración 6.5rem por debajo de los botones

#### Scenario: Titular en pantallas estrechas
- **WHEN** se abre la portada a 360 y a 390 px de ancho, en español y en inglés
- **THEN** el `h1` ocupa exactamente dos líneas

#### Scenario: Las acciones de la demo en el primer pliegue
- **WHEN** se carga la portada a 1440 × 900
- **THEN** la pista de la demostración y el arranque de su ventana quedan dentro de la ventana del navegador; las acciones de la tarea pueden quedar por debajo, porque el aire del hero manda

### Requirement: Roles
La portada SHALL presentar cómo se contrata un rol con una imagen del diálogo de contratar de la app, con sus textos: nombre, instrucciones de la plantilla «Desarrollador backend», modelo y el permiso «Ejecutar comandos». Las plantillas se presentan como una lista con el nombre de cada rol y el arranque de sus instrucciones entre comillas, y la plantilla que enseña el diálogo va marcada. Elegir una plantilla de la lista SHALL enseñar en el diálogo su nombre y sus instrucciones completas, que son las del catálogo de la app. El diálogo MUST NOT contener controles de formulario: sus botones del pie están dibujados, apagados y ocultos a la tecnología de asistencia. Sus instrucciones MUST poder leerse enteras, en un campo que se desplaza.

#### Scenario: Plantillas reales
- **WHEN** se lee la sección de roles
- **THEN** las plantillas nombradas son las de la app (Analista de producto, Desarrollador full-stack, frontend y backend, y Tester) y las instrucciones son las de la plantilla de backend

#### Scenario: El diálogo es una imagen
- **WHEN** se recorre la sección de roles con el teclado y se inspecciona el diálogo
- **THEN** no hay ningún `input`, `textarea` ni `button` dentro, el diálogo tiene `role="group"` con un nombre accesible, y el foco solo se detiene en el campo de instrucciones, para poder desplazarlo con el teclado

#### Scenario: Elegir una plantilla
- **WHEN** el visitante pulsa una fila de la lista de plantillas
- **THEN** el título, el nombre, las instrucciones y el contador del diálogo pasan a ser los de esa plantilla, la fila queda marcada con `aria-pressed="true"` y el cambio se anuncia en una región `aria-live`; por debajo de 64rem, donde el diálogo va bajo la lista, la página lo trae a la vista

#### Scenario: Las filas se reconocen como pulsables
- **WHEN** se mira la lista de plantillas con JavaScript
- **THEN** su título pide elegir una plantilla y cada fila sin elegir lleva una flecha al final

#### Scenario: Roles sin JavaScript
- **WHEN** se carga la portada sin JavaScript
- **THEN** las filas no tienen botón y el diálogo enseña la plantilla «Desarrollador backend»

#### Scenario: Instrucciones presentadas como del rol
- **WHEN** se lee la lista de plantillas
- **THEN** el texto de cada plantilla va dentro de un elemento `q`, la lista lleva un título que dice que son plantillas y sus instrucciones, y la de «Desarrollador backend» lleva la marca de que es la del diálogo

### Requirement: Vista Estado
La portada SHALL incluir una sección que presente la vista Estado de un grupo: lo que espera la decisión del usuario, lo que está en marcha y lo integrado, en las tareas de los repositorios del grupo, con su coste. Lo enseña con recortes de la captura real de Estado del grupo, a un tamaño al que se leen los títulos de las tareas.

#### Scenario: Contenido de Estado
- **WHEN** se lee la sección Estado en cada idioma
- **THEN** aparecen tareas de al menos dos repositorios del grupo con su estado, y los recortes `estado-decision`, `estado-en-marcha` y `estado-coste`, cada uno con su pie

#### Scenario: Recortes legibles
- **WHEN** se mide el texto de las tareas del recorte `estado-decision` a 1440 px y a 390 px de ancho de ventana
- **THEN** los títulos de las tareas se ven a 9 px o más, y a 390 px el recorte conserva su ancho mínimo y su marco se desplaza de lado sin desbordar la página

#### Scenario: Franjas a su tamaño
- **WHEN** se abre la sección a 1440 px
- **THEN** las franjas «En marcha» y «Coste por rol» ocupan la misma columna ancha que la lista, cada una con su pie al lado, y se muestran al tamaño de la app o mayor

#### Scenario: El coste no es un precio
- **WHEN** se revisa el texto sobre el coste
- **THEN** describe el gasto que informa el proveedor por ejecución y no contiene ningún precio de Understaffed

#### Scenario: Recortes que se deslizan
- **WHEN** se abre la sección por debajo de 40rem de ancho
- **THEN** cada marco que se desplaza tiene un nombre accesible, su borde derecho se desvanece, y una sola línea, bajo el primer pie, dice que las imágenes se deslizan
