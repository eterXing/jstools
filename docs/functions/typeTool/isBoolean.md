---
title: 类型判断
titleTemplate: isBoolean
---

# 【{{ $frontmatter.title }} —— {{$frontmatter.titleTemplate}}】

**功能：** 判断数据是否是一个布尔(`boolean`)类型的数据，如果是则返回`true`,否则返回`false`。

## 函数引入

```ts 
import { isBoolean } from '@eterxing/jstools'
```
## 函数声明

```ts 
declare const isBoolean: (value: unknown) => boolean
```

## 使用示例

```ts 
const res1:boolean = isBoolean(5) // false
const res2:boolean = isBoolean(true) // true
```

## 参数不能为空

::: danger ERROR
该方法的参数不能为空,否则将抛出错误

```ts
Uncaught Error: isXXXX方法的参数不能为空！
```
:::

