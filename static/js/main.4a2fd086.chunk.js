(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(21)},,,,,function(e,t,n){},function(e,t,n){},,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(5),r=n.n(s),o=n(1),l=(n(12),n(13),n(2)),u=n.n(l),i=(u.a.shape({id:u.a.number.isRequired,userId:u.a.number.isRequired,title:u.a.string.isRequired,body:u.a.string.isRequired,createdAt:u.a.string.isRequired,updatedAt:u.a.string.isRequired}),n(16),n(17),function(e){var t=e.posts,n=e.setId,a=e.selectedPostId;return c.a.createElement("div",{className:"PostsList"},c.a.createElement("h2",null,"Posts:"),c.a.createElement("ul",{className:"PostsList__list"},null!==t&&t.map((function(e){var t=e.id,s=e.title,r=e.userId;return c.a.createElement("li",{className:"PostsList__item",key:t},c.a.createElement("div",null,c.a.createElement("b",null,"[","User #".concat(r),"]:"," "),s),a===t?c.a.createElement("button",{type:"button",className:"PostsList__button button pressed-button",onClick:function(){return n(0)}},"Close"):c.a.createElement("button",{type:"button",className:"PostsList__button button",onClick:function(){return n(t)}},"Open"))}))))});i.defaultProps={posts:[]};var m=n(3),p=n.n(m),d=n(6),f=(n(19),function(){return c.a.createElement("form",{className:"NewCommentForm"},c.a.createElement("div",{className:"form-field"},c.a.createElement("input",{type:"text",name:"name",placeholder:"Your name",className:"NewCommentForm__input"})),c.a.createElement("div",{className:"form-field"},c.a.createElement("input",{type:"text",name:"email",placeholder:"Your email",className:"NewCommentForm__input"})),c.a.createElement("div",{className:"form-field"},c.a.createElement("textarea",{name:"body",placeholder:"Type comment here",className:"NewCommentForm__input"})),c.a.createElement("button",{type:"submit",className:"NewCommentForm__submit-button button"},"Add a comment"))}),E=function(e,t){return fetch("https://mate-api.herokuapp.com"+e,t).then((function(e){if(!e.ok)throw new Error("".concat(e.status," - ").concat(e.statusText));return e.json()})).then((function(e){return e.data}))},b=function(e,t){return t?e.filter((function(e){return e.userId===t})):e},h=function(e){return e&&"number"===typeof e?E("/comments").then((function(t){return t.filter((function(t){return t.postId===e}))})):0},_=function(e){return t="/comments/".concat(e),E(t,{method:"DELETE"});var t},v=(n(20),function(e){var t=e.postId,n=Object(a.useState)({}),s=Object(o.a)(n,2),r=s[0],l=s[1],u=Object(a.useState)([]),i=Object(o.a)(u,2),m=i[0],b=i[1],v=Object(a.useState)(!0),N=Object(o.a)(v,2),y=N[0],P=N[1];Object(a.useEffect)((function(){(function(e){return e?E("/posts/".concat(e)):0})(t).then((function(e){return l(e)})),h(t).then((function(e){return b(e)}))}),[t]);var j=function(){var e=Object(d.a)(p.a.mark((function e(n){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_(n.target.value);case 2:h(t).then((function(e){return b(e)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"PostDetails"},c.a.createElement("h2",null,"Post details:"),c.a.createElement("section",{className:"PostDetails__post"},console.log(33333,r,999),c.a.createElement("p",null,r.title)),c.a.createElement("section",{className:"PostDetails__comments"},m.length>0&&c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{type:"button",className:"button",onClick:function(){P(!y)}},y?"Hide ".concat(m.length," comment").concat(1===m.length?"":"s"):"Show ".concat(m.length," comment").concat(1===m.length?"":"s")),c.a.createElement("ul",{className:"PostDetails__list"},m.map((function(e){return y&&c.a.createElement("li",{className:"PostDetails__list-item",key:e.id},c.a.createElement("button",{type:"button",value:e.id,className:"PostDetails__remove-button button",onClick:j},"X"),c.a.createElement("p",null,e.body))}))))),c.a.createElement("section",null,c.a.createElement("div",{className:"PostDetails__form-wrapper"},c.a.createElement(f,null))))}),N=function(e){var t=e.setSelectedUserId;return c.a.createElement("label",null,"Select a user: \xa0",c.a.createElement("select",{className:"App__user-selector",onChange:function(e){t(e.target.value)}},c.a.createElement("option",{value:"0"},"All users"),c.a.createElement("option",{value:"1"},"Leanne Graham"),c.a.createElement("option",{value:"2"},"Ervin Howell"),c.a.createElement("option",{value:"3"},"Clementine Bauch"),c.a.createElement("option",{value:"4"},"Patricia Lebsack"),c.a.createElement("option",{value:"5"},"Chelsey Dietrich"),c.a.createElement("option",{value:"6"},"Mrs. Dennis Schulist"),c.a.createElement("option",{value:"7"},"Kurtis Weissnat"),c.a.createElement("option",{value:"8"},"Nicholas Runolfsdottir V"),c.a.createElement("option",{value:"9"},"Glenna Reichert"),c.a.createElement("option",{value:"10"},"Galina Lozinska")))},y=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],s=t[1],r=Object(a.useState)(0),l=Object(o.a)(r,2),u=l[0],m=l[1],p=Object(a.useState)(0),d=Object(o.a)(p,2),f=d[0],h=d[1];return Object(a.useEffect)((function(){E("/posts").then((function(e){return s(e)}))}),[]),c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App__header"},c.a.createElement(N,{setSelectedUserId:h,selectedPostId:u})),c.a.createElement("main",{className:"App__main"},c.a.createElement("div",{className:"App__sidebar"},c.a.createElement(i,{posts:b(n,+f),setId:m,selectedPostId:u})),c.a.createElement("div",{className:"App__content"},0!==u&&c.a.createElement(v,{postId:u}))))};r.a.render(c.a.createElement(y,null),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.4a2fd086.chunk.js.map