---
title: 类型判断
titleTemplate: isType
---

# 【{{ $frontmatter.title }} —— {{$frontmatter.titleTemplate}}】

**功能：** 判断数据是否是一个指定类型(`returnTypeStr`)的数据，如果是则返回`true`,否则返回`false`。

## 函数引入

```ts 
import { isType } from '@eterxing/jstools'
```
## 函数声明

```ts 
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

declare const isType: (value: unknown, type: returnTypeStr) => boolean
```

## 使用示例

```ts 
const res1:boolean = isType({}, "object") // true
const res2:boolean = isType(Array(2), "string") // false
const res3:boolean = isType([], "array") // true
```
::: tip
`isType`方法 简单类型数据使用typeof判断。<br>复杂类型数据采用`Object.prototype.toString.call(value)`方法判断。
:::

