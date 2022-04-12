"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[52559],{28399:function(e,t,n){n.d(t,{Z:function(){return v}});var a=n(67294),o=n(88650),s=n.n(o),l=n(1597),r=n(64905),i=n(68636),c=n(75900),p=n.n(c);var m=e=>{let{title:t,theme:n,tabs:o=[]}=e;return a.createElement("div",{className:p()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":o.length,"PageHeader-module--dark-mode--WCeH8":"dark"===n})},a.createElement("div",{className:"cds--grid"},a.createElement("div",{className:"cds--row"},a.createElement("div",{className:"cds--col-lg-12"},a.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var d=e=>{let{relativePagePath:t,repository:n}=e;const{site:{siteMetadata:{repository:o}}}=(0,l.useStaticQuery)("1364590287"),{baseUrl:s,subDirectory:r,branch:i}=n||o,c=`${s}/edit/${i}${r}/src/pages${t}`;return s?a.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},a.createElement("div",{className:"cds--col"},a.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},u=n(56328),h=n(51721);let k=function(e){function t(){return e.apply(this,arguments)||this}return(0,h.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:n}=this.props,o=n.split("/").filter(Boolean).slice(-1)[0],r=t.map((e=>{const t=s()(e,{lower:!0,strict:!0}),r=t===o,i=new RegExp(`${o}/?(#.*)?$`),c=n.replace(i,t);return a.createElement("li",{key:e,className:p()({"PageTabs-module--selected-item--aBB0K":r},"PageTabs-module--list-item--024o6")},a.createElement(l.Link,{className:"PageTabs-module--link--Kz-7R",to:`${c}`},e))}));return a.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},a.createElement("div",{className:"cds--grid"},a.createElement("div",{className:"cds--row"},a.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},a.createElement("nav",{"aria-label":e},a.createElement("ul",{className:"PageTabs-module--list--xLqxG"},r))))))},t}(a.Component);var b=k,g=n(17680),f=n(75387),y=n(50041);var N=e=>{let{date:t}=e;const n=new Date(t);return t?a.createElement(y.X2,{className:"last-modified-date-module--row--XJoYQ"},a.createElement(y.sg,null,a.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",n.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var v=e=>{let{pageContext:t,children:n,location:o,Title:c}=e;const{frontmatter:p={},relativePagePath:h,titleType:k}=t,{tabs:y,title:v,theme:C,description:w,keywords:S,date:E}=p,{interiorTheme:x}=(0,f.Z)(),{site:{pathPrefix:T}}=(0,l.useStaticQuery)("2456312558"),P=T?o.pathname.replace(T,""):o.pathname,A=y?P.split("/").filter(Boolean).slice(-1)[0]||s()(y[0],{lower:!0}):"",M=C||x;return a.createElement(i.Z,{tabs:y,homepage:!1,theme:M,pageTitle:v,pageDescription:w,pageKeywords:S,titleType:k},a.createElement(m,{title:c?a.createElement(c,null):v,label:"label",tabs:y,theme:M}),y&&a.createElement(b,{title:v,slug:P,tabs:y,currentTab:A}),a.createElement(g.Z,{padded:!0},n,a.createElement(d,{relativePagePath:h}),a.createElement(N,{date:E})),a.createElement(u.Z,{pageContext:t,location:o,slug:P,tabs:y,currentTab:A}),a.createElement(r.Z,null))}},38560:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return r},default:function(){return b}});var a=n(45987),o=(n(67294),n(64983)),s=n(28399);const l=["components"],r={},i=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},c=i("PageDescription"),p=i("InlineNotification"),m=i("AnchorLinks"),d=i("AnchorLink"),u=i("Title"),h={_frontmatter:r},k=s.Z;function b(e){let{components:t}=e,n=(0,a.Z)(e,l);return(0,o.kt)(k,Object.assign({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(c,{mdxType:"PageDescription"},(0,o.kt)("p",null,"The library provides front-end developers & engineers a collection of reusable\nHTML and SCSS partials to build websites and user interfaces. Adopting the\nlibrary enables developers to use consistent markup, styles, and behavior in\nprototype and production work.")),(0,o.kt)(p,{mdxType:"InlineNotification"},(0,o.kt)("p",null,"The vanilla JS library is maintained by members of the Carbon community. For\nsupport,\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/carbon-design-system/carbon/issues/new/choose"},"open an issue on Github"),".")),(0,o.kt)(m,{mdxType:"AnchorLinks"},(0,o.kt)(d,{mdxType:"AnchorLink"},"Install"),(0,o.kt)(d,{mdxType:"AnchorLink"},"Getting started"),(0,o.kt)(d,{mdxType:"AnchorLink"},"Troubleshooting")),(0,o.kt)("h2",null,"Install"),(0,o.kt)(u,{mdxType:"Title"}," Using npm: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save carbon-components\n")),(0,o.kt)(u,{mdxType:"Title"},"If you prefer ",(0,o.kt)("a",{href:"https://yarnpkg.com"},"Yarn"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add carbon-components\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"NB: March 29, 2019 - Please use the @next tag to install Carbon v10 components.\ne.g. ",(0,o.kt)("inlineCode",{parentName:"em"},"npm i carbon-components@next"),".")),(0,o.kt)("h2",null,"Getting started"),(0,o.kt)(m,{small:!0,mdxType:"AnchorLinks"},(0,o.kt)(d,{mdxType:"AnchorLink"},"What's included"),(0,o.kt)(d,{mdxType:"AnchorLink"},"CDN"),(0,o.kt)(d,{mdxType:"AnchorLink"},"CodePen"),(0,o.kt)(d,{mdxType:"AnchorLink"},"SCSS"),(0,o.kt)(d,{mdxType:"AnchorLink"},"JavaScript"),(0,o.kt)(d,{mdxType:"AnchorLink"},"Polyfills for older browsers")),(0,o.kt)("h3",null,"What’s included"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"carbon-components/\n├── html\n├── css\n│   ├── carbon-components.css\n│   └── carbon-components.min.css\n├── scripts\n│   ├── carbon-components.js\n│   └── carbon-components.min.js\n├── scss\n│   └── components\n│       └── modal\n│           └── _modal.scss\n├── umd\n│   └── index.js\n├── es\n│   └── index.js\n└── src (Deprecated and subject to breaking changes, please use es/umd instead)\n")),(0,o.kt)("h3",null,"CDN"),(0,o.kt)("p",null,"Use unpkg for easy access to our built static files. This is great for\nprototyping and trying ",(0,o.kt)("inlineCode",{parentName:"p"},"carbon-components")," without installing anything. See all\nfiles from ",(0,o.kt)("inlineCode",{parentName:"p"},"carbon-components")," available on\n",(0,o.kt)("a",{parentName:"p",href:"https://unpkg.com/carbon-components/"},"unpkg CDN"),"."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Scripts"),(0,o.kt)("th",{parentName:"tr",align:null},"URL"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"CSS"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://unpkg.com/carbon-components/css/carbon-components.min.css"},"https://unpkg.com/carbon-components/css/carbon-components.min.css"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ES5"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://unpkg.com/carbon-components/scripts/carbon-components.min.js"},"https://unpkg.com/carbon-components/scripts/carbon-components.min.js"))))),(0,o.kt)("h3",null,"CodePen"),(0,o.kt)("p",null,"We have individual ",(0,o.kt)("a",{parentName:"p",href:"https://codepen.io/collection/XqRbEz/"},"CodePens")," for all of\nour components which you can easily fork and play around with."),(0,o.kt)("h3",null,"SCSS"),(0,o.kt)("p",null,"Using the Carbon Sass files infers usage of the SCSS pre-processor. All Sass\nfiles use the ",(0,o.kt)("inlineCode",{parentName:"p"},"*.scss")," file extension."),(0,o.kt)("p",null,"For transpiling Sass code, use ",(0,o.kt)("inlineCode",{parentName:"p"},"node-sass")," based Sass compilers, for example,\nWebPack ",(0,o.kt)("inlineCode",{parentName:"p"},"sass-loader")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"gulp-sass"),"."),(0,o.kt)("p",null,"If you’re starting a new project without a boilerplate, you need to know about a\nfew things to get started."),(0,o.kt)("h4",null,"Autoprefixer"),(0,o.kt)("p",null,"Make sure your build process uses\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/postcss/autoprefixer"},"autoprefixer")," to ensure vendor\nprefixes are automatically added to your output CSS."),(0,o.kt)("h4",null,"Default body styles"),(0,o.kt)("p",null,"CSS is automatically applied to ",(0,o.kt)("inlineCode",{parentName:"p"},"<body>")," element, which comes from\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/carbon-design-system/carbon/blob/v10/packages/components/src/globals/scss/_css--body.scss"},"_","css—body.scss"),".\nThese styles are meant to cascade down to everything in ",(0,o.kt)("inlineCode",{parentName:"p"},"<body>")," to set common\nstyles shared across all components."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scss"},"body {\n  @include reset;\n  @include type-style('body-short-01');\n  color: $text-01;\n  background-color: $ui-background;\n  line-height: 1;\n}\n")),(0,o.kt)("h4",null,"Icons"),(0,o.kt)("p",null,"A lot of components depend on SVG icons from\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/carbon-design-system/carbon-icons"},"carbon-icons"),". Read the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/carbon-design-system/carbon-icons/blob/master/docs/usage.md"},"docs"),"\nfor details on how to use them."),(0,o.kt)("h4",null,"Global SCSS variables"),(0,o.kt)("p",null,"These variables are used to configure which parts of the SCSS get compiled,\nwhere each variable controls a SCSS file of the same name. All variables are set\nto ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," by default."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When you set ",(0,o.kt)("inlineCode",{parentName:"li"},"$css--reset: true"),", then the contents of\n",(0,o.kt)("a",{parentName:"li",href:"https://github.com/carbon-design-system/carbon/blob/v10/packages/components/src/globals/scss/_css--reset.scss"},"_","css—reset.scss"),"\nwill be part of your output CSS."),(0,o.kt)("li",{parentName:"ul"},"When you set ",(0,o.kt)("inlineCode",{parentName:"li"},"$css--reset: false"),", then nothing gets included from that SCSS\nfile."),(0,o.kt)("li",{parentName:"ul"},"When the variable is not declared at all, then nothing gets included from that\nSCSS file.")),(0,o.kt)("p",null,"The same rules apply to all the following variables:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scss"},"// In styles.scss:\n// These are the default settings.\n$css--font-face: true !default;\n$css--helpers: true !default;\n$css--body: true !default;\n$css--use-layer: true !default;\n$css--reset: true !default;\n$css--typography: true !default;\n$css--plex: true !default;\n")),(0,o.kt)("p",null,"These flags are set for you by default when you ",(0,o.kt)("inlineCode",{parentName:"p"},"@import")," the ",(0,o.kt)("inlineCode",{parentName:"p"},"styles.scss"),"\nfile. You can override these default settings by redeclaring the variables."),(0,o.kt)("h4",null,"Importing SCSS files"),(0,o.kt)("p",null,"To add a component style to your build, simply import the component directly.\nImporting a component this way will bring in any dependencies that component has\nas well. The import system removes duplicate dependencies, so shared\ndependencies between components will not create extra CSS."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"@import 'node_modules/carbon-components/scss/components/card/card';\n")),(0,o.kt)("h4",null,"Namespacing"),(0,o.kt)("p",null,"Carbon Components are built to be included individually and not clobber global\nstyles - all ",(0,o.kt)("inlineCode",{parentName:"p"},"class")," attributes are prefixed by the ",(0,o.kt)("inlineCode",{parentName:"p"},"cds--")," moniker. You can\nspecify your own prefix by changing the SCSS variable ",(0,o.kt)("inlineCode",{parentName:"p"},"$prefix"),"."),(0,o.kt)("h3",null,"JavaScript"),(0,o.kt)("p",null,"Carbon Component has component JavaScript classes, each of which correspond to a\ncomponent found in ",(0,o.kt)("a",{parentName:"p",href:"/components/overview"},"our components page"),". The first steps\nto work with component JavaScript classes are the following:"),(0,o.kt)("h4",null,"1. Getting component JavaScript class reference"),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Using a module bundler:")," We recommend using ECMAScript module along with your\nmodule bundler toolchain to do so. Using a module bundler will bring in only the\ncomponent code your application needs, creating an optimized build for\nproduction. Carbon Components ships with a ECMAScript module build as well as\nUMD build for each component, for use with webpack or Rollup."),(0,o.kt)("p",null,"After you’ve installed the components through ",(0,o.kt)("inlineCode",{parentName:"p"},"npm"),", you can grab a component\nJavaScript class reference by something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { Modal } from 'carbon-components';\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Using pre-built bundle:")," Users can also opt to use the pre-built\n",(0,o.kt)("inlineCode",{parentName:"p"},"carbon-components.js")," file directly, like below. We recommend that most users\ndo ",(0,o.kt)("em",{parentName:"p"},"not")," use this file, as it includes components your application may or may\nnot actually be using."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<html>\n  <body>\n    \x3c!-- Put HTML snippets of components here... --\x3e\n    <script src="node_modules/carbon-components/scripts/carbon-components.min.js"><\/script>\n  </body>\n</html>\n')),(0,o.kt)("p",null,"Once you load ",(0,o.kt)("inlineCode",{parentName:"p"},"carbon-components.js")," via ",(0,o.kt)("inlineCode",{parentName:"p"},"<script>")," tag, you can grab a\ncomponent JavaScript class reference by something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var Modal = CarbonComponents.Modal;\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Note: By default, pre-built bundle automatically instantiates all components on\nthe page when")," ",(0,o.kt)("inlineCode",{parentName:"p"},"DOMContentLoaded")," ",(0,o.kt)("em",{parentName:"p"},"event on the page fires. In case you don’t\nwant that behavior, you can set"),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"CarbonComponents.settings.disableAutoInit = true")," ",(0,o.kt)("em",{parentName:"p"},"right after"),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"carbon-components.js")," ",(0,o.kt)("em",{parentName:"p"},"is loaded.")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Caveat: Don’t use pre-built")," ",(0,o.kt)("inlineCode",{parentName:"p"},"carbon-components.js")," ",(0,o.kt)("em",{parentName:"p"},"if you are importing\ncomponents via ECMAScript module syntax. Doing so will cause Carbon code loaded\ntwice, often competing each other.")),(0,o.kt)("h4",null,"2. Instantiating component class on DOM nodes"),(0,o.kt)("p",null,"Once you have a\n",(0,o.kt)("a",{parentName:"p",href:"#1-getting-component-javascript-class-reference"},"component JavaScript class reference"),",\nyou can instantiate it on a DOM node with the ",(0,o.kt)("inlineCode",{parentName:"p"},".create()")," API."),(0,o.kt)("p",null,"For example, if you have the following HTML for modal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<div data-modal id="modal-nofooter" class="cds--modal" tabindex="-1">\n  <div class="cds--modal-container">...</div>\n</div>\n')),(0,o.kt)("p",null,"You can create and get the instance by:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const modalElement = document.getElementById('modal-nofooter');\nconst modalInstance = Modal.create(modalElement);\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Note: The DOM element to instantiate components on typically has a\n",(0,o.kt)("inlineCode",{parentName:"em"},"data-componentname")," attribute, e.g. ",(0,o.kt)("inlineCode",{parentName:"em"},"data-modal")," for modal.")),(0,o.kt)("p",null,"Instantiating a component basically does two things:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Hooks several event handlers on some DOM elements inside (in above example,\nones in ",(0,o.kt)("inlineCode",{parentName:"li"},"modalElement"),", e.g. close button)"),(0,o.kt)("li",{parentName:"ul"},"Allows you to access public methods (found in\n",(0,o.kt)("a",{parentName:"li",href:"../../components/overview"},"our components page"),", e.g.\n",(0,o.kt)("a",{parentName:"li",href:"/components/modal/code#public-methods"},"here")," for modal) via the instance\nreference (",(0,o.kt)("inlineCode",{parentName:"li"},"modalInstance.show()"),", etc. in above example)")),(0,o.kt)("h4",null,"Higher-level component instantiation API"),(0,o.kt)("p",null,"While ",(0,o.kt)("inlineCode",{parentName:"p"},".create()")," API gives you the full control of component instantiation,\nthere is a higher-level API for instantiating components, which is,\n",(0,o.kt)("inlineCode",{parentName:"p"},".init(rootElement)"),". It instantiates all components with ",(0,o.kt)("inlineCode",{parentName:"p"},"data-componentname"),"\nattribute (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"data-modal")," for modal) inside the given ",(0,o.kt)("inlineCode",{parentName:"p"},"rootElement"),". If\n",(0,o.kt)("inlineCode",{parentName:"p"},"rootElement")," is omitted, ",(0,o.kt)("inlineCode",{parentName:"p"},"document")," is used."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Note:")," ",(0,o.kt)("inlineCode",{parentName:"p"},".init()")," ",(0,o.kt)("em",{parentName:"p"},"API does not take care of DOM elements that hasn’t been\navailable at the time it’s called. If the JavaScript framework you are using\ncreates DOM elements dynamically, follow the instructions in the next section\ninstead of using")," ",(0,o.kt)("inlineCode",{parentName:"p"},".init()"),"."),(0,o.kt)("h4",null,"Wrapping a component with JavaScript framework of your choice"),(0,o.kt)("p",null,"Many JavaScript frameworks have a mechanism to dynamically create/destroy DOM\nelements, for example, upon change in array. This often makes it unclear when\nthe DOM element to instantiate Carbon component on is available, which often\ndepends on the JavaScript framework you use."),(0,o.kt)("p",null,"Also when DOM elements that Carbon components have been instantiated on are\nbeing destroyed, the Carbon component instances should be released so that e.g.\nthere are no zombie event handlers."),(0,o.kt)("p",null,"The easiest way to hook on the creation/destroy of DOM elements is defining a\n“wrapping component”, with the JavaScript framework of your choice. Here’s an\nexample using web components’\n",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/Web_Components/Custom_Elements"},"Custom Elements v1 spec"),",\nbut the notion of components, along with the lifecycle callbacks, are commonly\nfound in many other JavaScript frameworks."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"class BXLoading extends HTMLElement {\n  // Called when this custom element gets into render tree\n  connectedCallback() {\n    // \"this\" here is \"<bx-loading>\" element\n    this.innerHTML =\n      '(e.g. snippet from http://carbondesignsystem.com/components/loading/code)';\n    this.loading = CarbonComponents.Loading.create(\n      this.querySelector('[data-loading]')\n    );\n  }\n  // Called when this custom element gets out of render tree\n  disconnectedCallback() {\n    this.loading.release();\n  }\n}\ncustomElements.define('bx-loading', BXLoading);\n")),(0,o.kt)("h3",null,"Polyfills for older browsers"),(0,o.kt)("p",null,"carbon-components requires some polyfills for older browsers, in addition to\ncarbon-components.js (or carbon-components.min.js). The latest list of polyfills\nis maintained in\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/carbon-design-system/carbon/blob/v10/packages/components/demo/polyfills/index.js"},"carbon-components/blob/main/packages/components/demo/polyfills/index.js"),".\nYou can easily find the polyfills in NPM, etc. The current list is below:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from"},"Array.from()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign"},"Math.sign()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign"},"Object.assign()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent"},"CustomEvent")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/es/docs/Web/API/Element/closest"},"Element#closest()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/matches"},"Element#matches()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/classList#Methods"},"2nd arg of Element.classList.toggle()"))),(0,o.kt)("h2",null,"Troubleshooting"),(0,o.kt)("p",null,"If you experience any issues while getting set up with Carbon Components, please\nhead over to the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/carbon-design-system/carbon-components"},"GitHub repo")," for\nmore guidelines and support. Please\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/carbon-design-system/carbon/issues"},"create an issue")," if your\nissue does not already exist."))}b.isMDXComponent=!0}}]);