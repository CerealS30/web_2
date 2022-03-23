var U=Object.defineProperty,K=Object.defineProperties;var Y=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var j=(l,a,r)=>a in l?U(l,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):l[a]=r,w=(l,a)=>{for(var r in a||(a={}))z.call(a,r)&&j(l,r,a[r]);if(g)for(var r of g(a))q.call(a,r)&&j(l,r,a[r]);return l},M=(l,a)=>K(l,Y(a));var N=(l,a)=>{var r={};for(var n in l)z.call(l,n)&&a.indexOf(n)<0&&(r[n]=l[n]);if(l!=null&&g)for(var n of g(l))a.indexOf(n)<0&&q.call(l,n)&&(r[n]=l[n]);return r};import{j as y,r as d,L as m,R as C,a as J,u as Q,b as V,c as X,d as v,e as Z,B as _}from"./vendor.dfee8363.js";const ee=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const h of i.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&n(h)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}};ee();const e=y.exports.jsx,t=y.exports.jsxs,te=y.exports.Fragment;function b(){const[l,a]=d.exports.useState(!0);return d.exports.useEffect(()=>{const r=()=>{window.pageYOffset>10?a(!1):a(!0)};return window.addEventListener("scroll",r),()=>window.removeEventListener("scroll",r)},[l]),e("header",{className:`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!l&&"bg-white backdrop-blur-sm shadow-lg"}`,children:e("div",{className:"max-w-6xl mx-auto px-5 sm:px-6",children:t("div",{className:"flex items-center justify-between h-16 md:h-20",children:[e("div",{className:"flex-shrink-0 mr-4",children:e(m,{to:"/",className:"block","aria-label":"Cruip",children:t("svg",{className:"w-8 h-8",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:[e("defs",{children:t("radialGradient",{cx:"21.152%",cy:"86.063%",fx:"21.152%",fy:"86.063%",r:"79.941%",id:"header-logo",children:[e("stop",{stopColor:"#4FD1C5",offset:"0%"}),e("stop",{stopColor:"#81E6D9",offset:"25.871%"}),e("stop",{stopColor:"#338CF5",offset:"100%"})]})}),e("rect",{width:"32",height:"32",rx:"16",fill:"url(#header-logo)",fillRule:"nonzero"})]})})}),e("nav",{className:"flex flex-grow",children:t("ul",{className:"flex flex-grow justify-end flex-wrap items-center",children:[e("li",{children:e(m,{to:"/signin",className:"font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out",children:"Sign in"})}),e("li",{children:t(m,{to:"/signup",className:"btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3",children:[e("span",{children:"Sign up"}),e("svg",{className:"w-3 h-3 fill-current text-gray-400 flex-shrink-0 ml-2 -mr-1",viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z",fillRule:"nonzero"})})]})})]})})]})})})}function le(){return d.exports.useState(!1),t("section",{className:"relative",children:[e("div",{className:"absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none","aria-hidden":"true",children:t("svg",{width:"1360",height:"578",viewBox:"0 0 1360 578",xmlns:"http://www.w3.org/2000/svg",children:[e("defs",{children:t("linearGradient",{x1:"50%",y1:"0%",x2:"50%",y2:"100%",id:"illustration-01",children:[e("stop",{stopColor:"#FFF",offset:"0%"}),e("stop",{stopColor:"#EAEAEA",offset:"77.402%"}),e("stop",{stopColor:"#DFDFDF",offset:"100%"})]})}),t("g",{fill:"url(#illustration-01)",fillRule:"evenodd",children:[e("circle",{cx:"1232",cy:"128",r:"128"}),e("circle",{cx:"155",cy:"443",r:"64"})]})]})}),e("div",{className:"max-w-6xl mx-auto px-4 sm:px-6",children:e("div",{className:"pt-32 pb-12 md:pt-40 md:pb-20",children:t("div",{className:"text-center pb-12 md:pb-16",children:[t("h1",{className:"text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4","data-aos":"zoom-y-out",children:["\xBFNo tienes nada ",e("span",{className:"bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400",children:"que ver?"})]}),e("div",{className:"max-w-3xl mx-auto",children:e("p",{className:"text-xl text-gray-600 mb-8","data-aos":"zoom-y-out","data-aos-delay":"150",children:"Usa nuestra herramienta para obtener recomendaciones sobre como matar tu tiempo esta tarde"})}),e("li",{children:t(m,{to:"/signup",className:"btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3",children:[e("span",{children:"Recomiendame algo"}),e("svg",{className:"w-3 h-3 fill-current text-gray-400 flex-shrink-0 ml-2 -mr-1",viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z",fillRule:"nonzero"})})]})})]})})})]})}const D=C.createContext({parent:{}});function ae(){const l=d.exports.useRef(!0);return d.exports.useEffect(()=>{l.current=!1},[]),l.current}function O(de){var k=de,{show:l,enter:a="",enterStart:r="",enterEnd:n="",leave:s="",leaveStart:i="",leaveEnd:h="",appear:E,unmountOnExit:P,tag:T="div",children:W}=k,$=N(k,["show","enter","enterStart","enterEnd","leave","leaveStart","leaveEnd","appear","unmountOnExit","tag","children"]);const S=a.split(" ").filter(c=>c.length),F=r.split(" ").filter(c=>c.length),B=n.split(" ").filter(c=>c.length),R=s.split(" ").filter(c=>c.length),H=i.split(" ").filter(c=>c.length),L=h.split(" ").filter(c=>c.length),x=P;function p(c,u){u.length&&c.classList.add(...u)}function f(c,u){u.length&&c.classList.remove(...u)}const o=C.useRef(null);return e(J,{appear:E,nodeRef:o,unmountOnExit:x,in:l,addEndListener:c=>{o.current.addEventListener("transitionend",c,!1)},onEnter:()=>{x||(o.current.style.display=null),p(o.current,[...S,...F])},onEntering:()=>{f(o.current,F),p(o.current,B)},onEntered:()=>{f(o.current,[...B,...S])},onExit:()=>{p(o.current,[...R,...H])},onExiting:()=>{f(o.current,H),p(o.current,L)},onExited:()=>{f(o.current,[...L,...R]),x||(o.current.style.display="none")},children:e(T,M(w({ref:o},$),{style:{display:x?null:"none"},children:W}))})}function A(n){var s=n,{show:l,appear:a}=s,r=N(s,["show","appear"]);const{parent:i}=d.exports.useContext(D),h=ae();return l===void 0?e(O,w({appear:i.appear||!i.isInitialRender,show:i.show},r)):e(D.Provider,{value:{parent:{show:l,isInitialRender:h,appear:a}},children:e(O,w({appear:a,show:l},r))})}var G="/assets/features-bg.98e1ab2d.png",I="/assets/features-element.02cc9453.png";function re(){const[l,a]=d.exports.useState(1),r=d.exports.useRef(null),n=()=>{r.current.children[l]&&(r.current.style.height=r.current.children[l-1].offsetHeight+"px")};return d.exports.useEffect(()=>{n()},[l]),t("section",{className:"relative",children:[e("div",{className:"absolute inset-0 bg-gray-100 pointer-events-none mb-16","aria-hidden":"true"}),e("div",{className:"absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"}),e("div",{className:"relative max-w-6xl mx-auto px-4 sm:px-6",children:t("div",{className:"pt-12 md:pt-20",children:[t("div",{className:"max-w-3xl mx-auto text-center pb-12 md:pb-16",children:[e("h1",{className:"h2 mb-4",children:"Explora la soluci\xF3n"}),e("p",{className:"text-xl text-gray-600",children:"Con esta herramienta,tu podras seleccionar las peliculas que mas te gusten. Te ayudaremos a encontrar similares a ella."})]}),t("div",{className:"md:grid md:grid-cols-12 md:gap-6",children:[t("div",{className:"max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6","data-aos":"fade-right",children:[t("div",{className:"md:pr-4 lg:pr-12 xl:pr-16 mb-8",children:[e("h3",{className:"h3 mb-3",children:"Powerful suite of tools"}),e("p",{className:"text-xl text-gray-600",children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa."})]}),t("div",{className:"mb-8 md:mb-0",children:[t("a",{className:`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${l!==1?"bg-white shadow-md border-gray-200 hover:shadow-lg":"bg-gray-200 border-transparent"}`,href:"#0",onClick:s=>{s.preventDefault(),a(1)},children:[t("div",{children:[e("div",{className:"font-bold leading-snug tracking-tight mb-1",children:"Construyendo el sistema"}),e("div",{className:"text-gray-600",children:"Con nuestra tecnologia, veras nuevas recomendaciones siempre."})]}),e("div",{className:"flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3",children:e("svg",{className:"w-3 h-3 fill-current",viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z"})})})]}),t("a",{className:`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${l!==2?"bg-white shadow-md border-gray-200 hover:shadow-lg":"bg-gray-200 border-transparent"}`,href:"#0",onClick:s=>{s.preventDefault(),a(2)},children:[t("div",{children:[e("div",{className:"font-bold leading-snug tracking-tight mb-1",children:"Haciendo el filtro"}),e("div",{className:"text-gray-600",children:"Con toda seguridad, siempre tendras algo nuevo que ver"})]}),e("div",{className:"flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3",children:e("svg",{className:"w-3 h-3 fill-current",viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z",fillRule:"nonzero"})})})]})]})]}),t("div",{className:"max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1","data-aos":"zoom-y-out",ref:r,children:[e("div",{className:"relative flex flex-col text-center lg:text-right",children:e(A,{show:l===1,appear:!0,className:"w-full",enter:"transition ease-in-out duration-700 transform order-first",enterStart:"opacity-0 translate-y-16",enterEnd:"opacity-100 translate-y-0",leave:"transition ease-in-out duration-300 transform absolute",leaveStart:"opacity-100 translate-y-0",leaveEnd:"opacity-0 -translate-y-16",children:t("div",{className:"relative inline-flex flex-col",children:[e("img",{className:"md:max-w-none mx-auto rounded",src:G,width:"500",height:"462",alt:"Features bg"}),e("img",{className:"md:max-w-none absolute w-full left-0 transform animate-float",src:I,width:"500",height:"44",alt:"Element",style:{top:"30%"}})]})})}),e("div",{className:"relative flex flex-col text-center lg:text-right",children:e(A,{show:l===2,appear:!0,className:"w-full",enter:"transition ease-in-out duration-700 transform order-first",enterStart:"opacity-0 translate-y-16",enterEnd:"opacity-100 translate-y-0",leave:"transition ease-in-out duration-300 transform absolute",leaveStart:"opacity-100 translate-y-0",leaveEnd:"opacity-0 -translate-y-16",children:t("div",{className:"relative inline-flex flex-col",children:[e("img",{className:"md:max-w-none mx-auto rounded",src:G,width:"500",height:"462",alt:"Features bg"}),e("img",{className:"md:max-w-none absolute w-full left-0 transform animate-float",src:I,width:"500",height:"44",alt:"Element",style:{top:"30%"}})]})})})]})]})]})})]})}function se(){return t("div",{className:"flex flex-col min-h-screen overflow-hidden",children:[e(b,{}),t("main",{className:"flex-grow",children:[e(le,{}),e(re,{})]})]})}function ne(){return t("div",{className:"flex flex-col min-h-screen overflow-hidden",children:[e(b,{}),e("main",{className:"flex-grow",children:e("section",{className:"bg-gradient-to-b from-gray-100 to-white",children:e("div",{className:"max-w-6xl mx-auto px-4 sm:px-6",children:t("div",{className:"pt-32 pb-12 md:pt-40 md:pb-20",children:[e("div",{className:"max-w-3xl mx-auto text-center pb-12 md:pb-20",children:e("h1",{className:"h1",children:"Welcome back. We exist to make entrepreneurism easier."})}),t("div",{className:"max-w-sm mx-auto",children:[t("form",{children:[e("div",{className:"flex flex-wrap -mx-3 mb-4",children:t("div",{className:"w-full px-3",children:[e("label",{className:"block text-gray-800 text-sm font-medium mb-1",htmlFor:"email",children:"Email"}),e("input",{id:"email",type:"email",className:"form-input w-full text-gray-800",placeholder:"Enter your email address",required:!0})]})}),e("div",{className:"flex flex-wrap -mx-3 mb-4",children:t("div",{className:"w-full px-3",children:[t("div",{className:"flex justify-between",children:[e("label",{className:"block text-gray-800 text-sm font-medium mb-1",htmlFor:"password",children:"Password"}),e(m,{to:"reset-password",className:"text-sm font-medium text-blue-600 hover:underline",children:"Having trouble signing in?"})]}),e("input",{id:"password",type:"password",className:"form-input w-full text-gray-800",placeholder:"Enter your password",required:!0})]})}),e("div",{className:"flex flex-wrap -mx-3 mb-4",children:e("div",{className:"w-full px-3",children:e("div",{className:"flex justify-between",children:t("label",{className:"flex items-center",children:[e("input",{type:"checkbox",className:"form-checkbox"}),e("span",{className:"text-gray-600 ml-2",children:"Keep me signed in"})]})})})}),e("div",{className:"flex flex-wrap -mx-3 mt-6",children:e("div",{className:"w-full px-3",children:e("button",{className:"btn text-white bg-blue-600 hover:bg-blue-700 w-full",children:"Sign in"})})})]}),t("div",{className:"flex items-center my-6",children:[e("div",{className:"border-t border-gray-300 flex-grow mr-3","aria-hidden":"true"}),e("div",{className:"text-gray-600 italic",children:"Or"}),e("div",{className:"border-t border-gray-300 flex-grow ml-3","aria-hidden":"true"})]}),t("form",{children:[e("div",{className:"flex flex-wrap -mx-3 mb-3",children:e("div",{className:"w-full px-3",children:t("button",{className:"btn px-0 text-white bg-gray-900 hover:bg-gray-800 w-full relative flex items-center",children:[e("svg",{className:"w-4 h-4 fill-current text-white opacity-75 flex-shrink-0 mx-4",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M7.95 0C3.578 0 0 3.578 0 7.95c0 3.479 2.286 6.46 5.466 7.553.397.1.497-.199.497-.397v-1.392c-2.187.497-2.683-.993-2.683-.993-.398-.895-.895-1.193-.895-1.193-.696-.497.1-.497.1-.497.795.1 1.192.795 1.192.795.696 1.292 1.888.895 2.286.696.1-.497.298-.895.497-1.093-1.79-.2-3.578-.895-3.578-3.975 0-.895.298-1.59.795-2.087-.1-.2-.397-.994.1-2.087 0 0 .695-.2 2.186.795a6.408 6.408 0 011.987-.299c.696 0 1.392.1 1.988.299 1.49-.994 2.186-.795 2.186-.795.398 1.093.199 1.888.1 2.087.496.596.795 1.291.795 2.087 0 3.08-1.889 3.677-3.677 3.875.298.398.596.895.596 1.59v2.187c0 .198.1.497.596.397C13.714 14.41 16 11.43 16 7.95 15.9 3.578 12.323 0 7.95 0z"})}),e("span",{className:"flex-auto pl-16 pr-8 -ml-16",children:"Continue with GitHub"})]})})}),e("div",{className:"flex flex-wrap -mx-3",children:e("div",{className:"w-full px-3",children:t("button",{className:"btn px-0 text-white bg-red-600 hover:bg-red-700 w-full relative flex items-center",children:[e("svg",{className:"w-4 h-4 fill-current text-white opacity-75 flex-shrink-0 mx-4",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z"})}),e("span",{className:"flex-auto pl-16 pr-8 -ml-16",children:"Continue with Google"})]})})})]}),t("div",{className:"text-gray-600 text-center mt-6",children:["Don\u2019t you have an account? ",e(m,{to:"/signup",className:"text-blue-600 hover:underline transition duration-150 ease-in-out",children:"Sign up"})]})]})]})})})})]})}function ie(){return t("div",{className:"flex flex-col min-h-screen overflow-hidden",children:[e(b,{}),e("main",{className:"flex-grow",children:e("section",{className:"bg-gradient-to-b from-gray-100 to-white",children:e("div",{className:"max-w-6xl mx-auto px-4 sm:px-6",children:t("div",{className:"pt-32 pb-12 md:pt-40 md:pb-20",children:[e("div",{className:"max-w-3xl mx-auto text-center pb-12 md:pb-20",children:e("h1",{className:"h1",children:"Welcome. We exist to make entrepreneurism easier."})}),t("div",{className:"max-w-sm mx-auto",children:[t("form",{children:[e("div",{className:"flex flex-wrap -mx-3 mb-4",children:t("div",{className:"w-full px-3",children:[t("label",{className:"block text-gray-800 text-sm font-medium mb-1",htmlFor:"name",children:["Name ",e("span",{className:"text-red-600",children:"*"})]}),e("input",{id:"name",type:"text",className:"form-input w-full text-gray-800",placeholder:"Enter your name",required:!0})]})}),e("div",{className:"flex flex-wrap -mx-3 mb-4",children:t("div",{className:"w-full px-3",children:[t("label",{className:"block text-gray-800 text-sm font-medium mb-1",htmlFor:"email",children:["Email ",e("span",{className:"text-red-600",children:"*"})]}),e("input",{id:"email",type:"email",className:"form-input w-full text-gray-800",placeholder:"Enter your email address",required:!0})]})}),e("div",{className:"flex flex-wrap -mx-3 mb-4",children:t("div",{className:"w-full px-3",children:[t("label",{className:"block text-gray-800 text-sm font-medium mb-1",htmlFor:"password",children:["Password ",e("span",{className:"text-red-600",children:"*"})]}),e("input",{id:"password",type:"password",className:"form-input w-full text-gray-800",placeholder:"Enter your password",required:!0})]})}),e("div",{className:"flex flex-wrap -mx-3 mt-6",children:e("div",{className:"w-full px-3",children:e("button",{className:"btn text-white bg-blue-600 hover:bg-blue-700 w-full",children:"Sign up"})})}),t("div",{className:"text-sm text-gray-500 text-center mt-3",children:["By creating an account, you agree to the ",e("a",{className:"underline",href:"#0",children:"terms & conditions"}),", and our ",e("a",{className:"underline",href:"#0",children:"privacy policy"}),"."]})]}),t("div",{className:"flex items-center my-6",children:[e("div",{className:"border-t border-gray-300 flex-grow mr-3","aria-hidden":"true"}),e("div",{className:"text-gray-600 italic",children:"Or"}),e("div",{className:"border-t border-gray-300 flex-grow ml-3","aria-hidden":"true"})]}),t("form",{children:[e("div",{className:"flex flex-wrap -mx-3 mb-3",children:e("div",{className:"w-full px-3",children:t("button",{className:"btn px-0 text-white bg-gray-900 hover:bg-gray-800 w-full relative flex items-center",children:[e("svg",{className:"w-4 h-4 fill-current text-white opacity-75 flex-shrink-0 mx-4",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M7.95 0C3.578 0 0 3.578 0 7.95c0 3.479 2.286 6.46 5.466 7.553.397.1.497-.199.497-.397v-1.392c-2.187.497-2.683-.993-2.683-.993-.398-.895-.895-1.193-.895-1.193-.696-.497.1-.497.1-.497.795.1 1.192.795 1.192.795.696 1.292 1.888.895 2.286.696.1-.497.298-.895.497-1.093-1.79-.2-3.578-.895-3.578-3.975 0-.895.298-1.59.795-2.087-.1-.2-.397-.994.1-2.087 0 0 .695-.2 2.186.795a6.408 6.408 0 011.987-.299c.696 0 1.392.1 1.988.299 1.49-.994 2.186-.795 2.186-.795.398 1.093.199 1.888.1 2.087.496.596.795 1.291.795 2.087 0 3.08-1.889 3.677-3.677 3.875.298.398.596.895.596 1.59v2.187c0 .198.1.497.596.397C13.714 14.41 16 11.43 16 7.95 15.9 3.578 12.323 0 7.95 0z"})}),e("span",{className:"flex-auto pl-16 pr-8 -ml-16",children:"Continue with GitHub"})]})})}),e("div",{className:"flex flex-wrap -mx-3",children:e("div",{className:"w-full px-3",children:t("button",{className:"btn px-0 text-white bg-red-600 hover:bg-red-700 w-full relative flex items-center",children:[e("svg",{className:"w-4 h-4 fill-current text-white opacity-75 flex-shrink-0 mx-4",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z"})}),e("span",{className:"flex-auto pl-16 pr-8 -ml-16",children:"Continue with Google"})]})})})]}),t("div",{className:"text-gray-600 text-center mt-6",children:["Already using Simple? ",e(m,{to:"/signin",className:"text-blue-600 hover:underline transition duration-150 ease-in-out",children:"Sign in"})]})]})]})})})})]})}function ce(){return t("div",{className:"flex flex-col min-h-screen overflow-hidden",children:[e(b,{}),e("main",{className:"flex-grow",children:e("section",{className:"bg-gradient-to-b from-gray-100 to-white",children:e("div",{className:"max-w-6xl mx-auto px-4 sm:px-6",children:t("div",{className:"pt-32 pb-12 md:pt-40 md:pb-20",children:[e("div",{className:"max-w-3xl mx-auto text-center pb-12 md:pb-20",children:e("h1",{className:"h1",children:"Bienvenido a las recomendaciones."})}),t("div",{className:"max-w-sm mx-auto",children:[t("form",{children:[e("div",{className:"flex flex-wrap -mx-3 mb-4",children:t("div",{className:"w-full px-3",children:[t("label",{className:"block text-gray-800 text-sm font-medium mb-1",htmlFor:"name",children:["Name ",e("span",{className:"text-red-600",children:"*"})]}),e("input",{id:"name",type:"text",className:"form-input w-full text-gray-800",placeholder:"Enter your name",required:!0})]})}),e("div",{className:"flex flex-wrap -mx-3 mb-4",children:t("div",{className:"w-full px-3",children:[t("label",{className:"block text-gray-800 text-sm font-medium mb-1",htmlFor:"email",children:["Email ",e("span",{className:"text-red-600",children:"*"})]}),e("input",{id:"email",type:"email",className:"form-input w-full text-gray-800",placeholder:"Enter your email address",required:!0})]})}),e("div",{className:"flex flex-wrap -mx-3 mb-4",children:t("div",{className:"w-full px-3",children:[t("label",{className:"block text-gray-800 text-sm font-medium mb-1",htmlFor:"password",children:["Password ",e("span",{className:"text-red-600",children:"*"})]}),e("input",{id:"password",type:"password",className:"form-input w-full text-gray-800",placeholder:"Enter your password",required:!0})]})}),e("div",{className:"flex flex-wrap -mx-3 mt-6",children:e("div",{className:"w-full px-3",children:e("button",{className:"btn text-white bg-blue-600 hover:bg-blue-700 w-full",children:"Sign up"})})}),t("div",{className:"text-sm text-gray-500 text-center mt-3",children:["By creating an account, you agree to the ",e("a",{className:"underline",href:"#0",children:"terms & conditions"}),", and our ",e("a",{className:"underline",href:"#0",children:"privacy policy"}),"."]})]}),t("div",{className:"flex items-center my-6",children:[e("div",{className:"border-t border-gray-300 flex-grow mr-3","aria-hidden":"true"}),e("div",{className:"text-gray-600 italic",children:"Or"}),e("div",{className:"border-t border-gray-300 flex-grow ml-3","aria-hidden":"true"})]}),t("form",{children:[e("div",{className:"flex flex-wrap -mx-3 mb-3",children:e("div",{className:"w-full px-3",children:t("button",{className:"btn px-0 text-white bg-gray-900 hover:bg-gray-800 w-full relative flex items-center",children:[e("svg",{className:"w-4 h-4 fill-current text-white opacity-75 flex-shrink-0 mx-4",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M7.95 0C3.578 0 0 3.578 0 7.95c0 3.479 2.286 6.46 5.466 7.553.397.1.497-.199.497-.397v-1.392c-2.187.497-2.683-.993-2.683-.993-.398-.895-.895-1.193-.895-1.193-.696-.497.1-.497.1-.497.795.1 1.192.795 1.192.795.696 1.292 1.888.895 2.286.696.1-.497.298-.895.497-1.093-1.79-.2-3.578-.895-3.578-3.975 0-.895.298-1.59.795-2.087-.1-.2-.397-.994.1-2.087 0 0 .695-.2 2.186.795a6.408 6.408 0 011.987-.299c.696 0 1.392.1 1.988.299 1.49-.994 2.186-.795 2.186-.795.398 1.093.199 1.888.1 2.087.496.596.795 1.291.795 2.087 0 3.08-1.889 3.677-3.677 3.875.298.398.596.895.596 1.59v2.187c0 .198.1.497.596.397C13.714 14.41 16 11.43 16 7.95 15.9 3.578 12.323 0 7.95 0z"})}),e("span",{className:"flex-auto pl-16 pr-8 -ml-16",children:"Continue with GitHub"})]})})}),e("div",{className:"flex flex-wrap -mx-3",children:e("div",{className:"w-full px-3",children:t("button",{className:"btn px-0 text-white bg-red-600 hover:bg-red-700 w-full relative flex items-center",children:[e("svg",{className:"w-4 h-4 fill-current text-white opacity-75 flex-shrink-0 mx-4",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z"})}),e("span",{className:"flex-auto pl-16 pr-8 -ml-16",children:"Continue with Google"})]})})})]}),t("div",{className:"text-gray-600 text-center mt-6",children:["Already using Simple? ",e(m,{to:"/signin",className:"text-blue-600 hover:underline transition duration-150 ease-in-out",children:"Sign in"})]})]})]})})})})]})}function oe(){const l=Q();return d.exports.useEffect(()=>{V.init({once:!0,disable:"phone",duration:700,easing:"ease-out-cubic"})}),d.exports.useEffect(()=>{document.querySelector("html").style.scrollBehavior="auto",window.scroll({top:0}),document.querySelector("html").style.scrollBehavior=""},[l.pathname]),e(te,{children:t(X,{children:[e(v,{exact:!0,path:"/",element:e(se,{})}),e(v,{path:"/signin",element:e(ne,{})}),e(v,{path:"/signup",element:e(ie,{})}),e(v,{path:"/recomendation",element:e(ce,{})})]})})}Z.render(e(C.StrictMode,{children:e(_,{children:e(oe,{})})}),document.getElementById("root"));
