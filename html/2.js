(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{102:function(e,a,t){"use strict";var n=t(0),l=t.n(n),c=(t(91),t(15)),r=t(26),i=t.n(r),o=t(80);const s=[{id:1,firstname:"Jane",lastname:"Doe"},{id:2,firstname:"John",lastname:"Doe"},{id:3,firstname:"Martin",lastname:"Madrazo"},{id:4,firstname:"Trevor",lastname:"Philips"},{id:5,firstname:"Ruben",lastname:"Taylor"},{id:6,firstname:"Travis"}];a.a=()=>{const{location:e}=i()(),a=e=>l.a.createElement("li",{id:e,key:e,className:"separator"},l.a.createElement("h2",null,e)),t=a=>l.a.createElement("li",{key:a.id},l.a.createElement(c.b,{to:`${e.pathname}/${a.id}`},a.lastname?l.a.createElement("h3",null,a.firstname," ",l.a.createElement("span",{className:"bold"},a.lastname)):l.a.createElement("h3",{className:"bold"},a.firstname)));return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.a,{leftText:"Groups",title:"Contacts",rightPlusIcon:!0,onSearchChanged:e=>{}}),l.a.createElement("div",{className:"page-container"},l.a.createElement("ul",{id:"contact-list"},(()=>{let e="",n="",l=[];for(let c=0;c<s.length;c++){const r=s[c];n=(r.lastname?r.lastname.substring(0,1):r.firstname.substring(0,1)).toUpperCase(),n!=e&&l.push(a(n)),e=n,l.push(t(r))}return l})())))}},103:function(e,a,t){(a=t(11)(!1)).push([e.i,"ul#contact-list{list-style-type:none;padding:0;margin:0}ul#contact-list li h2{margin:0;font-size:12px}ul#contact-list li h3{font-size:12px;margin:8px 0;font-weight:lighter}ul#contact-list li .bold{font-weight:bold !important}ul#contact-list li:not(.separator){border-top:0.5px solid #dddddd;margin-left:10px}ul#contact-list li.separator{background-color:#e5e5e5;padding:2.5px 10px}ul#contact-list .separator+li{border-top:none}.page-container{height:450px;overflow-y:auto}#back-icon{fill:#327bf6;width:12px;margin-top:3px;margin-left:-8px}.photo-container{display:flex;justify-content:center}#contact-photo{background:linear-gradient(#a6abb7, #858992);height:70px;width:70px;color:white;line-height:70px;border-radius:50%;text-align:center;vertical-align:middle;font-size:25px}#contact-photo.photo-lg{height:100px;width:100px;line-height:100px;font-size:35px}#contact-details-page h2{margin:8px;font-size:18px;text-align:center}#contact-details-page .btn-row{display:flex;justify-content:space-evenly;margin-bottom:5px}#contact-details-page .btn-container{display:flex;align-items:center;flex-direction:column;width:100px}#contact-details-page .btn-container h4{font-size:7px;color:#327bf6;margin:3px 0}#contact-details-page input{border:none;background-color:transparent;width:100%}#contact-details-page input:focus{outline:none}#contact-details-page textarea{border:none;width:100%;background-color:transparent}#contact-details-page h3{font-size:8px;color:#327bf6;text-align:center;margin:5px 0 15px 0}#contact-details-page .circle-btn{background-color:#327bf6;border:1px solid #327bf6;height:22px;width:22px;border-radius:50%;fill:white;display:flex;align-items:center;justify-content:center}#contact-details-page .disable>h4{color:#dcdcdd}#contact-details-page .disable>.circle-btn{background-color:transparent;border-color:#dcdcdd;fill:#dcdcdd}#contact-details-page .icon{width:10px}#contact-details-page #mail-icon{margin-top:-3px}#contact-details-page #dollar-icon{width:16px;margin-bottom:-4px}ul#contact-details-list{list-style-type:none;padding:0;margin:0;border-top:0.5px solid #dddddd}ul#contact-details-list .separator+li{margin:0;padding:8px 10px}ul#contact-details-list li{margin-left:10px;padding:8px 10px 8px 0}ul#contact-details-list li:not(:first-child){border-top:0.5px solid #dddddd}ul#contact-details-list li h2{margin:0;font-size:11px;text-align:left;font-weight:normal;color:#327bf6}ul#contact-details-list li p{margin:0;font-size:10px;height:36px}ul#contact-details-list li h4{font-size:8px;margin:3px 0;margin-top:0}ul#contact-details-list li .text-red{color:#eb4e3d}ul#contact-details-list li.separator{height:13px;margin:0;background-color:#f2f2f7}ul#contact-details-list li.separator.separator-md{height:25px}ul#contact-details-list li.separator.separator-lg{height:50px}\n",""]),e.exports=a},104:function(e,a,t){"use strict";var n=t(0),l=t.n(n),c=t(26),r=t.n(c),i=t(80),o=(t(91),t(90)),s=t.n(o),d=t(96),p=t.n(d),m=t(97),g=t.n(m),h=t(105),u=t.n(h),x=t(106),f=t.n(x),b=t(8);const E=()=>l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,"John Doe"),l.a.createElement("div",{className:"btn-row"},l.a.createElement("div",{className:"btn-container"},l.a.createElement("div",{className:"circle-btn"},l.a.createElement(b.a,{className:"icon",src:p.a})),l.a.createElement("h4",null,"message")),l.a.createElement("div",{className:"btn-container"},l.a.createElement("div",{className:"circle-btn"},l.a.createElement(b.a,{className:"icon",src:s.a})),l.a.createElement("h4",null,"call")),l.a.createElement("div",{className:"btn-container"},l.a.createElement("div",{className:"circle-btn"},l.a.createElement(b.a,{className:"icon",src:g.a})),l.a.createElement("h4",null,"video")),l.a.createElement("div",{className:"btn-container"},l.a.createElement("div",{className:"circle-btn"},l.a.createElement(b.a,{id:"mail-icon",className:"icon",src:u.a})),l.a.createElement("h4",null,"mail")),l.a.createElement("div",{className:"btn-container disable"},l.a.createElement("div",{className:"circle-btn"},l.a.createElement(b.a,{id:"dollar-icon",src:f.a})),l.a.createElement("h4",null,"pay"))),l.a.createElement("ul",{id:"contact-details-list"},l.a.createElement("li",null,l.a.createElement("h4",null,"Phone"),l.a.createElement("h2",null,"555 512 35")),l.a.createElement("li",null,l.a.createElement("h4",null,"Notes"),l.a.createElement("p",null,"Hello !")),l.a.createElement("li",null,l.a.createElement("h2",null,"Send Message")),l.a.createElement("li",null,l.a.createElement("h2",null,"Share Contact")),l.a.createElement("li",null,l.a.createElement("h2",null,"Add to Favourites")),l.a.createElement("li",null,l.a.createElement("h2",{className:"text-red"},"Add to Emergency Contacts")),l.a.createElement("li",{className:"separator separator-md"}),l.a.createElement("li",null,l.a.createElement("h2",null,"Share My Location")),l.a.createElement("li",{className:"separator separator-lg"}))),v=()=>l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"Add photo"),l.a.createElement("ul",{id:"contact-details-list"},l.a.createElement("li",null,l.a.createElement("input",{type:"text",name:"firstname",id:"firstname",placeholder:"First name"})),l.a.createElement("li",null,l.a.createElement("input",{type:"text",name:"lastname",id:"lastname",placeholder:"Last name"})),l.a.createElement("li",null,l.a.createElement("input",{type:"number",name:"phone",id:"phone",placeholder:"Phone"})),l.a.createElement("li",{className:"separator"}),l.a.createElement("li",null,l.a.createElement("input",{type:"text",name:"firstname",id:"firstname",placeholder:"Email"})),l.a.createElement("li",{className:"separator"}),l.a.createElement("li",null,l.a.createElement("h4",null,"Notes"),l.a.createElement("textarea",{name:"notes",id:"notes",rows:3})),l.a.createElement("li",{className:"separator"}),l.a.createElement("li",null,l.a.createElement("h2",{className:"text-red"},"Delete contact")),l.a.createElement("li",{className:"separator separator-lg"})));a.a=()=>{const[e,a]=Object(n.useState)(!1),t=()=>a(!e),{location:c,history:o}=r()();return l.a.createElement("div",{id:"contact-details-page"},l.a.createElement(i.a,{leftText:e?"Cancel":"Contacts",leftBackIcon:!0,leftOnClick:e?t:()=>o.push(c.pathname.slice(0,c.pathname.lastIndexOf("/"))),rightText:e?"Done":"Edit",rightOnClick:t,noBorder:!0}),l.a.createElement("div",{className:"photo-container"},l.a.createElement("div",{id:"contact-photo",className:e?"photo-lg":""},"JD")),e?l.a.createElement(v,null):l.a.createElement(E,null))}},105:function(e,a){e.exports="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 85.303 66.699'%3e %3cpath d='M52.441-31.055c1.611,0,3.027-.732,4.736-2.49L90.576-66.6c-1.514-1.318-4.2-1.953-7.959-1.953H20.85c-3.174,0-5.42.586-6.689,1.807l33.5,33.2C49.365-31.787,50.83-31.055,52.441-31.055ZM10.644-8.4,37.6-35.254l-27-26.709a14.031,14.031,0,0,0-.83,5.664v42.188A13.315,13.315,0,0,0,10.644-8.4Zm83.545,0a13.315,13.315,0,0,0,.879-5.713V-56.3a12.954,12.954,0,0,0-.879-5.615L67.236-35.254ZM22.217-1.855H83.984c3.125,0,5.322-.586,6.641-1.758L63.037-31.152,60.6-28.711c-2.734,2.637-5.273,3.857-8.154,3.857-2.93,0-5.42-1.221-8.2-3.857l-2.393-2.441L14.356-3.711C15.869-2.49,18.506-1.855,22.217-1.855Z' transform='translate(-9.766 68.555)'/%3e %3c/svg%3e"},106:function(e,a){e.exports="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56 56'%3e %3cpath d='M13,22 L13,32 C16.5185185,31.6836983 18,29.7128954 18,27.1094891 C18,24.6034063 16.8477366,23.1192214 13,22 Z M10,17 L10,8 C6.72727273,8.41538462 5,10.3307692 5,12.4307692 C5,14.5307692 6.36363636,16.0769231 10,17 Z M12.8398058,17.7367206 L13.9116505,18.0138568 C19.784466,19.4226328 23,21.9168591 23,26.8360277 C23,32.4942263 18.5339806,35.704388 12.8398058,36.1200924 L12.8398058,40 L10.3165049,40 L10.3165049,36.1200924 C4.64466019,35.6812933 0.15631068,32.3787529 0,26.8360277 L4.6223301,26.8360277 C5.02427184,29.5381062 6.72135922,31.5242494 10.3165049,31.9168591 L10.3165049,21.8475751 L9.40097087,21.6166282 C3.72912621,20.2540416 0.669902913,17.6212471 0.669902913,12.9330254 C0.669902913,7.75981524 4.68932039,4.34180139 10.3165049,3.90300231 L10.3165049,0 L12.8398058,0 L12.8398058,3.90300231 C18.4223301,4.36489607 22.4640777,7.82909931 22.6427184,13.0715935 L17.9980583,13.0715935 C17.707767,10.1616628 15.6980583,8.47575058 12.8398058,8.10623557 L12.8398058,17.7367206 Z' transform='translate(16 8)'%3e%3c/path%3e %3c/svg%3e"},168:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=(t(91),t(81)),r=t(3),i=t(102),o=t(104);a.default=e=>l.a.createElement(c.a,{backgroundColor:"#f6f6f6"},l.a.createElement(r.Switch,null,l.a.createElement(r.Route,{path:e.match.path,exact:!0,component:i.a}),l.a.createElement(r.Route,{path:e.match.path+"/:id",component:o.a})))},80:function(e,a,t){"use strict";var n=t(0),l=t.n(n),c=(t(85),t(8)),r=t(24),i=t.n(r),o=(t(87),t(89)),s=t.n(o);var d=e=>l.a.createElement("div",{className:"searchbar-container"},l.a.createElement(c.a,{id:"searchbar-icon",src:s.a}),l.a.createElement("input",{type:"text",name:"searchbar",id:"searchbar",placeholder:"Search",onChange:a=>e.onSearchChanged(a.target.value)})),p=t(84),m=t.n(p);a.a=e=>l.a.createElement("div",{id:"header-app",className:`${e.noBorder?"no-border":""} ${e.disable?"disable":""}`},l.a.createElement("div",{className:"header-row"},l.a.createElement("div",{className:"header-left",onClick:e.disable?void 0:e.leftOnClick},e.leftBackIcon&&l.a.createElement(c.a,{className:"back-icon",src:i.a}),e.leftPlusIcon&&l.a.createElement(c.a,{className:"plus-icon",src:m.a}),e.leftText),l.a.createElement("div",{className:"header-middle"},e.title,e.children),l.a.createElement("div",{className:"header-right",onClick:e.disable?void 0:e.rightOnClick},e.rightText,e.rightPlusIcon&&l.a.createElement(c.a,{className:"plus-icon",src:m.a}))),e.onSearchChanged&&l.a.createElement(d,{onSearchChanged:e.onSearchChanged}))},81:function(e,a,t){"use strict";var n=t(0),l=t.n(n);t(82);a.a=e=>{const a=e.backgroundColor||"#ffffff";return l.a.createElement("div",{className:"app-container",style:{backgroundColor:a}},e.children)}},82:function(e,a,t){var n=t(10),l=t(83);"string"==typeof(l=l.__esModule?l.default:l)&&(l=[[e.i,l,""]]);var c={insert:"head",singleton:!1};n(l,c);e.exports=l.locals||{}},83:function(e,a,t){(a=t(11)(!1)).push([e.i,".app-container{width:260px;height:555px;position:absolute;overflow:hidden;margin-top:-30px;padding-top:20px;color:black;-webkit-animation:scale-in-center 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;animation:scale-in-center 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both}.app-container.exit{-webkit-animation:scale-out-center 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;animation:scale-out-center 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both}.app-container *{color:inherit}\n",""]),e.exports=a},84:function(e,a){e.exports="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 63.818 64.99'%3e %3cpath d='M41.7-2.734a3.876,3.876,0,0,0,3.906-3.857V-31.25H69.678a3.993,3.993,0,0,0,3.906-3.955,3.993,3.993,0,0,0-3.906-3.955H45.605V-63.867A3.876,3.876,0,0,0,41.7-67.725a3.918,3.918,0,0,0-3.955,3.857V-39.16H13.721a4,4,0,0,0-3.955,3.955,4,4,0,0,0,3.955,3.955H37.744V-6.592A3.918,3.918,0,0,0,41.7-2.734Z' transform='translate(-9.766 67.725)'/%3e %3c/svg%3e"},85:function(e,a,t){var n=t(10),l=t(86);"string"==typeof(l=l.__esModule?l.default:l)&&(l=[[e.i,l,""]]);var c={insert:"head",singleton:!1};n(l,c);e.exports=l.locals||{}},86:function(e,a,t){(a=t(11)(!1)).push([e.i,"#header-app:not(.no-border){border-bottom:0.5px solid #dddddd}#header-app .header-row{margin-top:10px;padding:0 10px;height:30px;display:flex;font-size:12px;align-items:center;justify-content:space-between}#header-app .header-row+div{margin-bottom:10px}#header-app .header-right{text-align:right}#header-app .header-right .icon{margin-left:auto}#header-app .header-left{text-align:left;display:flex}#header-app .header-left,#header-app .header-right{flex:1;color:#327bf6;fill:#327bf6;cursor:pointer}#header-app.disable{fill:#bbbbbd}#header-app.disable .header-left,#header-app.disable .header-right{color:#bbbbbd}#header-app .back-icon{margin:1px 1px 0 -5px}#header-app .back-icon svg{height:12px}#header-app .header-middle{width:100px;text-align:center}#header-app .plus-icon{fill:#327bf6}#header-app .plus-icon svg{height:12px}\n",""]),e.exports=a},87:function(e,a,t){var n=t(10),l=t(88);"string"==typeof(l=l.__esModule?l.default:l)&&(l=[[e.i,l,""]]);var c={insert:"head",singleton:!1};n(l,c);e.exports=l.locals||{}},88:function(e,a,t){(a=t(11)(!1)).push([e.i,"#searchbar{flex:1;background-color:transparent;border:none}#searchbar:focus{outline:none}.searchbar-container{background-color:#e7e7e8;border-radius:5px;display:flex;padding:2px;margin:0 10px}#searchbar-icon{width:10px;margin:0 4px 2px 4px;fill:#808084}\n",""]),e.exports=a},89:function(e,a){e.exports="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 71.973 72.656'%3e %3cpath d='M37.988-13.769a28.974,28.974,0,0,0,17.236-5.713L74.023-.635A4.158,4.158,0,0,0,76.855.488a3.838,3.838,0,0,0,3.906-3.955A3.682,3.682,0,0,0,79.639-6.25l-18.7-18.8a28.785,28.785,0,0,0,6.2-17.92,29.237,29.237,0,0,0-29.15-29.2,29.279,29.279,0,0,0-29.2,29.2A29.279,29.279,0,0,0,37.988-13.769Zm0-5.615A23.736,23.736,0,0,1,14.356-42.969,23.736,23.736,0,0,1,37.988-66.553,23.694,23.694,0,0,1,61.572-42.969,23.7,23.7,0,0,1,37.988-19.385Z' transform='translate(-8.789 72.168)'/%3e %3c/svg%3e"},90:function(e,a){e.exports="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 92.382 92.48'%3e %3cpath d='M36.621-12.842c14.4,14.453,31.934,25.586,46.24,25.586a21.312,21.312,0,0,0,16.5-7.227c2.637-2.93,4.248-6.3,4.248-9.668a8.152,8.152,0,0,0-3.515-6.885L85.107-21.68c-2.393-1.66-4.346-2.441-6.1-2.441-2.295,0-4.346,1.269-6.592,3.516L68.9-17.09a2.828,2.828,0,0,1-1.9.781,4.04,4.04,0,0,1-2-.586c-3.076-1.66-8.35-6.152-13.232-11.035S42.334-38.037,40.723-41.162a4.187,4.187,0,0,1-.537-2,2.735,2.735,0,0,1,.732-1.855l3.516-3.564c2.2-2.295,3.516-4.3,3.516-6.592,0-1.807-.781-3.76-2.441-6.1l-10.6-14.844a8.37,8.37,0,0,0-7.129-3.613,13.794,13.794,0,0,0-9.521,4.248,21.952,21.952,0,0,0-7.031,16.6C11.231-44.58,22.217-27.246,36.621-12.842Z' transform='translate(-11.231 79.736)'/%3e %3c/svg%3e"},91:function(e,a,t){var n=t(10),l=t(103);"string"==typeof(l=l.__esModule?l.default:l)&&(l=[[e.i,l,""]]);var c={insert:"head",singleton:!1};n(l,c);e.exports=l.locals||{}},96:function(e,a){e.exports="data:image/svg+xml,%3csvg id='Capa_1' enable-background='new 0 0 511.096 511.096' viewBox='0 0 511.096 511.096' xmlns='http://www.w3.org/2000/svg'%3e%3cg id='Speech_Bubble_48_'%3e%3cg%3e%3cpath d='m74.414 480.548h-36.214l25.607-25.607c13.807-13.807 22.429-31.765 24.747-51.246-59.127-38.802-88.554-95.014-88.554-153.944 0-108.719 99.923-219.203 256.414-219.203 165.785 0 254.682 101.666 254.682 209.678 0 108.724-89.836 210.322-254.682 210.322-28.877 0-59.01-3.855-85.913-10.928-25.467 26.121-59.973 40.928-96.087 40.928z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e"},97:function(e,a){e.exports="data:image/svg+xml,%3c!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3e %3c!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e %3csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 511.626 511.627' style='enable-background:new 0 0 511.626 511.627;' xml:space='preserve'%3e %3cg%3e %3cpath d='M500.491,83.65c-2.474-0.95-4.853-1.427-7.139-1.427c-5.14,0-9.418,1.812-12.847,5.426l-115.06,114.776v-47.108 c0-22.653-8.042-42.017-24.126-58.102c-16.085-16.083-35.447-24.125-58.102-24.125H82.224c-22.648,0-42.016,8.042-58.102,24.125 C8.042,113.3,0,132.664,0,155.317v200.996c0,22.651,8.042,42.014,24.123,58.098c16.086,16.084,35.454,24.126,58.102,24.126h200.994 c22.654,0,42.017-8.042,58.102-24.126c16.084-16.084,24.126-35.446,24.126-58.098v-47.397l115.06,115.061 c3.429,3.613,7.707,5.424,12.847,5.424c2.286,0,4.665-0.476,7.139-1.424c7.427-3.237,11.136-8.85,11.136-16.844V100.499 C511.626,92.501,507.917,86.887,500.491,83.65z'/%3e %3c/g%3e %3cg%3e %3c/g%3e %3cg%3e %3c/g%3e %3cg%3e %3c/g%3e %3cg%3e %3c/g%3e %3cg%3e %3c/g%3e %3cg%3e %3c/g%3e %3cg%3e %3c/g%3e %3cg%3e %3c/g%3e %3cg%3e %3c/g%3e %3cg%3e %3c/g%3e %3cg%3e %3c/g%3e %3cg%3e %3c/g%3e %3cg%3e %3c/g%3e %3cg%3e %3c/g%3e %3cg%3e %3c/g%3e %3c/svg%3e"}}]);