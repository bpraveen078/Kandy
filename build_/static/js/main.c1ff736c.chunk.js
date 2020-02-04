(this["webpackJsonpkandy-catalogue"]=this["webpackJsonpkandy-catalogue"]||[]).push([[0],{104:function(e,t,n){},131:function(e,t,n){"use strict";n.r(t);var r,a=n(0),o=n.n(a),i=n(10),c=n.n(i),s=(n(74),n(20)),l=n(21),u=n(23),p=n(22),d=n(24),m=n(15),h=(n(104),n(166)),b=n(173),f=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(p.a)(t).call(this,e))).handleChange=function(e){n.validate(e),n.props.onChange(e)&&n.props.onChange(e)},n.validate=function(e){n.setState({isValid:!0}),n.props.required&&""===e.target.value?n.setState({errormessage:"".concat(e.target.placeholder," is required"),isValid:!1}):n.props.minLength&&e.target.value.length<n.props.minLength?n.setState({errormessage:"".concat(e.target.placeholder," lenth should be grater than ").concat(n.props.minLength),isValid:!1}):n.props.maxLength&&e.target.value.length>n.props.maxLength&&n.setState({errormessage:"".concat(e.target.placeholder," lenth should be less than ").concat(n.props.maxLength),isValid:!1})},n.state={errormessage:"",isValid:!0},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.value;return a.createElement("div",null,a.createElement(b.a,{error:!this.state.isValid,name:this.props.name,value:e,label:this.props.label,placeholder:this.props.placeholder,onChange:this.handleChange}),!1===this.state.isValid&&a.createElement("div",null,a.createElement("span",{className:"error-message"},this.state.errormessage," ")))}}]),t}(a.Component),g=n(5),O=o.a.createContext({}),j=Object(g.a)((function(e){return{container:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",height:e.typography.pxToRem(70),backgroundColor:e.palette.common.darkWhite,color:e.palette.common.lightBlack}}}))((function(e){var t=e.contract,n=e.classes;return a.createElement("div",{className:n.container},a.createElement("span",null,"Missing Prop Container for ",t))})),v=function(e,t){return function(n){return function(r){return a.createElement(O.Consumer,null,(function(o){var i=o[e],c=r.instanceName||t;c&&(i=i[c]);return i?a.createElement(i,r,a.createElement(n,r)):a.createElement(j,{contract:e})}))}}};function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(n,!0).forEach((function(t){Object(m.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E,x=v("ILoginPageProps")(r=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(p.a)(t).call(this,e))).handleSubmit=function(e){console.log(e)},n.handleChange=function(e){var t=n.state.login,r=e.target,a=r.name,o=r.value;n.setState({login:y({},t,Object(m.a)({},a,o))})},n.state={isLoading:!1,login:{userName:"",password:""}},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.login,t=this.props.loginSubmit;return a.createElement("div",{style:{marginTop:"155px"}},"Login",a.createElement("form",{name:"loginForm"},a.createElement(f,{onChange:this.handleChange,value:e.userName,required:!0,minLength:4,label:"User Name",name:"userName",placeholder:"User Name",maxLength:20}),a.createElement("br",null),a.createElement(f,{onChange:this.handleChange,value:e.password,required:!0,minLength:4,label:"Password",name:"password",placeholder:"Password",maxLength:10}),a.createElement("br",null),a.createElement(h.a,{variant:"contained",color:"primary",onClick:function(){t(e)}},"Login")))}}]),t}(a.Component))||r,P=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.createElement("div",null,a.createElement("div",null,"jiji"))}}]),t}(a.Component),k=n(31),C=Object(k.a)(),S=n(52),L=n(167),D=n(168),N=n(175),I=n(88),B=n.n(I),R=n(90),T=n.n(R),_=n(89),V=n.n(_),A=n(64),M=n.n(A),G=n(65),U=n.n(G),q=n(51),z=n.n(q),W=n(177),J=n(169),Q=n(170),F=n(165),X=n(171),$=n(172),H=n(178);function K(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?K(n,!0).forEach((function(t){Object(m.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):K(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Z=v("IAppProps")(E=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(p.a)(t).call(this,e))).handleDrawerOpen=function(){n.props.drawerOpen(!0)},n.handleDrawerClose=function(){n.props.drawerOpen(!1)},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e,t,n=this.props,r=n.classes,o=n.theme,i=n.isLoggedin,c=n.isMenuOpen;return a.createElement("div",{className:"App"},a.createElement(S.b,{history:C},a.createElement("div",null,a.createElement(L.a,{position:"fixed",className:z()(r.appBar,Object(m.a)({},r.appBarShift,c))},a.createElement(D.a,{disableGutters:!c},a.createElement(J.a,{color:"inherit","aria-label":"Open drawer",onClick:this.handleDrawerOpen,className:z()(r.menuButton,Object(m.a)({},r.hide,c))},a.createElement(B.a,null)))),i&&a.createElement(N.a,{variant:"permanent",className:z()(r.drawer,(e={},Object(m.a)(e,r.drawerOpen,c),Object(m.a)(e,r.drawerClose,!c),e)),classes:{paper:z()((t={},Object(m.a)(t,r.drawerOpen,c),Object(m.a)(t,r.drawerClose,!c),t))},open:c},a.createElement("div",{className:r.toolbar},a.createElement(J.a,{onClick:this.handleDrawerClose},"rtl"===o.direction?a.createElement(V.a,null):a.createElement(T.a,null))),a.createElement(Q.a,null),a.createElement(F.a,null,["Inbox","Starred","Send email","Drafts"].map((function(e,t){return a.createElement(X.a,{button:!0,key:e},a.createElement($.a,null,t%2===0?a.createElement(M.a,null):a.createElement(U.a,null)),a.createElement(H.a,{primary:e}))}))),a.createElement(Q.a,null),a.createElement(F.a,null,["All mail","Trash","Spam"].map((function(e,t){return a.createElement(X.a,{button:!0,key:e},a.createElement($.a,null,t%2===0?a.createElement(M.a,null):a.createElement(U.a,null)),a.createElement(H.a,{primary:e}))})))),a.createElement("div",null,a.createElement(S.a,{exact:!0,path:"/",component:x}),a.createElement(S.a,{exact:!0,path:"/login",component:x}),a.createElement(S.a,{exact:!0,path:"/dashboard",component:P})))))}}]),t}(a.Component))||E,ee=Object(g.a)((function(e){return Object(W.a)({root:{display:"flex"},appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginLeft:12,marginRight:36},hide:{display:"none"},drawer:{width:240,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:{transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden"},toolbar:Y({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),content:{flexGrow:1}})}),{withTheme:!0})(Z);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var te=n(44),ne=n(33),re=n(94),ae=n(93),oe=n(30),ie=n.n(oe),ce=n(41),se=n(92),le=(n(112),n(59)),ue=function(e,t){le(e,t)},pe=function(){var e=Object(se.a)(ie.a.mark((function e(t,n){var r;return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return{userName:t.userName,password:t.password},ue("id_token","xyz"),e.abrupt("return",{data:{id_token:"xyz",name:"praveen"}});case 7:if(200===(r=e.sent).status){e.next=10;break}return e.abrupt("return",{error:{code:r.status}});case 10:return ue("id_token",r.data.id_token),e.abrupt("return",{data:r.data});case 12:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),de="ERROR",me="LOGIN_REQUEST_START",he="LOGIN_REQUEST",be="LOGIN_SUCCESS",fe=ie.a.mark(je),ge=ie.a.mark(ve),Oe=ie.a.mark(we);function je(e){var t;return ie.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(ce.c)({type:me});case 3:return n.next=5,Object(ce.b)(pe,e.model,"token");case 5:return t=n.sent,n.next=8,Object(ce.c)({type:be,data:t.data});case 8:C.push("dashboard"),n.next=15;break;case 11:return n.prev=11,n.t0=n.catch(0),n.next=15,Object(ce.c)({type:de,error:n.t0});case 15:case"end":return n.stop()}}),fe,null,[[0,11]])}function ve(){return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ce.d)(he,je);case 2:case"end":return e.stop()}}),ge)}function we(){return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ce.a)([ve()]);case 2:case"end":return e.stop()}}),Oe)}var ye,Ee=[we],xe=Object(ae.a)(Ee);n(130);function Pe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ke(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Pe(n,!0).forEach((function(t){Object(m.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Pe(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Ce={loading:!1,data:{},isLoggedin:!1,isMenuOpen:!1,isMenuClose:!1,date:new Date},Se=function(e,t){return ke({},e=e.isLoggedin=!1,{isLoggedin:!1})},Le=(ye={},Object(m.a)(ye,he,Se),Object(m.a)(ye,be,(function(e,t){return ke({},e=e.isLoggedin=!0,{isLoggedin:!0,isMenuOpen:!0})})),Object(m.a)(ye,me,Se),ye),De=Object(ne.c)({LoginReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,t=arguments.length>1?arguments[1]:void 0,n=Le[t.type];return"undefined"===typeof n?e:n(e,t)}}),Ne=Object(re.a)(),Ie=Object(ne.e)(De,Object(ne.a)(Ne));xe.forEach(Ne.run);var Be,Re,Te,_e,Ve,Ae,Me=Ie,Ge=Object(te.b)((function(e){return{state:e}}),null)((Te=Re=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(a)))).loginSubmit=function(e){var t=n.props.dispatch;t&&t({model:e,type:he})},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.load,t=this.loginSubmit;return a.cloneElement(this.props.children,{load:e,loginSubmit:t})}}]),t}(a.PureComponent),Re.defaultProps={dispatch:function(){return new Error("")}},Be=Te))||Be,Ue=Object(te.b)((function(e){return{}}),(function(e){return{drawerOpen:function(t){return e({isMenuOpen:t,type:he})}}}))((Ae=Ve=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.cloneElement(this.props.children,{})}}]),t}(a.PureComponent),Ve.defaultProps={dispatch:function(){return new Error("")}},_e=Ae))||_e;c.a.render(o.a.createElement(te.a,{store:Me},o.a.createElement(O.Provider,{value:{IAppProps:Ue,ILoginPageProps:Ge}},o.a.createElement(ee,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},74:function(e,t,n){},99:function(e,t,n){e.exports=n(131)}},[[99,1,2]]]);
//# sourceMappingURL=main.c1ff736c.chunk.js.map