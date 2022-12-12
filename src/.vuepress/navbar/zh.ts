import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
    "/zh/",
    {
        text: "计算机基础",
        icon: "rank",
        prefix: "/zh/basics/",
        children: [
            {
                text: "算法",
                icon: "rank",
                link: "algorithm/"
            },
            {
                text: "MySQL数据库",
                icon: "mysql",
                link: "MySQL/",
            },
            {
                text: "设计模式",
                icon: "repair",
                link: "design-patterns/",
            },
            {
                text: "面向对象",
                icon: "people",
                link: "OOP/",
            },
            {
                text: "设计思想和原则",
                icon: "people",
                link: "design-principles/",
            },
            {
                text: "分布式",
                icon: "snow",
                link: "distribute/",
            },
        ],
    },
    {
        text: "语言",
        icon: "language",
        prefix: "/zh/language/",
        children: [
            {
                text: "Java",
                icon: "java",
                link: "Java/"
            },
        ],
    },
]);
