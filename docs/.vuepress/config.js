module.exports = {
  base: '/zch-ui/',
  title: 'zch-ui',
  description: 'Zch，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  plugins: ['@vuepress/back-to-top', '@vuepress/nprogress', '@vuepress/active-header-links'],
  themeConfig: {
    logo: '/logo.png',
    displayAllHeaders: true,
    nav: [
      { text: '首页', link: '/' },
      { text: '组件', link: '/components/' },
      {
        text: '选择语言',
        items: [ { text: '简体中文', link: '?Chinese' }, { text: 'English', link: '?English' } ]
      },
      { text: 'NPM', link: 'https://www.npmjs.com/package/zch-gulu', target:'_blank' },
      { text: 'GitHub', link: 'https://github.com/zch233/zch-ui', target:'_blank' },
    ],
    sidebar: {
      '/components/': [
        {
          title: '通用',
          collapsable: false,
          children: [
            { title: 'Layout 布局', path: '/components/basic/layout/' },
            { title: 'Container 布局容器', path: '/components/basic/container/' },
            { title: 'Icon 图标', path: '/components/basic/icon/' },
            { title: 'Button 按钮', path: '/components/basic/button/' },
          ]
        },
        {
          title: '数据录入',
          collapsable: false,
          children: [
            { title: 'Input 输入框', path: '/components/form/input/' },
          ]
        },
        {
          title: '数据展示',
          collapsable: false,
          children: [
            { title: 'Tag 标签', path: '/components/data/tag/' },
            { title: 'Tabs 标签页', path: '/components/data/tabs/' },
          ]
        },
        {
          title: '反馈',
          collapsable: false,
          children: [
            { title: 'Popover 弹出框', path: '/components/others/popover/' },
            { title: 'Collapse 折叠面板', path: '/components/others/collapse/' },
            { title: 'Toast 消息提示', path: '/components/others/toast/' },
          ]
        },
      ],
    }
  }
}
