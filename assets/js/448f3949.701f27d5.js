"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[9652],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return s}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(n),s=a,k=m["".concat(p,".").concat(s)]||m[s]||d[s]||l;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6755:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var r=n(3117),a=n(102),l=(n(7294),n(3905)),i=["components"],o={title:"\u672c\u5730 Proxy \u65b9\u6848",order:12},p=void 0,u={unversionedId:"guide/advanced/proxy",id:"guide/advanced/proxy",title:"\u672c\u5730 Proxy \u65b9\u6848",description:"\u672c\u5730\u5f00\u53d1\u573a\u666f\u4e0b\uff0c\u8bbf\u95ee\u9875\u9762\u7684 url \u662f http3333\uff0c\u4f46\u662f\u540e\u7aef\u63a5\u53e3\u53ef\u80fd\u662f\u5176\u4ed6 ip\u3001\u57df\u540d\u6216\u7aef\u53e3\uff0c\u6b64\u65f6\u5c31\u4f1a\u4ea7\u751f\u8de8\u57df\u95ee\u9898\uff0c\u5bfc\u81f4\u65e0\u6cd5\u8c03\u8bd5\uff0c\u9488\u5bf9\u8fd9\u4e2a\u95ee\u9898\u63a8\u8350\u4e24\u79cd\u4ee3\u7406\u65b9\u5f0f\uff1a",source:"@site/docs/guide/advanced/proxy.md",sourceDirName:"guide/advanced",slug:"/guide/advanced/proxy",permalink:"/docs/guide/advanced/proxy",editUrl:"https://github.com/ice-lab/site/edit/master/docs/guide/advanced/proxy.md",tags:[],version:"current",frontMatter:{title:"\u672c\u5730 Proxy \u65b9\u6848",order:12},sidebar:"docs",previous:{title:"\u672c\u5730 Mock \u6570\u636e",permalink:"/docs/guide/advanced/mock"},next:{title:"\u7f16\u5199\u5355\u5143\u6d4b\u8bd5",permalink:"/docs/guide/advanced/test"}},c=[{value:"\u8bbf\u95ee\u524d\u7aef\u8c03\u8bd5\u5730\u5740\u4ee3\u7406\u540e\u7aef\u63a5\u53e3",id:"\u8bbf\u95ee\u524d\u7aef\u8c03\u8bd5\u5730\u5740\u4ee3\u7406\u540e\u7aef\u63a5\u53e3",children:[{value:"\u914d\u7f6e proxy \u5b57\u6bb5",id:"\u914d\u7f6e-proxy-\u5b57\u6bb5",children:[],level:3},{value:"\u5339\u914d\u89c4\u5219",id:"\u5339\u914d\u89c4\u5219",children:[],level:3},{value:"\u8bf7\u6c42\u793a\u4f8b",id:"\u8bf7\u6c42\u793a\u4f8b",children:[],level:3}],level:2},{value:"\u8bbf\u95ee\u540e\u7aef\u5730\u5740\u4ee3\u7406\u524d\u7aef\u8d44\u6e90",id:"\u8bbf\u95ee\u540e\u7aef\u5730\u5740\u4ee3\u7406\u524d\u7aef\u8d44\u6e90",children:[],level:2}],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u672c\u5730\u5f00\u53d1\u573a\u666f\u4e0b\uff0c\u8bbf\u95ee\u9875\u9762\u7684 url \u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:3333"),"\uff0c\u4f46\u662f\u540e\u7aef\u63a5\u53e3\u53ef\u80fd\u662f\u5176\u4ed6 ip\u3001\u57df\u540d\u6216\u7aef\u53e3\uff0c\u6b64\u65f6\u5c31\u4f1a\u4ea7\u751f\u8de8\u57df\u95ee\u9898\uff0c\u5bfc\u81f4\u65e0\u6cd5\u8c03\u8bd5\uff0c\u9488\u5bf9\u8fd9\u4e2a\u95ee\u9898\u63a8\u8350\u4e24\u79cd\u4ee3\u7406\u65b9\u5f0f\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u8bbf\u95ee\u524d\u7aef\u9875\u9762\u5730\u5740\u4ee3\u7406\u540e\u7aef\u63a5\u53e3\uff1a\u8bbf\u95ee ",(0,l.kt)("inlineCode",{parentName:"li"},"npm start")," \u542f\u52a8\u7684\u9875\u9762\u5730\u5740 ",(0,l.kt)("inlineCode",{parentName:"li"},"http://127.0.0.1:3333"),"\uff0c\u7136\u540e\u5c06\u9875\u9762\u4e2d\u53d1\u51fa\u7684\u8bf7\u6c42\u4ee3\u7406\u5230\u524d\u7aef\u8c03\u8bd5\u670d\u52a1\uff08devServer\uff09\uff0c\u7136\u540e\u901a\u8fc7\u8c03\u8bd5\u670d\u52a1\u5411\u540e\u7aef\u53d1\u8d77\u5b9e\u9645\u7684\u63a5\u53e3\u8bf7\u6c42"),(0,l.kt)("li",{parentName:"ol"},"\u8bbf\u95ee\u540e\u7aef\u9875\u9762\u5730\u5740\u4ee3\u7406\u524d\u7aef\u8d44\u6e90\uff1a\u8bbf\u95ee\u540e\u7aef\u670d\u52a1\u63d0\u4f9b\u7684\u9875\u9762 url \u5730\u5740\uff0c\u6b64\u65f6\u9875\u9762\u4e2d\u901a\u5e38\u52a0\u8f7d\u7684\u90fd\u4e0d\u662f\u672c\u5730\u8c03\u8bd5\u7684\u524d\u7aef\u8d44\u6e90\uff0c\u56e0\u6b64\u65e0\u6cd5\u8054\u8c03\uff0c\u9700\u8981\u901a\u8fc7\u5de5\u5177\u8fdb\u884c\u8d44\u6e90\u5730\u5740\u7684\u4ee3\u7406")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u7ef4\u5ea6\\\u65b9\u6848"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bbf\u95ee\u524d\u7aef\u9875\u9762\u5730\u5740\u4ee3\u7406\u540e\u7aef\u63a5\u53e3"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bbf\u95ee\u540e\u7aef\u5730\u5740\u4ee3\u7406\u524d\u7aef\u8d44\u6e90"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u6d4f\u89c8\u5668\u4e2d\u6253\u5f00\u7684\u9875\u9762\u5730\u5740"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://127.0.0.1:3333"},"http://127.0.0.1:3333")),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u771f\u5b9e\u8bbf\u95ee\u7684\u5730\u5740\u5982\uff1a",(0,l.kt)("a",{parentName:"td",href:"https://taobao.com"},"https://taobao.com"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u652f\u6301\u63a5\u53e3\u9274\u6743"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0d\u652f\u6301\uff08\u672c\u5730\u9875\u9762\u6ca1\u6709\u7528\u6237\u4fe1\u606f\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"\u652f\u6301")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u4f9d\u8d56\u540e\u7aef\u670d\u52a1"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f31\u4f9d\u8d56\uff08\u53ea\u6709\u63a5\u53e3\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f3a\u4f9d\u8d56\uff08\u9875\u9762+\u63a5\u53e3\uff09")))),(0,l.kt)("p",null,"\u4e24\u79cd\u65b9\u5f0f\u7684\u4f18\u7f3a\u70b9\u5982\u4e0a\uff0c\u5f00\u53d1\u8005\u6309\u9700\u9009\u62e9\u4e00\u4e2a\u5373\u53ef\u3002\u63a5\u4e0b\u6765\u4ecb\u7ecd\u4e24\u79cd\u65b9\u6848\u5177\u4f53\u7684\u64cd\u4f5c\u65b9\u5f0f\u3002"),(0,l.kt)("h2",{id:"\u8bbf\u95ee\u524d\u7aef\u8c03\u8bd5\u5730\u5740\u4ee3\u7406\u540e\u7aef\u63a5\u53e3"},"\u8bbf\u95ee\u524d\u7aef\u8c03\u8bd5\u5730\u5740\u4ee3\u7406\u540e\u7aef\u63a5\u53e3"),(0,l.kt)("h3",{id:"\u914d\u7f6e-proxy-\u5b57\u6bb5"},"\u914d\u7f6e proxy \u5b57\u6bb5"),(0,l.kt)("p",null,"\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"build.json")," \u4e2d\u914d\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},"proxy")," \u5b57\u6bb5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "proxy": {\n      "/api": {\n      "enable": true,\n      "target": "http://127.0.0.1:6001"\n    }\n  }\n}\n')),(0,l.kt)("p",null,"\u9875\u9762\u4e2d\u53d1\u51fa\u7684\u6240\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"/api")," \u5f00\u5934\u7684\u63a5\u53e3\u90fd\u4f1a\u88ab\u4ee3\u7406\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:6001"),"\u3002proxy \u5b8c\u6574\u7684\u914d\u7f6e\u9879\u8bf7\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/chimurai/http-proxy-middleware"},"http-proxy-middleware"),"\u3002"),(0,l.kt)("h3",{id:"\u5339\u914d\u89c4\u5219"},"\u5339\u914d\u89c4\u5219"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"         foo://example.com:8042/over/there?name=ferret#nose\n         \\_/   \\______________/\\_________/ \\_________/ \\__/\n          |           |            |            |        |\n       scheme     authority       path        query   fragment\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"/")," \u5339\u914d\u6240\u6709\u89c4\u5219"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"/api")," \u5339\u914d path \u4ee5 ",(0,l.kt)("inlineCode",{parentName:"li"},"/api")," \u5f00\u5934\u7684\u8def\u5f84")),(0,l.kt)("h3",{id:"\u8bf7\u6c42\u793a\u4f8b"},"\u8bf7\u6c42\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"request({\n  url: '/api/proxy',\n  method: 'get',\n});\n")),(0,l.kt)("p",null,"\u8bf7\u6c42\u53d1\u51fa\u540e\u5c06\u4f1a\u88ab\u4ee3\u7406\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:6001/api/proxy"),"\uff0c\u4ee3\u7406\u6210\u529f\u540e\u53ef\u5728 network \u9762\u677f\u770b\u5230\u5bf9\u5e94\u7684\u4fe1\u606f\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.alicdn.com/tfs/TB1ivvqKxnaK1RjSZFBXXcW7VXa-769-407.png",alt:null})),(0,l.kt)("h2",{id:"\u8bbf\u95ee\u540e\u7aef\u5730\u5740\u4ee3\u7406\u524d\u7aef\u8d44\u6e90"},"\u8bbf\u95ee\u540e\u7aef\u5730\u5740\u4ee3\u7406\u524d\u7aef\u8d44\u6e90"),(0,l.kt)("p",null,"\u76f4\u63a5\u8bbf\u95ee\u540e\u7aef\u670d\u52a1\u63d0\u4f9b\u7684\u9875\u9762 url \u5730\u5740\uff0c\u7136\u540e\u5c06\u9875\u9762\u4e2d\u52a0\u8f7d\u7684\u8d44\u6e90\u4ee3\u7406\u6210\u672c\u5730\u8c03\u8bd5\u7684\u8d44\u6e90\uff0c\u63a8\u8350\u4e24\u79cd\u65b9\u6848\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"\u63a8\u8350"),"\uff1a\u901a\u8fc7 icejs \u63d2\u4ef6 ",(0,l.kt)("a",{parentName:"li",href:"/docs/plugin/list/smart-debug"},"build-plguin-smart-debug")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/yize/xswitch"},"chrome \u63d2\u4ef6 xswitch"))))}m.isMDXComponent=!0}}]);