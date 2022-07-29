import{g as rt,h as it,d as at,r as ut,i as ct,j as st,E as lt,f as I,k as A,t as V,l as F,m as ft,b,w as T,u as C,c as dt,a as O,p as pt,n as yt,o as D,q as vt,s as $,v as B,x as ht,y as mt,z as gt,_ as _t}from"./index.df06b589.js";var Y={exports:{}};/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */(function(E,H){(function(w,m){E.exports=m()})(it,function(){return function(){var S={686:function(l,a,t){t.d(a,{default:function(){return ot}});var u=t(279),c=t.n(u),f=t(370),v=t.n(f),y=t(817),g=t.n(y);function d(i){try{return document.execCommand(i)}catch{return!1}}var h=function(n){var e=g()(n);return d("cut"),e},p=h;function x(i){var n=document.documentElement.getAttribute("dir")==="rtl",e=document.createElement("textarea");e.style.fontSize="12pt",e.style.border="0",e.style.padding="0",e.style.margin="0",e.style.position="absolute",e.style[n?"right":"left"]="-9999px";var o=window.pageYOffset||document.documentElement.scrollTop;return e.style.top="".concat(o,"px"),e.setAttribute("readonly",""),e.value=i,e}var z=function(n,e){var o=x(n);e.container.appendChild(o);var r=g()(o);return d("copy"),o.remove(),r},G=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body},o="";return typeof n=="string"?o=z(n,e):n instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(n==null?void 0:n.type)?o=z(n.value,e):(o=g()(n),d("copy")),o},R=G;function L(i){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?L=function(e){return typeof e}:L=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(i)}var J=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.action,o=e===void 0?"copy":e,r=n.container,s=n.target,_=n.text;if(o!=="copy"&&o!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(s!==void 0)if(s&&L(s)==="object"&&s.nodeType===1){if(o==="copy"&&s.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(o==="cut"&&(s.hasAttribute("readonly")||s.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}else throw new Error('Invalid "target" value, use a valid Element');if(_)return R(_,{container:r});if(s)return o==="cut"?p(s):R(s,{container:r})},X=J;function k(i){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?k=function(e){return typeof e}:k=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(i)}function q(i,n){if(!(i instanceof n))throw new TypeError("Cannot call a class as a function")}function U(i,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(i,o.key,o)}}function K(i,n,e){return n&&U(i.prototype,n),e&&U(i,e),i}function Q(i,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");i.prototype=Object.create(n&&n.prototype,{constructor:{value:i,writable:!0,configurable:!0}}),n&&j(i,n)}function j(i,n){return j=Object.setPrototypeOf||function(o,r){return o.__proto__=r,o},j(i,n)}function W(i){var n=et();return function(){var o=M(i),r;if(n){var s=M(this).constructor;r=Reflect.construct(o,arguments,s)}else r=o.apply(this,arguments);return Z(this,r)}}function Z(i,n){return n&&(k(n)==="object"||typeof n=="function")?n:tt(i)}function tt(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function et(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function M(i){return M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},M(i)}function P(i,n){var e="data-clipboard-".concat(i);if(!!n.hasAttribute(e))return n.getAttribute(e)}var nt=function(i){Q(e,i);var n=W(e);function e(o,r){var s;return q(this,e),s=n.call(this),s.resolveOptions(r),s.listenClick(o),s}return K(e,[{key:"resolveOptions",value:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof r.action=="function"?r.action:this.defaultAction,this.target=typeof r.target=="function"?r.target:this.defaultTarget,this.text=typeof r.text=="function"?r.text:this.defaultText,this.container=k(r.container)==="object"?r.container:document.body}},{key:"listenClick",value:function(r){var s=this;this.listener=v()(r,"click",function(_){return s.onClick(_)})}},{key:"onClick",value:function(r){var s=r.delegateTarget||r.currentTarget,_=this.action(s)||"copy",N=X({action:_,container:this.container,target:this.target(s),text:this.text(s)});this.emit(N?"success":"error",{action:_,text:N,trigger:s,clearSelection:function(){s&&s.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(r){return P("action",r)}},{key:"defaultTarget",value:function(r){var s=P("target",r);if(s)return document.querySelector(s)}},{key:"defaultText",value:function(r){return P("text",r)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(r){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body};return R(r,s)}},{key:"cut",value:function(r){return p(r)}},{key:"isSupported",value:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],s=typeof r=="string"?[r]:r,_=!!document.queryCommandSupported;return s.forEach(function(N){_=_&&!!document.queryCommandSupported(N)}),_}}]),e}(c()),ot=nt},828:function(l){var a=9;if(typeof Element<"u"&&!Element.prototype.matches){var t=Element.prototype;t.matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector}function u(c,f){for(;c&&c.nodeType!==a;){if(typeof c.matches=="function"&&c.matches(f))return c;c=c.parentNode}}l.exports=u},438:function(l,a,t){var u=t(828);function c(y,g,d,h,p){var x=v.apply(this,arguments);return y.addEventListener(d,x,p),{destroy:function(){y.removeEventListener(d,x,p)}}}function f(y,g,d,h,p){return typeof y.addEventListener=="function"?c.apply(null,arguments):typeof d=="function"?c.bind(null,document).apply(null,arguments):(typeof y=="string"&&(y=document.querySelectorAll(y)),Array.prototype.map.call(y,function(x){return c(x,g,d,h,p)}))}function v(y,g,d,h){return function(p){p.delegateTarget=u(p.target,g),p.delegateTarget&&h.call(y,p)}}l.exports=f},879:function(l,a){a.node=function(t){return t!==void 0&&t instanceof HTMLElement&&t.nodeType===1},a.nodeList=function(t){var u=Object.prototype.toString.call(t);return t!==void 0&&(u==="[object NodeList]"||u==="[object HTMLCollection]")&&"length"in t&&(t.length===0||a.node(t[0]))},a.string=function(t){return typeof t=="string"||t instanceof String},a.fn=function(t){var u=Object.prototype.toString.call(t);return u==="[object Function]"}},370:function(l,a,t){var u=t(879),c=t(438);function f(d,h,p){if(!d&&!h&&!p)throw new Error("Missing required arguments");if(!u.string(h))throw new TypeError("Second argument must be a String");if(!u.fn(p))throw new TypeError("Third argument must be a Function");if(u.node(d))return v(d,h,p);if(u.nodeList(d))return y(d,h,p);if(u.string(d))return g(d,h,p);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function v(d,h,p){return d.addEventListener(h,p),{destroy:function(){d.removeEventListener(h,p)}}}function y(d,h,p){return Array.prototype.forEach.call(d,function(x){x.addEventListener(h,p)}),{destroy:function(){Array.prototype.forEach.call(d,function(x){x.removeEventListener(h,p)})}}}function g(d,h,p){return c(document.body,d,h,p)}l.exports=f},817:function(l){function a(t){var u;if(t.nodeName==="SELECT")t.focus(),u=t.value;else if(t.nodeName==="INPUT"||t.nodeName==="TEXTAREA"){var c=t.hasAttribute("readonly");c||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),c||t.removeAttribute("readonly"),u=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var f=window.getSelection(),v=document.createRange();v.selectNodeContents(t),f.removeAllRanges(),f.addRange(v),u=f.toString()}return u}l.exports=a},279:function(l){function a(){}a.prototype={on:function(t,u,c){var f=this.e||(this.e={});return(f[t]||(f[t]=[])).push({fn:u,ctx:c}),this},once:function(t,u,c){var f=this;function v(){f.off(t,v),u.apply(c,arguments)}return v._=u,this.on(t,v,c)},emit:function(t){var u=[].slice.call(arguments,1),c=((this.e||(this.e={}))[t]||[]).slice(),f=0,v=c.length;for(f;f<v;f++)c[f].fn.apply(c[f].ctx,u);return this},off:function(t,u){var c=this.e||(this.e={}),f=c[t],v=[];if(f&&u)for(var y=0,g=f.length;y<g;y++)f[y].fn!==u&&f[y].fn._!==u&&v.push(f[y]);return v.length?c[t]=v:delete c[t],this}},l.exports=a,l.exports.TinyEmitter=a}},w={};function m(l){if(w[l])return w[l].exports;var a=w[l]={exports:{}};return S[l](a,a.exports,m),a.exports}return function(){m.n=function(l){var a=l&&l.__esModule?function(){return l.default}:function(){return l};return m.d(a,{a}),a}}(),function(){m.d=function(l,a){for(var t in a)m.o(a,t)&&!m.o(l,t)&&Object.defineProperty(l,t,{enumerable:!0,get:a[t]})}}(),function(){m.o=function(l,a){return Object.prototype.hasOwnProperty.call(l,a)}}(),m(686)}().default})})(Y);const bt=rt(Y.exports),Et=E=>(pt("data-v-b034bda9"),E=E(),yt(),E),St={class:"demo-container"},xt={class:"demo-title"},wt={key:0,class:"demo-desc"},Ct={class:"demo-content"},Tt={class:"demo-display"},At={class:"demo-code"},kt={class:"demo-code-tool"},Ot=Et(()=>A("span",null,"\u9690\u85CF\u6E90\u4EE3\u7801",-1)),Lt=at({__name:"DemoContainer",props:{title:null,description:null,code:null},setup(E){const H=E,S=ut(!1),w=ct(()=>decodeURIComponent(H.code)),m=Math.floor((Math.random()+1)*1e6);return st(()=>{new bt(`#copy-icon-${m}`,{text:()=>w.value}).on("success",a=>{a.clearSelection(),lt({message:"\u590D\u5236\u6210\u529F",type:"success"})})}),(l,a)=>{const t=O("el-icon"),u=O("el-tooltip"),c=O("highlightjs"),f=O("el-scrollbar"),v=O("el-collapse-transition");return D(),I("div",St,[A("h3",xt,V(E.title),1),E.description?(D(),I("div",wt,V(E.description),1)):F("",!0),A("div",Ct,[A("div",Tt,[ft(l.$slots,"default",{},void 0,!0)]),A("div",At,[A("div",kt,[b(u,{content:"\u590D\u5236\u4EE3\u7801",placement:"bottom"},{default:T(()=>[b(t,{id:`copy-icon-${C(m)}`},{default:T(()=>[b(C(vt))]),_:1},8,["id"])]),_:1}),b(u,{content:"\u67E5\u770B\u6E90\u4EE3\u7801",placement:"bottom"},{default:T(()=>[b(t,{onClick:a[0]||(a[0]=y=>S.value=!S.value)},{default:T(()=>[$(b(C(ht),null,null,512),[[B,!S.value]]),$(b(C(mt),null,null,512),[[B,S.value]])]),_:1})]),_:1})]),C(w)?(D(),dt(v,{key:0},{default:T(()=>[$(b(f,{"max-height":800},{default:T(()=>[b(c,{code:C(w)},null,8,["code"])]),_:1},512),[[B,S.value]])]),_:1})):F("",!0),C(w)&&S.value?(D(),I("div",{key:1,class:"demo-code-fold",onClick:a[1]||(a[1]=y=>S.value=!1)},[b(t,null,{default:T(()=>[b(C(gt))]),_:1}),Ot])):F("",!0)])])])}}});const Dt=_t(Lt,[["__scopeId","data-v-b034bda9"]]);export{Dt as D};
