module.exports = {
  title: 'hihaoki',
  description: 'Just playing around',
  head:[
    // ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    // ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    // ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    // ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    // ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      {
        text: '语言',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Chinese', link: '/language/chinese/' }
        ]
      }
    ],
    // sidebar: [
    //   '/',
    //   '/guide',
    //   ['/page-b', 'Explicit link text']
    // ],
    sidebar: 'auto',
    // displayAllHeaders: true // 默认值：false,
    // activeHeaderLinks: false, // 默认值：true,
    lastUpdated: true, //'Last Updated'    string | boolean
    // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
    // nextLinks: false,
    // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
    // prevLinks: false
    smoothScroll: true
  }
}