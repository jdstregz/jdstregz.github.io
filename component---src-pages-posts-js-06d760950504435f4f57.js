(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{ATp1:function(e,t,a){e.exports=a.p+"static/logo-214ebf893e116698cf8aa9631f59929d.png"},Bl7J:function(e,t,a){"use strict";var n=a("f98A"),r=a("q1tI"),l=a.n(r),o=a("Wbzz"),i=a("ATp1"),c=a.n(i),m=function(e){return l.a.createElement("li",{style:{display:"inline-block",marginRight:"1rem",marginBottom:0}},l.a.createElement(o.Link,{style:{color:"#000",backgroundImage:"none"},to:e.to},e.children))},s=function(e){var t=e.siteTitle;return l.a.createElement("header",null,l.a.createElement("div",{style:{margin:"0 auto",maxWidth:800,padding:"1.45rem 1.0875rem",display:"flex",flexDirection:"row",alignItems:"center"}},l.a.createElement("img",{style:{width:30,height:30,objectFit:"contain",marginRight:8,marginBottom:4},src:c.a,alt:"Logo"}),l.a.createElement(o.Link,{to:"/",style:{textShadow:"none",backgroundImage:"none",flex:1}},l.a.createElement("h3",{style:{margin:0}},t)),l.a.createElement(m,{to:"/"},"Home"),l.a.createElement(m,{to:"/posts/"},"Posts"),l.a.createElement(m,{to:"/about/"},"About"),l.a.createElement(m,{to:"/contact/"},"Contact")))};s.defaultProps={siteTitle:""};var u=s;t.a=function(e){var t=e.children,a=n.data;return l.a.createElement(l.a.Fragment,null,l.a.createElement(u,{siteTitle:a.site.siteMetadata.title}),l.a.createElement("div",{style:{margin:"auto",marginLeft:"3rem auto",marginRight:"3rem auto",maxWidth:800,padding:"0 1.0875rem 1.45rem"}},l.a.createElement("main",null,t)))}},L9e7:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return i}));var n=a("q1tI"),r=a.n(n),l=a("Wbzz"),o=a("Bl7J");t.default=function(e){var t=e.data;return console.log(t),r.a.createElement(o.a,null,r.a.createElement("h1",null,"Posts"),r.a.createElement("h4",null,t.allMarkdownRemark.totalCount," Posts"),t.allMarkdownRemark.edges.map((function(e){var t=e.node;return r.a.createElement("div",{key:t.id},r.a.createElement(l.Link,{to:t.fields.slug,style:{textDecoration:"none",color:"inherit"}},r.a.createElement("h3",null,t.frontmatter.title," ",r.a.createElement("span",{style:{color:"#bbb"}},"— ",t.frontmatter.date)),r.a.createElement("p",null,t.excerpt)))})))};var i="1096969533"},f98A:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Stregz.dd"}}}}')}}]);
//# sourceMappingURL=component---src-pages-posts-js-06d760950504435f4f57.js.map