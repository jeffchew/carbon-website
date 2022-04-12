"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[91398],{28399:function(e,t,a){a.d(t,{Z:function(){return w}});var n=a(67294),i=a(88650),o=a.n(i),l=a(1597),s=a(64905),r=a(68636),m=a(75900),d=a.n(m);var p=e=>{let{title:t,theme:a,tabs:i=[]}=e;return n.createElement("div",{className:d()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":i.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var c=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:i}}}=(0,l.useStaticQuery)("1364590287"),{baseUrl:o,subDirectory:s,branch:r}=a||i,m=`${o}/edit/${r}${s}/src/pages${t}`;return o?n.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:m},"Edit this page on GitHub"))):null},g=a(56328),b=a(51721);let h=function(e){function t(){return e.apply(this,arguments)||this}return(0,b.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,i=a.split("/").filter(Boolean).slice(-1)[0],s=t.map((e=>{const t=o()(e,{lower:!0,strict:!0}),s=t===i,r=new RegExp(`${i}/?(#.*)?$`),m=a.replace(r,t);return n.createElement("li",{key:e,className:d()({"PageTabs-module--selected-item--aBB0K":s},"PageTabs-module--list-item--024o6")},n.createElement(l.Link,{className:"PageTabs-module--link--Kz-7R",to:`${m}`},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},t}(n.Component);var u=h,k=a(17680),A=a(75387),f=a(50041);var y=e=>{let{date:t}=e;const a=new Date(t);return t?n.createElement(f.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(f.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var w=e=>{let{pageContext:t,children:a,location:i,Title:m}=e;const{frontmatter:d={},relativePagePath:b,titleType:h}=t,{tabs:f,title:w,theme:x,description:v,keywords:N,date:E}=d,{interiorTheme:T}=(0,A.Z)(),{site:{pathPrefix:C}}=(0,l.useStaticQuery)("2456312558"),B=C?i.pathname.replace(C,""):i.pathname,I=f?B.split("/").filter(Boolean).slice(-1)[0]||o()(f[0],{lower:!0}):"",S=x||T;return n.createElement(r.Z,{tabs:f,homepage:!1,theme:S,pageTitle:w,pageDescription:v,pageKeywords:N,titleType:h},n.createElement(p,{title:m?n.createElement(m,null):w,label:"label",tabs:f,theme:S}),f&&n.createElement(u,{title:w,slug:B,tabs:f,currentTab:I}),n.createElement(k.Z,{padded:!0},a,n.createElement(c,{relativePagePath:b}),n.createElement(y,{date:E})),n.createElement(g.Z,{pageContext:t,location:i,slug:B,tabs:f,currentTab:I}),n.createElement(s.Z,null))}},45586:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return r},default:function(){return y}});var n=a(45987),i=(a(67294),a(64983)),o=a(28399),l=a(41400);const s=["components"],r={},m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},d=m("PageDescription"),p=m("AnchorLinks"),c=m("AnchorLink"),g=m("Row"),b=m("Column"),h=m("ResourceCard"),u=m("MdxIcon"),k=m("Caption"),A={_frontmatter:r},f=o.Z;function y(e){let{components:t}=e,a=(0,n.Z)(e,s);return(0,i.kt)(f,Object.assign({},A,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(d,{mdxType:"PageDescription"},(0,i.kt)("p",null,"The transition from v10 to v11 includes significant updates and additions to\ncolor tokens, theming, size naming, with new components providing better\naccessibility, collaboration, and efficiency for users.")),(0,i.kt)(p,{mdxType:"AnchorLinks"},(0,i.kt)(c,{mdxType:"AnchorLink"},"Design kit"),(0,i.kt)(c,{mdxType:"AnchorLink"},"Components"),(0,i.kt)(c,{to:"#sizing-breaking",mdxType:"AnchorLink"},"Sizing"),(0,i.kt)(c,{to:"#type-tokens-breaking",mdxType:"AnchorLink"},"Type tokens"),(0,i.kt)(c,{to:"#color-tokens-breaking",mdxType:"AnchorLink"},"Color tokens"),(0,i.kt)(c,{mdxType:"AnchorLink"},"Theming")),(0,i.kt)("h2",null,"Design kit"),(0,i.kt)("h3",null,"What’s new"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Added new color tokens"),(0,i.kt)("li",{parentName:"ul"},"Introduced layering models: layer set tokens and contextual layer tokens")),(0,i.kt)("h3",null,"What’s changed"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Updated existing color token names to better reflect their usage"),(0,i.kt)("li",{parentName:"ul"},"Updated layer styles with new color tokens"),(0,i.kt)("li",{parentName:"ul"},"Updated text styles with new token names"),(0,i.kt)("li",{parentName:"ul"},"Removal of ",(0,i.kt)("inlineCode",{parentName:"li"},"light")," variants (in favor of new layer and contextual token sets)")),(0,i.kt)("h3",null,"Kit migration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Design tool"),(0,i.kt)("th",{parentName:"tr",align:null},"V11"),(0,i.kt)("th",{parentName:"tr",align:null},"Migration strategy"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/designing/kits/sketch"},"Sketch")),(0,i.kt)("td",{parentName:"tr",align:null},"Update available"),(0,i.kt)("td",{parentName:"tr",align:null},"The same Sketch Cloud libraries that were used in v10 have been updated to include the v11 changes. Do not accept the library update until you are ready to work in v11. ")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/designing/kits/figma"},"Figma")),(0,i.kt)("td",{parentName:"tr",align:null},"Expected release by the end of April"),(0,i.kt)("td",{parentName:"tr",align:null},"The same Figma libraries that were used in v10 will be updated to include the v11 changes. Do not accept the library update until you are ready to work in v11.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/designing/kits/adobe-xd"},"Adobe XD")),(0,i.kt)("td",{parentName:"tr",align:null},"Partial update available"),(0,i.kt)("td",{parentName:"tr",align:null},"Some of the v11 changes have been made in the XD files. It is yet to be determined when all the other changes will be added.")))),(0,i.kt)("h2",null,"Components"),(0,i.kt)("h3",null,"Notifications ",(0,i.kt)(l.Tag,{type:"cyan",mdxType:"Tag"},"Breaking")),(0,i.kt)("p",null,"An actionable variant has been added to the notification component. Actionable\nnotifications allow for interactive elements within a notification, like\nbuttons. Actionable notifications can be styled like an inline or toast\nnotification."),(0,i.kt)("p",null,"See Carbon’s\n",(0,i.kt)("a",{parentName:"p",href:"/components/notification/usage/#actionable-notifications"},"actionable notification"),"\nusage guidance for more information."),(0,i.kt)(g,{mdxType:"Row"},(0,i.kt)(b,{colLg:8,mdxType:"Column"},(0,i.kt)("img",{src:"/ce70785b5526700899acb8c7c7ed02d7/05_toast_context_608.gif",alt:"Example of toast notifications stacking."}))),(0,i.kt)("h3",null,"Popover ",(0,i.kt)(l.Tag,{type:"green",mdxType:"Tag"},"New")),(0,i.kt)("p",null,"Popover is a new component we have added to our system. A popover is a layer\nthat appears above all other content on the page and is used to display\nadditional details for specific elements whether it be text or interactive\nelements."),(0,i.kt)("p",null,"See Carbon’s ",(0,i.kt)("a",{parentName:"p",href:"/components/popover/usage/"},"popover")," usage guidance for more\ninformation."),(0,i.kt)(g,{mdxType:"Row"},(0,i.kt)(b,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"100%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEOElEQVQ4y4WUb0wbZRzHH7YXssXiC9/N+AYFQnHLWGIxWTTVzLDEl5BMfDFAjDKjgU6jzGIYhjWDbmzEN27TF8ZEY3BltFADxGyZBf8NRJG2Snsn5c9dL9C75673t9f7medaGjZidsknv9xzTz7P3fN874cQQojneYQx3oMgCAgA0MrKil13X6FQCJ3pfBO91+tHAD0IwIsAzhQebm9vP8HzfBXP80/tooqME9HIyEhZV1cX6uvru+b1en/r7++/7fP57ha5fXnowsKlIV/XZf+FglAQhDuSJIEkSaokSUaxAsb4RyIEgP2pVAqlUqkliqKAZVngeR4ymQwIfAZ+jgpwL565PvsXXxBijBez2Sw8iCiKSztCUvP5/CwAgGVZimmammVZmixn5ei/GFbT2lWKzRWEDMN0chw3zHGcj+O4i8V6hWXZt4vCfaTqur5sGAbkcrkSqqqBocmga/IN01AQmpiYQKqqIsMw9kDGi0IbTdNO67p+Xtf1Xl3XvaTmDOOckTN9iqq5FVVHiKbpcoZhHuU4riKdTpcg9wzDOCiKKl9dXS1PJBIHPu49hy75h9Dg4CAaGBiw8fl8yO/3o8bGRhSNRg/aK5OIZLPZPYiiaD//qOd9VPnk4+jESy88/aL7+aNut/vwsWPHjtTX1x9xuVyHXS7X0YaGhkOVlZWFPeR5/pQoih9ijLsxxl6MsYfcC4LwKhEuLf+975vRILo5Fpy7GbgFgUBAnZqaMqanp41wOKyEw2GYnJy8Gg6HS6c8/z+n/MfOKcsGIB5nf8nKKqiqmuPSbD6zxeUtAMOyLMjn85/m8/nSG86JoggPIgjCr7tjI2K8qKoKmKYB5z+5CD39IyBJpbmfka3b+bXqksnk8WQy+dwujicSiWeKwjJSVVX9Vtd12jD0pfg/9HKM3l5WFeVPSZLWRFH0kj23hel0Gm1tbe2BYRiUy+VQJBKxvyQQCBz8bnS04lZw0gEADgDWMfPDHcdsJFIxG4k8QiJox2ZjY8PBMEzFDizLPra2tlZOFltfX7djE41Gy9FDrsXf5w+QVe+LjSzLSJIktLm5eUgQhNNEOjMzU9bS0oKam5tbmpqaPmhtbe1ub2/3tLW1eTo6OrrOvtvR0/3O6+6es52lQ3kFY/wWxrgdY/wGxviUIAhfiqK4QoShUGg/mVddXR11Op0wPj4Oc3NzNgvz9yAwtQDBmfnPR79feGhzuEuEwWDQFlZVVUVqa2uBoqgsAKgYY1XXVGmRNiG6Zl6ZT5ql9vVTsX3dB8knEY6Nje0I40QYi8VI04F0Om1HBiAHpqF+AXm9IEwkEs/SNH2SoqgTNE2/XKwnk8mkiwg9Hk8ZmVdTU+Otq6v7KhaLXQeAG6ZpEq5pmvG1LCuvyYpaal+I47g9sCxrx2p4eBgVhcjpdKJ4PG6PW5ZlQzqToiikG5X9B/w8LqVub9zTAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Example of popover variants.",title:"Example of popover variants.",src:"/static/c914ab52f474269350c5a4ead331af45/3cbba/popover-usage-1.png",srcSet:["/static/c914ab52f474269350c5a4ead331af45/7fc1e/popover-usage-1.png 288w","/static/c914ab52f474269350c5a4ead331af45/a5df1/popover-usage-1.png 576w","/static/c914ab52f474269350c5a4ead331af45/3cbba/popover-usage-1.png 1152w","/static/c914ab52f474269350c5a4ead331af45/92c65/popover-usage-1.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,i.kt)("h3",null,"Tooltip ",(0,i.kt)(l.Tag,{type:"cyan",mdxType:"Tag"},"Breaking")),(0,i.kt)("p",null,"The tooltip component has been refactored to use the popover component under the\nhood to improve accessibility."),(0,i.kt)("p",null,"See Carbon’s ",(0,i.kt)("a",{parentName:"p",href:"/components/tooltip/usage/"},"tooltip")," usage guidance for more\ninformation."),(0,i.kt)(g,{mdxType:"Row"},(0,i.kt)(b,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"66.31944444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsTAAALEwEAmpwYAAACB0lEQVQ4y5VSu4oiURDtzzBSDIxNzM1ce13YaBhFZ0RMFDUXNDDerzCdYD7AR2ZoIhgIgm/tttvuVtdHvz1L3cVeZJOx4HDrwq1T554qbjabYblcYrPZeFiv10+D6larFbjFYoHBYIBut4tWq8XQ6XSeAtW22230ej1wiqKgVqshFAohEokgHA7D7/cjEAh8GcFgED6fD7FYDJwoimg2myiVSqjX66hWq6hUKuxeKBS+hGKxiHw+j0ajAW4ymeB0OmG/3zMvBUGALMs4HA54NizLAjedTrHb7UBKR6MRxuMxO+fzOSOlRnccj8f/QG8IlKuq+o/QNE04jvPQ0bZt3G43D7qu43q9stMwDAaqI5C68/n898vETF1o/MPhEP1+3ztpC0g9NaUiUrpYLrEWBEiS5DWjIGJPoeu62G63KJfLeM9mkcvlkMlkmNnJZBLZbBaaqkI3DOxkGaooQjvsYZgmq6UgxR4hdSGVqVQKPP8N8XgciUQCPP8d0WiU5UREWjRFgSZucdV1RnRX+EBIQdMulcr48fMF6XQa729veH19Ac/zTClZw7x1HFx0HZfLhZHcwyOk5bZtB7g5mKw0/PpU2eqsBQmzlQxZltgbGsZdDRNwPkNRVfw+ndi3Hzw0LYuZ7rgujhfyxMVIBD76YLntuEwBbQIVEzHdFU2DtBFwlXcwLBN/ANELYwrBQos1AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Example of a tooltip.",title:"Example of a tooltip.",src:"/static/35b2caebae7b997e1811cdcb5a35aa9e/3cbba/tooltip-usage-1.png",srcSet:["/static/35b2caebae7b997e1811cdcb5a35aa9e/7fc1e/tooltip-usage-1.png 288w","/static/35b2caebae7b997e1811cdcb5a35aa9e/a5df1/tooltip-usage-1.png 576w","/static/35b2caebae7b997e1811cdcb5a35aa9e/3cbba/tooltip-usage-1.png 1152w","/static/35b2caebae7b997e1811cdcb5a35aa9e/92c65/tooltip-usage-1.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,i.kt)("h3",null,"Toggletip ",(0,i.kt)(l.Tag,{type:"green",mdxType:"Tag"},"New")),(0,i.kt)("p",null,"Definition and interactive tootips now use the toggletip component to achieve\naccessibility standards. Toggletip uses the disclosure pattern to toggle the\nvisibility of a popover. This popover may contain a variety of information, from\ndescriptive text to interactive elements. Further guidance on the toggletip\ncomponent is coming soon."),(0,i.kt)("p",null,"See Carbon’s ",(0,i.kt)("a",{parentName:"p",href:"/components/toggletip/usage/"},"toggletip")," usage guidance for more\ninformation."),(0,i.kt)("h3",null,"Tabs ",(0,i.kt)(l.Tag,{type:"cyan",mdxType:"Tag"},"Breaking")),(0,i.kt)("p",null,"The tab component variant names are changing. Default tabs will become ",(0,i.kt)("em",{parentName:"p"},"Line\ntabs")," and Container tabs will become ",(0,i.kt)("em",{parentName:"p"},"Contained tabs"),". There are three new\nmodifiers—tabs with icons, icon-only tabs, and secondary labels. Additionally,\nthere is a new third alignment option for tab that allows for auto-widths where\neach tab size is determined by the label length."),(0,i.kt)("p",null,"See Carbon’s ",(0,i.kt)("a",{parentName:"p",href:"/components/tabs/usage/"},"tab")," usage guidance for more information."),(0,i.kt)(g,{mdxType:"Row"},(0,i.kt)(b,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"66.31944444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsTAAALEwEAmpwYAAABoUlEQVQ4y61SaW6CYBTsBfzl3ihuCAqIiApGxS3GxMRDGdG/Hst4Dg/iNPPaj9Kmf5qWZMhb5g1v4eX5fOI/nxe+Ho8H7vc7brfbnyGC1+sV/X4fy+USruvCNE10u110Op1fQwSPxyMymQwajQby+Tyy2WyCXC73xVexn+JEIlgsFuEPBiiXyyKqwMLvvkI6VigUREMET6cYxVcNpuWi3jQFumlDbxsyvq7raLVaaLfbAsMwBIwTtEulkoh/CJ7Qd1xMp1MpNAxTdjmbzXA4HBBFkdiLxQKr1Qr7/R7b7Rbz+VywXq9RqVQ+R6Zg1WtiMPbh2I58kftkd1w0D5Q+EuPpw9Emv16vvwuez2c4Uw/RKkIQBAjDEOPxWC6fBrv2fR+TyQTD4VB8z/OkhnzaIni5XOB0bYRBKAUcj78QSWmMRiPJ7XY7GZU+P77ZbBI/GblWq8FxHFkyR2FHvV4vOQTBnGVZMqY6EtfDTlWtCMZxjGq1Ctu2hURBipFEMkVIZo4cxtPXJlfVJoKapiVECnAfakcEc1w+C1XnFGOM06jaNzWG/ScVvu98AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Example of new tab style.",title:"Example of new tab style.",src:"/static/2498eb3df560bfc3b8cd624b63d347b8/3cbba/contained-tabs.png",srcSet:["/static/2498eb3df560bfc3b8cd624b63d347b8/7fc1e/contained-tabs.png 288w","/static/2498eb3df560bfc3b8cd624b63d347b8/a5df1/contained-tabs.png 576w","/static/2498eb3df560bfc3b8cd624b63d347b8/3cbba/contained-tabs.png 1152w","/static/2498eb3df560bfc3b8cd624b63d347b8/92c65/contained-tabs.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,i.kt)("h3",null,"UI shell ",(0,i.kt)(l.Tag,{type:"purple",mdxType:"Tag"},"Updated")),(0,i.kt)("p",null,"The UI shell is now themeable and has been updated to use inline theming. The UI\nshell uses Carbon theme tokens instead of component specific tokens and the\ncolor will follow each themes styles."),(0,i.kt)(g,{mdxType:"Row"},(0,i.kt)(b,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"75%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsTAAALEwEAmpwYAAABcUlEQVQ4y5WSu86CQBCFbeitTHwaSwsTn81XIEa0sjbxBSy0wEslrYaAhYJXUM+fM8lsVvy9bXLCwnycnZmd0v1+x6d1u93wDUemxE2/30er1UKn00G324XnefJ0XRfj8dj8MBwO0W630ev1JE5xT24ymQgjhrVaDY7jYDAYYLlcYjabYbFYYDqdYr1em9NXqxWCIJDYfD4Xce/7vuHEsNlsolqtCsx1uVyQ57noer2KGcvWxW8atzlj2Gg0UKlU5ESa7XY7pGmKJElwOp0e+sgf9/u9xMgUOTGs1+sol8tSapZlbw35pKGa/Ws4Go2kfzRiBjRVackqGrJEm1FODL8dG7uH7zgxZLos43w+P4nZaHZ8Px6PwhfFLE2GNNtut9hsNojj2CiKIumRjg1bQiYMwwdxZBh7Kpmn0/xwOIg0ay3H5pQpciW72cXbo36+ZfsG34Fq+Il7yLBYCsVB1/grjgeQM3NoZ1mUHX+1t9//AJMbbsePByTsAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Example of UI shell themes.",title:"Example of UI shell themes.",src:"/static/a1f76194befcfa40f9672ec56c1731c6/3cbba/ui-shell-themes.png",srcSet:["/static/a1f76194befcfa40f9672ec56c1731c6/7fc1e/ui-shell-themes.png 288w","/static/a1f76194befcfa40f9672ec56c1731c6/a5df1/ui-shell-themes.png 576w","/static/a1f76194befcfa40f9672ec56c1731c6/3cbba/ui-shell-themes.png 1152w","/static/a1f76194befcfa40f9672ec56c1731c6/92c65/ui-shell-themes.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,i.kt)("h2",null,"Sizing ",(0,i.kt)(l.Tag,{type:"cyan",mdxType:"Tag"},"Breaking")),(0,i.kt)("p",null,"All size properties for components have been renamed to be more consistent with\nthe pixel/rem value that it is paired with."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Size"),(0,i.kt)("th",{parentName:"tr",align:null},"Height (px / rem)"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Extra small (xs)"),(0,i.kt)("td",{parentName:"tr",align:null},"24 / 1.5")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Small (sm)"),(0,i.kt)("td",{parentName:"tr",align:null},"32 / 2")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Medium (md)"),(0,i.kt)("td",{parentName:"tr",align:null},"40 / 2.5")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Large (lg)"),(0,i.kt)("td",{parentName:"tr",align:null},"48 / 3")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Extra large (xl)"),(0,i.kt)("td",{parentName:"tr",align:null},"64 / 4")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Double extra large (2xl)"),(0,i.kt)("td",{parentName:"tr",align:null},"80 / 5")))),(0,i.kt)("h2",null,"Type tokens ",(0,i.kt)(l.Tag,{type:"cyan",mdxType:"Tag"},"Breaking")),(0,i.kt)("p",null,"The two v10 type sets—Productive and Expressive—have been blended together to\nwork as a unified collection in v11. As a result of this convergence, type token\nnames have been renamed to better define their relationship to one another and\nreflect its styling."),(0,i.kt)("p",null,"See Carbon’s ",(0,i.kt)("a",{parentName:"p",href:"/guidelines/typography/styling-strategies"},"typography")," guidance\nfor more information."),(0,i.kt)("h3",null,"Compact styles"),(0,i.kt)("p",null,"Some tokens now have a compact designation, meaning the only difference it has\nwith the token of a similar name is a variation in line height."),(0,i.kt)("h3",null,"Body styles"),(0,i.kt)("p",null,"The four body styles stay the same but their names have been updated. The ",(0,i.kt)("inlineCode",{parentName:"p"},"long"),"\nstyles are now simply just ",(0,i.kt)("inlineCode",{parentName:"p"},"body"),", while the ",(0,i.kt)("inlineCode",{parentName:"p"},"short")," styles are now\n",(0,i.kt)("inlineCode",{parentName:"p"},"body-compact"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"$body-long-01")," → ",(0,i.kt)("inlineCode",{parentName:"li"},"$body-01")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"$body-short-02")," → ",(0,i.kt)("inlineCode",{parentName:"li"},"$body-compact-02"))),(0,i.kt)("h3",null,"Heading styles"),(0,i.kt)("p",null,"Productive and expressive while still a concept used to express different\n“moments” are no longer used in the type token header names. There are two new\nclassifications—Fixed and Fluid."),(0,i.kt)("h4",null,"Fixed headings"),(0,i.kt)("p",null,"Fixed headings, for the most part take the place of what were the v10 productive\nheadings. The first two v10 expressive headings are also now included in the\nfixed type set. They are called “fixed” because they do not change sizes across\nbreakpoints and always remain a single fixed size. However, the term fixed is\nnot included in the token name but simply named ",(0,i.kt)("inlineCode",{parentName:"p"},"heading"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"$productive-heading-03")," → ",(0,i.kt)("inlineCode",{parentName:"li"},"$heading-03"))),(0,i.kt)("h4",null,"Fluid headings"),(0,i.kt)("p",null,"Fluid headings take the place of the v10 expressive heading. These headings are\nresponsive and the type styles change size at different breakpoints."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"$expressive-heading-05")," → ",(0,i.kt)("inlineCode",{parentName:"li"},"$fluid-heading-05"))),(0,i.kt)("h3",null,"Resources"),(0,i.kt)(g,{className:"resource-card-group",mdxType:"Row"},(0,i.kt)(b,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,i.kt)(h,{subTitle:"Type token migration table",href:"https://github.com/carbon-design-system/carbon/blob/main/docs/migration/v11.md#type-tokens",mdxType:"ResourceCard"},(0,i.kt)(u,{name:"github",mdxType:"MdxIcon"})))),(0,i.kt)("h2",null,"Color tokens ",(0,i.kt)(l.Tag,{type:"cyan",mdxType:"Tag"},"Breaking")),(0,i.kt)("p",null,"Existing color tokens have been renamed to better reflect their usage. In\naddition to renaming existing tokens, new tokens have been added to fill gaps in\nthe color token system and fix complex layering logic."),(0,i.kt)("h3",null,"Color token names"),(0,i.kt)("p",null,"Previously, in v10 many color tokens had numeral endings, now in v11 only\nlayering tokens will have this distinction. All other tokens have been given an\nadjective descriptor in place of the number ending to help users better\nunderstand how a token should be used. The new naming convention is as follows:\n",(0,i.kt)("inlineCode",{parentName:"p"},"[element] - [role] - [order] - [state]")),(0,i.kt)("p",null,"See Carbon’s ",(0,i.kt)("a",{parentName:"p",href:"/guidelines/color/overview/"},"color overview")," guidance for more\ninformation."),(0,i.kt)(g,{mdxType:"Row"},(0,i.kt)(b,{colLg:12,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"50%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAIAAAA7N+mxAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA+klEQVQoz32RTU/DMAyG+/9/BFeOiCMSggMSB+AAYtIEaHwUdV3oSNqljZ0vBy3buq5deQ+RI+exXzuJmnzzs3ucsRBCIAqtYoxfBT9/0LnoZ6MSMo7AkHXhmMjuskShz4bkGEFtExp061pYwx5NdT1xvB44j4en1e1rdfFki1XvQYSdl78lKEBE7axiQn0y2pugmleqlAiotTbOwkL4OOYaJuOWdy8i+6mbBjTKlOWnN4bL1rZ4/phfPYr3OXhTTtPs5BLSYgc7jzPmG91aNYvS17iFiXS6hGm2mcuyCt5yL2F8YfuQwriSIdC9buHN/rvx6FcdFPmv8x+jjEmlTYRdhAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Example showing the v10 tokens compared to the v11 tokens",title:"Example showing the v10 tokens compared to the v11 tokens",src:"/static/13624f7cb2130c61b154f32fe71bae34/3cbba/migrate-design-color-tokens.png",srcSet:["/static/13624f7cb2130c61b154f32fe71bae34/7fc1e/migrate-design-color-tokens.png 288w","/static/13624f7cb2130c61b154f32fe71bae34/a5df1/migrate-design-color-tokens.png 576w","/static/13624f7cb2130c61b154f32fe71bae34/3cbba/migrate-design-color-tokens.png 1152w","/static/13624f7cb2130c61b154f32fe71bae34/0b124/migrate-design-color-tokens.png 1728w","/static/13624f7cb2130c61b154f32fe71bae34/0c3f5/migrate-design-color-tokens.png 1856w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,i.kt)(k,{mdxType:"Caption"},"Examples showing v10 tokens on the left and v11 tokens on the right"),(0,i.kt)("h3",null,"Layer model tokens ",(0,i.kt)(l.Tag,{type:"green",mdxType:"Tag"},"New")),(0,i.kt)("p",null,"We have introduced two new types of color token for the layering models—Layering\ntokens and Contextual layer tokens. The two types of tokens will produce the\nsame visual effect. The difference between them is a technical one and largely a\ndeveloper concern. ",(0,i.kt)("strong",{parentName:"p"},"In Sketch, and other design tools, designer will only use\nthe layering tokens to design.")," The layering tokens replace what were the ",(0,i.kt)("inlineCode",{parentName:"p"},"ui"),"\ncolor tokens in v10 and are used in a similar way."),(0,i.kt)("p",null,"See Carbon’s ",(0,i.kt)("a",{parentName:"p",href:"/guidelines/color/implementation"},"color implementation")," guidance\nfor more information."),(0,i.kt)(g,{mdxType:"Row"},(0,i.kt)(b,{colLg:12,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"50%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAIAAAA7N+mxAAAACXBIWXMAAAsTAAALEwEAmpwYAAABVklEQVQoz2WRwW7jIBBA+f9bf6HfUHXPPexWq1W37S12tKmruLEMjoNhMAYGZmVo0qp9BxjxRjMMMJyM/lX7w0hElBJdyGGcnf69XV74V5thyTq361ACEWEmZdYoYnRheeFBqPTdIrIYaXFrGa2gbd8OhwPnXAgBAPM8x4DRIxGB0m3bFjsMQ7EMxlTdJWdoktA0r4Wmafq+58dhGRT8+Uce9Sibsy6273u2Dpfi2lmr7XZb13VZ67quqsp7X8bTWl/OS85ms2GX6e1s2/2+6zohBOd87cw5IhZrZrNv321pyzlnu3G8uv/53HVcKTDGWuu9z4+Ficjz6XTz4NrjMoEBsNaGEFabYW9qun76+6OuXoWQUgKA1hryZuzsR326fTQPOzNOcjwZY95t5uPaGFBKaYxBxHAmnf/WB//dspRSzCmLc3Ja0Z+IGCkmSuSck1IqpT7b/7pdNrz4w2F6AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Example showing layering and contextual tokens",title:"Example showing layering and contextual tokens",src:"/static/42fb24fe6d849841eee726d47407a8a3/3cbba/color-implementation-compare.png",srcSet:["/static/42fb24fe6d849841eee726d47407a8a3/7fc1e/color-implementation-compare.png 288w","/static/42fb24fe6d849841eee726d47407a8a3/a5df1/color-implementation-compare.png 576w","/static/42fb24fe6d849841eee726d47407a8a3/3cbba/color-implementation-compare.png 1152w","/static/42fb24fe6d849841eee726d47407a8a3/0b124/color-implementation-compare.png 1728w","/static/42fb24fe6d849841eee726d47407a8a3/0c3f5/color-implementation-compare.png 1856w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,i.kt)(k,{mdxType:"Caption"},"Examples showing layering tokens on the left and contextual tokens on the right"),(0,i.kt)("h3",null,"Resources"),(0,i.kt)(g,{className:"resource-card-group",mdxType:"Row"},(0,i.kt)(b,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,i.kt)(h,{subTitle:"Color token migration table",href:"https://github.com/carbon-design-system/carbon/blob/main/docs/migration/v11.md#design-tokens",mdxType:"ResourceCard"},(0,i.kt)(u,{name:"github",mdxType:"MdxIcon"})))),(0,i.kt)("h2",null,"Theming"),(0,i.kt)("h3",null,"Inline theming"),(0,i.kt)("p",null,"Inline theming is available to use in your product. Inline theming is used when\na section of a UI needs to have a different theme from the rest of the page and\nallows themes to be nested within each other without needing custom styles or\noverrides. In product, a common use-case for inline theming is applying a\ncontrasting theme to a UI shell and side panels."),(0,i.kt)("p",null,"See Carbon’s ",(0,i.kt)("a",{parentName:"p",href:"/guidelines/color/implementation#inline-theming"},"inline theming"),"\nguidance for more information."),(0,i.kt)(g,{mdxType:"Row"},(0,i.kt)(b,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"37.5%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsTAAALEwEAmpwYAAABUElEQVQoz42SsUoDQRCGByyiaG9lb5NnSGFlIQpXHoh39hb2qWxsfIQQkwsJF7TLO8QEkypcZYyFQSIi5A72bnfv7pcdY2GIkoGfYYbhm9mfJawRaZpi3aButwuvXofv+2i1Wmg2m5w9z0O1WsVsNuNBIQTu73zUbytoNBq/VKvV0Ol0eDE9Pb/goT/EYDDAaDRCEAQYj8colUogIvR6PQZOp6/Y3dsH0Tb3l1UsFpEkCUhpjURqLsyGLMsYYFkWCoVNXmTi8+MdF1dt2JcVuO45HOcMjuPAdV3Yto1yuQylFCgWAlEYIooihGGI+XzO8JPjI2wVNjBcALXWAJRx9E//zDFkvAkXwB+okhIHhxaIdtB/HPKw2a5UCp1mDDf1cmaglJINj+MYwkjE0DLGTXuC0+sAkzfxfeECZGSsWZXzPAetOj1f8RTu5/m/Mt/mC+/lJ/FcBNrgAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Example of mixing themes",title:"Example of mixing themes",src:"/static/eaf49de3fdb9b2aa8895ad8fb90f731a/3cbba/color-implementation-inline-1.png",srcSet:["/static/eaf49de3fdb9b2aa8895ad8fb90f731a/7fc1e/color-implementation-inline-1.png 288w","/static/eaf49de3fdb9b2aa8895ad8fb90f731a/a5df1/color-implementation-inline-1.png 576w","/static/eaf49de3fdb9b2aa8895ad8fb90f731a/3cbba/color-implementation-inline-1.png 1152w","/static/eaf49de3fdb9b2aa8895ad8fb90f731a/92c65/color-implementation-inline-1.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,i.kt)("h3",null,"Light or dark mode"),(0,i.kt)("p",null,"Light or dark mode has been newly introduced and is a theme setting that allows\nthe end user to choose a UI that is either predominately light or dark in color.\nThe UI will automatically switch from using light color backgrounds with dark\ncolor text to using dark color backgrounds with light color text."),(0,i.kt)("p",null,"See Carbon’s\n",(0,i.kt)("a",{parentName:"p",href:"/guidelines/color/implementation#light-or-dark-mode"},"light or dark mode"),"\nguidance for more information."),(0,i.kt)(g,{mdxType:"Row"},(0,i.kt)(b,{colMd:6,colLg:6,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"896px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"100%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAADFUlEQVQ4y6WUT2vcRhjG5xwrXyG4LmkOtnvxtTX1n01L77kkaWlpi0++tiGUNQTj9UfIByhNP0EPJQkBxxQKhcpavLErlthg7yrSypJG0mj+Pu1od1M3ibOHCH7MSDPz6Hln5n0JADIJKSVhjJGqqiZyfuElAJcBOO8CWV9fJ2tra5dardajzc3N42azedhsNv0xGxsb/tbWlr+9ve23Wq0a278I4jgOmZqaujw/P388OzuLhYUFzM3NYXp6umZmZgaLi4toNK5jZWUFq6urNY1GA8vLy1haWvofxPM84rqu43neYbvdhuu60vM8vbe3V+O6rt7f39fPOh39rLOvO52O7oxa+32MfW+323q8fw7n3AeAo6MjOwEHBwfodrugNEPBBHpnAqdnAjEV4Jy/hhACZVmCRFFEer2eI4TwGWPIskynaWrbGkopKM2RjbB9mufIz2HnFHmONE1AhBAWh1LqV1WFOI51FEUIggCDwcCahjHmrcAYpAwIUw6itbY4aZr61nYQBNqGa92NxSY94zmcCxBjjMVJkqR2GEWhPjk5ARdisrtXfqiEfDVkBq6g9cs5duG4fXOodljnhbWHtMpRp1RRlE5RFD7nFQa50S+oQcYMKjFaNMGlSlIISvE86Q0Fy/I/wbPC6JAalNxAKHOhu5eMwpHG4PjsFCTLMpIkiVNVlS8ER0iN7qcGSTl0OUnMyslBDEUpusnp8B72+4GjlPKlFIhyXQv2RjAxwaXdQ1ZBcY7n1mEYhqTX6zta61rQhmzdWRG7f/aEzvPGw7GiAE7TF0PBIOg7SmlfSTkeu/DRWr92B5VSgNGQnA8F/9zr2lrmH52k+Ka5q7/6cRc3f9jBrTs7uHlnB1/cfVpz7/5fYKyoMyiO4xqbilaQMok4G+Xyw6eHtaB7MAC5+kCTa7+AvPczyPsjPngAcuUnfHjjN7CSIgwjZBmts8kmQ50lCqClBOn3+2T3j78dQPodP8JHtx7qz757gk+/fYKVrx/j49uP8MmXj3Ht819x+/vfkSYxbPEYhyqlrKuNkgLs32rzDzPcUgyehezHAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Example of light or dark mode.",title:"Example of light or dark mode.",src:"/static/8a8dbb85206a489cfd9f5bbb0bbd5e60/6e9cd/light-or-dark-mode-1.png",srcSet:["/static/8a8dbb85206a489cfd9f5bbb0bbd5e60/7fc1e/light-or-dark-mode-1.png 288w","/static/8a8dbb85206a489cfd9f5bbb0bbd5e60/a5df1/light-or-dark-mode-1.png 576w","/static/8a8dbb85206a489cfd9f5bbb0bbd5e60/6e9cd/light-or-dark-mode-1.png 896w"],sizes:"(max-width: 896px) 100vw, 896px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,i.kt)(b,{colMd:6,colLg:6,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"896px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"100%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAADF0lEQVQ4y6WUy27bOBSGOW0RO44cI6lE6+JLdKHukiV7bMtOuiuy6iv0AbIKpphNu4qDIkCcVyk6maKdzaAvUmjVl0iAQPgHpJtBgLQOii4+8JAQf/3nkIcEAHmIm5sbcnV1Ra6vrx/k7sYGgCYA6Vcgx8fH5OjoqLFcLj+fnZ19XSwWX05OTsrFYiE4PT0tz8/Py4uLi3K5XN6Dr9+F1Go1TtOyrK+WZSEMQ9i2DVVVBZqmYTwe4+DgGebzOfb39/+nKIp7kO3tbdJsNiXDML7wzaqq3lBKK0VRBJS2K13XK8PQK0OMxlpIo9HgDqVer1dSSpEkSTWbzTCZTJDnOTodAwpVofcZ9L6Ltt6DLMs/hMiyzJEopWW73eYpckfgfHO8gsdifmftO5CtrS2O1Ol0Si4yGo0qXrPpdMpjOI4Dxth6HAd+lMGPM5DNzU2ettTtdkvuqCiK6vDwEFmWCTHXdX8KUq/XOaKG3OFkMq74CQZhCMdh4qN17lzGYDMGh8cOg7g2GxsbQpAfgOsFFXM9OLa12iD+zL7viLlwXIaB5yNyXdixD3HKtzU0dB3R4PcqzqYI4wx+GMNzXXie90OY52Hkh8ijCPb+4L5gmA6rKBsjiBL4QfigIIen7IUB2HwA0mq1yM7OjqRpWqlrGuJsUiXDOaJ0hDDJ1wr53KHvYRpGyHmHHQxAFEUhqqpKikJLTVVXKeczxMMZ4rwQabtrXLqeh5jXMAhWKVNKiaZpkqIoK8F0VIXp6I6ID8/nBCL2/ftwUS8IwKbprcP2SlBTYZndyja7YHYPzi1Wj6/DsfrgD8je3h5M0xTwOX9MLMuEZZorh7LGJKrslLLqQMleV83wT9TYK9TZKzFuun9gN32DbfslLGuP9zuiKEIcxyKLfr8Pm/mwmLcS3NUHUltulbt6gnrxT/V4eAmSvAcZXOK3/BKP8r9QK/7Fk2CJJA5QFDPxcAyHQyHK7yuvtR8m3xzqqUSVVvlUi2E+/1TFLz4ifvEJ5vO/oczeg87foZ5/wAZ7izjykaYpTNMSrXnbnow5gv8AzeVpLtf74pQAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Example of light or dark mode.",title:"Example of light or dark mode.",src:"/static/3f00a18a4e322bf0fb3e98c815aaba5b/6e9cd/light-or-dark-mode-2.png",srcSet:["/static/3f00a18a4e322bf0fb3e98c815aaba5b/7fc1e/light-or-dark-mode-2.png 288w","/static/3f00a18a4e322bf0fb3e98c815aaba5b/a5df1/light-or-dark-mode-2.png 576w","/static/3f00a18a4e322bf0fb3e98c815aaba5b/6e9cd/light-or-dark-mode-2.png 896w"],sizes:"(max-width: 896px) 100vw, 896px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))))}y.isMDXComponent=!0}}]);