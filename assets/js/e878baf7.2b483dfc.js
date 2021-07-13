(self.webpackChunksite=self.webpackChunksite||[]).push([[8377],{3905:function(e,n,r){"use strict";r.d(n,{Zo:function(){return l},kt:function(){return f}});var t=r(7294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=t.createContext({}),u=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},l=function(e){var n=u(e.components);return t.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=u(r),f=i,m=d["".concat(c,".").concat(f)]||d[f]||s[f]||a;return r?t.createElement(m,o(o({ref:n},l),{},{components:r})):t.createElement(m,o({ref:n},l))}));function f(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var u=2;u<a;u++)o[u]=r[u];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6788:function(e,n,r){"use strict";r.r(n),r.d(n,{frontMatter:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return s}});var t=r(2122),i=r(9756),a=(r(7294),r(3905)),o=["components"],p={title:"\u5e94\u7528\u5165\u53e3",order:3},c={unversionedId:"guide/basic/app",id:"guide/basic/app",isDocsHomePage:!1,title:"\u5e94\u7528\u5165\u53e3",description:"\u6846\u67b6\u901a\u8fc7\u8c03\u7528 runApp \u521b\u5efa\u6e32\u67d3\u6574\u4e2a\u5e94\u7528\uff0c\u5728\u521b\u5efa\u5e94\u7528\u65f6\u53ef\u4ee5\u4f20\u5165\u5e94\u7528\u7684\u5168\u5c40\u914d\u7f6e\u3002",source:"@site/docs/guide/basic/app.md",sourceDirName:"guide/basic",slug:"/guide/basic/app",permalink:"/docs/guide/basic/app",editUrl:"https://github.com/ice-lab/site/edit/master/website/docs/guide/basic/app.md",version:"current",frontMatter:{title:"\u5e94\u7528\u5165\u53e3",order:3},sidebar:"docs",previous:{title:"\u76ee\u5f55\u7ed3\u6784",permalink:"/docs/guide/basic/structure"},next:{title:"\u5de5\u7a0b\u914d\u7f6e",permalink:"/docs/guide/basic/build"}},u=[{value:"\u914d\u7f6e\u89c4\u8303",id:"\u914d\u7f6e\u89c4\u8303",children:[]},{value:"\u542f\u52a8\u9879\u914d\u7f6e",id:"\u542f\u52a8\u9879\u914d\u7f6e",children:[]},{value:"\u5176\u4ed6\u914d\u7f6e\u9879",id:"\u5176\u4ed6\u914d\u7f6e\u9879",children:[]}],l={toc:u};function s(e){var n=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,t.Z)({},l,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u6846\u67b6\u901a\u8fc7\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"runApp")," \u521b\u5efa\u6e32\u67d3\u6574\u4e2a\u5e94\u7528\uff0c\u5728\u521b\u5efa\u5e94\u7528\u65f6\u53ef\u4ee5\u4f20\u5165\u5e94\u7528\u7684\u5168\u5c40\u914d\u7f6e\u3002"),(0,a.kt)("h2",{id:"\u914d\u7f6e\u89c4\u8303"},"\u914d\u7f6e\u89c4\u8303"),(0,a.kt)("p",null,"\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"src/app.ts")," \u5bf9\u5e94\u7528\u8fdb\u884c\u5168\u5c40\u914d\u7f6e\uff0c\u8bbe\u7f6e\u8def\u7531\u3001\u8fd0\u884c\u73af\u5883\u3001\u8bf7\u6c42\u3001\u65e5\u5fd7\u7b49\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { runApp, IAppConfig } from 'ice';\n\n// \u5e94\u7528\u914d\u7f6e\nconst appConfig: IAppConfig = {\n  app: {\n    // ...\n  },\n  router: {\n    // ...\n  },\n  store: {\n    // ...\n  },\n  request: {\n    // ...\n  },\n  logger: {\n    // ...\n  },\n};\n\nrunApp(appConfig);\n")),(0,a.kt)("h2",{id:"\u542f\u52a8\u9879\u914d\u7f6e"},"\u542f\u52a8\u9879\u914d\u7f6e"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"app")," \u8fd9\u4e00\u9879\u6240\u652f\u6301\u7684\u914d\u7f6e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { runApp } from 'ice';\n\nconst appConfig = {\n  app: {\n    // \u53ef\u9009\uff0c\u6839\u8282\u70b9 id\uff0c\u9ed8\u8ba4\u4e3a ice-container\n    rootId: 'ice-container',\n\n    // \u53ef\u9009\uff0c\u6839\u8282\u70b9 DOM \u5143\u7d20\uff0c\u66f4\u7075\u6d3b\u7684 rootId\n    mountNode: document.getElementById('ice-container'),\n\n    // \u53ef\u9009\uff0c\u662f\u5426\u89e3\u6790\u8def\u7531\u7ec4\u4ef6\u7684\u67e5\u8be2\u53c2\u6570\uff0c\u9ed8\u8ba4 true\n    parseSearchParams: true\n\n    // \u53ef\u9009\uff0c\u81ea\u5b9a\u4e49\u6dfb\u52a0 Provider\n    addProvider: ({ children }) => {\n      return <ConfigProvider>{children}</ConfigProvider>;\n    },\n\n    // \u53ef\u9009\uff0c\u5e38\u7528\u4e8e SSR \u573a\u666f\u6216\u8005\u5f02\u6b65\u83b7\u53d6\u6570\u636e\u8bf7\u6c42\u7684\u573a\u666f\n    // \u5982\u679c\u8fd4\u56de\u5b57\u6bb5\u4e2d\u5305\u542b initialStates \u5b57\u6bb5\u5c06\u4f1a\u4f5c\u4e3a\u72b6\u6001\u7ba1\u7406 store \u7684\u521d\u59cb\u503c\n    // \u5982\u679c\u8fd4\u56de\u5b57\u6bb5\u4e2d\u5305\u542b auth \u5b57\u6bb5\u5c06\u4f1a\u4f5c\u4e3a\u6743\u9650\u7ba1\u7406 auth \u7684\u521d\u59cb\u503c\n    getInitialData: async() => {\n      const result = await request();\n      return result;\n    },\n\n    // \u53ef\u9009\uff0c\u81ea\u5b9a\u4e49\u9519\u8bef\u8fb9\u754c\u7684 fallback UI\n    ErrorBoundaryFallback: <div>\u6e32\u67d3\u9519\u8bef</div>,\n\n    // \u53ef\u9009\uff0c\u81ea\u5b9a\u4e49\u9519\u8bef\u7684\u5904\u7406\u4e8b\u4ef6\n    onErrorBoundaryHander: (error, componentStack) {\n      // Do something with the error\n    },\n\n    // \u53ef\u9009\uff0c\u7528\u4e8e\u6e32\u67d3\u4e00\u4e2a\u7b80\u5355\u7ec4\u4ef6\uff0c\u4e0d\u518d\u9700\u8981\u8026\u5408 react-router \u7684\u8def\u7531\u7cfb\u7edf\n    // \u9700\u8981\u914d\u5408\u8bbe\u7f6e build.json \u7684 router \u9879\u4e3a false\n    renderComponent: SimpleComponent,\n  },\n};\n\nrunApp(appConfig);\n")),(0,a.kt)("h2",{id:"\u5176\u4ed6\u914d\u7f6e\u9879"},"\u5176\u4ed6\u914d\u7f6e\u9879"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/guide/basic/router#%E8%B7%AF%E7%94%B1%E9%85%8D%E7%BD%AE"},"\u8def\u7531\u914d\u7f6e")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/guide/basic/request#%E8%AF%B7%E6%B1%82%E9%85%8D%E7%BD%AE"},"\u8bf7\u6c42\u914d\u7f6e")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/guide/basic/store#%E9%85%8D%E7%BD%AE%E5%8F%82%E6%95%B0"},"\u72b6\u6001\u7ba1\u7406\u914d\u7f6e")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/guide/basic/logger#%E9%85%8D%E7%BD%AE"},"\u65e5\u5fd7\u914d\u7f6e"))))}s.isMDXComponent=!0}}]);