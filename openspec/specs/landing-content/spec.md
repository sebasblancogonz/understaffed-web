# landing-content Specification

## Purpose
Define qué secciones y qué afirmaciones contiene la portada de Understaffed, de modo que describa el producto con la voz de la app y solo diga lo que es verdad hoy.

## Requirements

### Requirement: Secciones de la portada
La portada SHALL mostrar, en este orden: cabecera con navegación, hero con demostración, cómo funciona, Estado del grupo, roles, local y cuenta, requisitos, lista de espera y pie. Cada idioma MUST contener las mismas secciones.

#### Scenario: Orden de secciones
- **WHEN** se abre `/` o `/en/`
- **THEN** el documento contiene `header`, `main` con las secciones hero, cómo funciona, Estado, roles, local, requisitos y lista de espera en ese orden, y `footer`

#### Scenario: Navegación por anclas
- **WHEN** el usuario activa un enlace de la navegación o del pie
- **THEN** la página se desplaza a la sección correspondiente y el foco queda en ella o junto a ella

#### Scenario: Requisitos en la navegación
- **WHEN** se inspecciona la navegación de `/` y de `/en/`
- **THEN** incluye un enlace a la sección de requisitos cuyo `href` coincide con el `id` de esa sección

#### Scenario: Navegación acotada
- **WHEN** se cuentan los enlaces de la navegación de la cabecera
- **THEN** hay como mucho cuatro enlaces a secciones, más el cambio de idioma y el botón «Pedir acceso», que lleva a la lista de espera

#### Scenario: Navegación en pantallas estrechas
- **WHEN** se abre la portada por debajo de 64rem de ancho
- **THEN** la cabecera muestra la marca, «Pedir acceso» y un botón con nombre accesible que despliega los mismos enlaces a secciones y el cambio de idioma, y el menú se cierra al elegir un enlace, con Escape o al tocar fuera

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

### Requirement: Explicación del flujo de trabajo
La sección "cómo funciona" SHALL describir que el usuario contrata roles, les asigna tareas de un tablero y revisa su trabajo, y que cada tarea es un cambio de OpenSpec en el repositorio. MUST usar los términos roles, tareas, tablero, revisión y spec, y presentar los pasos en el orden real de una tarea: spec, aprobación de la spec, ejecución, revisión y aprobación del código.

#### Scenario: Términos de la app presentes
- **WHEN** se lee el texto de la sección en español
- **THEN** aparecen las palabras "roles", "tareas", "tablero", "revisión" y "spec", y en inglés sus equivalentes acordados en el diccionario de textos

#### Scenario: Orden de los pasos
- **WHEN** se leen en orden los pasos de la sección en `/` y en `/en/`
- **THEN** la revisión aparece antes de la aprobación del código y la aprobación de la spec antes de la ejecución, y no hay un paso que presente el código como aprobado antes de revisarlo

### Requirement: Dos aprobaciones humanas
La portada SHALL indicar que cada tarea tiene dos aprobaciones humanas: la spec y el código.

#### Scenario: Aprobaciones nombradas
- **WHEN** se lee la sección de aprobaciones
- **THEN** se mencionan exactamente dos aprobaciones, "la spec" y "el código", y ningún texto sugiere que el código se integre sin aprobación

### Requirement: Uso del CLI de IA existente
La portada SHALL afirmar que Understaffed lanza el CLI de IA que el usuario ya tiene y ya paga, nombrando hoy Claude Code y Codex, y que no guarda claves.

#### Scenario: Solo los CLI que funcionan
- **WHEN** se revisan los textos de la portada
- **THEN** Claude Code y Codex son los únicos CLI de IA nombrados como compatibles y no se mencionan otros proveedores como soportados

### Requirement: Local primero, cuenta opcional
La portada SHALL indicar que Understaffed funciona en local, que sin cuenta la app no hace ninguna petición de red y todo funciona igual, y que la cuenta, para sincronizar ordenadores y colaborar, es opcional. Lo presenta en tres tarjetas (sin cuenta, con cuenta y en equipo), cada una con una captura real o un recorte de una.

#### Scenario: Cuenta no requerida
- **WHEN** se lee la sección de funcionamiento local
- **THEN** el texto dice que la cuenta es opcional y ninguna llamada a la acción exige crear cuenta

#### Scenario: Ordenadores y equipo
- **WHEN** se lee la sección de funcionamiento local
- **THEN** contiene una tarjeta sin cuenta, otra sobre sincronizar los ordenadores del usuario y otra sobre colaborar con otras personas, cada una con una captura real o un recorte de una

### Requirement: Contenido no inventado
La portada MUST NOT incluir precios, métricas, testimonios, logos de clientes ni capturas que no hayan sido aportados. Todo dato o captura ausente SHALL mostrarse como un hueco con un `TODO:` visible, y todo texto propuesto por desarrollo SHALL marcarse como borrador en el código fuente de textos.

#### Scenario: Captura ausente
- **WHEN** no existe el archivo de captura en `src/assets/`
- **THEN** la sección muestra un marcador visible con `TODO:` y el nombre de la captura esperada, y el build no falla

#### Scenario: Sin cifras ni logos
- **WHEN** se busca en el HTML generado cualquier cifra de precio, métrica, testimonio o logo de cliente
- **THEN** no hay ninguno

### Requirement: Imágenes accesibles y estables
Toda imagen SHALL declarar ancho, alto y `alt` descriptivo para evitar saltos de diseño.

#### Scenario: Atributos de imagen
- **WHEN** se inspecciona cada `img` del HTML generado
- **THEN** tiene `width`, `height` y un `alt` no vacío, salvo las decorativas con `alt=""`

### Requirement: Requisitos de uso
La portada SHALL incluir una sección de requisitos, presentada como un tablero de lo que la app usa, que indique que es una app de escritorio para Windows y macOS, que necesita git 2.30 o posterior y Claude Code o Codex instalado y con sesión iniciada, que OpenSpec va incluido y que la app no instala git ni esos CLI pero explica cómo hacerlo cuando faltan.

#### Scenario: Requisitos nombrados
- **WHEN** se lee la sección de requisitos en cada idioma
- **THEN** se mencionan Windows, macOS, git 2.30 o posterior y Claude Code o Codex con sesión iniciada, y se dice que la app no los instala pero explica cómo hacerlo

#### Scenario: Enlaces a las herramientas
- **WHEN** se inspeccionan las fichas de Claude Code, Codex, Git y OpenSpec
- **THEN** el nombre de cada una enlaza a la página de esa herramienta

#### Scenario: Sin afirmaciones no verificadas
- **WHEN** se revisa el texto de la sección
- **THEN** no nombra otros sistemas operativos ni otros CLI de IA como compatibles, ni cifras de rendimiento, tamaño de instalación o precio

#### Scenario: Rutas y comandos en monoespaciada
- **WHEN** la portada muestra un nombre de comando, versión o ruta (por ejemplo `git` o `claude`)
- **THEN** se presenta dentro de `code` o `pre` en la fuente monoespaciada del sitio

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

### Requirement: Grupos de proyectos
La sección Estado SHALL mostrar que varios repositorios de un mismo producto forman un grupo con su Estado conjunto.

#### Scenario: Contenido de grupos
- **WHEN** se lee la sección Estado en cada idioma
- **THEN** nombra el grupo y sus repositorios, y el Estado reúne tareas de todos ellos

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

### Requirement: Límites de lo que se anuncia
Los textos de la portada MUST NOT presentar como disponibles las integraciones con Jira, Linear o GitHub Issues, los sprints, la delegación entre agentes, las ejecuciones en paralelo, la fase 3 de la colaboración ni un servicio de cuentas alojado por Understaffed.

#### Scenario: Sin promesas pendientes
- **WHEN** se busca en el HTML generado de `/` y `/en/`
- **THEN** no aparecen Jira, Linear, GitHub Issues, sprints, ni la afirmación de que Understaffed aloja las cuentas

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

### Requirement: Capturas legibles
Los recortes de capturas de las secciones Cómo funciona y LocalFirst SHALL mostrarse a un tamaño al que su texto se lea, y la tarjeta «Al final, el código» SHALL enseñar un diff real de la app.

#### Scenario: Escala de los recortes
- **WHEN** se miden los recortes de esas dos secciones a 1440 px de ancho de ventana
- **THEN** cada uno se muestra al 85 % o más del tamaño que tiene en la app

#### Scenario: El diff a la vista
- **WHEN** se mira la tercera tarjeta de Cómo funciona
- **THEN** su imagen es el recorte `revision-diff`, con la ruta del archivo y líneas añadidas y quitadas
