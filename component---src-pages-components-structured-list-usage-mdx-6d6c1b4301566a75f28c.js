"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[43335],{28399:function(t,e,a){a.d(e,{Z:function(){return S}});var n=a(67294),s=a(88650),r=a.n(s),l=a(1597),i=a(64905),o=a(68636),u=a(75900),d=a.n(u);var c=t=>{let{title:e,theme:a,tabs:s=[]}=t;return n.createElement("div",{className:d()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":s.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},e)))))};var m=t=>{let{relativePagePath:e,repository:a}=t;const{site:{siteMetadata:{repository:s}}}=(0,l.useStaticQuery)("1364590287"),{baseUrl:r,subDirectory:i,branch:o}=a||s,u=`${r}/edit/${o}${i}/src/pages${e}`;return r?n.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:u},"Edit this page on GitHub"))):null},p=a(56328),g=a(51721);let h=function(t){function e(){return t.apply(this,arguments)||this}return(0,g.Z)(e,t),e.prototype.render=function(){const{title:t,tabs:e,slug:a}=this.props,s=a.split("/").filter(Boolean).slice(-1)[0],i=e.map((t=>{const e=r()(t,{lower:!0,strict:!0}),i=e===s,o=new RegExp(`${s}/?(#.*)?$`),u=a.replace(o,e);return n.createElement("li",{key:t,className:d()({"PageTabs-module--selected-item--aBB0K":i},"PageTabs-module--list-item--024o6")},n.createElement(l.Link,{className:"PageTabs-module--link--Kz-7R",to:`${u}`},t))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},i))))))},e}(n.Component);var b=h,k=a(17680),w=a(75387),A=a(50041);var y=t=>{let{date:e}=t;const a=new Date(e);return e?n.createElement(A.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(A.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var S=t=>{let{pageContext:e,children:a,location:s,Title:u}=t;const{frontmatter:d={},relativePagePath:g,titleType:h}=e,{tabs:A,title:S,theme:f,description:L,keywords:C,date:N}=d,{interiorTheme:v}=(0,w.Z)(),{site:{pathPrefix:E}}=(0,l.useStaticQuery)("2456312558"),x=E?s.pathname.replace(E,""):s.pathname,R=A?x.split("/").filter(Boolean).slice(-1)[0]||r()(A[0],{lower:!0}):"",T=f||v;return n.createElement(o.Z,{tabs:A,homepage:!1,theme:T,pageTitle:S,pageDescription:L,pageKeywords:C,titleType:h},n.createElement(c,{title:u?n.createElement(u,null):S,label:"label",tabs:A,theme:T}),A&&n.createElement(b,{title:S,slug:x,tabs:A,currentTab:R}),n.createElement(k.Z,{padded:!0},a,n.createElement(m,{relativePagePath:g}),n.createElement(y,{date:N})),n.createElement(p.Z,{pageContext:e,location:s,slug:x,tabs:A,currentTab:R}),n.createElement(i.Z,null))}},9120:function(t,e,a){a.r(e),a.d(e,{_frontmatter:function(){return o},default:function(){return A}});var n=a(45987),s=(a(67294),a(64983)),r=a(28399),l=a(52006);const i=["components"],o={},u=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",e)},d=u("PageDescription"),c=u("AnchorLinks"),m=u("AnchorLink"),p=u("ComponentDemo"),g=u("ComponentVariant"),h=u("Row"),b=u("Column"),k={_frontmatter:o},w=r.Z;function A(t){let{components:e}=t,a=(0,n.Z)(t,i);return(0,s.kt)(w,Object.assign({},k,a,{components:e,mdxType:"MDXLayout"}),(0,s.kt)(d,{mdxType:"PageDescription"},(0,s.kt)("p",null,"Structured lists group content that is similar or related, such as terms and\ndefinitions.")),(0,s.kt)(c,{mdxType:"AnchorLinks"},(0,s.kt)(m,{mdxType:"AnchorLink"},"Overview"),(0,s.kt)(m,{mdxType:"AnchorLink"},"Live demo"),(0,s.kt)(m,{mdxType:"AnchorLink"},"Formatting"),(0,s.kt)(m,{mdxType:"AnchorLink"},"Content"),(0,s.kt)(m,{mdxType:"AnchorLink"},"Related"),(0,s.kt)(m,{mdxType:"AnchorLink"},"Feedback")),(0,s.kt)("h2",null,"Overview"),(0,s.kt)("p",null,"Structured list displays a simple list with a considerable amount of items of\nread-only values. It helps organize and present grouped information into logical\nand scannable patterns. The content within a list can be stacked to create\nhierarchy within the data."),(0,s.kt)("h4",null,"When to use"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"To browse information or select certain information within the group in the\nsimplest form"),(0,s.kt)("li",{parentName:"ul"},"To view description and detailed information, present features, or compare\npricing plans")),(0,s.kt)("h4",null,"When not to use"),(0,s.kt)("p",null,"Nesting items is not recommended, as structured lists are used to present simple\ndata. If you have more than 25 items or additional content that needs to be\nshown, consider using a\n",(0,s.kt)("a",{parentName:"p",href:"https://www.carbondesignsystem.com/components/data-table/usage/"},"data table"),",\nwhich supports nesting items and presents a larger set of content."),(0,s.kt)("h3",null,"Variants"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Variant"),(0,s.kt)("th",{parentName:"tr",align:null},"Purpose"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("em",{parentName:"td"},"Default")),(0,s.kt)("td",{parentName:"tr",align:null},"Allows the user to quickly browse and view information within a group of data")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("em",{parentName:"td"},"Selectable")),(0,s.kt)("td",{parentName:"tr",align:null},"Allows the user to mark or select a desired option within a group of data")))),(0,s.kt)("h2",null,"Live demo"),(0,s.kt)(p,{components:[{id:"default-structured-list",label:"Default structured list"},{id:"select-structured-list",label:"Selectable structured list"}],scope:{CheckmarkFilled:l.kFI},mdxType:"ComponentDemo"},(0,s.kt)(g,{id:"default-structured-list",links:{React:"https://react.carbondesignsystem.com/?path=/story/components-structuredlist--simple",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-structured-list--basic",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvstructuredlist--default",Vanilla:"https://the-carbon-components.netlify.com/?nav=structured-list","Web Components":"https://web-components.carbondesignsystem.com/?path=/story/components-structured-list--default"},mdxType:"ComponentVariant"},'\n    <StructuredListWrapper ariaLabel="Structured list">\n      <StructuredListHead>\n        <StructuredListRow\n          head\n          tabIndex={0}\n        >\n          <StructuredListCell head>\n            ColumnA\n          </StructuredListCell>\n          <StructuredListCell head>\n            ColumnB\n          </StructuredListCell>\n          <StructuredListCell head>\n            ColumnC\n          </StructuredListCell>\n        </StructuredListRow>\n      </StructuredListHead>\n      <StructuredListBody>\n        <StructuredListRow tabIndex={0}>\n          <StructuredListCell>\n            Row 1\n          </StructuredListCell>\n          <StructuredListCell>\n            Row 1\n          </StructuredListCell>\n          <StructuredListCell>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui magna, finibus id tortor sed, aliquet bibendum augue. Aenean posuere sem vel euismod dignissim. Nulla ut cursus dolor. Pellentesque vulputate nisl a porttitor interdum.\n          </StructuredListCell>\n        </StructuredListRow>\n        <StructuredListRow tabIndex={0}>\n          <StructuredListCell>\n            Row 2\n          </StructuredListCell>\n          <StructuredListCell>\n            Row 2\n          </StructuredListCell>\n          <StructuredListCell>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui magna, finibus id tortor sed, aliquet bibendum augue. Aenean posuere sem vel euismod dignissim. Nulla ut cursus dolor. Pellentesque vulputate nisl a porttitor interdum.\n          </StructuredListCell>\n        </StructuredListRow>\n      </StructuredListBody>\n    </StructuredListWrapper>\n  '),(0,s.kt)(g,{id:"select-structured-list",links:{React:"https://react.carbondesignsystem.com/?path=/story/components-structuredlist--selection",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-structured-list--with-selection",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvstructuredlist--selectable-with-events",Vanilla:"https://the-carbon-components.netlify.com/?nav=structured-list","Web Components":"https://web-components.carbondesignsystem.com/?path=/story/components-structured-list--default"},mdxType:"ComponentVariant"},'\n    <StructuredListWrapper selection ariaLabel="Structured list">\n      <StructuredListHead>\n        <StructuredListRow\n          head\n          tabIndex={0}\n        >\n          <StructuredListCell head>\n            ColumnA\n          </StructuredListCell>\n          <StructuredListCell head>\n            ColumnB\n          </StructuredListCell>\n          <StructuredListCell head>\n            ColumnC\n          </StructuredListCell>\n          <StructuredListCell head/>\n        </StructuredListRow>\n      </StructuredListHead>\n      <StructuredListBody>\n        <StructuredListRow tabIndex={0}>\n          <StructuredListCell>\n            Row 1\n          </StructuredListCell>\n          <StructuredListCell>\n            Row 1\n          </StructuredListCell>\n          <StructuredListCell>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui magna, finibus id tortor sed, aliquet bibendum augue. Aenean posuere sem vel euismod dignissim. Nulla ut cursus dolor. Pellentesque vulputate nisl a porttitor interdum.\n          </StructuredListCell>\n          <StructuredListInput\n            id="row-1"\n            value="row-1"\n            title="row-1"\n            name="row-1"\n            defaultChecked\n          />\n         <StructuredListCell>\n            <CheckmarkFilled\n              className="cds--structured-list-svg"\n              aria-label="select an option">\n              <title>select an option</title>\n            </CheckmarkFilled>\n          </StructuredListCell>\n        </StructuredListRow>\n        <StructuredListRow tabIndex={0}>\n          <StructuredListCell>\n            Row 2\n          </StructuredListCell>\n          <StructuredListCell>\n            Row 2\n          </StructuredListCell>\n          <StructuredListCell>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui magna, finibus id tortor sed, aliquet bibendum augue. Aenean posuere sem vel euismod dignissim. Nulla ut cursus dolor. Pellentesque vulputate nisl a porttitor interdum.\n          </StructuredListCell>\n          <StructuredListInput\n            id="row-2"\n            value="row-2"\n            title="row-2"\n            name="row-2"\n          />\n         <StructuredListCell>\n            <CheckmarkFilled\n              className="cds--structured-list-svg"\n              aria-label="select an option">\n              <title>select an option</title>\n            </CheckmarkFilled>\n          </StructuredListCell>\n        </StructuredListRow>\n        <StructuredListRow tabIndex={0}>\n          <StructuredListCell>\n            Row 3\n          </StructuredListCell>\n          <StructuredListCell>\n            Row 3\n          </StructuredListCell>\n          <StructuredListCell>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui magna, finibus id tortor sed, aliquet bibendum augue. Aenean posuere sem vel euismod dignissim. Nulla ut cursus dolor. Pellentesque vulputate nisl a porttitor interdum.\n          </StructuredListCell>\n          <StructuredListInput\n            id="row-3"\n            value="row-3"\n            title="row-3"\n            name="row-3"\n          />\n         <StructuredListCell>\n            <CheckmarkFilled\n              className="cds--structured-list-svg"\n              aria-label="select an option">\n              <title>select an option</title>\n            </CheckmarkFilled>\n          </StructuredListCell>\n        </StructuredListRow>\n      </StructuredListBody>\n    </StructuredListWrapper>\n  ')),(0,s.kt)("h2",null,"Formatting"),(0,s.kt)("h3",null,"Anatomy"),(0,s.kt)("p",null,"Structured list is composed of two sections—column header and data row."),(0,s.kt)(h,{mdxType:"Row"},(0,s.kt)(b,{colLg:12,mdxType:"Column"},(0,s.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"928px"}},"\n      ",(0,s.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsSAAALEgHS3X78AAAAyElEQVQoz6WS2Q4CIQxF/f/P1EfHBVqnvS2LkTomM5oY43lgCRxuIez6H+yiK5ebC8w9pu7OzL5Mv8h2OMk5Z6Zaa+9dRKZpYmYsqGq0ZtZaW8m9tQr34iGbGTMTkaq6u5kBiNbd22AlFwUMUWopRUQi551tMvZHTze1x/GRnFIioo0WlW/lcmGnWYFYAEBEOWca5AERzfOMsWdbdlVTPJNDjmsHMRaRKHst14f8ujOAlFJeiPF1QERvrz3Cl769lj/ySf79h90BUAeH5NsbJFsAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,s.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Structured list anatomy",title:"Structured list anatomy",src:"/static/2eca0889d71efaad7b04ae259e31e293/39971/structured-list-usage-1.png",srcSet:["/static/2eca0889d71efaad7b04ae259e31e293/7fc1e/structured-list-usage-1.png 288w","/static/2eca0889d71efaad7b04ae259e31e293/a5df1/structured-list-usage-1.png 576w","/static/2eca0889d71efaad7b04ae259e31e293/39971/structured-list-usage-1.png 928w"],sizes:"(max-width: 928px) 100vw, 928px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("strong",{parentName:"li"},"Column header"),": Shows titles for the row header description."),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("strong",{parentName:"li"},"Data row"),": Shows different types of data. Rows can be selectable and\nmodified to show alternating zebra stripe background colors")),(0,s.kt)("h3",null,"Sizing"),(0,s.kt)("p",null,"The structured list is available in two different sizes in height: default and\ncondensed. The structure list’s width varies based on content and layout."),(0,s.kt)(h,{mdxType:"Row"},(0,s.kt)(b,{colLg:8,mdxType:"Column"},(0,s.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,s.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"66.66666666666666%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAAAsSAAALEgHS3X78AAAArElEQVQoz6WR2wqEMAxE/f8/VRHRJm1uzS5sWOmCF1zP07ycMp10rwd0W6q15pwR0d3NjIhuyKo6TdOyLO4uIvM8SwMzE1GtdV8Ox90jqyo3EFEpxcwOa5dS4u3IIWzknM9kRAzZzPIviAgAqnpYOzpveZd9+dGpRKTv+3EcU0rMPAwDEemX2PxwbTMDgJhEVQEg/hkhpbSuKzPfk/EDAJzJcdv2zi0Xtf8Y7A1LRgDE78uTDgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,s.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"data table anatomy",title:"data table anatomy",src:"/static/9286d99454928a67f8ad241a1a1b39e7/3cbba/structured-list-usage-2.png",srcSet:["/static/9286d99454928a67f8ad241a1a1b39e7/7fc1e/structured-list-usage-2.png 288w","/static/9286d99454928a67f8ad241a1a1b39e7/a5df1/structured-list-usage-2.png 576w","/static/9286d99454928a67f8ad241a1a1b39e7/3cbba/structured-list-usage-2.png 1152w","/static/9286d99454928a67f8ad241a1a1b39e7/0b124/structured-list-usage-2.png 1728w","/static/9286d99454928a67f8ad241a1a1b39e7/0c3f5/structured-list-usage-2.png 1856w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,s.kt)("h3",null,"Alignment"),(0,s.kt)("p",null,"The structured list is available in two alignment styles: hang and flush\nalignment."),(0,s.kt)(h,{mdxType:"Row"},(0,s.kt)(b,{colLg:8,mdxType:"Column"},(0,s.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,s.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"75%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAIAAABr+ngCAAAACXBIWXMAAAsSAAALEgHS3X78AAAAuUlEQVQoz62S3QqDMAxGff9HlXqhxTT98rOBYUVlnWzuuwqEQ5qTDo8bGVrl7mamqq3+AgYwjmNKyd0BpJQA6DHu/h42M2aOdtT7lFKIKN7Vhc3M3VWVmesuwXdhVSWiWNXMiCimlS1EtK6riHSFAWgwAHkFW2qtJ4vDf07FzNM0LcsS5ud5vrzWAc45i4i7i0jOObZtqomou7Oqtp6ZnVRf2A4lDS7HXNgWkT3cvkc78qfJt2z/AD8BRBZ4XrssZ+sAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,s.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"data table anatomy",title:"data table anatomy",src:"/static/748da8935006e3cc9438a8e9ad261282/3cbba/structured-list-usage-3.png",srcSet:["/static/748da8935006e3cc9438a8e9ad261282/7fc1e/structured-list-usage-3.png 288w","/static/748da8935006e3cc9438a8e9ad261282/a5df1/structured-list-usage-3.png 576w","/static/748da8935006e3cc9438a8e9ad261282/3cbba/structured-list-usage-3.png 1152w","/static/748da8935006e3cc9438a8e9ad261282/0b124/structured-list-usage-3.png 1728w","/static/748da8935006e3cc9438a8e9ad261282/0c3f5/structured-list-usage-3.png 1856w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,s.kt)("h2",null,"Content"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"A maximum of three paragraphs of text is recommended per row."),(0,s.kt)("li",{parentName:"ul"},"A structured list’s title and row information should use sentence-case\ncapitalization.")),(0,s.kt)("h4",null,"Column header titles"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Column header titles should be short and clear, sticking to one or two words\nthat describe the data in that column."),(0,s.kt)("li",{parentName:"ul"},"In cases where a column header title is too long, wrap the text to two lines\nand then truncate the rest of the text. The full text should be shown in a\ntooltip on hover."),(0,s.kt)("li",{parentName:"ul"},"Column header titles should use sentence-case capitalization.")),(0,s.kt)("h2",null,"Interactions"),(0,s.kt)("h4",null,"Selectable structured list"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Only one item can be selected from the list."),(0,s.kt)("li",{parentName:"ul"},"By default, one option should be selected."),(0,s.kt)("li",{parentName:"ul"},"If you need to select multiple items, use a\n",(0,s.kt)("a",{parentName:"li",href:"/components/data-table/usage"},"data table.")),(0,s.kt)("li",{parentName:"ul"},"When the user selects an item from the list, the selected row will appear with\nthe ",(0,s.kt)("inlineCode",{parentName:"li"},"checkmark--filled")," icon.")),(0,s.kt)("h2",null,"Related"),(0,s.kt)("p",null,"These following components are additional ways to organize a group of data."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.carbondesignsystem.com/components/accordion/usage/"},"Accordion")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.carbondesignsystem.com/components/data-table/usage/"},"Data table")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.carbondesignsystem.com/components/list/usage/"},"List"))),(0,s.kt)("h2",null,"Feedback"),(0,s.kt)("p",null,"Help us improve this component by providing feedback, asking questions, and\nleaving any other comments on\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/carbon-design-system/carbon-website/issues/new?assignees=&labels=feedback&template=feedback.md"},"GitHub"),"."))}A.isMDXComponent=!0}}]);