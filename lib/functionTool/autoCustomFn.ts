/**
 * @description 流程化运行,在类型为catch时中断执行并返回
 * @param [Promise] promise列表
 * @returns[Promise] 执行后的promise
 */

type promiseContent = {
    type?: "then" | "catch"
}

export const autoCustomFn = (promiseList: (() => Promise<promiseContent>)[]): Promise<promiseContent> => {
    let promise: Promise<any> = Promise.resolve()

    while (promiseList.length > 0) {
        const fn = promiseList.shift()

        promise = promise.then((result = { type: "then" }) => {
            if (result.type === "catch") {
                return Promise.resolve(result)
            }
            return fn!.call(this, result)
        })
    }
    return promise
}
