(this["webpackJsonpmost-popular-movies"]=this["webpackJsonpmost-popular-movies"]||[]).push([[0],{53:function(e,t,a){},75:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),c=a(18),s=a.n(c),i=(a(53),a(20)),j=a(8),l=a(88),o=a(84),d=a.p+"static/media/mertkaanerdem.4846f409.jpg",b=a(2);var m=function(){return Object(b.jsx)(l.a,{bg:"dark",variant:"dark",className:"sticky-sm-top",children:Object(b.jsx)(o.a,{children:Object(b.jsxs)(l.a.Brand,{href:"/",className:"text-warning m-auto",children:[Object(b.jsx)("img",{alt:"",src:d,width:"33",height:"33",className:"d-inline-block align-top me-2"}),"ReactMostPopularMovies"]})})})},h=a(85),x=a(86),O=a(87),p=a(89),u=a(90),g=a(14),f=a(46),w=a.n(f),v=Object(r.createContext)(),N=function(e){var t=e.children,a=Object(r.useState)([]),n=Object(g.a)(a,2),c=n[0],s=n[1],i=Object(r.useState)(!0),j=Object(g.a)(i,2),l=j[0],o=j[1];Object(r.useEffect)((function(){w.a.get("https://imdb-api.com/en/API/MostPopularMovies/k_9jopu1jg").then((function(e){return s(e.data.items)})).catch((function(e){return alert(e)})).finally((function(){return o(!1)}))}),[]);var d={movies:c,isLoading:l};return Object(b.jsx)(v.Provider,{value:d,children:t})},k=function(){return Object(r.useContext)(v)};a(75);var y=function(){var e=k(),t=e.movies,a=e.isLoading;return Object(b.jsx)("div",{class:"divContainer",children:Object(b.jsxs)(o.a,{className:"App mt-2",children:[a&&Object(b.jsx)(h.a,{animation:"grow",variant:"warning",className:"spinner"}),Object(b.jsx)(x.a,{xs:1,md:3,xl:4,className:"g-4",children:t.map((function(e){return Object(b.jsx)(O.a,{className:"text-center",children:Object(b.jsxs)(p.a,{style:{margin:"0 auto"},className:"shadow relative carding",children:[Object(b.jsx)(p.a.Img,{className:"px-4 pt-2",variant:"top",src:e.image,alt:e.title}),Object(b.jsxs)(p.a.Body,{children:[Object(b.jsxs)(O.a,{className:"title",children:[Object(b.jsx)(p.a.Title,{children:e.title}),e.imDbRating&&Object(b.jsx)("span",{className:"rating bg-warning rounded-circle p-2 me-1",children:e.imDbRating}),Object(b.jsx)(p.a.Subtitle,{children:Object(b.jsx)("span",{className:"year bg-warning  py-2 rounded-end",children:e.year})})]}),Object(b.jsx)(p.a.Text,{className:"crew text-center p-2",children:e.crew.split(",").join(" ~ ")}),Object(b.jsx)(i.b,{to:"/".concat(e.id),children:Object(b.jsx)(u.a,{className:"button",variant:"primary",children:"Go To The Film's Page"})})]})]})},e.id)}))})]})})};a(79);var M=function(){var e=Object(j.f)().id,t=k(),a=t.movies,r=t.isLoading,n=a.filter((function(t){return t.id===e}));return Object(b.jsxs)(o.a,{className:"App mt-2",children:[r&&Object(b.jsx)(h.a,{animation:"grow",variant:"warning",className:"spinner"}),Object(b.jsx)(x.a,{xs:1,className:"g-4",children:n.map((function(e){return Object(b.jsx)(O.a,{className:"text-center",children:Object(b.jsxs)(p.a,{style:{width:"22vw",margin:"0 auto"},className:"shadow relative",children:[Object(b.jsx)(p.a.Img,{className:"px-4 pt-2",variant:"top",src:e.image,alt:e.title}),Object(b.jsxs)(p.a.Body,{children:[Object(b.jsxs)(O.a,{className:"title",children:[Object(b.jsx)(p.a.Title,{children:e.title}),e.imDbRating&&Object(b.jsx)("span",{className:"rating bg-warning rounded-circle p-2 me-1",children:e.imDbRating}),Object(b.jsx)(p.a.Subtitle,{children:Object(b.jsx)("span",{className:"year bg-warning  py-2 rounded-end",children:e.year})})]}),Object(b.jsx)(p.a.Text,{className:"crew text-center p-2",children:e.crew.split(",").join(" ~ ")}),Object(b.jsx)(i.b,{to:"/",children:Object(b.jsx)("div",{className:"d-grid ",children:Object(b.jsx)(u.a,{variant:"primary",children:"Go To Home Page"})})})]})]})},e.id)}))})]})},_=a(33),T=a(19);a(80);var z=function(){var e=k().isLoading;return Object(b.jsxs)(p.a,{className:"text-center",children:[e&&Object(b.jsx)(h.a,{animation:"grow",variant:"warning",className:"spinner"}),Object(b.jsxs)(p.a.Body,{children:[Object(b.jsx)("a",{href:"https://www.linkedin.com/in/mertkaanerdem",target:"_blank",rel:"noreferrer",children:Object(b.jsx)(_.b,{size:"30"})}),Object(b.jsx)("a",{href:"https://github.com/mertkaanerdem",target:"_blank",rel:"noreferrer",children:Object(b.jsx)(T.b,{size:"30"})}),Object(b.jsx)("a",{href:"https://www.hackerrank.com/mertkaanerdem",target:"_blank",rel:"noreferrer",children:Object(b.jsx)(T.c,{size:"30"})}),Object(b.jsx)("a",{href:"https://mertkaanerdem.medium.com/",target:"_blank",rel:"noreferrer",children:Object(b.jsx)(T.d,{size:"30"})}),Object(b.jsx)("a",{href:"https://codepen.io/mertkaanerdem",target:"_blank",rel:"noreferrer",children:Object(b.jsx)(T.a,{size:"30"})}),Object(b.jsx)("a",{href:"https://www.instagram.com/mertkaanerdem",target:"_blank",rel:"noreferrer",children:Object(b.jsx)(_.a,{size:"30"})}),Object(b.jsx)("a",{href:"https://www.twitter.com/mertkaanerdem",target:"_blank",rel:"noreferrer",children:Object(b.jsx)(T.f,{size:"30"})}),Object(b.jsx)("a",{href:"https://www.youtube.com/channel/UCUw2YmBMUyh45dKYZ11Taog",target:"_blank",rel:"noreferrer",children:Object(b.jsx)(T.g,{size:"30"})}),Object(b.jsx)("a",{href:"https://open.spotify.com/artist/2NGfe9lWQSahIJaLKe5e8J?si=EM5LaPM3RZ-pF_ccM0UoLw",target:"_blank",rel:"noreferrer",children:Object(b.jsx)(T.e,{size:"30"})})]}),Object(b.jsx)(p.a.Footer,{className:"text-muted",children:"M. Mertkaan Erdem"})]})};var L=function(){return Object(b.jsx)(N,{children:Object(b.jsxs)(i.a,{children:[Object(b.jsx)(m,{}),Object(b.jsxs)(j.c,{children:[Object(b.jsx)(j.a,{path:"/",component:y,exact:!0}),Object(b.jsx)(j.a,{path:"/:id",component:M})]}),Object(b.jsx)(z,{})]})})},P=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,91)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),r(e),n(e),c(e),s(e)}))};a(81);s.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(L,{})}),document.getElementById("root")),P()}},[[82,1,2]]]);
//# sourceMappingURL=main.4603133f.chunk.js.map