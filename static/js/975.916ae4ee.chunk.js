"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[975],{975:function(e,r,n){n.r(r),n.d(r,{default:function(){return M}});var t,a=n(861),i=n(439),c=n(757),u=n.n(c),s=n(168),o=n(87),h=n(689),l=n(978),f=n(184),p=(0,l.ZP)(o.OL)(t||(t=(0,s.Z)(["\n  color: black;\n\n  &:active {\n    color: orange;\n  }\n"]))),I=function(e){var r=e.movieList,n=(0,h.TH)();return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("hr",{}),r.length>0?(0,f.jsx)("ul",{children:r.map((function(e){var r=e.id,t=e.original_title;return(0,f.jsx)("li",{children:(0,f.jsx)(p,{to:"".concat(r),state:{from:n},children:t})},r)}))}):(0,f.jsx)("p",{children:"Sorry, nothing was found for your search. Try to change the query"})]})},g=n(791),m=n(565),d="Movies_input__text__bf0K-",v="Movies_button__search__N0H0P";function M(){var e,r=(0,g.useState)([]),n=(0,i.Z)(r,2),t=n[0],c=n[1],s=(0,o.lr)(),h=(0,i.Z)(s,2),l=h[0],p=h[1],M=null!==(e=l.get("queryMovie"))&&void 0!==e?e:"",Y=(0,g.useState)(!1),J=(0,i.Z)(Y,2),j=J[0],Z=J[1],y=(0,g.useState)(null),x=(0,i.Z)(y,2),N=x[0],k=x[1];console.log("queryMovie:",M),(0,g.useEffect)((function(){function e(){return(e=(0,a.Z)(u().mark((function e(){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,Z(!0),k(!1),""!==M){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,(0,m.oi)(M);case 7:r=e.sent,c(r),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),k(!0);case 14:return e.prev=14,Z(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,11,14,17]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[M]);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("form",{onSubmit:function(e){e.preventDefault();var r=e.currentTarget,n=r.elements.queryMovie.value;if(""===n)return p({});p({queryMovie:n}),r.reset()},children:[(0,f.jsx)("input",{type:"text",name:"queryMovie",className:d}),(0,f.jsx)("button",{className:v,children:"SEARCH"})]}),N&&(0,f.jsx)("p",{children:"Sorry, something went wrong! Try reloading the page!"}),j&&(0,f.jsx)("b",{children:"Loading movie data, please wait..."}),!j&&M&&(0,f.jsx)(I,{movieList:t})]})}},565:function(e,r,n){n.d(r,{BF:function(){return o},LP:function(){return h},SY:function(){return s},XD:function(){return u},oi:function(){return l}});var t=n(861),a=n(757),i=n.n(a),c=n(340);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u=function(){var e=(0,t.Z)(i().mark((function e(r){var n,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDU5N2Y1ODQ4MGVlMmI1NGJkMTE2YzU5YjNmYmEwYSIsInN1YiI6IjY1M2I3M2M3ZTg5NGE2MDBmZjE1ZTgxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PATEXDjAXr8FrgY0sSY9KkfMU7g5VhiKfIkHgIvk9lY"},signal:r},e.next=3,c.Z.get("trending/movie/day?language=en-US",n);case 3:return t=e.sent,e.abrupt("return",t.data.results);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),s=function(){var e=(0,t.Z)(i().mark((function e(r){var n,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"GET",params:{language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDU5N2Y1ODQ4MGVlMmI1NGJkMTE2YzU5YjNmYmEwYSIsInN1YiI6IjY1M2I3M2M3ZTg5NGE2MDBmZjE1ZTgxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PATEXDjAXr8FrgY0sSY9KkfMU7g5VhiKfIkHgIvk9lY"}},e.next=3,c.Z.get("movie/".concat(r),n);case 3:return t=e.sent,e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),o=function(){var e=(0,t.Z)(i().mark((function e(r){var n,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"GET",params:{language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDU5N2Y1ODQ4MGVlMmI1NGJkMTE2YzU5YjNmYmEwYSIsInN1YiI6IjY1M2I3M2M3ZTg5NGE2MDBmZjE1ZTgxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PATEXDjAXr8FrgY0sSY9KkfMU7g5VhiKfIkHgIvk9lY"}},e.next=3,c.Z.get("movie/".concat(r,"/credits"),n);case 3:return t=e.sent,e.abrupt("return",t.data.cast);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),h=function(){var e=(0,t.Z)(i().mark((function e(r){var n,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"GET",params:{language:"en-US",page:"1"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDU5N2Y1ODQ4MGVlMmI1NGJkMTE2YzU5YjNmYmEwYSIsInN1YiI6IjY1M2I3M2M3ZTg5NGE2MDBmZjE1ZTgxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PATEXDjAXr8FrgY0sSY9KkfMU7g5VhiKfIkHgIvk9lY"}},e.next=3,c.Z.get("movie/".concat(r,"/reviews"),n);case 3:return t=e.sent,e.abrupt("return",t.data.results);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(i().mark((function e(r){var n,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"GET",params:{query:"".concat(r),include_adult:"false",language:"en-US",page:"1"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDU5N2Y1ODQ4MGVlMmI1NGJkMTE2YzU5YjNmYmEwYSIsInN1YiI6IjY1M2I3M2M3ZTg5NGE2MDBmZjE1ZTgxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PATEXDjAXr8FrgY0sSY9KkfMU7g5VhiKfIkHgIvk9lY"}},e.next=3,c.Z.get("search/movie",n);case 3:return t=e.sent,e.abrupt("return",t.data.results);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=975.916ae4ee.chunk.js.map