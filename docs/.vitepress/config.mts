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
      { text: 'Кварталы', link: '/sections/' },
      { text: 'Проекты', link: '/patterns/' },
    ],
    search: {
      provider: 'local'
    },
  }
})
