import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "我的宇宙库",
  description: "A VitePress Site",
  themeConfig: {
    logo: "/background.png",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "主页", link: "/" },
      { text: "搜索",items: [
        {text:"谷歌", link: "https://www.google.com/" },
        {text:"油管", link: "https://www.youtube.com/" }
      ]},
    ],

    sidebar: [
      {
        text: "pyhton",
        items: [
          { text: "pyhton发布WebAPI", link: "/python/pythonWebAPI" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/hlw422" }],
    footer: {
      copyright: "Copyright © 2024 5tiaowu Project",
    },
  },
});
