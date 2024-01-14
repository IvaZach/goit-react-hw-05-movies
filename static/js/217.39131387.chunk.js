"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[217],{217:function(e,n,r){r.r(n),r.d(n,{default:function(){return f}});var t=r(861),a=r(439),i=r(757),c=r.n(i),s=r(184),u=function(e){var n=e.movieCast;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("hr",{}),(0,s.jsx)("ul",{children:n.map((function(e){var n=e.id,r=e.name,t=e.profile_path,a=e.character;return(0,s.jsxs)("li",{children:[(0,s.jsx)("img",{src:t?"https://image.tmdb.org/t/p/w500".concat(t):"https://cdn4.iconfinder.com/data/icons/ui-beast-4/32/Ui-12-512.png",alt:r,width:"100"}),(0,s.jsx)("h4",{children:r}),(0,s.jsx)("h4",{children:a})]},n)}))})]})},o=r(791),h=r(689),p=r(565),f=function(){var e=(0,h.UO)().movieId,n=(0,o.useState)(null),r=(0,a.Z)(n,2),i=r[0],f=r[1],I=(0,o.useState)(!1),l=(0,a.Z)(I,2),m=l[0],d=l[1],g=(0,o.useState)(null),Y=(0,a.Z)(g,2),J=Y[0],j=Y[1];return(0,o.useEffect)((function(){function n(){return(n=(0,t.Z)(c().mark((function n(){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,d(!0),j(!1),n.next=5,(0,p.BF)(e);case 5:r=n.sent,f(r),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),j(!0);case 12:return n.prev=12,d(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,9,12,15]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[e]),(0,s.jsxs)(s.Fragment,{children:[J&&(0,s.jsx)("p",{children:"Sorry, something went wrong! Try reloading the page!"}),m&&(0,s.jsx)("b",{children:"Loading movie data, please wait..."}),!m&&i&&(0,s.jsx)(u,{movieCast:i})]})}},565:function(e,n,r){r.d(n,{BF:function(){return o},LP:function(){return h},SY:function(){return u},XD:function(){return s},oi:function(){return p}});var t=r(861),a=r(757),i=r.n(a),c=r(340);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s=function(){var e=(0,t.Z)(i().mark((function e(n){var r,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDU5N2Y1ODQ4MGVlMmI1NGJkMTE2YzU5YjNmYmEwYSIsInN1YiI6IjY1M2I3M2M3ZTg5NGE2MDBmZjE1ZTgxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PATEXDjAXr8FrgY0sSY9KkfMU7g5VhiKfIkHgIvk9lY"},signal:n},e.next=3,c.Z.get("trending/movie/day?language=en-US",r);case 3:return t=e.sent,e.abrupt("return",t.data.results);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),u=function(){var e=(0,t.Z)(i().mark((function e(n){var r,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:"GET",params:{language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDU5N2Y1ODQ4MGVlMmI1NGJkMTE2YzU5YjNmYmEwYSIsInN1YiI6IjY1M2I3M2M3ZTg5NGE2MDBmZjE1ZTgxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PATEXDjAXr8FrgY0sSY9KkfMU7g5VhiKfIkHgIvk9lY"}},e.next=3,c.Z.get("movie/".concat(n),r);case 3:return t=e.sent,e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),o=function(){var e=(0,t.Z)(i().mark((function e(n){var r,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:"GET",params:{language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDU5N2Y1ODQ4MGVlMmI1NGJkMTE2YzU5YjNmYmEwYSIsInN1YiI6IjY1M2I3M2M3ZTg5NGE2MDBmZjE1ZTgxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PATEXDjAXr8FrgY0sSY9KkfMU7g5VhiKfIkHgIvk9lY"}},e.next=3,c.Z.get("movie/".concat(n,"/credits"),r);case 3:return t=e.sent,e.abrupt("return",t.data.cast);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),h=function(){var e=(0,t.Z)(i().mark((function e(n){var r,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:"GET",params:{language:"en-US",page:"1"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDU5N2Y1ODQ4MGVlMmI1NGJkMTE2YzU5YjNmYmEwYSIsInN1YiI6IjY1M2I3M2M3ZTg5NGE2MDBmZjE1ZTgxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PATEXDjAXr8FrgY0sSY9KkfMU7g5VhiKfIkHgIvk9lY"}},e.next=3,c.Z.get("movie/".concat(n,"/reviews"),r);case 3:return t=e.sent,e.abrupt("return",t.data.results);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(i().mark((function e(n){var r,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:"GET",params:{query:"".concat(n),include_adult:"false",language:"en-US",page:"1"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDU5N2Y1ODQ4MGVlMmI1NGJkMTE2YzU5YjNmYmEwYSIsInN1YiI6IjY1M2I3M2M3ZTg5NGE2MDBmZjE1ZTgxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PATEXDjAXr8FrgY0sSY9KkfMU7g5VhiKfIkHgIvk9lY"}},e.next=3,c.Z.get("search/movie",r);case 3:return t=e.sent,e.abrupt("return",t.data.results);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=217.39131387.chunk.js.map