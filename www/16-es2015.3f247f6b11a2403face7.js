(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"wfl+":function(e,i,t){"use strict";t.r(i),t.d(i,"DiscoverPageModule",(function(){return J}));var n=t("ofXK"),o=t("3Pt+"),c=t("TEn/"),b=t("tyNb"),r=t("fXoL"),l=t("Qe3P"),s=t("/+Rg");const a=function(e){return["/","places","tabs","discover",e]};function d(e,i){if(1&e&&(r.Kb(0,"ion-item",4),r.Kb(1,"ion-thumbnail",5),r.Ib(2,"ion-img",1),r.Jb(),r.Kb(3,"ion-label"),r.Kb(4,"h2"),r.dc(5),r.Jb(),r.Kb(6,"p"),r.dc(7),r.Jb(),r.Jb(),r.Jb()),2&e){const e=i.$implicit;r.Xb("routerLink",r.Yb(4,a,e.id)),r.xb(2),r.Xb("src",e.imageUrl),r.xb(3),r.ec(e.title),r.xb(2),r.fc("",e.description,"<")}}const u=[{path:"",component:(()=>{class e{constructor(e,i){this.placesService=e,this.uniqueDeviceID=i}ngOnInit(){this.loadedPlaces=this.placesService.places,this.getUniqueDeviceID()}getUniqueDeviceID(){this.uniqueDeviceID.get().then(e=>{console.log(e),this.id=e}).catch(e=>{console.log(e),this.id="Error! ${error}"})}}return e.\u0275fac=function(i){return new(i||e)(r.Hb(l.a),r.Hb(s.a))},e.\u0275cmp=r.Bb({type:e,selectors:[["app-discover"]],decls:29,vars:11,consts:[["size","12","size-sm","6","offset-sm","3","text-center",""],[3,"src"],["fill","clear","color","primary",3,"routerLink"],["detail","",3,"routerLink",4,"ngFor","ngForOf"],["detail","",3,"routerLink"],["slot","start"]],template:function(e,i){1&e&&(r.Kb(0,"ion-header"),r.Kb(1,"ion-toolbar"),r.Kb(2,"ion-title"),r.dc(3,"CONNECT WITH THE TERMINAL"),r.Jb(),r.Kb(4,"ion-label"),r.Kb(5,"h1"),r.dc(6),r.Jb(),r.Jb(),r.Jb(),r.Jb(),r.Kb(7,"ion-content"),r.Kb(8,"ion-grid"),r.Kb(9,"ion-row"),r.Kb(10,"ion-col",0),r.Kb(11,"ion-card"),r.Kb(12,"ion-card-header"),r.Kb(13,"ion-card-title"),r.dc(14),r.Jb(),r.Kb(15,"ion-card-subtitle"),r.dc(16),r.Tb(17,"currency"),r.Jb(),r.Jb(),r.Ib(18,"ion-img",1),r.Kb(19,"ion-card-content"),r.Kb(20,"p"),r.dc(21),r.Jb(),r.Jb(),r.Ib(22,"div"),r.Kb(23,"ion-button",2),r.dc(24," More "),r.Jb(),r.Jb(),r.Jb(),r.Jb(),r.Kb(25,"ion-row"),r.Kb(26,"ion-col",0),r.Kb(27,"ion-list"),r.cc(28,d,8,6,"ion-item",3),r.Jb(),r.Jb(),r.Jb(),r.Jb(),r.Jb()),2&e&&(r.xb(6),r.ec(i.id),r.xb(8),r.ec(i.loadedPlaces[0].title),r.xb(2),r.ec(r.Ub(17,7,i.loadedPlaces[0].price)),r.xb(2),r.Xb("src",i.loadedPlaces[0].imageUrl),r.xb(3),r.ec(i.loadedPlaces[0].description),r.xb(2),r.Xb("routerLink",r.Yb(9,a,i.loadedPlaces[0].id)),r.xb(5),r.Xb("ngForOf",i.loadedPlaces.slice(1)))},directives:[c.n,c.A,c.z,c.r,c.l,c.m,c.u,c.k,c.f,c.h,c.j,c.i,c.p,c.g,c.d,c.F,b.h,c.s,n.i,c.q,c.y],pipes:[n.c],styles:[""]}),e})()},{path:"place-detail",loadChildren:()=>t.e(2).then(t.bind(null,"g1t5")).then(e=>e.PlaceDetailPageModule)}];let p=(()=>{class e{}return e.\u0275mod=r.Fb({type:e}),e.\u0275inj=r.Eb({factory:function(i){return new(i||e)},imports:[[b.i.forChild(u)],b.i]}),e})(),J=(()=>{class e{}return e.\u0275mod=r.Fb({type:e}),e.\u0275inj=r.Eb({factory:function(i){return new(i||e)},imports:[[n.b,o.a,c.B,p]]}),e})()}}]);