"use strict";(self.webpackChunkmy_react_goit_project=self.webpackChunkmy_react_goit_project||[]).push([[763],{1763:function(e,t,r){r.r(t),r.d(t,{default:function(){return q}});var n=r(9439),a=r(1087),s=r(3433),o=r(2791),c=r(4165),l=r(5861),i=r(1243),u=r(1731),p="https://645639fe5f9a4f23613e11e5.mockapi.io/users";function f(){return(f=(0,l.Z)((0,c.Z)().mark((function e(t,r){var n;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.Z)({method:"get",url:"".concat(p,"/?following=").concat(r),params:{page:t,limit:3}});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),u.ZP.error("Server not response");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function d(){return(d=(0,l.Z)((0,c.Z)().mark((function e(t){var r;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.Z)({method:"get",url:p,params:{page:t,limit:3}});case 3:return r=e.sent,e.abrupt("return",r.data);case 7:e.prev=7,e.t0=e.catch(0),u.ZP.error("Server not response");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function h(e){return _.apply(this,arguments)}function _(){return(_=(0,l.Z)((0,c.Z)().mark((function e(t){var r;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.Z)({method:"get",url:"".concat(p,"/?following=").concat(t)});case 3:return r=e.sent,e.abrupt("return",r.data);case 7:e.prev=7,e.t0=e.catch(0),u.ZP.error("Server not response");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function v(){return(v=(0,l.Z)((0,c.Z)().mark((function e(t,r,n){var a;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.Z)({method:"put",url:"".concat(p,"/").concat(t),data:{followers:r,following:n}});case 3:return a=e.sent,e.abrupt("return",a.data);case 7:e.prev=7,e.t0=e.catch(0),u.ZP.error("Server not response");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var m="User_img__b9-CN",g="User_btn__uRzmL",x="User_text__VgOM5",w="User_list_el__fWUhL",Z="User_img_wrapp__0bkVa",b=r(184);var j=function(e){var t=e.followers,r=e.avatar,a=e.tweets,s=e.following,c=e.id,l=(0,o.useState)(t),i=(0,n.Z)(l,2),p=i[0],f=i[1],d=(0,o.useState)(s),h=(0,n.Z)(d,2),_=h[0],j=h[1],y=(0,o.useState)(!1),N=(0,n.Z)(y,2),C=N[0],L=N[1],k=function(){j(!_),L(!0),f(_?p-1:p+1),_?(0,u.Am)("NOT FOLLOW",{icon:"\ud83d\ude14",style:{color:"#5CD3A8",fontFamily:"Montserrat",width:"196px"}}):(0,u.Am)("FOLLOWING",{icon:"\ud83d\udd25",style:{color:"#5CD3A8",fontFamily:"Montserrat",width:"196px"}})};return(0,o.useEffect)((function(){C&&function(e,t,r){v.apply(this,arguments)}(c,p,_)}),[C,c,p,_]),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("div",{className:Z,children:(0,b.jsx)("img",{className:m,src:r,alt:"avatar"})}),(0,b.jsxs)("ul",{className:x,children:[(0,b.jsx)("li",{className:w,children:(0,b.jsxs)("p",{children:[a," Tweets"]})}),(0,b.jsx)("li",{className:w,children:(0,b.jsxs)("p",{children:[p.toLocaleString("en")," Followers"]})})]}),_?(0,b.jsx)("button",{style:{backgroundColor:"#5CD3A8"},className:g,type:"button",onClick:k,children:"FOLLOWING"}):(0,b.jsx)("button",{style:{backgroundColor:"#EBD8FF"},className:g,type:"button",onClick:k,children:"FOLLOW"})]})},y="UserCard_card__TPGq5",N="UserCard_bgi_wrapp__eVNCU",C="UserCard_logo_wrapp__dHJvP",L="UserCard_border_bottom__e519g",k="UserCard_user_wrapp__T7vDO",U="UserCard_btn__Hr9K+",F=r(3368);var P=function(){var e=(0,F.EQ)(),t=e.users,r=e.setUsers,n=e.query,a=e.page,c=e.setPage,l=e.arrayLangth;return(0,o.useEffect)((function(){"all"===n&&function(e){return d.apply(this,arguments)}(a).then((function(e){return r((function(t){return[].concat((0,s.Z)(t),(0,s.Z)(e))}))})),function(e,t){return f.apply(this,arguments)}(a,n).then((function(e){return r((function(t){return[].concat((0,s.Z)(t),(0,s.Z)(e))}))}))}),[a,n]),console.log("arrayLangth",l),(0,b.jsxs)(b.Fragment,{children:[null===t||void 0===t?void 0:t.map((function(e){var t=e.followers,r=e.id,n=e.avatar,a=e.tweets,s=e.following;return(0,b.jsxs)("div",{className:y,children:[(0,b.jsxs)("div",{className:N,children:[(0,b.jsx)("div",{className:C}),(0,b.jsx)("div",{className:L})]}),(0,b.jsx)("div",{className:k,children:(0,b.jsx)(j,{followers:t,avatar:n,following:s,tweets:a,id:r})})]},r)})),t.length!==l.length&&(0,b.jsx)("button",{className:U,type:"button",onClick:function(){c((function(e){return e+1})),setTimeout((function(){window.scrollBy({top:500,behavior:"smooth"})}),300),console.log("first",t.length),console.log("first",l.length)},children:"Load More"})]})},O=r(1692),S=r(1771),E=r(1890),A=r(5291),T=r(3166),W=r(1462),D=r(974),M="Filter_filter_form__hP1mt";var V=function(){var e=(0,F.EQ)(),t=e.setQuery,r=e.setPage,n=(e.arrayLangth,e.query),a=e.setUsers,s=e.setArrayLangth;return(0,o.useEffect)((function(){h("").then((function(e){return s(e)}))}),[]),(0,b.jsxs)(E.Z,{className:M,children:[(0,b.jsx)(A.Z,{id:"radio-buttons-group-label",children:"Tweets"}),(0,b.jsxs)(T.Z,{row:!0,onChange:function(e){t(e.target.value),a([]),s([]),r(1),"all"===n&&h("").then((function(e){return s(e)})),h(n).then((function(e){return s(e)}))},"aria-labelledby":"radio-buttons-group-label",defaultValue:"all",name:"radio-buttons-group",children:[(0,b.jsx)(W.Z,{value:"all",control:(0,b.jsx)(D.Z,{}),label:"All"}),(0,b.jsx)(W.Z,{value:"false",control:(0,b.jsx)(D.Z,{}),label:"Follow "}),(0,b.jsx)(W.Z,{value:"true",control:(0,b.jsx)(D.Z,{}),label:"Followings "})]})]})};var q=function(){var e=(0,o.useState)(!1),t=(0,n.Z)(e,2),r=t[0],s=t[1];return(0,o.useEffect)((function(){window.scroll({top:0,behavior:"smooth"}),setTimeout((function(){s(!0)}),700)}),[]),r?(0,b.jsxs)("section",{className:O.Z.section,children:[(0,b.jsx)(V,{}),(0,b.jsxs)("div",{className:O.Z.container,children:[(0,b.jsx)(P,{}),(0,b.jsx)(a.rU,{className:O.Z.btn,to:"/",children:"Home"})]})]}):(0,b.jsx)(S.Z,{})}},1692:function(e,t){t.Z={container:"Page_container__sEsi6",section:"Page_section__kkftg",btn:"Page_btn__wC6fK",title:"Page_title__wWxLN",wrapp_title:"Page_wrapp_title__L7nvu"}}}]);
//# sourceMappingURL=763.d89a1066.chunk.js.map