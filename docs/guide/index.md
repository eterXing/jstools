## 快速上手

### 安装依赖

**npm方式**
```sh
npm install tj-jstools
```

**浏览器方式**
- [jsdelivr的umd格式地址](https://cdn.jsdelivr.net/npm/tj-jstools@1.3.0/static/umd/index.js)
```js
<script src="https://cdn.jsdelivr.net/npm/tj-jstools@1.3.0/static/umd/index.js"></script>
<script>
  const {_tj} = window
  console.log(_tj);
</script>
```
引入后，查看全局变量中的`window._tj`对象，里面包含了所有工具函数。

---

## 快捷入口
- [首页](/) <!-- sends the user to the root index.md -->
- [数据类型工具入口](/functions/typeTool/) <!-- anchors user to a heading in the foo index file -->
- [字符串工具入口](/functions/stringTool/) <!-- you can omit extention -->
- [数值工具入口](/functions/numberTool/) <!-- you can append .md -->
- [数组工具入口](/functions/arrayTool/) <!-- or you can append .html -->
- [对象工具入口(还未开发)](/functions/objectTool/) <!-- or you can append .html -->
- [URL工具入口](/functions/urlTool/) <!-- or you can append .html -->
- [浏览器工具入口](/functions/browserTool/) <!-- or you can append .html -->
- [浏览器存储工具入口](/functions/storageTool/) <!-- or you can append .html -->