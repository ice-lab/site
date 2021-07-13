(self.webpackChunksite=self.webpackChunksite||[]).push([[8239],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),u=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),s=u(n),m=o,f=s["".concat(d,".").concat(m)]||s[m]||c[m]||a;return n?r.createElement(f,p(p({ref:t},l),{},{components:n})):r.createElement(f,p({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,p=new Array(a);p[0]=s;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var u=2;u<a;u++)p[u]=n[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},871:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return d},toc:function(){return u},default:function(){return c}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),p=["components"],i={title:"\u901a\u8fc7\u63d2\u4ef6\u5b9a\u5236\u8fd0\u884c\u65f6\u80fd\u529b",order:3},d={unversionedId:"plugin/develop/runtime",id:"plugin/develop/runtime",isDocsHomePage:!1,title:"\u901a\u8fc7\u63d2\u4ef6\u5b9a\u5236\u8fd0\u884c\u65f6\u80fd\u529b",description:"\u63d2\u4ef6\u8fd0\u884c\u65f6\u80fd\u529b\u901a\u8fc7 src/runtime.ts \u5b9a\u4e49\uff0c\u7ed3\u6784\u5982\u4e0b",source:"@site/docs/plugin/develop/runtime.md",sourceDirName:"plugin/develop",slug:"/plugin/develop/runtime",permalink:"/docs/plugin/develop/runtime",editUrl:"https://github.com/ice-lab/site/edit/master/website/docs/plugin/develop/runtime.md",version:"current",frontMatter:{title:"\u901a\u8fc7\u63d2\u4ef6\u5b9a\u5236\u8fd0\u884c\u65f6\u80fd\u529b",order:3},sidebar:"plugin",previous:{title:"\u901a\u8fc7\u63d2\u4ef6\u5b9a\u5236\u5de5\u7a0b\u80fd\u529b",permalink:"/docs/plugin/develop/build"}},u=[{value:"API",id:"api",children:[{value:"appConfig",id:"appconfig",children:[]},{value:"context",id:"context",children:[]},{value:"setRenderRouter",id:"setrenderrouter",children:[]},{value:"addProvider",id:"addprovider",children:[]},{value:"addDOMRender",id:"adddomrender",children:[]},{value:"wrapperRouteComponent",id:"wrapperroutecomponent",children:[]},{value:"modifyRoutes",id:"modifyroutes",children:[]}]}],l={toc:u};function c(e){var t=e.components,n=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u63d2\u4ef6\u8fd0\u884c\u65f6\u80fd\u529b\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"src/runtime.ts")," \u5b9a\u4e49\uff0c\u7ed3\u6784\u5982\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"export default ({ appConfig, addDOMRender, setRenderRouter, modifyRoutes, ...rest }) => {\n  const { loglevel } = appConfig;\n};\n")),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("h3",{id:"appconfig"},"appConfig"),(0,a.kt)("p",null,"\u5bf9\u5e94 ",(0,a.kt)("inlineCode",{parentName:"p"},"src/app.ts")," \u7528\u6237\u81ea\u5b9a\u4e49\u7684 appConfig\u3002\u8be6\u7ec6\u5b57\u6bb5\u89c1 ",(0,a.kt)("a",{parentName:"p",href:"/docs/guide/basic/app"},"\u5e94\u7528\u5165\u53e3"),"\u3002"),(0,a.kt)("h3",{id:"context"},"context"),(0,a.kt)("p",null,"\u5e94\u7528\u8fd0\u884c\u4e0a\u4e0b\u6587\u3002\u5305\u542b",(0,a.kt)("inlineCode",{parentName:"p"},"initialData")," \u548c",(0,a.kt)("inlineCode",{parentName:"p"},"pageInitialProps"),"\uff0c\u5206\u522b\u5bf9\u5e94",(0,a.kt)("a",{parentName:"p",href:"/docs/guide/advanced/ssr#%E5%BA%94%E7%94%A8%E7%BA%A7%E6%95%B0%E6%8D%AE"},"\u5e94\u7528\u7ea7\u6570\u636e"),"\u548c",(0,a.kt)("a",{parentName:"p",href:"/docs/guide/advanced/ssr#%E9%A1%B5%E9%9D%A2%E7%BA%A7%E6%95%B0%E6%8D%AE"},"\u9875\u9762\u7ea7\u6570\u636e")," \u3002"),(0,a.kt)("h3",{id:"setrenderrouter"},"setRenderRouter"),(0,a.kt)("p",null,"\u8bbe\u7f6e renderRouter\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"export default ({ setRenderRouter }) => {\n  // renderRouter \u5165\u53c2\u4e3a\u8def\u7531\u6570\u7ec4\n  const renderRouter = (routes) => () => {\n    return <div>route</div>;\n  };\n  setRenderRouter(renderRouter);\n};\n")),(0,a.kt)("h3",{id:"addprovider"},"addProvider"),(0,a.kt)("p",null,"\u4e3a\u5e94\u7528\u5305\u88f9 Provider\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export default ({ addProvider }) => {\n  const StoreProvider = ({ children }) => {\n    return <Provider store={store}>{children}</Provider>;\n  };\n  addProvider(StoreProvider);\n};\n")),(0,a.kt)("h3",{id:"adddomrender"},"addDOMRender"),(0,a.kt)("p",null,"\u81ea\u5b9a\u4e49\u6e32\u67d3\u3002\u9ed8\u8ba4\u4f7f\u7528",(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/react-dom.html"},"react-dom"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import ReactDOM from 'react-dom';\n\nexport default ({ addDOMRender }) => {\n  // App: React \u7ec4\u4ef6\n  // appMountNode: App \u6302\u8f7d\u70b9\n  const DOMRender = ({ App, appMountNode }) => {\n    ReactDOM.render(<App />, appMountNode);\n  };\n  addDOMRender(DOMRender);\n};\n")),(0,a.kt)("h3",{id:"wrapperroutecomponent"},"wrapperRouteComponent"),(0,a.kt)("p",null,"\u4e3a\u6240\u6709\u9875\u9762\u7ea7\u7ec4\u4ef6\u505a\u4e00\u5c42\u5305\u88f9\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// \u9ed8\u8ba4\u80fd\u529b\uff1a\u5728\u9875\u9762\u7ec4\u4ef6\u4e0a\u6302\u8f7d pageConfig.title \u7684\u5c5e\u6027\uff0c\u5373\u53ef\u81ea\u52a8\u8bbe\u7f6e\u9875\u9762 title\nimport { useEffect } from 'react';\n\nexport default ({ wrapperRouteComponent }) => {\n  wrapperRouteComponent((PageComponent) => {\n    const { title } = PageComponent.pageConfig || {};\n\n    if (!title) {\n      return PageComponent;\n    }\n    const TitleWrapperedComponent = () => {\n      useEffect(() => {\n        document.title = title;\n      }, []);\n\n      return <PageComponent />;\n    };\n    return TitleWrapperedComponent;\n  });\n};\n")),(0,a.kt)("h3",{id:"modifyroutes"},"modifyRoutes"),(0,a.kt)("p",null,"\u52a8\u6001\u4fee\u6539\u8def\u7531\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"function modify(routes) {\n  return routes;\n}\n\nexport default ({ modifyRoutes }) => {\n  modifyRoutes((routes) => {\n    const modifiedRoutes = modify(routes); // \u4fee\u6539\u8def\u7531\n    return modifiedRoutes;\n  });\n};\n")))}c.isMDXComponent=!0}}]);