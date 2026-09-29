import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Neru Wiki",
  description: "Википедия города Нерюнгри",
  lang: 'ru-RU',
  base: '/main/',
  themeConfig: {
    nav: [
      { text: 'Главная', link: '/' },
      { text: 'Улицы', link: '/streets/' },
    ],
    search: {
      provider: 'local'
    },
    sidebar: [
      {
        text: 'Чурапчинская',
        items: [
          { text: 'Чурапчинская 1', link: '/01010' },
        ]
      }
    ]
  }
})
