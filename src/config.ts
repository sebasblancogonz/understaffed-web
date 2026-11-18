/** Datos configurables que el equipo aún no ha definido. */
export const config = {
  // TODO: destino de la lista de espera (URL a la que el formulario envía por POST).
  // Mientras esté vacío, el formulario no se puede enviar y muestra un TODO. Si el
  // servicio permite redirigir tras apuntarse, configúralo para volver a `/#thanks`
  // (o `/en/#thanks`): la portada muestra entonces la confirmación sin JavaScript.
  waitlistUrl: '',
  // TODO: imagen Open Graph (1200×630) aportada por el equipo en public/og.png.
  ogImagePath: '/og.png',
} as const;

export const locales = ['es', 'en'] as const;
export type Lang = (typeof locales)[number];

export const paths: Record<Lang, string> = { es: '/', en: '/en/' };
