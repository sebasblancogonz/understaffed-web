# site-seo Specification

## Purpose
Define los metadatos y archivos que permiten que buscadores y redes sociales indexen y previsualicen correctamente cada página de la web.

## Requirements

### Requirement: Metadatos por página
Cada página SHALL incluir `<title>`, `meta description`, URL canónica absoluta, etiquetas Open Graph (`og:title`, `og:description`, `og:url`, `og:image`, `og:locale`) y Twitter Card con imagen.

#### Scenario: Metadatos completos
- **WHEN** se inspecciona el `<head>` de `/` y de `/en/`
- **THEN** cada uno tiene título y descripción propios en su idioma, canónica apuntando a sí misma y todas las etiquetas Open Graph y Twitter con valores no vacíos

#### Scenario: Imagen para compartir ausente
- **WHEN** el equipo aún no ha aportado la imagen Open Graph
- **THEN** la entrega lo declara como pendiente con `TODO:` y las etiquetas apuntan a la ruta esperada

### Requirement: Estructura de encabezados
Cada página SHALL tener un único `h1` y los encabezados MUST seguir un orden sin saltos de nivel.

#### Scenario: Un solo h1
- **WHEN** se cuentan los `h1` de cada página generada
- **THEN** hay exactamente uno y ningún `h3` aparece sin un `h2` previo

### Requirement: Sitemap y robots
El build SHALL generar un sitemap con ambas URLs, y el sitio SHALL publicar `robots.txt` que permita el rastreo y referencie el sitemap.

#### Scenario: Archivos generados
- **WHEN** termina `pnpm build`
- **THEN** `dist/` contiene el sitemap con `/` y `/en/` y `dist/robots.txt` con la URL absoluta del sitemap

### Requirement: Favicon
El sitio SHALL declarar un favicon en el `<head>` de todas las páginas.

#### Scenario: Favicon disponible
- **WHEN** se carga cualquier página
- **THEN** la ruta del favicon declarada responde con un archivo existente
