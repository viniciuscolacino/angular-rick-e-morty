import './polyfills.server.mjs';
import{a as bn,j as yn}from"./chunk-GNX7K4GQ.mjs";import{A as he,C as Bt,E as un,Kb as Tt,L as dn,M as Ht,Ma as pn,N as fn,P as $t,Ra as x,T as I,U as P,W as K,Xa as gn,Y as g,Z as it,Za as B,aa as U,ba as xt,c as sn,ca as j,da as mt,f as It,g as Et,gb as Wt,ib as Yt,j as on,ja as At,lc as H,n as ft,o as cn,r as ln,ra as Z,sa as Vt,sb as ge,vb as ve,wa as mn,wb as be,xa as pe,xc as vn,ya as hn}from"./chunk-UFIA264M.mjs";import{a as T,h as D,i as kt}from"./chunk-K7YHPIF3.mjs";function _n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?_n(Object(r),!0).forEach(function(n){E(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_n(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function re(e){"@babel/helpers - typeof";return re=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},re(e)}function Ui(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function wn(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Bi(e,t,r){return t&&wn(e.prototype,t),r&&wn(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function E(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Fe(e,t){return $i(e)||Wi(e,t)||Yn(e,t)||Gi()}function Lt(e){return Hi(e)||Vi(e)||Yn(e)||Yi()}function Hi(e){if(Array.isArray(e))return Ie(e)}function $i(e){if(Array.isArray(e))return e}function Vi(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Wi(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n=[],i=!0,a=!1,s,o;try{for(r=r.call(e);!(i=(s=r.next()).done)&&(n.push(s.value),!(t&&n.length===t));i=!0);}catch(c){a=!0,o=c}finally{try{!i&&r.return!=null&&r.return()}finally{if(a)throw o}}return n}}function Yn(e,t){if(e){if(typeof e=="string")return Ie(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Ie(e,t)}}function Ie(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Yi(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Gi(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var kn=function(){},Re={},Gn={},Kn=null,Zn={mark:kn,measure:kn};try{typeof window<"u"&&(Re=window),typeof document<"u"&&(Gn=document),typeof MutationObserver<"u"&&(Kn=MutationObserver),typeof performance<"u"&&(Zn=performance)}catch{}var Ki=Re.navigator||{},In=Ki.userAgent,En=In===void 0?"":In,q=Re,b=Gn,xn=Kn,Gt=Zn,ds=!!q.document,Y=!!b.documentElement&&!!b.head&&typeof b.addEventListener=="function"&&typeof b.createElement=="function",Xn=~En.indexOf("MSIE")||~En.indexOf("Trident/"),Kt,Zt,Xt,qt,Qt,$="___FONT_AWESOME___",Ee=16,qn="fa",Qn="svg-inline--fa",st="data-fa-i2svg",xe="data-fa-pseudo-element",Zi="data-fa-pseudo-element-pending",Le="data-prefix",Pe="data-icon",An="fontawesome-i2svg",Xi="async",qi=["HTML","HEAD","STYLE","SCRIPT"],Jn=function(){try{return process.env.NODE_ENV==="production"}catch{return!1}}(),v="classic",y="sharp",je=[v,y];function Pt(e){return new Proxy(e,{get:function(r,n){return n in r?r[n]:r[v]}})}var Mt=Pt((Kt={},E(Kt,v,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),E(Kt,y,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),Kt)),Nt=Pt((Zt={},E(Zt,v,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),E(Zt,y,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Zt)),St=Pt((Xt={},E(Xt,v,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),E(Xt,y,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Xt)),Qi=Pt((qt={},E(qt,v,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),E(qt,y,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),qt)),Ji=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,ti="fa-layers-text",tr=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,er=Pt((Qt={},E(Qt,v,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),E(Qt,y,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Qt)),ei=[1,2,3,4,5,6,7,8,9,10],nr=ei.concat([11,12,13,14,15,16,17,18,19,20]),ir=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],rt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ft=new Set;Object.keys(Nt[v]).map(Ft.add.bind(Ft));Object.keys(Nt[y]).map(Ft.add.bind(Ft));var rr=[].concat(je,Lt(Ft),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",rt.GROUP,rt.SWAP_OPACITY,rt.PRIMARY,rt.SECONDARY]).concat(ei.map(function(e){return"".concat(e,"x")})).concat(nr.map(function(e){return"w-".concat(e)})),Dt=q.FontAwesomeConfig||{};function ar(e){var t=b.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function sr(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}b&&typeof b.querySelector=="function"&&(Tn=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],Tn.forEach(function(e){var t=Fe(e,2),r=t[0],n=t[1],i=sr(ar(r));i!=null&&(Dt[n]=i)}));var Tn,ni={styleDefault:"solid",familyDefault:"classic",cssPrefix:qn,replacementClass:Qn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Dt.familyPrefix&&(Dt.cssPrefix=Dt.familyPrefix);var vt=d(d({},ni),Dt);vt.autoReplaceSvg||(vt.observeMutations=!1);var m={};Object.keys(ni).forEach(function(e){Object.defineProperty(m,e,{enumerable:!0,set:function(r){vt[e]=r,Ot.forEach(function(n){return n(m)})},get:function(){return vt[e]}})});Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(t){vt.cssPrefix=t,Ot.forEach(function(r){return r(m)})},get:function(){return vt.cssPrefix}});q.FontAwesomeConfig=m;var Ot=[];function or(e){return Ot.push(e),function(){Ot.splice(Ot.indexOf(e),1)}}var X=Ee,z={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function cr(e){if(!(!e||!Y)){var t=b.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var r=b.head.childNodes,n=null,i=r.length-1;i>-1;i--){var a=r[i],s=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(n=a)}return b.head.insertBefore(t,n),e}}var lr="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Rt(){for(var e=12,t="";e-- >0;)t+=lr[Math.random()*62|0];return t}function bt(e){for(var t=[],r=(e||[]).length>>>0;r--;)t[r]=e[r];return t}function ze(e){return e.classList?bt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function ii(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ur(e){return Object.keys(e||{}).reduce(function(t,r){return t+"".concat(r,'="').concat(ii(e[r]),'" ')},"").trim()}function oe(e){return Object.keys(e||{}).reduce(function(t,r){return t+"".concat(r,": ").concat(e[r].trim(),";")},"")}function Ue(e){return e.size!==z.size||e.x!==z.x||e.y!==z.y||e.rotate!==z.rotate||e.flipX||e.flipY}function dr(e){var t=e.transform,r=e.containerWidth,n=e.iconWidth,i={transform:"translate(".concat(r/2," 256)")},a="translate(".concat(t.x*32,", ").concat(t.y*32,") "),s="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),o="rotate(".concat(t.rotate," 0 0)"),c={transform:"".concat(a," ").concat(s," ").concat(o)},u={transform:"translate(".concat(n/2*-1," -256)")};return{outer:i,inner:c,path:u}}function fr(e){var t=e.transform,r=e.width,n=r===void 0?Ee:r,i=e.height,a=i===void 0?Ee:i,s=e.startCentered,o=s===void 0?!1:s,c="";return o&&Xn?c+="translate(".concat(t.x/X-n/2,"em, ").concat(t.y/X-a/2,"em) "):o?c+="translate(calc(-50% + ".concat(t.x/X,"em), calc(-50% + ").concat(t.y/X,"em)) "):c+="translate(".concat(t.x/X,"em, ").concat(t.y/X,"em) "),c+="scale(".concat(t.size/X*(t.flipX?-1:1),", ").concat(t.size/X*(t.flipY?-1:1),") "),c+="rotate(".concat(t.rotate,"deg) "),c}var mr=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function ri(){var e=qn,t=Qn,r=m.cssPrefix,n=m.replacementClass,i=mr;if(r!==e||n!==t){var a=new RegExp("\\.".concat(e,"\\-"),"g"),s=new RegExp("\\--".concat(e,"\\-"),"g"),o=new RegExp("\\.".concat(t),"g");i=i.replace(a,".".concat(r,"-")).replace(s,"--".concat(r,"-")).replace(o,".".concat(n))}return i}var Cn=!1;function ye(){m.autoAddCss&&!Cn&&(cr(ri()),Cn=!0)}var hr={mixout:function(){return{dom:{css:ri,insertCss:ye}}},hooks:function(){return{beforeDOMElementCreation:function(){ye()},beforeI2svg:function(){ye()}}}},V=q||{};V[$]||(V[$]={});V[$].styles||(V[$].styles={});V[$].hooks||(V[$].hooks={});V[$].shims||(V[$].shims=[]);var F=V[$],ai=[],pr=function e(){b.removeEventListener("DOMContentLoaded",e),ae=1,ai.map(function(t){return t()})},ae=!1;Y&&(ae=(b.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(b.readyState),ae||b.addEventListener("DOMContentLoaded",pr));function gr(e){Y&&(ae?setTimeout(e,0):ai.push(e))}function jt(e){var t=e.tag,r=e.attributes,n=r===void 0?{}:r,i=e.children,a=i===void 0?[]:i;return typeof e=="string"?ii(e):"<".concat(t," ").concat(ur(n),">").concat(a.map(jt).join(""),"</").concat(t,">")}function Dn(e,t,r){if(e&&e[t]&&e[t][r])return{prefix:t,iconName:r,icon:e[t][r]}}var vr=function(t,r){return function(n,i,a,s){return t.call(r,n,i,a,s)}},_e=function(t,r,n,i){var a=Object.keys(t),s=a.length,o=i!==void 0?vr(r,i):r,c,u,l;for(n===void 0?(c=1,l=t[a[0]]):(c=0,l=n);c<s;c++)u=a[c],l=o(l,t[u],u,t);return l};function br(e){for(var t=[],r=0,n=e.length;r<n;){var i=e.charCodeAt(r++);if(i>=55296&&i<=56319&&r<n){var a=e.charCodeAt(r++);(a&64512)==56320?t.push(((i&1023)<<10)+(a&1023)+65536):(t.push(i),r--)}else t.push(i)}return t}function Ae(e){var t=br(e);return t.length===1?t[0].toString(16):null}function yr(e,t){var r=e.length,n=e.charCodeAt(t),i;return n>=55296&&n<=56319&&r>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(n-55296)*1024+i-56320+65536:n}function On(e){return Object.keys(e).reduce(function(t,r){var n=e[r],i=!!n.icon;return i?t[n.iconName]=n.icon:t[r]=n,t},{})}function Te(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=r.skipHooks,i=n===void 0?!1:n,a=On(t);typeof F.hooks.addPack=="function"&&!i?F.hooks.addPack(e,On(t)):F.styles[e]=d(d({},F.styles[e]||{}),a),e==="fas"&&Te("fa",t)}var Jt,te,ee,ht=F.styles,_r=F.shims,wr=(Jt={},E(Jt,v,Object.values(St[v])),E(Jt,y,Object.values(St[y])),Jt),Be=null,si={},oi={},ci={},li={},ui={},kr=(te={},E(te,v,Object.keys(Mt[v])),E(te,y,Object.keys(Mt[y])),te);function Ir(e){return~rr.indexOf(e)}function Er(e,t){var r=t.split("-"),n=r[0],i=r.slice(1).join("-");return n===e&&i!==""&&!Ir(i)?i:null}var di=function(){var t=function(a){return _e(ht,function(s,o,c){return s[c]=_e(o,a,{}),s},{})};si=t(function(i,a,s){if(a[3]&&(i[a[3]]=s),a[2]){var o=a[2].filter(function(c){return typeof c=="number"});o.forEach(function(c){i[c.toString(16)]=s})}return i}),oi=t(function(i,a,s){if(i[s]=s,a[2]){var o=a[2].filter(function(c){return typeof c=="string"});o.forEach(function(c){i[c]=s})}return i}),ui=t(function(i,a,s){var o=a[2];return i[s]=s,o.forEach(function(c){i[c]=s}),i});var r="far"in ht||m.autoFetchSvg,n=_e(_r,function(i,a){var s=a[0],o=a[1],c=a[2];return o==="far"&&!r&&(o="fas"),typeof s=="string"&&(i.names[s]={prefix:o,iconName:c}),typeof s=="number"&&(i.unicodes[s.toString(16)]={prefix:o,iconName:c}),i},{names:{},unicodes:{}});ci=n.names,li=n.unicodes,Be=ce(m.styleDefault,{family:m.familyDefault})};or(function(e){Be=ce(e.styleDefault,{family:m.familyDefault})});di();function He(e,t){return(si[e]||{})[t]}function xr(e,t){return(oi[e]||{})[t]}function at(e,t){return(ui[e]||{})[t]}function fi(e){return ci[e]||{prefix:null,iconName:null}}function Ar(e){var t=li[e],r=He("fas",e);return t||(r?{prefix:"fas",iconName:r}:null)||{prefix:null,iconName:null}}function Q(){return Be}var $e=function(){return{prefix:null,iconName:null,rest:[]}};function ce(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.family,n=r===void 0?v:r,i=Mt[n][e],a=Nt[n][e]||Nt[n][i],s=e in F.styles?e:null;return a||s||null}var Mn=(ee={},E(ee,v,Object.keys(St[v])),E(ee,y,Object.keys(St[y])),ee);function le(e){var t,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.skipLookups,i=n===void 0?!1:n,a=(t={},E(t,v,"".concat(m.cssPrefix,"-").concat(v)),E(t,y,"".concat(m.cssPrefix,"-").concat(y)),t),s=null,o=v;(e.includes(a[v])||e.some(function(u){return Mn[v].includes(u)}))&&(o=v),(e.includes(a[y])||e.some(function(u){return Mn[y].includes(u)}))&&(o=y);var c=e.reduce(function(u,l){var f=Er(m.cssPrefix,l);if(ht[l]?(l=wr[o].includes(l)?Qi[o][l]:l,s=l,u.prefix=l):kr[o].indexOf(l)>-1?(s=l,u.prefix=ce(l,{family:o})):f?u.iconName=f:l!==m.replacementClass&&l!==a[v]&&l!==a[y]&&u.rest.push(l),!i&&u.prefix&&u.iconName){var h=s==="fa"?fi(u.iconName):{},p=at(u.prefix,u.iconName);h.prefix&&(s=null),u.iconName=h.iconName||p||u.iconName,u.prefix=h.prefix||u.prefix,u.prefix==="far"&&!ht.far&&ht.fas&&!m.autoFetchSvg&&(u.prefix="fas")}return u},$e());return(e.includes("fa-brands")||e.includes("fab"))&&(c.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(c.prefix="fad"),!c.prefix&&o===y&&(ht.fass||m.autoFetchSvg)&&(c.prefix="fass",c.iconName=at(c.prefix,c.iconName)||c.iconName),(c.prefix==="fa"||s==="fa")&&(c.prefix=Q()||"fas"),c}var Tr=function(){function e(){Ui(this,e),this.definitions={}}return Bi(e,[{key:"add",value:function(){for(var r=this,n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];var s=i.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(o){r.definitions[o]=d(d({},r.definitions[o]||{}),s[o]),Te(o,s[o]);var c=St[v][o];c&&Te(c,s[o]),di()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(r,n){var i=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(i).map(function(a){var s=i[a],o=s.prefix,c=s.iconName,u=s.icon,l=u[2];r[o]||(r[o]={}),l.length>0&&l.forEach(function(f){typeof f=="string"&&(r[o][f]=u)}),r[o][c]=u}),r}}]),e}(),Nn=[],pt={},gt={},Cr=Object.keys(gt);function Dr(e,t){var r=t.mixoutsTo;return Nn=e,pt={},Object.keys(gt).forEach(function(n){Cr.indexOf(n)===-1&&delete gt[n]}),Nn.forEach(function(n){var i=n.mixout?n.mixout():{};if(Object.keys(i).forEach(function(s){typeof i[s]=="function"&&(r[s]=i[s]),re(i[s])==="object"&&Object.keys(i[s]).forEach(function(o){r[s]||(r[s]={}),r[s][o]=i[s][o]})}),n.hooks){var a=n.hooks();Object.keys(a).forEach(function(s){pt[s]||(pt[s]=[]),pt[s].push(a[s])})}n.provides&&n.provides(gt)}),r}function Ce(e,t){for(var r=arguments.length,n=new Array(r>2?r-2:0),i=2;i<r;i++)n[i-2]=arguments[i];var a=pt[e]||[];return a.forEach(function(s){t=s.apply(null,[t].concat(n))}),t}function ot(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var i=pt[e]||[];i.forEach(function(a){a.apply(null,r)})}function W(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return gt[e]?gt[e].apply(null,t):void 0}function De(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,r=e.prefix||Q();if(t)return t=at(r,t)||t,Dn(mi.definitions,r,t)||Dn(F.styles,r,t)}var mi=new Tr,Or=function(){m.autoReplaceSvg=!1,m.observeMutations=!1,ot("noAuto")},Mr={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Y?(ot("beforeI2svg",t),W("pseudoElements2svg",t),W("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=t.autoReplaceSvgRoot;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,gr(function(){Sr({autoReplaceSvgRoot:r}),ot("watch",t)})}},Nr={icon:function(t){if(t===null)return null;if(re(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:at(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var r=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=ce(t[0]);return{prefix:n,iconName:at(n,r)||r}}if(typeof t=="string"&&(t.indexOf("".concat(m.cssPrefix,"-"))>-1||t.match(Ji))){var i=le(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||Q(),iconName:at(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var a=Q();return{prefix:a,iconName:at(a,t)||t}}}},N={noAuto:Or,config:m,dom:Mr,parse:Nr,library:mi,findIconDefinition:De,toHtml:jt},Sr=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=t.autoReplaceSvgRoot,n=r===void 0?b:r;(Object.keys(F.styles).length>0||m.autoFetchSvg)&&Y&&m.autoReplaceSvg&&N.dom.i2svg({node:n})};function ue(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(n){return jt(n)})}}),Object.defineProperty(e,"node",{get:function(){if(Y){var n=b.createElement("div");return n.innerHTML=e.html,n.children}}}),e}function Fr(e){var t=e.children,r=e.main,n=e.mask,i=e.attributes,a=e.styles,s=e.transform;if(Ue(s)&&r.found&&!n.found){var o=r.width,c=r.height,u={x:o/c/2,y:.5};i.style=oe(d(d({},a),{},{"transform-origin":"".concat(u.x+s.x/16,"em ").concat(u.y+s.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function Rr(e){var t=e.prefix,r=e.iconName,n=e.children,i=e.attributes,a=e.symbol,s=a===!0?"".concat(t,"-").concat(m.cssPrefix,"-").concat(r):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:d(d({},i),{},{id:s}),children:n}]}]}function Ve(e){var t=e.icons,r=t.main,n=t.mask,i=e.prefix,a=e.iconName,s=e.transform,o=e.symbol,c=e.title,u=e.maskId,l=e.titleId,f=e.extra,h=e.watchable,p=h===void 0?!1:h,w=n.found?n:r,_=w.width,C=w.height,O=i==="fak",k=[m.replacementClass,a?"".concat(m.cssPrefix,"-").concat(a):""].filter(function(G){return f.classes.indexOf(G)===-1}).filter(function(G){return G!==""||!!G}).concat(f.classes).join(" "),A={children:[],attributes:d(d({},f.attributes),{},{"data-prefix":i,"data-icon":a,class:k,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(_," ").concat(C)})},L=O&&!~f.classes.indexOf("fa-fw")?{width:"".concat(_/C*16*.0625,"em")}:{};p&&(A.attributes[st]=""),c&&(A.children.push({tag:"title",attributes:{id:A.attributes["aria-labelledby"]||"title-".concat(l||Rt())},children:[c]}),delete A.attributes.title);var M=d(d({},A),{},{prefix:i,iconName:a,main:r,mask:n,maskId:u,transform:s,symbol:o,styles:d(d({},L),f.styles)}),et=n.found&&r.found?W("generateAbstractMask",M)||{children:[],attributes:{}}:W("generateAbstractIcon",M)||{children:[],attributes:{}},nt=et.children,me=et.attributes;return M.children=nt,M.attributes=me,o?Rr(M):Fr(M)}function Sn(e){var t=e.content,r=e.width,n=e.height,i=e.transform,a=e.title,s=e.extra,o=e.watchable,c=o===void 0?!1:o,u=d(d(d({},s.attributes),a?{title:a}:{}),{},{class:s.classes.join(" ")});c&&(u[st]="");var l=d({},s.styles);Ue(i)&&(l.transform=fr({transform:i,startCentered:!0,width:r,height:n}),l["-webkit-transform"]=l.transform);var f=oe(l);f.length>0&&(u.style=f);var h=[];return h.push({tag:"span",attributes:u,children:[t]}),a&&h.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),h}function Lr(e){var t=e.content,r=e.title,n=e.extra,i=d(d(d({},n.attributes),r?{title:r}:{}),{},{class:n.classes.join(" ")}),a=oe(n.styles);a.length>0&&(i.style=a);var s=[];return s.push({tag:"span",attributes:i,children:[t]}),r&&s.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),s}var we=F.styles;function Oe(e){var t=e[0],r=e[1],n=e.slice(4),i=Fe(n,1),a=i[0],s=null;return Array.isArray(a)?s={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat(rt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(rt.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(rt.PRIMARY),fill:"currentColor",d:a[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:r,icon:s}}var Pr={found:!1,width:512,height:512};function jr(e,t){!Jn&&!m.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Me(e,t){var r=t;return t==="fa"&&m.styleDefault!==null&&(t=Q()),new Promise(function(n,i){var a={found:!1,width:512,height:512,icon:W("missingIconAbstract")||{}};if(r==="fa"){var s=fi(e)||{};e=s.iconName||e,t=s.prefix||t}if(e&&t&&we[t]&&we[t][e]){var o=we[t][e];return n(Oe(o))}jr(e,t),n(d(d({},Pr),{},{icon:m.showMissingIcons&&e?W("missingIconAbstract")||{}:{}}))})}var Fn=function(){},Ne=m.measurePerformance&&Gt&&Gt.mark&&Gt.measure?Gt:{mark:Fn,measure:Fn},Ct='FA "6.5.2"',zr=function(t){return Ne.mark("".concat(Ct," ").concat(t," begins")),function(){return hi(t)}},hi=function(t){Ne.mark("".concat(Ct," ").concat(t," ends")),Ne.measure("".concat(Ct," ").concat(t),"".concat(Ct," ").concat(t," begins"),"".concat(Ct," ").concat(t," ends"))},We={begin:zr,end:hi},ne=function(){};function Rn(e){var t=e.getAttribute?e.getAttribute(st):null;return typeof t=="string"}function Ur(e){var t=e.getAttribute?e.getAttribute(Le):null,r=e.getAttribute?e.getAttribute(Pe):null;return t&&r}function Br(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(m.replacementClass)}function Hr(){if(m.autoReplaceSvg===!0)return ie.replace;var e=ie[m.autoReplaceSvg];return e||ie.replace}function $r(e){return b.createElementNS("http://www.w3.org/2000/svg",e)}function Vr(e){return b.createElement(e)}function pi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.ceFn,n=r===void 0?e.tag==="svg"?$r:Vr:r;if(typeof e=="string")return b.createTextNode(e);var i=n(e.tag);Object.keys(e.attributes||[]).forEach(function(s){i.setAttribute(s,e.attributes[s])});var a=e.children||[];return a.forEach(function(s){i.appendChild(pi(s,{ceFn:n}))}),i}function Wr(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var ie={replace:function(t){var r=t[0];if(r.parentNode)if(t[1].forEach(function(i){r.parentNode.insertBefore(pi(i),r)}),r.getAttribute(st)===null&&m.keepOriginalSource){var n=b.createComment(Wr(r));r.parentNode.replaceChild(n,r)}else r.remove()},nest:function(t){var r=t[0],n=t[1];if(~ze(r).indexOf(m.replacementClass))return ie.replace(t);var i=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){var a=n[0].attributes.class.split(" ").reduce(function(o,c){return c===m.replacementClass||c.match(i)?o.toSvg.push(c):o.toNode.push(c),o},{toNode:[],toSvg:[]});n[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?r.removeAttribute("class"):r.setAttribute("class",a.toNode.join(" "))}var s=n.map(function(o){return jt(o)}).join(`
`);r.setAttribute(st,""),r.innerHTML=s}};function Ln(e){e()}function gi(e,t){var r=typeof t=="function"?t:ne;if(e.length===0)r();else{var n=Ln;m.mutateApproach===Xi&&(n=q.requestAnimationFrame||Ln),n(function(){var i=Hr(),a=We.begin("mutate");e.map(i),a(),r()})}}var Ye=!1;function vi(){Ye=!0}function Se(){Ye=!1}var se=null;function Pn(e){if(xn&&m.observeMutations){var t=e.treeCallback,r=t===void 0?ne:t,n=e.nodeCallback,i=n===void 0?ne:n,a=e.pseudoElementsCallback,s=a===void 0?ne:a,o=e.observeMutationsRoot,c=o===void 0?b:o;se=new xn(function(u){if(!Ye){var l=Q();bt(u).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!Rn(f.addedNodes[0])&&(m.searchPseudoElements&&s(f.target),r(f.target)),f.type==="attributes"&&f.target.parentNode&&m.searchPseudoElements&&s(f.target.parentNode),f.type==="attributes"&&Rn(f.target)&&~ir.indexOf(f.attributeName))if(f.attributeName==="class"&&Ur(f.target)){var h=le(ze(f.target)),p=h.prefix,w=h.iconName;f.target.setAttribute(Le,p||l),w&&f.target.setAttribute(Pe,w)}else Br(f.target)&&i(f.target)})}}),Y&&se.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Yr(){se&&se.disconnect()}function Gr(e){var t=e.getAttribute("style"),r=[];return t&&(r=t.split(";").reduce(function(n,i){var a=i.split(":"),s=a[0],o=a.slice(1);return s&&o.length>0&&(n[s]=o.join(":").trim()),n},{})),r}function Kr(e){var t=e.getAttribute("data-prefix"),r=e.getAttribute("data-icon"),n=e.innerText!==void 0?e.innerText.trim():"",i=le(ze(e));return i.prefix||(i.prefix=Q()),t&&r&&(i.prefix=t,i.iconName=r),i.iconName&&i.prefix||(i.prefix&&n.length>0&&(i.iconName=xr(i.prefix,e.innerText)||He(i.prefix,Ae(e.innerText))),!i.iconName&&m.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function Zr(e){var t=bt(e.attributes).reduce(function(i,a){return i.name!=="class"&&i.name!=="style"&&(i[a.name]=a.value),i},{}),r=e.getAttribute("title"),n=e.getAttribute("data-fa-title-id");return m.autoA11y&&(r?t["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(n||Rt()):(t["aria-hidden"]="true",t.focusable="false")),t}function Xr(){return{iconName:null,title:null,titleId:null,prefix:null,transform:z,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function jn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},r=Kr(e),n=r.iconName,i=r.prefix,a=r.rest,s=Zr(e),o=Ce("parseNodeAttributes",{},e),c=t.styleParser?Gr(e):[];return d({iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:z,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:c,attributes:s}},o)}var qr=F.styles;function bi(e){var t=m.autoReplaceSvg==="nest"?jn(e,{styleParser:!1}):jn(e);return~t.extra.classes.indexOf(ti)?W("generateLayersText",e,t):W("generateSvgReplacementMutation",e,t)}var J=new Set;je.map(function(e){J.add("fa-".concat(e))});Object.keys(Mt[v]).map(J.add.bind(J));Object.keys(Mt[y]).map(J.add.bind(J));J=Lt(J);function zn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Y)return Promise.resolve();var r=b.documentElement.classList,n=function(f){return r.add("".concat(An,"-").concat(f))},i=function(f){return r.remove("".concat(An,"-").concat(f))},a=m.autoFetchSvg?J:je.map(function(l){return"fa-".concat(l)}).concat(Object.keys(qr));a.includes("fa")||a.push("fa");var s=[".".concat(ti,":not([").concat(st,"])")].concat(a.map(function(l){return".".concat(l,":not([").concat(st,"])")})).join(", ");if(s.length===0)return Promise.resolve();var o=[];try{o=bt(e.querySelectorAll(s))}catch{}if(o.length>0)n("pending"),i("complete");else return Promise.resolve();var c=We.begin("onTree"),u=o.reduce(function(l,f){try{var h=bi(f);h&&l.push(h)}catch(p){Jn||p.name==="MissingIcon"&&console.error(p)}return l},[]);return new Promise(function(l,f){Promise.all(u).then(function(h){gi(h,function(){n("active"),n("complete"),i("pending"),typeof t=="function"&&t(),c(),l()})}).catch(function(h){c(),f(h)})})}function Qr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;bi(e).then(function(r){r&&gi([r],t)})}function Jr(e){return function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=(t||{}).icon?t:De(t||{}),i=r.mask;return i&&(i=(i||{}).icon?i:De(i||{})),e(n,d(d({},r),{},{mask:i}))}}var ta=function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.transform,i=n===void 0?z:n,a=r.symbol,s=a===void 0?!1:a,o=r.mask,c=o===void 0?null:o,u=r.maskId,l=u===void 0?null:u,f=r.title,h=f===void 0?null:f,p=r.titleId,w=p===void 0?null:p,_=r.classes,C=_===void 0?[]:_,O=r.attributes,k=O===void 0?{}:O,A=r.styles,L=A===void 0?{}:A;if(t){var M=t.prefix,et=t.iconName,nt=t.icon;return ue(d({type:"icon"},t),function(){return ot("beforeDOMElementCreation",{iconDefinition:t,params:r}),m.autoA11y&&(h?k["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(w||Rt()):(k["aria-hidden"]="true",k.focusable="false")),Ve({icons:{main:Oe(nt),mask:c?Oe(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:M,iconName:et,transform:d(d({},z),i),symbol:s,title:h,maskId:l,titleId:w,extra:{attributes:k,styles:L,classes:C}})})}},ea={mixout:function(){return{icon:Jr(ta)}},hooks:function(){return{mutationObserverCallbacks:function(r){return r.treeCallback=zn,r.nodeCallback=Qr,r}}},provides:function(t){t.i2svg=function(r){var n=r.node,i=n===void 0?b:n,a=r.callback,s=a===void 0?function(){}:a;return zn(i,s)},t.generateSvgReplacementMutation=function(r,n){var i=n.iconName,a=n.title,s=n.titleId,o=n.prefix,c=n.transform,u=n.symbol,l=n.mask,f=n.maskId,h=n.extra;return new Promise(function(p,w){Promise.all([Me(i,o),l.iconName?Me(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(_){var C=Fe(_,2),O=C[0],k=C[1];p([r,Ve({icons:{main:O,mask:k},prefix:o,iconName:i,transform:c,symbol:u,maskId:f,title:a,titleId:s,extra:h,watchable:!0})])}).catch(w)})},t.generateAbstractIcon=function(r){var n=r.children,i=r.attributes,a=r.main,s=r.transform,o=r.styles,c=oe(o);c.length>0&&(i.style=c);var u;return Ue(s)&&(u=W("generateAbstractTransformGrouping",{main:a,transform:s,containerWidth:a.width,iconWidth:a.width})),n.push(u||a.icon),{children:n,attributes:i}}}},na={mixout:function(){return{layer:function(r){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.classes,a=i===void 0?[]:i;return ue({type:"layer"},function(){ot("beforeDOMElementCreation",{assembler:r,params:n});var s=[];return r(function(o){Array.isArray(o)?o.map(function(c){s=s.concat(c.abstract)}):s=s.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers")].concat(Lt(a)).join(" ")},children:s}]})}}}},ia={mixout:function(){return{counter:function(r){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.title,a=i===void 0?null:i,s=n.classes,o=s===void 0?[]:s,c=n.attributes,u=c===void 0?{}:c,l=n.styles,f=l===void 0?{}:l;return ue({type:"counter",content:r},function(){return ot("beforeDOMElementCreation",{content:r,params:n}),Lr({content:r.toString(),title:a,extra:{attributes:u,styles:f,classes:["".concat(m.cssPrefix,"-layers-counter")].concat(Lt(o))}})})}}}},ra={mixout:function(){return{text:function(r){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.transform,a=i===void 0?z:i,s=n.title,o=s===void 0?null:s,c=n.classes,u=c===void 0?[]:c,l=n.attributes,f=l===void 0?{}:l,h=n.styles,p=h===void 0?{}:h;return ue({type:"text",content:r},function(){return ot("beforeDOMElementCreation",{content:r,params:n}),Sn({content:r,transform:d(d({},z),a),title:o,extra:{attributes:f,styles:p,classes:["".concat(m.cssPrefix,"-layers-text")].concat(Lt(u))}})})}}},provides:function(t){t.generateLayersText=function(r,n){var i=n.title,a=n.transform,s=n.extra,o=null,c=null;if(Xn){var u=parseInt(getComputedStyle(r).fontSize,10),l=r.getBoundingClientRect();o=l.width/u,c=l.height/u}return m.autoA11y&&!i&&(s.attributes["aria-hidden"]="true"),Promise.resolve([r,Sn({content:r.innerHTML,width:o,height:c,transform:a,title:i,extra:s,watchable:!0})])}}},aa=new RegExp('"',"ug"),Un=[1105920,1112319];function sa(e){var t=e.replace(aa,""),r=yr(t,0),n=r>=Un[0]&&r<=Un[1],i=t.length===2?t[0]===t[1]:!1;return{value:Ae(i?t[0]:t),isSecondary:n||i}}function Bn(e,t){var r="".concat(Zi).concat(t.replace(":","-"));return new Promise(function(n,i){if(e.getAttribute(r)!==null)return n();var a=bt(e.children),s=a.filter(function(nt){return nt.getAttribute(xe)===t})[0],o=q.getComputedStyle(e,t),c=o.getPropertyValue("font-family").match(tr),u=o.getPropertyValue("font-weight"),l=o.getPropertyValue("content");if(s&&!c)return e.removeChild(s),n();if(c&&l!=="none"&&l!==""){var f=o.getPropertyValue("content"),h=~["Sharp"].indexOf(c[2])?y:v,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(c[2])?Nt[h][c[2].toLowerCase()]:er[h][u],w=sa(f),_=w.value,C=w.isSecondary,O=c[0].startsWith("FontAwesome"),k=He(p,_),A=k;if(O){var L=Ar(_);L.iconName&&L.prefix&&(k=L.iconName,p=L.prefix)}if(k&&!C&&(!s||s.getAttribute(Le)!==p||s.getAttribute(Pe)!==A)){e.setAttribute(r,A),s&&e.removeChild(s);var M=Xr(),et=M.extra;et.attributes[xe]=t,Me(k,p).then(function(nt){var me=Ve(d(d({},M),{},{icons:{main:nt,mask:$e()},prefix:p,iconName:A,extra:et,watchable:!0})),G=b.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(G,e.firstChild):e.appendChild(G),G.outerHTML=me.map(function(zi){return jt(zi)}).join(`
`),e.removeAttribute(r),n()}).catch(i)}else n()}else n()})}function oa(e){return Promise.all([Bn(e,"::before"),Bn(e,"::after")])}function ca(e){return e.parentNode!==document.head&&!~qi.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(xe)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Hn(e){if(Y)return new Promise(function(t,r){var n=bt(e.querySelectorAll("*")).filter(ca).map(oa),i=We.begin("searchPseudoElements");vi(),Promise.all(n).then(function(){i(),Se(),t()}).catch(function(){i(),Se(),r()})})}var la={hooks:function(){return{mutationObserverCallbacks:function(r){return r.pseudoElementsCallback=Hn,r}}},provides:function(t){t.pseudoElements2svg=function(r){var n=r.node,i=n===void 0?b:n;m.searchPseudoElements&&Hn(i)}}},$n=!1,ua={mixout:function(){return{dom:{unwatch:function(){vi(),$n=!0}}}},hooks:function(){return{bootstrap:function(){Pn(Ce("mutationObserverCallbacks",{}))},noAuto:function(){Yr()},watch:function(r){var n=r.observeMutationsRoot;$n?Se():Pn(Ce("mutationObserverCallbacks",{observeMutationsRoot:n}))}}}},Vn=function(t){var r={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(n,i){var a=i.toLowerCase().split("-"),s=a[0],o=a.slice(1).join("-");if(s&&o==="h")return n.flipX=!0,n;if(s&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(s){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},r)},da={mixout:function(){return{parse:{transform:function(r){return Vn(r)}}}},hooks:function(){return{parseNodeAttributes:function(r,n){var i=n.getAttribute("data-fa-transform");return i&&(r.transform=Vn(i)),r}}},provides:function(t){t.generateAbstractTransformGrouping=function(r){var n=r.main,i=r.transform,a=r.containerWidth,s=r.iconWidth,o={transform:"translate(".concat(a/2," 256)")},c="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),l="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(c," ").concat(u," ").concat(l)},h={transform:"translate(".concat(s/2*-1," -256)")},p={outer:o,inner:f,path:h};return{tag:"g",attributes:d({},p.outer),children:[{tag:"g",attributes:d({},p.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:d(d({},n.icon.attributes),p.path)}]}]}}}},ke={x:0,y:0,width:"100%",height:"100%"};function Wn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function fa(e){return e.tag==="g"?e.children:[e]}var ma={hooks:function(){return{parseNodeAttributes:function(r,n){var i=n.getAttribute("data-fa-mask"),a=i?le(i.split(" ").map(function(s){return s.trim()})):$e();return a.prefix||(a.prefix=Q()),r.mask=a,r.maskId=n.getAttribute("data-fa-mask-id"),r}}},provides:function(t){t.generateAbstractMask=function(r){var n=r.children,i=r.attributes,a=r.main,s=r.mask,o=r.maskId,c=r.transform,u=a.width,l=a.icon,f=s.width,h=s.icon,p=dr({transform:c,containerWidth:f,iconWidth:u}),w={tag:"rect",attributes:d(d({},ke),{},{fill:"white"})},_=l.children?{children:l.children.map(Wn)}:{},C={tag:"g",attributes:d({},p.inner),children:[Wn(d({tag:l.tag,attributes:d(d({},l.attributes),p.path)},_))]},O={tag:"g",attributes:d({},p.outer),children:[C]},k="mask-".concat(o||Rt()),A="clip-".concat(o||Rt()),L={tag:"mask",attributes:d(d({},ke),{},{id:k,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[w,O]},M={tag:"defs",children:[{tag:"clipPath",attributes:{id:A},children:fa(h)},L]};return n.push(M,{tag:"rect",attributes:d({fill:"currentColor","clip-path":"url(#".concat(A,")"),mask:"url(#".concat(k,")")},ke)}),{children:n,attributes:i}}}},ha={provides:function(t){var r=!1;q.matchMedia&&(r=q.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var n=[],i={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:d(d({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=d(d({},a),{},{attributeName:"opacity"}),o={tag:"circle",attributes:d(d({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return r||o.children.push({tag:"animate",attributes:d(d({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:d(d({},s),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:d(d({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:r?[]:[{tag:"animate",attributes:d(d({},s),{},{values:"1;0;0;0;0;1;"})}]}),r||n.push({tag:"path",attributes:d(d({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:d(d({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},pa={hooks:function(){return{parseNodeAttributes:function(r,n){var i=n.getAttribute("data-fa-symbol"),a=i===null?!1:i===""?!0:i;return r.symbol=a,r}}}},ga=[hr,ea,na,ia,ra,la,ua,da,ma,ha,pa];Dr(ga,{mixoutsTo:N});var fs=N.noAuto,ms=N.config,hs=N.library,ps=N.dom,yi=N.parse,gs=N.findIconDefinition,vs=N.toHtml,_i=N.icon,bs=N.layer,va=N.text,ba=N.counter;var ya=["*"],_a=e=>{throw new Error(`Could not find icon with iconName=${e.iconName} and prefix=${e.prefix} in the icon library.`)},wa=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},ka=e=>{let t={[`fa-${e.animation}`]:e.animation!=null&&!e.animation.startsWith("spin"),"fa-spin":e.animation==="spin"||e.animation==="spin-reverse","fa-spin-pulse":e.animation==="spin-pulse"||e.animation==="spin-pulse-reverse","fa-spin-reverse":e.animation==="spin-reverse"||e.animation==="spin-pulse-reverse","fa-pulse":e.animation==="spin-pulse"||e.animation==="spin-pulse-reverse","fa-fw":e.fixedWidth,"fa-border":e.border,"fa-inverse":e.inverse,"fa-layers-counter":e.counter,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both",[`fa-${e.size}`]:e.size!==null,[`fa-rotate-${e.rotate}`]:e.rotate!==null,[`fa-pull-${e.pull}`]:e.pull!==null,[`fa-stack-${e.stackItemSize}`]:e.stackItemSize!=null};return Object.keys(t).map(r=>t[r]?r:null).filter(r=>r)},Ia=e=>e.prefix!==void 0&&e.iconName!==void 0,Ea=(e,t)=>Ia(e)?e:typeof e=="string"?{prefix:t,iconName:e}:{prefix:e[0],iconName:e[1]},xa=(()=>{let t=class t{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})(),Aa=(()=>{let t=class t{constructor(){this.definitions={}}addIcons(...n){for(let i of n){i.prefix in this.definitions||(this.definitions[i.prefix]={}),this.definitions[i.prefix][i.iconName]=i;for(let a of i.icon[2])typeof a=="string"&&(this.definitions[i.prefix][a]=i)}}addIconPacks(...n){for(let i of n){let a=Object.keys(i).map(s=>i[s]);this.addIcons(...a)}}getIconDefinition(n,i){return n in this.definitions&&i in this.definitions[n]?this.definitions[n][i]:null}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})(),Ta=(()=>{let t=class t{constructor(){this.stackItemSize="1x"}ngOnChanges(n){if("size"in n)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}};t.\u0275fac=function(i){return new(i||t)},t.\u0275dir=mt({type:t,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[At]});let e=t;return e})(),Ca=(()=>{let t=class t{constructor(n,i){this.renderer=n,this.elementRef=i}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(n){"size"in n&&(n.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${n.size.currentValue}`),n.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${n.size.previousValue}`))}};t.\u0275fac=function(i){return new(i||t)(x(gn),x(Z))},t.\u0275cmp=xt({type:t,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[At,Tt],ngContentSelectors:ya,decls:1,vars:0,template:function(i,a){i&1&&(ve(),be(0))},encapsulation:2});let e=t;return e})(),Es=(()=>{let t=class t{set spin(n){this.animation=n?"spin":void 0}set pulse(n){this.animation=n?"spin-pulse":void 0}constructor(n,i,a,s,o){this.sanitizer=n,this.config=i,this.iconLibrary=a,this.stackItem=s,this.classes=[],o!=null&&s==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(n){if(this.icon==null&&this.config.fallbackIcon==null){wa();return}if(n){let i=this.icon!=null?this.icon:this.config.fallbackIcon,a=this.findIconDefinition(i);if(a!=null){let s=this.buildParams();this.renderIcon(a,s)}}}render(){this.ngOnChanges({})}findIconDefinition(n){let i=Ea(n,this.config.defaultPrefix);if("icon"in i)return i;let a=this.iconLibrary.getIconDefinition(i.prefix,i.iconName);return a??(_a(i),null)}buildParams(){let n={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},i=typeof this.transform=="string"?yi.transform(this.transform):this.transform;return{title:this.title,transform:i,classes:[...ka(n),...this.classes],mask:this.mask!=null?this.findIconDefinition(this.mask):null,styles:this.styles!=null?this.styles:{},symbol:this.symbol,attributes:{role:this.a11yRole}}}renderIcon(n,i){let a=_i(n,i);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(a.html.join(`
`))}};t.\u0275fac=function(i){return new(i||t)(x(yn),x(xa),x(Aa),x(Ta,8),x(Ca,8))},t.\u0275cmp=xt({type:t,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(i,a){i&2&&(ge("innerHTML",a.renderedIconHTML,pn),Wt("title",a.title))},inputs:{icon:"icon",title:"title",animation:"animation",spin:"spin",pulse:"pulse",mask:"mask",styles:"styles",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",classes:"classes",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[At,Tt],decls:0,vars:0,template:function(i,a){},encapsulation:2});let e=t;return e})();var xs=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=j({type:t}),t.\u0275inj=P({});let e=t;return e})();var wi={api:"https://rickandmortyapi.com"};var Ss=(()=>{var t,r,n,i;let a=class a{constructor(){kt(this,t,`${wi.api}/api/character`);kt(this,r,it(bn));kt(this,n,new Et([]));kt(this,i,new Et(0))}getCharacters$(o){return D(this,r).get(D(this,t),{params:o}).pipe(dn(),ft(c=>(c.results.find(u=>{D(this,n).getValue().find(l=>{u.id===l.id&&(u.fav=!0)})}),c)))}getFavoriteCharacters$(){return D(this,n).asObservable()}get favoritesTotal(){return D(this,i).asObservable()}addFavorite(o){let c=D(this,n).getValue();c.find(u=>u.id===o.id)||(o.fav=!0,D(this,n).next([...c,o]),D(this,i).next(D(this,n).getValue().length))}removeFavorite(o){let c=D(this,n).getValue();if(c.find(u=>u.id===o.id)){o.fav=!1;let u=c.filter(({id:l})=>l!==o.id);D(this,n).next(u),D(this,i).next(D(this,n).getValue().length)}}};t=new WeakMap,r=new WeakMap,n=new WeakMap,i=new WeakMap,a.\u0275fac=function(c){return new(c||a)},a.\u0275prov=I({token:a,factory:a.\u0275fac,providedIn:"root"});let e=a;return e})();var Ke;try{Ke=typeof Intl<"u"&&Intl.v8BreakIterator}catch{Ke=!1}var R=(()=>{let t=class t{constructor(n){this._platformId=n,this.isBrowser=this._platformId?vn(this._platformId):typeof document=="object"&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!!(window.chrome||Ke)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}};t.\u0275fac=function(i){return new(i||t)(g(mn))},t.\u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var zt;function Da(){if(zt==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>zt=!0}))}finally{zt=zt||!1}return zt}function _t(e){return Da()?e:!!e.capture}var ct;function Bs(){if(ct==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return ct=!1,ct;if("scrollBehavior"in document.documentElement.style)ct=!0;else{let e=Element.prototype.scrollTo;e?ct=!/\{\s*\[native code\]\s*\}/.test(e.toString()):ct=!1}}return ct}var Ge;function Oa(){if(Ge==null){let e=typeof document<"u"?document.head:null;Ge=!!(e&&(e.createShadowRoot||e.attachShadow))}return Ge}function ki(e){if(Oa()){let t=e.getRootNode?e.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&t instanceof ShadowRoot)return t}return null}function Ma(){let e=typeof document<"u"&&document?document.activeElement:null;for(;e&&e.shadowRoot;){let t=e.shadowRoot.activeElement;if(t===e)break;e=t}return e}function tt(e){return e.composedPath?e.composedPath()[0]:e.target}function Ii(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}function Hs(e,...t){return t.length?t.some(r=>e[r]):e.altKey||e.shiftKey||e.ctrlKey||e.metaKey}function Na(e,t=0){return Sa(e)?Number(e):t}function Sa(e){return!isNaN(parseFloat(e))&&!isNaN(Number(e))}function Xe(e){return Array.isArray(e)?e:[e]}function Ws(e){return e==null?"":typeof e=="string"?e:`${e}px`}function lt(e){return e instanceof Z?e.nativeElement:e}var Ei=new Set,ut,Fa=(()=>{let t=class t{constructor(n,i){this._platform=n,this._nonce=i,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):La}matchMedia(n){return(this._platform.WEBKIT||this._platform.BLINK)&&Ra(n,this._nonce),this._matchMedia(n)}};t.\u0275fac=function(i){return new(i||t)(g(R),g(hn,8))},t.\u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();function Ra(e,t){if(!Ei.has(e))try{ut||(ut=document.createElement("style"),t&&ut.setAttribute("nonce",t),ut.setAttribute("type","text/css"),document.head.appendChild(ut)),ut.sheet&&(ut.sheet.insertRule(`@media ${e} {body{ }}`,0),Ei.add(e))}catch(r){console.error(r)}}function La(e){return{matches:e==="all"||e==="",media:e,addListener:()=>{},removeListener:()=>{}}}var Ai=(()=>{let t=class t{constructor(n,i){this._mediaMatcher=n,this._zone=i,this._queries=new Map,this._destroySubject=new It}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(n){return xi(Xe(n)).some(a=>this._registerQuery(a).mql.matches)}observe(n){let a=xi(Xe(n)).map(o=>this._registerQuery(o).observable),s=cn(a);return s=ln(s.pipe(Bt(1)),s.pipe(Ht(1),he(0))),s.pipe(ft(o=>{let c={matches:!1,breakpoints:{}};return o.forEach(({matches:u,query:l})=>{c.matches=c.matches||u,c.breakpoints[l]=u}),c}))}_registerQuery(n){if(this._queries.has(n))return this._queries.get(n);let i=this._mediaMatcher.matchMedia(n),s={observable:new sn(o=>{let c=u=>this._zone.run(()=>o.next(u));return i.addListener(c),()=>{i.removeListener(c)}}).pipe(fn(i),ft(({matches:o})=>({query:n,matches:o})),$t(this._destroySubject)),mql:i};return this._queries.set(n,s),s}};t.\u0275fac=function(i){return new(i||t)(g(Fa),g(B))},t.\u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();function xi(e){return e.map(t=>t.split(",")).reduce((t,r)=>t.concat(r)).map(t=>t.trim())}var za=(()=>{let t=class t{constructor(n){this._platform=n}isDisabled(n){return n.hasAttribute("disabled")}isVisible(n){return Ba(n)&&getComputedStyle(n).visibility==="visible"}isTabbable(n){if(!this._platform.isBrowser)return!1;let i=Ua(Za(n));if(i&&(Ti(i)===-1||!this.isVisible(i)))return!1;let a=n.nodeName.toLowerCase(),s=Ti(n);return n.hasAttribute("contenteditable")?s!==-1:a==="iframe"||a==="object"||this._platform.WEBKIT&&this._platform.IOS&&!Ga(n)?!1:a==="audio"?n.hasAttribute("controls")?s!==-1:!1:a==="video"?s===-1?!1:s!==null?!0:this._platform.FIREFOX||n.hasAttribute("controls"):n.tabIndex>=0}isFocusable(n,i){return Ka(n)&&!this.isDisabled(n)&&(i?.ignoreVisibility||this.isVisible(n))}};t.\u0275fac=function(i){return new(i||t)(g(R))},t.\u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();function Ua(e){try{return e.frameElement}catch{return null}}function Ba(e){return!!(e.offsetWidth||e.offsetHeight||typeof e.getClientRects=="function"&&e.getClientRects().length)}function Ha(e){let t=e.nodeName.toLowerCase();return t==="input"||t==="select"||t==="button"||t==="textarea"}function $a(e){return Wa(e)&&e.type=="hidden"}function Va(e){return Ya(e)&&e.hasAttribute("href")}function Wa(e){return e.nodeName.toLowerCase()=="input"}function Ya(e){return e.nodeName.toLowerCase()=="a"}function Oi(e){if(!e.hasAttribute("tabindex")||e.tabIndex===void 0)return!1;let t=e.getAttribute("tabindex");return!!(t&&!isNaN(parseInt(t,10)))}function Ti(e){if(!Oi(e))return null;let t=parseInt(e.getAttribute("tabindex")||"",10);return isNaN(t)?-1:t}function Ga(e){let t=e.nodeName.toLowerCase(),r=t==="input"&&e.type;return r==="text"||r==="password"||t==="select"||t==="textarea"}function Ka(e){return $a(e)?!1:Ha(e)||Va(e)||e.hasAttribute("contenteditable")||Oi(e)}function Za(e){return e.ownerDocument&&e.ownerDocument.defaultView||window}var Qe=class{get enabled(){return this._enabled}set enabled(t){this._enabled=t,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(t,this._startAnchor),this._toggleAnchorTabIndex(t,this._endAnchor))}constructor(t,r,n,i,a=!1){this._element=t,this._checker=r,this._ngZone=n,this._document=i,this._hasAttached=!1,this.startAnchorListener=()=>this.focusLastTabbableElement(),this.endAnchorListener=()=>this.focusFirstTabbableElement(),this._enabled=!0,a||this.attachAnchors()}destroy(){let t=this._startAnchor,r=this._endAnchor;t&&(t.removeEventListener("focus",this.startAnchorListener),t.remove()),r&&(r.removeEventListener("focus",this.endAnchorListener),r.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(t){return new Promise(r=>{this._executeOnStable(()=>r(this.focusInitialElement(t)))})}focusFirstTabbableElementWhenReady(t){return new Promise(r=>{this._executeOnStable(()=>r(this.focusFirstTabbableElement(t)))})}focusLastTabbableElementWhenReady(t){return new Promise(r=>{this._executeOnStable(()=>r(this.focusLastTabbableElement(t)))})}_getRegionBoundary(t){let r=this._element.querySelectorAll(`[cdk-focus-region-${t}], [cdkFocusRegion${t}], [cdk-focus-${t}]`);return t=="start"?r.length?r[0]:this._getFirstTabbableElement(this._element):r.length?r[r.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(t){let r=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(r){if(!this._checker.isFocusable(r)){let n=this._getFirstTabbableElement(r);return n?.focus(t),!!n}return r.focus(t),!0}return this.focusFirstTabbableElement(t)}focusFirstTabbableElement(t){let r=this._getRegionBoundary("start");return r&&r.focus(t),!!r}focusLastTabbableElement(t){let r=this._getRegionBoundary("end");return r&&r.focus(t),!!r}hasAttached(){return this._hasAttached}_getFirstTabbableElement(t){if(this._checker.isFocusable(t)&&this._checker.isTabbable(t))return t;let r=t.children;for(let n=0;n<r.length;n++){let i=r[n].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(r[n]):null;if(i)return i}return null}_getLastTabbableElement(t){if(this._checker.isFocusable(t)&&this._checker.isTabbable(t))return t;let r=t.children;for(let n=r.length-1;n>=0;n--){let i=r[n].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(r[n]):null;if(i)return i}return null}_createAnchor(){let t=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,t),t.classList.add("cdk-visually-hidden"),t.classList.add("cdk-focus-trap-anchor"),t.setAttribute("aria-hidden","true"),t}_toggleAnchorTabIndex(t,r){t?r.setAttribute("tabindex","0"):r.removeAttribute("tabindex")}toggleAnchors(t){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(t,this._startAnchor),this._toggleAnchorTabIndex(t,this._endAnchor))}_executeOnStable(t){this._ngZone.isStable?t():this._ngZone.onStable.pipe(Bt(1)).subscribe(t)}},Do=(()=>{let t=class t{constructor(n,i,a){this._checker=n,this._ngZone=i,this._document=a}create(n,i=!1){return new Qe(n,this._checker,this._ngZone,this._document,i)}};t.\u0275fac=function(i){return new(i||t)(g(za),g(B),g(H))},t.\u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();function Je(e){return e.buttons===0||e.detail===0}function tn(e){let t=e.touches&&e.touches[0]||e.changedTouches&&e.changedTouches[0];return!!t&&t.identifier===-1&&(t.radiusX==null||t.radiusX===1)&&(t.radiusY==null||t.radiusY===1)}var Xa=new K("cdk-input-modality-detector-options"),qa={ignoreKeys:[18,17,224,91,16]},Mi=650,wt=_t({passive:!0,capture:!0}),Qa=(()=>{let t=class t{get mostRecentModality(){return this._modality.value}constructor(n,i,a,s){this._platform=n,this._mostRecentTarget=null,this._modality=new Et(null),this._lastTouchMs=0,this._onKeydown=o=>{this._options?.ignoreKeys?.some(c=>c===o.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=tt(o))},this._onMousedown=o=>{Date.now()-this._lastTouchMs<Mi||(this._modality.next(Je(o)?"keyboard":"mouse"),this._mostRecentTarget=tt(o))},this._onTouchstart=o=>{if(tn(o)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=tt(o)},this._options=T(T({},qa),s),this.modalityDetected=this._modality.pipe(Ht(1)),this.modalityChanged=this.modalityDetected.pipe(un()),n.isBrowser&&i.runOutsideAngular(()=>{a.addEventListener("keydown",this._onKeydown,wt),a.addEventListener("mousedown",this._onMousedown,wt),a.addEventListener("touchstart",this._onTouchstart,wt)})}ngOnDestroy(){this._modality.complete(),this._platform.isBrowser&&(document.removeEventListener("keydown",this._onKeydown,wt),document.removeEventListener("mousedown",this._onMousedown,wt),document.removeEventListener("touchstart",this._onTouchstart,wt))}};t.\u0275fac=function(i){return new(i||t)(g(R),g(B),g(H),g(Xa,8))},t.\u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var fe=function(e){return e[e.IMMEDIATE=0]="IMMEDIATE",e[e.EVENTUAL=1]="EVENTUAL",e}(fe||{}),Ja=new K("cdk-focus-monitor-default-options"),de=_t({passive:!0,capture:!0}),Oo=(()=>{let t=class t{constructor(n,i,a,s,o){this._ngZone=n,this._platform=i,this._inputModalityDetector=a,this._origin=null,this._windowFocused=!1,this._originFromTouchInteraction=!1,this._elementInfo=new Map,this._monitoredElementCount=0,this._rootNodeFocusListenerCount=new Map,this._windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=window.setTimeout(()=>this._windowFocused=!1)},this._stopInputModalityDetector=new It,this._rootNodeFocusAndBlurListener=c=>{let u=tt(c);for(let l=u;l;l=l.parentElement)c.type==="focus"?this._onFocus(c,l):this._onBlur(c,l)},this._document=s,this._detectionMode=o?.detectionMode||fe.IMMEDIATE}monitor(n,i=!1){let a=lt(n);if(!this._platform.isBrowser||a.nodeType!==1)return on();let s=ki(a)||this._getDocument(),o=this._elementInfo.get(a);if(o)return i&&(o.checkChildren=!0),o.subject;let c={checkChildren:i,subject:new It,rootNode:s};return this._elementInfo.set(a,c),this._registerGlobalListeners(c),c.subject}stopMonitoring(n){let i=lt(n),a=this._elementInfo.get(i);a&&(a.subject.complete(),this._setClasses(i),this._elementInfo.delete(i),this._removeGlobalListeners(a))}focusVia(n,i,a){let s=lt(n),o=this._getDocument().activeElement;s===o?this._getClosestElementsInfo(s).forEach(([c,u])=>this._originChanged(c,i,u)):(this._setOrigin(i),typeof s.focus=="function"&&s.focus(a))}ngOnDestroy(){this._elementInfo.forEach((n,i)=>this.stopMonitoring(i))}_getDocument(){return this._document||document}_getWindow(){return this._getDocument().defaultView||window}_getFocusOrigin(n){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(n)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:n&&this._isLastInteractionFromInputLabel(n)?"mouse":"program"}_shouldBeAttributedToTouch(n){return this._detectionMode===fe.EVENTUAL||!!n?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(n,i){n.classList.toggle("cdk-focused",!!i),n.classList.toggle("cdk-touch-focused",i==="touch"),n.classList.toggle("cdk-keyboard-focused",i==="keyboard"),n.classList.toggle("cdk-mouse-focused",i==="mouse"),n.classList.toggle("cdk-program-focused",i==="program")}_setOrigin(n,i=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=n,this._originFromTouchInteraction=n==="touch"&&i,this._detectionMode===fe.IMMEDIATE){clearTimeout(this._originTimeoutId);let a=this._originFromTouchInteraction?Mi:1;this._originTimeoutId=setTimeout(()=>this._origin=null,a)}})}_onFocus(n,i){let a=this._elementInfo.get(i),s=tt(n);!a||!a.checkChildren&&i!==s||this._originChanged(i,this._getFocusOrigin(s),a)}_onBlur(n,i){let a=this._elementInfo.get(i);!a||a.checkChildren&&n.relatedTarget instanceof Node&&i.contains(n.relatedTarget)||(this._setClasses(i),this._emitOrigin(a,null))}_emitOrigin(n,i){n.subject.observers.length&&this._ngZone.run(()=>n.subject.next(i))}_registerGlobalListeners(n){if(!this._platform.isBrowser)return;let i=n.rootNode,a=this._rootNodeFocusListenerCount.get(i)||0;a||this._ngZone.runOutsideAngular(()=>{i.addEventListener("focus",this._rootNodeFocusAndBlurListener,de),i.addEventListener("blur",this._rootNodeFocusAndBlurListener,de)}),this._rootNodeFocusListenerCount.set(i,a+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe($t(this._stopInputModalityDetector)).subscribe(s=>{this._setOrigin(s,!0)}))}_removeGlobalListeners(n){let i=n.rootNode;if(this._rootNodeFocusListenerCount.has(i)){let a=this._rootNodeFocusListenerCount.get(i);a>1?this._rootNodeFocusListenerCount.set(i,a-1):(i.removeEventListener("focus",this._rootNodeFocusAndBlurListener,de),i.removeEventListener("blur",this._rootNodeFocusAndBlurListener,de),this._rootNodeFocusListenerCount.delete(i))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(n,i,a){this._setClasses(n,i),this._emitOrigin(a,i),this._lastFocusOrigin=i}_getClosestElementsInfo(n){let i=[];return this._elementInfo.forEach((a,s)=>{(s===n||a.checkChildren&&s.contains(n))&&i.push([s,a])}),i}_isLastInteractionFromInputLabel(n){let{_mostRecentTarget:i,mostRecentModality:a}=this._inputModalityDetector;if(a!=="mouse"||!i||i===n||n.nodeName!=="INPUT"&&n.nodeName!=="TEXTAREA"||n.disabled)return!1;let s=n.labels;if(s){for(let o=0;o<s.length;o++)if(s[o].contains(i))return!0}return!1}};t.\u0275fac=function(i){return new(i||t)(g(B),g(R),g(Qa),g(H,8),g(Ja,8))},t.\u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var dt=function(e){return e[e.NONE=0]="NONE",e[e.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",e[e.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",e}(dt||{}),Ci="cdk-high-contrast-black-on-white",Di="cdk-high-contrast-white-on-black",qe="cdk-high-contrast-active",Ni=(()=>{let t=class t{constructor(n,i){this._platform=n,this._document=i,this._breakpointSubscription=it(Ai).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return dt.NONE;let n=this._document.createElement("div");n.style.backgroundColor="rgb(1,2,3)",n.style.position="absolute",this._document.body.appendChild(n);let i=this._document.defaultView||window,a=i&&i.getComputedStyle?i.getComputedStyle(n):null,s=(a&&a.backgroundColor||"").replace(/ /g,"");switch(n.remove(),s){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return dt.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return dt.BLACK_ON_WHITE}return dt.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let n=this._document.body.classList;n.remove(qe,Ci,Di),this._hasCheckedHighContrastMode=!0;let i=this.getHighContrastMode();i===dt.BLACK_ON_WHITE?n.add(qe,Ci):i===dt.WHITE_ON_BLACK&&n.add(qe,Di)}}};t.\u0275fac=function(i){return new(i||t)(g(R),g(H))},t.\u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var ns=new K("cdk-dir-doc",{providedIn:"root",factory:is});function is(){return it(H)}var rs=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function as(e){let t=e?.toLowerCase()||"";return t==="auto"&&typeof navigator<"u"&&navigator?.language?rs.test(navigator.language)?"rtl":"ltr":t==="rtl"?"rtl":"ltr"}var Bo=(()=>{let t=class t{constructor(n){if(this.value="ltr",this.change=new Vt,n){let i=n.body?n.body.dir:null,a=n.documentElement?n.documentElement.dir:null;this.value=as(i||a||"ltr")}}ngOnDestroy(){this.change.complete()}};t.\u0275fac=function(i){return new(i||t)(g(ns,8))},t.\u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var en=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=j({type:t}),t.\u0275inj=P({});let e=t;return e})();function ss(){return!0}var os=new K("mat-sanity-checks",{providedIn:"root",factory:ss}),Si=(()=>{let t=class t{constructor(n,i,a){this._sanityChecks=i,this._document=a,this._hasDoneGlobalChecks=!1,n._applyBodyHighContrastModeCssClasses(),this._hasDoneGlobalChecks||(this._hasDoneGlobalChecks=!0)}_checkIsEnabled(n){return Ii()?!1:typeof this._sanityChecks=="boolean"?this._sanityChecks:!!this._sanityChecks[n]}};t.\u0275fac=function(i){return new(i||t)(g(Ni),g(os,8),g(H))},t.\u0275mod=j({type:t}),t.\u0275inj=P({imports:[en,en]});let e=t;return e})();var S=function(e){return e[e.FADING_IN=0]="FADING_IN",e[e.VISIBLE=1]="VISIBLE",e[e.FADING_OUT=2]="FADING_OUT",e[e.HIDDEN=3]="HIDDEN",e}(S||{}),nn=class{constructor(t,r,n,i=!1){this._renderer=t,this.element=r,this.config=n,this._animationForciblyDisabledThroughCss=i,this.state=S.HIDDEN}fadeOut(){this._renderer.fadeOutRipple(this)}},Fi=_t({passive:!0,capture:!0}),rn=class{constructor(){this._events=new Map,this._delegateEventHandler=t=>{let r=tt(t);r&&this._events.get(t.type)?.forEach((n,i)=>{(i===r||i.contains(r))&&n.forEach(a=>a.handleEvent(t))})}}addHandler(t,r,n,i){let a=this._events.get(r);if(a){let s=a.get(n);s?s.add(i):a.set(n,new Set([i]))}else this._events.set(r,new Map([[n,new Set([i])]])),t.runOutsideAngular(()=>{document.addEventListener(r,this._delegateEventHandler,Fi)})}removeHandler(t,r,n){let i=this._events.get(t);if(!i)return;let a=i.get(r);a&&(a.delete(n),a.size===0&&i.delete(r),i.size===0&&(this._events.delete(t),document.removeEventListener(t,this._delegateEventHandler,Fi)))}},Ri={enterDuration:225,exitDuration:150},cs=800,Li=_t({passive:!0,capture:!0}),Pi=["mousedown","touchstart"],ji=["mouseup","mouseleave","touchend","touchcancel"],Ut=class Ut{constructor(t,r,n,i){this._target=t,this._ngZone=r,this._platform=i,this._isPointerDown=!1,this._activeRipples=new Map,this._pointerUpEventsRegistered=!1,i.isBrowser&&(this._containerElement=lt(n))}fadeInRipple(t,r,n={}){let i=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),a=T(T({},Ri),n.animation);n.centered&&(t=i.left+i.width/2,r=i.top+i.height/2);let s=n.radius||ls(t,r,i),o=t-i.left,c=r-i.top,u=a.enterDuration,l=document.createElement("div");l.classList.add("mat-ripple-element"),l.style.left=`${o-s}px`,l.style.top=`${c-s}px`,l.style.height=`${s*2}px`,l.style.width=`${s*2}px`,n.color!=null&&(l.style.backgroundColor=n.color),l.style.transitionDuration=`${u}ms`,this._containerElement.appendChild(l);let f=window.getComputedStyle(l),h=f.transitionProperty,p=f.transitionDuration,w=h==="none"||p==="0s"||p==="0s, 0s"||i.width===0&&i.height===0,_=new nn(this,l,n,w);l.style.transform="scale3d(1, 1, 1)",_.state=S.FADING_IN,n.persistent||(this._mostRecentTransientRipple=_);let C=null;return!w&&(u||a.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let O=()=>this._finishRippleTransition(_),k=()=>this._destroyRipple(_);l.addEventListener("transitionend",O),l.addEventListener("transitioncancel",k),C={onTransitionEnd:O,onTransitionCancel:k}}),this._activeRipples.set(_,C),(w||!u)&&this._finishRippleTransition(_),_}fadeOutRipple(t){if(t.state===S.FADING_OUT||t.state===S.HIDDEN)return;let r=t.element,n=T(T({},Ri),t.config.animation);r.style.transitionDuration=`${n.exitDuration}ms`,r.style.opacity="0",t.state=S.FADING_OUT,(t._animationForciblyDisabledThroughCss||!n.exitDuration)&&this._finishRippleTransition(t)}fadeOutAll(){this._getActiveRipples().forEach(t=>t.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(t=>{t.config.persistent||t.fadeOut()})}setupTriggerEvents(t){let r=lt(t);!this._platform.isBrowser||!r||r===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=r,Pi.forEach(n=>{Ut._eventManager.addHandler(this._ngZone,n,r,this)}))}handleEvent(t){t.type==="mousedown"?this._onMousedown(t):t.type==="touchstart"?this._onTouchStart(t):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{ji.forEach(r=>{this._triggerElement.addEventListener(r,this,Li)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(t){t.state===S.FADING_IN?this._startFadeOutTransition(t):t.state===S.FADING_OUT&&this._destroyRipple(t)}_startFadeOutTransition(t){let r=t===this._mostRecentTransientRipple,{persistent:n}=t.config;t.state=S.VISIBLE,!n&&(!r||!this._isPointerDown)&&t.fadeOut()}_destroyRipple(t){let r=this._activeRipples.get(t)??null;this._activeRipples.delete(t),this._activeRipples.size||(this._containerRect=null),t===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),t.state=S.HIDDEN,r!==null&&(t.element.removeEventListener("transitionend",r.onTransitionEnd),t.element.removeEventListener("transitioncancel",r.onTransitionCancel)),t.element.remove()}_onMousedown(t){let r=Je(t),n=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+cs;!this._target.rippleDisabled&&!r&&!n&&(this._isPointerDown=!0,this.fadeInRipple(t.clientX,t.clientY,this._target.rippleConfig))}_onTouchStart(t){if(!this._target.rippleDisabled&&!tn(t)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let r=t.changedTouches;if(r)for(let n=0;n<r.length;n++)this.fadeInRipple(r[n].clientX,r[n].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(t=>{let r=t.state===S.VISIBLE||t.config.terminateOnPointerUp&&t.state===S.FADING_IN;!t.config.persistent&&r&&t.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let t=this._triggerElement;t&&(Pi.forEach(r=>Ut._eventManager.removeHandler(r,t,this)),this._pointerUpEventsRegistered&&(ji.forEach(r=>t.removeEventListener(r,this,Li)),this._pointerUpEventsRegistered=!1))}};Ut._eventManager=new rn;var an=Ut;function ls(e,t,r){let n=Math.max(Math.abs(e-r.left),Math.abs(e-r.right)),i=Math.max(Math.abs(t-r.top),Math.abs(t-r.bottom));return Math.sqrt(n*n+i*i)}var us=new K("mat-ripple-global-options"),xc=(()=>{let t=class t{get disabled(){return this._disabled}set disabled(n){n&&this.fadeOutAllNonPersistent(),this._disabled=n,this._setupTriggerEventsIfEnabled()}get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(n){this._trigger=n,this._setupTriggerEventsIfEnabled()}constructor(n,i,a,s,o){this._elementRef=n,this._animationMode=o,this.radius=0,this._disabled=!1,this._isInitialized=!1,this._globalOptions=s||{},this._rippleRenderer=new an(this,i,n,a)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:T(T(T({},this._globalOptions.animation),this._animationMode==="NoopAnimations"?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(n,i=0,a){return typeof n=="number"?this._rippleRenderer.fadeInRipple(n,i,T(T({},this.rippleConfig),a)):this._rippleRenderer.fadeInRipple(0,0,T(T({},this.rippleConfig),n))}};t.\u0275fac=function(i){return new(i||t)(x(Z),x(B),x(R),x(us,8),x(pe,8))},t.\u0275dir=mt({type:t,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(i,a){i&2&&Yt("mat-ripple-unbounded",a.unbounded)},inputs:{color:[U.None,"matRippleColor","color"],unbounded:[U.None,"matRippleUnbounded","unbounded"],centered:[U.None,"matRippleCentered","centered"],radius:[U.None,"matRippleRadius","radius"],animation:[U.None,"matRippleAnimation","animation"],disabled:[U.None,"matRippleDisabled","disabled"],trigger:[U.None,"matRippleTrigger","trigger"]},exportAs:["matRipple"],standalone:!0});let e=t;return e})(),Ac=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=j({type:t}),t.\u0275inj=P({imports:[Si,Si]});let e=t;return e})(),Tc=(()=>{let t=class t{constructor(n){this._animationMode=n,this.state="unchecked",this.disabled=!1,this.appearance="full"}};t.\u0275fac=function(i){return new(i||t)(x(pe,8))},t.\u0275cmp=xt({type:t,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(i,a){i&2&&Yt("mat-pseudo-checkbox-indeterminate",a.state==="indeterminate")("mat-pseudo-checkbox-checked",a.state==="checked")("mat-pseudo-checkbox-disabled",a.disabled)("mat-pseudo-checkbox-minimal",a.appearance==="minimal")("mat-pseudo-checkbox-full",a.appearance==="full")("_mat-animation-noopable",a._animationMode==="NoopAnimations")},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},standalone:!0,features:[Tt],decls:0,vars:0,template:function(i,a){},styles:['.mat-pseudo-checkbox{border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1),background-color 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:"";border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox._mat-animation-noopable{transition:none !important;animation:none !important}.mat-pseudo-checkbox._mat-animation-noopable::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{left:1px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{left:1px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after,.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after{color:var(--mat-minimal-pseudo-checkbox-selected-checkmark-color)}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after,.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after{color:var(--mat-minimal-pseudo-checkbox-disabled-selected-checkmark-color)}.mat-pseudo-checkbox-full{border-color:var(--mat-full-pseudo-checkbox-unselected-icon-color);border-width:2px;border-style:solid}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled{border-color:var(--mat-full-pseudo-checkbox-disabled-unselected-icon-color)}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate{background-color:var(--mat-full-pseudo-checkbox-selected-icon-color);border-color:rgba(0,0,0,0)}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after{color:var(--mat-full-pseudo-checkbox-selected-checkmark-color)}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled{background-color:var(--mat-full-pseudo-checkbox-disabled-selected-icon-color)}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after{color:var(--mat-full-pseudo-checkbox-disabled-selected-checkmark-color)}.mat-pseudo-checkbox{width:18px;height:18px}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after{width:14px;height:6px;transform-origin:center;top:-4.2426406871px;left:0;bottom:0;right:0;margin:auto}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after{top:8px;width:16px}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after{width:10px;height:4px;transform-origin:center;top:-2.8284271247px;left:0;bottom:0;right:0;margin:auto}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after{top:6px;width:12px}'],encapsulation:2,changeDetection:0});let e=t;return e})();export{Aa as a,Es as b,xs as c,Ss as d,R as e,Bs as f,Ma as g,tt as h,Ii as i,Hs as j,Na as k,Xe as l,Ws as m,lt as n,za as o,Do as p,Oo as q,Bo as r,Si as s,xc as t,Ac as u,Tc as v};
