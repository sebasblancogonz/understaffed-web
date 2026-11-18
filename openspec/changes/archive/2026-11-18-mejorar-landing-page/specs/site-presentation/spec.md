# Spec Delta

## ADDED Requirements

### Requirement: Capturas según el tema
Cada captura de la app SHALL mostrarse en la variante que corresponde al tema del sistema, clara u oscura, y en el idioma de la página. El navegador MUST NOT descargar la variante del otro tema.

#### Scenario: Preferencia oscura
- **WHEN** el sistema prefiere el tema oscuro y se abre `/en/`
- **THEN** cada captura mostrada es la variante oscura en inglés

#### Scenario: Preferencia clara
- **WHEN** el sistema prefiere el tema claro y se abre `/`
- **THEN** cada captura mostrada es la variante clara en español

#### Scenario: Una sola variante descargada
- **WHEN** se listan las peticiones de imágenes de la portada con el tema oscuro
- **THEN** no hay ninguna petición a un archivo de captura de la variante clara

#### Scenario: Variante ausente
- **WHEN** falta en `src/assets/` la variante de un tema para una captura
- **THEN** la sección muestra el marcador con `TODO:` y el nombre del archivo esperado en ese tema, y el build no falla

#### Scenario: Sin saltos de diseño
- **WHEN** las dos variantes de una captura tienen las mismas dimensiones y se cambia el tema del sistema
- **THEN** la imagen declara las mismas proporciones y el CLS sigue siendo 0,1 o menos
