(self.webpackChunksite=self.webpackChunksite||[]).push([[6615],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),i=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=i(n),m=o,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(k,s(s({ref:t},c),{},{components:n})):r.createElement(k,s({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var i=2;i<a;i++)s[i]=n[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8711:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return p},toc:function(){return i},default:function(){return d}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),s=["components"],l={title:"\u72b6\u6001\u7ba1\u7406",order:9},p={unversionedId:"guide/basic/store",id:"guide/basic/store",isDocsHomePage:!1,title:"\u72b6\u6001\u7ba1\u7406",description:"icejs \u5185\u7f6e\u4e86\u72b6\u6001\u7ba1\u7406\u65b9\u6848\uff0c\u5e76\u5728\u6b64\u57fa\u7840\u4e0a\u8fdb\u4e00\u6b65\u9075\u5faa \u201c\u7ea6\u5b9a\u4f18\u4e8e\u914d\u7f6e\u201d \u539f\u5219\uff0c\u8fdb\u884c\u62bd\u8c61\u548c\u5c01\u88c5\uff0c\u4f7f\u5f97\u72b6\u6001\u7ba1\u7406\u53d8\u5f97\u975e\u5e38\u5bb9\u6613\u3002",source:"@site/docs/guide/basic/store.md",sourceDirName:"guide/basic",slug:"/guide/basic/store",permalink:"/docs/guide/basic/store",editUrl:"https://github.com/ice-lab/site/edit/master/website/docs/guide/basic/store.md",version:"current",frontMatter:{title:"\u72b6\u6001\u7ba1\u7406",order:9},sidebar:"docs",previous:{title:"\u6570\u636e\u8bf7\u6c42",permalink:"/docs/guide/basic/request"},next:{title:"\u9875\u9762\u914d\u7f6e",permalink:"/docs/guide/basic/page"}},i=[{value:"\u5168\u5c40\u5e94\u7528\u72b6\u6001",id:"\u5168\u5c40\u5e94\u7528\u72b6\u6001",children:[{value:"\u5b9a\u4e49 Model",id:"\u5b9a\u4e49-model",children:[]},{value:"\u521d\u59cb\u5316 Store",id:"\u521d\u59cb\u5316-store",children:[]},{value:"\u5728 View \u4e2d\u4f7f\u7528\u6a21\u578b\u72b6\u6001",id:"\u5728-view-\u4e2d\u4f7f\u7528\u6a21\u578b\u72b6\u6001",children:[]}]},{value:"\u9875\u9762\u7ea7\u72b6\u6001",id:"\u9875\u9762\u7ea7\u72b6\u6001",children:[{value:"\u5d4c\u5957\u9875\u9762",id:"\u5d4c\u5957\u9875\u9762",children:[]}]},{value:"\u53c2\u9605\u8d44\u6599",id:"\u53c2\u9605\u8d44\u6599",children:[{value:"\u8bbe\u7f6e\u521d\u59cb\u72b6\u6001",id:"\u8bbe\u7f6e\u521d\u59cb\u72b6\u6001",children:[]},{value:"TypeScript \u7c7b\u578b\u63d0\u793a",id:"typescript-\u7c7b\u578b\u63d0\u793a",children:[]},{value:"model \u5b9a\u4e49\u8be6\u7ec6\u8bf4\u660e",id:"model-\u5b9a\u4e49\u8be6\u7ec6\u8bf4\u660e",children:[]},{value:"model \u4e4b\u95f4\u901a\u4fe1",id:"model-\u4e4b\u95f4\u901a\u4fe1",children:[]},{value:"\u83b7\u53d6 effects \u7684\u72b6\u6001 loading/error",id:"\u83b7\u53d6-effects-\u7684\u72b6\u6001-loadingerror",children:[]},{value:"\u5728 Class Component \u4e2d\u4f7f\u7528",id:"\u5728-class-component-\u4e2d\u4f7f\u7528",children:[]},{value:"\u8def\u7531\u5207\u6362\u540e\u91cd\u7f6e\u9875\u9762\u72b6\u6001",id:"\u8def\u7531\u5207\u6362\u540e\u91cd\u7f6e\u9875\u9762\u72b6\u6001",children:[]},{value:"Redux Devtools",id:"redux-devtools",children:[]},{value:"\u5728\u5176\u4ed6\u5730\u65b9\u4f7f\u7528 store",id:"\u5728\u5176\u4ed6\u5730\u65b9\u4f7f\u7528-store",children:[]}]},{value:"\u7248\u672c\u53d8\u66f4\u8bf4\u660e",id:"\u7248\u672c\u53d8\u66f4\u8bf4\u660e",children:[]}],c={toc:i};function d(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"icejs \u5185\u7f6e\u4e86\u72b6\u6001\u7ba1\u7406\u65b9\u6848\uff0c\u5e76\u5728\u6b64\u57fa\u7840\u4e0a\u8fdb\u4e00\u6b65\u9075\u5faa ",(0,a.kt)("strong",{parentName:"p"},"\u201c\u7ea6\u5b9a\u4f18\u4e8e\u914d\u7f6e\u201d")," \u539f\u5219\uff0c\u8fdb\u884c\u62bd\u8c61\u548c\u5c01\u88c5\uff0c\u4f7f\u5f97\u72b6\u6001\u7ba1\u7406\u53d8\u5f97\u975e\u5e38\u5bb9\u6613\u3002"),(0,a.kt)("h2",{id:"\u5168\u5c40\u5e94\u7528\u72b6\u6001"},"\u5168\u5c40\u5e94\u7528\u72b6\u6001"),(0,a.kt)("h3",{id:"\u5b9a\u4e49-model"},"\u5b9a\u4e49 Model"),(0,a.kt)("p",null,"\u7ea6\u5b9a\u5168\u5c40\u72b6\u6001\u4f4d\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"src/models")," \u76ee\u5f55\uff0c\u76ee\u5f55\u7ed3\u6784\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md"},"src\n\u251c\u2500\u2500 models // \u5168\u5c40\u72b6\u6001\n| \u251c\u2500\u2500 counter.ts\n\u2502 \u2514\u2500\u2500 user.ts\n\u2514\u2500\u2500 store.ts\n")),(0,a.kt)("p",null,"\u5047\u8bbe\u6211\u4eec\u9700\u8981\u5168\u5c40\u7ba1\u7406\u7528\u6237\u72b6\u6001\uff0c\u5b9a\u4e49\u6a21\u578b\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// src/models/user.ts\nexport const delay = (time) => new Promise((resolve) => setTimeout(() => resolve(), time));\n\nexport default {\n  // \u5b9a\u4e49 model \u7684\u521d\u59cb state\n  state: {\n    name: '',\n    id: '',\n  },\n\n  // \u5b9a\u4e49\u6539\u53d8\u8be5\u6a21\u578b\u72b6\u6001\u7684\u7eaf\u51fd\u6570\n  reducers: {\n    update(prevState, payload) {\n      return {\n        ...prevState,\n        ...payload,\n      };\n    },\n  },\n\n  // \u5b9a\u4e49\u5904\u7406\u8be5\u6a21\u578b\u526f\u4f5c\u7528\u7684\u51fd\u6570\n  effects: (dispatch) => ({\n    async getUserInfo() {\n      await delay(1000);\n      dispatch.user.update({\n        name: 'taobao',\n        id: '123',\n      });\n    },\n  }),\n};\n")),(0,a.kt)("h3",{id:"\u521d\u59cb\u5316-store"},"\u521d\u59cb\u5316 Store"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// src/store.ts\nimport { createStore } from 'ice';\nimport user from './models/user';\nimport project from './models/project';\n\nconst store = createStore(\n  {\n    user,\n    project,\n  },\n  {\n    // options\n  },\n);\n\nexport default store;\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"createStore()")," \u652f\u6301\u7684 options:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"disableImmer\uff1a\u5e03\u5c14\u7c7b\u578b\uff0c\u53ef\u9009\uff0c\u9ed8\u8ba4\u503c false\uff0c\u5982\u679c\u8bbe\u7f6e\u4e3a true\uff0c\u90a3\u4e48 immer \u5c06\u88ab\u7981\u7528\uff0c\u8fd9\u610f\u5473\u7740\u4e0d\u80fd\u518d\u5728 reducers \u4e2d\u76f4\u63a5\u6539\u53d8\u72b6\u6001\uff0c\u800c\u662f\u5fc5\u987b\u8fd4\u56de\u65b0\u7684\u72b6\u6001\u3002"),(0,a.kt)("li",{parentName:"ul"},"disableError\uff1a\u5e03\u5c14\u7c7b\u578b\uff0c\u53ef\u9009\uff0c\u9ed8\u8ba4\u503c false\uff0c\u5982\u679c\u8bbe\u7f6e\u4e3a true\uff0c\u5219 ",(0,a.kt)("inlineCode",{parentName:"li"},"UseModelEffectsError")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"WithModelEffectsError")," \u5c06\u4e0d\u53ef\u7528\u3002"),(0,a.kt)("li",{parentName:"ul"},"disableLoading\uff1a\u5e03\u5c14\u7c7b\u578b\uff0c\u53ef\u9009\uff0c\u9ed8\u8ba4\u503c false\uff0c\u5982\u679c\u8bbe\u7f6e\u4e3a true\uff0c\u5219 ",(0,a.kt)("inlineCode",{parentName:"li"},"useModelEffectsLoading")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"withModelEffectsLoading")," \u5c06\u4e0d\u53ef\u7528\u3002"),(0,a.kt)("li",{parentName:"ul"},"plugins\uff1a\u6570\u7ec4\u7c7b\u578b\uff0c\u53ef\u9009\uff0cRedux \u63d2\u4ef6"),(0,a.kt)("li",{parentName:"ul"},"redux\uff1a\u5bf9\u8c61\u7c7b\u578b\uff0c\u53ef\u9009",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"middlewares\uff1a\u6570\u7ec4\u7c7b\u578b\uff0cRedux middlewares"),(0,a.kt)("li",{parentName:"ul"},"devtoolOptions\uff1a\u5bf9\u8c61\u7c7b\u578b\uff0cRedux Devtools \u53c2\u6570")))),(0,a.kt)("h3",{id:"\u5728-view-\u4e2d\u4f7f\u7528\u6a21\u578b\u72b6\u6001"},"\u5728 View \u4e2d\u4f7f\u7528\u6a21\u578b\u72b6\u6001"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},"+ import store from '@/store';\n\nconst HomePage = () => {\n+  const [userState, userDispatchers] = store.useModel('user');\n\n  return (\n    <>\n      <span>{userState.id}</span>\n      <span>{userState.name}</span>\n    </>\n  );\n}\n")),(0,a.kt)("h2",{id:"\u9875\u9762\u7ea7\u72b6\u6001"},"\u9875\u9762\u7ea7\u72b6\u6001"),(0,a.kt)("p",null,"\u9875\u9762\u72b6\u6001\u53ea\u80fd\u5728\u8be5\u9875\u9762\u4e0b\u7684\u7ec4\u4ef6\u4e2d\u4f7f\u7528\uff0c\u65e0\u6cd5\u8de8\u9875\u9762\u4f7f\u7528\u3002\u7ea6\u5b9a\u9875\u9762\u72b6\u6001\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"src/pages/*/models")," \u4e2d\u5b9a\u4e49\u3002"),(0,a.kt)("p",null,"\u76ee\u5f55\u7ec4\u7ec7\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},"src\n\u251c\u2500\u2500 models                  // \u5168\u5c40\u72b6\u6001\n\u2502   \u2514\u2500\u2500 user.ts\n\u2514\u2500\u2500 pages\n|   \u251c\u2500\u2500 Home                // Home \u9875\u9762\n+|   \u2502\xa0\xa0 \u251c\u2500\u2500 models          // \u9875\u9762\u72b6\u6001\n+|   \u2502\xa0\xa0 |   \u251c\u2500\u2500 foo.ts\n+|   \u2502\xa0\xa0 |   \u2514\u2500\u2500 bar.ts\n+|   \u2502\xa0\xa0 \u251c\u2500\u2500 store.ts\n|   \u2502\xa0\xa0 \u2514\u2500\u2500 index.tsx\n\u2514\u2500\u2500 app.ts\n")),(0,a.kt)("p",null,"\u5b9a\u4e49\u6a21\u578b\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// src/pages/Home/models/foo.ts\nexport default {\n  state: {\n    title: 'Hello',\n  },\n};\n")),(0,a.kt)("p",null,"\u521d\u59cb\u5316 Store \u5b9e\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// src/pages/Home/store.ts\nimport { createStore } from 'ice';\nimport foo from './models/foo';\n\nconst store = createStore({ foo });\n\nexport default store;\n")),(0,a.kt)("p",null,"\u5728\u9875\u9762\u7ec4\u4ef6\u4e2d\u4f7f\u7528\u6a21\u578b\u72b6\u6001\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"// \u5f15\u7528\u9875\u9762\u72b6\u6001\nimport pageStore from '@/pages/Home/store';\n\nconst HomePage = () => {\n  const [pageState, pageDispatchers] = pageStore.useModel('foo');\n  return (\n    <>{pageState.title}</> // Hello\n  );\n};\n")),(0,a.kt)("h3",{id:"\u5d4c\u5957\u9875\u9762"},"\u5d4c\u5957\u9875\u9762"),(0,a.kt)("p",null,"\u67d0\u4e9b\u590d\u6742\u573a\u666f\u4f1a\u51fa\u73b0\u5d4c\u5957\u9875\u9762\u7684\u60c5\u51b5\uff0c\u5373 ",(0,a.kt)("inlineCode",{parentName:"p"},"src/pages/Home")," \u4e0b",(0,a.kt)("strong",{parentName:"p"},"\u5305\u542b\u591a\u4e2a\u8def\u7531\u9875\u9762"),"\uff0c\u76ee\u5f55\u7ec4\u7ec7\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md"},"src\n\u2514\u2500\u2500 pages\n\u2502 \u251c\u2500\u2500 Home // Home \u9875\u9762\u5305\u542b\u4e86 Foo\u3001Bar \u7b49\u591a\u4e2a\u8def\u7531\u9875\u9762\n\u2502 \u2502 \u251c\u2500\u2500 Foo  \n\u2502 \u2502 \u251c\u2500\u2500 Bar\n\u2502 \u2502 \u251c\u2500\u2500 Layout // \u9875\u9762\u5e03\u5c40\n\u2502 \u2502 \u2502 \u2514\u2500\u2500 index.tsx\n\u2502 \u2502 \u251c\u2500\u2500 models // \u9875\u9762\u72b6\u6001\n\u2502 \u2502 \u2502 \u251c\u2500\u2500 Foo.ts\n\u2502 \u2502 \u2502 \u2514\u2500\u2500 Bar.ts\n\u2502 \u2502 \u2514\u2500\u2500 store.ts\n\u2514\u2500\u2500 app.ts\n")),(0,a.kt)("p",null,"\u5bf9\u4e8e\u5d4c\u5957\u9875\u9762\uff0c\u6846\u67b6\u4f1a\u5c06 store \u7684 Provider \u5305\u88f9\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"Layout/index.tsx")," \u4e0a\uff0c\u56e0\u6b64\u9700\u8981\u4fdd\u8bc1\u8be5\u6587\u4ef6\u7684\u5b58\u5728\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"// Layout/index.tsx\nexport default ({ children }) => {\n  return <>{children}</>;\n};\n")),(0,a.kt)("p",null,"\u540c\u65f6\u914d\u7f6e\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"src/routes.ts")," \u4e2d\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},"// src/routes.ts\n+import HomeLayout from '@/pages/Home/Layout';\nimport Foo from '@/pages/Home/Foo';\nimport Bar from '@/pages/Home/Bar';\nimport About from '@/pages/About';\n\nexport default [\n  {\n    path: '/',\n    component: BasicLayout,\n    children: [\n      {\n        path: '/home',\n+        component: HomeLayout,\n        children: [\n          {\n            path: '/foo',\n            component: Foo\n          }\n        ]\n      },\n      {\n        path: '/about',\n        component: About,\n      }\n    ]\n  }\n]\n")),(0,a.kt)("h2",{id:"\u53c2\u9605\u8d44\u6599"},"\u53c2\u9605\u8d44\u6599"),(0,a.kt)("h3",{id:"\u8bbe\u7f6e\u521d\u59cb\u72b6\u6001"},"\u8bbe\u7f6e\u521d\u59cb\u72b6\u6001"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { runApp } from 'ice';\n\nconst appConfig = {\n  store: {\n    // \u53ef\u9009\uff0c\u521d\u59cb\u5316\u72b6\u6001\n    initialStates: {},\n  },\n};\n\nrunApp(appConfig);\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"API ",(0,a.kt)("inlineCode",{parentName:"p"},"store.getInitialStates")," \u5df2\u5e9f\u5f03\uff0c\u63a8\u8350\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"store.initialStates"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"SSR \u573a\u666f\u4e0b ",(0,a.kt)("inlineCode",{parentName:"p"},"initialData.initialStates")," \u4f1a\u9ed8\u8ba4\u8d4b\u503c\u7ed9 ",(0,a.kt)("inlineCode",{parentName:"p"},"store.initialStates"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u9875\u9762\u7ea7\u72b6\u6001\u76ee\u524d\u4e0d\u652f\u6301\u8bbe\u7f6e initialStates")),(0,a.kt)("h3",{id:"typescript-\u7c7b\u578b\u63d0\u793a"},"TypeScript \u7c7b\u578b\u63d0\u793a"),(0,a.kt)("p",null,"\u7f16\u5199\u7c7b\u578b\u6709\u52a9\u4e8e\u66f4\u597d\u7684\u4ee3\u7801\u63d0\u793a\uff0c\u7c7b\u578b\u5b9a\u4e49\u6b65\u9aa4\u5982\u4e0b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u521b\u5efa Store \u5b9e\u4f8b")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},"// src/store.ts\nimport { createStore, IStoreModels, IStoreDispatch, IStoreRootState } from 'ice';\nimport user from './models/user';\nimport porject from './models/porject';\n\n+interface IAppStoreModels extends IStoreModels {\n+  user: typeof user;\n+  project: typeof project;\n+};\n\n+const appModels: IAppStoreModels = {\n+  user,\n+  project,\n+};\n\nexport default createStore(appModels);\n\n+export type IRootDispatch = IStoreDispatch<typeof appModels>;\n+export type IRootState = IStoreRootState<typeof appModels>;\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5b9a\u4e49\u72b6\u6001\u6a21\u578b")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},"// src/models/user.ts\n+import { IRootState, IRootDispatch } from '@/store';\n\nconst user = {\n  state: [],\n  reducers: {},\n+  effects: ((dispatch: IRootDispatch) => ({\n+    like(playload, rootState: IRootState) {\n+      dispatch.project.foo(payload); // \u8c03\u7528\u5176\u4ed6 model \u7684 effects/reducers\n+      rootState.project.title;       // \u83b7\u53d6\u5176\u4ed6 model \u7684 state\n+    }\n+  })\n};\n")),(0,a.kt)("h3",{id:"model-\u5b9a\u4e49\u8be6\u7ec6\u8bf4\u660e"},"model \u5b9a\u4e49\u8be6\u7ec6\u8bf4\u660e"),(0,a.kt)("p",null,"\u5982\u4e0a\u793a\u4f8b\u6240\u8ff0\uff0cicejs \u7ea6\u5b9a\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"src/models"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"src/pages/*/models")," \u76ee\u5f55\u4e0b\u7684\u6587\u4ef6\u4e3a\u9879\u76ee\u5b9a\u4e49\u7684\u6a21\u578b\u6587\u4ef6\uff0c\u6bcf\u4e2a\u6587\u4ef6\u9700\u8981\u9ed8\u8ba4\u5bfc\u51fa\u4e00\u4e2a\u5bf9\u8c61\u3002"),(0,a.kt)("p",null,"\u901a\u5e38\u6a21\u578b\u5b9a\u4e49\u5305\u62ec state\u3001reducers\u3001effects \u4e09\u90e8\u5206\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export default {\n  state: {},\n\n  reducers: {},\n\n  effects: {},\n};\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"state")),(0,a.kt)("p",null,"model \u7684\u521d\u59cb state"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},"export default {\n+ state: { count: 0 }\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"reducers")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"reducers: { [string]: (prevState, payload) => any }\n")),(0,a.kt)("p",null,"\u4e00\u4e2a\u6539\u53d8\u8be5\u6a21\u578b\u72b6\u6001\u7684\u51fd\u6570\u96c6\u5408\u3002\u8fd9\u4e9b\u65b9\u6cd5\u4ee5\u6a21\u578b\u7684\u4e0a\u4e00\u6b21 prevState \u548c\u4e00\u4e2a payload \u4f5c\u4e3a\u5165\u53c2\uff0c\u5728\u65b9\u6cd5\u4e2d\u4f7f\u7528\u53ef\u53d8\u7684\u65b9\u5f0f\u6765\u66f4\u65b0\u72b6\u6001\u3002\u8fd9\u4e9b\u65b9\u6cd5\u5e94\u8be5\u662f\u4ec5\u4f9d\u8d56\u4e8e prevState \u548c payload \u53c2\u6570\u6765\u8ba1\u7b97\u4e0b\u4e00\u4e2a nextState \u7684\u7eaf\u51fd\u6570\u3002\u5bf9\u4e8e\u6709\u526f\u4f5c\u7528\u7684\u51fd\u6570\uff0c\u8bf7\u4f7f\u7528 effects\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},"export default {\n  state: { count: 0, list: [] },\n\n+ reducers: {\n+   increment (prevState, payload) {\n+     //\n+     prevState.count += 1;\n+     prevState.list.push(1);\n+   },\n+   decrement (prevState) {\n+     prevState.count += 1;\n+   }\n+ }\n}\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"icestore \u9ed8\u8ba4\u5185\u7f6e\u4e86 immer\uff0c\u56e0\u6b64 reducer \u4e2d\u76f4\u63a5\u4fee\u6539\u6570\u636e\u5373\u53ef\uff0c\u65e0\u9700\u8fd4\u56de\u65b0\u5bf9\u8c61")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"effects")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"effects: (dispatch) => ({ [string]: (payload, rootState) => void })\n")),(0,a.kt)("p",null,"\u4e00\u4e2a\u53ef\u4ee5\u5904\u7406\u8be5\u6a21\u578b\u526f\u4f5c\u7528\u7684\u51fd\u6570\u96c6\u5408\u3002\u8fd9\u4e9b\u65b9\u6cd5\u4ee5 payload \u548c rootState \u4f5c\u4e3a\u5165\u53c2\uff0c\u9002\u7528\u4e8e\u8fdb\u884c\u5f02\u6b65\u8c03\u7528\u3001\u6a21\u578b\u8054\u52a8\u7b49\u573a\u666f\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},"export default {\n  state: { count: 0 },\n\n  reducers: {\n    increment (prevState, payload) {\n      prevState.count += 1;\n    },\n    decrement (prevState) {\n      prevState.count -= 1;\n    }\n  },\n\n+ effects: (dispatch) => ({\n+   async asyncDecrement() {\n+     await delay(1000);             // \u8fdb\u884c\u4e00\u4e9b\u5f02\u6b65\u64cd\u4f5c\n+     this.increment();              // \u8c03\u7528\u6a21\u578b reducers \u5185\u7684\u65b9\u6cd5\u6765\u66f4\u65b0\u72b6\u6001\n+   },\n+ }),\n};\n")),(0,a.kt)("h3",{id:"model-\u4e4b\u95f4\u901a\u4fe1"},"model \u4e4b\u95f4\u901a\u4fe1"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u5982\u679c\u4e24\u4e2a model \u4e0d\u5c5e\u4e8e\u540c\u4e00\u4e2a store \u5b9e\u4f8b\uff0c\u662f\u65e0\u6cd5\u901a\u4fe1\u7684")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},"// src/models/user\nexport default {\n  state: {\n    name: '',\n    tasks: 0,\n  },\n  effects: () => ({\n    async refresh() {\n      const data = await fetch('/user');\n+      // \u901a\u8fc7 this.foo \u8c03\u7528\u81ea\u8eab\u7684 reducer\n+      this.setState(data);\n    },\n  }),\n};\n\n// src/models/tasks\nexport default {\n  state: [],\n  effects: (dispatch) => ({\n    async refresh() {\n      const data = await fetch('/tasks');\n      this.setState(data);\n    },\n    async add(task) {\n      await fetch('/tasks/add', task);\n+      // \u8c03\u7528\u53e6\u4e00\u4e2a model user \u7684 effects\n+      await dispatch.user.refresh();\n+      // \u901a\u8fc7 this.foo \u8c03\u7528\u81ea\u8eab\u7684 effects\n+      await this.refresh();\n    },\n  }),\n};\n")),(0,a.kt)("p",null,"\u5728 effects \u91cc\u7684 action \u65b9\u6cd5\u4e2d\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"dispatch[model][action]")," \u62ff\u5230\u5176\u4ed6\u6a21\u578b\u6240\u5b9a\u4e49\u7684\u65b9\u6cd5\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u9047\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"this.foo")," \u7684 ts \u7c7b\u578b\u9519\u8bef\uff0c\u8bf7\u53c2\u8003\u6587\u6863 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ice-lab/icestore/blob/master/docs/qna.zh-CN.md"},"icestore QA")," \u8fdb\u884c\u4fee\u590d")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"setState \u662f icestore \u5185\u7f6e\u7684\u4e00\u4e2a reducer\uff0c\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528")),(0,a.kt)("h3",{id:"\u83b7\u53d6-effects-\u7684\u72b6\u6001-loadingerror"},"\u83b7\u53d6 effects \u7684\u72b6\u6001 loading/error"),(0,a.kt)("p",null,"\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"useModelEffectsState")," API \u5373\u53ef\u83b7\u53d6\u5230 effects \u7684 loading \u548c error \u72b6\u6001\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},"import store from '@/store';\n\nfunction FunctionComponent() {\n  const [state, dispatchers] = store.useModel('counter');\n+  const effectsState = store.useModelEffectsState('counter');\n\n  useEffect(() => {\n    dispatchers.asyncDecrement();\n  }, []);\n\n+  console.log(effectsState.asyncDecrement.isLoading); // loading\n+  console.log(effectsState.asyncDecrement.error);  // error\n}\n")),(0,a.kt)("h3",{id:"\u5728-class-component-\u4e2d\u4f7f\u7528"},"\u5728 Class Component \u4e2d\u4f7f\u7528"),(0,a.kt)("p",null,"useModel \u76f8\u5173\u7684 API \u57fa\u4e8e React \u7684 Hooks \u80fd\u529b\uff0c\u4ec5\u80fd\u5728 Function Component \u4e2d\u4f7f\u7528\uff0c\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"withModel")," API \u53ef\u4ee5\u5b9e\u73b0\u5728 Class Component \u4e2d\u4f7f\u7528\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import store from '@/store';\n\nclass TodoList extends React.Component {\n  render() {\n    const { todos } = this.props;\n    const [state, dispatchers] = todos;\n    // ...\n  }\n}\n\nexport default store.withModel('todos')(TodoList);\n// \u7ed1\u5b9a\u591a\u4e2a model\n// export default withModel('user')(withModel('todos')(TodoList));\n")),(0,a.kt)("p",null,"\u540c\u65f6\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"withModelDispatchers")," \u4ee5\u53ca ",(0,a.kt)("inlineCode",{parentName:"p"},"withModelEffectsState")," API\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ice-lab/icestore/blob/master/docs/api.md"},"\u5b8c\u6574 API \u6587\u6863")),(0,a.kt)("h3",{id:"\u8def\u7531\u5207\u6362\u540e\u91cd\u7f6e\u9875\u9762\u72b6\u6001"},"\u8def\u7531\u5207\u6362\u540e\u91cd\u7f6e\u9875\u9762\u72b6\u6001"),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"build.json")," \u4e2d\u5f00\u542f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "store": {\n    "resetPageState": true\n  }\n}\n')),(0,a.kt)("p",null,"\u5982\u679c\u5f00\u53d1\u8005\u81ea\u884c\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"store.ts")," \u4e2d\u521d\u59cb\u5316 ",(0,a.kt)("inlineCode",{parentName:"p"},"store")," \u5b9e\u4f8b\uff0c\u9700\u8981\u6309\u7167\u4ee5\u4e0b\u89c4\u5219\u8fdb\u884c\u521b\u5efa\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// src/pages/Home/store.ts\nimport { createStore } from 'ice';\n\n// \u6709 models \u76ee\u5f55\u7684\u60c5\u51b5\nimport user from './models/user';\nimport project from './models/project';\n\n// \u4f7f\u7528 model \u7684\u6587\u4ef6\u540d\u4f5c\u4e3a model key\nexport default createStore({\n  user,\n  project,\n});\n\n// \u6709 model.ts \u6587\u4ef6\u7684\u60c5\u51b5\nimport store from './model';\n\n// \u4f7f\u7528 default \u4f5c\u4e3a model key\nexport default createStore({ default: store });\n")),(0,a.kt)("h3",{id:"redux-devtools"},"Redux Devtools"),(0,a.kt)("p",null,"icejs \u4e2d\u9ed8\u8ba4\u96c6\u6210\u4e86 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/zalmoxisus/redux-devtools-extension"},"Redux Devtools"),"\uff0c\u4e0d\u9700\u8981\u989d\u5916\u7684\u914d\u7f6e\u5c31\u53ef\u4ee5\u901a\u8fc7 Redux Devtools \u8c03\u8bd5\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.alicdn.com/tfs/TB1wK4nqypE_u4jSZKbXXbCUVXa-1918-430.png",alt:null})),(0,a.kt)("p",null,"\u5982\u679c\u60f3\u8981\u5b9a\u4e49 Devtools \u7684\u53c2\u6570\uff0c\u53ef\u4ee5\u67e5\u770b\u4e0a\u9762 ",(0,a.kt)("inlineCode",{parentName:"p"},"createStore")," \u7684 options \u8bf4\u660e\u3002"),(0,a.kt)("h3",{id:"\u5728\u5176\u4ed6\u5730\u65b9\u4f7f\u7528-store"},"\u5728\u5176\u4ed6\u5730\u65b9\u4f7f\u7528 store"),(0,a.kt)("p",null,"\u6ee1\u8db3\u4ee5\u4e0b\u51e0\u79cd\u60c5\u51b5\uff0c\u6846\u67b6\u90fd\u4f1a\u81ea\u52a8\u5e2e\u52a9\u5f00\u53d1\u8005\u5305\u88f9 ",(0,a.kt)("inlineCode",{parentName:"p"},"store.Provider"),"\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"SPA \u5168\u5c40 store\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"src/")," \u4e0b\u6709 ",(0,a.kt)("inlineCode",{parentName:"li"},"store.js")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"app.js")),(0,a.kt)("li",{parentName:"ul"},"SPA \u9875\u9762\u7ea7 store\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"src/pages/Home")," \u4e0b\u6709 ",(0,a.kt)("inlineCode",{parentName:"li"},"store.js")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"index.jsx")),(0,a.kt)("li",{parentName:"ul"},"SPA \u5d4c\u5957\u9875\u9762\u7ea7 store\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"src/pages/Home")," \u4e0b\u6709 ",(0,a.kt)("inlineCode",{parentName:"li"},"store.js")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"Layout/index.jsx"),"\uff08\u4f18\u5148\u7ea7\u4f4e\u4e8e\u4e0a\u9762\uff09"),(0,a.kt)("li",{parentName:"ul"},"MPA \u7ec4\u4ef6\u7c7b\u578b\u7684 entry\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"src/pages/Home")," \u4e0b\u6709 ",(0,a.kt)("inlineCode",{parentName:"li"},"store.js")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"index.jsx")),(0,a.kt)("li",{parentName:"ul"},"MPA \u5355\u9875\u7c7b\u578b\u7684 entry\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"src/pages/Home")," \u4e0b\u6709 ",(0,a.kt)("inlineCode",{parentName:"li"},"store.js"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"app.js"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Layout/index.jsx"))),(0,a.kt)("p",null,"\u5982\u679c\u4e0d\u6ee1\u8db3\u4e0a\u8ff0\u60c5\u51b5\uff0c\u5219\u9700\u8981\u5f00\u53d1\u8005\u81ea\u884c\u5305\u88f9 ",(0,a.kt)("inlineCode",{parentName:"p"},"store.Provider"),"\u3002\u6bd4\u5982\u5e0c\u671b\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"src/pages/Home/Foo/")," \u4e0b\u521b\u5efa\u4e00\u4e2a store\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"src/pages/Home/Foo/models/")," \u4e0b\u5b9a\u4e49 model"),(0,a.kt)("li",{parentName:"ol"},"\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"src/pages/Home/Foo/store.ts")," \u4e2d\u521d\u59cb\u5316 store"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"\u65b0\u589e\u6b65\u9aa4\uff1a")," \u5728 ",(0,a.kt)("inlineCode",{parentName:"li"}," src/pages/Home/Foo/index.tsx")," \u4e2d\u5305\u88f9 ",(0,a.kt)("inlineCode",{parentName:"li"},"store.Provider"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"// src/pages/Home/Foo/index.tsx\nimport store from './store';\nconst { Provider } = store;\n\nexport default () => {\n  return (\n    <Provider>\n      <Child />\n    </Provider>\n  );\n};\n\nfunction Child() {\n  const [state, actions] = store.useModel('foo');\n  return <></>;\n}\n")),(0,a.kt)("h2",{id:"\u7248\u672c\u53d8\u66f4\u8bf4\u660e"},"\u7248\u672c\u53d8\u66f4\u8bf4\u660e"),(0,a.kt)("p",null,"icejs v1.9.7 \u7248\u672c\u5f00\u59cb\u6846\u67b6\u63a8\u8350\u5f00\u53d1\u8005\u81ea\u884c\u521d\u59cb\u5316 store\uff0c\u8fd9\u6837\u53ef\u4ee5\u66f4\u7075\u6d3b\u7684\u5b9a\u5236\u4e00\u4e9b\u53c2\u6570\uff0c\u76f8\u5bf9\u4e4b\u524d\u65b9\u6848\u5e26\u6765\u7684\u6539\u53d8\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5f00\u53d1\u8005\u9700\u8981\u81ea\u884c\u5728 store.ts \u4e2d\u521d\u59cb\u5316 store \u5b9e\u4f8b\uff0c\u6846\u67b6\u9ed8\u8ba4\u4e0d\u521d\u59cb\u5316")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// src/store.ts\nimport { createStore } from 'ice';\nimport user from './models/user';\nimport project from './models/project';\n\nconst store = createStore({\n  user,\n  project,\n});\n\nexport default store;\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5f15\u5165 store \u7684\u8def\u5f84\u53d1\u751f\u4e86\u53d8\u5316\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},"// \u5168\u5c40\u72b6\u6001\n- import { store } from 'ice';\n+ import store from '@/store';\n\n// \u9875\u9762\u7ea7\u72b6\u6001\n- import { store } from 'ice/Home';\n+ import store from '@/pages/Home/store';\n")),(0,a.kt)("p",null,"\u5bf9\u4e8e\u4e4b\u524d\u7684\u7248\u672c\u6211\u4eec\u505a\u4e86\u5411\u524d\u517c\u5bb9\uff0c\u53ea\u6709\u5f53\u9879\u76ee\u91cc\u5b58\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"src/store.ts")," \u6216\u8005 ",(0,a.kt)("inlineCode",{parentName:"p"},"src/pages/*/store.ts")," \u65f6\u624d\u4f1a\u89e6\u53d1\u65b0\u7684\u65b9\u6848\uff0c\u5982\u679c\u4e4b\u524d\u9879\u76ee\u91cc\u521a\u597d\u5b58\u5728\u540c\u540d\u6587\u4ef6\u5219\u6709\u53ef\u80fd\u89e6\u53d1 break change\u3002"))}d.isMDXComponent=!0}}]);