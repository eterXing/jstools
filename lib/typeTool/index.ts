import { isBoolean, isNumber, isString, isUndefined, isSymbol } from "./basicType"
import { isNull, isArray, isDate, isFunction, isObject } from "./objType"

type returnTypeStr =
    | "string"
    | "number"
    | "boolean"
    | "symbol"
    | "undefined"
    | "function"
    | "array"
    | "object"
    | "date"
    | "null"

// 匹配类型
function isType(value: unknown, type: returnTypeStr): boolean {
    const param = type.toLocaleLowerCase()
    if (typeof value === "object") {
        if (type === "null") {
            return isNull(value)
        } else if (type === "date") {
            return isDate(value)
        } else if (type === "object") {
            return isObject(value)
        } else if (type === "array") {
            return isArray(value)
        } else if (type === "function") {
            return isFunction(value)
        }
        return false
    } else {
        return typeof value === param
    }
}

export { isBoolean, isNumber, isString, isUndefined, isSymbol, isNull, isArray, isDate, isFunction, isObject, isType }
