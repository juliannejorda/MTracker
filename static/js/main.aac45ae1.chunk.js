(this.webpackJsonpmanhwa=this.webpackJsonpmanhwa||[]).push([[0],{151:function(e,n){},160:function(e,n,t){},225:function(e,n,t){},226:function(e,n,t){},259:function(e,n,t){},290:function(e,n){},308:function(e,n,t){},318:function(e,n,t){},319:function(e,n,t){},320:function(e,n,t){},321:function(e,n,t){},323:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),i=t(33),s=t.n(i),r=(t(225),t(226),t(339)),l=t(341),d=t(19),j=t(1),o=Object(d.g)((function(e){return console.log(e),Object(j.jsxs)(r.a,{sticky:"top",bg:"primary",variant:"dark",children:[Object(j.jsx)(r.a.Brand,{href:"#/",children:"MTracker"}),Object(j.jsx)(r.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(j.jsx)(r.a.Collapse,{id:"basic-navbar-nav",children:Object(j.jsxs)(l.a,{className:"mr-auto",children:[Object(j.jsx)(l.a.Link,{href:"#/",children:"Home"}),Object(j.jsx)(l.a.Link,{href:"#/Info",children:"Info"}),Object(j.jsx)(l.a.Link,{href:"#/ReadingList",children:"Reading List"})]})})]})})),h=t(67),b=t(68),m=t(82),u=t(79),g=t(337),O=t(203),x=Object(O.a)(),p=t(83),v=t.n(p),f=t(110),N=(t(151),t(111)),y=t.n(N),M=t(47),C=t(342),R=t(340),k=(t(160),t(161),t(69)),A=t(70),S=t.n(A),F=function(e){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"theCard",children:Object(j.jsxs)(C.a,{className:"card",children:[Object(j.jsx)("a",{rel:"https://anilist.co/",target:"_blank",href:e.url,children:Object(j.jsx)(R.a,{src:e.image,wrapped:!0,ui:!1})}),Object(j.jsxs)(C.a.Content,{children:[Object(j.jsx)(C.a.Header,{className:"title",children:e.title}),Object(j.jsxs)(C.a.Meta,{children:[Object(j.jsx)(S.a,{rating:e.score/100*5,starRatedColor:"gold",numberOfStars:5,name:"rating",starDimension:20,starSpacing:3}),Object(j.jsx)("span",{}),Object(j.jsx)("p",{className:"listingGenre",children:e.genre.join(", ")})]})]})]})})})},T=function(e){Object(m.a)(t,e);var n=Object(u.a)(t);function t(){var e;Object(h.a)(this,t);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=n.call.apply(n,[this].concat(c))).state={error:null,isLoaded:!1,items:[]},e.getAnime=function(){var n=Object(f.a)(v.a.mark((function n(t,a){var c;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,y.a.post("https://graphql.anilist.co",{query:t,variables:a});case 3:c=n.sent,console.log(c.data),e.setState((function(){return{isLoaded:!0,items:c.data.data.Page.media}})),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),e.setState((function(){return{error:n.t0}}));case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e,t){return n.apply(this,arguments)}}(),e}return Object(b.a)(t,[{key:"componentDidMount",value:function(){this.getAnime('\n    query {\n      Page(perPage: 15) {\n        media(isAdult: false, sort: POPULARITY_DESC, type: MANGA, genre_not_in: ["Psychological", "Ecchi", "Yaoi", "Yuri"]) {\n          id\n          title {\n            romaji\n            english\n          }\n          siteUrl\n          genres\n          meanScore\n          coverImage {\n            large\n          }\n        }\n      }\n    }\n    ',{})}},{key:"render",value:function(){var e=this.state,n=e.error,t=e.isLoaded,a=e.items;return n?Object(j.jsx)("div",{children:n.message}):t?Object(j.jsx)("div",{className:"grid",children:a.map((function(e){return Object(j.jsx)(F,{title:e.title.english?e.title.english:e.title.romaji,image:e.coverImage.large,score:e.meanScore,genre:e.genres,url:e.siteUrl},e.id)}))}):Object(j.jsx)("div",{children:"Loading..."})}}]),t}(a.Component),I=function(e){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"theCard",children:Object(j.jsxs)(C.a,{className:"card",children:[Object(j.jsx)("a",{rel:"https://anilist.co/",target:"_blank",href:e.url,children:Object(j.jsx)(R.a,{src:e.image,wrapped:!0,ui:!1})}),Object(j.jsxs)(C.a.Content,{children:[Object(j.jsx)(C.a.Header,{className:"title",children:e.title}),Object(j.jsxs)(C.a.Meta,{children:[Object(j.jsx)(S.a,{rating:e.score/100*5,starRatedColor:"gold",numberOfStars:5,name:"rating",starDimension:20,starSpacing:3}),Object(j.jsx)("p",{className:"listingGenre",children:e.genre.join(", ")})]})]})]})})})},L=function(e){Object(m.a)(t,e);var n=Object(u.a)(t);function t(){var e;Object(h.a)(this,t);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=n.call.apply(n,[this].concat(c))).state={error:null,isLoaded:!1,items:[]},e.getAnime=function(){var n=Object(f.a)(v.a.mark((function n(t,a){var c;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,y.a.post("https://graphql.anilist.co",{query:t,variables:a});case 3:c=n.sent,console.log(c.data),e.setState((function(){return{isLoaded:!0,items:c.data.data.Page.media}})),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),e.setState((function(){return{error:n.t0}}));case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e,t){return n.apply(this,arguments)}}(),e}return Object(b.a)(t,[{key:"componentDidMount",value:function(){this.getAnime('\n    query {\n      Page(perPage: 15) {\n        media(isAdult: false, sort: POPULARITY_DESC, type: MANGA, countryOfOrigin: KR, genre_in: ["Fantasy", "Romance"], genre_not_in: ["Psychological", "Ecchi", "Yaoi", "Yuri", "Adventure"]) {\n          id\n          title {\n            romaji\n            english\n          }\n          siteUrl\n          meanScore\n          genres\n          coverImage {\n            large\n          }\n        }\n      }\n    }\n    ',{})}},{key:"render",value:function(){var e=this.state,n=e.error,t=e.isLoaded,a=e.items;return n?Object(j.jsx)("div",{children:n.message}):t?Object(j.jsx)("div",{className:"grid",children:a.map((function(e){return Object(j.jsx)(I,{title:e.title.english?e.title.english:e.title.romaji,image:e.coverImage.large,score:e.meanScore,genre:e.genres,url:e.siteUrl},e.id)}))}):Object(j.jsx)("div",{children:"Loading..."})}}]),t}(a.Component);t(259);var D,w=function(){return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"theHeader",children:[Object(j.jsx)("h1",{className:"theMainTitle",children:"Welcome to MTracker"}),Object(j.jsx)("h5",{className:"theMainDesc",children:"MTracker is a site that allows users' to search up and track any manga, manhwa or manhua information. MTracker also saves the users' reading status and chapter without an account!"}),Object(j.jsx)("br",{}),Object(j.jsx)(g.a,{size:"lg",href:"#/Info",children:"Click To Search:"})]}),Object(j.jsx)("h1",{children:"Top Trending:"}),Object(j.jsx)(T,{}),Object(j.jsx)("h1",{children:"Julianne's Top Manhwa Trending:"}),Object(j.jsx)("p",{children:"Genres: Fantasy and Romance"}),Object(j.jsx)(L,{})]})},P=t(20),_=t(38),E=t(205),G=Object(_.gql)(D||(D=Object(E.a)(["\n  query Media($search: String!) {\n    Media(search: $search, isAdult: false, type: MANGA) {\n      id\n      title {\n        romaji\n        english\n        native\n      }\n      coverImage {\n        large\n        medium\n      }\n      chapters\n      description\n      status\n      countryOfOrigin\n      popularity\n      rankings {\n        context\n      }\n      tags {\n        name\n      }\n      externalLinks {\n        url\n      }\n      characters(page: 1, perPage: 5) {\n        edges {\n          node {\n            id\n            description\n            siteUrl\n            name {\n              first\n              last\n              full\n              native\n            }\n            image {\n              large\n              medium\n            }\n          }\n        }\n      }\n      recommendations(page: 1, perPage: 5) {\n        edges {\n          node {\n            id\n            mediaRecommendation {\n              id\n              averageScore\n              genres\n              synonyms\n              title {\n                romaji\n                english\n                native\n                userPreferred\n              }\n              coverImage {\n                extraLarge\n                large\n                medium\n                color\n              }\n            }\n            rating\n          }\n        }\n      }\n      bannerImage\n      averageScore\n      genres\n      synonyms\n    }\n  }\n"]))),B=t(147),W=t(211),q=t(141),Y=function(e,n){switch(n.type){case"ADD_MANGA":return[].concat(Object(W.a)(e),[{title:n.manga.title,status:n.manga.status,chapter:n.manga.chapter,genres:n.manga.genres,id:Object(q.v4)(),image:n.manga.image}]);case"REMOVE_MANGA":return e.filter((function(e){return e.id!==n.id}));case"EDIT_MANGA":return e.map((function(e){return e.id===n.id?Object(B.a)(Object(B.a)({},e),{},{chapter:n.chapter,status:n.status}):e}));default:return e}},U=Object(a.createContext)(),z=function(e){var n=Object(a.useReducer)(Y,[],(function(){var e=localStorage.getItem("mangas");return e?JSON.parse(e):[]})),t=Object(P.a)(n,2),c=t[0],i=t[1];return Object(a.useEffect)((function(){localStorage.setItem("mangas",JSON.stringify(c))}),[c]),Object(j.jsx)(U.Provider,{value:{mangas:c,dispatch:i},children:e.children})};var J=t(208),H=t.n(J),V=(t(308),t(338)),$=t(343);var K=function(e){return Object(j.jsx)("div",{children:e.name})},Q=t(209),X=t.n(Q),Z=t(78),ee=t(210),ne=function(){var e=Object(a.useContext)(U).dispatch,n=Object(a.useState)(""),t=Object(P.a)(n,2),c=(t[0],t[1],Object(a.useState)("Want to Read")),i=Object(P.a)(c,2),s=i[0],r=i[1],l=Object(a.useState)(0),d=Object(P.a)(l,2),o=d[0],h=d[1],b=Object(a.useState)([]),m=Object(P.a)(b,2),u=m[0],O=m[1],x=Object(a.useState)(!1),p=Object(P.a)(x,2),v=p[0],f=p[1],N=Object(a.useState)(""),y=Object(P.a)(N,2),C=y[0],R=y[1],A=Object(a.useState)(""),F=Object(P.a)(A,2),T=F[0],I=F[1],L=Object(_.useLazyQuery)(G,{variables:{search:C}}),D=Object(P.a)(L,2),w=D[0],E=D[1],B=E.loading,W=E.data;if(E.error)return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{children:"Sorry not found"}),Object(j.jsx)(g.a,{onClick:function(){window.location.reload(!1)},children:"Return back"})]});W&&console.log(B);return Object(j.jsxs)("div",{children:[Object(j.jsxs)("h3",{className:"theOverallTitle",children:["Enter the name of a"," ",Object(j.jsx)("span",{className:"threeMs",children:"Manga, Manhwa, or Manhua:"})]}),Object(j.jsx)("form",{onSubmit:function(e){e.preventDefault(),R(T),w(),I(""),console.log(u),f(!1)},children:Object(j.jsx)("div",{className:"mb-3",children:Object(j.jsxs)(V.a,{children:[Object(j.jsx)($.a,{placeholder:"Enter title","aria-label":"Manga title","aria-describedby":"basic-addon2",value:T,onChange:function(e){I(e.target.value)}}),Object(j.jsx)(V.a.Append,{children:Object(j.jsx)(g.a,{onClick:function(){R(T),w(),I("")},variant:"outline-secondary",children:"Submit"})})]})})}),Object(j.jsx)("div",{className:"manga",children:W&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"mangaTitles",children:[Object(j.jsx)("h1",{children:W.Media.title.english?W.Media.title.english:W.Media.synonyms[0]?W.Media.synonyms[0]:W.Media.title.romaji}),Object(j.jsx)("h3",{children:W.Media.title.native})]}),Object(j.jsxs)("div",{className:"mangaBody",children:[Object(j.jsx)("div",{className:"mangaCover",children:Object(j.jsx)("img",{alt:"cover",src:W.Media.coverImage.large})}),Object(j.jsxs)("div",{className:"mangaDescAndForm",children:[Object(j.jsxs)("div",{className:"mangaWord",children:[Object(j.jsxs)("div",{className:"description",children:[Object(j.jsx)("h5",{children:"Description:"}),H()(W.Media.description)," "]}),Object(j.jsxs)("div",{className:"restInfo",children:[Object(j.jsxs)("div",{className:"topInfo",children:[Object(j.jsxs)("div",{className:"infoText",children:[Object(j.jsxs)("h1",{children:[Object(j.jsx)("span",{className:"leTitle",children:"Status: "}),W.Media.status]}),Object(j.jsxs)("h1",{children:[Object(j.jsx)("span",{className:"leTitle",children:"Genres: "}),W.Media.genres.join(", ")]}),Object(j.jsx)("div",{className:"theStars",children:Object(j.jsx)(S.a,{rating:W.Media.averageScore/100*5,starRatedColor:"gold",numberOfStars:5,name:"rating",starDimension:28,starSpacing:1.5})}),Object(j.jsxs)("div",{className:"theIconButton",children:[Object(j.jsxs)(g.a,{variant:"light",className:"popButton",children:[Object(j.jsx)(k.a,{size:"lg",icon:Z.a}),Object(j.jsx)("div",{className:"popTitle",children:W.Media.countryOfOrigin})]}),Object(j.jsxs)(g.a,{variant:"danger",className:"popButton",children:[Object(j.jsx)(k.a,{size:"lg",icon:Z.b}),Object(j.jsx)("div",{className:"popTitle",children:W.Media.popularity})]})]}),Object(j.jsx)("div",{className:"links",children:W.Media.externalLinks&&W.Media.externalLinks.slice(0,3).map((function(e,n){return Object(j.jsx)("div",{className:"indLink",children:Object(j.jsx)("a",{target:"_blank",href:e.url,children:Object(j.jsx)(k.a,{size:"lg",icon:Z.c})})})}))})]}),Object(j.jsxs)("div",{className:"saveReading",children:[Object(j.jsxs)("form",{children:[Object(j.jsxs)("div",{className:"groupRead",children:[Object(j.jsx)("input",{type:"radio",name:"choice",value:"Want to Read",defaultChecked:!0,onChange:function(){return r("Want to Read")}}),Object(j.jsx)("label",{htmlFor:"Want to Read",children:"Want to Read"})]}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"groupRead",children:[Object(j.jsx)("input",{type:"radio",name:"choice",value:"Reading",onChange:function(){return r("Reading")}}),Object(j.jsx)("label",{htmlFor:"Reading",children:"Reading"})]}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"groupRead",children:[Object(j.jsx)("input",{type:"radio",name:"choice",value:"Finished Reading",onChange:function(){return r("Finished Reading")}}),Object(j.jsx)("label",{htmlFor:"Finished Reading",children:"Finished Reading"})]})]}),Object(j.jsxs)("div",{className:"forChap",children:[Object(j.jsx)("label",{for:"chapter",children:"Chapter:"}),Object(j.jsx)("input",{type:"number",name:"chapter",min:"0",onChange:function(e){return h(e.target.value)},required:!0})]}),v&&Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("p",{children:"Added Successfully"})}),Object(j.jsx)(g.a,{onClick:function(n){n.preventDefault(),O(W.Media.genres),console.log(W.Media.genres),null==W.Media.title.english?null!=W.Media.synonyms[0]?e({type:"ADD_MANGA",manga:{title:W.Media.synonyms[0],status:s,chapter:o,genres:W.Media.genres,image:W.Media.coverImage.large}}):e({type:"ADD_MANGA",manga:{title:W.Media.title.romaji,status:s,chapter:o,genres:W.Media.genres,image:W.Media.coverImage.large}}):e({type:"ADD_MANGA",manga:{title:W.Media.title.english,status:s,chapter:o,genres:W.Media.genres,image:W.Media.coverImage.large}}),f(!0)},type:"submit",value:"Add Manhwa",block:!0,variant:"primary",children:"Submit"})]})]}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"groupTags",children:[Object(j.jsx)("h6",{className:"botTags",children:"Tags:"}),Object(j.jsx)("div",{className:"bubblesTogether",children:W.Media.tags.slice(0,5).map((function(e){return Object(j.jsx)("div",{className:"tagBubble",children:Object(j.jsx)(K,{name:e.name})})}))})]}),Object(j.jsxs)("div",{className:"groupTags",children:[Object(j.jsx)("h6",{className:"botTags",children:"Ranks:"}),Object(j.jsx)("div",{className:"bubblesTogether",children:W.Media.rankings.slice(0,4).map((function(e){return Object(j.jsx)("div",{className:"tagBubble",children:Object(j.jsx)(K,{name:e.context})})}))})]})]})]}),Object(j.jsx)("div",{})]})]}),W.Media.bannerImage&&Object(j.jsx)("div",{children:Object(j.jsx)("img",{alt:"banner",className:"bannerImg",src:W.Media.bannerImage})}),W.Media.characters.edges[0]&&Object(j.jsxs)("div",{className:"characterList",children:[Object(j.jsx)("h1",{className:"theCharTitle",children:"Characters:"}),Object.keys(W.Media.characters.edges).map((function(e){return Object(j.jsx)("div",{className:"oneChar",children:Object(j.jsxs)(M.FlippingCard,{children:[Object(j.jsx)(M.FlippingCardBack,{children:W.Media.characters.edges[e].node.description?Object(j.jsxs)("div",{children:[Object(j.jsx)("h4",{children:W.Media.characters.edges[e].node.name.full}),Object(j.jsx)(ee.Element,{className:"element",id:"scroll-container",style:{position:"relative",height:"200px",overflow:"scroll",marginBottom:"100px"},children:Object(j.jsx)(X.a,{id:"charDesc",text:W.Media.characters.edges[e].node.description,ideal:200,readMoreText:"Read More"})})]}):Object(j.jsx)("h2",{className:"onlyCharName",children:W.Media.characters.edges[e].node.name.full})}),Object(j.jsx)(M.FlippingCardFront,{children:Object(j.jsx)("img",{alt:"character img",src:W.Media.characters.edges[e].node.image.large})})]})})}))]}),W.Media.recommendations.edges[0]&&Object(j.jsxs)("div",{className:"recList",children:[Object(j.jsx)("h1",{className:"theCharTitle",children:"Recommendations:"}),Object.keys(W.Media.recommendations.edges).map((function(e){return Object(j.jsx)("div",{className:"oneChar",children:Object(j.jsxs)(M.FlippingCard,{children:[Object(j.jsx)(M.FlippingCardBack,{children:Object(j.jsx)("h2",{className:"onlyTitleName",children:W.Media.recommendations.edges[e].node.mediaRecommendation.title.english?W.Media.recommendations.edges[e].node.mediaRecommendation.title.english:W.Media.recommendations.edges[e].node.mediaRecommendation.synonyms[0]?W.Media.recommendations.edges[e].node.mediaRecommendation.synonyms[0]:W.Media.recommendations.edges[e].node.mediaRecommendation.title.romaji})}),Object(j.jsx)(M.FlippingCardFront,{children:Object(j.jsx)("img",{alt:"character img",src:W.Media.recommendations.edges[e].node.mediaRecommendation.coverImage.large})})]})})}))]})]})})]})},te=(t(318),function(){var e=Object(a.useContext)(U).mangas;return Object(j.jsxs)(j.Fragment,{children:[console.log(e.length),Object(j.jsx)("h3",{className:"theOverallTitle",children:"Your Reading List:"}),Object(j.jsxs)("div",{className:"readingTitleList",children:[Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"uppertrackList",children:"Currently you have:\u2800"}),Object(j.jsxs)("div",{className:"theLength",children:[Object(j.jsx)("b",{children:e.length})," "]})]}),Object(j.jsx)("div",{className:"trackList",children:"\u2800items on your list!"})]})]})});t(319);var ae=function(e){var n=e.id,t=e.title,c=e.stat,i=e.task,s=e.toggleEditForm,r=Object(a.useContext)(U).dispatch,l=Object(a.useState)(c),d=Object(P.a)(l,2),o=d[0],h=d[1],b=function(e){var n=Object(a.useState)(e),t=Object(P.a)(n,2),c=t[0],i=t[1];return[c,function(e){return i(e.target.value)},function(){return i("")}]}(i),m=Object(P.a)(b,3),u=m[0],O=m[1],x=m[2];return Object(j.jsx)("div",{className:"currentReading",children:Object(j.jsxs)("form",{onClick:function(e){return e.stopPropagation()},children:[Object(j.jsx)("div",{className:"editTitle",children:t}),console.log(c),Object(j.jsx)("div",{children:Object(j.jsx)("i",{className:"editOptions",children:"Change Status:"})}),Object(j.jsxs)("div",{className:"wholeGroupRead",children:[Object(j.jsxs)("div",{className:"editgroupRead",children:[Object(j.jsx)("input",{type:"radio",name:"choice",value:"Want to Read",checked:"Want to Read"===o,onChange:function(){return h("Want to Read")}}),Object(j.jsx)("label",{htmlFor:"Want to Read",children:"Want to Read"})]}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"editgroupRead",children:[Object(j.jsx)("input",{type:"radio",name:"choice",value:"Reading",checked:"Reading"===o,onChange:function(){return h("Reading")}}),Object(j.jsx)("label",{htmlFor:"Reading",children:"Reading"})]}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"editgroupRead",children:[Object(j.jsx)("input",{type:"radio",name:"choice",value:"Finished Reading",checked:"Finished Reading"===o,onChange:function(){return h("Finished Reading")}}),Object(j.jsx)("label",{htmlFor:"Finished Reading",children:"Finished Reading"})]})]}),Object(j.jsxs)("div",{className:"forChap",children:[Object(j.jsx)("i",{className:"editOptions",children:"Change Chapter:"}),Object(j.jsx)("input",{value:u,onChange:O,placeholder:"Chap",onClick:function(e){return e.stopPropagation()}})]}),Object(j.jsx)(g.a,{block:!0,onClick:function(e){e.preventDefault(),r({type:"EDIT_MANGA",id:n,chapter:u,status:o}),s(),x()},variant:"primary",children:"Submit"})]})})},ce=(t(320),t(146)),ie=function(e){var n=e.manga,t=Object(a.useContext)(U).dispatch,c=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=Object(a.useState)(e),t=Object(P.a)(n,2),c=t[0],i=t[1];return[c,function(){return i(!c)}]}(!1),i=Object(P.a)(c,2),s=i[0],r=i[1];return s?Object(j.jsx)("li",{style:{overflowY:"hidden"},onClick:function(){return r()},children:Object(j.jsx)(ae,{id:n.id,title:n.title,stat:n.status,task:n.chapter,toggleEditForm:r})}):Object(j.jsx)("div",{children:Object(j.jsxs)("li",{className:"listItem",children:[Object(j.jsx)("img",{alt:n.image,src:n.image}),Object(j.jsxs)("div",{className:"theInfo",children:[Object(j.jsx)("div",{className:"mDtitle",children:n.title}),Object(j.jsxs)("div",{className:"MDinfo",children:[Object(j.jsx)("div",{children:n.status}),Object(j.jsxs)("div",{children:[Object(j.jsx)("i",{children:"Chapter:"})," ",n.chapter]}),Object(j.jsx)("i",{children:"Genres:"})," ",n.genres.join(", ")]}),Object(j.jsxs)("div",{className:"buttons",children:[Object(j.jsx)(g.a,{variant:"outline-secondary",onClick:function(){return t({type:"REMOVE_MANGA",id:n.id})},children:Object(j.jsx)(ce.b,{})}),Object(j.jsx)(g.a,{variant:"outline-info",onClick:function(e){e.stopPropagation(),r()},children:Object(j.jsx)(ce.a,{})})]})]})]})})},se=(t(321),function(){var e=Object(a.useContext)(U).mangas;return e.length?Object(j.jsx)("div",{children:Object(j.jsx)("ul",{className:"list",children:e.slice(0).reverse().map((function(e){return Object(j.jsx)(ie,{manga:e},e.id)}))})}):Object(j.jsxs)("div",{className:"noBooks",children:[Object(j.jsx)("h3",{children:"Add to your reading list here:"}),Object(j.jsx)(g.a,{href:"#/Info",children:"Click to search a manga"})]})});var re=function(){var e=new _.ApolloClient({cache:new _.InMemoryCache,uri:"https://graphql.anilist.co"});return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(_.ApolloProvider,{client:e,children:Object(j.jsx)(ne,{})})})};var le=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(te,{}),Object(j.jsx)(se,{})]})},de=function(e){Object(m.a)(t,e);var n=Object(u.a)(t);function t(){return Object(h.a)(this,t),n.apply(this,arguments)}return Object(b.a)(t,[{key:"render",value:function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(d.d,{children:[Object(j.jsx)(d.b,{path:"/",exact:!0,component:w}),Object(j.jsx)(d.a,{from:"/MTracker",to:"/"}),Object(j.jsxs)(z,{children:[Object(j.jsx)(d.b,{path:"/Info",component:re}),Object(j.jsx)(d.b,{path:"/ReadingList",component:le})]})]})})}}]),t}(a.Component);var je=function(){return Object(j.jsxs)("div",{className:"App",children:[" ",Object(j.jsx)(o,{}),Object(j.jsx)(de,{})]})},oe=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,344)).then((function(n){var t=n.getCLS,a=n.getFID,c=n.getFCP,i=n.getLCP,s=n.getTTFB;t(e),a(e),c(e),i(e),s(e)}))},he=t(64);t(322);s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(he.a,{history:x,children:Object(j.jsx)(je,{})})}),document.getElementById("root")),oe()}},[[323,1,2]]]);
//# sourceMappingURL=main.aac45ae1.chunk.js.map