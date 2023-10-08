import{_ as l,o as t,c as e,k as o,a as n,t as a,U as p}from"./chunks/framework.76b79cb5.js";const u=JSON.parse('{"title":"类型判断","titleTemplate":"isNaN","description":"","frontmatter":{"title":"类型判断","titleTemplate":"isNaN"},"headers":[],"relativePath":"functions/typeTool/isNaN.md","filePath":"functions/typeTool/isNaN.md","lastUpdated":1696743877000}'),c={name:"functions/typeTool/isNaN.md"},r={id:"【-frontmatter-title-——-frontmatter-titletemplate-】",tabindex:"-1"},i=o("a",{class:"header-anchor",href:"#【-frontmatter-title-——-frontmatter-titletemplate-】","aria-label":'Permalink to "【{{ $frontmatter.title }} —— {{$frontmatter.titleTemplate}}】"'},"​",-1),y=p(`<p><strong>功能：</strong> 判断数据是否是一个NaN(<code>Not a Number</code>)类型的数据，如果是则返回<code>true</code>,否则返回<code>false</code>。</p><h2 id="函数引入" tabindex="-1">函数引入 <a class="header-anchor" href="#函数引入" aria-label="Permalink to &quot;函数引入&quot;">​</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">isNaN</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@eterxing/jstools</span><span style="color:#89DDFF;">&#39;</span></span></code></pre></div><h2 id="函数声明" tabindex="-1">函数声明 <a class="header-anchor" href="#函数声明" aria-label="Permalink to &quot;函数声明&quot;">​</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> isNaN</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">value</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">unknown</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span></span></code></pre></div><h2 id="使用示例" tabindex="-1">使用示例 <a class="header-anchor" href="#使用示例" aria-label="Permalink to &quot;使用示例&quot;">​</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> res1</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">boolean</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">isNaN</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">NaN</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> res2</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">boolean</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">isNaN</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">Number</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello666</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)) </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> res3</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">boolean</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">isNaN</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">5.01</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// false</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><code>isNaN</code>方法是采用<code>Number.isNaN()</code>方法实现的.</p></div><h2 id="参数不能为空" tabindex="-1">参数不能为空 <a class="header-anchor" href="#参数不能为空" aria-label="Permalink to &quot;参数不能为空&quot;">​</a></h2><div class="danger custom-block"><p class="custom-block-title">ERROR</p><p>该方法的参数不能为空,否则将抛出错误</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Uncaught </span><span style="color:#FFCB6B;">Error</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> isXXXX方法的参数不能为空！</span></span></code></pre></div></div>`,10);function C(s,A,D,d,F,h){return t(),e("div",null,[o("h1",r,[n("【"+a(s.$frontmatter.title)+" —— "+a(s.$frontmatter.titleTemplate)+"】 ",1),i]),y])}const N=l(c,[["render",C]]);export{u as __pageData,N as default};
