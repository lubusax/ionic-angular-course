!function(){function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var i=0;i<n.length;i++){var t=n[i];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"wfl+":function(i,t,c){"use strict";c.r(t),c.d(t,"DiscoverPageModule",(function(){return v}));var o=c("ofXK"),r=c("3Pt+"),b=c("TEn/"),a=c("tyNb"),l=c("fXoL"),s=c("Qe3P"),u=c("OKlR"),d=function(e){return["/","places","tabs","discover",e]};function f(e,n){if(1&e&&(l.Kb(0,"ion-item",4),l.Kb(1,"ion-thumbnail",5),l.Ib(2,"ion-img",1),l.Jb(),l.Kb(3,"ion-label"),l.Kb(4,"h2"),l.dc(5),l.Jb(),l.Kb(6,"p"),l.dc(7),l.Jb(),l.Jb(),l.Jb()),2&e){var i=n.$implicit;l.Xb("routerLink",l.Yb(4,d,i.id)),l.xb(2),l.Xb("src",i.imageUrl),l.xb(3),l.ec(i.title),l.xb(2),l.fc("",i.description,"<")}}var p,h,J,K=[{path:"",component:(p=function(){function i(n,t,c){e(this,i),this.placesService=n,this.nfc=t,this.ndef=c}var t,c,o;return t=i,(c=[{key:"nfcSuccess",value:function(){console.log("nfc Success"),this.nfcStatus="nfc Success"}},{key:"nfcFailure",value:function(){console.log("nfc Failure"),this.nfcStatus="nfc Failure"}},{key:"ngOnInit",value:function(){var e=this;this.loadedPlaces=this.placesService.places,this.nfc.enabled().then((function(){return e.nfcSuccess()}),(function(){return e.nfcFailure()}))}}])&&n(t.prototype,c),o&&n(t,o),i}(),p.\u0275fac=function(e){return new(e||p)(l.Hb(s.a),l.Hb(u.a),l.Hb(u.b))},p.\u0275cmp=l.Bb({type:p,selectors:[["app-discover"]],decls:29,vars:11,consts:[["size","12","size-sm","6","offset-sm","3","text-center",""],[3,"src"],["fill","clear","color","primary",3,"routerLink"],["detail","",3,"routerLink",4,"ngFor","ngForOf"],["detail","",3,"routerLink"],["slot","start"]],template:function(e,n){1&e&&(l.Kb(0,"ion-header"),l.Kb(1,"ion-toolbar"),l.Kb(2,"ion-title"),l.dc(3,"CONNECT WITH THE TERMINAL"),l.Jb(),l.Kb(4,"ion-label"),l.Kb(5,"h1"),l.dc(6),l.Jb(),l.Jb(),l.Jb(),l.Jb(),l.Kb(7,"ion-content"),l.Kb(8,"ion-grid"),l.Kb(9,"ion-row"),l.Kb(10,"ion-col",0),l.Kb(11,"ion-card"),l.Kb(12,"ion-card-header"),l.Kb(13,"ion-card-title"),l.dc(14),l.Jb(),l.Kb(15,"ion-card-subtitle"),l.dc(16),l.Tb(17,"currency"),l.Jb(),l.Jb(),l.Ib(18,"ion-img",1),l.Kb(19,"ion-card-content"),l.Kb(20,"p"),l.dc(21),l.Jb(),l.Jb(),l.Ib(22,"div"),l.Kb(23,"ion-button",2),l.dc(24," More "),l.Jb(),l.Jb(),l.Jb(),l.Jb(),l.Kb(25,"ion-row"),l.Kb(26,"ion-col",0),l.Kb(27,"ion-list"),l.cc(28,f,8,6,"ion-item",3),l.Jb(),l.Jb(),l.Jb(),l.Jb(),l.Jb()),2&e&&(l.xb(6),l.ec(n.nfcStatus),l.xb(8),l.ec(n.loadedPlaces[0].title),l.xb(2),l.ec(l.Ub(17,7,n.loadedPlaces[0].price)),l.xb(2),l.Xb("src",n.loadedPlaces[0].imageUrl),l.xb(3),l.ec(n.loadedPlaces[0].description),l.xb(2),l.Xb("routerLink",l.Yb(9,d,n.loadedPlaces[0].id)),l.xb(5),l.Xb("ngForOf",n.loadedPlaces.slice(1)))},directives:[b.n,b.A,b.z,b.r,b.l,b.m,b.u,b.k,b.f,b.h,b.j,b.i,b.p,b.g,b.d,b.F,a.h,b.s,o.i,b.q,b.y],pipes:[o.c],styles:[""]}),p)},{path:"place-detail",loadChildren:function(){return c.e(2).then(c.bind(null,"g1t5")).then((function(e){return e.PlaceDetailPageModule}))}}],m=((J=function n(){e(this,n)}).\u0275mod=l.Fb({type:J}),J.\u0275inj=l.Eb({factory:function(e){return new(e||J)},imports:[[a.i.forChild(K)],a.i]}),J),v=((h=function n(){e(this,n)}).\u0275mod=l.Fb({type:h}),h.\u0275inj=l.Eb({factory:function(e){return new(e||h)},imports:[[o.b,r.a,b.B,m]]}),h)}}])}();