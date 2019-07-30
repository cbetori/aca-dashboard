(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{284:function(e,t,n){e.exports=n(532)},289:function(e,t,n){},531:function(e,t,n){},532:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(9),o=n.n(l);n(289),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=n(71),c=n(72),s=n(78),u=n(73),m=n(79),d=n(261),p=n(50),f=n(535),E=n(84),h=n(28),y=n(32),v=n(537),b=n(539),D=n(18);var O=function(e){var t=e.investments.length,n=e.investments.reduce(function(e,t){return e+t.Gross_Capital},0),a=e.investments.reduce(function(e,t){return e+t.Net_Capital},0);return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{span:4},r.a.createElement(v.a,null,r.a.createElement(b.a,{title:"Current Investments",value:t,precision:0,valueStyle:{color:"#3f8600"},prefix:r.a.createElement(D.a,{type:"user"}),suffix:""}))),r.a.createElement(y.a,{span:5},r.a.createElement(v.a,null,r.a.createElement(b.a,{title:"Total Gross Capital",value:n,precision:0,valueStyle:{color:"#3f8600"},prefix:"$",suffix:""}))),r.a.createElement(y.a,{span:5},r.a.createElement(v.a,null,r.a.createElement(b.a,{title:"Total Net Capital",value:a,precision:0,valueStyle:{color:"#3f8600"},prefix:"$",suffix:""}))))};var g=Object(h.b)(function(e){return{investments:e.investments}})(O);var S=function(e){var t=e.distributions.reduce(function(e,t){return e+t.CF_Amount},0);return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{span:5},r.a.createElement(v.a,null,r.a.createElement(b.a,{title:"Total Distributions Paid",precision:0,valueStyle:{color:"#3f8600"},prefix:"$",suffix:"",value:t}))))},_=n(24),C=n(48),k=n.n(C);var I=function(e){var t=e.distributions.map(function(e){return k()(e.CF_Date).format("MM/YY")}).filter(function(e,t,n){return n.indexOf(e)===t});return r.a.createElement("div",null,r.a.createElement("h3",null,"Distribution History"),r.a.createElement(_.b,{width:1050,height:450,data:function(){var n=[];t=t.sort();for(var a=0;a<t.length;a++){for(var r=0,l=0,o=0,i=0,c=0;c<e.distributions.length>0;c++)if(t[a]===k()(e.distributions[c].CF_Date).format("MM/YY"))switch(e.distributions[c].Code_Name){case"Special Distribution":r+=Math.round(e.distributions[c].CF_Amount);break;case"Gross Distribution":l+=Math.round(e.distributions[c].CF_Amount);break;case"Tax Distribution":o+=Math.round(e.distributions[c].CF_Amount);break;case"Composite Tax Distro":i+=Math.round(e.distributions[c].CF_Amount)}n.push({Spec_Distro:r,Gross_Distro:l,Tax_Distro:o,Comp_Distro:i,CF_Date:t[a]})}return n}(),margin:{top:10,right:50,left:0,bottom:0}},r.a.createElement("defs",null,r.a.createElement("linearGradient",{id:"colorSD",x1:"0",y1:"0",x2:"0",y2:"1"},r.a.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),r.a.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),r.a.createElement("linearGradient",{id:"colorGD",x1:"0",y1:"0",x2:"0",y2:"1"},r.a.createElement("stop",{offset:"5%",stopColor:"#82ca9d",stopOpacity:.8}),r.a.createElement("stop",{offset:"95%",stopColor:"#82ca9d",stopOpacity:0})),r.a.createElement("linearGradient",{id:"colorTD",x1:"0",y1:"0",x2:"0",y2:"1"},r.a.createElement("stop",{offset:"5%",stopColor:"#8dd1e1",stopOpacity:.8}),r.a.createElement("stop",{offset:"95%",stopColor:"#8dd1e1",stopOpacity:0})),r.a.createElement("linearGradient",{id:"colorCD",x1:"0",y1:"0",x2:"0",y2:"1"},r.a.createElement("stop",{offset:"5%",stopColor:"#a4de6b",stopOpacity:.8}),r.a.createElement("stop",{offset:"95%",stopColor:"#a4de6b",stopOpacity:0}))),r.a.createElement(_.i,{dataKey:"CF_Date"}),r.a.createElement(_.j,{dataKey:"Spec_Distro"}),r.a.createElement(_.c,{strokeDasharray:"3 3"}),r.a.createElement(_.h,null),r.a.createElement(_.a,{type:"monotone",dataKey:"Spec_Distro",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorSD)"}),r.a.createElement(_.a,{type:"monotone",dataKey:"Gross_Distro",stroke:"#82ca9d",fillOpacity:1,fill:"url(#colorGD)"}),r.a.createElement(_.a,{type:"monotone",dataKey:"Tax_Distro",stroke:"#8dd1e1",fillOpacity:1,fill:"url(#colorTD)"}),r.a.createElement(_.a,{type:"monotone",dataKey:"Comp_Distro",stroke:"#a4de6b",fillOpacity:1,fill:"url(#colorCD)"})))};var x=Object(h.b)(function(e){return{distributions:e.distributions}}),F=x(S),j=x(I);var w=function(){return r.a.createElement("div",{style:{background:"#ECECEC",padding:"50px"}},r.a.createElement(E.a,{gutter:16},r.a.createElement(g,null),r.a.createElement(F,null)))};var T=function(e){var t=["#0088FE","#00C49F","#FFBB28","#FF8042"];return r.a.createElement("div",null,r.a.createElement("h3",null,"Active Funds Size"),r.a.createElement(_.g,{width:500,height:500},r.a.createElement(_.f,{data:e.fundsSize,dataKey:"sum_of_gross_capital",nameKey:"Fund_ID",label:!0,legendType:"square",fill:"#000"},e.fundsSize.map(function(e,n){return r.a.createElement(_.d,{key:"cell-".concat(n),fill:t[n%t.length]})})),r.a.createElement(_.e,null)))};var N=Object(h.b)(function(e){return{fundsSize:e.fundsSize}})(T);var A=function(e){return r.a.createElement("div",null,r.a.createElement("p",{className:"App-intro"},e.funds.map(function(e,t){return r.a.createElement("li",{key:t},"  ",e.Fund_ID,", ",e.Feeder," ")})))},M=n(536);var G=function(e){console.log(e);var t=e.funds.map(function(e){return e.Fund_ID}).filter(function(e,t,n){return n.indexOf(e)===t});return r.a.createElement("div",null,r.a.createElement(M.a,{header:r.a.createElement("div",null,"Fund List"),bordered:!0,dataSource:t,renderItem:function(e){return r.a.createElement(M.a.Item,null," ",e)}}))};var z=Object(h.b)(function(e){return{funds:e.funds}}),L=(z(A),z(G));var U=function(e){return console.log(e),r.a.createElement(f.a,null,r.a.createElement(w,null),r.a.createElement("div",{className:"container"},r.a.createElement(N,null),r.a.createElement(j,null)),r.a.createElement(L,null))},K=(n(529),n(538)),W=f.a.Header,H=K.b.SubMenu,B=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={current:"mail"},n.handleClick=function(e){console.log("click ",e),n.setState({current:e.key})},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(W,{style:{background:"#fff",padding:0}},r.a.createElement(K.b,{style:{maxHeight:65,display:"flex",lineHeight:"64px"},onClick:this.handleClick,selectedKeys:[this.state.current],mode:"horizontal"},r.a.createElement(K.b.Item,{key:"logo",style:{fontWeight:"bolder",fontSize:26}},r.a.createElement(D.a,{type:"code",style:{fontSize:22}}),"Dashboard"),r.a.createElement(K.b.Item,{key:"app"},r.a.createElement(D.a,{type:"appstore"}),"Navigation One"),r.a.createElement(H,{style:{position:"fixed",right:0},title:r.a.createElement("span",{className:"submenu-title-wrapper"},r.a.createElement(D.a,{type:"user"}),"User")},r.a.createElement(K.b.ItemGroup,{title:"General"},r.a.createElement(K.b.Item,{key:"setting:1"},"System Settings"),r.a.createElement(K.b.Item,{key:"setting:2"},"Theme")),r.a.createElement(K.b.ItemGroup,{title:"User"},r.a.createElement(K.b.Item,{key:"setting:3"},"Settings"),r.a.createElement(K.b.Item,{key:"setting:4"},"Log Out")))))}}]),t}(r.a.Component),P=f.a.Sider,R=K.b.SubMenu,V=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={collapsed:!1,navWidth:200},n.onCollapse=function(e){console.log(e),n.setState({collapsed:e}),200===n.state.navWidth?n.setState({navWidth:80}):n.setState({navWidth:200})},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(f.a,{style:{maxWidth:this.state.navWidth,minHeight:"100vh"}},r.a.createElement(P,{collapsible:!0,collapsed:this.state.collapsed,onCollapse:this.onCollapse},r.a.createElement("div",{className:"logo"}),r.a.createElement(K.b,{theme:"dark",defaultSelectedKeys:["1"],mode:"inline"},r.a.createElement(K.b.Item,{key:"1"},r.a.createElement(D.a,{type:"pie-chart"}),r.a.createElement("span",null,"Home")),r.a.createElement(K.b.Item,{key:"2"},r.a.createElement(D.a,{type:"desktop"}),r.a.createElement("span",null,"Cashflows")),r.a.createElement(R,{key:"sub1",title:r.a.createElement("span",null,r.a.createElement(D.a,{type:"user"}),r.a.createElement("span",null,"Investors"))},r.a.createElement(K.b.Item,{key:"3"},"Distributions"),r.a.createElement(K.b.Item,{key:"4"},"Transfer"),r.a.createElement(K.b.Item,{key:"5"},"Upload")),r.a.createElement(R,{key:"sub2",title:r.a.createElement("span",null,r.a.createElement(D.a,{type:"team"}),r.a.createElement("span",null,"Properties"))},r.a.createElement(K.b.Item,{key:"6"},"Pipeline"),r.a.createElement(K.b.Item,{key:"8"},"Performance")),r.a.createElement(K.b.Item,{key:"9"},r.a.createElement(D.a,{type:"file"}),r.a.createElement("span",null,"Settings")))))}}]),t}(r.a.Component),X=f.a.Content,Y=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.loadFunds(),this.props.loadFundsSize(),this.props.loadInvestments(),this.props.loadDistributions()}},{key:"render",value:function(){return r.a.createElement(f.a,{style:{minHeight:"100vh"}},r.a.createElement(B,null),r.a.createElement("div",{id:"container",style:{display:"flex"}},r.a.createElement(V,null),r.a.createElement(d.a,null,r.a.createElement(p.c,null,r.a.createElement(X,{style:{marginLeft:10}},r.a.createElement(p.a,{path:"/",exact:!0,component:U}),r.a.createElement(p.a,{path:"/funds",component:L}))))))}}]),t}(a.Component);n(531);var $=Object(h.b)(null,function(e){return{loadFunds:function(){e(function(e){fetch("http://localhost:3001/funds").then(function(e){return console.log(e),e.json()}).then(function(t){e(function(e){return{type:"FUNDS_LOADED",value:e}}(t))})})},loadFundsSize:function(){e(function(e){fetch("http://localhost:3001/funds-size").then(function(e){return e.json()}).then(function(t){e(function(e){return{type:"FUNDS_SIZE_LOADED",value:e}}(t))})})},loadInvestments:function(){e(function(e){fetch("http://localhost:3001/investments").then(function(e){return e.json()}).then(function(t){e(function(e){return{type:"INVESTMENTS_LOADED",value:e}}(t))})})},loadDistributions:function(){e(function(e){fetch("http://localhost:3001/cashflows/distributions").then(function(e){return e.json()}).then(function(t){e(function(e){return{type:"DISTRIBUTIONS_LOADED",value:e}}(t))})})}}})(Y),J=n(47);var Z=Object(J.c)({funds:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"FUNDS_LOADED"===t.type?t.value:e},fundsSize:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"FUNDS_SIZE_LOADED"===t.type?t.value:e},investments:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"INVESTMENTS_LOADED"===t.type?t.value:e},distributions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"DISTRIBUTIONS_LOADED"===t.type?t.value:e}}),q=n(262),Q=("object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):J.d)(Object(J.a)(q.a)),ee=Object(J.e)(Z,{funds:[],fundsSize:[],investments:[],distributions:[]},Q);o.a.render(r.a.createElement(h.a,{store:ee},r.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[284,1,2]]]);
//# sourceMappingURL=main.a1ddb70e.chunk.js.map