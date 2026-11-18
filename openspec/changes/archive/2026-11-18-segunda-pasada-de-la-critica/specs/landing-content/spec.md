# Spec Delta

## MODIFIED Requirements

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
- **THEN** en la propia tarjeta aparece una nota con lo que pasará, y la región `aria-live` la anuncia

#### Scenario: Pistas como siguiente acción
- **WHEN** se lee el texto de ayuda bajo la ventana en cada paso
- **THEN** dice qué puede hacer el visitante en ese paso, y sin JavaScript no se muestra

### Requirement: Roles
La portada SHALL presentar cómo se contrata un rol con una imagen del diálogo de contratar de la app, con sus textos: nombre, instrucciones de la plantilla «Desarrollador backend», modelo y el permiso «Ejecutar comandos». Las plantillas se presentan como una lista con el nombre de cada rol y el arranque de sus instrucciones entre comillas, y la plantilla que enseña el diálogo va marcada. La imagen MUST NOT contener controles que se puedan enfocar o usar, y MUST tener un texto alternativo que diga lo que enseña.

#### Scenario: Plantillas reales
- **WHEN** se lee la sección de roles
- **THEN** las plantillas nombradas son las de la app (Analista de producto, Desarrollador full-stack, frontend y backend, y Tester) y las instrucciones son las de la plantilla de backend

#### Scenario: El diálogo es una imagen
- **WHEN** se recorre la sección de roles con el teclado y se inspecciona el diálogo
- **THEN** no hay ningún `input`, `textarea` ni `button` dentro, el diálogo tiene `role="img"` con un nombre accesible y el foco no se detiene en él

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
- **THEN** el título y la frase de la banda pasan a ser la confirmación en el idioma de la página, que repite la dirección apuntada, el formulario se oculta, el título recibe el foco y la banda no cambia de alto

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

## ADDED Requirements

### Requirement: Capturas legibles
Los recortes de capturas de las secciones Cómo funciona y LocalFirst SHALL mostrarse a un tamaño al que su texto se lea, y la tarjeta «Al final, el código» SHALL enseñar un diff real de la app.

#### Scenario: Escala de los recortes
- **WHEN** se miden los recortes de esas dos secciones a 1440 px de ancho de ventana
- **THEN** cada uno se muestra al 85 % o más del tamaño que tiene en la app

#### Scenario: El diff a la vista
- **WHEN** se mira la tercera tarjeta de Cómo funciona
- **THEN** su imagen es el recorte `revision-diff`, con la ruta del archivo y líneas añadidas y quitadas
