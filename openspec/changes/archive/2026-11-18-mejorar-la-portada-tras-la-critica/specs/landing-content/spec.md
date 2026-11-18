# Spec Delta

## MODIFIED Requirements

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

### Requirement: Requisitos de uso
La portada SHALL incluir una sección de requisitos, presentada como un tablero de lo que la app usa, que indique que es una app de escritorio para Windows y macOS, que necesita git 2.30 o posterior y Claude Code instalado y con sesión iniciada, que OpenSpec va incluido y que la app no instala git ni Claude Code pero explica cómo hacerlo cuando faltan.

#### Scenario: Requisitos nombrados
- **WHEN** se lee la sección de requisitos en cada idioma
- **THEN** se mencionan Windows, macOS, git 2.30 o posterior y Claude Code con sesión iniciada, y se dice que la app no los instala pero explica cómo hacerlo

#### Scenario: Enlaces a las herramientas
- **WHEN** se inspeccionan las fichas de Claude Code, Git y OpenSpec
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

#### Scenario: El coste no es un precio
- **WHEN** se revisa el texto sobre el coste
- **THEN** describe el gasto que informa el proveedor por ejecución y no contiene ningún precio de Understaffed

### Requirement: Roles
La portada SHALL presentar cómo se contrata un rol con una imagen del diálogo de contratar de la app, con sus textos: nombre, instrucciones de la plantilla «Desarrollador backend», modelo y el permiso «Ejecutar comandos». La imagen MUST NOT contener controles que se puedan enfocar o usar, y MUST tener un texto alternativo que diga lo que enseña.

#### Scenario: Plantillas reales
- **WHEN** se lee la sección de roles
- **THEN** las plantillas nombradas son las de la app (Analista de producto, Desarrollador full-stack, frontend y backend, y Tester) y las instrucciones son las de la plantilla de backend

#### Scenario: El diálogo es una imagen
- **WHEN** se recorre la sección de roles con el teclado y se inspecciona el diálogo
- **THEN** no hay ningún `input`, `textarea` ni `button` dentro, el diálogo tiene `role="img"` con un nombre accesible y el foco no se detiene en él
