import{d as c,r as i,a as s,c as E,w as n,o as D,b as o,_ as m,C as f,e as F,f as b,u as d,F as g}from"./index.f81519e2.js";import{D as C}from"./DemoContainer.62406f12.js";const V=c({__name:"ProSelectBasic",setup(B){const l=i("01"),a=i(["01","02"]),u=[{label:"\u62BD\u70DF",value:"01"},{label:"\u559D\u9152",value:"02"},{label:"\u70EB\u5934",value:"03"}];return(p,e)=>{const t=s("pro-select"),r=s("el-space");return D(),E(C,{title:"\u57FA\u672C\u4F7F\u7528",description:"",code:"%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20%22vue%22%3B%0Aimport%20type%20%7B%20OptionNodeType%20%7D%20from%20%22one-components-vue3%22%3B%0A%0Aconst%20inputValue1%20%3D%20ref(%2201%22)%3B%0Aconst%20inputValue2%20%3D%20ref(%5B%2201%22%2C%20%2202%22%5D)%3B%0Aconst%20options%3A%20OptionNodeType%5B%5D%20%3D%20%5B%0A%20%20%7B%20label%3A%20%22%E6%8A%BD%E7%83%9F%22%2C%20value%3A%20%2201%22%20%7D%2C%0A%20%20%7B%20label%3A%20%22%E5%96%9D%E9%85%92%22%2C%20value%3A%20%2202%22%20%7D%2C%0A%20%20%7B%20label%3A%20%22%E7%83%AB%E5%A4%B4%22%2C%20value%3A%20%2203%22%20%7D%2C%0A%5D%3B%0A%3C%2Fscript%3E%0A%0A%3Ctemplate%3E%0A%20%20%3Cel-space%3E%0A%20%20%20%20%3Cpro-select%20v-model%3D%22inputValue1%22%20%3Aoptions%3D%22options%22%20%2F%3E%0A%20%20%20%20%3Cpro-select%0A%20%20%20%20%20%20v-model%3D%22inputValue2%22%0A%20%20%20%20%20%20%3Aoptions%3D%22options%22%0A%20%20%20%20%20%20%3Afield-props%3D%22%7B%20multiple%3A%20true%20%7D%22%0A%20%20%20%20%2F%3E%0A%20%20%3C%2Fel-space%3E%0A%3C%2Ftemplate%3E"},{default:n(()=>[o(r,null,{default:n(()=>[o(t,{modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=A=>l.value=A),options:u},null,8,["modelValue"]),o(t,{modelValue:a.value,"onUpdate:modelValue":e[1]||(e[1]=A=>a.value=A),options:u,"field-props":{multiple:!0}},null,8,["modelValue"])]),_:1})]),_:1})}}}),y=m(V,[["__file","E:/frontend/pro-components-vue3/packages/examples/src/views/pro-field/pro-select/ProSelectBasic.md"]]),x=c({__name:"ProSelectGroup",setup(B){const l=i("01"),a=[{label:"\u7231\u597D",value:"hobby",children:[{label:"\u62BD\u70DF",value:"01"},{label:"\u559D\u9152",value:"02"},{label:"\u70EB\u5934",value:"03"}]}];return(u,p)=>{const e=s("pro-select");return D(),E(C,{title:"\u9009\u9879\u5206\u7EC4",description:"",code:"%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20%22vue%22%3B%0Aimport%20type%20%7B%20OptionNodeType%20%7D%20from%20%22one-components-vue3%22%3B%0A%0Aconst%20inputValue%20%3D%20ref(%2201%22)%3B%0Aconst%20options%3A%20OptionNodeType%5B%5D%20%3D%20%5B%0A%20%20%7B%0A%20%20%20%20label%3A%20%22%E7%88%B1%E5%A5%BD%22%2C%0A%20%20%20%20value%3A%20%22hobby%22%2C%0A%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%7B%20label%3A%20%22%E6%8A%BD%E7%83%9F%22%2C%20value%3A%20%2201%22%20%7D%2C%0A%20%20%20%20%20%20%7B%20label%3A%20%22%E5%96%9D%E9%85%92%22%2C%20value%3A%20%2202%22%20%7D%2C%0A%20%20%20%20%20%20%7B%20label%3A%20%22%E7%83%AB%E5%A4%B4%22%2C%20value%3A%20%2203%22%20%7D%2C%0A%20%20%20%20%5D%2C%0A%20%20%7D%2C%0A%5D%3B%0A%3C%2Fscript%3E%0A%0A%3Ctemplate%3E%0A%20%20%3Cpro-select%0A%20%20%20%20v-model%3D%22inputValue%22%0A%20%20%20%20%3AfieldProps%3D%22%7B%20type%3A%20'group'%20%7D%22%0A%20%20%20%20%3Aoptions%3D%22options%22%0A%20%20%2F%3E%0A%3C%2Ftemplate%3E"},{default:n(()=>[o(e,{modelValue:l.value,"onUpdate:modelValue":p[0]||(p[0]=t=>l.value=t),fieldProps:{type:"group"},options:a},null,8,["modelValue"])]),_:1})}}}),P=m(x,[["__file","E:/frontend/pro-components-vue3/packages/examples/src/views/pro-field/pro-select/ProSelectGroup.md"]]),T=F(" \u91CD\u65B0\u8BF7\u6C42 "),w=c({__name:"ProSelectRequest",setup(B){const l=i("01"),a=f({id:""}),u=i(!1),p=async({id:e})=>{u.value=!0;const t=await new Promise(r=>{setTimeout(()=>r([{label:"\u62BD\u70DF"+e,value:"01"},{label:"\u559D\u9152"+e,value:"02"},{label:"\u70EB\u5934"+e,value:"03"}]),1e3)});return u.value=!1,t};return(e,t)=>{const r=s("el-button"),A=s("pro-select"),_=s("el-space");return D(),E(C,{title:"\u81EA\u52A8\u8BF7\u6C42\u9009\u9879\u6570\u636E",description:"params \u53D1\u751F\u6539\u53D8\u540E\uFF0C\u4F1A\u518D\u6B21\u89E6\u53D1 request",code:"%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20ref%2C%20reactive%20%7D%20from%20%22vue%22%3B%0Aimport%20type%20%7B%20OptionNodeType%20%7D%20from%20%22one-components-vue3%22%3B%0A%0Aconst%20inputValue%20%3D%20ref(%2201%22)%3B%0Atype%20ParamsType%20%3D%20%7B%20id%3A%20string%20%7D%3B%0Aconst%20params%20%3D%20reactive%3CParamsType%3E(%7B%20id%3A%20%22%22%20%7D)%3B%0Aconst%20loading%20%3D%20ref(false)%3B%0Aconst%20getOptions%20%3D%20async%20(%7B%20id%20%7D%3A%20ParamsType)%20%3D%3E%20%7B%0A%20%20loading.value%20%3D%20true%3B%0A%20%20const%20res%3A%20OptionNodeType%5B%5D%20%3D%20await%20new%20Promise((resolve)%20%3D%3E%20%7B%0A%20%20%20%20setTimeout(%0A%20%20%20%20%20%20()%20%3D%3E%0A%20%20%20%20%20%20%20%20resolve(%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%20label%3A%20%22%E6%8A%BD%E7%83%9F%22%20%2B%20id%2C%20value%3A%20%2201%22%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20label%3A%20%22%E5%96%9D%E9%85%92%22%20%2B%20id%2C%20value%3A%20%2202%22%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20label%3A%20%22%E7%83%AB%E5%A4%B4%22%20%2B%20id%2C%20value%3A%20%2203%22%20%7D%2C%0A%20%20%20%20%20%20%20%20%5D)%2C%0A%20%20%20%20%20%201000%0A%20%20%20%20)%3B%0A%20%20%7D)%3B%0A%20%20loading.value%20%3D%20false%3B%0A%20%20return%20res%3B%0A%7D%3B%0A%3C%2Fscript%3E%0A%0A%3Ctemplate%3E%0A%20%20%3Cel-space%3E%0A%20%20%20%20%3Cel-button%0A%20%20%20%20%20%20%3Aloading%3D%22loading%22%0A%20%20%20%20%20%20%3Astyle%3D%22%7B%20marginRight%3A%20'12px'%20%7D%22%0A%20%20%20%20%20%20%40click%3D%22params.id%20%3D%20%60%24%7BMath.floor(Math.random()%20*%2010000)%7D%60%22%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%E9%87%8D%E6%96%B0%E8%AF%B7%E6%B1%82%0A%20%20%20%20%3C%2Fel-button%3E%0A%20%20%20%20%3Cpro-select%20v-model%3D%22inputValue%22%20%3Aparams%3D%22params%22%20%3Arequest%3D%22getOptions%22%20%2F%3E%0A%20%20%3C%2Fel-space%3E%0A%3C%2Ftemplate%3E"},{default:n(()=>[o(_,null,{default:n(()=>[o(r,{loading:u.value,style:{marginRight:"12px"},onClick:t[0]||(t[0]=v=>a.id=`${Math.floor(Math.random()*1e4)}`)},{default:n(()=>[T]),_:1},8,["loading"]),o(A,{modelValue:l.value,"onUpdate:modelValue":t[1]||(t[1]=v=>l.value=v),params:a,request:p},null,8,["modelValue","params"])]),_:1})]),_:1})}}}),k=m(w,[["__file","E:/frontend/pro-components-vue3/packages/examples/src/views/pro-field/pro-select/ProSelectRequest.md"]]),O=c({__name:"Index",setup(B){return(l,a)=>(D(),b(g,null,[o(d(y)),o(d(P)),o(d(k))],64))}}),h=m(O,[["__file","E:/frontend/pro-components-vue3/packages/examples/src/views/pro-field/pro-select/Index.vue"]]);export{h as default};
