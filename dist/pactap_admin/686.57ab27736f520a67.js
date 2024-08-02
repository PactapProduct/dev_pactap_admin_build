"use strict";(self.webpackChunkpactap_admin=self.webpackChunkpactap_admin||[]).push([[686],{22832:(k,C,u)=>{u.d(C,{P:()=>O,z:()=>I});var g=u(47394);class H extends g.w0{constructor(o,r){super()}schedule(o,r=0){return this}}const v={setInterval(S,o,...r){const{delegate:c}=v;return c?.setInterval?c.setInterval(S,o,...r):setInterval(S,o,...r)},clearInterval(S){const{delegate:o}=v;return(o?.clearInterval||clearInterval)(S)},delegate:void 0};var D=u(49039),W=u(84552);class p{constructor(o,r=p.now){this.schedulerActionCtor=o,this.now=r}schedule(o,r=0,c){return new this.schedulerActionCtor(this,o).schedule(c,r)}}p.now=W.l.now;const I=new class P extends p{constructor(o,r=p.now){super(o,r),this.actions=[],this._active=!1}flush(o){const{actions:r}=this;if(this._active)return void r.push(o);let c;this._active=!0;do{if(c=o.execute(o.state,o.delay))break}while(o=r.shift());if(this._active=!1,c){for(;o=r.shift();)o.unsubscribe();throw c}}}(class E extends H{constructor(o,r){super(o,r),this.scheduler=o,this.work=r,this.pending=!1}schedule(o,r=0){var c;if(this.closed)return this;this.state=o;const y=this.id,w=this.scheduler;return null!=y&&(this.id=this.recycleAsyncId(w,y,r)),this.pending=!0,this.delay=r,this.id=null!==(c=this.id)&&void 0!==c?c:this.requestAsyncId(w,this.id,r),this}requestAsyncId(o,r,c=0){return v.setInterval(o.flush.bind(o,this),c)}recycleAsyncId(o,r,c=0){if(null!=c&&this.delay===c&&!1===this.pending)return r;null!=r&&v.clearInterval(r)}execute(o,r){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const c=this._execute(o,r);if(c)return c;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(o,r){let y,c=!1;try{this.work(o)}catch(w){c=!0,y=w||new Error("Scheduled action threw falsy error")}if(c)return this.unsubscribe(),y}unsubscribe(){if(!this.closed){const{id:o,scheduler:r}=this,{actions:c}=r;this.work=this.state=this.scheduler=null,this.pending=!1,(0,D.P)(c,this),null!=o&&(this.id=this.recycleAsyncId(r,o,null)),this.delay=null,super.unsubscribe()}}}),O=I},64686:(k,C,u)=>{u.d(C,{Ry:()=>Dt,Rq:()=>It});var g=u(99468),H=u(22096),v=u(54829),D=u(65592),E=u(21631),W=u(64266),p=u(84674),P=u(97400);const I=["addListener","removeListener"],O=["addEventListener","removeEventListener"],S=["on","off"];function o(t,e,n,i){if((0,p.m)(n)&&(i=n,n=void 0),i)return o(t,e,n).pipe((0,P.Z)(i));const[l,s]=function w(t){return(0,p.m)(t.addEventListener)&&(0,p.m)(t.removeEventListener)}(t)?O.map(a=>f=>t[a](e,f,n)):function c(t){return(0,p.m)(t.addListener)&&(0,p.m)(t.removeListener)}(t)?I.map(r(t,e)):function y(t){return(0,p.m)(t.on)&&(0,p.m)(t.off)}(t)?S.map(r(t,e)):[];if(!l&&(0,W.z)(t))return(0,E.z)(a=>o(a,e,n))((0,v.Xf)(t));if(!l)throw new TypeError("Invalid event target");return new D.y(a=>{const f=(...d)=>a.next(1<d.length?d:d[0]);return l(f),()=>s(f)})}function r(t,e){return n=>i=>t[n](e,i)}var M=u(37398),N=u(99397),B=u(32181),R=u(22832),X=u(79360),U=u(8251),J=u(50671);function $(t,e=R.z,n){const i=function Z(t=0,e,n=R.P){let i=-1;return null!=e&&((0,J.K)(e)?n=e:i=e),new D.y(l=>{let s=function Q(t){return t instanceof Date&&!isNaN(t)}(t)?+t-n.now():t;s<0&&(s=0);let a=0;return n.schedule(function(){l.closed||(l.next(a++),0<=i?this.schedule(void 0,i):l.complete())},s)})}(t,e);return function G(t,e){return(0,X.e)((n,i)=>{const{leading:l=!0,trailing:s=!1}=e??{};let a=!1,f=null,d=null,h=!1;const m=()=>{d?.unsubscribe(),d=null,s&&(j(),h&&i.complete())},A=()=>{d=null,h&&i.complete()},V=T=>d=(0,v.Xf)(t(T)).subscribe((0,U.x)(i,m,A)),j=()=>{if(a){a=!1;const T=f;f=null,i.next(T),!h&&V(T)}};n.subscribe((0,U.x)(i,T=>{a=!0,f=T,(!d||d.closed)&&(l?j():V(T))},()=>{h=!0,(!(s&&a&&d)||d.closed)&&i.complete()}))})}(()=>i,n)}function q(t,e,n,i){const l=window&&!!window.document&&window.document.documentElement;let s=l&&e?window:n;if(t&&(s=t&&l&&"string"==typeof t?function _(t,e,n){return(n?window.document:e).querySelector(t)}(t,n.nativeElement,i):t,!s))throw new Error("ngx-infinite-scroll {resolveContainerElement()}: selector for");return s}function x(t){return t&&!t.firstChange}const et={clientHeight:"clientHeight",offsetHeight:"offsetHeight",scrollHeight:"scrollHeight",pageYOffset:"pageYOffset",offsetTop:"offsetTop",scrollTop:"scrollTop",top:"top"},nt={clientHeight:"clientWidth",offsetHeight:"offsetWidth",scrollHeight:"scrollWidth",pageYOffset:"pageXOffset",offsetTop:"offsetLeft",scrollTop:"scrollLeft",top:"left"};class it{constructor(e=!0){this.vertical=e,this.propsMap=e?et:nt}clientHeightKey(){return this.propsMap.clientHeight}offsetHeightKey(){return this.propsMap.offsetHeight}scrollHeightKey(){return this.propsMap.scrollHeight}pageYOffsetKey(){return this.propsMap.pageYOffset}offsetTopKey(){return this.propsMap.offsetTop}scrollTopKey(){return this.propsMap.scrollTop}topKey(){return this.propsMap.top}}function st(t){return["Window","global"].some(n=>Object.prototype.toString.call(t).includes(n))}function K(t,e){return t?e.document.documentElement:null}function z(t,e){const n=function ut({container:t,isWindow:e,axis:n}){const{offsetHeightKey:i,clientHeightKey:l}=F(n);return L(t,e,i,l)}(e);return e.isWindow?function ct(t,e,n){const{axis:i,container:l,isWindow:s}=n,{offsetHeightKey:a,clientHeightKey:f}=F(i),d=t+Y(K(s,l),i,s),h=L(e.nativeElement,s,a,f),m=function dt(t,e,n){const i=e.topKey();if(t.getBoundingClientRect)return t.getBoundingClientRect()[i]+Y(t,e,n)}(e.nativeElement,i,s)+h;return{height:t,scrolled:d,totalToScroll:m,isWindow:s}}(n,t,e):function at(t,e,n){const{axis:i,container:l}=n;return{height:t,scrolled:l[i.scrollTopKey()],totalToScroll:l[i.scrollHeightKey()],isWindow:!1}}(n,0,e)}function F(t){return{offsetHeightKey:t.offsetHeightKey(),clientHeightKey:t.clientHeightKey()}}function L(t,e,n,i){if(isNaN(t[n])){const l=K(e,t);return l?l[i]:0}return t[n]}function Y(t,e,n){const i=e.pageYOffsetKey(),l=e.scrollTopKey(),s=e.offsetTopKey();return isNaN(window.pageYOffset)?K(n,t)[l]:t.ownerDocument?t.ownerDocument.defaultView[i]:t[s]}function ft(t,e={down:0,up:0},n){let i,l;if(t.totalToScroll<=0)return!1;const s=t.isWindow?t.scrolled:t.height+t.scrolled;return n?(i=(t.totalToScroll-s)/t.totalToScroll,l=(e?.down?e.down:0)/10):(i=t.scrolled/(t.scrolled+(t.totalToScroll-s)),l=(e?.up?e.up:0)/10),i<=l}class vt{constructor(e){this.lastScrollPosition=0,this.lastTotalToScroll=0,this.totalToScroll=0,this.triggered={down:0,up:0},Object.assign(this,e)}updateScrollPosition(e){return this.lastScrollPosition=e}updateTotalToScroll(e){this.lastTotalToScroll!==e&&(this.lastTotalToScroll=this.totalToScroll,this.totalToScroll=e)}updateScroll(e,n){this.updateScrollPosition(e),this.updateTotalToScroll(n)}updateTriggeredFlag(e,n){n?this.triggered.down=e:this.triggered.up=e}isTriggeredScroll(e,n){return n?this.triggered.down===e:this.triggered.up===e}}function yt(t){const{scrollContainer:e,scrollWindow:n,element:i,fromRoot:l}=t,s=function lt({windowElement:t,axis:e}){return function rt(t,e){const n=t.isWindow||e&&!e.nativeElement?e:e.nativeElement;return{...t,container:n}}({axis:e,isWindow:st(t)},t)}({axis:new it(!t.horizontal),windowElement:q(e,n,i,l)}),a=new vt({totalToScroll:z(i,s).totalToScroll}),d={up:t.upDistance,down:t.downDistance};return function wt(t){let e=o(t.container,"scroll");return t.throttle&&(e=e.pipe($(t.throttle,void 0,{leading:!0,trailing:!0}))),e}({container:s.container,throttle:t.throttle}).pipe((0,E.z)(()=>(0,H.of)(z(i,s))),(0,M.U)(h=>function mt(t,e,n){const{scrollDown:i,fire:l}=function pt(t,e,n){const i=function ht(t,e){return t<e.scrolled}(t,e);return{fire:ft(e,n,i),scrollDown:i}}(t,e,n);return{scrollDown:i,fire:l,stats:e}}(a.lastScrollPosition,h,d)),(0,N.b)(({stats:h})=>a.updateScroll(h.scrolled,h.totalToScroll)),(0,B.h)(({fire:h,scrollDown:m,stats:{totalToScroll:A}})=>function ot(t,e,n){return!!(t&&e||!n&&e)}(t.alwaysCallback,h,a.isTriggeredScroll(A,m))),(0,N.b)(({scrollDown:h,stats:{totalToScroll:m}})=>{a.updateTriggeredFlag(m,h)}),(0,M.U)(Tt))}const b={DOWN:"[NGX_ISE] DOWN",UP:"[NGX_ISE] UP"};function Tt(t){const{scrollDown:e,stats:{scrolled:n}}=t;return{type:e?b.DOWN:b.UP,payload:{currentScrollPosition:n}}}let Dt=(()=>{class t{constructor(n,i){this.element=n,this.zone=i,this.scrolled=new g.vpe,this.scrolledUp=new g.vpe,this.infiniteScrollDistance=2,this.infiniteScrollUpDistance=1.5,this.infiniteScrollThrottle=150,this.infiniteScrollDisabled=!1,this.infiniteScrollContainer=null,this.scrollWindow=!0,this.immediateCheck=!1,this.horizontal=!1,this.alwaysCallback=!1,this.fromRoot=!1}ngAfterViewInit(){this.infiniteScrollDisabled||this.setup()}ngOnChanges({infiniteScrollContainer:n,infiniteScrollDisabled:i,infiniteScrollDistance:l}){const s=x(n),a=x(i),f=x(l),d=!a&&!this.infiniteScrollDisabled||a&&!i.currentValue||f;(s||a||f)&&(this.destroyScroller(),d&&this.setup())}setup(){(function tt(){return typeof window<"u"})()&&this.zone.runOutsideAngular(()=>{this.disposeScroller=yt({fromRoot:this.fromRoot,alwaysCallback:this.alwaysCallback,disable:this.infiniteScrollDisabled,downDistance:this.infiniteScrollDistance,element:this.element,horizontal:this.horizontal,scrollContainer:this.infiniteScrollContainer,scrollWindow:this.scrollWindow,throttle:this.infiniteScrollThrottle,upDistance:this.infiniteScrollUpDistance}).subscribe(n=>this.handleOnScroll(n))})}handleOnScroll({type:n,payload:i}){const l=n===b.DOWN?this.scrolled:this.scrolledUp;(function Et(t){return t.observed??t.observers.length>0})(l)&&this.zone.run(()=>l.emit(i))}ngOnDestroy(){this.destroyScroller()}destroyScroller(){this.disposeScroller&&this.disposeScroller.unsubscribe()}static#t=this.\u0275fac=function(i){return new(i||t)(g.Y36(g.SBq),g.Y36(g.R0b))};static#e=this.\u0275dir=g.lG2({type:t,selectors:[["","infiniteScroll",""],["","infinite-scroll",""],["","data-infinite-scroll",""]],inputs:{infiniteScrollDistance:"infiniteScrollDistance",infiniteScrollUpDistance:"infiniteScrollUpDistance",infiniteScrollThrottle:"infiniteScrollThrottle",infiniteScrollDisabled:"infiniteScrollDisabled",infiniteScrollContainer:"infiniteScrollContainer",scrollWindow:"scrollWindow",immediateCheck:"immediateCheck",horizontal:"horizontal",alwaysCallback:"alwaysCallback",fromRoot:"fromRoot"},outputs:{scrolled:"scrolled",scrolledUp:"scrolledUp"},features:[g.TTD]})}return t})(),It=(()=>{class t{static#t=this.\u0275fac=function(i){return new(i||t)};static#e=this.\u0275mod=g.oAB({type:t});static#n=this.\u0275inj=g.cJS({})}return t})()}}]);