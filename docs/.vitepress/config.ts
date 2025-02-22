import { defineConfig } from 'vitepress'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const pkg = require('vitepress/package.json')

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  lang: 'zh-CN',
  title: "Han_Jiang 模组文档",
  description: "模组使用相关文档",
  cleanUrls: true, //开启纯净链接 //
  head: [
    ['link',{ rel: 'icon', href: '../public/logo.png'}],
  ],
  // 多语言配置
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/'
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/'
    }
  },
  // 站点地图
  sitemap: {
    hostname: 'http://localhost:5173/',
  },
  lastUpdated: true, //首次配置不会立即生效，需git提交后爬取时间戳 //

  themeConfig: {
    //本地搜索
    search: {
      provider: "local",
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                noResultsText: "无法找到相关结果",
                resetButtonTitle: "清除查询条件",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                  closeText: "关闭",
                },
              },
            },
          },
        },
      },
    },
    //返回顶部文字修改 //
    returnToTopLabel:'返回顶部', 
    // 深浅模式切换
    darkModeSwitchLabel: '深浅模式',
    //编辑本页
    editLink: { 
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path', // 改成自己的仓库
      text: '在GitHub编辑本页'
    },
    // 自定义上下页名
    docFooter: { 
      prev: '上一页', 
      next: '下一页', 
    }, 
    //上次更新时间 //
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short', // 可选值full、long、medium、short
        timeStyle: 'medium' // 可选值full、long、medium、short
      },
    },
    // https://vitepress.dev/reference/default-theme-config
    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: `${pkg.version}`, link: '/version'},
      {
        text: '指南',
        items: [
          { text: '前言', link: '/preface' },
          { text: '快速上手', link: '/getting-started' },
          { text: '查找', link: '/configuration' }
        ]
      },
      // noIcon 不显示图标
      { text: '个人主页', link: 'https://2119.online/', noIcon: true },
      {
        text: '友情链接',
        items: [
          { text: 'KLPBSS', link: 'https://klpbbs.com/' },
          { text: 'MCBBS 纪念版', link: 'https://www.mcbbs.co/' },
          { text: '红石中继站', link: 'https://www.mczwlt.net/' },
          { text: 'EWO', link: 'https://ewo.org.cn/' }
        ]
      },
    ],
    //侧边栏文字更改(移动端) //
    sidebarMenuLabel:'目录',
    // 侧边栏
    sidebar: [
      {
        text: '版本',
        items: [
          { text: '版本', link: '/version' },
          { text: '更新日志', link: '/changelog' }
        ]
      }
    ],
    // 侧边栏配置
    outline: { 
      level: [2,4], // 显示2-4级标题
      // level: 'deep', // 显示2-6级标题
      label: '当前页大纲' // 文字显示
    },
    // 页脚
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    // 页脚2
    footer: { 
      message: 'Released under the GNU General Public License v3.0.', 
      copyright: 'Han_Jiang © 2025 | <a href="https://icp.gov.moe/?keyword=20252119" target="_blank">萌ICP备20252119号</a>&nbsp;<a target="_blank" href="https://beian.miit.gov.cn/"> 鲁ICP备2024114192号-1 </a>&nbsp;<a href="https://beian.mps.gov.cn/#/query/webSearch?code=37040302006058" rel="noreferrer" target="_blank">鲁公网安备37040302006058</a>',  
    }, 
  },

  markdown:{
    image: {
      // 开启图片懒加载
      lazyLoading: true
    },
  },
})
