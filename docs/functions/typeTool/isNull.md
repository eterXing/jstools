---
title: 类型判断
titleTemplate: isNull
---

# 【{{ $frontmatter.title }} —— {{$frontmatter.titleTemplate}}】

**功能：** 判断数据是否是一个空值(`null`)类型的数据，如果是则返回`true`,否则返回`false`。

## 函数引入

```ts 
import { isNull } from '@eterxing/jstools'
```
## 函数声明

```ts 
declare const isNull: (value: unknown) => boolean
```

## 使用示例

```ts 
const res1:boolean = isNull(undefined) // false
const res2:boolean = isNull('') // false
const res3:boolean = isNull(null) // true
```
::: tip
`isNull`方法是采用`Object.prototype.toString.call(value)`方法实现的，对于`undefined`、`空字符串('')`的数据得到的结果是`false`
:::

## 参数不能为空

::: danger ERROR
该方法的参数不能为空,否则将抛出错误

```ts
Uncaught Error: isXXXX方法的参数不能为空！
```
:::

