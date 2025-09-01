export default [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          // Autoriser CKEditor (déjà mis plus haut chez toi)
          'script-src': ["'self'", 'https://cdn.ckeditor.com'],
          'connect-src': ["'self'", 'https://proxy-event.ckeditor.com'],

          // 🔥 Autoriser les images Cloudinary + previews data/blob
          'img-src': ["'self'", 'data:', 'blob:', 'https://res.cloudinary.com'],
          // (utile si tu as des <video>/<audio> dans CKEditor)
          'media-src': ["'self'", 'data:', 'blob:', 'https://res.cloudinary.com'],

          // (souvent nécessaires pour l’UI de l’admin/CKEditor)
          'style-src': ["'self'", "'unsafe-inline'", 'https://cdn.ckeditor.com'],
          'font-src':  ["'self'", 'data:', 'https://cdn.ckeditor.com'],

          // Optionnel : si tu vois encore des erreurs dans la console admin, on complétera ici.
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
