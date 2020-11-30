module.exports = ctx => ({
  title: '用一个项目构建自己的知识体系',
  description: '用一个项目构建自己的知识体系',
  head: [
    ['link', { rel: 'icon', href: `/favicon.ico` }],
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
    // editLinks: true,
    // docsDir: 'docs',
    // smoothScroll: true,
    logo: '/logo.png',
    sidebarDepth: 6,
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: '小蜜蜂课堂', link: '/tinybee-ke/' },
      { text: '源码阅读', link: '/code-source/' },
      {
        text: '语言',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Chinese', link: '/' }
        ]
      }
    ],
    sidebar: {
      '/guide/': getGuideSidebar('指南', '进阶'),
      // '': {
      //   sidebarDepth 
      // },
      '/tinybee-ke/': [
        '',
        'model-design',
        'db-design',
        {
          name: '后端服务设计',
          title: '后端服务设计',
          collapsable: true,
          sidebarDepth: 3,
          children: [
            ['server/', '概览'],
            ['server/choosing-technology', '技术选型']
          ]
        },
        {
          title: '前端设计',
          collapsable: false,
          children: []
        },
        {
          title: '服务申请(三方)',
          collapsable: false,
          children: []
        }
      ],
      '/code-source/': 
      {
        title: '源码阅读',
          collapsable: false,
          children: [
            {
              title: 'mybatis',
              collapsable: true,
              // path: '/code-source/mybatis/',
              sidebarDepth: 3,
              children: [
                '',
                '/code-source/mybatis/quick-start/'
              ]
            },
            {
              title: 'spring-framework',
              collapsable: true,
              path: '/code-source/spring-framework/',
              sidebarDepth: 3,
              children: [
                '.',
                'quick-start/'
              ]
            },
            {
              title: 'netty',
              collapsable: true,
              sidebarDepth: 3,
              path: '/code-source/netty/',
              children: [
                '.',
                'quick-start'
              ]
            }
          ]
      }
      
    },
    // sidebar: 'auto',
    displayAllHeaders: true, // 默认值：false,
    // activeHeaderLinks: false, // 默认值：true,
    lastUpdated: true, //'Last Updated'    string | boolean
    // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
    // nextLinks: false,
    // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
    // prevLinks: false
    smoothScroll: true
  }
})


function getGuideSidebar (groupA, groupB) {
  return [
    {
      title: groupA,
      collapsable: true,
      children: [
        '',
        'getting-started'
        // 'directory-structure',
        // 'basic-config',
        // 'assets',
        // 'markdown',
        // 'using-vue',
        // 'i18n',
        // 'deploy'
      ]
    },
    {
      title: groupB,
      collapsable: false,
      children: [
        // 'frontmatter',
        // 'permalinks',
        // 'markdown-slot',
        // 'global-computed'
      ]
    }
  ]
}
