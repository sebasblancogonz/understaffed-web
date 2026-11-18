# Spec Delta

## MODIFIED Requirements

### Requirement: Secciones de la portada
La portada SHALL mostrar, en este orden: cabecera con la marca y el cambio de idioma, hero con demostración, cómo funciona, lo que la app usa (requisitos), Estado del grupo, roles, local y cuenta, lista de espera y pie con los enlaces a las secciones. Cada idioma MUST contener las mismas secciones.

#### Scenario: Orden de secciones
- **WHEN** se abre `/` o `/en/`
- **THEN** el documento contiene `header`, `main` con las secciones hero, cómo funciona, requisitos, Estado, roles, local y lista de espera en ese orden, y `footer`

#### Scenario: Navegación por anclas
- **WHEN** el usuario activa un enlace del pie
- **THEN** la página se desplaza a la sección correspondiente y el foco queda en ella o junto a ella

#### Scenario: Requisitos en la navegación
- **WHEN** se inspeccionan los enlaces del pie de `/` y de `/en/`
- **THEN** incluyen uno a la sección de requisitos cuyo `href` coincide con el `id` de esa sección

#### Scenario: Navegación acotada
- **WHEN** se cuentan los enlaces del pie a las secciones
- **THEN** hay como mucho cinco, incluyen la lista de espera y ninguno usa el color de acento

### Requirement: Hero con acción principal
El hero SHALL contener un único `h1` de como mucho 32 caracteres, una frase que explique que Understaffed gestiona proyectos de software con un equipo de agentes de IA y que nada llega a la rama del usuario sin sus dos aprobaciones, y una única acción principal, «Pedir acceso», con el color de acento, que lleve a la sección de la lista de espera.

#### Scenario: Una sola acción principal
- **WHEN** se renderiza el hero
- **THEN** existe exactamente un enlace con estilo de acción principal, su `href` es el `id` de la sección de la lista de espera y no hay ningún enlace ni texto de descarga

#### Scenario: Titular corto
- **WHEN** se mide el `h1` a 1440, 768 y 360 px
- **THEN** ocupa dos líneas o menos en cada ancho

### Requirement: Local primero, cuenta opcional
La portada SHALL indicar que Understaffed funciona en local, que sin cuenta la app no hace ninguna petición de red y todo funciona igual, y que la cuenta, para sincronizar ordenadores y colaborar, es opcional. Lo presenta en tres pestañas (sin cuenta, con cuenta y en equipo), cada una con su vídeo o su captura.

#### Scenario: Cuenta no requerida
- **WHEN** se lee la sección de funcionamiento local
- **THEN** el texto dice que la cuenta es opcional y ninguna llamada a la acción exige crear cuenta

#### Scenario: Ordenadores y equipo
- **WHEN** se lee la sección de funcionamiento local, con o sin JavaScript
- **THEN** contiene un panel sin cuenta, otro sobre sincronizar los ordenadores del usuario y otro sobre colaborar con otras personas, cada uno con su vídeo o su captura; sin JavaScript se ven los tres uno tras otro

### Requirement: Requisitos de uso
La portada SHALL incluir una sección de requisitos, presentada como un tablero de lo que la app usa, que indique que es una app de escritorio para Windows y macOS, que necesita git 2.30 o posterior y Claude Code instalado y con sesión iniciada, que OpenSpec va incluido y que la app no instala git ni Claude Code pero explica cómo hacerlo cuando faltan.

#### Scenario: Requisitos nombrados
- **WHEN** se lee la sección de requisitos en cada idioma
- **THEN** se mencionan Windows, macOS, git 2.30 o posterior y Claude Code con sesión iniciada, y se dice que la app no los instala pero explica cómo hacerlo

#### Scenario: Sin afirmaciones no verificadas
- **WHEN** se revisa el texto de la sección
- **THEN** no nombra otros sistemas operativos ni otros CLI de IA como compatibles, ni cifras de rendimiento, tamaño de instalación o precio

#### Scenario: Rutas y comandos en monoespaciada
- **WHEN** la portada muestra un nombre de comando, versión o ruta (por ejemplo `git` o `claude`)
- **THEN** se presenta dentro de `code` o `pre` en la fuente monoespaciada del sitio

### Requirement: Vista Estado
La portada SHALL incluir una sección que presente la vista Estado de un grupo: lo que espera la decisión del usuario, lo que está en marcha y lo integrado, en las tareas de los repositorios del grupo, con su coste. Muestra también las capturas reales de Estado y del grupo.

#### Scenario: Contenido de Estado
- **WHEN** se lee la sección Estado en cada idioma
- **THEN** aparecen tareas de al menos dos repositorios del grupo con su estado, y las capturas `estado` y `grupos`

#### Scenario: El coste no es un precio
- **WHEN** se revisa el texto sobre el coste
- **THEN** describe el gasto que informa el proveedor por ejecución y no contiene ningún precio de Understaffed

### Requirement: Grupos de proyectos
La sección Estado SHALL mostrar que varios repositorios de un mismo producto forman un grupo con su Estado conjunto.

#### Scenario: Contenido de grupos
- **WHEN** se lee la sección Estado en cada idioma
- **THEN** nombra el grupo y sus repositorios, y el Estado reúne tareas de todos ellos

### Requirement: Lista de espera
La portada SHALL cerrar con una sección de lista de espera que contenga el único formulario de la página, escrito como una frase cuyo hueco es el campo de email y cuya última parte es el botón «Pedir acceso». Pide solo el email, envía el idioma de la página en un campo oculto y aclara que apuntarse no crea una cuenta.

#### Scenario: Un solo formulario
- **WHEN** se inspecciona el HTML de `/` y de `/en/`
- **THEN** hay exactamente un `form`, dentro de la sección de la lista de espera, con un único campo visible `type="email"`, `required`, `autocomplete="email"` y una etiqueta visible, más un campo oculto `lang` con el idioma de la página

#### Scenario: Sin destino configurado
- **WHEN** `config.waitlistUrl` está vacío
- **THEN** el formulario no tiene `action`, el botón de envío está deshabilitado y se ve un texto `TODO:` que indica que falta el destino

#### Scenario: Con destino configurado
- **WHEN** `config.waitlistUrl` tiene una URL
- **THEN** el formulario envía por `POST` a esa URL, el botón está habilitado y no se ve el `TODO:` del destino

#### Scenario: Confirmación
- **WHEN** se abre la portada con el fragmento `#thanks`
- **THEN** se muestra el mensaje de confirmación en el idioma de la página y el formulario queda oculto, sin JavaScript

#### Scenario: Aviso de privacidad pendiente
- **WHEN** aún no existe el texto legal
- **THEN** junto al formulario se ve un texto `TODO:` que indica que falta el aviso de privacidad

## ADDED Requirements

### Requirement: Demostración de las aprobaciones
El hero SHALL incluir un fragmento del tablero que lleve la tarea de demostración #4 «Exportar pedidos a CSV» por las cinco columnas. La tarea solo avanza cuando el visitante pulsa «Aprobar spec», «Ejecutar» y «Aprobar». El fragmento usa las etiquetas reales de la app y se presenta como demostración.

#### Scenario: Nada avanza sin pulsar
- **WHEN** el visitante no pulsa ninguna acción
- **THEN** la tarea sigue en Backlog con «Espera tu aprobación», y tras la ejecución se detiene en En revisión con «Espera tu revisión»

#### Scenario: Recorrido completo
- **WHEN** el visitante pulsa «Aprobar spec», «Ejecutar» y «Aprobar»
- **THEN** la tarea pasa por Por hacer, En curso y En revisión hasta Hecho, y cada cambio se anuncia en una región `aria-live`

#### Scenario: Sin JavaScript
- **WHEN** se carga la portada sin JavaScript
- **THEN** se ve la tarjeta esperando aprobación y los pasos escritos, sin botones que no hagan nada

### Requirement: Roles
La portada SHALL presentar cómo se contrata un rol con el editor de la app a tamaño real: nombre, instrucciones de la plantilla «Desarrollador backend», modelo, el permiso «Ejecutar comandos» y la línea sobre herramientas, con notas al margen que explican cada parte con los textos de la app.

#### Scenario: Plantillas reales
- **WHEN** se lee la sección de roles
- **THEN** las plantillas nombradas son las de la app (Analista de producto, Desarrollador full-stack, frontend y backend, y Tester) y las instrucciones son las de la plantilla de backend
