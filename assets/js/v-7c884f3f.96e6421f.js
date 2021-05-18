(self.webpackChunksite=self.webpackChunksite||[]).push([[4602],{9776:(s,n,a)=>{"use strict";a.r(n),a.d(n,{data:()=>e});const e={key:"v-7c884f3f",path:"/guide/develop/plugin-list.html",title:"官方插件列表",lang:"zh-CN",frontmatter:{title:"官方插件列表",order:4},excerpt:"",headers:[{level:2,title:"plugin-fusion",slug:"plugin-fusion",children:[]},{level:2,title:"plugin-antd",slug:"plugin-antd",children:[]},{level:2,title:"plugin-keep-alive",slug:"plugin-keep-alive",children:[{level:3,title:"基础用法",slug:"基础用法",children:[]}]},{level:2,title:"plugin-modular-import",slug:"plugin-modular-import",children:[{level:3,title:"基础用法",slug:"基础用法-1",children:[]}]},{level:2,title:"plugin-css-assets-local",slug:"plugin-css-assets-local",children:[{level:3,title:"基础用法",slug:"基础用法-2",children:[]}]},{level:2,title:"plugin-moment-locales",slug:"plugin-moment-locales",children:[{level:3,title:"基础用法",slug:"基础用法-3",children:[]}]},{level:2,title:"plugin-load-assets",slug:"plugin-load-assets",children:[{level:3,title:"基础使用",slug:"基础使用",children:[]},{level:3,title:"配合 externals",slug:"配合-externals",children:[]}]},{level:2,title:"plugin-smart-debug",slug:"plugin-smart-debug",children:[{level:3,title:"基础用法",slug:"基础用法-4",children:[]}]},{level:2,title:"build-plugin-jsx-plus",slug:"build-plugin-jsx-plus",children:[{level:3,title:"基础用法",slug:"基础用法-5",children:[]}]},{level:2,title:"build-plugin-fast-refresh",slug:"build-plugin-fast-refresh",children:[{level:3,title:"基础用法",slug:"基础用法-6",children:[]}]},{level:2,title:"build-plugin-webpack5",slug:"build-plugin-webpack5",children:[{level:3,title:"开启 webpack 5",slug:"开启-webpack-5",children:[]},{level:3,title:"配置 Module Federation",slug:"配置-module-federation",children:[]}]},{level:2,title:"build-plugin-dev-inspector",slug:"build-plugin-dev-inspector",children:[{level:3,title:"配置",slug:"配置",children:[]}]},{level:2,title:"build-plugin-esbuild（实验性）",slug:"build-plugin-esbuild-实验性",children:[{level:3,title:"使用",slug:"使用",children:[]}]}],filePathRelative:"guide/develop/plugin-list.md",git:{updatedTime:1621333997e3,contributors:[]}}},6586:(s,n,a)=>{"use strict";a.r(n),a.d(n,{default:()=>A});var e=a(6252);const p=(0,e.Wm)("p",null,"icejs 基于工程构建工具 build-scripts，提供了丰富的插件用于提升项目的开发体验。",-1),l=(0,e.Wm)("h2",{id:"plugin-fusion"},[(0,e.Wm)("a",{class:"header-anchor",href:"#plugin-fusion"},"#"),(0,e.Uk)(" plugin-fusion")],-1),t=(0,e.Wm)("code",null,"build-plugin-fusion",-1),o=(0,e.Uk)(" 是 Fusion UI 体系开发下必不可少的插件，提供丰富的功能，详细使用可参考 "),u={href:"/docs/guide/advance/fusion.md",target:"_blank",rel:"noopener noreferrer"},c=(0,e.Uk)("使用 Fusion 组件"),i=(0,e.Wm)("h2",{id:"plugin-antd"},[(0,e.Wm)("a",{class:"header-anchor",href:"#plugin-antd"},"#"),(0,e.Uk)(" plugin-antd")],-1),r=(0,e.Wm)("code",null,"build-plugin-antd",-1),d=(0,e.Uk)(" 插件为项目中使用 antd 组件提供按需加载和主题定制的能力，详细使用可参考 "),b={href:"/docs/guide/advance/antd.md",target:"_blank",rel:"noopener noreferrer"},m=(0,e.Uk)("使用 antd 组件"),k=(0,e.uE)('<h2 id="plugin-keep-alive"><a class="header-anchor" href="#plugin-keep-alive">#</a> plugin-keep-alive</h2><p><code>build-plugin-keep-alive</code> 可以让开发者快捷开启 SPA 下基于路由级别的 Keep Alive 能力。</p><blockquote><p>ice.js@1.15.0 以上版本开始支持</p></blockquote><p>Install:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">npm</span> i -save-dev build-plugin-keep-alive\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="基础用法"><a class="header-anchor" href="#基础用法">#</a> 基础用法</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token string">&quot;build-plugin-keep-alive&quot;</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>完成上述配置后，项目会按页面路由维度开启 Keep Alive 能力，如果希望关闭指定路由的 Keep Alive，可以通过设置 <code>pageConfig</code> 进行关闭：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">Home</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>home<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nHome<span class="token punctuation">.</span>pageConfig <span class="token operator">=</span> <span class="token punctuation">{</span>\n  keepAlive<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> Home<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><blockquote><p>注意事项： 由于开启了 Keep Alive 能力，路由发生切换时，组件对应的 mount 和 unmount 生命周期将不会重复执行</p></blockquote><h2 id="plugin-modular-import"><a class="header-anchor" href="#plugin-modular-import">#</a> plugin-modular-import</h2>',11),g=(0,e.Uk)("用于快捷增加 "),h={href:"https://github.com/ant-design/babel-plugin-import",target:"_blank",rel:"noopener noreferrer"},v=(0,e.Uk)("babel-plugin-import"),q=(0,e.Uk)(" 的配置"),f=(0,e.uE)('<p>Install:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">npm</span> i --save-dev build-plugin-modular-import\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="基础用法-1"><a class="header-anchor" href="#基础用法-1">#</a> 基础用法</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">[</span><span class="token string">&quot;build-plugin-modular-import&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n      <span class="token property">&quot;libraryName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;lodash&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;libraryDirectory&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;camel2DashComponentName&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n      <span class="token property">&quot;libraryName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@material-ui/core&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;libraryDirectory&quot;</span><span class="token operator">:</span> <span class="token string">&quot;components&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;camel2DashComponentName&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>\n    <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">]</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="plugin-css-assets-local"><a class="header-anchor" href="#plugin-css-assets-local">#</a> plugin-css-assets-local</h2><p><code>build-plugin-css-assets-local</code> 提供将 css 中的网络资源本地化能力：</p><ul><li>将 CSS 中依赖的资源本地化，例如字体文件等。</li></ul><p>Install:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">npm</span> i --save-dev build-plugin-css-assets-local\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Options:</p><ul><li><code>outputPath</code>: 默认值： <code>assets</code> 提取后的文件目录前缀</li><li><code>relativeCssPath</code>: 默认值： <code>../</code> 提取的文件后相对于 CSS 的路径</li></ul><h3 id="基础用法-2"><a class="header-anchor" href="#基础用法-2">#</a> 基础用法</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">[</span><span class="token string">&quot;build-plugin-css-assets-local&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n      <span class="token property">&quot;outputPath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;assets&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;relativeCssPath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;../&quot;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">]</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="plugin-moment-locales"><a class="header-anchor" href="#plugin-moment-locales">#</a> plugin-moment-locales</h2><p><code>build-plugin-moment-locales</code> 将对 moment 依赖的使用进行优化：</p><ul><li>优化 moment 语言包加载</li><li>根据设置自动加载对应语言包</li></ul><p>Install:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">npm</span> i --save-dev build-plugin-moment-locales\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Options:</p><ul><li><code>locales</code>：类型 <code>String | Array</code>，需要加载的多语言包</li></ul><h3 id="基础用法-3"><a class="header-anchor" href="#基础用法-3">#</a> 基础用法</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">[</span><span class="token string">&quot;build-plugin-moment-locales&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n      <span class="token property">&quot;locales&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;zh-cn&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;en-au&quot;</span><span class="token punctuation">]</span>\n    <span class="token punctuation">}</span><span class="token punctuation">]</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="plugin-load-assets"><a class="header-anchor" href="#plugin-load-assets">#</a> plugin-load-assets</h2><p>插件提供自动加载 assts 资源能力：</p><ul><li>页面渲染前将自动加载配置的 assets 资源，资源类型包括 js 和 css</li><li>根据不同的执行命令，加载不同的 assets 资源</li></ul><p>Install:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">npm</span> i --save-dev build-plugin-load-assets\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="基础使用"><a class="header-anchor" href="#基础使用">#</a> 基础使用</h3><p>start 命令和 build 命令 加载相同 assets 资源</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">[</span><span class="token string">&quot;build-plugin-load-assets&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n      <span class="token property">&quot;assets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;https://unpkg.com/lodash@4.17.11/index.js&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;https://url/global.css&quot;</span><span class="token punctuation">]</span>\n    <span class="token punctuation">}</span><span class="token punctuation">]</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="配合-externals"><a class="header-anchor" href="#配合-externals">#</a> 配合 externals</h3><p>配合 external 自动加载 react, react-dom 的资源</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;externals&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;react&quot;</span><span class="token operator">:</span> <span class="token string">&quot;window.React&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;react-dom&quot;</span><span class="token operator">:</span> <span class="token string">&quot;window.ReactDOM&quot;</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">[</span><span class="token string">&quot;build-plugin-load-assets&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n      <span class="token property">&quot;assets&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;start&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;https://unpkg.com/react@16.7.0/umd/react.development.js&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;https://unpkg.com/react-dom@16.7.0/umd/react-dom.development.js&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;https://unpkg.com/react@16.7.0/umd/react.production.min.js&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;https://unpkg.com/react-dom@16.7.0/umd/react-dom.production.min.js&quot;</span><span class="token punctuation">]</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">]</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="plugin-smart-debug"><a class="header-anchor" href="#plugin-smart-debug">#</a> plugin-smart-debug</h2><p>用于 debug 调试，常见于线上环境加载本地 assets 资源进行调试的场景：</p><ul><li>开启调试后，可以指定页面加载本地 assets 资源</li></ul><p>Install:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">npm</span> i -save-dev build-plugin-smart-debug\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="基础用法-4"><a class="header-anchor" href="#基础用法-4">#</a> 基础用法</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token string">&quot;build-plugin-smart-debug&quot;</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>访问链接中开启 debug 调试，设置 <code>smartDebug=true</code> 进行开启</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>http://example.com/?smartDebug=true\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>开启后页面将默认加载本地入口脚本 <code>127.0.0.1:3333/build/js/index.js</code>，<code>__webpack_public_path__</code> 将会变为 <code>127.0.0.1:3333/build/</code>。</p><blockquote><p>默认加载的脚本地址，将会受 <code>build.json</code> 中的 <code>outputDir</code> 和 <code>outputAssetPath.js</code> 配置影响，即默认入口文件路径规则 <code>${outputDir}/${outputAssetPath.js}/index.js</code>。 对应入口 css 文件的规则为 <code>${outputDir}/${outputAssetPath.css}/index.css</code>，<code>build-plugin-smart-debug</code> 插件会自动通过 js 路径按规则替换并推导出 css 路径地址并进行自动加载。</p></blockquote><p>支持定制的参数包括：</p><ul><li>调试端口：<code>debugPort</code>，例如设置调试 8080 端口，<code>debugPort=8080</code>，默认端口为：3333</li><li>入口脚本路径：<code>debugPath</code>，<code>debugPath=/build/index.js</code>，页面将加载 <code>127.0.0.1:8080/build/index.js</code></li><li>资源输出路径：<code>outputPath</code>，<code>outputPath=dist</code>，即 runtime 的 publicPath 将会变成 <code>127.0.0.1:8080/dist/</code>，<code>outputPath</code> 默认读取 <code>build.json</code> 中的 <code>outputDir</code>，如果不需要可以设置为 <code>outputPath=</code></li></ul><p>如想加载的入口地址为 <code>127.0.0.1:8080/dist/index.js</code>， <code>__webpack_public_path__</code>路径为 <code>127.0.0.1:8080/dist/</code>，则可以在 url 中进行如下设置：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>http://example.com/?smartDebug=true&amp;debugPort=8080&amp;debugPath=/dist/index.js&amp;outputPath=dist\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="build-plugin-jsx-plus"><a class="header-anchor" href="#build-plugin-jsx-plus">#</a> build-plugin-jsx-plus</h2><p>该插件支持了一种 JSX 扩展语法 JSX+，它能帮助业务开发者更爽更快地书写 JSX。JSX+ 不是一种新的概念，它是 JSX 基础上的扩展指令概念。</p><ul><li>JSX 虽然语法灵活，但是大量的花括号 + JS 语法导致了上下文切换和代码可读性的下降，JSX+ 的指令很好的解决了这个问题</li><li>JSX 本质是 JS 表达式，在运行时阶段才可以计算出真实的 DOM 结构，JSX+ 引入了一部分静态模板特性可以满足编译优化</li><li>不新创造实体，指令在社区中是已经被广泛接受的概念，对开发者更友好，语法糖的表达更简单</li><li>统一一套 JSX+ 类似概念的语法规范，减少已存在和潜在的重复建设</li></ul><p>Install:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">npm</span> i --save-dev build-plugin-jsx-plus\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="基础用法-5"><a class="header-anchor" href="#基础用法-5">#</a> 基础用法</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token string">&quot;build-plugin-jsx-plus&quot;</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>',55),j=(0,e.Uk)("详细使用请参考 "),x={href:"https://github.com/jsx-plus/jsx-plus/blob/master/README.zh_CN.md",target:"_blank",rel:"noopener noreferrer"},y=(0,e.Uk)("jsx-plus"),w=(0,e.uE)('<h2 id="build-plugin-fast-refresh"><a class="header-anchor" href="#build-plugin-fast-refresh">#</a> build-plugin-fast-refresh</h2><blockquote><p>体验优化的实验性插件，可根据实际情况按需使用。</p></blockquote><p>该插件是对 react-refresh 的集成，一个类似 hot reloading（热更新）的功能，但提供了更为强大的快热更新机制，让你对 React 组件中的更改获得近乎即时（1 ~ 2 秒）的反馈，并且当修改 React 组件发生热更新时不会丢失原有的状态。</p><p>Install:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">npm</span> i -save-dev build-plugin-fast-refresh\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="基础用法-6"><a class="header-anchor" href="#基础用法-6">#</a> 基础用法</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token string">&quot;build-plugin-fast-refresh&quot;</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="build-plugin-webpack5"><a class="header-anchor" href="#build-plugin-webpack5">#</a> build-plugin-webpack5</h2><blockquote><p>用于 icejs 在使用 webpack 5 能力上的兼容处理</p></blockquote><h3 id="开启-webpack-5"><a class="header-anchor" href="#开启-webpack-5">#</a> 开启 webpack 5</h3><p>Install:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">npm</span> i --save-dev build-plugin-webpack5 webpack\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><code>build.json</code> 修改如下：</p><div class="language-diff ext-diff line-numbers-mode"><pre class="language-diff"><code>{\n<span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">  &quot;customWebpack&quot;: true,\n</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> &quot;plugins&quot;: [\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">    &quot;build-plugin-webpack5&quot;\n</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> ]\n</span></span>}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><blockquote><p>通过 <code>customWebpack</code> 配置的开启，工程中使用 webpack 的版本将会以项目中依赖的 webpack 版本为准</p></blockquote><h3 id="配置-module-federation"><a class="header-anchor" href="#配置-module-federation">#</a> 配置 Module Federation</h3><p>在上述开启 webpack 5 能力的基础上，通过配置 moduleFederation 可以配置 Module Federation 相关参数：</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;customWebpack&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;moduleFederation&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;remotes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;remote&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;shared&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;react&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;react-dom&quot;</span><span class="token punctuation">]</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token string">&quot;build-plugin-webpack5&quot;</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="build-plugin-dev-inspector"><a class="header-anchor" href="#build-plugin-dev-inspector">#</a> build-plugin-dev-inspector</h2><blockquote><p>在本地调试时，快速定位页面上的组件所在的源码的位置。</p></blockquote><p>Install:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">npm</span> i --save-dev build-plugin-dev-inspector\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="配置"><a class="header-anchor" href="#配置">#</a> 配置</h3><p>在 build.json 中引入插件：</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token string">&quot;build-plugin-dev-inspector&quot;</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>完成上述配置后，则在本地调试的环境下，把鼠标 hover 到想要调试的元素，就会显示出遮罩框；再点击一下，会自动在编辑器中跳转到对应的文件中，并且跳转到对应的行和列。</p>',26),W=(0,e.Uk)("详见："),P={href:"https://www.npmjs.com/package/build-plugin-dev-inspector",target:"_blank",rel:"noopener noreferrer"},_=(0,e.Uk)("https://www.npmjs.com/package/build-plugin-dev-inspector"),S=(0,e.Wm)("h2",{id:"build-plugin-esbuild-实验性"},[(0,e.Wm)("a",{class:"header-anchor",href:"#build-plugin-esbuild-实验性"},"#"),(0,e.Uk)(" build-plugin-esbuild（实验性）")],-1),U=(0,e.Uk)("使用 "),$={href:"https://github.com/evanw/esbuild",target:"_blank",rel:"noopener noreferrer"},D=(0,e.Wm)("code",null,"esbuild",-1),C=(0,e.Uk)(" 进行代码压缩，显著提升代码压缩速度。"),J=(0,e.uE)('<h3 id="使用"><a class="header-anchor" href="#使用">#</a> 使用</h3><p>安装插件:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">npm</span> i --save-dev build-plugin-esbuild\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>使用插件，修改 <code>build.json</code></p><div class="language-diff ext-diff line-numbers-mode"><pre class="language-diff"><code>{\n<span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> &quot;plugins&quot;: [\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">    &quot;build-plugin-esbuild&quot;\n</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> ]\n</span></span>}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>',5),A={render:function(s,n){const a=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.j4)(e.HY,null,[p,l,(0,e.Wm)("p",null,[t,o,(0,e.Wm)("a",u,[c,(0,e.Wm)(a)])]),i,(0,e.Wm)("p",null,[r,d,(0,e.Wm)("a",b,[m,(0,e.Wm)(a)])]),k,(0,e.Wm)("p",null,[g,(0,e.Wm)("a",h,[v,(0,e.Wm)(a)]),q]),f,(0,e.Wm)("p",null,[j,(0,e.Wm)("a",x,[y,(0,e.Wm)(a)])]),w,(0,e.Wm)("p",null,[W,(0,e.Wm)("a",P,[_,(0,e.Wm)(a)])]),S,(0,e.Wm)("blockquote",null,[(0,e.Wm)("p",null,[U,(0,e.Wm)("a",$,[D,(0,e.Wm)(a)]),C])]),J],64)}}}}]);