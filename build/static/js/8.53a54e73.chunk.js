(this["webpackJsonpdashboard-react"]=this["webpackJsonpdashboard-react"]||[]).push([[8],{188:function(a,e,t){"use strict";t.r(e);var s=t(8),r=t(0),n=t.n(r),i=t(47),o=t(59),l=t(32),c=t(57),m=t(14),d=t(58),u=function(a){var e=a.children,t=a.title;return n.a.createElement("div",{className:"min-w-0 p-4 h-40 bg-white rounded-lg shadow-xs dark:bg-gray-800"},n.a.createElement("p",{className:"mb-4 font-semibold text-gray-800 dark:text-gray-300"},t),e)};e.default=function(){var a=Object(r.useState)(1),e=Object(s.a)(a,2),t=e[0],g=e[1],p=Object(r.useState)([]),b=Object(s.a)(p,2),f=b[0],h=b[1],T=c.a.length;return Object(r.useEffect)((function(){h(c.a.slice(10*(t-1),10*t))}),[t]),n.a.createElement(n.a.Fragment,null,n.a.createElement(l.a,null,"Dashboard"),n.a.createElement("div",{className:"grid gap-6 mb-8 md:grid-cols-2"},n.a.createElement("div",{className:"grid gap-4"},n.a.createElement(u,{title:"Total Income"},n.a.createElement("div",{className:"flex gap-4  w-1/2"},n.a.createElement("div",{className:"grid"},n.a.createElement("h2",{className:"text-2xl font-bold dark:text-gray-400"},"$124,563.00")),n.a.createElement(m.Badge,{type:"success"},n.a.createElement("p",{className:"text-center mt-2 dark:text-gray-400"},"+13.5%"))),n.a.createElement("div",{class:"w-full bg-gray-200 rounded-full h-2.5"},n.a.createElement("div",{class:"bg-blue-600 h-2.5 rounded-full w-1/2 mt-4"},"."))),n.a.createElement(i.a,{title:"New Users"},n.a.createElement("div",{className:"flex gap-6"},n.a.createElement("h2",{className:"text-2xl font-bold dark:text-gray-400"},"94.2%"),n.a.createElement(m.Badge,{type:"success"},n.a.createElement("p",{className:"text-center mt-2 dark:text-gray-400"},"+6.9%"))),n.a.createElement(o.a,d.b))),n.a.createElement(i.a,{title:"Balance"},n.a.createElement("div",{className:"flex gap-40"},n.a.createElement("p",{className:"text-gray-400 text-sm"},"Earnings"),n.a.createElement("p",{className:"text-gray-400 text-sm"},"Sales Value")),n.a.createElement("div",{className:"cont flex gap-6 mb-8"},n.a.createElement("div",{className:"flex gap-4 border-2 p-4 w-1/3"},n.a.createElement("div",{className:"grid"},n.a.createElement("h2",{className:"text-2xl font-bold dark:text-gray-400"},"43.41%")),n.a.createElement(m.Badge,{type:"success"},n.a.createElement("p",{className:"text-center mt-2 dark:text-gray-400"},"+2.5%"))),n.a.createElement("div",{className:"flex gap-4 border-2 p-4 w-1/2"},n.a.createElement("div",{className:"grid"},n.a.createElement("h2",{className:"text-2xl font-bold dark:text-gray-400"},"$95,422")),n.a.createElement(m.Badge,{type:"success"},n.a.createElement("p",{className:"text-center mt-2 dark:text-gray-400"},"+13.5%")))),n.a.createElement(o.c,d.f))),n.a.createElement(m.TableContainer,null,n.a.createElement("div",{className:"flex justify-between px-10"},n.a.createElement("h1",{className:"text-xl font-bold py-4"},"Recent Transactions"),n.a.createElement("button",{type:"button",class:"mt-4 focus:outline-none h-10 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"},"Export")),n.a.createElement(m.Table,null,n.a.createElement(m.TableHeader,null,n.a.createElement("tr",null,n.a.createElement(m.TableCell,null,"Invoice ID"),n.a.createElement(m.TableCell,null,"Date"),n.a.createElement(m.TableCell,null,"Description"),n.a.createElement(m.TableCell,null,"Status"),n.a.createElement(m.TableCell,null,"Description"))),n.a.createElement(m.TableBody,null,f.map((function(a,e){return n.a.createElement(m.TableRow,{key:e},n.a.createElement(m.TableCell,null,n.a.createElement("div",{className:"flex items-center text-sm"},n.a.createElement("div",{class:"flex items-center mb-4"},n.a.createElement("input",{id:"default-checkbox",type:"checkbox",value:"",class:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"}),n.a.createElement("label",{for:"default-checkbox",class:"ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"},"MD63592DR2")))),n.a.createElement(m.TableCell,null,n.a.createElement("span",{className:"text-sm"},new Date(a.date).toLocaleDateString())),n.a.createElement(m.TableCell,null,n.a.createElement("span",{className:"text-sm"},"code 5928MD01")),n.a.createElement(m.TableCell,null,n.a.createElement(m.Badge,{type:a.status},a.status)),n.a.createElement(m.TableCell,null,n.a.createElement("span",{className:"text-sm"},"$ ",a.amount)))})))),n.a.createElement(m.TableFooter,null,n.a.createElement(m.Pagination,{totalResults:T,resultsPerPage:10,label:"Table navigation",onChange:function(a){g(a)}}))))}},32:function(a,e,t){"use strict";var s=t(0),r=t.n(s);e.a=function(a){var e=a.children;return r.a.createElement("h1",{className:"my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200"},e)}},47:function(a,e,t){"use strict";var s=t(0),r=t.n(s);e.a=function(a){var e=a.children,t=a.title;return r.a.createElement("div",{className:"min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800"},r.a.createElement("p",{className:"mb-4 font-semibold text-gray-800 dark:text-gray-300"},t),e)}},57:function(a,e,t){"use strict";e.a=[{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/lokesh_coder/128.jpg",name:"Chandler Jacobi",job:"Direct Security Executive",amount:989.4,status:"primary",date:"Mon Feb 03 2020 04:13:15 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/suribbles/128.jpg",name:"Monserrat Marquardt",job:"Forward Accountability Producer",amount:471.44,status:"danger",date:"Fri Nov 29 2019 10:43:17 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/jjsiii/128.jpg",name:"Lonie Wyman",job:"Legacy Program Director",amount:934.24,status:"success",date:"Fri Apr 03 2020 03:07:53 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/holdenweb/128.jpg",name:"Corine Abernathy",job:"Chief Factors Planner",amount:351.28,status:"warning",date:"Fri Jun 21 2019 20:21:55 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/operatino/128.jpg",name:"Lorenz Botsford",job:"Central Accountability Developer",amount:355.3,status:"neutral",date:"Wed Aug 28 2019 15:31:43 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/akmur/128.jpg",name:"Everette Botsford",job:"Product Group Architect",amount:525.42,status:"success",date:"Thu Jan 16 2020 09:53:33 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/nateschulte/128.jpg",name:"Marilou Beahan",job:"Future Security Planner",amount:414.99,status:"success",date:"Mon Oct 28 2019 14:44:31 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/jerrybai1907/128.jpg",name:"Ceasar Sauer",job:"Direct Brand Specialist",amount:488,status:"primary",date:"Tue Jul 23 2019 00:24:44 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/igorgarybaldi/128.jpg",name:"Rae McDermott",job:"Lead Branding Engineer",amount:502.69,status:"danger",date:"Sat Feb 01 2020 12:57:03 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/rtgibbons/128.jpg",name:"Mable Steuber",job:"National Group Executive",amount:911.09,status:"danger",date:"Mon Sep 09 2019 12:03:25 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/danthms/128.jpg",name:"Julian Glover",job:"Global Branding Assistant",amount:656.94,status:"danger",date:"Fri May 22 2020 17:46:12 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/andysolomon/128.jpg",name:"Duncan Toy",job:"Central Intranet Manager",amount:120.78,status:"danger",date:"Sun Nov 17 2019 11:59:50 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/jesseddy/128.jpg",name:"Blanche Friesen",job:"Forward Identity Executive",amount:676.95,status:"danger",date:"Sun Jun 21 2020 16:46:39 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/haruintesettden/128.jpg",name:"Orion Koepp",job:"Global Accountability Strategist",amount:447.56,status:"danger",date:"Thu Jun 04 2020 18:29:41 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/vocino/128.jpg",name:"Dakota Vandervort",job:"Future Assurance Coordinator",amount:765.22,status:"danger",date:"Fri Jan 31 2020 13:02:55 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/zaki3d/128.jpg",name:"Lily Collier",job:"Forward Configuration Orchestrator",amount:449.11,status:"danger",date:"Sun Aug 18 2019 14:52:01 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/evanshajed/128.jpg",name:"Kayleigh Schumm",job:"Central Division Agent",amount:65.54,status:"danger",date:"Wed May 06 2020 17:49:09 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/mdsisto/128.jpg",name:"General McGlynn",job:"Central Web Analyst",amount:30.51,status:"danger",date:"Mon Mar 30 2020 01:24:54 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/woodydotmx/128.jpg",name:"Shayna Schumm",job:"Future Directives Engineer",amount:313.73,status:"danger",date:"Wed Jul 03 2019 10:01:06 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/mfacchinello/128.jpg",name:"Giovanna Sanford",job:"Dynamic Interactions Executive",amount:398.3,status:"danger",date:"Tue Oct 08 2019 17:08:43 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/ademilter/128.jpg",name:"Emie Mante",job:"Direct Factors Supervisor",amount:142.51,status:"danger",date:"Wed Jul 24 2019 19:17:16 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/tobysaxon/128.jpg",name:"Chance Muller",job:"Lead Usability Planner",amount:963.26,status:"danger",date:"Sun Dec 01 2019 14:04:10 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg",name:"Armani Torphy",job:"Forward Functionality Analyst",amount:445.23,status:"danger",date:"Tue Dec 24 2019 13:28:36 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/devinhalladay/128.jpg",name:"Braeden Ward",job:"Central Integration Director",amount:588.53,status:"danger",date:"Wed Apr 15 2020 21:40:11 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/kimcool/128.jpg",name:"Malcolm Price",job:"District Program Planner",amount:181.93,status:"danger",date:"Thu Oct 24 2019 07:09:03 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/angelceballos/128.jpg",name:"Susan Jast",job:"Future Paradigm Associate",amount:928.41,status:"danger",date:"Sun Feb 09 2020 23:22:23 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/peachananr/128.jpg",name:"Torrey Reynolds",job:"Lead Security Agent",amount:447.37,status:"danger",date:"Mon Oct 28 2019 04:10:39 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/agromov/128.jpg",name:"Travon Harber",job:"Legacy Marketing Facilitator",amount:422.48,status:"danger",date:"Sat Nov 09 2019 05:04:09 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/danpliego/128.jpg",name:"Hattie Gutkowski",job:"Chief Configuration Supervisor",amount:714.34,status:"danger",date:"Tue Oct 22 2019 22:36:23 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/ahmetalpbalkan/128.jpg",name:"Demarco Lang",job:"Investor Program Designer",amount:536.92,status:"danger",date:"Wed Apr 08 2020 03:05:59 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/nasirwd/128.jpg",name:"Glennie Ziemann",job:"Dynamic Interactions Analyst",amount:597.25,status:"danger",date:"Mon Jun 22 2020 21:27:06 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/juaumlol/128.jpg",name:"Alta Howe",job:"District Intranet Executive",amount:42.28,status:"danger",date:"Sat Oct 12 2019 22:57:22 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/victordeanda/128.jpg",name:"Sydnee Gottlieb",job:"Global Response Specialist",amount:868.92,status:"danger",date:"Wed Feb 05 2020 05:17:34 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/baumannzone/128.jpg",name:"Arlene Schmitt",job:"Lead Metrics Consultant",amount:364.68,status:"danger",date:"Thu Oct 03 2019 08:47:32 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/chacky14/128.jpg",name:"Hilda Schoen",job:"National Solutions Facilitator",amount:260.91,status:"danger",date:"Wed Dec 04 2019 06:28:30 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/kostaspt/128.jpg",name:"Chase Bahringer",job:"Dynamic Communications Designer",amount:454.61,status:"danger",date:"Mon Nov 25 2019 16:59:38 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/timgthomas/128.jpg",name:"Lucile Hansen",job:"Customer Usability Facilitator",amount:982.22,status:"danger",date:"Sun Aug 25 2019 17:15:59 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/safrankov/128.jpg",name:"Mollie Heaney",job:"Forward Communications Director",amount:390.33,status:"danger",date:"Mon Jul 22 2019 01:45:19 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/justme_timothyg/128.jpg",name:"Bennie Kuvalis",job:"Future Factors Agent",amount:456.64,status:"danger",date:"Sat Feb 08 2020 07:55:08 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/Chakintosh/128.jpg",name:"Jodie Luettgen",job:"Customer Implementation Associate",amount:398.37,status:"danger",date:"Tue Jun 09 2020 11:19:53 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/weavermedia/128.jpg",name:"Bethel Quitzon",job:"Dynamic Web Strategist",amount:183.58,status:"danger",date:"Sun Dec 29 2019 18:56:54 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/gmourier/128.jpg",name:"Jon Dietrich",job:"Legacy Creative Planner",amount:439.01,status:"danger",date:"Sun Dec 29 2019 11:11:34 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/stefvdham/128.jpg",name:"Nakia Kihn",job:"Central Interactions Coordinator",amount:824.12,status:"danger",date:"Sun Sep 15 2019 06:43:56 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/thedamianhdez/128.jpg",name:"Assunta Grady",job:"Investor Operations Specialist",amount:172.97,status:"danger",date:"Tue Dec 17 2019 01:46:37 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/nehfy/128.jpg",name:"Lukas Klocko",job:"Human Usability Associate",amount:515.74,status:"danger",date:"Mon Jun 15 2020 04:04:32 GMT-0300 (Brasilia Standard Time)"}]},58:function(a,e,t){"use strict";t.d(e,"c",(function(){return s})),t.d(e,"e",(function(){return r})),t.d(e,"a",(function(){return n})),t.d(e,"d",(function(){return i})),t.d(e,"f",(function(){return o})),t.d(e,"b",(function(){return l}));var s=[{title:"Shirts",color:"bg-blue-500"},{title:"Shoes",color:"bg-teal-600"},{title:"Bags",color:"bg-purple-600"}],r=[{title:"Organic",color:"bg-teal-600"},{title:"Paid",color:"bg-purple-600"}],n=[{title:"Shoes",color:"bg-teal-600"},{title:"Bags",color:"bg-purple-600"}],i={data:{datasets:[{data:[33,33,33],backgroundColor:["#0694a2","#1c64f2","#7e3af2"],label:"Dataset 1"}],labels:["Shoes","Shirts","Bags"]},options:{responsive:!0,cutoutPercentage:80},legend:{display:!1}},o={data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"Paid",fill:!1,backgroundColor:"#7e3af2",borderColor:"#7e3af2",data:[24,50,64,74,52,51,65]}]},options:{responsive:!0,tooltips:{mode:"index",intersect:!1},hover:{mode:"nearest",intersect:!0},scales:{x:{display:!0,scaleLabel:{display:!0,labelString:"Month"}},y:{display:!0,scaleLabel:{display:!0,labelString:"Value"}}}},legend:{display:!1}},l={data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"Bags",backgroundColor:"#1c64f2",borderWidth:1,data:[66,33,43,12,54,62,84]}]},options:{responsive:!0},legend:{display:!1}}}}]);
//# sourceMappingURL=8.53a54e73.chunk.js.map