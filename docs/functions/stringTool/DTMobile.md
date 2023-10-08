---
title: 手机号脱敏
titleTemplate: DTMobile
---

# 【{{ $frontmatter.title }} —— {{$frontmatter.titleTemplate}}】

## 函数引入

```js 
  import { DTMobile } from '@eterxing/jstools'
```
## 函数声明
```ts
declare const DTMobile: (mobile: number | string) => string;
```

## 使用示例

```ts
 const phone:strig = DTMobile('15766669527')

// 157****9527
```
当输入一个正常的手机号时，处理后中间部位会被星号替换。

```ts
 const phone:strig = DTMobile('157666695272334234242')

// ''
```
当输入的是一个不正常的手机号时会被警告,且返回一个空字符串
::: warning
请输入一个正确的手机号
:::

```ts
 const phone:strig = DTMobile(157666695272334234242)

// ''
```
当输入的不是一个字符串时，会被警告，且返回一个空字符串。
::: warning
请输入一个字符串格式的手机号
:::