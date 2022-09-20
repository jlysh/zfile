var _t=Object.defineProperty,xt=Object.defineProperties;var wt=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var be=Object.prototype.hasOwnProperty,he=Object.prototype.propertyIsEnumerable;var ve=(e,r,t)=>r in e?_t(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,O=(e,r)=>{for(var t in r||(r={}))be.call(r,t)&&ve(e,t,r[t]);if(N)for(var t of N(r))he.call(r,t)&&ve(e,t,r[t]);return e},B=(e,r)=>xt(e,wt(r));var ye=(e,r)=>{var t={};for(var n in e)be.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&N)for(var n of N(e))r.indexOf(n)<0&&he.call(e,n)&&(t[n]=e[n]);return t};var E=(e,r,t)=>new Promise((n,o)=>{var i=d=>{try{s(t.next(d))}catch(b){o(b)}},a=d=>{try{s(t.throw(d))}catch(b){o(b)}},s=d=>d.done?n(d.value):Promise.resolve(d.value).then(i,a);s((t=t.apply(e,r)).next())});import{ag as le,ah as Tt,ai as Pe,aj as ze,ak as St,al as _e,am as Ne,b as Ue,d as ee,an as Ve,U as Re,a4 as qe,u as ae,o as At,a2 as ie,_ as De,V as te,t as jt,X as It,ao as Ft,a0 as xe,ac as Z,w as $t,j as Ot}from"./base.130d3d79.js";import{D as Ct,m as re,r as L,c as h,d as se,w as q,v as Ge,W as Ke,ah as ke,a as oe,f as Ye,g as V,n as P,u as g,l as He,E as D,o as Je,H as Xe,an as Et,h as G,F as Lt,Z as Ze,G as Wt,e as Q,b as Mt,J as Bt,t as we,i as Te,q as Pt,k as Se,p as Ae,T as zt}from"./index.9f622a37.js";import{S as Nt}from"./index.5cf4e3bb.js";import{d as Ut}from"./request.b205aa07.js";import{i as Qe,a as Vt,b as Rt,o as qt,k as et,g as tt,s as Dt,c as Gt,d as Kt,U as je,e as ue,n as K,f as rt,h as kt,S as Yt,j as Ht,l as Jt}from"./isEqual.8c560905.js";var Ie=Object.create,Xt=function(){function e(){}return function(r){if(!le(r))return{};if(Ie)return Ie(r);e.prototype=r;var t=new e;return e.prototype=void 0,t}}(),Zt=Xt;function Qt(e,r){var t=-1,n=e.length;for(r||(r=Array(n));++t<n;)r[t]=e[t];return r}function er(e,r){for(var t=-1,n=e==null?0:e.length;++t<n&&r(e[t],t,e)!==!1;);return e}function k(e,r,t,n){var o=!t;t||(t={});for(var i=-1,a=r.length;++i<a;){var s=r[i],d=n?n(t[s],e[s],s,t,e):void 0;d===void 0&&(d=e[s]),o?Tt(t,s,d):Pe(t,s,d)}return t}function tr(e){var r=[];if(e!=null)for(var t in Object(e))r.push(t);return r}var rr=Object.prototype,or=rr.hasOwnProperty;function nr(e){if(!le(e))return tr(e);var r=Qe(e),t=[];for(var n in e)n=="constructor"&&(r||!or.call(e,n))||t.push(n);return t}function fe(e){return Vt(e)?Rt(e,!0):nr(e)}var lr=qt(Object.getPrototypeOf,Object),ot=lr;function ne(){if(!arguments.length)return[];var e=arguments[0];return ze(e)?e:[e]}function ar(e,r){return e&&k(r,et(r),e)}function ir(e,r){return e&&k(r,fe(r),e)}var nt=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Fe=nt&&typeof module=="object"&&module&&!module.nodeType&&module,sr=Fe&&Fe.exports===nt,$e=sr?St.Buffer:void 0,Oe=$e?$e.allocUnsafe:void 0;function ur(e,r){if(r)return e.slice();var t=e.length,n=Oe?Oe(t):new e.constructor(t);return e.copy(n),n}function fr(e,r){return k(e,tt(e),r)}var dr=Object.getOwnPropertySymbols,cr=dr?function(e){for(var r=[];e;)Gt(r,tt(e)),e=ot(e);return r}:Dt,lt=cr;function mr(e,r){return k(e,lt(e),r)}function pr(e){return Kt(e,fe,lt)}var gr=Object.prototype,vr=gr.hasOwnProperty;function br(e){var r=e.length,t=new e.constructor(r);return r&&typeof e[0]=="string"&&vr.call(e,"index")&&(t.index=e.index,t.input=e.input),t}function de(e){var r=new e.constructor(e.byteLength);return new je(r).set(new je(e)),r}function hr(e,r){var t=r?de(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.byteLength)}var yr=/\w*$/;function _r(e){var r=new e.constructor(e.source,yr.exec(e));return r.lastIndex=e.lastIndex,r}var Ce=_e?_e.prototype:void 0,Ee=Ce?Ce.valueOf:void 0;function xr(e){return Ee?Object(Ee.call(e)):{}}function wr(e,r){var t=r?de(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.length)}var Tr="[object Boolean]",Sr="[object Date]",Ar="[object Map]",jr="[object Number]",Ir="[object RegExp]",Fr="[object Set]",$r="[object String]",Or="[object Symbol]",Cr="[object ArrayBuffer]",Er="[object DataView]",Lr="[object Float32Array]",Wr="[object Float64Array]",Mr="[object Int8Array]",Br="[object Int16Array]",Pr="[object Int32Array]",zr="[object Uint8Array]",Nr="[object Uint8ClampedArray]",Ur="[object Uint16Array]",Vr="[object Uint32Array]";function Rr(e,r,t){var n=e.constructor;switch(r){case Cr:return de(e);case Tr:case Sr:return new n(+e);case Er:return hr(e,t);case Lr:case Wr:case Mr:case Br:case Pr:case zr:case Nr:case Ur:case Vr:return wr(e,t);case Ar:return new n;case jr:case $r:return new n(e);case Ir:return _r(e);case Fr:return new n;case Or:return xr(e)}}function qr(e){return typeof e.constructor=="function"&&!Qe(e)?Zt(ot(e)):{}}var Dr="[object Map]";function Gr(e){return Ne(e)&&ue(e)==Dr}var Le=K&&K.isMap,Kr=Le?rt(Le):Gr,kr=Kr,Yr="[object Set]";function Hr(e){return Ne(e)&&ue(e)==Yr}var We=K&&K.isSet,Jr=We?rt(We):Hr,Xr=Jr,Zr=1,Qr=2,eo=4,at="[object Arguments]",to="[object Array]",ro="[object Boolean]",oo="[object Date]",no="[object Error]",it="[object Function]",lo="[object GeneratorFunction]",ao="[object Map]",io="[object Number]",st="[object Object]",so="[object RegExp]",uo="[object Set]",fo="[object String]",co="[object Symbol]",mo="[object WeakMap]",po="[object ArrayBuffer]",go="[object DataView]",vo="[object Float32Array]",bo="[object Float64Array]",ho="[object Int8Array]",yo="[object Int16Array]",_o="[object Int32Array]",xo="[object Uint8Array]",wo="[object Uint8ClampedArray]",To="[object Uint16Array]",So="[object Uint32Array]",c={};c[at]=c[to]=c[po]=c[go]=c[ro]=c[oo]=c[vo]=c[bo]=c[ho]=c[yo]=c[_o]=c[ao]=c[io]=c[st]=c[so]=c[uo]=c[fo]=c[co]=c[xo]=c[wo]=c[To]=c[So]=!0;c[no]=c[it]=c[mo]=!1;function R(e,r,t,n,o,i){var a,s=r&Zr,d=r&Qr,b=r&eo;if(t&&(a=o?t(e,n,o,i):t(e)),a!==void 0)return a;if(!le(e))return e;var u=ze(e);if(u){if(a=br(e),!s)return Qt(e,a)}else{var p=ue(e),x=p==it||p==lo;if(kt(e))return ur(e,s);if(p==st||p==at||x&&!o){if(a=d||x?{}:qr(e),!s)return d?mr(e,ir(a,e)):fr(e,ar(a,e))}else{if(!c[p])return o?e:{};a=Rr(e,p,s)}}i||(i=new Yt);var S=i.get(e);if(S)return S;i.set(e,a),Xr(e)?e.forEach(function(y){a.add(R(y,r,t,y,e,i))}):kr(e)&&e.forEach(function(y,w){a.set(w,R(y,r,t,w,e,i))});var A=b?d?pr:Ht:d?fe:et,j=u?void 0:A(e);return er(j||e,function(y,w){j&&(w=y,y=e[w]),Pe(a,w,R(y,r,t,w,e,i))}),a}var Ao=4;function Me(e){return R(e,Ao)}const jo=Ue({model:Object,rules:{type:ee(Object)},labelPosition:{type:String,values:["left","right","top"],default:"right"},labelWidth:{type:[String,Number],default:""},labelSuffix:{type:String,default:""},inline:Boolean,inlineMessage:Boolean,statusIcon:Boolean,showMessage:{type:Boolean,default:!0},size:{type:String,values:Ve},disabled:Boolean,validateOnRuleChange:{type:Boolean,default:!0},hideRequiredAsterisk:{type:Boolean,default:!1},scrollToError:Boolean}),Io={validate:(e,r,t)=>(Ct(e)||re(e))&&Re(r)&&re(t)};function Fo(){const e=L([]),r=h(()=>{if(!e.value.length)return"0";const i=Math.max(...e.value);return i?`${i}px`:""});function t(i){return e.value.indexOf(i)}function n(i,a){if(i&&a){const s=t(a);e.value.splice(s,1,i)}else i&&e.value.push(i)}function o(i){const a=t(i);a>-1&&e.value.splice(a,1)}return{autoLabelWidth:r,registerLabelWidth:n,deregisterLabelWidth:o}}const U=(e,r)=>{const t=ne(r);return t.length>0?e.filter(n=>n.prop&&t.includes(n.prop)):e},$o={name:"ElForm"},Oo=se(B(O({},$o),{props:jo,emits:Io,setup(e,{expose:r,emit:t}){const n=e,o=[],i=qe(),a=ae("form"),s=h(()=>{const{labelPosition:f,inline:v}=n;return[a.b(),a.m(i.value||"default"),{[a.m(`label-${f}`)]:f,[a.m("inline")]:v}]}),d=f=>{o.push(f)},b=f=>{f.prop&&o.splice(o.indexOf(f),1)},u=(f=[])=>{!n.model||U(o,f).forEach(v=>v.resetField())},p=(f=[])=>{U(o,f).forEach(v=>v.clearValidate())},x=h(()=>!!n.model),S=f=>{if(o.length===0)return[];const v=U(o,f);return v.length?v:[]},A=f=>E(this,null,function*(){return y(void 0,f)}),j=(...v)=>E(this,[...v],function*(f=[]){if(!x.value)return!1;const C=S(f);if(C.length===0)return!0;let $={};for(const I of C)try{yield I.validate("")}catch(F){$=O(O({},$),F)}return Object.keys($).length===0?!0:Promise.reject($)}),y=(...C)=>E(this,[...C],function*(f=[],v){const $=!He(v);try{const I=yield j(f);return I===!0&&(v==null||v(I)),I}catch(I){const F=I;return n.scrollToError&&w(Object.keys(F)[0]),v==null||v(!1,F),$&&Promise.reject(F)}}),w=f=>{var v;const C=U(o,f)[0];C&&((v=C.$el)==null||v.scrollIntoView())};return q(()=>n.rules,()=>{n.validateOnRuleChange&&A().catch(f=>At())},{deep:!0}),Ge(ie,Ke(O(B(O({},ke(n)),{emit:t,resetFields:u,clearValidate:p,validateField:y,addField:d,removeField:b}),Fo()))),r({validate:A,validateField:y,resetFields:u,clearValidate:p,scrollToField:w}),(f,v)=>(oe(),Ye("form",{class:P(g(s))},[V(f.$slots,"default")],2))}}));var Co=De(Oo,[["__file","/home/runner/work/element-plus/element-plus/packages/components/form/src/form.vue"]]);const Eo=["","error","validating","success"],Lo=Ue({label:String,labelWidth:{type:[String,Number],default:""},prop:{type:ee([String,Array])},required:{type:Boolean,default:void 0},rules:{type:ee([Object,Array])},error:String,validateStatus:{type:String,values:Eo},for:String,inlineMessage:{type:[String,Boolean],default:""},showMessage:{type:Boolean,default:!0},size:{type:String,values:Ve}}),Be="ElLabelWrap";var Wo=se({name:Be,props:{isAutoWidth:Boolean,updateAll:Boolean},setup(e,{slots:r}){const t=D(ie,void 0);D(te)||jt(Be,"usage: <el-form-item><label-wrap /></el-form-item>");const o=ae("form"),i=L(),a=L(0),s=()=>{var u;if((u=i.value)!=null&&u.firstElementChild){const p=window.getComputedStyle(i.value.firstElementChild).width;return Math.ceil(Number.parseFloat(p))}else return 0},d=(u="update")=>{Ze(()=>{r.default&&e.isAutoWidth&&(u==="update"?a.value=s():u==="remove"&&(t==null||t.deregisterLabelWidth(a.value)))})},b=()=>d("update");return Je(()=>{b()}),Xe(()=>{d("remove")}),Et(()=>b()),q(a,(u,p)=>{e.updateAll&&(t==null||t.registerLabelWidth(u,p))}),Ut(h(()=>{var u,p;return(p=(u=i.value)==null?void 0:u.firstElementChild)!=null?p:null}),b),()=>{var u,p;if(!r)return null;const{isAutoWidth:x}=e;if(x){const S=t==null?void 0:t.autoLabelWidth,A={};if(S&&S!=="auto"){const j=Math.max(0,Number.parseInt(S,10)-a.value),y=t.labelPosition==="left"?"marginRight":"marginLeft";j&&(A[y]=`${j}px`)}return G("div",{ref:i,class:[o.be("item","label-wrap")],style:A},[(u=r.default)==null?void 0:u.call(r)])}else return G(Lt,{ref:i},[(p=r.default)==null?void 0:p.call(r)])}}});const Mo=["role","aria-labelledby"],Bo={name:"ElFormItem"},Po=se(B(O({},Bo),{props:Lo,setup(e,{expose:r}){const t=e,n=Wt(),o=D(ie,void 0),i=D(te,void 0),a=qe(void 0,{formItem:!1}),s=ae("form-item"),d=It().value,b=L([]),u=L(""),p=Ft(u,100),x=L(""),S=L();let A,j=!1;const y=h(()=>{if((o==null?void 0:o.labelPosition)==="top")return{};const l=xe(t.labelWidth||(o==null?void 0:o.labelWidth)||"");return l?{width:l}:{}}),w=h(()=>{if((o==null?void 0:o.labelPosition)==="top"||(o==null?void 0:o.inline))return{};if(!t.label&&!t.labelWidth&&ft)return{};const l=xe(t.labelWidth||(o==null?void 0:o.labelWidth)||"");return!t.label&&!n.label?{marginLeft:l}:{}}),f=h(()=>[s.b(),s.m(a.value),s.is("error",u.value==="error"),s.is("validating",u.value==="validating"),s.is("success",u.value==="success"),s.is("required",mt.value||t.required),s.is("no-asterisk",o==null?void 0:o.hideRequiredAsterisk),{[s.m("feedback")]:o==null?void 0:o.statusIcon}]),v=h(()=>Re(t.inlineMessage)?t.inlineMessage:(o==null?void 0:o.inlineMessage)||!1),C=h(()=>[s.e("error"),{[s.em("error","inline")]:v.value}]),$=h(()=>t.prop?re(t.prop)?t.prop:t.prop.join("."):""),I=h(()=>!!(t.label||n.label)),F=h(()=>t.for||b.value.length===1?b.value[0]:void 0),Y=h(()=>!F.value&&I.value),ft=!!i,ce=h(()=>{const l=o==null?void 0:o.model;if(!(!l||!t.prop))return Z(l,t.prop).value}),H=h(()=>{const l=t.rules?ne(t.rules):[],m=o==null?void 0:o.rules;if(m&&t.prop){const _=Z(m,t.prop).value;_&&l.push(...ne(_))}return t.required!==void 0&&l.push({required:!!t.required}),l}),dt=h(()=>H.value.length>0),ct=l=>H.value.filter(_=>!_.trigger||!l?!0:Array.isArray(_.trigger)?_.trigger.includes(l):_.trigger===l).map(z=>{var M=z,{trigger:_}=M,T=ye(M,["trigger"]);return T}),mt=h(()=>H.value.some(l=>l.required===!0)),pt=h(()=>{var l;return p.value==="error"&&t.showMessage&&((l=o==null?void 0:o.showMessage)!=null?l:!0)}),me=h(()=>`${t.label||""}${(o==null?void 0:o.labelSuffix)||""}`),W=l=>{u.value=l},gt=l=>{var m,_;const{errors:T,fields:z}=l;(!T||!z)&&console.error(l),W("error"),x.value=T?(_=(m=T==null?void 0:T[0])==null?void 0:m.message)!=null?_:`${t.prop} is required`:"",o==null||o.emit("validate",t.prop,!1,x.value)},vt=()=>{W("success"),o==null||o.emit("validate",t.prop,!0,"")},bt=l=>E(this,null,function*(){const m=$.value;return new Nt({[m]:l}).validate({[m]:ce.value},{firstFields:!0}).then(()=>(vt(),!0)).catch(T=>(gt(T),Promise.reject(T)))}),pe=(l,m)=>E(this,null,function*(){if(j)return j=!1,!1;const _=He(m);if(!dt.value)return m==null||m(!1),!1;const T=ct(l);return T.length===0?(m==null||m(!0),!0):(W("validating"),bt(T).then(()=>(m==null||m(!0),!0)).catch(z=>{const{fields:M}=z;return m==null||m(!1,M),_?!1:Promise.reject(M)}))}),J=()=>{W(""),x.value=""},ge=()=>E(this,null,function*(){const l=o==null?void 0:o.model;if(!l||!t.prop)return;const m=Z(l,t.prop);Jt(m.value,A)||(j=!0),m.value=Me(A),yield Ze(),J()}),ht=l=>{b.value.includes(l)||b.value.push(l)},yt=l=>{b.value=b.value.filter(m=>m!==l)};q(()=>t.error,l=>{x.value=l||"",W(l?"error":"")},{immediate:!0}),q(()=>t.validateStatus,l=>W(l||""));const X=Ke(B(O({},ke(t)),{$el:S,size:a,validateState:u,labelId:d,inputIds:b,isGroup:Y,addInputId:ht,removeInputId:yt,resetField:ge,clearValidate:J,validate:pe}));return Ge(te,X),Je(()=>{t.prop&&(o==null||o.addField(X),A=Me(ce.value))}),Xe(()=>{o==null||o.removeField(X)}),r({size:a,validateMessage:x,validateState:u,validate:pe,clearValidate:J,resetField:ge}),(l,m)=>{var _;return oe(),Ye("div",{ref_key:"formItemRef",ref:S,class:P(g(f)),role:g(Y)?"group":void 0,"aria-labelledby":g(Y)?g(d):void 0},[G(g(Wo),{"is-auto-width":g(y).width==="auto","update-all":((_=g(o))==null?void 0:_.labelWidth)==="auto"},{default:Q(()=>[g(I)?(oe(),Mt(Pt(g(F)?"label":"div"),{key:0,id:g(d),for:g(F),class:P(g(s).e("label")),style:Te(g(y))},{default:Q(()=>[V(l.$slots,"label",{label:g(me)},()=>[Bt(we(g(me)),1)])]),_:3},8,["id","for","class","style"])):Se("v-if",!0)]),_:3},8,["is-auto-width","update-all"]),Ae("div",{class:P(g(s).e("content")),style:Te(g(w))},[V(l.$slots,"default"),G(zt,{name:`${g(s).namespace.value}-zoom-in-top`},{default:Q(()=>[g(pt)?V(l.$slots,"error",{key:0,error:x.value},()=>[Ae("div",{class:P(g(C))},we(x.value),3)]):Se("v-if",!0)]),_:3},8,["name"])],6)],10,Mo)}}}));var ut=De(Po,[["__file","/home/runner/work/element-plus/element-plus/packages/components/form/src/form-item.vue"]]);const Do=$t(Co,{FormItem:ut}),Go=Ot(ut);export{Go as E,Do as a};