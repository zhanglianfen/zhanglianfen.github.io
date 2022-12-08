import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
    themeColor: {
        blue: "#2196f3",
        red: "#f26d6d",
        green: "#3eaf7c",
        orange: "#fb9b5f",
    },
    fullscreen: true,
    hostname: "https://theme-zhang.netlify.app/",

    author: {
        name: "Mr.Zhang",
        url: "https://www.cnblogs.com/zhang1f/",
    },

    iconAssets: "iconfont",

    logo: "/logo.svg",

    repo: "zhanglianfen/zhanglianfen.github.io",

    docsDir: "",

    pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

    blog: {
        medias: {
            Gitee: "https://gitee.com/zhang1f",
            GitHub: "https://github.com/zhanglianfen", 
        },
    },

    locales: {
        "/en/": {
            // navbar
            navbar: enNavbar,

            // sidebar
            sidebar: enSidebar,

            footer: "Happy every day",

            displayFooter: true,

            blog: {
                description: "Happy every day",
                intro: "/en/intro.html",
            },

            metaLocales: {
                editLink: "Edit this page on GitHub",
            },
        },

        /**
         * Chinese locale config
         */
        "/zh/": {
            // navbar
            navbar: zhNavbar,

            // sidebar
            sidebar: zhSidebar,

            footer: "很高兴见到你",

            displayFooter: true,

            blog: {
                description: "很高兴见到你",
                intro: "/zh/intro.html",
            },

            // page meta
            metaLocales: {
                editLink: "在 GitHub 上编辑此页",
            },
        },
    },

    encrypt: {
        config: {
            "/en/demo/encrypt.html": ["1234"],
            "/zh/demo/encrypt.html": ["1234"],
        },
    },

    plugins: {
        blog: {
            autoExcerpt: true,
        },

        // If you don’t need comment feature, you can remove following option
        // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
        // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
        comment: {
            /**
             * Using Giscus
             */
            provider: "Giscus",
            repo: "zhanglianfen/giscus-discussions",
            repoId: "R_kgDOIkkjqg",
            category: "Announcements",
            categoryId: "DIC_kwDOIkkjqs4CS8oL",

            /**
             * Using Twikoo
             */
            // provider: "Twikoo",
            // envId: "https://twikoo.ccknbc.vercel.app",

            /**
             * Using Waline
             */
            // provider: "Waline",
            // serverURL: "https://vercel-comment-zhanglianfen.vercel.app",
        },

        // Disable features you don’t want here
        mdEnhance: {
            align: true,
            attrs: true,
            chart: true,
            codetabs: true,
            container: true,
            demo: true,
            echarts: true,
            flowchart: true,
            gfm: true,
            imageLazyload: true,
            imageTitle: true,
            imageSize: true,
            include: true,
            katex: true,
            mark: true,
            mermaid: true,
            playground: {
                presets: ["ts", "vue"],
            },
            presentation: {
                plugins: ["highlight", "math", "search", "notes", "zoom"],
            },
            stylize: [
                {
                    matcher: "Recommended",
                    replacer: ({ tag }) => {
                        if (tag === "em")
                            return {
                                tag: "Badge",
                                attrs: { type: "tip" },
                                content: "Recommended",
                            };
                    },
                },
            ],
            sub: true,
            sup: true,
            tabs: true,
            vPre: true,
            vuePlayground: true,
        },

        // uncomment these if you want a PWA
        // pwa: {
        //   favicon: "/favicon.ico",
        //   cacheHTML: true,
        //   cachePic: true,
        //   appendBase: true,
        //   apple: {
        //     icon: "/assets/icon/apple-icon-152.png",
        //     statusBarColor: "black",
        //   },
        //   msTile: {
        //     image: "/assets/icon/ms-icon-144.png",
        //     color: "#ffffff",
        //   },
        //   manifest: {
        //     icons: [
        //       {
        //         src: "/assets/icon/chrome-mask-512.png",
        //         sizes: "512x512",
        //         purpose: "maskable",
        //         type: "image/png",
        //       },
        //       {
        //         src: "/assets/icon/chrome-mask-192.png",
        //         sizes: "192x192",
        //         purpose: "maskable",
        //         type: "image/png",
        //       },
        //       {
        //         src: "/assets/icon/chrome-512.png",
        //         sizes: "512x512",
        //         type: "image/png",
        //       },
        //       {
        //         src: "/assets/icon/chrome-192.png",
        //         sizes: "192x192",
        //         type: "image/png",
        //       },
        //     ],
        //     shortcuts: [
        //       {
        //         name: "Demo",
        //         short_name: "Demo",
        //         url: "/demo/",
        //         icons: [
        //           {
        //             src: "/assets/icon/guide-maskable.png",
        //             sizes: "192x192",
        //             purpose: "maskable",
        //             type: "image/png",
        //           },
        //           {
        //             src: "/assets/icon/guide-monochrome.png",
        //             sizes: "192x192",
        //             purpose: "monochrome",
        //             type: "image/png",
        //           },
        //         ],
        //       },
        //     ],
        //   },
        // },
    },
});
