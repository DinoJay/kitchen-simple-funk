(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{147:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return u});a(33);var n=a(7),r=a.n(n),A=a(0),i=a.n(A),o=a(151),c=a(154),s=a(157),l=a(158),m=a(152),d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata.title,a=this.props.pageContext,n=a.previous,r=a.next;return i.a.createElement(s.a,{location:this.props.location,title:t},i.a.createElement(l.a,{title:e.frontmatter.title,description:e.frontmatter.description||e.excerpt}),i.a.createElement("h1",null,e.frontmatter.title),i.a.createElement("p",{style:Object.assign({},Object(m.b)(-.2),{display:"block",marginBottom:Object(m.a)(1),marginTop:Object(m.a)(-1)})},e.frontmatter.date),i.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}),i.a.createElement(c.a,null),i.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},i.a.createElement("li",null,n&&i.a.createElement(o.a,{to:n.fields.slug,rel:"prev"},"← ",n.frontmatter.title)),i.a.createElement("li",null,r&&i.a.createElement(o.a,{to:r.fields.slug,rel:"next"},r.frontmatter.title," →"))))},t}(i.a.Component);t.default=d;var u="3654438753"},151:function(e,t,a){"use strict";a.d(t,"b",function(){return l});var n=a(0),r=a.n(n),A=a(4),i=a.n(A),o=a(32),c=a.n(o);a.d(t,"a",function(){return c.a});a(153);var s=r.a.createContext({}),l=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},152:function(e,t,a){"use strict";a.d(t,"a",function(){return c}),a.d(t,"b",function(){return s});var n=a(161),r=a.n(n),A=a(162),i=a.n(A);i.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"},"h1, h2, h3, h4, h5":{fontFamily:"'Coming Soon', cursive",color:"#ff6e37"},a:{color:"#ff6e37"},".title-first":{color:"hsla(0,0%,0%,0.85) !important"}}},delete i.a.googleFonts;var o=new r.a(i.a);var c=o.rhythm,s=o.scale},153:function(e,t,a){var n;e.exports=(n=a(155))&&n.default||n},154:function(e,t,a){"use strict";var n=a(156),r=a(0),A=a.n(r),i=a(151);a(160),a(152);var o="4007731267";t.a=function(){return A.a.createElement(i.b,{query:o,render:function(e){var t=e.site.siteMetadata,a=t.author;return t.social,A.a.createElement("div",{className:"border border-black",style:{borderTop:"2px solid black"}},A.a.createElement("div",{className:"flex"},A.a.createElement("div",{className:"unicode text-4xl m-auto"},A.a.createElement("div",{className:"mr-3"},"🎧")),A.a.createElement("div",{className:"italic"},"Our monthly radio show on ",A.a.createElement("a",{title:"XL Air radio",href:"https://www.xlair.be/"},"XL Air Radio")," presented by ",A.a.createElement("strong",null,a),". It's more about music than about cooking! But that doesn't mean we don't have any taste!"," ")))},data:n})}},155:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),A=a(4),i=a.n(A),o=a(54),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},156:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAQADAQAAAAAAAAAAAAAAAAUBAgME/8QAFwEBAAMAAAAAAAAAAAAAAAAAAgABA//aAAwDAQACEAMQAAABtTuWpVlGVPBk0HAFf//EABsQAAICAwEAAAAAAAAAAAAAAAECAxMAESMk/9oACAEBAAEFAnOlgZ7cvIZnEYuxj6ZjxjOh/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAEQEiH/2gAIAQMBAT8BwqOP/8QAGREAAQUAAAAAAAAAAAAAAAAAAAEQEiEx/9oACAECAQE/AbJCY3//xAAgEAABAgUFAAAAAAAAAAAAAAABABECAxASITFBYYGR/9oACAEBAAY/Ai2qYx3A0tPifYlsLBBT8qX3T//EABoQAQADAQEBAAAAAAAAAAAAAAEAESExQVH/2gAIAQEAAT8hRVcZF9KXnJkRaRWsbCd3oQNMD6x1eoRshVw76T//2gAMAwEAAgADAAAAENvoAP/EABkRAAIDAQAAAAAAAAAAAAAAAAABESExUf/aAAgBAwEBPxCEpsj00xYf/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAEQESExUf/aAAgBAgEBPxBNs0X5A9n/xAAeEAEBAQACAQUAAAAAAAAAAAABEQAhMUFRYXGBkf/aAAgBAQABPxClwdnV0whQo4lO/wAzyyrjkGw+cZbkILxecbfXBH7zSeBntAmta2n5uEBbXZ4N/9k=",width:50,height:50,src:"/static/4f27694bd7811d13157e5e488ad64f43/c3bbc/profile-pic.jpg",srcSet:"/static/4f27694bd7811d13157e5e488ad64f43/c3bbc/profile-pic.jpg 1x,\n/static/4f27694bd7811d13157e5e488ad64f43/ac385/profile-pic.jpg 1.5x,\n/static/4f27694bd7811d13157e5e488ad64f43/587d5/profile-pic.jpg 2x,\n/static/4f27694bd7811d13157e5e488ad64f43/20b3c/profile-pic.jpg 3x"}}},site:{siteMetadata:{author:"Faestos & Jan",social:{twitter:"kylemathews"}}}}}},157:function(e,t,a){"use strict";a(33);var n=a(7),r=a.n(n),A=a(0),i=a.n(A),o=a(151),c=(a(154),a(152)),s=(a(145),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t=this.props,a=t.location,n=(t.title,t.children);return e="/"===a.pathname?i.a.createElement("h1",{className:"flex items-center",style:Object.assign({},Object(c.b)(2),{marginBottom:Object(c.a)(1),marginTop:0})},i.a.createElement(o.a,{className:"font-bold",style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},i.a.createElement("span",{className:"",style:{color:"hsla(0,0%,0%,0.85)"}},"Kitchen /"),"  ",i.a.createElement("br",null),i.a.createElement("span",{style:{color:"tomato"}},"Funk",i.a.createElement("img",{className:"m-1 pt-2",src:"icons/pizza-slice.svg",style:{width:"1em",height:"1em",marginBottom:0}}),i.a.createElement("img",{className:"",src:"icons/stickmen.svg",style:{width:"1em",height:"1em",marginBottom:0}}),i.a.createElement("img",{className:"m-1 pt-2",src:"icons/antenna.svg",style:{width:"1em",height:"1em",marginBottom:0}})))):i.a.createElement("h3",{style:{marginTop:0}},i.a.createElement(o.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},i.a.createElement("span",{className:"title-first"},"Kitchen /")," ",i.a.createElement("span",{style:{color:"tomato"}},"Funk"))),i.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(c.a)(24),padding:Object(c.a)(1.5)+" "+Object(c.a)(.75)}},i.a.createElement("header",null,e),i.a.createElement("main",null,n),i.a.createElement("footer",{className:"text-sm italic"},"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"),i.a.createElement("div",{className:""},"Icons made by ",i.a.createElement("a",{href:"https://www.flaticon.com/authors/photo3idea-studio",title:"photo3idea_studio"},"photo3idea_studio")," from ",i.a.createElement("a",{href:"https://www.flaticon.com/",title:"Flaticon"},"www.flaticon.com")," is licensed by ",i.a.createElement("a",{href:"http://creativecommons.org/licenses/by/3.0/",title:"Creative Commons BY 3.0",target:"_blank"},"CC 3.0 BY"))))},t}(i.a.Component));t.a=s},158:function(e,t,a){"use strict";var n=a(159),r=a(0),A=a.n(r),i=a(4),o=a.n(i),c=a(163),s=a.n(c),l=a(151);function m(e){var t=e.description,a=e.lang,r=e.meta,i=e.keywords,o=e.title;return A.a.createElement(l.b,{query:d,render:function(e){var n=t||e.site.siteMetadata.description;return A.a.createElement(s.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:o},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:n}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})},data:n})}m.defaultProps={lang:"en",meta:[],keywords:[]},m.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=m;var d="1025518380"},159:function(e){e.exports={data:{site:{siteMetadata:{title:"Kitchen/Funk",description:"The Blog for our radio show!!!",author:"Faestos & Jan"}}}}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-20cf5eed1afa6a542434.js.map