"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[672],{672:function(e,t,n){n.r(t),n.d(t,{default:function(){return M}});var r,a=n(861),i=n(439),s=n(757),c=n.n(s),u=n(168),o=n(87),h=n(689),l="MoviesList_list__0Owr9",p="MoviesList_list__title__R5pRk",f="MoviesList_title__PB2c8",I="MoviesList_page__title__FM0IY",d=n(978),m=n(184),g=(0,d.ZP)(o.OL)(r||(r=(0,u.Z)(["\n  display: flex;\n  color: black;\n  gap: 20px;\n  text-decoration: none;\n"]))),Y=function(e){var t=e.movies,n=(0,h.TH)();return(0,m.jsxs)("div",{children:[(0,m.jsx)("h1",{className:I,children:"Trending today"}),(0,m.jsx)("ul",{className:l,children:t.map((function(e){var t=e.id,r=e.poster_path,a=e.title;return(0,m.jsx)("li",{className:p,children:(0,m.jsxs)(g,{to:"movies/".concat(t),state:{from:n},children:[(0,m.jsx)("img",{src:r?"https://image.tmdb.org/t/p/w500".concat(r):"https://cdn4.iconfinder.com/data/icons/ui-beast-4/32/Ui-12-512.png",alt:a,width:"40"}),(0,m.jsx)("h3",{className:f,children:a})]})},t)}))})]})},v=n(791),J=n(565);function M(){var e=(0,v.useState)([]),t=(0,i.Z)(e,2),n=t[0],r=t[1],s=(0,v.useState)(!1),u=(0,i.Z)(s,2),o=u[0],h=u[1],l=(0,v.useState)(null),p=(0,i.Z)(l,2),f=p[0],I=p[1];return(0,v.useEffect)((function(){var e=new AbortController;function t(){return(t=(0,a.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,h(!0),I(!1),t.next=5,(0,J.XD)(e.signal);case 5:n=t.sent,r(n),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),I(!0);case 12:return t.prev=12,h(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,9,12,15]])})))).apply(this,arguments)}return function(){t.apply(this,arguments)}(),function(){return e.abort()}}),[]),(0,m.jsxs)("div",{children:[f&&(0,m.jsx)("p",{children:"Sorry, something went wrong! Try reloading the page!"}),o&&(0,m.jsx)("b",{children:"Loading data, please wait..."}),!o&&n.length>0&&(0,m.jsx)(Y,{movies:n})]})}},565:function(e,t,n){n.d(t,{BF:function(){return o},LP:function(){return h},SY:function(){return u},XD:function(){return c},oi:function(){return l}});var r=n(861),a=n(757),i=n.n(a),s=n(340);s.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDU5N2Y1ODQ4MGVlMmI1NGJkMTE2YzU5YjNmYmEwYSIsInN1YiI6IjY1M2I3M2M3ZTg5NGE2MDBmZjE1ZTgxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PATEXDjAXr8FrgY0sSY9KkfMU7g5VhiKfIkHgIvk9lY"},signal:t},e.next=3,s.Z.get("trending/movie/day?language=en-US",n);case 3:return r=e.sent,e.abrupt("return",r.data.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"GET",params:{language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDU5N2Y1ODQ4MGVlMmI1NGJkMTE2YzU5YjNmYmEwYSIsInN1YiI6IjY1M2I3M2M3ZTg5NGE2MDBmZjE1ZTgxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PATEXDjAXr8FrgY0sSY9KkfMU7g5VhiKfIkHgIvk9lY"}},e.next=3,s.Z.get("movie/".concat(t),n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"GET",params:{language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDU5N2Y1ODQ4MGVlMmI1NGJkMTE2YzU5YjNmYmEwYSIsInN1YiI6IjY1M2I3M2M3ZTg5NGE2MDBmZjE1ZTgxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PATEXDjAXr8FrgY0sSY9KkfMU7g5VhiKfIkHgIvk9lY"}},e.next=3,s.Z.get("movie/".concat(t,"/credits"),n);case 3:return r=e.sent,e.abrupt("return",r.data.cast);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"GET",params:{language:"en-US",page:"1"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDU5N2Y1ODQ4MGVlMmI1NGJkMTE2YzU5YjNmYmEwYSIsInN1YiI6IjY1M2I3M2M3ZTg5NGE2MDBmZjE1ZTgxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PATEXDjAXr8FrgY0sSY9KkfMU7g5VhiKfIkHgIvk9lY"}},e.next=3,s.Z.get("movie/".concat(t,"/reviews"),n);case 3:return r=e.sent,e.abrupt("return",r.data.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"GET",params:{query:"".concat(t),include_adult:"false",language:"en-US",page:"1"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDU5N2Y1ODQ4MGVlMmI1NGJkMTE2YzU5YjNmYmEwYSIsInN1YiI6IjY1M2I3M2M3ZTg5NGE2MDBmZjE1ZTgxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PATEXDjAXr8FrgY0sSY9KkfMU7g5VhiKfIkHgIvk9lY"}},e.next=3,s.Z.get("search/movie",n);case 3:return r=e.sent,e.abrupt("return",r.data.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=672.358ec183.chunk.js.map