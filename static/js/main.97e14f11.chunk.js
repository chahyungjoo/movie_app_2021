(this.webpackJsonpmovie_app_2021=this.webpackJsonpmovie_app_2021||[]).push([[0],{46:function(e,t,s){},48:function(e,t,s){},49:function(e,t,s){"use strict";s.r(t);var i=s(3),r=s.n(i),a=s(14),n=s.n(a),c=s(5),o=s.n(c),m=s(15),d=s(16),l=s(17),u=s(20),j=s(19),v=s(18),p=s.n(v),h=s(2),b=s.n(h),g=(s(46),s(0));function O(e){e.id;var t=e.year,s=e.title,i=e.summary,r=e.poster,a=e.genres;return Object(g.jsxs)("div",{className:"movie",children:[Object(g.jsx)("img",{src:r,alt:s,title:s}),Object(g.jsxs)("div",{className:"movie__data",children:[Object(g.jsx)("h3",{className:"movie__title",children:s}),Object(g.jsx)("h5",{className:"movie__year",children:t}),Object(g.jsx)("ul",{className:"movie__genres",children:a.map((function(e,t){return Object(g.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(g.jsxs)("p",{className:"movie__sumarry",children:[i.slice(0,180),"..."]})]})]})}O.prototypes={id:b.a.number.isRequired,year:b.a.number.isRequired,title:b.a.string.isRequired,summary:b.a.string.isRequired,poster:b.a.string.isRequired,genres:b.a.arrayOf(b.a.string).isRequired};var _=O,x=(s(48),function(e){Object(u.a)(s,e);var t=Object(j.a)(s);function s(){var e;Object(d.a)(this,s);for(var i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={isLoding:!0,movies:[]},e.getMovies=Object(m.a)(o.a.mark((function t(){var s,i;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json");case 2:s=t.sent,i=s.data.data.movies,e.setState({movies:i,isLoding:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(l.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoding,s=e.movies;return Object(g.jsx)("section",{className:"container",children:t?Object(g.jsx)("div",{className:"loader",children:Object(g.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(g.jsx)("div",{className:"movies",children:s.map((function(e){return Object(g.jsx)(_,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),s}(i.Component));n.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(x,{})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.97e14f11.chunk.js.map