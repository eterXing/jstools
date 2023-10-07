const ObjTypeMap = {
    nullT: "[object Null]",
    ObjectT: "[object Object]",
    ArrayT: "[object Array]",
    DateT: "[object Date]",
    FunctionT: "[object Function]",
}

function isObjType(name: string, type: string) {
    return function (value: unknown): boolean {
        if (arguments.length === 0) {
            throw Error(`is${name}方法的参数不能为空`)
        }
        const pType = Object.prototype.toString.call(value)
        return pType === type
    }
}

const isNull = isObjType("Null", ObjTypeMap.nullT)
const isArray = isObjType("Array", ObjTypeMap.ArrayT)
const isObject = isObjType("Object", ObjTypeMap.ObjectT)
const isDate = isObjType("Date", ObjTypeMap.DateT)
const isFunction = isObjType("Function", ObjTypeMap.FunctionT)

export { isNull, isArray, isDate, isFunction, isObject }
