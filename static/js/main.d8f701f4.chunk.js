(this["webpackJsonplocal-chat-sample"]=this["webpackJsonplocal-chat-sample"]||[]).push([[0],{35:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a,r,c,i,s,o,u,d,l=n(0),j=n.n(l),b=n(13),p=n.n(b),m=n(6),x=n(3),g=n(4),O=n(11),f=function(){return Object(O.b)()},h=O.c,v=n(5),y=Object(v.b)({name:"user",initialState:{userList:[],currentUser:null},reducers:{register:function(e,t){e.userList.push(t.payload)},login:function(e,t){e.currentUser=t.payload},logout:function(e,t){e.currentUser=null}}}),R=y.actions,k=R.register,C=R.login,N=R.logout,S=function(e){var t;return null===(t=e.user)||void 0===t?void 0:t.userList},w=function(e){return e.user.currentUser},U=y.reducer,I=Object(v.b)({name:"router",initialState:{currentRoute:"login"},reducers:{switchRoute:function(e,t){e.currentRoute=t.payload}},extraReducers:function(e){e.addCase(k,(function(e){e.currentRoute="login"})).addCase(C,(function(e){e.currentRoute="main"})).addCase(N,(function(e){e.currentRoute="login"}))}}),z=I.actions.switchRoute,L=function(e){return e.router.currentRoute},F=I.reducer,B=n(1),E=g.a.div(a||(a=Object(x.a)(["\n  padding: 30px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-content: center;\n  align-items: center;\n  border: 1px solid black;\n  border-radius: 20px;\n  font-size: 14px;\n"]))),M=g.a.div(r||(r=Object(x.a)(["\n  font-size: 3rem;\n  margin-bottom: 20px;\n"]))),D=g.a.input(c||(c=Object(x.a)(["\n  width: 80%;\n  height: 2.5rem;\n  padding: 0 10px;\n  font-size: 1rem;\n  outline: none;\n  border: 1px solid black;\n  border-radius: 5px;\n  cursor: pointer;\n"]))),J=g.a.input(i||(i=Object(x.a)(["\n  width: 50%;\n  height: 2rem;\n  margin-top: 20px;\n  padding: 5px 20px;\n  border: 1px solid black;\n  border-radius: 5px;\n  cursor: pointer;\n"]))),P=function(e){e.setUserName;var t=f(),n=j.a.useState(""),a=Object(m.a)(n,2),r=a[0],c=a[1],i=h(S);return Object(B.jsx)(j.a.Fragment,{children:Object(B.jsxs)(E,{children:[Object(B.jsx)(M,{children:"Welcome"}),Object(B.jsx)(D,{type:"text",value:r,onChange:function(e){c(e.target.value)},placeholder:"Your name"}),Object(B.jsx)(J,{type:"button",value:"Login",onClick:function(){if(r){var e=i.find((function(e){return e.name===r}));e?t(C(e)):alert("User not found, please try again or sign-up")}else alert("Please enter user name")}}),Object(B.jsx)(J,{type:"button",value:"Sign Up",onClick:function(e){t(z("registration"))}})]})})},T=n(24),W=n(12),Y=n(39),A={id:Object(Y.a)(),name:"I AM BOT"},H={id:Object(Y.a)(),text:"Welcome, i am bot",user:A},q=Object(v.b)({name:"chatRoom",initialState:{chatRooms:{}},reducers:{createChatRoom:function(e,t){e.chatRooms[t.payload]=[Object(W.a)(Object(W.a)({},H),{},{date:(new Date).toISOString()})]},sendMessage:{reducer:function(e,t){var n;console.log("state.chatRooms[action.payload.userId]",e.chatRooms[t.payload.userId]),console.log("action.payload.messages",t.payload.messages),(n=e.chatRooms[t.payload.userId]).push.apply(n,Object(T.a)(t.payload.messages))},prepare:function(e){return{payload:{userId:e.user.id,messages:[e,Object(W.a)(Object(W.a)({},e),{},{id:Object(Y.a)(),user:A})]}}}}}}),G=q.actions,K=G.createChatRoom,Q=G.sendMessage,V=function(e){return e.chatRoom.chatRooms[e.user.currentUser.id]||[]},X=q.reducer,Z=function(){var e=f(),t=h(w),n=j.a.useState(""),a=Object(m.a)(n,2),r=a[0],c=a[1];return Object(B.jsxs)("div",{className:"input-bar-container",children:[Object(B.jsx)("input",{type:"text",value:r,onChange:function(e){c(e.target.value)}}),Object(B.jsx)("input",{type:"button",value:">",onClick:function(){if(r){var n={id:Object(Y.a)(),text:r,user:t,date:(new Date).toISOString()};e(Q(n)),c("")}}})]})},$=function(e){var t=e.author;return Object(B.jsx)("div",{className:"message-item-author",children:t})},_=function(e){var t=e.text;return Object(B.jsx)("div",{className:"message-item-content-container",children:t})},ee=function(e){var t=e.date;return Object(B.jsx)("div",{className:"message-item-date",children:t})},te=function(e){var t=e.message,n=h(w).id===t.user.id;return Object(B.jsxs)("div",{className:"message-item-container ".concat(n?"right-message":"left-message"),children:[Object(B.jsx)($,{author:t.user.name}),Object(B.jsx)(_,{text:t.text}),Object(B.jsx)(ee,{date:t.date})]})},ne=function(e){var t=e.messages;return Object(B.jsx)("div",{className:"message-list-container",children:t.map((function(e){return Object(B.jsx)(te,{message:e},e.id)}))})},ae=function(e){e.userName;var t=j.a.useState(!1),n=Object(m.a)(t,2),a=n[0],r=n[1],c=f(),i=h(V),s=h(w);return j.a.useEffect((function(){a||setTimeout((function(){(null===i||void 0===i?void 0:i.length)>0?r(!0):c(K(s.id))}),2e3)}),[i,s,c,a]),Object(B.jsxs)("div",{className:"content-container",children:[!a&&Object(B.jsx)("h1",{className:"loading",children:"Loading...."}),a&&Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(ne,{messages:i}),Object(B.jsx)(Z,{})]})]})},re=function(){var e=f(),t=h(w);return Object(B.jsxs)("div",{className:"header-container ",children:[Object(B.jsx)("div",{children:"Hi, ".concat(t.name)}),Object(B.jsx)("input",{type:"button",value:"E",onClick:function(){e(N())}})]})},ce=function(){return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(re,{}),Object(B.jsx)(ae,{})]})},ie=g.a.div(s||(s=Object(x.a)(["\n  padding: 30px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-content: center;\n  align-items: center;\n  border: 1px solid black;\n  border-radius: 20px;\n  font-size: 14px;\n"]))),se=g.a.div(o||(o=Object(x.a)(["\n  font-size: 3rem;\n  margin-bottom: 20px;\n"]))),oe=g.a.input(u||(u=Object(x.a)(["\n  width: 80%;\n  height: 2.5rem;\n  padding: 0 10px;\n  font-size: 1rem;\n  outline: none;\n  border: 1px solid black;\n  border-radius: 5px;\n  cursor: pointer;\n"]))),ue=g.a.input(d||(d=Object(x.a)(["\n  width: 50%;\n  height: 2rem;\n  margin-top: 20px;\n  padding: 5px 20px;\n  border: 1px solid black;\n  border-radius: 5px;\n  cursor: pointer;\n"]))),de=function(){var e=f(),t=j.a.useState(""),n=Object(m.a)(t,2),a=n[0],r=n[1],c=h(S);return Object(B.jsx)(j.a.Fragment,{children:Object(B.jsxs)(ie,{children:[Object(B.jsx)(se,{children:"Registration"}),Object(B.jsx)(oe,{type:"text",value:a,onChange:function(e){r(e.target.value)},placeholder:"Your name"}),Object(B.jsx)(ue,{type:"button",value:"Register",onClick:function(t){if(a)if(c.find((function(e){return e.name===a})))alert("User already exist, please try other name");else{var n={id:Object(Y.a)(),name:a};e(k(n))}else alert("Please enter user name")}}),Object(B.jsx)(ue,{type:"button",value:"Back to login",onClick:function(t){e(z("login"))}})]})})};n(35);function le(){var e=h(L),t=h(w),n=!t&&(!e||"login"===e),a=!t&&"registration"===e,r=t||"main"===e;return Object(B.jsxs)("div",{className:"app-container",children:[n&&Object(B.jsx)(P,{}),a&&Object(B.jsx)(de,{}),r&&Object(B.jsx)(ce,{})]})}var je=n(16),be=n(22),pe=n.n(be),me=n(10),xe=n(2),ge=Object(xe.b)({chatRoom:X,user:U,router:F}),Oe={key:"root",version:2,storage:pe.a,blacklist:["router"]},fe=Object(je.a)(Oe,ge),he=Object(v.a)({reducer:fe,middleware:[me.a]}),ve=Object(je.b)(he),ye=he,Re=n(23);p.a.render(Object(B.jsx)(O.a,{store:ye,children:Object(B.jsx)(Re.a,{persistor:ve,loading:null,children:Object(B.jsx)(le,{})})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.d8f701f4.chunk.js.map