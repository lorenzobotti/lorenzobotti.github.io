var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function l(n,e,o){n.$$.on_destroy.push(function(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}(e,o))}function s(t,n,e,o){if(t){const r=u(t,n,e,o);return t[0](r)}}function u(t,n,e,o){return t[1]&&o?function(t,n){for(const e in n)t[e]=n[e];return t}(e.ctx.slice(),t[1](o(n))):e.ctx}function i(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}function f(t,n,e,o,r,c){if(r){const l=u(n,e,o,c);t.p(l,r)}}function a(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let t=0;t<e;t++)n[t]=-1;return n}return-1}function d(t,n){t.appendChild(n)}function p(t,n,e){t.insertBefore(n,e||null)}function $(t){t.parentNode.removeChild(t)}function g(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function m(t){return document.createElement(t)}function h(t){return document.createTextNode(t)}function y(){return h(" ")}function b(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function v(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function x(t,n){for(let e=0;e<t.options.length;e+=1){const o=t.options[e];if(o.__value===n)return void(o.selected=!0)}t.selectedIndex=-1}function _(t,n,e){t.classList[e?"add":"remove"](n)}let w;function k(t){w=t}const F=[],E=[],S=[],C=[],D=Promise.resolve();let N=!1;function O(t){S.push(t)}let j=!1;const A=new Set;function B(){if(!j){j=!0;do{for(let t=0;t<F.length;t+=1){const n=F[t];k(n),I(n.$$)}for(k(null),F.length=0;E.length;)E.pop()();for(let t=0;t<S.length;t+=1){const n=S[t];A.has(n)||(A.add(n),n())}S.length=0}while(F.length);for(;C.length;)C.pop()();N=!1,j=!1,A.clear()}}function I(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(O)}}const L=new Set;let M;function q(){M={r:0,c:[],p:M}}function z(){M.r||o(M.c),M=M.p}function J(t,n){t&&t.i&&(L.delete(t),t.i(n))}function T(t,n,e,o){if(t&&t.o){if(L.has(t))return;L.add(t),M.c.push((()=>{L.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function P(t){t&&t.c()}function G(t,e,c,l){const{fragment:s,on_mount:u,on_destroy:i,after_update:f}=t.$$;s&&s.m(e,c),l||O((()=>{const e=u.map(n).filter(r);i?i.push(...e):o(e),t.$$.on_mount=[]})),f.forEach(O)}function H(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function K(t,n){-1===t.$$.dirty[0]&&(F.push(t),N||(N=!0,D.then(B)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Q(n,r,c,l,s,u,i,f=[-1]){const a=w;k(n);const d=n.$$={fragment:null,ctx:null,props:u,update:t,not_equal:s,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(a?a.$$.context:[])),callbacks:e(),dirty:f,skip_bound:!1,root:r.target||a.$$.root};i&&i(d.root);let p=!1;if(d.ctx=c?c(n,r.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return d.ctx&&s(d.ctx[t],d.ctx[t]=r)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](r),p&&K(n,t)),e})):[],d.update(),p=!0,o(d.before_update),d.fragment=!!l&&l(d.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);d.fragment&&d.fragment.l(t),t.forEach($)}else d.fragment&&d.fragment.c();r.intro&&J(n.$$.fragment),G(n,r.target,r.anchor,r.customElement),B()}k(a)}class R{$destroy(){H(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const U=["sad","somwehat sad","neutral","happy"],V=["#D65DB1","#FF6F91","#FF9671","#FFC75F","#F9F871"];function W(t){switch(t){case"sad":return V[0];case"somwehat sad":return V[1];case"neutral":return V[2];case"happy":return V[3]}}function X(t){return`${t.getDate()}/${t.getMonth()+1}`}const Y=t=>({}),Z=t=>({});function tt(t){let n;const e=t[9]["custom-tip"],o=s(e,t,t[8],Z);return{c(){o&&o.c()},m(t,e){o&&o.m(t,e),n=!0},p(t,r){o&&o.p&&(!n||256&r)&&f(o,e,t,t[8],n?i(e,t[8],r,Y):a(t[8]),Z)},i(t){n||(J(o,t),n=!0)},o(t){T(o,t),n=!1},d(t){o&&o.d(t)}}}function nt(n){let e,o;return{c(){e=m("div"),o=h(n[0]),v(e,"class","default-tip svelte-tfs2ro"),v(e,"style",n[6])},m(t,n){p(t,e,n),d(e,o)},p(t,n){1&n&&function(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}(o,t[0])},i:t,o:t,d(t){t&&$(e)}}}function et(t){let n,e,o,r,c,l,u;const g=t[9].default,h=s(g,t,t[8],null),b=[nt,tt],x=[];function w(t,n){return t[0]?0:1}return c=w(t),l=x[c]=b[c](t),{c(){n=m("div"),e=m("span"),h&&h.c(),o=y(),r=m("div"),l.c(),v(e,"class","tooltip-slot svelte-tfs2ro"),v(r,"class","tooltip svelte-tfs2ro"),_(r,"active",t[5]),_(r,"left",t[4]),_(r,"right",t[2]),_(r,"bottom",t[3]),_(r,"top",t[1]),v(n,"class","tooltip-wrapper svelte-tfs2ro")},m(t,l){p(t,n,l),d(n,e),h&&h.m(e,null),d(n,o),d(n,r),x[c].m(r,null),u=!0},p(t,[n]){h&&h.p&&(!u||256&n)&&f(h,g,t,t[8],u?i(g,t[8],n,null):a(t[8]),null);let e=c;c=w(t),c===e?x[c].p(t,n):(q(),T(x[e],1,1,(()=>{x[e]=null})),z(),l=x[c],l?l.p(t,n):(l=x[c]=b[c](t),l.c()),J(l,1),l.m(r,null)),32&n&&_(r,"active",t[5]),16&n&&_(r,"left",t[4]),4&n&&_(r,"right",t[2]),8&n&&_(r,"bottom",t[3]),2&n&&_(r,"top",t[1])},i(t){u||(J(h,t),J(l),u=!0)},o(t){T(h,t),T(l),u=!1},d(t){t&&$(n),h&&h.d(t),x[c].d()}}}function ot(t,n,e){let{$$slots:o={},$$scope:r}=n,{tip:c=""}=n,{top:l=!1}=n,{right:s=!1}=n,{bottom:u=!1}=n,{left:i=!1}=n,{active:f=!1}=n,{color:a="#757575"}=n,d=`background-color: ${a};`;return t.$$set=t=>{"tip"in t&&e(0,c=t.tip),"top"in t&&e(1,l=t.top),"right"in t&&e(2,s=t.right),"bottom"in t&&e(3,u=t.bottom),"left"in t&&e(4,i=t.left),"active"in t&&e(5,f=t.active),"color"in t&&e(7,a=t.color),"$$scope"in t&&e(8,r=t.$$scope)},[c,l,s,u,i,f,d,a,r,o]}class rt extends R{constructor(t){super(),Q(this,t,ot,et,c,{tip:0,top:1,right:2,bottom:3,left:4,active:5,color:7})}}function ct(t,n,e){const o=t.slice();return o[1]=n[e],o}function lt(t){let n,e,o;return{c(){n=m("div"),o=y(),v(n,"class","pixel svelte-1nkc7d6"),v(n,"style",e=`background-color: ${W(t[1].mood)}`)},m(t,e){p(t,n,e),p(t,o,e)},p(t,o){1&o&&e!==(e=`background-color: ${W(t[1].mood)}`)&&v(n,"style",e)},d(t){t&&$(n),t&&$(o)}}}function st(t){let n,e;return n=new rt({props:{tip:`${X(t[1].day)} - ${t[1].mood}`,top:!0,$$slots:{default:[lt]},$$scope:{ctx:t}}}),{c(){P(n.$$.fragment)},m(t,o){G(n,t,o),e=!0},p(t,e){const o={};1&e&&(o.tip=`${X(t[1].day)} - ${t[1].mood}`),17&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o)},i(t){e||(J(n.$$.fragment,t),e=!0)},o(t){T(n.$$.fragment,t),e=!1},d(t){H(n,t)}}}function ut(t){let n,e,o=t[0],r=[];for(let n=0;n<o.length;n+=1)r[n]=st(ct(t,o,n));const c=t=>T(r[t],1,1,(()=>{r[t]=null}));return{c(){n=m("div");for(let t=0;t<r.length;t+=1)r[t].c();v(n,"class","grid svelte-1nkc7d6")},m(t,o){p(t,n,o);for(let t=0;t<r.length;t+=1)r[t].m(n,null);e=!0},p(t,[e]){if(1&e){let l;for(o=t[0],l=0;l<o.length;l+=1){const c=ct(t,o,l);r[l]?(r[l].p(c,e),J(r[l],1)):(r[l]=st(c),r[l].c(),J(r[l],1),r[l].m(n,null))}for(q(),l=o.length;l<r.length;l+=1)c(l);z()}},i(t){if(!e){for(let t=0;t<o.length;t+=1)J(r[t]);e=!0}},o(t){r=r.filter(Boolean);for(let t=0;t<r.length;t+=1)T(r[t]);e=!1},d(t){t&&$(n),g(r,t)}}}function it(t,n,e){let{elements:o=[]}=n;return t.$$set=t=>{"elements"in t&&e(0,o=t.elements)},t.$$.update=()=>{1&t.$$.dirty&&(console.log("elements changed"),console.log({elements:o}))},[o]}class ft extends R{constructor(t){super(),Q(this,t,it,ut,c,{elements:0})}}const at=[];function dt(){const t=localStorage.getItem("reports");if(null==t)return[];const n=JSON.parse(t).map((t=>({mood:t.mood,day:new Date(t.day)})));return console.log(n),n}function pt(t){localStorage.setItem("reports",JSON.stringify(t))}const{subscribe:$t,set:gt,update:mt}=function(n,e=t){let o;const r=new Set;function l(t){if(c(n,t)&&(n=t,o)){const t=!at.length;for(const t of r)t[1](),at.push(t,n);if(t){for(let t=0;t<at.length;t+=2)at[t][0](at[t+1]);at.length=0}}}return{set:l,update:function(t){l(t(n))},subscribe:function(c,s=t){const u=[c,s];return r.add(u),1===r.size&&(o=e(l)||t),c(n),()=>{r.delete(u),0===r.size&&(o(),o=null)}}}}(dt());function ht(t){t.day,pt(dt().filter((t=>{t.day}))),mt((t=>dt())),pt([...dt(),t]),mt((t=>dt())),mt((t=>t.sort(((t,n)=>t.day>n.day?-1:1))))}const yt={subscribe:$t};function bt(t,n,e){const o=t.slice();return o[4]=n[e],o}function vt(n){let e,o,r,c=n[4]+"";return{c(){e=m("option"),o=h(c),e.__value=r=n[4],e.value=e.__value},m(t,n){p(t,e,n),d(e,o)},p:t,d(t){t&&$(e)}}}function xt(n){let e,r,c,l,s,u,i,f=U,a=[];for(let t=0;t<f.length;t+=1)a[t]=vt(bt(n,f,t));return{c(){e=m("h3"),e.textContent="how was your day?",r=y(),c=m("select");for(let t=0;t<a.length;t+=1)a[t].c();l=y(),s=m("button"),s.textContent="update calendar",void 0===n[0]&&O((()=>n[2].call(c)))},m(t,o){p(t,e,o),p(t,r,o),p(t,c,o);for(let t=0;t<a.length;t+=1)a[t].m(c,null);x(c,n[0]),p(t,l,o),p(t,s,o),u||(i=[b(c,"change",n[2]),b(s,"click",n[3])],u=!0)},p(t,[n]){if(0&n){let e;for(f=U,e=0;e<f.length;e+=1){const o=bt(t,f,e);a[e]?a[e].p(o,n):(a[e]=vt(o),a[e].c(),a[e].m(c,null))}for(;e<a.length;e+=1)a[e].d(1);a.length=f.length}1&n&&x(c,t[0])},i:t,o:t,d(t){t&&$(e),t&&$(r),t&&$(c),g(a,t),t&&$(l),t&&$(s),u=!1,o(i)}}}function _t(t,n,e){let o="neutral";function r(){console.log("adding a report");const t={day:new Date,mood:o};console.log({rep:t}),console.log({reports:yt}),ht(t)}return[o,r,function(){o=function(t){const n=t.querySelector(":checked")||t.options[0];return n&&n.__value}(this),e(0,o)},()=>r()]}class wt extends R{constructor(t){super(),Q(this,t,_t,xt,c,{})}}function kt(t){let n,e,o,r,c;return e=new wt({}),r=new ft({props:{elements:t[0]}}),{c(){n=m("main"),P(e.$$.fragment),o=y(),P(r.$$.fragment),v(n,"class","svelte-1h6otfa")},m(t,l){p(t,n,l),G(e,n,null),d(n,o),G(r,n,null),c=!0},p(t,[n]){const e={};1&n&&(e.elements=t[0]),r.$set(e)},i(t){c||(J(e.$$.fragment,t),J(r.$$.fragment,t),c=!0)},o(t){T(e.$$.fragment,t),T(r.$$.fragment,t),c=!1},d(t){t&&$(n),H(e),H(r)}}}function Ft(t,n,e){let o;return l(t,yt,(t=>e(0,o=t))),[o]}return new class extends R{constructor(t){super(),Q(this,t,Ft,kt,c,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
