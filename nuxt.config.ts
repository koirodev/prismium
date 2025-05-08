export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,

  runtimeConfig: {
    public: {
      siteUrl: 'https://example.ru',
      gitApi: 'https://api.github.com/repos/koirodev/prismium',
      latestVersion: 'https://registry.npmjs.org/prismium/latest',
    },
  },

  imports: { autoImport: true, scan: true },

  modules: [
    '@vueuse/nuxt',
    'nuxt-svgo',
    'nuxt-file-storage',
    'nuxt-typed-router',
    '@nuxtjs/sitemap',
    '@pinia/nuxt',
    '@nuxtjs/i18n',
  ],

  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    compilation: {
      strictMessage: false,
      escapeHtml: false,
    },
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: true,
      fallbackLocale: 'en',
    },
    experimental: {
      alternateLinkCanonicalQueries: true,
      switchLocalePathLinkSSR: true,
    },
    locales: [
      { code: 'en', language: 'en-US', name: 'English', file: 'en.json' },
      { code: 'ru', language: 'ru-RU', name: 'Русский', file: 'ru.json' },
      { code: 'zh', language: 'zh-CN', name: '中国人', file: 'zh.json' },
    ],
  },

  site: {
    url: 'https://example.ru',
    name: 'Prismium docs',
    trailingSlash: true,
  },

  sitemap: {
    // excludeAppSources: true,
    // sources: ['/api/sitemap'],
  },

  svgo: {
    autoImportPath: '~/assets/svg',
    componentPrefix: 'svg',
    defaultImport: 'componentext',
  },

  experimental: {
    defaults: {
      nuxtLink: {
        activeClass: 'router-link-active',
        exactActiveClass: 'router-link-exact-active',
        trailingSlash: 'append',
      },
    },
  },

  app: {
    head: {
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon/favicon-96x96.png',
          sizes: '96x96',
        },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon/favicon.svg' },
        { rel: 'shortcut icon', href: '/favicon/favicon.ico' },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/favicon/apple-touch-icon.png',
        },
        { rel: 'manifest', href: '/favicon/site.webmanifest' },
      ],
      meta: [
        { name: 'apple-mobile-web-app-title', content: 'Prismium' },
        { name: 'robots', content: 'noindex, nofollow' },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  router: { options: { scrollBehaviorType: 'auto' } },

  css: ['normalize.css', '~/assets/styles/index.scss'],

  vite: {
    build: { rollupOptions: { output: { manualChunks: undefined } } },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use '~/assets/styles/mixins/hover' as *;
            @use '~/assets/styles/mixins/media' as *;
            @use '~/assets/styles/mixins/mini' as *;
            @use '~/assets/styles/mixins/pseudo' as *;
            @use '~/assets/styles/mixins/scrollbar' as *;
          `,
          silenceDeprecations: ['legacy-js-api', 'import'],
        },
      },
      devSourcemap: true,
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      'postcss-media-minmax': {},
      autoprefixer: {},
    },
  },

  compatibilityDate: '2025-05-02',
});
