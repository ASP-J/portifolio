// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    modules: [
      '@nuxtjs/tailwindcss',
      '@nuxt/icon',
      '@pinia/nuxt',
      '@nuxtjs/color-mode',
    ],
    colorMode: {
        preference: 'lightTheme',
        dataValue: 'theme',
        classSuffix: '',
    },
});