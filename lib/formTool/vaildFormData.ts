import { isNumber, isString, isType } from "../typeTool/index"

// 判断值是否必填
function requireFn(value, rule: Record<string, any>) {
    return new Promise((resolve) => {
        if (rule.type === "array") {
            if (isType(value, "array") && value.length) {
                return resolve({ type: "then", status: true })
            }
        } else if (rule.type === "object") {
            if (isType(value, "object") && Object.keys(value).length) {
                if (isType(value, "array") && value.length) {
                    return resolve({ status: true, type: "then" })
                }
            }
        } else if (!isType(value, "undefined")) {
            return resolve({ status: true, type: "then" })
        }
        return resolve({ status: false, type: "catch", message: rule.message })
    })
}

// min，max判断
function rangeFn(value, rule: Record<string, any>) {
    return new Promise((resolve) => {
        const { max, min } = rule
        if (isType(value, "number")) {
            if (max && value > max) {
                return resolve({ status: false, type: "catch", message: rule.message })
            }
            if (min && value < min) {
                return resolve({ status: false, type: "catch", message: rule.message })
            }
            return resolve({ status: true, type: "then" })
        } else if (isType(value, "string") || isType(value, "array")) {
            if (max && value.length > max) {
                return resolve({ status: false, type: "catch", message: rule.message })
            }
            if (min && value.length < min) {
                return resolve({ status: false, type: "catch", message: rule.message })
            }
            return resolve({ status: true, type: "then" })
        }
        return resolve({ status: false, type: "catch", message: rule.message })
    })
}

// test正则验证
function regexFn(value, rule: Record<string, any>) {
    return new Promise((resolve) => {
        if (isString(value) || isNumber(value)) {
            if (rule.test.test(value)) {
                return resolve({ status: true, type: "then" })
            }
            return resolve({ status: false, type: "catch", message: rule.message })
        }
        resolve({ status: false, type: "catch", message: rule.message })
    })
}

// premise

// 校验单个item
function vaildFormItem(item, rules: any[]) {
    let promiseList = []

    rules.forEach((item) => {
        if (item.required) {
            promiseList.push()
        }
    })
}

/**
 * @description 表单验证
 * @param [object] formData
 * @param [object] rlues
 * @returns[string] 检验结果
 */

/**
 * @description rules属性
 * required： 是否必须
 * min: 最小位数  max: 最大位数
 * test： 正则验证
 * premise： 前置条件
 */

export const vaildFormData = (formData: object, rules: Record<string, any[]>) => {}
