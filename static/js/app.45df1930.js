(function(e){function t(t){for(var a,c,u=t[0],o=t[1],d=t[2],l=0,h=[];l<u.length;l++)c=u[l],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&h.push(r[c][0]),r[c]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);s&&s(t);while(h.length)h.shift()();return i.push.apply(i,d||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,c=1;c<n.length;c++){var u=n[c];0!==r[u]&&(a=!1)}a&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},c={app:0},r={app:0},i=[];function u(e){return o.p+"static/js/"+({}[e]||e)+"."+{"chunk-078450bf":"4aa8d3bf","chunk-16005b54":"eaac7c9d","chunk-2d0cc81a":"5098dc20","chunk-2d0dd4c6":"8f4cd75c","chunk-2d0dea97":"32a1df45","chunk-2d0e13a6":"18bbbf19","chunk-2d0e1bc0":"d145c08c","chunk-2d2080c8":"a07b6f12","chunk-2d212f56":"dcb7aeb3","chunk-2d2248d1":"4c78a3e2","chunk-2d228ea1":"c7bf63f8","chunk-2d22c48a":"0425c392","chunk-2d22d76d":"f3ec96ac","chunk-3bb69a5d":"def55a93","chunk-49a0aacc":"197c7829","chunk-49c004de":"a64ca383","chunk-4ad3470a":"3d6158df","chunk-746dfdf0":"27f8b1ea","chunk-e469cb40":"aadaa090","chunk-f911499e":"b15b420a","chunk-fec11e46":"ba52dc15"}[e]+".js"}function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],n={"chunk-078450bf":1,"chunk-16005b54":1,"chunk-3bb69a5d":1,"chunk-49a0aacc":1,"chunk-49c004de":1,"chunk-4ad3470a":1,"chunk-e469cb40":1,"chunk-f911499e":1,"chunk-fec11e46":1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var a="static/css/"+({}[e]||e)+"."+{"chunk-078450bf":"4b7f85c7","chunk-16005b54":"7aa33c32","chunk-2d0cc81a":"31d6cfe0","chunk-2d0dd4c6":"31d6cfe0","chunk-2d0dea97":"31d6cfe0","chunk-2d0e13a6":"31d6cfe0","chunk-2d0e1bc0":"31d6cfe0","chunk-2d2080c8":"31d6cfe0","chunk-2d212f56":"31d6cfe0","chunk-2d2248d1":"31d6cfe0","chunk-2d228ea1":"31d6cfe0","chunk-2d22c48a":"31d6cfe0","chunk-2d22d76d":"31d6cfe0","chunk-3bb69a5d":"c7ba7477","chunk-49a0aacc":"8b9b0814","chunk-49c004de":"25273cf6","chunk-4ad3470a":"5b880e03","chunk-746dfdf0":"31d6cfe0","chunk-e469cb40":"c298300b","chunk-f911499e":"c3dc38ae","chunk-fec11e46":"950ed894"}[e]+".css",r=o.p+a,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var d=i[u],l=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(l===a||l===r))return t()}var h=document.getElementsByTagName("style");for(u=0;u<h.length;u++){d=h[u],l=d.getAttribute("data-href");if(l===a||l===r)return t()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=t,s.onerror=function(t){var a=t&&t.target&&t.target.src||r,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete c[e],s.parentNode.removeChild(s),n(i)},s.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(s)})).then((function(){c[e]=0})));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=i);var d,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=u(e);var h=new Error;d=function(t){l.onerror=l.onload=null,clearTimeout(s);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;h.message="Loading chunk "+e+" failed.\n("+a+": "+c+")",h.name="ChunkLoadError",h.type=a,h.request=c,n[1](h)}r[e]=void 0}};var s=setTimeout((function(){d({type:"timeout",target:l})}),12e4);l.onerror=l.onload=d,document.head.appendChild(l)}return Promise.all(t)},o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/web-marriage/",o.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=t,d=d.slice();for(var h=0;h<d.length;h++)t(d[h]);var s=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"092f":function(e,t,n){},"0b0b":function(e,t,n){"use strict";n("092f")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("159b"),n("b64b"),n("4de4"),n("b20f");var a=n("2b0e"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],i=n("2877"),u={},o=Object(i["a"])(u,c,r,!1,null,null,null),d=o.exports,l=n("2f62");a["default"].use(l["a"]);var h=new l["a"].Store({state:{},mutations:{},actions:{},modules:{}}),s=(n("d3b7"),n("3ca3"),n("ddb0"),n("99af"),n("8c4f")),f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-container",{attrs:{id:"layout"}},[a("el-header",{staticClass:"header",attrs:{height:"auto"}},[a("div",{staticClass:"header-wrap",staticStyle:{height:"100px"}},[a("img",{staticClass:"header-logo",attrs:{src:n("9d64"),alt:"#"}}),a("div",{staticClass:"header-title"},[a("div",{staticClass:"cn"},[e._v("南京市婚姻公共服务平台")]),a("div",{staticClass:"en"},[e._v("Nanjing Public Service Platform")])])]),a("el-menu",{staticClass:"header-menu",attrs:{mode:"horizontal","text-color":"#fff","background-color":"#d0524b","active-text-color":"#d0524b","default-active":e.activeMenu,"unique-opened":"",router:""}},[e._l(e.navMenu,(function(t){return[t.meta.submenu?a("el-submenu",{key:t.name,attrs:{index:t.path,"popper-class":"nj-popper","popper-append-to-body":""}},[a("template",{slot:"title"},[e._v(e._s(t.meta.title))]),e._l(t.children,(function(n){return a("el-menu-item",{key:n.name,attrs:{index:t.path+"/"+n.path}},[e._v(e._s(n.meta.title)+" ")])}))],2):a("el-menu-item",{key:t.name,attrs:{index:t.path}},[e._v(e._s(t.meta.title))])]}))],2)],1),a("el-main",{staticClass:"main"},[a("div",{directives:[{name:"show",rawName:"v-show",value:"/home"!==e.$route.path,expression:"$route.path !== '/home'"}],staticClass:"main-breadcrumb"},[a("i",{staticClass:"el-icon-s-home"}),a("el-breadcrumb",{attrs:{separator:">"}},[a("el-breadcrumb-item",{attrs:{to:"/home",replace:""}},[e._v("首页")]),e._l(e.breadcrumbs,(function(t){return a("el-breadcrumb-item",{key:t.name,attrs:{to:t.path}},[e._v(" "+e._s(t.meta.title)+" ")])}))],2)],1),a("router-view")],1),a("el-footer",{staticClass:"footer",staticStyle:{height:"100px"}},[a("div",{staticClass:"footer-wrap"},[a("span",[e._v("主办单位：南京市民政局")]),a("span",[e._v("承办单位：南京市信息服务中心")])]),a("div",{staticClass:"footer-wrap"},[a("a",{attrs:{href:"https://beian.miit.gov.cn/",target:"_blank"}},[e._v("苏ICP备05004952号-7")]),a("a",{attrs:{href:"http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32010502010232",target:"_blank"}},[a("img",{staticStyle:{float:"left","margin-right":"5px"},attrs:{src:"http://mzj.nanjing.gov.cn/images/mzj_gabah_bn.png"}}),e._v("苏公网安备 32010502010232号 ")])])])],1)},m=[],p={name:"Layout",computed:{navMenu:function(){return g},activeMenu:function(){return console.log(this.$route),this.$route.matched?this.$route.matched[1].path:this.$route.path},breadcrumbs:function(){return this.$route.matched.filter((function(e){return e.meta&&e.meta.title}))}},data:function(){return{}}},b=p,k=(n("0b0b"),Object(i["a"])(b,f,m,!1,null,"53557e6b",null)),v=k.exports;a["default"].use(s["a"]);var g=[{path:"/home",name:"Home",component:function(){return n.e("chunk-49c004de").then(n.bind(null,"7abe"))},meta:{title:"首页"}},{path:"/news",name:"News",redirect:"/news/list",component:function(){return n.e("chunk-2d0e1bc0").then(n.bind(null,"7c64"))},meta:{title:"婚姻要闻"},children:[{path:"list",name:"NewsList",component:function(){return n.e("chunk-746dfdf0").then(n.bind(null,"2a621"))}},{path:":id",name:"NewsArticle",component:function(){return n.e("chunk-2d22c48a").then(n.bind(null,"f329"))},meta:{title:"婚姻要闻内容"}}]},{path:"/policy",name:"Policy",redirect:"/policy/list",component:function(){return n.e("chunk-2d0dd4c6").then(n.bind(null,"8190"))},meta:{title:"政策法规"},children:[{path:"list",name:"PolicyList",component:function(){return n.e("chunk-2d228ea1").then(n.bind(null,"dae3"))}},{path:":id",name:"PolicyArticle",component:function(){return n.e("chunk-2d2080c8").then(n.bind(null,"a2ab"))},meta:{title:"政策法规内容"}}]},{path:"/notice",name:"Notice",redirect:"/notice/list",component:function(){return n.e("chunk-2d212f56").then(n.bind(null,"ab43"))},meta:{title:"通知公告"},children:[{path:"list",name:"NoticeList",component:function(){return n.e("chunk-2d2248d1").then(n.bind(null,"e12a"))}},{path:":id",name:"NoticeArticle",component:function(){return n.e("chunk-2d0dea97").then(n.bind(null,"8735"))},meta:{title:"通知公告内容"}}]},{path:"/activity",name:"Activity",redirect:"/activity/list",component:function(){return n.e("chunk-2d0e13a6").then(n.bind(null,"7a17"))},meta:{title:"活动沙龙"},children:[{path:"list",name:"ActivityList",component:function(){return n.e("chunk-3bb69a5d").then(n.bind(null,"14ec"))}},{path:":id",name:"ActivityDetail",component:function(){return n.e("chunk-f911499e").then(n.bind(null,"c2c2"))},meta:{title:"活动沙龙详情"}}]},{path:"/booking",name:"Booking",component:function(){return n.e("chunk-2d22d76d").then(n.bind(null,"f838"))},meta:{title:"预约登记",submenu:!0},children:[{path:"register",name:"MarriageRegister",component:function(){return n.e("chunk-2d0cc81a").then(n.bind(null,"4de9"))},meta:{title:"婚姻登记预约"}},{path:"certificate",name:"MarriageCertificate",component:function(){return n.e("chunk-4ad3470a").then(n.bind(null,"1d62"))},meta:{title:"颁证仪式预约"}},{path:"family",name:"MarriageFamily",component:function(){return n.e("chunk-078450bf").then(n.bind(null,"b494"))},meta:{title:"家庭辅导预约"}}]}],y=[{path:"/registrar/:id",name:"Registrar",component:function(){return n.e("chunk-e469cb40").then(n.bind(null,"07d2"))},meta:{title:"登记员风采"}},{path:"/classroom/:id",name:"Classroom",component:function(){return n.e("chunk-fec11e46").then(n.bind(null,"e54d"))},meta:{title:"在线课堂"}},{path:"/message",name:"Message",component:function(){return n.e("chunk-49a0aacc").then(n.bind(null,"1d11"))},meta:{title:"留言回复"}},{path:"/question",name:"Question",component:function(){return n.e("chunk-16005b54").then(n.bind(null,"070e"))},meta:{title:"常见问题"}}],w=new s["a"]({mode:"hash",base:"/web-marriage/",routes:[{path:"/",redirect:"/home",component:v,children:[].concat(g,y)}]}),_=w,C=n("5c96"),j=n.n(C),x=n("8975");a["default"].use(j.a),a["default"].config.productionTip=!1,Object.keys(x).forEach((function(e){return a["default"].filter(e,x[e])})),new a["default"]({router:_,store:h,render:function(e){return e(d)}}).$mount("#app")},8975:function(e,t){},"9d64":function(e,t,n){e.exports=n.p+"static/img/logo.d140ce55.png"},b20f:function(e,t,n){}});