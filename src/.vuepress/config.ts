import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";

export default defineUserConfig({
    base: "/",

    locales: {
        "/": {
            lang: "en-US",
            title: "zhang",
            description: "one blog",
        },
        "/zh/": {
            lang: "zh-CN",
            title: "zhang",
            description: "一个博客",
        },
    },

    theme,

    shouldPrefetch: false,

    plugins: [
        searchProPlugin({
            // 是否索引内容
            indexContent: true,
            // 假如你的主题在 Frontmatter 中使用 category 和 tag 标记文章的分类和标签，你可以使用以下配置
            customFields: [
                {
                    name: "category",
                    getter: (page) => page.frontmatter.category,
                    formatter: {
                        "/": "Category: $content",
                        "/zh/": "分类：$content",
                    },
                },
                {
                    name: "tag",
                    getter: (page) => page.frontmatter.tag,
                    formatter: {
                        "/": "Tag: $content",
                        "/zh/": "标签：$content",
                    },
                },
            ],
            // 当热键被按下时，搜索框的输入框会被聚焦，设置为空数组以禁用热键
            hotKeys: [{ key: 'k', ctrl: true }, { key: 'enter', ctrl: false }],
            // 存储历史项目的最大数量
            historyCount: 5,
            // 结束输入到开始搜索的延时
            delay: 300,
            // 是否在开发服务器中中启用实时热重载。
            hotReload: false,
        }),
    ],
});
