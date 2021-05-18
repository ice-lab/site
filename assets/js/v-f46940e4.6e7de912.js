(self.webpackChunksite=self.webpackChunksite||[]).push([[9671],{8750:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>p});const p={key:"v-f46940e4",path:"/material/reference/protocol.html",title:"物料数据协议",lang:"zh-CN",frontmatter:{title:"物料数据协议",order:2},excerpt:"",headers:[{level:2,title:"物料数据结构",slug:"物料数据结构",children:[]},{level:2,title:"ComponentMetaData 组件元数据",slug:"componentmetadata-组件元数据",children:[]},{level:2,title:"BlockMetaData 区块元数据",slug:"blockmetadata-区块元数据",children:[]},{level:2,title:"ScaffoldMetaData 项目元数据",slug:"scaffoldmetadata-项目元数据",children:[]}],filePathRelative:"material/reference/protocol.md",git:{updatedTime:1621333997e3,contributors:[]}}},6479:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>d});var p=a(6252);const e=(0,p.Wm)("p",null,"ICE 物料数据协议是一套通用的描述物料元数据的标准格式，协议约定了物料的类型、名称、物料数据、存储位置等信息，通过这套数据协议，用户可以将自己开发的物料接入 iceworks 方便使用。目前基于 ICE 物料数据协议实现了 react-materials 和 vue-materials 两个官方物料。",-1),t=(0,p.Wm)("h2",{id:"物料数据结构"},[(0,p.Wm)("a",{class:"header-anchor",href:"#物料数据结构"},"#"),(0,p.Uk)(" 物料数据结构")],-1),o=(0,p.Uk)("生成物料数据可通过 "),c=(0,p.Wm)("code",null,"iceworks generate",-1),l=(0,p.Uk)(" 命令生成，具体过程可参考"),r={href:"/docs/materials/guide/generate.md",target:"_blank",rel:"noopener noreferrer"},u=(0,p.Uk)("《物料数据生成》"),i=(0,p.Uk)("。生成的数据将被存储到 "),m=(0,p.Wm)("code",null,"build/materials.json",-1),b=(0,p.Uk)(" 文件中，该文件包含以下字段的数据："),k=(0,p.uE)('<ul><li>type <code>{string}</code>：（必选）指定物料类型，来源自 <code>package.json</code> 中的 <code>materialConfig</code>，例如： react、vue、angular、bootstrap 等</li><li>name <code>{string}</code>：（必选）物料名称，来源自 <code>package.json</code> 中的 <code>name</code> 字段</li><li>components <code>{Array[ComponentMetaData]}</code>：（必选）包含所有组件元数据的数组</li><li>blocks <code>{Array[BlockMetaData]}</code>：（必选）包含所有区块信息的数组</li><li>scaffolds <code>{Array[ScaffoldMetaData]}</code>：（必选）包含所有项目模版信息的数组</li><li>description <code>{string}</code>：（可选）物料描述，来源自 <code>package.json</code> 中的 <code>description</code> 字段</li><li>logo <code>{string}</code>：（可选）物料品牌 logo，来源自 <code>package.json</code> 中的 <code>materialConfig</code> 字段</li><li>homepage <code>{string}</code>：（可选）物料主页，来源自 <code>package.json</code> 中的 <code>homepage</code> 字段</li><li>author <code>{object}</code>：（可选）物料作者，来源自 <code>package.json</code> 中的 <code>author</code> 字段</li></ul><h2 id="componentmetadata-组件元数据"><a class="header-anchor" href="#componentmetadata-组件元数据">#</a> ComponentMetaData 组件元数据</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n  <span class="token comment">// （必选）英文名称</span>\n  name<span class="token operator">:</span> <span class="token string">&quot;balloon-confirm&quot;</span><span class="token punctuation">,</span>\n  <span class="token comment">// （必选）中文名称</span>\n  title<span class="token operator">:</span> <span class="token string">&quot;ICE 气泡确认框&quot;</span><span class="token punctuation">,</span>\n  <span class="token comment">//（必选）描述</span>\n  description<span class="token operator">:</span> <span class="token string">&quot;ICE 气泡确认框&quot;</span><span class="token punctuation">,</span>\n  <span class="token comment">//（必选）预览地址</span>\n  homepage<span class="token operator">:</span> <span class="token string">&quot;https://unpkg.com/@icedesign/balloon-confirm@1.0.4/build/index.html&quot;</span><span class="token punctuation">,</span>\n  <span class="token comment">//（必选）分类</span>\n  category<span class="token operator">:</span> <span class="token string">&quot;Information&quot;</span><span class="token punctuation">,</span>\n  <span class="token comment">//（必选）源码地址</span>\n  repository<span class="token operator">:</span> <span class="token string">&quot;https://github.com/ice-lab/react-materials/tree/master/components/balloon-confirm&quot;</span><span class="token punctuation">,</span>\n  <span class="token comment">//（必选）描述安装方式</span>\n  source<span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token comment">//（必选）安装方式 npm</span>\n    type<span class="token operator">:</span> <span class="token string">&quot;npm&quot;</span><span class="token punctuation">,</span>\n    <span class="token comment">//（必选）npm package name</span>\n    npm<span class="token operator">:</span> <span class="token string">&quot;@icedesign/balloon-confirm&quot;</span><span class="token punctuation">,</span>\n    <span class="token comment">//（必选）版本号</span>\n    version<span class="token operator">:</span> <span class="token string">&quot;1.0.4&quot;</span><span class="token punctuation">,</span>\n    <span class="token comment">//（必选）npm 源</span>\n    registry<span class="token operator">:</span> <span class="token string">&quot;http://registry.npmjs.com&quot;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token comment">// （必选）依赖关系</span>\n  dependencies<span class="token operator">:</span> <span class="token punctuation">{</span>\n    @alifd<span class="token operator">/</span>next<span class="token operator">:</span> <span class="token string">&quot;^1.x&quot;</span><span class="token punctuation">,</span>\n    prop<span class="token operator">-</span>types<span class="token operator">:</span> <span class="token string">&quot;^15.5.8&quot;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token comment">// （必选）发布时间</span>\n  publishTime<span class="token operator">:</span> <span class="token string">&quot;2018-09-06T16:23:58.708Z&quot;</span><span class="token punctuation">,</span>\n  <span class="token comment">// （必选）最后更新时间</span>\n  updateTime<span class="token operator">:</span> <span class="token string">&quot;2019-05-25T05:54:33.164Z&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><h2 id="blockmetadata-区块元数据"><a class="header-anchor" href="#blockmetadata-区块元数据">#</a> BlockMetaData 区块元数据</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n  <span class="token comment">// （必选）英文名称</span>\n  name<span class="token operator">:</span> <span class="token string">&quot;ability-introduction&quot;</span><span class="token punctuation">,</span>\n  <span class="token comment">// （必选）名称</span>\n  title<span class="token operator">:</span> <span class="token string">&quot;产品能力介绍&quot;</span><span class="token punctuation">,</span>\n  <span class="token comment">//（必选）描述</span>\n  description<span class="token operator">:</span> <span class="token string">&quot;产品能力介绍&quot;</span><span class="token punctuation">,</span>\n  <span class="token comment">//（必选）预览地址</span>\n  homepage<span class="token operator">:</span> <span class="token string">&quot;https://unpkg.com/@icedesign/ability-introduction-block/build/index.html&quot;</span><span class="token punctuation">,</span>\n  <span class="token comment">//（必选）分类</span>\n  category<span class="token operator">:</span> <span class="token string">&quot;Information&quot;</span><span class="token punctuation">,</span>\n  <span class="token comment">//（必选）源码地址</span>\n  repository<span class="token operator">:</span> <span class="token string">&quot;https://github.com/ice-lab/react-materials/tree/master/blocks/AbilityIntroduction&quot;</span><span class="token punctuation">,</span>\n  <span class="token comment">//（必选）描述安装方式</span>\n  source<span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token comment">//（必选）安装方式 npm</span>\n    type<span class="token operator">:</span> <span class="token string">&quot;npm&quot;</span><span class="token punctuation">,</span>\n    <span class="token comment">//（必选）npm package name</span>\n    npm<span class="token operator">:</span> <span class="token string">&quot;@icedesign/ability-introduction-block&quot;</span><span class="token punctuation">,</span>\n    <span class="token comment">//（必选）版本号</span>\n    version<span class="token operator">:</span> <span class="token string">&quot;1.0.0&quot;</span><span class="token punctuation">,</span>\n    <span class="token comment">//（必选）npm 源</span>\n    registry<span class="token operator">:</span> <span class="token string">&quot;http://registry.npmjs.com&quot;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token comment">// （必选）依赖关系</span>\n  dependencies<span class="token operator">:</span> <span class="token punctuation">{</span>\n    prop<span class="token operator">-</span>types<span class="token operator">:</span> <span class="token string">&quot;^15.5.8&quot;</span><span class="token punctuation">,</span>\n    react<span class="token operator">:</span> <span class="token string">&quot;^16.2.0&quot;</span><span class="token punctuation">,</span>\n    @alifd<span class="token operator">/</span>next<span class="token operator">:</span> <span class="token string">&quot;^1.x&quot;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token comment">// （必选）截图</span>\n  screenshot<span class="token operator">:</span> <span class="token string">&quot;https://unpkg.com/@icedesign/ability-introduction-block/screenshot.png&quot;</span><span class="token punctuation">,</span>\n  <span class="token comment">// （可选）多张截图</span>\n  screenshots<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token string">&quot;https://unpkg.com/@icedesign/ability-introduction-block/screenshot.png&quot;</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token comment">// （必选）发布时间</span>\n  publishTime<span class="token operator">:</span> <span class="token string">&quot;2018-12-13T08:48:27.377Z&quot;</span><span class="token punctuation">,</span>\n  <span class="token comment">// （必选）最后更新时间</span>\n  updateTime<span class="token operator">:</span> <span class="token string">&quot;2019-04-26T13:52:36.487Z&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><h2 id="scaffoldmetadata-项目元数据"><a class="header-anchor" href="#scaffoldmetadata-项目元数据">#</a> ScaffoldMetaData 项目元数据</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n  <span class="token comment">// （必选）前端框架类型</span>\n  type<span class="token operator">:</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">,</span>\n  <span class="token comment">// （必选）英文名称</span>\n  name<span class="token operator">:</span> <span class="token string">&quot;ice-design-pro&quot;</span><span class="token punctuation">,</span>\n  <span class="token comment">// （必选）名称</span>\n  title<span class="token operator">:</span> <span class="token string">&quot;ICE Design Pro&quot;</span><span class="token punctuation">,</span>\n  <span class="token comment">//（必选）描述</span>\n  description<span class="token operator">:</span> <span class="token string">&quot;该模板提供了 Redux、Mock、国际化、权限管理、注册登录等完整的方案，且内置了丰富的区块，主要用于展示现有区块的分类以及区块组合的效果，使用时需要根据需求进行删除和添加&quot;</span><span class="token punctuation">,</span>\n  <span class="token comment">//（必选）预览地址</span>\n  homepage<span class="token operator">:</span> <span class="token string">&quot;https://unpkg.com/@icedesign/pro-scaffold@latest/build/index.html&quot;</span><span class="token punctuation">,</span>\n  <span class="token comment">//（可选）分类</span>\n  category<span class="token operator">:</span> <span class="token string">&quot;Information&quot;</span><span class="token punctuation">,</span>\n  <span class="token comment">//（必选）源码地址</span>\n  repository<span class="token operator">:</span> <span class="token string">&quot;https://github.com/ice-lab/react-materials/tree/master/scaffolds/ice-design-pro&quot;</span><span class="token punctuation">,</span>\n  <span class="token comment">//（必选）描述安装方式</span>\n  source<span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token comment">//（必选）安装方式 npm</span>\n    type<span class="token operator">:</span> <span class="token string">&quot;npm&quot;</span><span class="token punctuation">,</span>\n    <span class="token comment">//（必选）npm package name</span>\n    npm<span class="token operator">:</span> <span class="token string">&quot;@icedesign/pro-scaffold&quot;</span><span class="token punctuation">,</span>\n    <span class="token comment">//（必选）版本号</span>\n    version<span class="token operator">:</span> <span class="token string">&quot;2.0.17&quot;</span><span class="token punctuation">,</span>\n    <span class="token comment">//（必选）npm 源</span>\n    registry<span class="token operator">:</span> <span class="token string">&quot;http://registry.npmjs.com&quot;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token comment">// （必选）依赖关系</span>\n  dependencies<span class="token operator">:</span> <span class="token punctuation">{</span>\n    react<span class="token operator">:</span> <span class="token string">&quot;^16.2.0&quot;</span><span class="token punctuation">,</span>\n    react<span class="token operator">-</span>document<span class="token operator">-</span>title<span class="token operator">:</span> <span class="token string">&quot;^2.0.3&quot;</span><span class="token punctuation">,</span>\n    react<span class="token operator">-</span>dom<span class="token operator">:</span> <span class="token string">&quot;^16.4.1&quot;</span><span class="token punctuation">,</span>\n    react<span class="token operator">-</span>intl<span class="token operator">:</span> <span class="token string">&quot;^2.8.0&quot;</span><span class="token punctuation">,</span>\n    react<span class="token operator">-</span>redux<span class="token operator">:</span> <span class="token string">&quot;^5.0.7&quot;</span><span class="token punctuation">,</span>\n    react<span class="token operator">-</span>router<span class="token operator">-</span>dom<span class="token operator">:</span> <span class="token string">&quot;^4.2.2&quot;</span><span class="token punctuation">,</span>\n    react<span class="token operator">-</span>router<span class="token operator">-</span>redux<span class="token operator">:</span> <span class="token string">&quot;5.0.0-alpha.6&quot;</span><span class="token punctuation">,</span>\n    redux<span class="token operator">:</span> <span class="token string">&quot;3.6.0&quot;</span><span class="token punctuation">,</span>\n    redux<span class="token operator">-</span>thunk<span class="token operator">:</span> <span class="token string">&quot;^2.3.0&quot;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token comment">// （必选）截图</span>\n  screenshot<span class="token operator">:</span> <span class="token string">&quot;https://img.alicdn.com/tfs/TB1bqV5JwTqK1RjSZPhXXXfOFXa-2860-1580.png&quot;</span><span class="token punctuation">,</span>\n  <span class="token comment">// （必选）多张截图</span>\n  screenshots<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token string">&quot;https://img.alicdn.com/tfs/TB1bqV5JwTqK1RjSZPhXXXfOFXa-2860-1580.png&quot;</span><span class="token punctuation">,</span>\n    <span class="token string">&quot;https://img.alicdn.com/tfs/TB1n_CXJwHqK1RjSZFgXXa7JXXa-2862-1580.png&quot;</span><span class="token punctuation">,</span>\n    <span class="token string">&quot;https://img.alicdn.com/tfs/TB1Qll_JrvpK1RjSZFqXXcXUVXa-2860-1580.png&quot;</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token comment">// （必选）发布时间</span>\n  publishTime<span class="token operator">:</span> <span class="token string">&quot;2018-05-04T08:55:23.677Z&quot;</span><span class="token punctuation">,</span>\n  <span class="token comment">// （必选）最后更新时间</span>\n  updateTime<span class="token operator">:</span> <span class="token string">&quot;2019-06-12T03:24:10.435Z&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br></div></div>',7),d={render:function(n,s){const a=(0,p.up)("OutboundLink");return(0,p.wg)(),(0,p.j4)(p.HY,null,[e,t,(0,p.Wm)("p",null,[o,c,l,(0,p.Wm)("a",r,[u,(0,p.Wm)(a)]),i,m,b]),k],64)}}}}]);