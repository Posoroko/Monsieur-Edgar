// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        '@/assets/css/buttons.css',
        '@/assets/css/colors.css',
        '@/assets/css/fonts.css',
        '@/assets/css/main.css',
        '@/assets/css/reset.css',
        '@/assets/css/utility.css'
    ],
    extends: [
        'nuxt-seo-kit'
    ],
    runtimeConfig: {
        public: {
            siteUrl: 'https://monsieuredgar.com',
            siteName: 'Monsieur Edgar, sites Web en Centre-Bretagne',
            title: 'Monsieur Edgar, création de sites Web à Carhaix-Plouguer, Centre-Bretagne, Finistère',
            siteDescription: "Création de sites Web à Carhaix-PLouguer, Centre-Bretagne, Finistère.  Monsieur Edgar propose le design, le développement et l'hébergement de sites web pour artisans et petites entreprises",
            language: 'fr-FR',
        }
    },
    app: {
        // pageTransition: { name: 'page', mode: 'out-in' },
        head: {
            htmlAttrs: {
                lang: 'fr'
            },
            link: [
                {
                    rel: 'icon',
                    type: 'image/x-icon',
                    href: '/images/site-icon.png',
                },
                {
                    rel: 'apple-touch-icon',
                    sizes: '180x180',
                    href: '/favicon/apple-touch-icon.png',
                },
                {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: '32x32',
                    href: '/favicon/favicon-32x32.png',
                },
                {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: '16x16',
                    href: '/favicon/favicon-16x16.png',
                },
                {
                    rel: "manifest",
                    href: "/favicon/site.webmanifest"
                },
                {
                    rel: "shortcut icon",
                    href: "/favicon/favicon.ico"
                }
            ],
            charset: 'utf-8',
            viewport: 'width=500, initial-scale=1',
            meta: [
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'description', content: "Création de sites Web à Carhaix-PLouguer, Centre-Bretagne, Finistère.  Monsieur Edgar propose le design, le développement et l'hébergement de sites web pour artisans et petites entreprises" },
                { name: "og:description", content: "Création de sites Web à Carhaix-PLouguer, Centre-Bretagne, Finistère.  Monsieur Edgar propose le design, le développement et l'hébergement de sites web pour artisans et petites entreprises" },
                { name: "og:site_name", content: 'Monsieur Edgar, création de sites Web à Carhaix-Plouguer, Centre-Bretagne, Finistère' },
                { name: "og:type", content: "website" },
            ],
        }
    }
})
