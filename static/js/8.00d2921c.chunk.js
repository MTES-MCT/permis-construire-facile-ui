(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{630:function(n,t,e){"use strict";e.r(t);var i=[{id:"jean.martin",email:"jean.martin@monfai.fr",firstName:"Jean",lastName:"Martin",profil:"depositaire"},{id:"jacques.dupont",email:"jacques.dupont@monfai.fr",firstName:"Jacques",lastName:"Dupont",profil:"instructeur"}],o=null,u=100;var r=[{id:"0",type:"dp",date:"01/01/2019",etat:"instruction"},{id:"1",type:"pcmi",date:"01/07/2019",etat:"incomplet"}];var s={auth:{login:function(n){return new Promise(function(t,e){setTimeout(function(){return n?t(o=i.find(function(t){return t.id===n})):e(new Error("Connexion impossible. User id inconnu."))},u)})},isAuthenticated:function(){return new Promise(function(n,t){setTimeout(function(){return n(null!==o)},u)})},logout:function(){return new Promise(function(n,t){setTimeout(function(){n(o=null)},u)})},getUser:function(){return new Promise(function(n,t){setTimeout(function(){return o?n(o):t(new Error("Pas d'utilisateur connect\xe9"))},u)})},isDepositaire:function(){return new Promise(function(n,t){setTimeout(function(){return n("jean.martin"===o.id)},u)})},isInstructeur:function(){return new Promise(function(n,t){setTimeout(function(){return n("jacques.dupont"===o.id)},u)})}},depots:{mesDepots:function(){return new Promise(function(n,t){setTimeout(function(){return n({depots:r,page:0,totalCount:1})},u)})},monDepot:function(n){return new Promise(function(t,e){setTimeout(function(){return t(r.find(function(t){return t.id===n}))},u)})},savePieceJointe:function(n,t,e){return new Promise(function(i,o){setTimeout(function(){return i(sessionStorage.setItem(n,JSON.stringify({nom:t.name,type:t.type,size:t.size,data:e})))},u)})},loadPieceJointe:function(n){return new Promise(function(t,e){setTimeout(function(){return t(JSON.parse(sessionStorage.getItem(n)))},u)})}}};t.default=s}}]);
//# sourceMappingURL=8.00d2921c.chunk.js.map