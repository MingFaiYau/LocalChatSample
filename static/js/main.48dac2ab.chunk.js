(this["webpackJsonplocal-chat-sample"]=this["webpackJsonplocal-chat-sample"]||[]).push([[0],{11:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),c=a(4),r=a.n(c),i=a(2),u=(a(9),a(0));function j(){var e=n.a.useState(""),t=Object(i.a)(e,2),a=t[0],s=t[1],c=n.a.useState([]),r=Object(i.a)(c,2),j=r[0],b=r[1],m=n.a.useCallback((function(){b([])}),[]),x=n.a.useCallback((function(e){b((function(t){return t.concat(e)}))}),[]);return Object(u.jsxs)("div",{className:"app-container",children:[!a&&Object(u.jsx)(o,{setUserName:s}),a&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(d,{resetMessages:m}),Object(u.jsx)(l,{messages:j,addMessage:x,userName:a})]})]})}var o=function(e){var t=e.setUserName,a=n.a.useState(""),s=Object(i.a)(a,2),c=s[0],r=s[1];return Object(u.jsxs)("div",{className:"ask-name-page-container",children:[Object(u.jsx)("div",{children:"Your Name"}),Object(u.jsx)("input",{type:"text",value:c,onChange:function(e){r(e.target.value)}}),Object(u.jsx)("input",{type:"button",value:"Start",onClick:function(){c&&(t(c),r(""))}})]})},d=function(e){var t=e.resetMessages;return Object(u.jsxs)("div",{className:"header-container ",children:[Object(u.jsx)("div",{children:"Header"}),Object(u.jsx)("input",{type:"button",value:"R",onClick:t})]})},l=function(e){var t=e.messages,a=e.addMessage,s=e.userName;return Object(u.jsxs)("div",{className:"content-container",children:[Object(u.jsx)(b,{messages:t}),Object(u.jsx)(h,{addMessage:a,userName:s})]})},b=function(e){var t=e.messages;return Object(u.jsx)("div",{className:"message-list-container",children:t.map((function(e){return Object(u.jsx)(m,{className:"input-bar-container",message:e},e.id)}))})},m=function(e){var t=e.message;return Object(u.jsxs)("div",{className:"message-item-container",children:[Object(u.jsx)(O,{author:t.author}),Object(u.jsx)(x,{text:t.text}),Object(u.jsx)(v,{date:t.date})]})},x=function(e){var t=e.text;return Object(u.jsx)("div",{className:"message-item-content-container",children:t})},O=function(e){var t=e.author;return Object(u.jsx)("div",{className:"message-item-author",children:t})},v=function(e){var t=e.date;return Object(u.jsx)("div",{className:"message-item-date",children:t})},h=function(e){var t=e.addMessage,a=e.userName,s=n.a.useState(""),c=Object(i.a)(s,2),r=c[0],j=c[1];return Object(u.jsxs)("div",{className:"input-bar-container",children:[Object(u.jsx)("input",{type:"text",value:r,onChange:function(e){j(e.target.value)}}),Object(u.jsx)("input",{type:"button",value:">",onClick:function(){if(r){var e={id:(new Date).getTime(),text:r,author:a,date:(new Date).toISOString()};t(e),j("")}}})]})};r.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(j,{})}),document.getElementById("root"))},9:function(e,t,a){}},[[11,1,2]]]);
//# sourceMappingURL=main.48dac2ab.chunk.js.map