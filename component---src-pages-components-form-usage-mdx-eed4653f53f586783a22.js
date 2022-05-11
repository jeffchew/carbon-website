"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[94833],{28399:function(e,t,a){a.d(t,{Z:function(){return w}});var n=a(67294),i=a(88650),s=a.n(i),o=a(1597),r=a(64905),l=a(68636),c=a(75900),m=a.n(c);var d=e=>{let{title:t,theme:a,tabs:i=[]}=e;return n.createElement("div",{className:m()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":i.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var p=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:i}}}=(0,o.useStaticQuery)("1364590287"),{baseUrl:s,subDirectory:r,branch:l}=a||i,c=`${s}/edit/${l}${r}/src/pages${t}`;return s?n.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},g=a(56328),u=a(51721);let b=function(e){function t(){return e.apply(this,arguments)||this}return(0,u.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,i=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((e=>{const t=s()(e,{lower:!0,strict:!0}),r=t===i,l=new RegExp(`${i}/?(#.*)?$`),c=a.replace(l,t);return n.createElement("li",{key:e,className:m()({"PageTabs-module--selected-item--aBB0K":r},"PageTabs-module--list-item--024o6")},n.createElement(o.Link,{className:"PageTabs-module--link--Kz-7R",to:`${c}`},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},r))))))},t}(n.Component);var h=b,f=a(17680),A=a(75387),k=a(50041);var y=e=>{let{date:t}=e;const a=new Date(t);return t?n.createElement(k.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(k.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var w=e=>{let{pageContext:t,children:a,location:i,Title:c}=e;const{frontmatter:m={},relativePagePath:u,titleType:b}=t,{tabs:k,title:w,theme:x,description:v,keywords:N,date:E}=m,{interiorTheme:Q}=(0,A.Z)(),{site:{pathPrefix:C}}=(0,o.useStaticQuery)("2456312558"),S=C?i.pathname.replace(C,""):i.pathname,B=k?S.split("/").filter(Boolean).slice(-1)[0]||s()(k[0],{lower:!0}):"",H=x||Q;return n.createElement(l.Z,{tabs:k,homepage:!1,theme:H,pageTitle:w,pageDescription:v,pageKeywords:N,titleType:b},n.createElement(d,{title:c?n.createElement(c,null):w,label:"label",tabs:k,theme:H}),k&&n.createElement(h,{title:w,slug:S,tabs:k,currentTab:B}),n.createElement(f.Z,{padded:!0},a,n.createElement(p,{relativePagePath:u}),n.createElement(y,{date:E})),n.createElement(g.Z,{pageContext:t,location:i,slug:S,tabs:k,currentTab:B}),n.createElement(r.Z,null))}},30533:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return r},default:function(){return k}});var n=a(45987),i=(a(67294),a(64983)),s=a(28399);const o=["components"],r={},l=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},c=l("PageDescription"),m=l("AnchorLinks"),d=l("AnchorLink"),p=l("ComponentDemo"),g=l("ComponentVariant"),u=l("Row"),b=l("Column"),h=l("Caption"),f={_frontmatter:r},A=s.Z;function k(e){let{components:t}=e,a=(0,n.Z)(e,o);return(0,i.kt)(A,Object.assign({},f,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(c,{mdxType:"PageDescription"},(0,i.kt)("p",null,"A form is a group of related input controls that allows users to provide data or\nconfigure options.")),(0,i.kt)(m,{mdxType:"AnchorLinks"},(0,i.kt)(d,{mdxType:"AnchorLink"},"Overview"),(0,i.kt)(d,{mdxType:"AnchorLink"},"Live demo"),(0,i.kt)(d,{mdxType:"AnchorLink"},"Formatting"),(0,i.kt)(d,{mdxType:"AnchorLink"},"Form logic"),(0,i.kt)(d,{mdxType:"AnchorLink"},"Validation and errors"),(0,i.kt)(d,{mdxType:"AnchorLink"},"Feedback")),(0,i.kt)("h2",null,"Overview"),(0,i.kt)("p",null,"Forms are used for submitting data so be as concise as possible when designing.\nKeep it short. Think about each field and what value the data will provide. What\ndo you gain by collecting this information?"),(0,i.kt)("h4",null,"Begin by asking:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Is this a piece of information that is valuable to us?"),(0,i.kt)("li",{parentName:"ul"},"Is this a piece of information that is so valuable that it’s worth preventing\nthe user from continuing if they choose not to provide it?")),(0,i.kt)("h2",null,"Live demo"),(0,i.kt)(p,{components:[{id:"form",label:"Form"}],mdxType:"ComponentDemo"},(0,i.kt)(g,{id:"form",knobs:{TextInput:["disabled","invalid","light","type"],TextArea:["disabled","invalid","light"],Select:["disabled","invalid","light","inline"],SelectItem:["disabled","hidden"]},links:{React:"https://react.carbondesignsystem.com/?path=/story/components-form--default",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-input--label",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvform--default","Web Components":"https://web-components.carbondesignsystem.com/?path=/story/components-input--form-item"},mdxType:"ComponentVariant"},'\n  <Form>\n  <Stack gap={7}>\n    <TextInput\n      helperText="Optional helper text here; if message is more than one line text should wrap (~100 character count maximum)"\n      id="test2"\n      invalidText="Invalid error message."\n      labelText="Text input label"\n      placeholder="Placeholder text"\n    />\n  <TextArea\n    cols={50}\n    helperText="Optional helper text here; if message is more than one line text should wrap (~100 character count maximum)"\n    id="test5"\n    invalidText="Invalid error message."\n    labelText="Text area label"\n    placeholder="Placeholder text"\n    rows={4}\n  />\n    <Select\n      defaultValue="placeholder-item"\n      id="select-1"\n      invalidText="This is an invalid error message."\n      labelText="Select"\n    >\n      <SelectItem\n        text="Option 1"\n        value="option-1"\n      />\n      <SelectItem\n        text="Option 2"\n        value="option-2"\n      />\n      <SelectItem\n        text="Option 3"\n        value="option-3"\n      />\n    </Select>\n  <Button\n    kind="primary"\n    tabIndex={0}\n    type="submit"\n  >\n    Submit\n  </Button>\n  </Stack>\n</Form>\n  ')),(0,i.kt)("h2",null,"Formatting"),(0,i.kt)("p",null,"All forms are comprised of six elements:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Labels:")," Inform users what the corresponding input fields mean."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Input fields:")," Enable users to provide information. Information can be\nentered through a variety of different input fields ranging from text fields,\ncheckboxes, and many other types."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Helper text:")," Provides assistance on how to fill out a field. Helper text\nis optional."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Placeholder text:")," Hints at what goes into a field. Placeholder text is\noptional."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Actions:")," Allow users to submit a form."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Validation:")," Ensures the data submitted by the user conforms to acceptable\nparameters.")),(0,i.kt)(u,{mdxType:"Row"},(0,i.kt)(b,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"100%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAElUlEQVQ4y3WUe0hbVxzHf0kzH63SWbvQDraxDfrXurGxjQ3aTVa6llKZFUGt0mIsPgnW0bSCDmrprLoxQSuVOrPHP7VgJ01Fc1MTsK6ry000N12aex5qYs6NcCl2FB9gau84F42VsgNf7uXccz78Ht/7A0opNDU1QX19PfT19cHg4CAQQoDvI4RAVVXweDzgdrsNHo9nQ7Chlxa/2N3dDW1tbeBwOGBiYmILcH5+HjRNg6GhIRgeHtbPxGIxI8Z4G6V0GyHEwM/yO0ng4cOHIScnB8rLy3daLBbz9PR0GqU0DSGUpqrqKyUlJUan07lfEIQPRkZG9imKAhhj/e66DEkgf6msrISysjJobW01t7S0vI0xzqKUZmGMX0skEqZQKHTK5/P5RVH80+/3ezDGXZTSHwkh1yilxzmDEGJMRtjR0cFhcOvWrfSBgYFMSmk6FyFkr6ZpBoTQCUmSOgKBwPeSJHHQdUppDyHkd0pp/nrKm8D29na4dOkS9Pf369pIBWP86oMHD0AQhHddLtdBQRAO3L59e284HIbZ2dlkrXkdt9Swt7cXrl69qhed6wWgeX5+PtNut+8NBAIWhNBFQki1oihFsVjsncePH3OwkTdPlmX437Vekxe3ssfGxooXFhbOK4piY4w1KYpSyxgrZIxtZ4wBV3KZzeYt4jYJBoNgs9k2jqQghAoVRbnIGLugKEojYyyHMbabMWbaAuSpcQDX6uoqrK2tQSKRgJWVFRgfH09+i0ajH6uqmh+Px08wxorXlR+LxXbEYjHuzZeBi4uLsLy8DEtLS/D06VP9yY0uCMJbgiB86nQ6PxkYGNjNmxKJRHQv8tqFQiED30sCc3NzIS8vD6qrq3edOXPmjcrKytetVuseu92ebbFYQJKkelEUA16v9y+/33+HENJNKb2GEPqNW4rDZFk2JhvA8+chR6PR1Egksj0SiaTPzs5yL2bwyDHG3wSDwR8kSboYDAZbMcYc2IUQsmOM83iUCKFNH/IBEI/H9f+Wp8LhMzMz+vvU1JReDsHlev/u6OiHI07nvsjMDBCEAMuyLvnRIyN6MeWCggJdNpttV01NzZuNjY17wuFwBsZ4Z0PdWfjn4cOzfp+PiV6vLIpiCMlIIJgMyTIZk2VikWUCskw2U+aRceerqmoihKT6fL5UhFAKDYfTZgBAnQocCgl3bdH7E9aFwGSdOuE5H7/vtq1K7u8SQfeXzx66IRF0G5LAY8eOwdGjR6GioiKzqqoq2+FwpKuqmvK315vOz3x95MihK23tTbnHj5wz7ztg+6p18VzxL9q3cFprhBLtCyjUAEq1TWBDQ4Ounp6eHZ2dnVn37t3bMTc3t10UxUx+pqiwsKyl5YqjpKjgxkcH827m/fTkZtmv2g3z2Wd3sqzPT2bWPofsuuebTeHji4tPnObmZnC5XMBn3kZDSktL4Xrvz1B26iS899lxON3zL1z4Q4PsujXIqNUgpUoz7LRqm02pqanhHtSnzuXLl2F0dFS30uTkpA4sLi42dnZ2mU6VFJr2f55rKup6YrL2a6bsujVTRq1mTK3SYAP4HxVmVum5vfvrAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"effective form design",title:"effective form design",src:"/static/f988e10376c4c9b5aea6c4c85cf6dba2/3cbba/form-usage-1.png",srcSet:["/static/f988e10376c4c9b5aea6c4c85cf6dba2/7fc1e/form-usage-1.png 288w","/static/f988e10376c4c9b5aea6c4c85cf6dba2/a5df1/form-usage-1.png 576w","/static/f988e10376c4c9b5aea6c4c85cf6dba2/3cbba/form-usage-1.png 1152w","/static/f988e10376c4c9b5aea6c4c85cf6dba2/92c65/form-usage-1.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,i.kt)("h3",null,"Button placement"),(0,i.kt)("p",null,"On non-modal or in-page forms, align single buttons or Secondary / Primary\nbutton groups to the left. Buttons should align with the form controls\nregardless of the user‘s window width."),(0,i.kt)(u,{mdxType:"Row"},(0,i.kt)(b,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"114.23611111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAXCAYAAAALHW+jAAAACXBIWXMAAAsSAAALEgHS3X78AAAD8UlEQVQ4y52Vz2sbRxTHn2Q7hlDbappGorgQSNJDm2JFbg+GQiik4NZQN9TYRo2JLLdpCy0+tYf6ZmEwuPSQnPwf9Or+Ab6YHpoYg/VrtbIl1ava1u5qtTszO/qx0mrKTCUjpz9wuvDhO/Pe4zHzeG8W/H4//Bv/6wsEAhxPIBDo9/v9/b0JJyYm/pN//EKhEIyNjV0OBoPXx8fHRzc2NgYZY32qqvbZts3p13XdwxjjeLkPISR8hJBuDAc4wBg7w3VdQAhBtVoFSukZpmmeiyOEnPP3ArlcDg4PD2+lUqnvC4XCN7VabdG27SillMPXX7darVFJkt5LJBI/aJr26LmYJUrpQ0rpsEhoWRZgjD85Pj5mhmHYCKGaZVkChJBtWRYjhEzpur6qKAozTZPH1Dt+TgMhZCGEbvDbwfT0NExOTno3NzcHtra2vGtra55YLOZZXl72zMzMeNbX17091+1bWVnxzM3NeaLRqCcSifQCHNjZ2YHt7W3/3t7e+5TSYKVSCSGEQrZth6rVKucOpfRdSuk7tm3f6djOfB0NVqvVQV57UWBCyP1SqcSKxWIjn883i8ViS9f1FiGkhTHm2uzQeg5ucwkhNiHkJs8FmUwGJEkaicfjwUQi8TZHkqTb+Xz+tqIoF+UtRVEuKYoCEA6HYXZ2diAcDl9ZWFjwzc/PX4nFYoOdmnleAFFn0XcIoU8RQgxj3MQYu/yaF4THtzHGNsb4JsYYeMtwRk3TfKBpWljX9bCmaZ9dkG7sfLlcHtJ1/WwCRWvs7u5CKpWCdDoNiUQCstmsqHE8Hhe2ZDIp7HzP4yRJgv39fZBlGRqNBtTrdQCetVwu31NVNaOq6m+lUumZqqrPuGqaJjg9PRX7Lt29qqpPT05OdnVd/9VxnNd5UugM9Ww+n2eyLDNJkoRyMpnMmY2vU6mUWB8cHAh7NpsVVCoV1mg0bjmOA92hvp/L5Vg6na5ms9l6JpMRpNPpuiRJdVmWhfbakskk15okSY5hGMhxnBvNZhMAERsQtsPFP47ZYa7AcvnfWaHAKTA+u/zkR0dHQvneMAxxIj7jvDPK5bJYU9t+g/71fJU5bzKntM4ap6usebpKLPXHUkl9omnaY1VVz2Ga5mPLsoRyEEJPDMP4qagoV4u8seFDF2DSfQ2m2jPwEfsYptgsXGbXfnlaA8aoGM3u48npfRd7MXRNAL6lNvii7fnr37aZ/0uX+aIuu/bI/QrutmHlZ/dSs9n0tlotb1c7r/bfQGYFODAUcWFo0X31lc/de74l9+5I1P3AF3UDAw8YBL+rgyxnRT9eFHgp4gquftGGl5faMLzowki03cGF4cX2C/31/gTKAqaD+av+zwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Primary button alignment in Forms",title:"Primary button alignment in Forms",src:"/static/a361479bbd0e4b155f37a24a914b37c0/3cbba/form-usage-5.png",srcSet:["/static/a361479bbd0e4b155f37a24a914b37c0/7fc1e/form-usage-5.png 288w","/static/a361479bbd0e4b155f37a24a914b37c0/a5df1/form-usage-5.png 576w","/static/a361479bbd0e4b155f37a24a914b37c0/3cbba/form-usage-5.png 1152w","/static/a361479bbd0e4b155f37a24a914b37c0/92c65/form-usage-5.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)(h,{mdxType:"Caption"},"Single button alignment in forms"))),(0,i.kt)(u,{mdxType:"Row"},(0,i.kt)(b,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"114.23611111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAXCAYAAAALHW+jAAAACXBIWXMAAAsSAAALEgHS3X78AAAEQUlEQVQ4y52V3U8bRxDAx0CCVOJA0lRGrdtGStJKTSoM9ANjk36ERDSpSiMIULeoYJJUlVrx1ofyVCwiKqQ+JBISz/0L+Ad4QX2pWyT8dbbxBz3zYft8vtu7XeOv81a7NchETUS70k8zszOau52bnQOLxQLP4n+tzs5Ohqmzs7PFYrG0NCa02+3P5V9XT08PdHV1vWCz2S729vZal5aWWimlzZlMphljzGiRJMlEKWU0MR9CiPt0XT+MYQADKKVHGIYBCCEoFApACDlCUZRjcbquH/M3AvF4HGKx2JVgMPhDMpn87uDgYBpj7CaEMJj+bbVatQqC4PT7/T9ms9mHT8XMEEK+JoSc5QlVVQVN0z7f3d2lsixjhNCBqqochBBWVZXqun5HkqR5URSpoigsplj3M0oIIRUhdImdDoaHh2FoaKhpZWXl1OrqatPCwoLJ4/GYZmdnTaOjo6bFxcWmhuM2z83NmcbHx01ut9s0NTXVCDBgfX0d1tbWLBsbGx8RQmz5fL4HIdSDMe4pFAqMbkLIu4SQdzDG3fW9I19d2gqFQiurPS+wrut30+k0TaVSpUQiUUmlUlVJkqq6rlc1TWOyUqf6FGzP0HUd67p+meWCcDgMgiC0+3w+m9/vf5shCMK1RCJxTRTFk3JVFMXToigCuFwuGBsbO+Vyuc5PTk52TExMnPd4PK31mpn+A7zO7AszRhBCFCFUQQgZ7JgnpKJpWk3TNKxp2mWWi7eNqqpWRVG+UlV1XJblL7LZ7JcnxFWXE7lczixJ0tEN5K8MALxFvF4vBINBiEajvMY+nw9CoRAEAgHw+/3cZn5BEGBzcxMikQiUSiUoFosAsiwzBjOZTHhnZ2djb2/vz0wm402n095sNsvZ39/n9iGHdiaT+X1vb+8PSZJ+K5fLr7KkvG0wxmOJRIJGo1EaDodpJBLhHOqCIHA9GAxyfWtri++zeEY+n6elUulKuVyGw0FwNx6P01AoVIhGo8VwOMwJhUJFQRCKkUiEy8a9QCDA5IEgCGVZllG5XL5UqVQAkI4BadiV2tmlsXiSxhPbNJH8i7IHbG9v01gsRpPJJLfZXZZlmb8Ru+OsM3K5HNcJxm+Qf8ZXjvEWLacXaWn/J1rZn6eF/UeE4J8ppfOGUfUwWSwWH6XT6SeKojxWVfUxkwyE0BNZln9JieKFFGts+MQAGDJehju1UbhNh+F29R7cpAPQcu7q669Z771itX5mtVrHzGazfW1t7dhcbESWshzomKlBh7s2cfH7GrV8Y9AOd4WefUiFgY8//XVo6Ba9cWOQ9vf3U4fD4W1ra4Pl5eXT9cl9DKTkgQHmKQPM08ZLL943BjtmjA/bpyuDZx7Q3vedt94ccDoGHQ7nB3a7fdBut9u6u7thZGSE9+ezgDNTBufCgxqcm6lB+3QF2u5TeM9xE65fd4LT6YS+vj7+U2KS8bz1N/RAiOCbxC1fAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Secondary / Primary button alignment in forms",title:"Secondary / Primary button alignment in forms",src:"/static/fc464844afcbc7adf6621a0b090bfccd/3cbba/form-usage-6.png",srcSet:["/static/fc464844afcbc7adf6621a0b090bfccd/7fc1e/form-usage-6.png 288w","/static/fc464844afcbc7adf6621a0b090bfccd/a5df1/form-usage-6.png 576w","/static/fc464844afcbc7adf6621a0b090bfccd/3cbba/form-usage-6.png 1152w","/static/fc464844afcbc7adf6621a0b090bfccd/92c65/form-usage-6.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)(h,{mdxType:"Caption"},"Secondary / Primary button alignment in forms"))),(0,i.kt)("h3",null,"Multistep forms"),(0,i.kt)("p",null,"When the primary action implies a navigation step forward, as in a wizard, align\nsingle buttons or Secondary/Primary button groups to the right. This position\nconveys the “next step” intention."),(0,i.kt)(u,{mdxType:"Row"},(0,i.kt)(b,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"117.70833333333333%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAYCAYAAAD6S912AAAACXBIWXMAAAsSAAALEgHS3X78AAAD5klEQVQ4y6WVS2wbVRSGjxsnNDQeP4DSNG0jIdqCYMGCGCmBSCShUlGTgkibqKJR7QB1oCmwYYFUynNRseAhRUpZsEewATUpOwQLpAiEQhYRSeyxZ8aPsce+c8d3xmOTGR90p00EUpVHOdKne8/RzNH9z7kPCJ43gCNcRBCmEIIX/oZgzAVhEiFwFaH9MsLhRA3W0gVARA9RFEGW5U0/mUx6fjqdBghOmBy/8BoKwkUMBGPrQjDmBoRJ7BDewX3tU9hxeMoWkhlVQMR96+tOhyiKgqIo3O+wbbsjlUoFJUnyewnDbyCEL2H7/me/PNAZnQ70foe+cAIfjIwuHj9w5HjX/ienw4+83Wg9NXz6gRMnnuscHx+PLC8vt42NjUUGBwe7EokET9y6sLDgkyQJ4HtE+BoR5n/4Zs+3V47tAUBIfFX3n3r3z73nByP3fDQ95Oeyzrz0QktPT7RtaOiWPzEx0RKNRttGRkZauL+2tubJ3zAfAPjNqg5Li7/B70tJ+CtDICOuQlHNQ6Neg1Kp5NUun8+DZVlQLpe9mhWLRbBtG0zT9OJgGAanP5vN/prNZudUVZ1XVfUmY2zeNM2dcMM0zZ9N04zypF5Wy7L68vn8T+l0+kYqlZrPZDI3K5XKj7qu74Q5Xdd/0XU9qus6cN2+jfb/G0opNBqN3eID3hlZlp8QRfG6JEmfplKpzwuFwrVqtfqBaZofWpa1He9blnXNsqxjXg1rtRrneUoprVQqsq7rWUJIrlwuFwzDKFSrVW/cgqxhGKZhGEO8H3Anuf8HWFpagsXFxYO5XO5ko9F4xrbt/l3C/xmwbTvCt8+G5LOKomA+n0fGGBqGcTcMe5JXV1dhZWXlXlEUuxVFOSTL8t1wRJblvfyCgNnZWZiZmQnMzc11I6JQr9dDruuGHMfZMc1mM+w4jt9xnE3JL3K5mqYx0zRrjLHdwCilvFQnGWPgbWBK6SFJks7JsnxG07SxYrE4ViqVdspZVVVfLhaLnfxc/6fl9XodNE0DfoQIITuGXxS35z4oEwoV3RheS6ZrkpyTadVUCK0qOmUKoUyhBpMZY+ktSDLGyoyxAU8yIuU8inXlE6xnryBWriKWN3gPnfLHhJAvtuAzQsh1QshjfJUATyHnIAzgKAzgCDyNp6EfT0MfjkAvjsJR7FE13SuDQW+NW+CDUNyF0KR7rvuSiw+/6eJDl108+paLXa+7GJ508f5X3T8Qcy2qpvuX07SVEOK/Azzu81Yo8Bcu5t4XuOD2CzG3NzTZ7AvFm318How3eezx299AMN6EbS0QczcJxl2IvNL0EGJNLwFHiLse/Hndzv4B2TQI6666PK4AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Primary button alignment in a wizard",title:"Primary button alignment in a wizard",src:"/static/a3fe12d48878b0f3fb79dfd94816d949/3cbba/form-usage-7.png",srcSet:["/static/a3fe12d48878b0f3fb79dfd94816d949/7fc1e/form-usage-7.png 288w","/static/a3fe12d48878b0f3fb79dfd94816d949/a5df1/form-usage-7.png 576w","/static/a3fe12d48878b0f3fb79dfd94816d949/3cbba/form-usage-7.png 1152w","/static/a3fe12d48878b0f3fb79dfd94816d949/92c65/form-usage-7.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)(h,{mdxType:"Caption"},"Single button alignment in a wizard"))),(0,i.kt)(u,{mdxType:"Row"},(0,i.kt)(b,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"117.70833333333333%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAYCAYAAAD6S912AAAACXBIWXMAAAsSAAALEgHS3X78AAAERklEQVQ4y6WVWWwbVRSGT2o3ODQex64oSdNFYmnYHhCirscOIRtVghoHRDZVNKpj1DrQFJAQD0hN2CpR8YKQIgWQeEfwAmoS3hA8VErgIeQhIovHnhnHS7zM7hmTGR90BxIVVEFSrvTp3nOle+b+55x7BjwXJCBQlxGocQTPxd/BE7GAiiK4pxDqriIcj5VhPZEBRLRhGAY4jtu1NzY2bDuRSAB4RlWCk7qEFHUZ3Z7INuWJWG4qivXU23iobhzrj4/r1EYySyHioe1ts55hGIrneWLX67peH4/HPSzLOm2H3tcQvFew7kjHp41N/gl38Bus8cbwft/AUkvjiZbmI09PeB95s3LwXF//fWfPPtc0MjLiW1lZqR0eHvZ1dXU1x2Ix4vjgwsJCDcuyAN8iwpeIMPfdVwe+vnbqAABC7HPDee6dX10Xunz3fDDR7SSyBl96wXH6tL+2u/tPe3R01OH3+2vD4bCD2Ovr67b8nVEDAE5VFmB56Wf4ZXkDfkuWIMmsQS6bhopRhq2tLTt26XQaNE2DQqFgxyyXy4Gu66Cqqr0PkiQR2lKp1K1UKjWbzWbnstnsvKIoc6qq7oWbqqr+qKqqnzi1vWqaFkqn0z8kEomb8Xh8LplMzheLxe8FQdgLs4Ig/CQIgl8QBCC6a3bSfzuiKEKlUtkvNUAyw3HckwzDfMay7MfxePyTTCZzQ5bl91RVfV/TtP/iXU3TbmiadsqOYblcJjwviqJYLBY5QRBSpVJps1AoZCRJysiybM//QkqSJFWSpG6SD7iT3P8DLC8vw9LS0tHNzc3eSqXyjK7rbfuEnOnUdd1HymdH8hDP85hOp1FRFJQk6W7osyWvra3B6urqvQzDnOR5/hjHcXfDCY7jXKRBwMzMDExPT7tnZ2dPIiJlGEaDZVkNpmnumWq16jVN02ma5q7kF4ncfD6vqKpaVhRlPyiiKJJQ9SqKAnYBi6J4jGXZ8xzHDebz+eFcLje8tbW1V4ay2ezLuVyuibzrv6XcMAzI5/NAnlCpVNozpFH8ta6BQkmEoiD1rW8kyiy3yYmyypdEmRdEhS+JCi9KCieKIil4/k5IksQoilKQZbnTlowoEh5Fg7+ORuoaYnEKsbDDJG4XPqxWq9cRcRIRp/7BpGEYHxWLxS8EQXic3BLgDBKOQicOQCeGoRX7oQ37IYRhCOIAPIhPAcATFEUNulx14dra2n6Hw0Hoc7lcQwBweHFx0Q6ZLblhzIKGqHX+5BULH3rdwgeuWvjwGxY2v2qhL2qi9xLe6u7qnO/t7cWenh7s6OjAUCiEra2t9tze3v4W6dATExNOUjFAkT9cxDrsvmi1UREr2BCthhrGqiGy9kTMNncUH6MD/haapttoOhgMBAIhmqZDgUAgSNP0szRNN9I0DTuAO2Lt4hmzwPdK1YZ8yBMxwR1FoANnIBgMQjAUsg8FAgG43ckOZP8PjXPv892QFI0AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Primary button alignment in a wizard",title:"Primary button alignment in a wizard",src:"/static/a8f8204198ad618a1d7678aae3f37e41/3cbba/form-usage-8.png",srcSet:["/static/a8f8204198ad618a1d7678aae3f37e41/7fc1e/form-usage-8.png 288w","/static/a8f8204198ad618a1d7678aae3f37e41/a5df1/form-usage-8.png 576w","/static/a8f8204198ad618a1d7678aae3f37e41/3cbba/form-usage-8.png 1152w","/static/a8f8204198ad618a1d7678aae3f37e41/92c65/form-usage-8.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)(h,{mdxType:"Caption"},"Secondary / Primary button pair alignment in a wizard"))),(0,i.kt)("h2",null,"Content"),(0,i.kt)("h3",null,"Labels"),(0,i.kt)("p",null,"Effective form labeling helps users understand what information to enter into a\nText Input. Using a placeholder text as a label is often applied as a\nspace-saving method. However, this is not recommended because it hides context\nand presents accessibility issues."),(0,i.kt)("h4",null,"Accessibility best practices for labels:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Labels must be visible when an input gets focus."),(0,i.kt)("li",{parentName:"ul"},"Labels must be announced to the screen reader on focus."),(0,i.kt)("li",{parentName:"ul"},"Ensure the helper text that appears under an input is read when an assistive\ntechnology user stops at an input using ARIA."),(0,i.kt)("li",{parentName:"ul"},"Use sentence-style capitalization (only the first word in a phrase and any\nproper nouns capitalized).")),(0,i.kt)("h3",null,"Default values"),(0,i.kt)("p",null,"Where possible, add programmatic assistance. Detect and pre-fill inputs to\nreduce errors and save time. When the software can’t determine the value that\nbelongs in an input, use type-ahead to make suggestions. Use sentence-case for\ndefault values, detected values, and auto-completion text."),(0,i.kt)("h3",null,"Helper text"),(0,i.kt)("p",null,"Helper text is pertinent information that assists the user in completing a\nfield. Helper text is always available when the input is focused and appears\nunderneath the label. Use sentence-style capitalization, and in most cases,\nwrite the text as full sentences with punctuation."),(0,i.kt)("h3",null,"Placeholder text"),(0,i.kt)("p",null,"Placeholder text provides hints or examples of what to enter. Placeholder text\ndisappears after the user begins entering data into the Input and should not\ncontain crucial information. Use sentence-style capitalization, and in most\ncases, write the text as a direct statement without punctuation."),(0,i.kt)("h2",null,"Form logic"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Radio buttons")," are used when there is a list of two or more options that\nare mutually exclusive and the user must select exactly one choice. In other\nwords, clicking a non-selected radio button will deselect whatever other\nbutton was previously selected in the list."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Checkboxes")," are used when there are lists of options and the user may\nselect any number of choices, including zero, one, or several. In other words,\neach checkbox is independent of all other checkboxes in the list, so checking\none box doesn’t uncheck the others. A stand-alone checkbox, or a toggle can be\nused for a single option that the user can turn on or off."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Select elements")," are used for fields in which a single selection is\nrequired and there are a large number of possible options.")),(0,i.kt)(u,{mdxType:"Row"},(0,i.kt)(b,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"67.3611111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAABFElEQVQ4y51TW3KEIBD0/ufICfKf/xwgJ0jKZ/kqRUUQOjWTxYws2aSCTgnY0zYzbQYA3nvIQesQch2PFC6TC2stnHOXhJiQ3oeIyWmchETWdR3GccS6rtBaJwmXZWFc3/eM27btJL8oJIKiKFBVFfI85yRJGJKGYWBcXdcoy5Lxxpg7Qk8J9DWlFAfNUwppf55nVhriovA2ua94ovi/YbiGzjl/K7KXBf9vXBSyknAJRbFCaZfYOtkXAkzFt3b8TNlm33d2w6NjZzJRmQVPb894HwtYY5OWaZqGO9227WkxatJxHN8KQ8JqNV4+XlGrFodQIq0VPBgIyRHTNJ3Kszgp1bm/dDl5ZDawdw//5Z8aEpryCQGdAOX0tL7jAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"form logic",title:"form logic",src:"/static/5220ba8f7b5403b770919d6870a286eb/3cbba/form-usage-4.png",srcSet:["/static/5220ba8f7b5403b770919d6870a286eb/7fc1e/form-usage-4.png 288w","/static/5220ba8f7b5403b770919d6870a286eb/a5df1/form-usage-4.png 576w","/static/5220ba8f7b5403b770919d6870a286eb/3cbba/form-usage-4.png 1152w","/static/5220ba8f7b5403b770919d6870a286eb/92c65/form-usage-4.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,i.kt)("h2",null,"Validation and errors"),(0,i.kt)("h3",null,"Error messaging"),(0,i.kt)("p",null,"Effective error messaging can help the user to understand the problem and how to\nfix it. First, inform the user what has happened, then provide guidance on next\nsteps or possible resolutions.\n",(0,i.kt)("a",{parentName:"p",href:"/components/notification/usage"},"Inline notifications")," can be used to state the\ngeneral problem with the users input, such as ",(0,i.kt)("em",{parentName:"p"},"“Please input the required\nfields.”")," Inline Notifications can occur pre or post submission, depending on\nthe type of data the user is inputting."),(0,i.kt)("h3",null,"Form validation"),(0,i.kt)("p",null,"We recommend validating the users data before form submission. Use visual cues\nto guide the user as to where the problem lies within the form. This will help\nto easily identify the elements that need to be corrected."),(0,i.kt)("p",null,"The validation should appear when the user has clicked away from the text field.\nOnce the user corrects the errors within the text field, the validation should\ndisappear once the data is rendered as valid."),(0,i.kt)("p",null,"The validation label below the field should be as informative as possible when\ndescribing the issue with the users data. For example, if password limitations\nrequire 16 characters, but the user inputs a password with only six characters,\nthe text should read something like, ",(0,i.kt)("em",{parentName:"p"},"“Password must be at least 16\ncharacters.”")),(0,i.kt)(u,{mdxType:"Row"},(0,i.kt)(b,{colLg:8,mdxType:"Column"},(0,i.kt)("img",{src:"/ee35d10c18135c7a87a0d560ba9b2b75/form-validation.gif",alt:"form validation"}))),(0,i.kt)("h3",null,"Optional versus required fields"),(0,i.kt)("p",null,"When designing your form, consider the purpose and the use case, and note if the\nmajority of the fields are ",(0,i.kt)("strong",{parentName:"p"},"required")," or ",(0,i.kt)("strong",{parentName:"p"},"optional"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If the majority of the fields are required, mark ",(0,i.kt)("strong",{parentName:"li"},"only")," the optional fields\nwith (optional)."),(0,i.kt)("li",{parentName:"ul"},"If the majority of the fields are optional, mark ",(0,i.kt)("strong",{parentName:"li"},"only")," the required fields \nwith (required).")),(0,i.kt)("p",null,"Using the appropriate pattern based on the use case will reduce visual noise and\nclutter; helping your users to more quickly and accurately complete the form. It\nwill also ensure consistency through and across products."),(0,i.kt)("p",null,"If you choose to mark only optional form fields, it is recommended that an\ninstruction precedes the form stating either “All fields are required” or “All\nfields are required unless marked optional”."),(0,i.kt)(u,{mdxType:"Row"},(0,i.kt)(b,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"117.01388888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAXCAYAAAALHW+jAAAACXBIWXMAAAsSAAALEgHS3X78AAAEQ0lEQVQ4y63UXUwcRRwA8KFAGwRLoXQkoILRxoK+mGAOKB/3wceBYmL65FOVSpSgPiixibbB1EDCW33xgYeC4REIb7wTaUJSOUgJXHJ7u7fc7X1Aud2d3ZnZ47i7MbNyJ7TVGHWSX/7Z/0z+u//ZnQUQQvB/KIyTxDkIYTmE8DyEsOxE0X8p+AKE8CqEsA5C2AghbIAQXoIQFkMISyGEJSex9OSm+Vj0TMGuri6u1Ov1VjqdzmqPx1M1NDRU2d3dXeN2uy+7XK4aj8dz2ev1Vjmdzhp+3dfXV93R0QGnpqYuMMaK9/f3izHGgAOMsYL19XWws7MDVFUFiqLY4vE4SCQSIBaLgWg0CiKRiJ3n0TAMQAgB+WJ2wb29PRAOh9+RJGlZUZQH+/v7sxjjWdM0C56+PpV/gDH+BWP8M8a4yi5omibXmkgkHsuyvBGLxXy6rm9pmnaaDyG0gRDikc9vnuR5fKxp2pqmaVDTtLMt5/E2KKU2fle+8Ok1uq7bc/yB+DrLsmxAlmXuajAYnAwGgxMHBwd3CCHjGONxQsg3hmHcSafTr0uS1C/L8rQsyxOqqt42DGMcIcR9izH+ihBSwQvnq3fHYrEniqIopmnGEEKJE1FN01IIIa9hGN+rqkqSyWQ4mUzGDw8PE4eHhzw+QQgJhmHU8qctjOe1/m8An88Htra2av1+/w2MscuyrGdQSt3c8+Ysy+L5TsuyLth7yL8l0zT7o9EoE0WRqarKDMNgCKF/TFVVE2Ncb7fs9/vB7u7ueb/fXxsIBKAgCGcEg0GbKIp/54ooiudEUQRgaWkJLCwsXFxZWWnZ3t5uZow1MMYaT8tms42ZTKbg6OioMZ1OF6RSqVcppcX2W+Z9U0p7FUXJCoKABUEgu7u7VBAEKooilWXZFggEbKFQiEYiESpJEs+Tvb29o2QymchkMnXHx8eFgv2RSIQFAoGsJEk5SZJYXigUsveWCwaDjK/j+6brOpfj0TAMRAip5wcCGCbmBjGmjBDKMPkjEkJsGOMCSv/Mn4YxPsIYv2yf5bSlgzTVHWmqPUpT7dc01daOiPYQY2M9lUqt5VmW9RAh9EjX9Q1d13/LQwjx87yaiMevJBJxABpHTa78pVvmW1U3zaaGz1Fzw1jmTfdHk7Wd7e82d3R2Nff29nLXxsbGylZXV4tnZmZK5+bmSmZnZ0vm5+dLfrp/v+TD9wfAjQ/eA6D8Zo7z1o/m2CtjuezFTzKs/BZLNvXdnepxXWdOl5s5HA7W2tpqtLS0vDY4OGifLP51LC4uguXlZTA3NwtGR4bB2GcjAFQOZ7k36kazkw1fZCeqho9/fHGE3X57YKKn1339ntvT80NbW9u99vb271wuV3VZWRmYnp4uCofD/D9q/2hDIQls+jbA1qYPgIqPs7bGL3Pg2tc5cGn4GFR8ykBT310w2O8C/f0DwOFwgLa2tjP+avwOTaRaLF9zkhQAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Example of a short user sign-up form using the optional pattern",title:"Example of a short user sign-up form using the optional pattern",src:"/static/0dc7bdc48cf58e0635c7c7f69446bcc5/3cbba/form-usage-optional.png",srcSet:["/static/0dc7bdc48cf58e0635c7c7f69446bcc5/7fc1e/form-usage-optional.png 288w","/static/0dc7bdc48cf58e0635c7c7f69446bcc5/a5df1/form-usage-optional.png 576w","/static/0dc7bdc48cf58e0635c7c7f69446bcc5/3cbba/form-usage-optional.png 1152w","/static/0dc7bdc48cf58e0635c7c7f69446bcc5/92c65/form-usage-optional.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)(h,{mdxType:"Caption"},"Example of a short user sign-up form using the optional pattern"))),(0,i.kt)(u,{mdxType:"Row"},(0,i.kt)(b,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"107.29166666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAYAAABG1c6oAAAACXBIWXMAAAsSAAALEgHS3X78AAAEN0lEQVQ4y63UTUxjVRQA4AMYmZapM4JznY5IMVIqGtgYp6V0kJgwbIyzcEUkholA/AEncQGZFeAsdOKYGMOCmKaBsARNCH8JkmBkJBoWpFBj6B+v7fuh7eP93ds+DNJn7rMloOO48SZfzrunLyfv3HNTQAjB/+F0FRMVCCErQugCQshSdOHMvrL4bC2++58FqxBC9QghO0KoFiH0QtE1hFAjQsiBEKor5qoRQk8ghJ58ZEGHw0FZ6uvrn3M4HM87nc6a5ubmiy6X63JTU9NTjY2NZqRcLtclp9NZ7XQ6n25oaKgZGxsrNwwDUqlUGSEEqNIqA4BKAKgCgPKpqSkIBoMQDodhaWkJVlZWYG1tDdbX12F+fh5mZ2dheXkZMpkM5PN5yOVyoGmaCSYnJ2FiYqJyenravrCwcGVmZsYeCATshmFYDMOwptNpqyiK/yBJklXTNAshxKLrukVRlDJFUaBU+Q2WZXEymcwwDJNNJBIZShCEDCEkgzE24yOkMcaiqqqxfD5vp18LsixTdRzH3YnH4x9Fo9HBeDw+SCPDMIPZbHYwk8mYkRJF8ZxsNvtxNpsdEEWxShRFAHqoJdFoFEKhkGl3d9fc7+/vQywWg0QiARhj87xKAziL5imgfSuK4uN5PsZxXFAQhCDLskH6nE6nzUjxPB/UNC1ICAlijM1YFCKEbBJCkDnlYuWXk8lkIBqNfhONRv17e3v+cDjsZxjGH4lEzH0sFvMfHh76JUn6u4AkSROSJF2WJOl8y/QMtre3YWtrC3Z2doDneWAYBuLxOCSTSXOAtO3HMe9SOp1+NRKJrEUikXmWZecYhpnjeX4OY3xK07RvMcZnlX77DmM8gzGuNgvquk4v5/WDg4OfU6nUj6lUajORSGxyHLepKMqmLMvUQ0VRNjRNe6iqqqmY/0mW5V9kWf5eluUr9MbQVsvOti0IgtnmwcHB6QTp2Zx9h6J5+kWleNpyMsVRL6VY/qsUy98XD+V7iorHNU0bV1V1TNO0LyRJeoXjuDc5jvuaZdnPBUH4DGM8lsvlRgkh44SQu4QQmznlP37HVJtOpBhRs78SNftbHsvhXC4XOTo6Cum6LhiG0abr+ieHf62IKIpxSZL2VVWlkqqq7qqq+qyqqgBX35Mpq/UdrbG6FzvtfZrrmf5Crc/rvtrS0uJyu90NXq/X6fP5qkOhUNnIyEjF6OhoxdDQUHl3d3d5T09PCVBg6y3Axd5C17UPCkZNX+HY1ntsWPqMH3ytrwU6OzsNn8935Ha7DY/Hc7erq8v8Z9rY2IDV1VVYWFiAxcXFc8B2+wRsvSfO2g9P7qOBk3uXbh8/sA0Y/Tfa3G/fvNn1ZXt7+6cej+eB1+t9va6uDoaHh8vpnfw3YHn3xPTinQLY3y+ArfcYqvoNuNF2Hd66dQs6OjrA7XZDa2sreDyeMhoft/4EgL6oq/Yy6FQAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Example of product configuration properties using the required pattern",title:"Example of product configuration properties using the required pattern",src:"/static/68251dd065ca0cd7e0872e5aba6a4fdd/3cbba/form-usage-required.png",srcSet:["/static/68251dd065ca0cd7e0872e5aba6a4fdd/7fc1e/form-usage-required.png 288w","/static/68251dd065ca0cd7e0872e5aba6a4fdd/a5df1/form-usage-required.png 576w","/static/68251dd065ca0cd7e0872e5aba6a4fdd/3cbba/form-usage-required.png 1152w","/static/68251dd065ca0cd7e0872e5aba6a4fdd/92c65/form-usage-required.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)(h,{mdxType:"Caption"},"Example of product configuration properties using the required pattern"))),(0,i.kt)("h2",null,"Feedback"),(0,i.kt)("p",null,"Help us improve this component by providing feedback, asking questions, and\nleaving any other comments on\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/carbon-design-system/carbon-website/issues/new?assignees=&labels=feedback&template=feedback.md"},"GitHub"),"."))}k.isMDXComponent=!0}}]);