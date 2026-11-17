/** Datos configurables que el equipo aún no ha definido. */
export const config = {
  // TODO: enlace de descarga/instalación. Mientras esté vacío, la acción
  // principal apunta a la sección "cómo funciona" y el hero muestra un TODO.
  downloadUrl: '',
  // TODO: imagen Open Graph (1200×630) aportada por el equipo en public/og.png.
  ogImagePath: '/og.png',
} as const;

export const locales = ['es', 'en'] as const;
export type Lang = (typeof locales)[number];

export const paths: Record<Lang, string> = { es: '/', en: '/en/' };
