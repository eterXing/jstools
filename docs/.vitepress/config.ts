import { defineConfig } from "vitepress"
import sidebar from "./sidebar"

export default defineConfig({
    // base: "/jstools/",
    base: "/",
    title: "jsTools",
    titleTemplate: "javaScript工具库",
    description: "javaScript工具库",
    lastUpdated: true,
    appearance: true,
    head: [
        [
            "link",
            {
                rel: "icon",
                href: "/logo.png",
            },
        ],
    ],
    themeConfig: {
        logo: "/logo.png",
        outline: "deep",
        outlineTitle: "本章目录",
        sidebar,
        lastUpdatedText: "上次更新时间",
        docFooter: {
            prev: "上一页",
            next: "下一页",
        },
        socialLinks: [{ icon: "github", link: "https://github.com/eterXing/jstools" }],
    },
})
