(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"0/6H":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("A36C"),i=n("iWo5"),s=n("qULd");const o=(e,t)=>{let n,o;const a=(e,r,i)=>{if("undefined"==typeof document)return;const s=document.elementFromPoint(e,r);s&&t(s)?s!==n&&(l(),c(s,i)):l()},c=(e,t)=>{n=e,o||(o=n);const i=n;Object(r.f)(()=>i.classList.add("ion-activated")),t()},l=(e=!1)=>{if(!n)return;const t=n;Object(r.f)(()=>t.classList.remove("ion-activated")),e&&o!==n&&n.click(),n=void 0};return Object(i.createGesture)({el:e,gestureName:"buttonActiveDrag",threshold:0,onStart:e=>a(e.currentX,e.currentY,s.a),onMove:e=>a(e.currentX,e.currentY,s.b),onEnd:()=>{l(!0),Object(s.e)(),o=void 0}})}},"74mu":function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return r})),n.d(t,"d",(function(){return a}));const r=(e,t)=>null!==t.closest(e),i=(e,t)=>"string"==typeof e&&e.length>0?Object.assign({"ion-color":!0,["ion-color-"+e]:!0},t):t,s=e=>{const t={};return(e=>void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter(e=>null!=e).map(e=>e.trim()).filter(e=>""!==e):[])(e).forEach(e=>t[e]=!0),t},o=/^[a-z][a-z0-9+\-.]*:/,a=async(e,t,n,r)=>{if(null!=e&&"#"!==e[0]&&!o.test(e)){const i=document.querySelector("ion-router");if(i)return null!=t&&t.preventDefault(),i.push(e,n,r)}return!1}},Qe3P:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));class r{constructor(e,t,n,r,i){this.id=e,this.title=t,this.description=n,this.imageUrl=r,this.price=i}}var i=n("fXoL");let s=(()=>{class e{constructor(){this._places=[new r("p1","One Forty West - Frankfurt am Main","Auf der Senckenberganlage wird der 145 Meter hohe \u201eOne Forty West\u201c errichtet. W\xe4hrend in die unteren 23 Geschosse ein Viersternehotel einziehen wird, sind die restlichen der 41 Obergeschosse f\xfcr Wohnungen vorgesehen. Diese wollen mit hochwertiger Ausstattung, Concierge-Service rund um die Uhr und Extras wie ein Hundewaschplatz \xfcberzeugen. G\xfcnstig werden die Wohnungen nicht sein, der Quadratmeterpreis beginnt bei 13.000 Euro.","https://www.engelvoelkers.com/images/bc97077b-10f2-46d7-9cd3-78fb23a6e5c1/enjoying-the-high-life-in-a-high-rise",1745e3),new r("p2","FOUR - Frankfurt am Main","Gleich vier Hochh\xe4user entstehen auf dem einstigen Areal der Deutschen Bank im Zentrum von Frankfurt. Ein lebendiges Quartier soll hier errichtet werden, in den H\xe4usern sollen nicht nur B\xfcros entstehen, sondern auch \xfcber 600 Wohnungen, ein Hotel, eine Kindertagesst\xe4tte sowie Gastronomie und Gesch\xe4fte. Ein \xf6ffentlicher Garten in 25 Meter H\xf6he auf dem Sockel der Geb\xe4ude soll k\xfcnftig Menschen zu einer Auszeit im Gr\xfcnen einladen. Der h\xf6chste Turm des Ensembles wird 228 Meter in die H\xf6he ragen und vor allem B\xfcros beherbergen. Er wird damit zu den h\xf6chsten B\xfcrogeb\xe4uden in Deutschland geh\xf6ren. Die zwei Wohnt\xfcrme werden jeweils 173 und 120 Meter hoch werden und etwa 600 Wohnungen bieten. Der kleinste Turm wird immerhin 100 Meter hoch und ebenfalls B\xfcros beherbergen. Baubeginn war 2018, die Fertigstellung ist f\xfcr 2023 geplant.","https://www.4frankfurt.de/assets/img/pages/living/gallery/img-living-slider-4--1366.jpg",1845e3),new r("p3","EDEN - Frankfurt am Main","One of the city's most spectacular, modern residential towers is growing in the middle of the up-and-coming Europaviertel. The spacious 2-bedroom apartment on the 17th floor opens a fantastic view over the roofs of the Europaviertel to the Taunus. Floor-deep panorama windows create a light-flooded feeling of space. On 63 square metres, a high-quality and elegant living culture of the extra class unfolds. The surrounding terrace is the ideal retreat in the dynamic city life the green, vertical garden pays homage to peace and relaxation.","https://www.neubaukompass.de/bilder/objekt/17671/196416-gross.jpg",772500)]}get places(){return[...this._places]}getPlace(e){return Object.assign({},this._places.find(t=>t.id===e))}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=i.Db({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},ZaV5:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i}));const r=async(e,t,n,r,i)=>{if(e)return e.attachViewToDom(t,n,i,r);if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");const s="string"==typeof n?t.ownerDocument&&t.ownerDocument.createElement(n):n;return r&&r.forEach(e=>s.classList.add(e)),i&&Object.assign(s,i),t.appendChild(s),s.componentOnReady&&await s.componentOnReady(),s},i=(e,t)=>{if(t){if(e)return e.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()}},h3R7:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r={bubbles:{dur:1e3,circles:9,fn:(e,t,n)=>{const r=e*t/n-e+"ms",i=2*Math.PI*t/n;return{r:5,style:{top:9*Math.sin(i)+"px",left:9*Math.cos(i)+"px","animation-delay":r}}}},circles:{dur:1e3,circles:8,fn:(e,t,n)=>{const r=t/n,i=e*r-e+"ms",s=2*Math.PI*r;return{r:5,style:{top:9*Math.sin(s)+"px",left:9*Math.cos(s)+"px","animation-delay":i}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(e,t)=>({r:6,style:{left:9-9*t+"px","animation-delay":-110*t+"ms"}})},lines:{dur:1e3,lines:12,fn:(e,t,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*t+(t<6?180:-180)}deg)`,"animation-delay":e*t/n-e+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(e,t,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*t+(t<6?180:-180)}deg)`,"animation-delay":e*t/n-e+"ms"}})}}},qULd:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return c})),n.d(t,"e",(function(){return a}));const r={getEngine(){const e=window;return e.TapticEngine||e.Capacitor&&e.Capacitor.isPluginAvailable("Haptics")&&e.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(e){const t=this.getEngine();if(!t)return;const n=this.isCapacitor()?e.style.toUpperCase():e.style;t.impact({style:n})},notification(e){const t=this.getEngine();if(!t)return;const n=this.isCapacitor()?e.style.toUpperCase():e.style;t.notification({style:n})},selection(){this.impact({style:"light"})},selectionStart(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionStart():e.gestureSelectionStart())},selectionChanged(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionChanged():e.gestureSelectionChanged())},selectionEnd(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionEnd():e.gestureSelectionEnd())}},i=()=>{r.selection()},s=()=>{r.selectionStart()},o=()=>{r.selectionChanged()},a=()=>{r.selectionEnd()},c=e=>{r.impact(e)}}}]);