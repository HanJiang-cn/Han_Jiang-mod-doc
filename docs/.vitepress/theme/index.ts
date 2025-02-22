// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import MyLayout from './components/MyLayout.vue'
import "vitepress-markdown-timeline/dist/theme/index.css"
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(MyLayout)
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  }
} satisfies Theme
