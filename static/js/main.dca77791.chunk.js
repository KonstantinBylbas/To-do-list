(this["webpackJsonp27.10"]=this["webpackJsonp27.10"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),r=c(7),i=c.n(r),a=(c(12),c(13),c(2)),o=c(5),j=(c(14),c(0)),l=s.a.createContext(null);function u(e){var t=e.children,c=Object(n.useState)([]),s=Object(o.a)(c,2),r=s[0],i=s[1];return Object(j.jsx)(l.Provider,{value:{contextProjects:r,setContextProjects:i},children:t})}c(16);function d(e){var t=e.handlerClick,c=Object(n.useContext)(l),s=c.contextProjects,r=c.setContextProjects;return Object(j.jsxs)("form",{className:"project",onSubmit:function(e){e.preventDefault();var t=(new Date).toLocaleTimeString();r([].concat(Object(a.a)(s),[{id:s.length+1,name:e.target.elements[0].value,body:e.target.elements[1].value,tasktime:e.target.elements[2].value,publishtime:t,status:!1,priority:e.target.elements[3].value,show:!0}]))},children:[Object(j.jsx)("h2",{children:"\u0417\u0430\u0434\u0430\u0447\u0430"}),Object(j.jsx)("input",{type:"text",required:!0}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("h2",{children:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439"}),Object(j.jsx)("textarea",{cols:"30",rows:"7"}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("h2",{children:"\u0421\u0440\u043e\u043a \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f (\u0447.)"}),Object(j.jsx)("input",{type:"number",min:0,max:23,onInput:function(e){var t=e.target;t.value.length>2&&(t.value=t.value.slice(0,2))},required:!0}),Object(j.jsx)("h2",{children:"\u041f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442 \u0437\u0430\u0434\u0430\u0447\u0438"}),Object(j.jsxs)("select",{name:"priority",id:"priority",children:[Object(j.jsx)("option",{value:"0",children:"Default"}),Object(j.jsx)("option",{value:"1",children:"Middle"}),Object(j.jsx)("option",{value:"2",children:"High"})]}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("button",{onClick:t,children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})}c(17);function b(e){var t=e.project,c=t.name,s=t.body,r=t.tasktime,i=t.publishtime,o=t.id,u=t.status,d=t.show,b=t.priority,x=Object(n.useContext)(l),h=x.contextProjects,O=x.setContextProjects;return Object(j.jsxs)("div",{className:"card cardProject ".concat(d?"":"hidden"," ").concat(u?"done":""," "),children:[Object(j.jsx)("h2",{children:c}),Object(j.jsx)("h4",{children:s}),Object(j.jsxs)("div",{className:"leftbottom",children:[Object(j.jsx)("p",{className:"priority",children:0==b?"Default prority":1==b?"Middle priority":"High priority"}),u?"":Object(j.jsxs)("p",{className:"timeTask",children:["\u0414\u043e \u043e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u044f: ",r,"\u0447."]})]}),Object(j.jsx)("span",{className:"timePublish",children:i}),Object(j.jsxs)("div",{className:"btns",children:[u?"":Object(j.jsx)("button",{onClick:function(){return function(e){h.map((function(t){return t.id==e?t.status=!0:""})),O(Object(a.a)(h))}(o)},children:"Done"}),Object(j.jsx)("button",{onClick:function(){return function(e){h.splice(h.indexOf(h.find((function(t){return t.id==e}))),1),O(Object(a.a)(h))}(o)},children:"Delete"})]})]})}function x(){var e=Object(n.useContext)(l),t=e.contextProjects,c=e.setContextProjects,s=Object(n.useState)(!1),r=Object(o.a)(s,2),i=r[0],u=r[1];return Object(j.jsxs)("div",{className:"projects",children:[Object(j.jsx)("div",{className:"modal ".concat(i?"modalOpen":""),"data-modal":"background",onClick:function(e){e.target.dataset.modal&&u(!1)},children:Object(j.jsx)("div",{className:"content",children:Object(j.jsx)(d,{handlerClick:function(){return u(!1)}})})}),t&&t.length?Object(j.jsx)("div",{className:"search content",children:Object(j.jsx)("input",{type:"text",placeholder:"Enter query",onChange:function(e){var n=e.target;t.map((function(e){return e.name.indexOf(n.value)?e.show=!1:e.show=!0})),c(Object(a.a)(t))}})}):"",Object(j.jsxs)("div",{className:"content",children:[Object(j.jsx)("svg",{className:"plus",viewBox:"0 0 24 24",onClick:function(){return u(!0)},children:Object(j.jsx)("path",{d:"M18,10h-4V6c0-1.104-0.896-2-2-2s-2,0.896-2,2l0.071,4H6c-1.104,0-2,0.896-2,2s0.896,2,2,2l4.071-0.071L10,18  c0,1.104,0.896,2,2,2s2-0.896,2-2v-4.071L18,14c1.104,0,2-0.896,2-2S19.104,10,18,10z"})}),t&&t.length?t.sort((function(e,t){return e.priority>t.priority?-1:e.priority<t.priority?1:0})).sort((function(e,t){return e.status>t.status?1:e.status<t.status?-1:0})).map((function(e){return Object(j.jsx)(b,{project:e})})):Object(j.jsxs)("div",{className:"card addNew",onClick:function(){return u(!0)},children:[Object(j.jsx)("svg",{className:"plus",viewBox:"0 0 24 24",children:Object(j.jsx)("path",{d:"M18,10h-4V6c0-1.104-0.896-2-2-2s-2,0.896-2,2l0.071,4H6c-1.104,0-2,0.896-2,2s0.896,2,2,2l4.071-0.071L10,18  c0,1.104,0.896,2,2,2s2-0.896,2-2v-4.071L18,14c1.104,0,2-0.896,2-2S19.104,10,18,10z"})}),Object(j.jsx)("p",{children:"ADD NEW"})]})]})]})}function h(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(x,{})})}i.a.render(Object(j.jsx)(u,{children:Object(j.jsx)(h,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.dca77791.chunk.js.map