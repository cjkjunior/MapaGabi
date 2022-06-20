import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    head: {
        title: 'Cadê a Mochila da Gabi',
        titleTemplate: 'My amazing Nuxt application | %s',
        htmlAttrs: {
          lang: 'pt-BR',
          amp: true
        },
        meta: [
          { charset: 'utf-8' },
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1'
          },
          {
            hid: 'description',
            name: 'description',
            content:
              'App simples para mostrar o trajeto de uma encomenda'
          }
        ],
        server: {
            host: '0'
        }
    }
})
