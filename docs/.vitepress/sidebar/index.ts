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

    const rtnSider: DefaultTheme.SidebarItem[] = [
        {
            text: "文档简介",
            link: "/guide/",
        },
        {
            text: "数据类型篇",
            collapsed: true, // 初始加载页面时关闭
            items: [
                { text: "函数列表概览", link: joinTypeUrl() },
                { text: "isBoolean", link: joinTypeUrl("isBoolean") },
                { text: "isString", link: joinTypeUrl("isString") },
                { text: "isNumber", link: joinTypeUrl("isNumber") },
                { text: "isBigint", link: joinTypeUrl("isBigint") },
                { text: "isSymbol", link: joinTypeUrl("isSymbol") },
                { text: "isUndefined", link: joinTypeUrl("isUndefined") },
                { text: "isFloat", link: joinTypeUrl("isFloat") },
                { text: "isInt", link: joinTypeUrl("isInt") },
                { text: "isNaN", link: joinTypeUrl("isNaN") },
                { text: "isFinite", link: joinTypeUrl("isFinite") },
                { text: "isInfinite", link: joinTypeUrl("isInfinite") },
                { text: "isNull", link: joinTypeUrl("isNull") },
                { text: "isArray", link: joinTypeUrl("isArray") },
                { text: "isObject", link: joinTypeUrl("isObject") },
                { text: "isDate", link: joinTypeUrl("isDate") },
                { text: "isFunction", link: joinTypeUrl("isFunction") },
                { text: "getType", link: joinTypeUrl("getType") },
                { text: "getArrayAllType", link: joinTypeUrl("getArrayAllType") },
                { text: "getArrayTypeDetail", link: joinTypeUrl("getArrayTypeDetail") },
                { text: "getObjectAllType", link: joinTypeUrl("getObjectAllType") },
                { text: "getObjectTypeDetail", link: joinTypeUrl("getObjectTypeDetail") },
            ],
        },
    ]
    return rtnSider
}

const sidebar = {
    "/": siderbarFunction(),
}

export default sidebar
