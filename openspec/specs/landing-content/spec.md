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

### Requirement: Hero con acción principal
El hero SHALL contener un único `h1`, una frase que explique que Understaffed gestiona proyectos de software con un equipo de agentes de IA y que nada llega a la rama del usuario sin sus dos aprobaciones, una única acción principal, «Pedir acceso», con el color principal, que lleve a la lista de espera, y como mucho una acción secundaria sin el color principal.

#### Scenario: Una sola acción principal
- **WHEN** se renderiza el hero
- **THEN** existe exactamente un enlace con estilo de acción principal, su `href` es el `id` de la sección de la lista de espera y no hay ningún enlace ni texto de descarga

#### Scenario: Titular corto
- **WHEN** se mide el `h1` a 1440, 768 y 360 px
- **THEN** ocupa dos líneas o menos en 1440 y 768 px

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
La portada SHALL afirmar que Understaffed lanza el CLI de IA que el usuario ya tiene y ya paga, nombrando hoy solo Claude Code, y que no guarda claves.

#### Scenario: Solo Claude Code
- **WHEN** se revisan los textos de la portada
- **THEN** Claude Code es el único CLI de IA nombrado como compatible y no se mencionan otros proveedores como soportados

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
La portada SHALL cerrar con una sección de lista de espera que contenga el único formulario de la página: un campo de email y el botón «Pedir acceso». Pide solo el email, envía el idioma de la página en un campo oculto y aclara que apuntarse no crea una cuenta.

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

### Requirement: Límites de lo que se anuncia
Los textos de la portada MUST NOT presentar como disponibles las integraciones con Jira, Linear o GitHub Issues, los sprints, la delegación entre agentes, las ejecuciones en paralelo, la fase 3 de la colaboración ni un servicio de cuentas alojado por Understaffed.

#### Scenario: Sin promesas pendientes
- **WHEN** se busca en el HTML generado de `/` y `/en/`
- **THEN** no aparecen Jira, Linear, GitHub Issues, sprints, ni la afirmación de que Understaffed aloja las cuentas

### Requirement: Demostración de las aprobaciones
El hero SHALL incluir una ventana de la app con el tablero de cinco columnas tal como está en los datos de demostración: la tarea #6 «Modo oscuro en el panel de administración» espera tu aprobación en Backlog y la #4 «Exportar pedidos a CSV» espera tu revisión. La #6 lleva sus acciones en la propia tarjeta y solo avanza cuando el visitante pulsa «Aprobar spec», «Ejecutar» y «Aprobar». Usa las etiquetas reales de la app y se presenta como demostración.

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
