export default {
  title: "Neru Wiki",
  description: "Википедия города Нерюнгри",
  lang: 'ru-RU',
  base: '/main/',

  head: [
    ['meta', { name: 'keywords', content: 'Нерюнгри, история, архитектура, улицы, деревянные дома, утраченный слой, Neru Wiki, Якутия, краеведение, Neruyngri, Neryungri, деревяшки, панельки, Нюрка, СССР, архив, архивные фото, википедия, фандом, неру, нерулайф, nerulife, neruinfo, неруинфо, 3D макет, 2000, N2K, жители' }],
    ['meta', { name: 'author', content: 'Neru Wiki' }],
    ['meta', { name: 'robots', content: 'index, follow' }],
    ['meta', { property: 'og:title', content: 'Neru Wiki - Википедия города Нерюнгри' }],
    ['meta', { property: 'og:description', content: 'Мы создаём историю вместе!' }],
    ['meta', { property: 'og:type', content: 'website' }],
  ],

  sitemap: {
    hostname: 'https://neru-wiki.github.io/main/'
  },

  themeConfig: {
    nav: [
      { text: 'Улицы', link: '/streets/' },
      { text: 'Кварталы', link: '/sections/' },
      { text: 'Проекты', link: '/patterns/' },
      { text: 'Источники', link: '/sources' },
      { text: 'Автор', link: '/admin' },
    ],
    search: {
      provider: 'local'
    },
    outline: false
  }
}
