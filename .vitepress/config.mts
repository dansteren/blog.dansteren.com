import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Dan Steren's Blog",
  description: "A Brain Dump",
  srcDir: "./src",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Software Engineering", link: "/software-engineering" },
      { text: "Library", link: "/library" },
    ],

    sidebar: [
      {
        text: "Examples",
        collapsed: false,
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
      {
        text: "Library",
        link: "/library",
        collapsed: false,
        items: [
          { text: "Fiction", link: "/library/fiction" },
          { text: "Non Fiction", link: "/library/non-fiction" },
          { text: "Self Help", link: "/library/self-help" },
          {
            text: "Software Engineering",
            link: "/library/software-engineering",
          },
          { text: "To Read", link: "/library/to-read" },
        ],
      },
      {
        text: "Meta",
        link: "/meta",
        collapsed: false,
        items: [
          {
            text: "How To Create a Blog",
            link: "/meta/how-to-create-a-blog",
          },
        ],
      },
      {
        text: "Software Engineering",
        link: "/software-engineering",
        collapsed: false,
        items: [],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/dansteren/blog.dansteren.com",
      },
    ],
  },
});
