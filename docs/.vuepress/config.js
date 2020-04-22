module.exports = {
  base: '/zch-ui/',
  title: 'zch-ui',
  description: 'Zch，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '组件', link: '/components/' },
      {
        text: '选择语言',
        items: [ { text: '简体中文', link: '?Chinese' }, { text: 'English', link: '?English' } ]
      },
      { text: '预览', link: 'https://zch233.github.io/zch-ui/', target:'_blank' },
      { text: 'GitHub', link: 'https://github.com/zch233/zch-ui', target:'_blank' },
    ],
  }
}
