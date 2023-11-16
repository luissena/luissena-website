// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Luis Sena",
    },
  },
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: ["nuxt-icon"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
