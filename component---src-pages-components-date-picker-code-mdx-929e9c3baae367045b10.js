"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[47137],{28399:function(e,t,a){a.d(t,{Z:function(){return P}});var n=a(67294),o=a(88650),r=a.n(o),c=a(1597),s=a(64905),i=a(68636),l=a(75900),m=a.n(l);var d=e=>{let{title:t,theme:a,tabs:o=[]}=e;return n.createElement("div",{className:m()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":o.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var p=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:o}}}=(0,c.useStaticQuery)("1364590287"),{baseUrl:r,subDirectory:s,branch:i}=a||o,l=`${r}/edit/${i}${s}/src/pages${t}`;return r?n.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:l},"Edit this page on GitHub"))):null},u=a(56328),k=a(51721);let y=function(e){function t(){return e.apply(this,arguments)||this}return(0,k.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,o=a.split("/").filter(Boolean).slice(-1)[0],s=t.map((e=>{const t=r()(e,{lower:!0,strict:!0}),s=t===o,i=new RegExp(`${o}/?(#.*)?$`),l=a.replace(i,t);return n.createElement("li",{key:e,className:m()({"PageTabs-module--selected-item--aBB0K":s},"PageTabs-module--list-item--024o6")},n.createElement(c.Link,{className:"PageTabs-module--link--Kz-7R",to:`${l}`},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},t}(n.Component);var g=y,h=a(17680),b=a(75387),T=a(50041);var v=e=>{let{date:t}=e;const a=new Date(t);return t?n.createElement(T.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(T.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var P=e=>{let{pageContext:t,children:a,location:o,Title:l}=e;const{frontmatter:m={},relativePagePath:k,titleType:y}=t,{tabs:T,title:P,theme:x,description:f,keywords:E,date:C}=m,{interiorTheme:D}=(0,b.Z)(),{site:{pathPrefix:w}}=(0,c.useStaticQuery)("2456312558"),N=w?o.pathname.replace(w,""):o.pathname,S=T?N.split("/").filter(Boolean).slice(-1)[0]||r()(T[0],{lower:!0}):"",I=x||D;return n.createElement(i.Z,{tabs:T,homepage:!1,theme:I,pageTitle:P,pageDescription:f,pageKeywords:E,titleType:y},n.createElement(d,{title:l?n.createElement(l,null):P,label:"label",tabs:T,theme:I}),T&&n.createElement(g,{title:P,slug:N,tabs:T,currentTab:S}),n.createElement(h.Z,{padded:!0},a,n.createElement(p,{relativePagePath:k}),n.createElement(v,{date:C})),n.createElement(u.Z,{pageContext:t,location:o,slug:N,tabs:T,currentTab:S}),n.createElement(s.Z,null))}},38550:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return s},default:function(){return b}});var n=a(45987),o=(a(67294),a(64983)),r=a(28399);const c=["components"],s={},i=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},l=i("PageDescription"),m=i("Row"),d=i("Column"),p=i("ResourceCard"),u=i("MdxIcon"),k=i("ComponentDemo"),y=i("ComponentVariant"),g={_frontmatter:s},h=r.Z;function b(e){let{components:t}=e,a=(0,n.Z)(e,c);return(0,o.kt)(h,Object.assign({},g,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(l,{mdxType:"PageDescription"},(0,o.kt)("p",null,"Preview the date picker component with the React live demo. For detailed code\nusage documentation, see the Storybooks for each framework below.")),(0,o.kt)("h2",null,"Documentation"),(0,o.kt)(m,{className:"resource-card-group",mdxType:"Row"},(0,o.kt)(d,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(p,{subTitle:"React",href:"https://react.carbondesignsystem.com/?path=/story/components-datepicker--simple",mdxType:"ResourceCard"},(0,o.kt)(u,{name:"react",mdxType:"MdxIcon"}))),(0,o.kt)(d,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(p,{subTitle:"Angular (Community)",href:"https://angular.carbondesignsystem.com/?path=/story/components-date-picker--basic",mdxType:"ResourceCard"},(0,o.kt)(u,{name:"angular",mdxType:"MdxIcon"}))),(0,o.kt)(d,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(p,{subTitle:"Vue (Community)",href:"http://vue.carbondesignsystem.com/?path=/story/components-cvdatepicker--default",mdxType:"ResourceCard"},(0,o.kt)(u,{name:"vue",mdxType:"MdxIcon"}))),(0,o.kt)(d,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(p,{subTitle:"Web Components (Community)",href:"https://web-components.carbondesignsystem.com/?path=/story/components-date-picker--default",mdxType:"ResourceCard"},(0,o.kt)(u,{name:"webcomponents",mdxType:"MdxIcon"})))),(0,o.kt)("h2",null,"Live demo"),(0,o.kt)(k,{components:[{id:"default-datepicker",label:"Default"},{id:"single-calendar",label:"Single with calendar"},{id:"range-calendar",label:"Range with calendar"},,{id:"time-picker",label:"Time picker"}],mdxType:"ComponentDemo"},(0,o.kt)(y,{id:"default-datepicker",knobs:{DatePicker:["light"],DatePickerInput:["disabled","invalid","size"]},links:{React:"https://react.carbondesignsystem.com/?path=/story/components-datepicker--simple",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-date-picker--simple",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvdatepicker--default",Vanilla:"https://the-carbon-components.netlify.com/?nav=date-picker","Web Components":"https://web-components.carbondesignsystem.com/?path=/story/components-date-picker--default"},mdxType:"ComponentVariant"},'\n    <DatePicker dateFormat="m/d/Y" datePickerType="simple">\n      <DatePickerInput\n        id="date-picker-default-id"\n        placeholder="mm/dd/yyyy"\n        labelText="Date picker label"\n        type="text"\n      />\n    </DatePicker>\n  '),(0,o.kt)(y,{id:"single-calendar",knobs:{DatePicker:["light"],DatePickerInput:["disabled","invalid","size"]},links:{React:"https://react.carbondesignsystem.com/?path=/story/components-datepicker--single",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-date-picker--single",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvdatepicker--single",Vanilla:"https://the-carbon-components.netlify.com/?nav=date-picker","Web Components":"https://web-components.carbondesignsystem.com/?path=/story/components-date-picker--single-with-calendar"},mdxType:"ComponentVariant"},'\n    <DatePicker dateFormat="m/d/Y" datePickerType="single">\n      <DatePickerInput\n        id="date-picker-calendar-id"\n        placeholder="mm/dd/yyyy"\n        labelText="Date picker label"\n        type="text"\n      />\n    </DatePicker>\n  '),(0,o.kt)(y,{id:"range-calendar",knobs:{DatePicker:["light"],DatePickerInput:["disabled","invalid","size"]},links:{React:"https://react.carbondesignsystem.com/?path=/story/components-datepicker--range",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-date-picker--range",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvdatepicker--range",Vanilla:"https://the-carbon-components.netlify.com/?nav=date-picker","Web Components":"https://web-components.carbondesignsystem.com/?path=/story/components-date-picker--range-with-calendar"},mdxType:"ComponentVariant"},'\n    <DatePicker dateFormat="m/d/Y" datePickerType="range">\n      <DatePickerInput\n        id="date-picker-range-start"\n        placeholder="mm/dd/yyyy"\n        labelText="Date picker label"\n        type="text"\n      />\n      <DatePickerInput\n        id="date-picker-range-end"\n        placeholder="mm/dd/yyyy"\n        labelText="Date picker label"\n        type="text"\n      />\n    </DatePicker>\n  '),(0,o.kt)(y,{id:"time-picker",knobs:{TimePicker:["light"]},links:{React:"https://react.carbondesignsystem.com/?path=/story/components-timepicker--default",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-time-picker--simple",Vue:"http://vue.carbondesignsystem.com/?path=/storycomponents-cvdatepicker--default",Vanilla:"https://the-carbon-components.netlify.com/?nav=date-picker","Web Components":"https://web-components.carbondesignsystem.com/?path=/story/components-date-picker--default"},mdxType:"ComponentVariant"},'\n    <TimePicker id="time-picker">\n      <TimePickerSelect id="time-picker-select-1">\n        <SelectItem value="AM" text="AM" />\n        <SelectItem value="PM" text="PM" />\n      </TimePickerSelect>\n      <TimePickerSelect id="time-picker-select-2" >\n        <SelectItem value="Time zone 1" text="Time zone 1" />\n        <SelectItem value="Time zone 2" text="Time zone 2" />\n      </TimePickerSelect>\n    </TimePicker>\n  ')))}b.isMDXComponent=!0}}]);