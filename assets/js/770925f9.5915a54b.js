(self.webpackChunksite=self.webpackChunksite||[]).push([[2320],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return l},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=u(t),m=o,k=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return t?r.createElement(k,c(c({ref:n},l),{},{components:t})):r.createElement(k,c({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=t[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2972:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var r=t(2122),o=t(9756),a=(t(7294),t(3905)),c=["components"],i={title:"\u672c\u5730 Mock \u6570\u636e",order:11},s={unversionedId:"guide/advanced/mock",id:"guide/advanced/mock",isDocsHomePage:!1,title:"\u672c\u5730 Mock \u6570\u636e",description:"\u5728\u524d\u540e\u7aef\u5206\u79bb\u7684\u5f00\u53d1\u4e2d\uff0cMock \u6570\u636e\u662f\u524d\u7aef\u5f00\u53d1\u4e2d\u5f88\u91cd\u8981\u7684\u4e00\u4e2a\u73af\u8282\uff0c\u524d\u7aef\u53ef\u4ee5\u4e0d\u5fc5\u5f3a\u4f9d\u8d56\u540e\u7aef\u63a5\u53e3\uff0c\u53ea\u9700\u8981\u7ea6\u5b9a\u597d\u5bf9\u5e94\u7684\u6570\u636e\u63a5\u53e3\uff0c\u524d\u7aef\u53ef\u4ee5\u901a\u8fc7 Mock \u6a21\u62df\u6570\u636e\u5148\u884c\u5f00\u53d1\uff0c\u5728\u540e\u7aef\u63a5\u53e3\u5f00\u53d1\u5b8c\u6210\u540e\uff0c\u53ea\u9700\u8981\u5207\u6362\u5bf9\u5e94\u7684\u63a5\u53e3\u5730\u5740\u5373\u53ef\uff0c\u53ef\u4ee5\u4fdd\u8bc1\u9879\u76ee\u7684\u540c\u6b65\u5f00\u53d1\u3002",source:"@site/docs/guide/advanced/mock.md",sourceDirName:"guide/advanced",slug:"/guide/advanced/mock",permalink:"/docs/guide/advanced/mock",editUrl:"https://github.com/ice-lab/site/edit/master/docs/guide/advanced/mock.md",version:"current",frontMatter:{title:"\u672c\u5730 Mock \u6570\u636e",order:11},sidebar:"docs",previous:{title:"\u7ea6\u5b9a\u5f0f\u8def\u7531",permalink:"/docs/guide/advanced/convention-routing"},next:{title:"\u672c\u5730 Proxy \u65b9\u6848",permalink:"/docs/guide/advanced/proxy"}},u=[{value:"\u7f16\u5199 mock \u63a5\u53e3",id:"\u7f16\u5199-mock-\u63a5\u53e3",children:[]},{value:"\u7ea6\u5b9a\u89c4\u5219",id:"\u7ea6\u5b9a\u89c4\u5219",children:[]},{value:"\u8bf7\u6c42\u6570\u636e",id:"\u8bf7\u6c42\u6570\u636e",children:[]},{value:"\u4f7f\u7528 Mock.js",id:"\u4f7f\u7528-mockjs",children:[]}],l={toc:u};function p(e){var n=e.components,t=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5728\u524d\u540e\u7aef\u5206\u79bb\u7684\u5f00\u53d1\u4e2d\uff0cMock \u6570\u636e\u662f\u524d\u7aef\u5f00\u53d1\u4e2d\u5f88\u91cd\u8981\u7684\u4e00\u4e2a\u73af\u8282\uff0c\u524d\u7aef\u53ef\u4ee5\u4e0d\u5fc5\u5f3a\u4f9d\u8d56\u540e\u7aef\u63a5\u53e3\uff0c\u53ea\u9700\u8981\u7ea6\u5b9a\u597d\u5bf9\u5e94\u7684\u6570\u636e\u63a5\u53e3\uff0c\u524d\u7aef\u53ef\u4ee5\u901a\u8fc7 Mock \u6a21\u62df\u6570\u636e\u5148\u884c\u5f00\u53d1\uff0c\u5728\u540e\u7aef\u63a5\u53e3\u5f00\u53d1\u5b8c\u6210\u540e\uff0c\u53ea\u9700\u8981\u5207\u6362\u5bf9\u5e94\u7684\u63a5\u53e3\u5730\u5740\u5373\u53ef\uff0c\u53ef\u4ee5\u4fdd\u8bc1\u9879\u76ee\u7684\u540c\u6b65\u5f00\u53d1\u3002"),(0,a.kt)("p",null,"\u5728\u98de\u51b0\u4e2d\uff0c\u6211\u4eec\u63d0\u4f9b\u4e86\u5b8c\u6574\u7684 Mock \u65b9\u6848\uff0c\u652f\u6301 CRUD \u7b49\u64cd\u4f5c\uff0c\u53ea\u9700\u8981\u5728\u9879\u76ee\u76ee\u5f55\u4e0b\u65b0\u5efa mock \u6587\u4ef6\u5939\uff0c\u5e76\u914d\u7f6e\u5165\u53e3\u6587\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"p"},"index.ts")," \u4f5c\u4e3a\u8def\u7531\u8868\u7684\u5165\u53e3\uff0c\u5728\u542f\u52a8\u9879\u76ee\u670d\u52a1\u65f6\u5de5\u5177\u4f1a\u540c\u6b65\u7684\u542f\u52a8 Mock \u670d\u52a1\u3002"),(0,a.kt)("h2",{id:"\u7f16\u5199-mock-\u63a5\u53e3"},"\u7f16\u5199 mock \u63a5\u53e3"),(0,a.kt)("p",null,"\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u65b0\u5efa ",(0,a.kt)("inlineCode",{parentName:"p"},"mock/index.ts")," \u6587\u4ef6\uff0c\u5e76\u5199\u5165\u4ee5\u4e0b\u793a\u4f8b\u4ee3\u7801\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export default {\n  // \u540c\u65f6\u652f\u6301 GET \u548c POST\n  '/api/users/1': { data: {} },\n  '/api/foo/bar': { data: {} },\n\n  // \u652f\u6301\u6807\u51c6 HTTP\n  'GET /api/users': { users: [1, 2] },\n  'DELETE /api/users': { users: [1, 2] },\n\n  // \u652f\u6301\u53c2\u6570\n  'POST /api/users/:id': (req, res) => {\n    const { id } = req.params;\n    res.send({ id: id });\n  },\n};\n")),(0,a.kt)("p",null,"\u542f\u52a8\u8c03\u8bd5\u670d\u52a1\u540e\uff0c\u5047\u8bbe\u542f\u52a8\u7684\u7aef\u53e3\u662f 3333\uff0c\u76f4\u63a5\u5728\u6d4f\u89c8\u5668\u91cc\u8bbf\u95ee ",(0,a.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:3333/api/users")," \u5373\u53ef\u770b\u5230\u63a5\u53e3\u8fd4\u56de\u6570\u636e\u3002"),(0,a.kt)("h2",{id:"\u7ea6\u5b9a\u89c4\u5219"},"\u7ea6\u5b9a\u89c4\u5219"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u7ea6\u5b9a\u9879\u76ee mock \u76ee\u5f55\u4e0b\u6bcf\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"(t|j)s")," \u6587\u4ef6\u4e3a mock \u670d\u52a1\u6587\u4ef6\uff0c\u5373\u9700\u8981\u4f7f\u7528\u4e0a\u8ff0\u89c4\u8303\u8fd4\u56de\u6570\u636e\u63a5\u53e3\u3002\n\u5982\u679c\u5b58\u5728 mock \u670d\u52a1\u901a\u7528\u5de5\u5177\u811a\u672c\u548c\u6570\u636e\u811a\u672c\uff0c\u53ef\u4ee5\u5c06\u5bf9\u5e94\u7684\u6587\u4ef6\u5b58\u653e\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"mock/excludeMock")," \u76ee\u5f55\u4e0b\uff0c\u8be5\u76ee\u5f55\u4e0b\u9ed8\u8ba4\u4e0d\u8d70 mock \u903b\u8f91\u3002"),(0,a.kt)("p",null,"\u5ffd\u7565 mock \u7684\u6587\u4ef6\uff0c\u53ef\u4ee5\u901a\u8fc7\u5de5\u7a0b\u914d\u7f6e\u8fdb\u884c\u81ea\u5b9a\u4e49\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "mock": {\n    "exclude": ["**/custom/**", "**/*.ts"]\n  }\n}\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4e0a\u8ff0\u89c4\u5219\u4ee3\u8868\u5ffd\u7565 mock \u76ee\u5f55\u4e2d\u6240\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"custom")," \u76ee\u5f55\u4e0b\u7684\u6587\u4ef6\u4ee5\u53ca\u6240\u6709 ts \u7c7b\u578b\u6587\u4ef6")),(0,a.kt)("h2",{id:"\u8bf7\u6c42\u6570\u636e"},"\u8bf7\u6c42\u6570\u636e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useRequest } from 'ice';\n\nfunction ListView(props) {\n  const { data, loading, error, request } = useRequest({\n    url: '/api/users/1',\n    method: 'GET',\n  });\n\n  useEffect(() => {\n    request();\n  }, []);\n\n  console.log(data);\n\n  return (\n    <>\n      // jsx\n    </>\n  );\n}\n")),(0,a.kt)("h2",{id:"\u4f7f\u7528-mockjs"},"\u4f7f\u7528 Mock.js"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nuysoft/Mock"},"Mock.js")," \u662f\u4e00\u4e2a\u968f\u673a\u751f\u6210 mock \u6570\u636e\u7684\u5de5\u5177\u5e93\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import * as Mock from 'mockjs';\n\nexport default {\n  'GET /api/list': (req, res) => {\n    const list = Mock.mock({\n      'list|1-10': [\n        {\n          'id|+1': 1,\n        },\n      ],\n    });\n    res.send({\n      status: 'SUCCESS',\n      data: {\n        list,\n      }\n    });\n  },\n};\n")),(0,a.kt)("p",null,"\u5b8c\u6574\u7684\u8bed\u6cd5\u60c5\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"http://mockjs.com/examples.html"},"Mock.js \u6587\u6863")," \u3002"))}p.isMDXComponent=!0}}]);