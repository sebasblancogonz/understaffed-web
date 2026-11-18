# Spec Delta

## ADDED Requirements

### Requirement: Formulario accesible sin JavaScript
El formulario de la lista de espera SHALL funcionar sin JavaScript, con etiqueta visible y foco visible, validar el formato del email con la validación nativa del navegador y mostrar el borde del campo con un contraste de 3:1 o más frente a su fondo en ambos temas.

#### Scenario: Validación nativa
- **WHEN** el usuario intenta enviar el formulario con un texto que no es un email
- **THEN** el navegador impide el envío y señala el campo, sin JavaScript de la aplicación

#### Scenario: Contraste del campo
- **WHEN** se mide el borde del campo de email frente al fondo de la sección, en claro y en oscuro
- **THEN** la relación de contraste es 3:1 o más

#### Scenario: Botón deshabilitado reconocible
- **WHEN** el botón de envío está deshabilitado
- **THEN** se distingue visualmente del habilitado y un texto visible explica por qué

### Requirement: Carga diferida de capturas
Las capturas que no están en el hero SHALL cargarse en diferido (`loading="lazy"`), y la del hero SHALL cargarse de inmediato.

#### Scenario: Atributo de carga
- **WHEN** se inspeccionan las `img` del HTML generado
- **THEN** la captura del hero no tiene `loading="lazy"` y todas las demás sí
