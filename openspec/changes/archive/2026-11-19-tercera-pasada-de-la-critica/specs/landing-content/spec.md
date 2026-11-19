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

#### Scenario: Las acciones de la demo en el primer pliegue
- **WHEN** se carga la portada a 1440 × 900
- **THEN** «Aprobar spec» y «Pedir cambios» quedan dentro de la ventana del navegador sin desplazar

### Requirement: Demostración de las aprobaciones
El hero SHALL incluir una ventana de la app con el tablero de cinco columnas tal como está en los datos de demostración: la tarea #6 «Modo oscuro en el panel de administración» espera tu aprobación en Backlog y la #4 «Exportar pedidos a CSV» espera tu revisión. La #6 lleva sus acciones en la propia tarjeta y solo avanza cuando el visitante pulsa «Aprobar spec», «Ejecutar» y «Aprobar». Usa las etiquetas reales de la app y se presenta como demostración. La tarjeta SHALL enseñar qué se aprueba en cada decisión: antes de «Aprobar spec», los criterios de aceptación de la spec; antes de «Aprobar», los archivos que cambió el rol. Los datos que no salen de la app MUST estar marcados como de muestra en el código fuente de textos.

#### Scenario: Nada avanza sin pulsar
- **WHEN** el visitante no pulsa ninguna acción
- **THEN** la tarea sigue en Backlog con «Espera tu aprobación», y tras la ejecución se detiene en En revisión con «Espera tu revisión»

#### Scenario: Recorrido completo
- **WHEN** el visitante pulsa «Aprobar spec», «Ejecutar» y «Aprobar»
- **THEN** la tarea pasa por Por hacer, En curso y En revisión hasta Hecho, y cada cambio se anuncia en una región `aria-live`

#### Scenario: Sin JavaScript
- **WHEN** se carga la portada sin JavaScript
- **THEN** se ve la tarjeta esperando aprobación y los pasos escritos, sin botones que no hagan nada

#### Scenario: Se ve lo que se aprueba
- **WHEN** la tarea espera la aprobación de su spec, y después la revisión de su código
- **THEN** la tarjeta muestra primero los títulos de los criterios de aceptación de la spec de la tarea #6 y la línea de validación de OpenSpec, y después la lista «Código» con sus archivos y sus líneas añadidas y quitadas y el último mensaje del rol

#### Scenario: Pedir cambios y devolver dejan rastro
- **WHEN** el visitante pulsa «Pedir cambios» o «Devolver»
- **THEN** en la propia tarjeta aparece una nota con lo que pasará, en el sitio de lo que se estaba decidiendo, y la región `aria-live` la anuncia; con «Pedir cambios» la tarea pasa por «Especificando» y vuelve a esperar aprobación con sus criterios

#### Scenario: Ninguna acción queda recortada
- **WHEN** se recorre la demostración entera, incluidos «Pedir cambios» y «Devolver», a 1440, 820, 390 y 360 px en los dos idiomas
- **THEN** en ningún paso un botón visible de la tarea, sus criterios, sus archivos o su nota sobresalen de la ventana del tablero

#### Scenario: El foco al terminar
- **WHEN** la tarea llega a Hecho
- **THEN** el foco pasa al botón «Pedir acceso» que aparece bajo la ventana

#### Scenario: Pistas como siguiente acción
- **WHEN** se lee el texto de ayuda bajo la ventana en cada paso
- **THEN** está sobre la ventana, dice qué puede hacer el visitante en ese paso, y sin JavaScript no se muestra

### Requirement: Roles
La portada SHALL presentar cómo se contrata un rol con una imagen del diálogo de contratar de la app, con sus textos: nombre, instrucciones de la plantilla «Desarrollador backend», modelo y el permiso «Ejecutar comandos». Las plantillas se presentan como una lista con el nombre de cada rol y el arranque de sus instrucciones entre comillas, y la plantilla que enseña el diálogo va marcada. Elegir una plantilla de la lista SHALL enseñar en el diálogo su nombre y sus instrucciones completas, que son las del catálogo de la app. La imagen MUST NOT contener controles que se puedan enfocar o usar, y MUST tener un texto alternativo que diga lo que enseña.

#### Scenario: Plantillas reales
- **WHEN** se lee la sección de roles
- **THEN** las plantillas nombradas son las de la app (Analista de producto, Desarrollador full-stack, frontend y backend, y Tester) y las instrucciones son las de la plantilla de backend

#### Scenario: El diálogo es una imagen
- **WHEN** se recorre la sección de roles con el teclado y se inspecciona el diálogo
- **THEN** no hay ningún `input`, `textarea` ni `button` dentro, el diálogo tiene `role="img"` con un nombre accesible y el foco no se detiene en él

#### Scenario: Elegir una plantilla
- **WHEN** el visitante pulsa una fila de la lista de plantillas
- **THEN** el título, el nombre, las instrucciones y el contador del diálogo pasan a ser los de esa plantilla, la fila queda marcada con `aria-pressed="true"` y el cambio se anuncia en una región `aria-live`

#### Scenario: Roles sin JavaScript
- **WHEN** se carga la portada sin JavaScript
- **THEN** las filas no tienen botón y el diálogo enseña la plantilla «Desarrollador backend»

#### Scenario: Instrucciones presentadas como del rol
- **WHEN** se lee la lista de plantillas
- **THEN** el texto de cada plantilla va dentro de un elemento `q`, la lista lleva un título que dice que son plantillas y sus instrucciones, y la de «Desarrollador backend» lleva la marca de que es la del diálogo

### Requirement: Lista de espera
La portada SHALL cerrar con una sección de lista de espera que contenga el único formulario de la página: un campo de email y el botón «Pedir acceso». Pide solo el email, envía también el idioma de la página, aclara que apuntarse no crea una cuenta y dice para qué se usa el email y cómo salir de la lista. El formulario envía a `config.waitlistUrl`, la ruta de la lista de espera del servidor de Understaffed, que avisa al buzón `config.waitlistEmail`.

#### Scenario: Un solo formulario
- **WHEN** se inspecciona el HTML de `/` y de `/en/`
- **THEN** hay exactamente un `form`, dentro de la sección de la lista de espera, con un único campo visible `type="email"`, `required`, `autocomplete="email"` y una etiqueta visible, más un campo oculto `lang` con el idioma de la página

#### Scenario: Sin destino configurado
- **WHEN** `config.waitlistUrl` está vacío
- **THEN** el build falla con un mensaje que lo dice, y no se publica un formulario que no envía

#### Scenario: Con destino configurado
- **WHEN** `config.waitlistUrl` tiene una URL y el usuario envía un email válido
- **THEN** el script hace un `POST` a `config.waitlistUrl` con `email` y `language` en JSON, y mientras espera la respuesta el botón está deshabilitado y dice «Enviando…»

#### Scenario: Confirmación
- **WHEN** el servidor responde `202`
- **THEN** el título y la frase de la banda pasan a ser la confirmación en el idioma de la página, que repite la dirección apuntada, el formulario se oculta, el título recibe el foco y, desde 40rem de ancho, la banda no cambia de alto; por debajo, encoge. Junto a «Usar otro email» hay un enlace para volver a la demostración

#### Scenario: Corregir la dirección
- **WHEN** tras la confirmación el usuario pulsa «Usar otro email»
- **THEN** vuelve el formulario con la dirección anterior seleccionada en el campo

#### Scenario: La confirmación solo sigue a un envío
- **WHEN** se abre la portada con el fragmento `#thanks`
- **THEN** se ve el formulario y no la confirmación

#### Scenario: Aviso de privacidad pendiente
- **WHEN** el equipo aún no ha revisado el texto legal
- **THEN** el aviso está marcado como borrador en el código fuente de textos, y junto al formulario se lee para qué se usa el email y un enlace `mailto:` al buzón de la lista para salir de ella, y no hay ningún texto `TODO:`

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
- **THEN** cada marco que se desplaza tiene un nombre accesible, su borde derecho se desvanece y bajo él se lee que la imagen se desliza
