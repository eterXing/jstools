import { REP_MOBILE } from "../../common/RegExpMap"

/**
 * @description 手机号脱敏处理(Desensitization treatment mobile)
 * @param [strng] mobile
 * @returns[string] 返回处理后的手机号
 */
export const DTMobile = (mobile: string | number): string => {
    let rtnStr = ""
    if (typeof mobile === "string" || typeof mobile === "number") {
        mobile = String(mobile)
        if (REP_MOBILE.test(mobile)) {
            rtnStr = mobile.replace(/^(\d{3})\d{4}(\d{4})$/, "$1****$2")
        } else {
            throw new Error("手机号格式异常")
        }
    } else {
        throw new Error("手机号格式异常")
    }
    return rtnStr
}
