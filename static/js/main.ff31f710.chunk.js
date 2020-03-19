(this.webpackJsonpalt_nti=this.webpackJsonpalt_nti||[]).push([[0],{15:function(e,t,a){},3:function(e,t,a){},34:function(e,t,a){},39:function(e,t,a){e.exports=a(72)},44:function(e,t,a){},45:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(35),c=a.n(l),o=(a(44),a(1)),s=(a(3),a(45),a(10)),i=a(11),u=a(4),m=a.n(u),d=a(8),f=a(38),b=a(16),E=a.n(b),p="http://192.168.43.84:8000";function v(e){return E.a.get("".concat(p,"/api/0/").concat(e),{headers:{"Content-Type":"application/json;charset=utf-8",Authorization:"Token "+sessionStorage.token}}).then((function(e){return e.data}))}var g={updateContest:function(){var e=Object(d.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v("contest/");case 2:if(a=e.sent,t.setState({contest:a.data[0]}),null===a||void 0===typeof a){e.next=8;break}return e.abrupt("return",!0);case 8:return e.abrupt("return",!1);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),updateNotifications:function(){var e=Object(d.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v("notification/");case 2:if(a=e.sent,t.setState({notifications:a.data}),null===a||void 0===typeof a){e.next=8;break}return e.abrupt("return",!0);case 8:return e.abrupt("return",!1);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),updateTasks:function(){var e=Object(d.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v("task/");case 2:if(a=e.sent,t.setState({tasks:a.data}),null===a||void 0===typeof a){e.next=8;break}return e.abrupt("return",!0);case 8:return e.abrupt("return",!1);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),updateAnswers:function(){var e=Object(d.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v("answer/");case 2:if(a=e.sent,t.setState({answers:a.data}),null===a||void 0===typeof a){e.next=8;break}return e.abrupt("return",!0);case 8:return e.abrupt("return",!1);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),setIsLoaded:function(e,t){e.setState({isLoaded:t})},setIsUpdated:function(e,t){e.setState({isUpdated:t})},setIsAuth:function(e,t){e.setState({isAuth:t})}},h=Object(f.a)(r.a,{contest:"",tasks:"",notifications:"",answers:"",isUpdated:!1,isLoaded:!1,isAuth:null},g),k=function(e){var t=Object(n.useRef)(),a=Object(n.useRef)(),l=function(){var n=Object(d.a)(m.a.mark((function n(){var r,l;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c="auth/login/",o={username:t.current.value,password:a.current.value},r=E.a.post("".concat(p,"/api/0/").concat(c),o,{headers:{"Content-Type":"application/json;charset=utf-8"}}).then((function(e){return e.data})),n.next=3,r;case 3:(l=n.sent)?(e.globalActions.setIsAuth(!0),sessionStorage.setItem("token",l.key)):e.globalActions.setIsAuth(!1);case 5:case"end":return n.stop()}var c,o}),n)})));return function(){return n.apply(this,arguments)}}();return r.a.createElement("div",{className:"Auth"},r.a.createElement("form",{className:"form-auth option-text-m"},r.a.createElement("input",{type:"text",ref:t,className:"field"}),r.a.createElement("input",{type:"password",ref:a,className:"field"}),r.a.createElement("input",{type:"button",value:"\u0412\u041e\u0419\u0422\u0418",className:"submit-button",onClick:l}),r.a.createElement(S,{isAuth:e.isAuth,globalActions:e.globalActions})))},S=function(e){return Object(n.useEffect)((function(){}),[e.isAuth]),e.isAuth?r.a.createElement(i.a,{to:"/0/loader",from:"/auth"}):!1===e.isAuth?r.a.createElement("div",null,"try again"):null===e.isAuth?r.a.createElement("div",null," type your login/password "):void 0},j=(a(15),{txt4circle:{font:" 400 16px 'Montserrat', sans- serif"},title:{marginTop:"40px"},task:{marginTop:"70px"},heading:{font:"400 60px 'Montserrat', sans-serif"},subHeading:{font:"400 36px 'Montserrat', sans-serif"},text:{font:"400 24px 'Montserrat', sans-serif"},upperElement:{zIndex:"9999"},lowerElement:{zIndex:"98"},unabledElement:{zIndex:"0"}}),O=function(e){var t="/0/task/"+e.id;return r.a.createElement("li",{key:e.id},r.a.createElement(s.b,{to:t},e.name)," ")},x=function(e){var t="/0/info/"+e.id;return r.a.createElement("li",{key:e.id},r.a.createElement(s.b,{to:t},"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f")," ")},y=function(e){var t=Object(n.useState)(),a=Object(o.a)(t,2),l=a[0],c=a[1],s=Object(n.useState)(),i=Object(o.a)(s,2),u=i[0],m=i[1],d=Object(n.useState)(),f=Object(o.a)(d,2),b=f[0],E=f[1];return Object(n.useEffect)((function(){var t=e.globalState.contest.tasks,a=t.map((function(e){return 1===e.task_block?1===e.task_type?r.a.createElement(O,{key:e.id,name:e.title,id:e.id}):r.a.createElement(x,{key:e.id,name:e.title,id:e.id}):null}));c(a);var n=t.map((function(e){return 2===e.task_block?1===e.task_type?r.a.createElement(O,{key:e.id,name:e.title,id:e.id}):r.a.createElement(x,{key:e.id,name:e.title,id:e.id}):null}));m(n);var l=t.map((function(e){return 3===e.task_block?1===e.task_type?r.a.createElement(O,{key:e.id,name:e.title,id:e.id}):r.a.createElement(x,{key:e.id,name:e.title,id:e.id}):null}));E(l)}),[e.globalState.contest]),r.a.createElement("div",null,r.a.createElement("ul",{className:"option-text-m"},"\u0420\u0430\u0437\u0434\u0435\u043b 1",l),r.a.createElement("ul",{className:"option-text-m"},"\u0420\u0430\u0437\u0434\u0435\u043b 2",u),r.a.createElement("ul",{className:"option-text-m"},"\u0420\u0430\u0437\u0434\u0435\u043b 3",b))},N=function(e){var t=Object(n.useState)(),a=Object(o.a)(t,2),l=a[0],c=a[1],s=function(){c(!0)},i=function(){c(!1)};return l?r.a.createElement((function(){return r.a.createElement("div",{className:"screen"},r.a.createElement("div",{className:"gray-screen",onClick:i,style:j.lowerElement}),r.a.createElement("div",{className:"nav-bar",style:j.upperElement},r.a.createElement(y,{globalState:e.globalState})))}),null):r.a.createElement((function(){return r.a.createElement("div",{className:"btn open-menu-btn",style:j.unabledElement,onClick:s})}),null)},w=function(e){var t=new Date(e);return t.getFullYear()+"."+t.getMonth()+"."+t.getDate()+"\t"+t.getHours()+":"+t.getMinutes()+":"+t.getSeconds()+"\t"},A=function(e){var t=[];t[0]=e/3600>=0?Math.floor(e/3600):Math.ceil(e/3600);var a=e%3600;t[1]=a/60>=0?Math.floor(a/60):Math.ceil(a/60),t[2]=a%60;var n="";return t.forEach((function(e){e<0&&(e=0),n+=String(e).padStart(2,0)+":"})),n=n.slice(0,-1)},I=function(e){var t=e.split(" ");return 24*t[0]*3600+function(e){if(void 0!==typeof e){var t=e.split(":"),a=0;return t.forEach((function(e){a=Number(60*a+Number(e))})),a}return"00:00:00"}(t[1])},C=function(e){return r.a.createElement("div",{className:"message blck-border",key:e.id},r.a.createElement("div",{className:"content-box option-text-s"},e.content),r.a.createElement("div",{className:"time-box small-text"},w(e.date)))},_=function(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),l=a[0],c=a[1],s=e.globalState.notifications,i=function(){c(!0)},u=function(){c(!1)};return r.a.createElement("div",{className:"chat"},l?r.a.createElement((function(e){console.log(e.messages);var t=e.messages.map((function(e){return r.a.createElement(C,{key:e.id,content:e.text,date:e.date_send})}));return r.a.createElement("div",{className:"chat-box blck-border"},r.a.createElement("button",{className:"close-chat-btn option-text-m",onClick:u},"disable chat"),t)}),{messages:s}):r.a.createElement((function(){return r.a.createElement("div",{className:"btn open-chat-btn",style:j.unabledElement,onClick:i})}),null))};a(69);var M=function(e){return r.a.createElement("div",{className:"bar blck-border option-text-m"},r.a.createElement("div",{style:{backgroundColor:e.color,width:2*e.width+"px",height:"100%"}}),r.a.createElement("div",{style:{position:"inherit",marginTop:"-23px"}},e.content))};var T=function(e){return r.a.createElement("div",{className:"circle blck-border"},r.a.createElement("div",{style:j.txt4circle},function(e){var t=e%10;return 1===t&&11!==e?e+" \u0431\u0430\u043b\u043b\u0430":2!==t&&3!==t&&4!==t||12===e||13===e||14===e?e+" \u0431\u0430\u043b\u043b\u043e\u0432":e+" \u0431\u0430\u043b\u043b\u0430"}(e.content)))},L=function(e,t){return Math.ceil(e/t*100)},D=function(e,t){var a=0;return e.forEach((function(e){a+="max"===t?e.task.points:e.progress})),a},U=function(e){var t=Object(n.useState)(0),a=Object(o.a)(t,2),l=a[0],c=a[1],s=Object(n.useState)(0),i=Object(o.a)(s,2),u=i[0],m=i[1];return Object(n.useEffect)((function(){var t;if(0!==l)t=setInterval((function(){c((function(e){return e-1}))}),1e3);else{var a=new Date;m(I(e.duration)),c(I(e.duration)-function(e,t){var a=new Date(e),n=new Date(t);return Math.round(Math.abs(a-n)/1e3)}(e.startTime,a))}return function(){return clearInterval(t)}}),[l,e.duration,e.startTime]),r.a.createElement("div",{className:""},r.a.createElement(M,{width:L(l,u),color:"#96c7cc",content:A(l)}))},z=function(e){var t=new Date,a=Object(n.useState)(0),l=Object(o.a)(a,2),c=l[0],s=l[1],i=Object(n.useState)(0),u=Object(o.a)(i,2),m=u[0],d=u[1],f=Object(n.useState)(t),b=Object(o.a)(f,2),E=b[0],p=b[1],v=Object(n.useState)("0 00:00:00"),g=Object(o.a)(v,2),h=g[0],k=g[1];return Object(n.useEffect)((function(){var t=e.globalState.contest,a=e.globalState.tasks;p(t.date_start),k(t.duration),s(D(a,"real-time")),d(D(a,"max"))}),[e.score,e.globalState.contest,e.globalState.tasks]),r.a.createElement("div",{className:"points"},r.a.createElement("div",{className:"bars"},r.a.createElement(M,{width:L(c,m),color:"#78d0ff",content:"\u041f\u0440\u043e\u0433\u0440\u0435\u0441\u0441 - "+L(c,m)+"%"}),r.a.createElement(U,{startTime:E,duration:h})),r.a.createElement(T,{content:c}))},B=a(19),H=a(20),J=a(22),P=a(21),R=a(23),W=(a(70),function(e){function t(){return Object(B.a)(this,t),Object(J.a)(this,Object(P.a)(t).apply(this,arguments))}return Object(R.a)(t,e),Object(H.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",{className:"backgroung"},r.a.createElement(F,null))}}]),t}(n.Component)),F=function(e){function t(e){var a;return Object(B.a)(this,t),(a=Object(J.a)(this,Object(P.a)(t).call(this))).state={player:{x:50,y:100,height:100,width:50,action:"walk"}},a}return Object(R.a)(t,e),Object(H.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"walk"})}}]),t}(n.Component),Y=function(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),l=a[0],c=a[1],s=function(){c(!0)},i=function(){c(!1)};return l?r.a.createElement((function(){return r.a.createElement("div",{className:"screen not-panel-align"},r.a.createElement("div",{className:"gray-screen",style:j.lowerElement}),r.a.createElement("div",{className:"msg-box",style:j.upperElement},r.a.createElement("button",{className:"btn not-close-btn",onClick:i}),r.a.createElement("div",{className:"not-text normal-text"},$)),r.a.createElement(W,null))}),null):r.a.createElement((function(){return r.a.createElement("button",{className:"btn not-open-btn",style:j.unabledElement,onClick:s})}),null)},$="\u0437\u0434\u0435\u0441\u044c \u0431\u0443\u0434\u0435\u0442 \u0438\u043b\u0438 \u0438\u0433\u0440\u0430 \u0441 \u043a\u0443\u0431\u0438\u0442\u043e\u043a\u043b\u043e\u0431\u0443\u0441\u0430\u043c\u0438 \u0438\u043b\u0438 \u0442\u0435\u0441\u0442 \u043a\u0442\u043e \u0442\u044b \u0438\u0437 \u043d\u0438\u0445",q=(a(34),function(e){var t=Object(n.useState)("0"),a=Object(o.a)(t,2),l=a[0],c=a[1],s=Object(n.useState)(""),i=Object(o.a)(s,2),u=i[0],m=i[1],d=Object(n.useState)("right"),f=Object(o.a)(d,2),b=f[0],E=f[1];return Object(n.useEffect)((function(){null===e.error?(c(e.result),m(e.text),E("right")):(c("0"),m(e.error),E("wrong"))}),[e.error,e.text,e.result]),r.a.createElement("tr",{key:e.id},r.a.createElement("td",{className:"data ".concat(b)},w(e.date)+u),r.a.createElement("td",{className:"result"},l+"/"+e.points))}),G=function(e){var t=Object(n.useState)(),a=Object(o.a)(t,2),l=a[0],c=a[1];return Object(n.useEffect)((function(){var t=e.globalState.answers.map((function(t){return t.user_task===e.id?null==t.error?r.a.createElement(q,{key:t.id,text:t.data,date:t.date_send,error:null,result:t.result,points:e.points}):r.a.createElement(q,{key:t.id,text:null,date:t.date_send,error:t.error,result:t.result,points:e.points}):console.log(!1)}));c(t)}),[e.id,e.points,e.globalState.answers]),r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("table",{className:"option-text-m"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,"\u041f\u043e\u043f\u044b\u0442\u043a\u0438"),r.a.createElement("th",null,"\u0411\u0430\u043b\u043b\u044b")),l)))},K=function(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),l=a[0],c=a[1];return Object(n.useEffect)((function(){console.log(e),c(e.points)}),[e.points]),r.a.createElement("div",null,r.a.createElement("div",{className:"heading2 title"},e.task.title),r.a.createElement("div",{className:"normal-text task"},e.task.text),r.a.createElement(G,{id:e.task.id,points:l,globalState:e.globalState}))},Q=function(e){return Object(n.useEffect)((function(){console.log(e)}),[]),r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"heading2 title"},e.title),r.a.createElement("div",{className:"normal-text"},e.text))},V=function(e){return e.globalState.tasks.map((function(t){return 1===t.task.task_type?r.a.createElement(i.b,{exact:!0,path:"/0/task/"+t.task.id,render:function(){return r.a.createElement(K,{points:t.task.points,task:t.task,globalState:e.globalState})}}):r.a.createElement(i.b,{exact:!0,path:"/0/info/"+t.task.id,render:function(){return r.a.createElement(Q,{title:t.task.title,text:t.task.text})}})}))},X=(a(71),function(e){return Object(n.useEffect)((function(){}),[e.globalState.isLoaded]),r.a.createElement("div",null,e.globalState.isLoaded?r.a.createElement(i.a,{to:"/0/task/2",from:"/0/loader"}):r.a.createElement(Z,null))}),Z=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"item-1"},r.a.createElement("div",null)),r.a.createElement("div",{className:"item-2"},r.a.createElement("div",null)),r.a.createElement("div",{className:"item-3"},r.a.createElement("div",null)),r.a.createElement("div",{className:"item-4"},r.a.createElement("div",null)),r.a.createElement("div",{className:"item-5"},r.a.createElement("div",null)),r.a.createElement("div",{className:"item-6"},r.a.createElement("div",null)),r.a.createElement("div",{className:"item-7"},r.a.createElement("div",null)),r.a.createElement("div",{className:"item-8"},r.a.createElement("div",null)),r.a.createElement("div",{className:"item-9"},r.a.createElement("div",null)))},ee=function(e){return Object(n.useEffect)((function(){e.globalState.isAuth&&(e.globalState.isLoaded||te(e),setInterval((function(){ae(e),console.log("rerender")}),1e4),e.globalActions.setIsUpdated(!1),console.log(e.globalState.contest,e.globalState.tasks,e.globalState.answers,e.globalState.notifications))}),[e.globalActions,e.globalState.isUpdated,e.globalState.isLoaded,e.globalState.isAuth]),r.a.createElement("div",null,e.globalState.isLoaded?r.a.createElement("div",null,r.a.createElement(N,{globalState:e.globalState}),r.a.createElement(_,{globalState:e.globalState}),r.a.createElement(Y,null),r.a.createElement("div",{className:"content main"},r.a.createElement(z,{globalState:e.globalState}),r.a.createElement(V,{tasks:e.globalState.tasks,globalState:e.globalState}))):r.a.createElement(X,{globalState:e.globalState}))},te=function(){var e=Object(d.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.globalActions.updateContest().then((function(e){return e})),n=t.globalActions.updateTasks().then((function(e){return e})),Promise.all([a,n]).then((function(e){console.log(e),e[0]&&e[1]&&t.globalActions.setIsLoaded(!0)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ae=function(){var e=Object(d.a)(m.a.mark((function e(t){var a,n,r,l;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.globalActions.updateContest().then((function(e){return e})),n=t.globalActions.updateTasks().then((function(e){return e})),r=t.globalActions.updateAnswers().then((function(e){return e})),l=t.globalActions.updateNotifications().then((function(e){return e})),Promise.all([a,n,r,l]).then((function(e){console.log(e),e[0]&&e[1]&&e[2]&&e[3]&&t.globalActions.setIsUpdated(!0)}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ne=function(){return r.a.createElement("header",null,r.a.createElement("div",{className:"logo"}))};var re=function(){return r.a.createElement("footer",null)},le=function(){var e=h(),t=Object(o.a)(e,2),a=t[0],n=t[1];return r.a.createElement("div",{className:"App"},r.a.createElement(ne,null),r.a.createElement("div",{className:"content-page"},r.a.createElement(s.a,null,r.a.createElement(i.a,{to:"/auth",from:"/alt_nti"}),r.a.createElement(i.b,{path:"/0/loader",render:function(){return r.a.createElement(X,{globalState:a,globalActions:n})}}),r.a.createElement(i.b,{path:"/auth",render:function(){return r.a.createElement(k,{isAuth:a.isAuth,globalActions:n})}}),r.a.createElement(i.b,{path:"/0",render:function(){return r.a.createElement(ee,{globalState:a,globalActions:n})}}),r.a.createElement(i.b,{path:"/game",render:function(){return r.a.createElement(W,null)}}))),r.a.createElement(re,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(le,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.ff31f710.chunk.js.map