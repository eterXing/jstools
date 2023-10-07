const isBasicType = function isType(type: string) {
    const params = type.toLocaleLowerCase()

    return function (value: unknown): boolean {
        if (arguments.length === 0) {
            throw Error(`is${type}方法的参数不能为空`)
        }
        return typeof value === params
    }
}

const isBoolean = isBasicType("Boolean")
const isNumber = isBasicType("Number")
const isString = isBasicType("String")
const isUndefined = isBasicType("Undefined")
const isSymbol = isBasicType("Symbol")

export { isBoolean, isNumber, isString, isUndefined, isSymbol }
