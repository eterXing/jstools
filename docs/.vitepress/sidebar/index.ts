import { DefaultTheme } from "vitepress/types/default-theme"

function joinUrl(baseUrl: string) {
    return (detailUrl: string = "") => baseUrl + detailUrl
}

// 函数
function siderbarFunction(): DefaultTheme.SidebarItem[] {
    const baseUrl = {
        type_tool: "/functions/typeTool/",
        string_tool: "/functions/stringTool/",
        array_tool: "/functions/arrayTool/",
    }
    const joinTypeUrl = joinUrl(baseUrl.type_tool)
    const joinStringUrl = joinUrl(baseUrl.string_tool)

    const rtnSider: DefaultTheme.SidebarItem[] = [
        {
            text: "文档简介",
            link: "/guide/",
        },
        {
            text: "数据类型篇",
            collapsed: true, // 初始加载页面时关闭
            items: [
                { text: "概览", link: joinTypeUrl() },
                { text: "isBoolean", link: joinTypeUrl("isBoolean") },
                { text: "isNumber", link: joinTypeUrl("isNumber") },
                { text: "isString", link: joinTypeUrl("isString") },
                { text: "isUndefined", link: joinTypeUrl("isUndefined") },
                { text: "isSymbol", link: joinTypeUrl("isSymbol") },
                { text: "isNaN", link: joinTypeUrl("isNaN") },
                { text: "isNull", link: joinTypeUrl("isNull") },
                { text: "isArray", link: joinTypeUrl("isArray") },
                { text: "isDate", link: joinTypeUrl("isDate") },
                { text: "isFunction", link: joinTypeUrl("isFunction") },
                { text: "isObject", link: joinTypeUrl("isObject") },
                { text: "isType", link: joinTypeUrl("isType") },
            ],
        },
        {
            text: "字符串篇",
            collapsed: true, // 初始加载页面时关闭
            items: [
                { text: "概览", link: joinStringUrl() },
                { text: "DTMobile", link: joinStringUrl("DTMobile") },
            ],
        },
    ]
    return rtnSider
}

const sidebar = {
    "/": siderbarFunction(),
}

export default sidebar
