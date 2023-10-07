/**
 * @description 获取对象数组中指定key的value,返回value数组
 * @param [array] 对象数组
 * @param [string] 数组项的key值
 * @returns[array] 数组
 */
export const getValueByKey = (array: Object[], key: string): any[] => {
    const arr: any[] = []

    if (!array || !array.length) {
        return arr
    }

    array.forEach((item) => {
        arr.push(item[key])
    })
    return arr
}
