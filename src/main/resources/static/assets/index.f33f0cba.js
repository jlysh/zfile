import{D as E}from"./base.b65bdcd1.js";import{E as b}from"./dialog.bc6c9616.js";import"./overlay.73d3f939.js";/* empty css               */import{E as v,a as C}from"./form-item.5db46a7d.js";/* empty css              */import{a as k,b as x,e as l,j as r,O as s,u as e,h as F,P as N}from"./index.965ac11d.js";import{u as w}from"./storage-copy.93e6ed15.js";import{E as B}from"./index.22cf9654.js";import"./index.efd5e5c6.js";import"./scroll.06c8f1a5.js";import"./focus-trap.2030fc87.js";import"./refs.45a892d9.js";import"./event.776e7e11.js";import"./request.2ccc188b.js";import"./_Uint8Array.4350f927.js";import"./_initCloneObject.7947104d.js";import"./admin-storage.1997580a.js";const Q={__name:"index",setup(D,{emit:u}){const{dialogVisible:a,saveLoading:d,formData:m,rules:f,storageCopyFormRef:_,submitForm:V}=w();return(K,o)=>{const p=B,n=v,g=C,i=E,y=b;return k(),x(y,{title:"\u590D\u5236\u5B58\u50A8\u914D\u7F6E",modelValue:e(a),"onUpdate:modelValue":o[5]||(o[5]=t=>N(a)?a.value=t:null),width:"20%"},{footer:l(()=>[r(i,{onClick:o[3]||(o[3]=t=>a.value=!1)},{default:l(()=>[s("\u53D6 \u6D88")]),_:1}),r(i,{type:"primary",onClick:o[4]||(o[4]=t=>e(V)(u)),loading:e(d)},{default:l(()=>[s("\u786E \u5B9A")]),_:1},8,["loading"])]),default:l(()=>[r(g,{onSubmit:o[2]||(o[2]=F(()=>{},["prevent"])),model:e(m),rules:e(f),ref_key:"storageCopyFormRef",ref:_},{default:l(()=>[r(n,{label:"\u65B0\u5B58\u50A8\u6E90\u540D\u79F0",prop:"toName"},{default:l(()=>[r(p,{modelValue:e(m).toName,"onUpdate:modelValue":o[0]||(o[0]=t=>e(m).toName=t),placeholder:"\u8BF7\u8F93\u5165\u65B0\u5B58\u50A8\u6E90\u540D\u79F0"},null,8,["modelValue"])]),_:1}),r(n,{label:"\u65B0\u5B58\u50A8\u6E90\u522B\u540D",prop:"toKey"},{default:l(()=>[r(p,{modelValue:e(m).toKey,"onUpdate:modelValue":o[1]||(o[1]=t=>e(m).toKey=t),placeholder:"\u8BF7\u8F93\u5165\u65B0\u5B58\u50A8\u6E90\u522B\u540D"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue"])}}};export{Q as default};