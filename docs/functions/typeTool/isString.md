---
title: 类型判断
titleTemplate: isString
---

# 【{{ $frontmatter.title }} —— {{$frontmatter.titleTemplate}}】

**功能：** 判断数据是否是一个字符串(`string`)类型的数据，如果是则返回`true`,否则返回`false`。

## 函数引入

```ts 
import { isString } from '@eterxing/jstools'
```
## 函数声明

```ts 
declare const isString: (value: unknown) => boolean
```

## 使用示例

```ts 
const res1:boolean = isString(5) // false
const res2:boolean = isString('hello jstool') // true
```

## 参数不能为空

::: danger ERROR
该方法的参数不能为空,否则将抛出错误

```ts
Uncaught Error: isXXXX方法的参数不能为空！
```
:::

