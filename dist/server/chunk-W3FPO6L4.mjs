import './polyfills.server.mjs';
import{a as b,b as A}from"./chunk-AHJKRO7Z.mjs";import{c as w,d as M}from"./chunk-I4XBTHV6.mjs";import{o as L}from"./chunk-GNX7K4GQ.mjs";import{Cb as s,Kb as l,Lb as E,Ob as F,Pb as x,Qa as p,Z as h,ba as c,hb as f,lb as y,mb as C,nb as g,ob as r,pb as a,qb as m,sc as S}from"./chunk-UFIA264M.mjs";import{h as d,i as u,j as v}from"./chunk-K7YHPIF3.mjs";var D=()=>["/"];function $(t,e){if(t&1&&(r(0,"div",5),m(1,"app-characters-list-item-preview",6),a()),t&2){let i=e.$implicit;p(),f("character",i)}}function j(t,e){t&1&&(r(0,"app-empty-list")(1,"h2"),s(2,"Parece que voc\xEA ainda n\xE3o tem favoritos"),a(),r(3,"p"),s(4,"Volte \xE0 p\xE1gina inicial e escolha os melhores para voc\xEA"),a(),r(5,"button",7),s(6,"Home"),a()()),t&2&&(p(5),f("routerLink",E(1,D)))}var P=(()=>{var e;let i=class i{constructor(){u(this,e,void 0);v(this,e,h(M)),this.favoritesCharacters$=d(this,e).getFavoriteCharacters$()}};e=new WeakMap,i.\u0275fac=function(n){return new(n||i)},i.\u0275cmp=c({type:i,selectors:[["app-characters-favorites-list"]],hostAttrs:[1,"app-characters-favorites-list"],standalone:!0,features:[l],decls:10,vars:3,consts:[[1,"container"],[1,"row","mt-4","mb-4"],[1,"col-6","d-flex","justify-content-start"],[1,"creepster-regular"],[1,"row","g-4"],[1,"col-12","col-sm-6","col-md-4","col-lg-2"],[3,"character"],["type","button",1,"button",3,"routerLink"]],template:function(n,_){n&1&&(r(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1",3),s(4," Favoritos "),a()()(),r(5,"div",4),C(6,$,2,1,"div",5,y,!1,j,7,2,"app-empty-list"),F(9,"async"),a()()),n&2&&(p(6),g(x(9,1,_.favoritesCharacters$)))},dependencies:[S,b,A,w,L],styles:["[_nghost-%COMP%]{display:flex;flex:auto;margin-bottom:200px}"]});let t=i;return t})();var K=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=c({type:e,selectors:[["app-characters-favorites-list-page"]],standalone:!0,features:[l],decls:1,vars:0,template:function(o,n){o&1&&m(0,"app-characters-favorites-list")},dependencies:[P]});let t=e;return t})();export{K as default};