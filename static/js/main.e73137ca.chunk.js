(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{57:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n(0),c=n.n(o),i=n(6),a=n.n(i),s=n(5),l=function(e){var t=e.robot,n=t.id,o=t.name,c=t.email;return Object(r.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(r.jsx)("img",{src:"https://robohash.org/".concat(n,"?size=200x200"),width:"200",height:"200",alt:"robots"}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:o}),Object(r.jsx)("p",{children:c})]})]})},d=Object(s.b)((function(e){return{searchField:e.search.searchField,robots:e.robot.robots}}))((function(e){var t=e.searchField,n=e.robots.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return Object(r.jsx)("div",{children:n.map((function(e){return Object(r.jsx)(l,{robot:e},e.id)}))})})),u=n(10),b=n.n(u),h=n(21),f="CHANGE_SEARCH_FIELD",j="REQUEST_ROBOTS_PENDING",p="REQUEST_ROBOTS_SUCCESS",v="REQUEST_ROBOTS_FAILED",g=n(22),O=n.n(g),w=Object(s.b)(null,{setSearchField:function(e){return function(t){t({type:f,payload:e})}}})((function(e){var t=e.setSearchField;return Object(r.jsx)("div",{className:"pa2",children:Object(r.jsx)("input",{"aria-label":"Search Robots",className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:function(e){return t(e.target.value)},name:"searchfield"})})})),x=function(e){return Object(r.jsx)("div",{style:{overflowY:"scroll",border:"1px solid black",height:"800px"},children:e.children})},m=function(){return Object(r.jsx)("h1",{children:"RoboFriends"})},y=(n(56),n(57),Object(s.b)((function(e){return{isPending:e.robot.isPending,error:e.robot.error}}),{requestRobots:function(){return function(){var e=Object(h.a)(b.a.mark((function e(t){var n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:j}),e.next=4,O.a.get("https://jsonplaceholder.typicode.com/users/");case 4:n=e.sent,r=n.data,t({type:p,payload:r}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t({type:v,payload:e.t0});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.isPending,n=e.requestRobots;return Object(o.useEffect)((function(){n()}),[]),Object(r.jsxs)("div",{className:"tc",children:[Object(r.jsx)(m,{}),Object(r.jsx)(w,{}),Object(r.jsx)(x,{children:t?Object(r.jsx)("h1",{children:"LOADING"}):Object(r.jsx)(d,{})})]})}))),S=n(4),k=n(23),E=n(24),R=n(3),F={robots:[],isPending:!1,error:""},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case j:return Object(R.a)(Object(R.a)({},e),{},{isPending:!0});case p:return Object(R.a)(Object(R.a)({},e),{},{robots:r,isPending:!1});case v:return Object(R.a)(Object(R.a)({},e),{},{error:r,isPending:!1});default:return e}},P={searchField:""},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case f:return Object(R.a)(Object(R.a)({},e),{},{searchField:r});default:return e}},W=Object(S.combineReducers)({search:T,robot:N}),C=[E.a],_=Object(S.createStore)(W,{},Object(k.composeWithDevTools)(S.applyMiddleware.apply(void 0,C))),A=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function L(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(s.a,{store:_,children:Object(r.jsx)(y,{})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robofriends",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/robofriends","/service-worker.js");A?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):L(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):L(t,e)}))}}()}},[[58,1,2]]]);
//# sourceMappingURL=main.e73137ca.chunk.js.map