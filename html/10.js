(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{109:function(e,a,n){var t=n(10),i=n(110);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};t(i,o);e.exports=i.locals||{}},110:function(e,a,n){(a=n(11)(!1)).push([e.i,".app-screen-background{margin-top:-29px;height:100%}.app-screen{height:420px;padding-top:45px}.app-screen-container{margin:18px;margin-right:0;display:flex;flex-direction:row;flex-wrap:wrap;white-space:nowrap}\n",""]),e.exports=a},111:function(e,a,n){var t=n(10),i=n(112);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};t(i,o);e.exports=i.locals||{}},112:function(e,a,n){(a=n(11)(!1)).push([e.i,'.app-icon{display:block;position:relative;width:48px;margin-right:12px;margin-bottom:8px;text-align:center;color:white;text-decoration:none}.app-icon:hover{background-color:rgba(240,240,240,0.1);border-radius:8px}.app-icon-image{width:42px;height:42px;display:block;margin:auto;background-size:contain;background-repeat:no-repeat}.app-icon-image.icon-calendar{background-color:white;border-radius:8px;font-family:"SFProTextLight";display:flex;justify-content:center;flex-direction:column}.app-icon-image.icon-calendar h2{margin:0;font-size:8px;color:#ec5a4b}.app-icon-image.icon-calendar div{font-size:24px;color:black;margin:-4px 0}.app-text{font-size:9px;color:rgba(240,240,240,0.8);padding-bottom:6px}.app-notification-badge{position:absolute;top:-5px;right:-5px;padding:2px 5px;border-radius:7px;background:red;color:white;font-size:9px}\n',""]),e.exports=a},113:function(e,a,n){var t=n(10),i=n(114);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};t(i,o);e.exports=i.locals||{}},114:function(e,a,n){(a=n(11)(!1)).push([e.i,".bottom-nav-container{width:100%;height:100%}.bottom-nav-list{height:62px;background-color:rgba(255,255,255,0.2);margin:10px;border-radius:16px}.bottom-nav-list-container{display:flex;margin-left:10px;padding-top:10px}\n",""]),e.exports=a},172:function(e,a,n){"use strict";n.r(a);var t=n(0),i=n.n(t),o=(n(109),n(111),n(15)),r=n(27);const c=e=>{const a=e.path?"app/"+e.path:"";return i.a.createElement(o.b,{to:a,className:"app-icon"},!!e.notifications&&i.a.createElement("div",{className:"app-notification-badge"},e.notifications),"calendar"==e.icon?i.a.createElement(p,null):i.a.createElement("div",{className:"app-icon-image",style:{backgroundImage:`url(${r.c[e.icon]})`}}),e.name&&i.a.createElement("span",{className:"app-text"},e.name))},p=()=>{const e=(new Date).getDay();return i.a.createElement("div",{className:"app-icon-image icon-calendar"},i.a.createElement("h2",null,["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e]),i.a.createElement("div",null,e))};n(113);const s=()=>i.a.createElement("div",{className:"bottom-nav-container"},i.a.createElement("div",{className:"bottom-nav-list"},i.a.createElement("div",{className:"bottom-nav-list-container"},r.b.map((e,a)=>i.a.createElement(c,{key:a,icon:e.icon,path:e.path,notifications:e.notifications})))));a.default=()=>i.a.createElement("div",{className:"app-screen-background"},i.a.createElement("div",{className:"app-screen"},i.a.createElement("div",{className:"app-screen-container"},r.a.map((e,a)=>i.a.createElement(c,Object.assign({key:a},e))))),i.a.createElement(s,null))}}]);