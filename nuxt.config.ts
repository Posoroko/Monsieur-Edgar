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
            siteName: 'Monsieur Edgar',
            title: 'Monsieur Edgar',
            siteDescription: 'Monsieur Edgar, service web complet pour les petites entreprises',
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
            ],
            charset: 'utf-8',
            viewport: 'width=500, initial-scale=1',
            meta: [
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                // { name: 'description', content: 'Site de la Mairie de Poullaouën.' },
                // { name: "og:description", content: 'Site de la Mairie de Poullaouën.' },
                // { name: "og:site_name", content: "Mairie de Poullaouen" },
                { name: "og:type", content: "website" },
                // { name: "og:image", content: "@carine_leduc" },
                // { name: "og:url", content: "https://mairie-poullaouen.fr" },
            ],
        }
    }
})
