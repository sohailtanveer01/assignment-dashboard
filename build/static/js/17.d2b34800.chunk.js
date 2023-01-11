(this["webpackJsonpdashboard-react"]=this["webpackJsonpdashboard-react"]||[]).push([[17],{186:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(1),o=[{path:"/dashboard",component:Object(n.lazy)((function(){return Promise.all([t.e(1),t.e(8)]).then(t.bind(null,188))}))},{path:"/forms",component:Object(n.lazy)((function(){return t.e(10).then(t.bind(null,181))}))},{path:"/cards",component:Object(n.lazy)((function(){return t.e(6).then(t.bind(null,187))}))},{path:"/charts",component:Object(n.lazy)((function(){return Promise.all([t.e(1),t.e(11)]).then(t.bind(null,189))}))},{path:"/buttons",component:Object(n.lazy)((function(){return t.e(9).then(t.bind(null,182))}))},{path:"/modals",component:Object(n.lazy)((function(){return t.e(12).then(t.bind(null,183))}))},{path:"/tables",component:Object(n.lazy)((function(){return t.e(7).then(t.bind(null,184))}))},{path:"/404",component:Object(n.lazy)((function(){return t.e(2).then(t.bind(null,180))}))},{path:"/blank",component:Object(n.lazy)((function(){return t.e(16).then(t.bind(null,185))}))}];function c(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=[{path:"/app/dashboard",icon:"HomeIcon",name:"Support Center"},{path:"/app/forms",icon:"FormsIcon",name:"Inbox"},{path:"/app/cards",icon:"CardsIcon",name:"File Manager"},{path:"/app/charts",icon:"ChartsIcon",name:"Data List"}],i=[{path:"/app/dashboard",icon:"HomeIcon",name:"Dashboard"},{path:"/app/forms",icon:"FormsIcon",name:"Discover"},{path:"/app/cards",icon:"CardsIcon",name:"Users"},{path:"/app/charts",icon:"ChartsIcon",name:"Documents"},{path:"/app/buttons",icon:"PagesIcon",name:"Appications"},{icon:"ModalsIcon",name:"Pages",routes:[{path:"/login",name:"Login"},{path:"/create-account",name:"Create account"},{path:"/forgot-password",name:"Forgot password"},{path:"/app/404",name:"404"},{path:"/app/blank",name:"Blank"}]}],m=t(9),u=t(33),d=t(8),p=t(14);function h(e){var a=e.icon,t=c(e,["icon"]),n=u[a];return r.a.createElement(n,t)}var b=function(e){var a=e.route,t=Object(n.useState)(!1),l=Object(d.a)(t,2),o=l[0],c=l[1];return r.a.createElement("li",{className:"relative px-6 py-3",key:a.name},r.a.createElement("button",{className:"inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200",onClick:function(){c(!o)},"aria-haspopup":"true"},r.a.createElement("span",{className:"inline-flex items-center"},r.a.createElement(h,{className:"w-5 h-5","aria-hidden":"true",icon:a.icon}),r.a.createElement("span",{className:"ml-4"},a.name)),r.a.createElement(u.DropdownIcon,{className:"w-4 h-4","aria-hidden":"true"})),r.a.createElement(p.Transition,{show:o,enter:"transition-all ease-in-out duration-300",enterFrom:"opacity-25 max-h-0",enterTo:"opacity-100 max-h-xl",leave:"transition-all ease-in-out duration-300",leaveFrom:"opacity-100 max-h-xl",leaveTo:"opacity-0 max-h-0"},r.a.createElement("ul",{className:"p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md shadow-inner bg-gray-50 dark:text-gray-400 dark:bg-gray-900","aria-label":"submenu"},a.routes.map((function(e){return r.a.createElement("li",{className:"px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200",key:e.name},r.a.createElement(m.b,{className:"w-full",to:e.path},e.name))})))))};function f(e){var a=e.icon,t=c(e,["icon"]),n=u[a];return r.a.createElement(n,t)}var E=function(e){var a=e.route,t=Object(n.useState)(!1),l=Object(d.a)(t,2),o=l[0],c=l[1];return r.a.createElement("li",{className:"relative px-6 py-3",key:a.name},r.a.createElement("button",{className:"inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200",onClick:function(){c(!o)},"aria-haspopup":"true"},r.a.createElement("span",{className:"inline-flex items-center"},r.a.createElement(f,{className:"w-5 h-5","aria-hidden":"true",icon:a.icon}),r.a.createElement("span",{className:"ml-4"},a.name)),r.a.createElement(u.DropdownIcon,{className:"w-4 h-4","aria-hidden":"true"})),r.a.createElement(p.Transition,{show:o,enter:"transition-all ease-in-out duration-300",enterFrom:"opacity-25 max-h-0",enterTo:"opacity-100 max-h-xl",leave:"transition-all ease-in-out duration-300",leaveFrom:"opacity-100 max-h-xl",leaveTo:"opacity-0 max-h-0"}))};function g(e){var a=e.icon,t=c(e,["icon"]),n=u[a];return r.a.createElement(n,t)}var y=function(){return r.a.createElement("div",{className:"py-4 text-gray-500 dark:text-gray-400"},r.a.createElement("a",{className:"ml-6 text-lg font-bold text-gray-800 dark:text-gray-200",href:"#"},"Artemis"),r.a.createElement("ul",{className:"mt-6"},r.a.createElement("p",{className:"ml-4"},"Main"),i.map((function(e){return e.routes?r.a.createElement(b,{route:e,key:e.name}):r.a.createElement("li",{className:"relative px-6 py-3",key:e.name},r.a.createElement(m.c,{exact:!0,to:e.path,className:"inline-flex p-2 rounded-md items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200",activeClassName:"text-gray-800 dark:text-gray-100 bg-blue-600"},r.a.createElement(l.b,{path:e.path,exact:e.exact},r.a.createElement("span",{className:"absolute inset-y-0 left-0 w-1 bg-blue-600 rounded-tr-lg rounded-br-lg","aria-hidden":"true"})),r.a.createElement(g,{className:"w-5 h-5","aria-hidden":"true",icon:e.icon}),r.a.createElement("span",{className:"ml-4"},e.name)))}))),r.a.createElement("ul",{className:"mt-6"},r.a.createElement("p",{className:"ml-4"},"Secondary"),s.map((function(e){return e.secondaryroutes?r.a.createElement(E,{route:e,key:e.name}):r.a.createElement("li",{className:"relative px-6 py-3",key:e.name},r.a.createElement(m.c,{exact:!0,to:e.path,className:"inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200",activeClassName:"text-gray-800 dark:text-gray-100"},r.a.createElement(l.b,{path:e.path,exact:e.exact},r.a.createElement("span",{className:"absolute inset-y-0 left-0 w-1 bg-blue-600 rounded-tr-lg rounded-br-lg","aria-hidden":"true"})),r.a.createElement(g,{className:"w-5 h-5","aria-hidden":"true",icon:e.icon}),r.a.createElement("span",{className:"ml-4"},e.name)))}))),r.a.createElement("div",{className:"px-6 my-6 grid gap-4"},r.a.createElement("div",{className:"flex"},r.a.createElement(u.SettingsIcon,{className:"w-4 h-4 mr-3","aria-hidden":"true"}),r.a.createElement("span",{className:"ml-4"},"Settings")),r.a.createElement("div",{className:"flex"},r.a.createElement(u.OutlineLogoutIcon,{className:"w-4 h-4 mr-3","aria-hidden":"true"}),r.a.createElement("span",null,"Log out"))))};var x=function(e){return r.a.createElement("aside",{className:"z-30 flex-shrink-0 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 lg:block"},r.a.createElement(y,null))},v=t(15);var N=function(){var e=Object(n.useContext)(v.a),a=e.isSidebarOpen,t=e.closeSidebar;return r.a.createElement(p.Transition,{show:a},r.a.createElement(r.a.Fragment,null,r.a.createElement(p.Transition,{enter:"transition ease-in-out duration-150",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transition ease-in-out duration-150",leaveFrom:"opacity-100",leaveTo:"opacity-0"},r.a.createElement(p.Backdrop,{onClick:t})),r.a.createElement(p.Transition,{enter:"transition ease-in-out duration-150",enterFrom:"opacity-0 transform -translate-x-20",enterTo:"opacity-100",leave:"transition ease-in-out duration-150",leaveFrom:"opacity-100",leaveTo:"opacity-0 transform -translate-x-20"},r.a.createElement("aside",{className:"fixed inset-y-0 z-50 flex-shrink-0 w-64 mt-16 overflow-y-auto bg-white dark:bg-gray-800 lg:hidden"},r.a.createElement(y,null)))))};var w=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(x,null),r.a.createElement(N,null))};var k=function(){var e=Object(n.useContext)(p.WindmillContext),a=e.mode,t=e.toggleMode,l=Object(n.useContext)(v.a).toggleSidebar,o=Object(n.useState)(!1),c=Object(d.a)(o,2),s=c[0],i=c[1],m=Object(n.useState)(!1),h=Object(d.a)(m,2),b=h[0],f=h[1];return r.a.createElement("header",{className:"z-40 py-4 bg-white shadow-bottom dark:bg-gray-800"},r.a.createElement("div",{className:"container flex items-center justify-between h-full px-6 mx-auto text-blue-600 dark:text-blue-300"},r.a.createElement("button",{className:"p-1 mr-5 -ml-1 rounded-md lg:hidden focus:outline-none focus:shadow-outline-blue",onClick:l,"aria-label":"Menu"},r.a.createElement(u.MenuIcon,{className:"w-6 h-6","aria-hidden":"true"})),r.a.createElement("div",{className:"flex justify-center flex-1 lg:mr-32"},r.a.createElement("div",{className:"relative w-full max-w-xl mr-6 focus-within:text-blue-500"},r.a.createElement("div",{className:"absolute inset-y-0 flex items-center pl-2"},r.a.createElement(u.SearchIcon,{className:"w-4 h-4","aria-hidden":"true"})),r.a.createElement(p.Input,{className:"pl-8 text-gray-700",placeholder:"Type to search","aria-label":"Search"}))),r.a.createElement("ul",{className:"flex items-center flex-shrink-0 space-x-6"},r.a.createElement("li",{className:"flex"},r.a.createElement("button",{className:"rounded-md focus:outline-none focus:shadow-outline-blue",onClick:t,"aria-label":"Toggle color mode"},"dark"===a?r.a.createElement(u.SunIcon,{className:"w-5 h-5","aria-hidden":"true"}):r.a.createElement(u.MoonIcon,{className:"w-5 h-5","aria-hidden":"true"}))),r.a.createElement(u.SettingsIcon,{className:"w-5 h-5 ","aria-hidden":"true"}),r.a.createElement("li",{className:"relative"},r.a.createElement("button",{className:"relative align-middle rounded-md focus:outline-none focus:shadow-outline-blue",onClick:function(){i(!s)},"aria-label":"Notifications","aria-haspopup":"true"},r.a.createElement(u.BellIcon,{className:"w-5 h-5","aria-hidden":"true"}),r.a.createElement("span",{"aria-hidden":"true",className:"absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-gray-800"})),r.a.createElement(p.Dropdown,{align:"right",isOpen:s,onClose:function(){return i(!1)}},r.a.createElement(p.DropdownItem,{tag:"a",href:"#",className:"justify-between"},r.a.createElement("span",null,"Messages"),r.a.createElement(p.Badge,{type:"danger"},"13")),r.a.createElement(p.DropdownItem,{tag:"a",href:"#",className:"justify-between"},r.a.createElement("span",null,"Sales"),r.a.createElement(p.Badge,{type:"danger"},"2")),r.a.createElement(p.DropdownItem,{onClick:function(){return alert("Alerts!")}},r.a.createElement("span",null,"Alerts")))),r.a.createElement("div",{className:"grid"},r.a.createElement("p",{className:"text-gray-500"},"Thomson Brown"),r.a.createElement("p",{className:"text-gray-500"},"Developer")),r.a.createElement("li",{className:"relative"},r.a.createElement("button",{className:"rounded-full focus:shadow-outline-blue focus:outline-none",onClick:function(){f(!b)},"aria-label":"Account","aria-haspopup":"true"},r.a.createElement(p.Avatar,{className:"align-middle",src:"https://avatars.githubusercontent.com/u/1566403?s=400&v=4",alt:"","aria-hidden":"true"})),r.a.createElement(p.Dropdown,{align:"right",isOpen:b,onClose:function(){return f(!1)}},r.a.createElement(p.DropdownItem,{tag:"a",href:"#"},r.a.createElement(u.OutlinePersonIcon,{className:"w-4 h-4 mr-3","aria-hidden":"true"}),r.a.createElement("span",null,"Profile")),r.a.createElement(p.DropdownItem,{tag:"a",href:"#"},r.a.createElement(u.OutlineCogIcon,{className:"w-4 h-4 mr-3","aria-hidden":"true"}),r.a.createElement("span",null,"Settings")),r.a.createElement(p.DropdownItem,{onClick:function(){return alert("Log out!")}},r.a.createElement(u.OutlineLogoutIcon,{className:"w-4 h-4 mr-3","aria-hidden":"true"}),r.a.createElement("span",null,"Log out")))))))};var O=function(e){var a=e.children;return r.a.createElement("main",{className:"h-full overflow-y-auto"},r.a.createElement("div",{className:"container grid px-6 mx-auto"},a))},j=t(18),I=Object(n.lazy)((function(){return t.e(2).then(t.bind(null,180))}));a.default=function(){var e=Object(n.useContext)(v.a),a=e.isSidebarOpen,t=e.closeSidebar,c=Object(l.g)();return Object(n.useEffect)((function(){t()}),[c]),r.a.createElement("div",{className:"flex h-screen bg-gray-50 dark:bg-gray-900 ".concat(a&&"overflow-hidden")},r.a.createElement(w,null),r.a.createElement("div",{className:"flex flex-col flex-1 w-full"},r.a.createElement(k,null),r.a.createElement(O,null,r.a.createElement(n.Suspense,{fallback:r.a.createElement(j.a,null)},r.a.createElement(l.d,null,o.map((function(e,a){return e.component?r.a.createElement(l.b,{key:a,exact:!0,path:"/app".concat(e.path),render:function(a){return r.a.createElement(e.component,a)}}):null})),r.a.createElement(l.a,{exact:!0,from:"/app",to:"/app/dashboard"}),r.a.createElement(l.b,{component:I}))))))}}}]);
//# sourceMappingURL=17.d2b34800.chunk.js.map