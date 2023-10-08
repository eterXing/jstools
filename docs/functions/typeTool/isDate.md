---
title: 类型判断
titleTemplate: isDate
---

# 【{{ $frontmatter.title }} —— {{$frontmatter.titleTemplate}}】

**功能：** 判断数据是否是一个时间(`date`)类型的数据，如果是则返回`true`,否则返回`false`。

## 函数引入

```ts 
import { isDate } from '@eterxing/jstools'
```
## 函数声明

```ts 
declare const isDate: (value: unknown) => boolean
```

## 使用示例

```ts 
const res1:boolean = isDate(new Date()) // true
const res2:boolean = isDate('') // false
const res3:boolean = isDate('2023/10/08') // false
```
::: tip
`isDate`方法是采用`Object.prototype.toString.call(value)`方法实现的。
:::

## 参数不能为空

::: danger ERROR
该方法的参数不能为空,否则将抛出错误

```ts
Uncaught Error: isXXXX方法的参数不能为空！
```
:::

