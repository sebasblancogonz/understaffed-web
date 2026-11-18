# Spec Delta

## MODIFIED Requirements

### Requirement: Secciones de la portada
La portada SHALL mostrar, en este orden: cabecera con navegación, hero, cómo funciona, aprobaciones humanas, funcionamiento local con cuenta opcional, requisitos y pie. Cada idioma MUST contener las mismas secciones.

#### Scenario: Orden de secciones
- **WHEN** se abre `/` o `/en/`
- **THEN** el documento contiene `header`, `main` con las cinco secciones de contenido (hero, cómo funciona, aprobaciones, local, requisitos) en el orden indicado y `footer`

#### Scenario: Navegación por anclas
- **WHEN** el usuario activa un enlace de la navegación
- **THEN** la página se desplaza a la sección correspondiente y el foco queda en ella o junto a ella

#### Scenario: Requisitos en la navegación
- **WHEN** se inspecciona la navegación de `/` y de `/en/`
- **THEN** incluye un enlace a la sección de requisitos cuyo `href` coincide con el `id` de esa sección

### Requirement: Explicación del flujo de trabajo
La sección "cómo funciona" SHALL describir que el usuario contrata roles, les asigna tareas de un tablero y revisa su trabajo, y que cada tarea es un cambio de OpenSpec en el repositorio. MUST usar los términos roles, tareas, tablero, revisión y spec, y presentar los pasos en el orden real de una tarea: spec, aprobación de la spec, ejecución, revisión y aprobación del código.

#### Scenario: Términos de la app presentes
- **WHEN** se lee el texto de la sección en español
- **THEN** aparecen las palabras "roles", "tareas", "tablero", "revisión" y "spec", y en inglés sus equivalentes acordados en el diccionario de textos

#### Scenario: Orden de los pasos
- **WHEN** se leen en orden los pasos de la sección en `/` y en `/en/`
- **THEN** la revisión aparece antes de la aprobación del código y la aprobación de la spec antes de la ejecución, y no hay un paso que presente el código como aprobado antes de revisarlo

## ADDED Requirements

### Requirement: Requisitos de uso
La portada SHALL incluir una sección de requisitos que indique que la app es de escritorio para Windows y macOS, que necesita git 2.30 o posterior y Claude Code instalado y con sesión iniciada, y que la app no instala ninguno de los dos pero explica cómo hacerlo cuando faltan.

#### Scenario: Requisitos nombrados
- **WHEN** se lee la sección de requisitos en cada idioma
- **THEN** se mencionan Windows, macOS, git 2.30 o posterior y Claude Code con sesión iniciada, y se dice que la app no los instala pero explica cómo hacerlo

#### Scenario: Sin afirmaciones no verificadas
- **WHEN** se revisa el texto de la sección
- **THEN** no nombra otros sistemas operativos ni otros CLI de IA como compatibles, ni cifras de rendimiento, tamaño de instalación o precio

#### Scenario: Rutas y comandos en monoespaciada
- **WHEN** la sección muestra un nombre de comando, versión o ruta (por ejemplo `git` o `claude`)
- **THEN** se presenta en la fuente monoespaciada del sitio
