import{d as A,r as s,a as p,c as m,w as r,o as c,b as u,_ as i,C as b,e as f,f as x,u as D,F as k}from"./index.fc8e6b4d.js";import{D as d}from"./DemoContainer.a268d056.js";const F=A({__name:"ProCheckboxBasic",setup(B){const e=s(["01"]),n=[{label:"\u62BD\u70DF",value:"01"},{label:"\u559D\u9152",value:"02"},{label:"\u70EB\u5934",value:"03"}];return(a,t)=>{const l=p("pro-checkbox");return c(),m(d,{title:"\u57FA\u672C\u4F7F\u7528",description:"",code:"%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20%22vue%22%3B%0Aimport%20type%20%7B%20OptionNodeType%20%7D%20from%20%22one-components-vue3%22%3B%0A%0Aconst%20inputValue%20%3D%20ref(%5B%2201%22%5D)%3B%0Aconst%20options%3A%20OptionNodeType%5B%5D%20%3D%20%5B%0A%20%20%7B%20label%3A%20%22%E6%8A%BD%E7%83%9F%22%2C%20value%3A%20%2201%22%20%7D%2C%0A%20%20%7B%20label%3A%20%22%E5%96%9D%E9%85%92%22%2C%20value%3A%20%2202%22%20%7D%2C%0A%20%20%7B%20label%3A%20%22%E7%83%AB%E5%A4%B4%22%2C%20value%3A%20%2203%22%20%7D%2C%0A%5D%3B%0A%3C%2Fscript%3E%0A%0A%3Ctemplate%3E%0A%20%20%3Cpro-checkbox%20v-model%3D%22inputValue%22%20%3Aoptions%3D%22options%22%20%2F%3E%0A%3C%2Ftemplate%3E"},{default:r(()=>[u(l,{modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=o=>e.value=o),options:n},null,8,["modelValue"])]),_:1})}}}),h=i(F,[["__file","E:/frontend/pro-components-vue3/packages/examples/src/views/pro-field/pro-checkbox/ProCheckboxBasic.md"]]),V=A({__name:"ProCheckboxAll",setup(B){const e=s(["01"]),n=[{label:"\u62BD\u70DF",value:"01"},{label:"\u559D\u9152",value:"02"},{label:"\u70EB\u5934",value:"03"}];return(a,t)=>{const l=p("pro-checkbox");return c(),m(d,{title:"\u5168\u9009\u529F\u80FD",description:"",code:"%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20%22vue%22%3B%0Aimport%20type%20%7B%20OptionNodeType%20%7D%20from%20%22one-components-vue3%22%3B%0A%0Aconst%20inputValue%20%3D%20ref(%5B%2201%22%5D)%3B%0Aconst%20options%3A%20OptionNodeType%5B%5D%20%3D%20%5B%0A%20%20%7B%20label%3A%20%22%E6%8A%BD%E7%83%9F%22%2C%20value%3A%20%2201%22%20%7D%2C%0A%20%20%7B%20label%3A%20%22%E5%96%9D%E9%85%92%22%2C%20value%3A%20%2202%22%20%7D%2C%0A%20%20%7B%20label%3A%20%22%E7%83%AB%E5%A4%B4%22%2C%20value%3A%20%2203%22%20%7D%2C%0A%5D%3B%0A%3C%2Fscript%3E%0A%0A%3Ctemplate%3E%0A%20%20%3Cpro-checkbox%0A%20%20%20%20v-model%3D%22inputValue%22%0A%20%20%20%20%3AfieldProps%3D%22%7B%20checkAll%3A%20true%20%7D%22%0A%20%20%20%20%3Aoptions%3D%22options%22%0A%20%20%2F%3E%0A%3C%2Ftemplate%3E"},{default:r(()=>[u(l,{modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=o=>e.value=o),fieldProps:{checkAll:!0},options:n},null,8,["modelValue"])]),_:1})}}}),g=i(V,[["__file","E:/frontend/pro-components-vue3/packages/examples/src/views/pro-field/pro-checkbox/ProCheckboxAll.md"]]),y=A({__name:"ProCheckboxButton",setup(B){const e=s(["01"]),n=[{label:"\u62BD\u70DF",value:"01"},{label:"\u559D\u9152",value:"02"},{label:"\u70EB\u5934",value:"03"}];return(a,t)=>{const l=p("pro-checkbox");return c(),m(d,{title:"\u6309\u94AE\u6837\u5F0F",description:"\u989C\u8272\u5C5E\u6027\u53EA\u80FD\u5728 button \u7C7B\u578B\u7684\u5355\u9009\u91CC\u751F\u6548",code:"%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20%22vue%22%3B%0Aimport%20type%20%7B%20OptionNodeType%20%7D%20from%20%22one-components-vue3%22%3B%0A%0Aconst%20inputValue%20%3D%20ref(%5B%2201%22%5D)%3B%0Aconst%20options%3A%20OptionNodeType%5B%5D%20%3D%20%5B%0A%20%20%7B%20label%3A%20%22%E6%8A%BD%E7%83%9F%22%2C%20value%3A%20%2201%22%20%7D%2C%0A%20%20%7B%20label%3A%20%22%E5%96%9D%E9%85%92%22%2C%20value%3A%20%2202%22%20%7D%2C%0A%20%20%7B%20label%3A%20%22%E7%83%AB%E5%A4%B4%22%2C%20value%3A%20%2203%22%20%7D%2C%0A%5D%3B%0A%3C%2Fscript%3E%0A%0A%3Ctemplate%3E%0A%20%20%3Cpro-checkbox%0A%20%20%20%20v-model%3D%22inputValue%22%0A%20%20%20%20%3Aoptions%3D%22options%22%0A%20%20%20%20%3Afield-props%3D%22%7B%0A%20%20%20%20%20%20type%3A%20'button'%2C%0A%20%20%20%20%20%20checkboxGroup%3A%20%7B%0A%20%20%20%20%20%20%20%20fill%3A%20'green'%2C%0A%20%20%20%20%20%20%20%20textColor%3A%20'orange'%2C%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%7D%22%0A%20%20%2F%3E%0A%3C%2Ftemplate%3E"},{default:r(()=>[u(l,{modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=o=>e.value=o),options:n,"field-props":{type:"button",checkboxGroup:{fill:"green",textColor:"orange"}}},null,8,["modelValue"])]),_:1})}}}),P=i(y,[["__file","E:/frontend/pro-components-vue3/packages/examples/src/views/pro-field/pro-checkbox/ProCheckboxButton.md"]]),T=A({__name:"ProCheckboxBorder",setup(B){const e=s(["01"]),n=[{label:"\u62BD\u70DF",value:"01"},{label:"\u559D\u9152",value:"02"},{label:"\u70EB\u5934",value:"03"}];return(a,t)=>{const l=p("pro-checkbox");return c(),m(d,{title:"\u8FB9\u6846\u6837\u5F0F",description:"",code:"%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20%22vue%22%3B%0Aimport%20type%20%7B%20OptionNodeType%20%7D%20from%20%22one-components-vue3%22%3B%0A%0Aconst%20inputValue%20%3D%20ref(%5B%2201%22%5D)%3B%0Aconst%20options%3A%20OptionNodeType%5B%5D%20%3D%20%5B%0A%20%20%7B%20label%3A%20%22%E6%8A%BD%E7%83%9F%22%2C%20value%3A%20%2201%22%20%7D%2C%0A%20%20%7B%20label%3A%20%22%E5%96%9D%E9%85%92%22%2C%20value%3A%20%2202%22%20%7D%2C%0A%20%20%7B%20label%3A%20%22%E7%83%AB%E5%A4%B4%22%2C%20value%3A%20%2203%22%20%7D%2C%0A%5D%3B%0A%3C%2Fscript%3E%0A%0A%3Ctemplate%3E%0A%20%20%3Cpro-checkbox%0A%20%20%20%20v-model%3D%22inputValue%22%0A%20%20%20%20%3Aoptions%3D%22options%22%0A%20%20%20%20%3Afield-props%3D%22%7B%20checkbox%3A%20%7B%20border%3A%20true%20%7D%20%7D%22%0A%20%20%2F%3E%0A%3C%2Ftemplate%3E"},{default:r(()=>[u(l,{modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=o=>e.value=o),options:n,"field-props":{checkbox:{border:!0}}},null,8,["modelValue"])]),_:1})}}}),O=i(T,[["__file","E:/frontend/pro-components-vue3/packages/examples/src/views/pro-field/pro-checkbox/ProCheckboxBorder.md"]]),w=f(" \u91CD\u65B0\u8BF7\u6C42 "),N=A({__name:"ProCheckboxRequest",setup(B){const e=s(["01"]),n=b({id:""}),a=s(!1),t=async({id:l})=>{a.value=!0;const o=await new Promise(C=>{setTimeout(()=>C([{label:"\u62BD\u70DF"+l,value:"01"},{label:"\u559D\u9152"+l,value:"02"},{label:"\u70EB\u5934"+l,value:"03"}]),1e3)});return a.value=!1,o};return(l,o)=>{const C=p("el-button"),_=p("pro-checkbox"),v=p("el-space");return c(),m(d,{title:"\u81EA\u52A8\u8BF7\u6C42\u9009\u9879\u6570\u636E",description:"params \u53D1\u751F\u6539\u53D8\u540E\uFF0C\u4F1A\u518D\u6B21\u89E6\u53D1 request",code:"%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20ref%2C%20reactive%20%7D%20from%20%22vue%22%3B%0Aimport%20type%20%7B%20OptionNodeType%20%7D%20from%20%22one-components-vue3%22%3B%0A%0Aconst%20inputValue%20%3D%20ref(%5B%2201%22%5D)%3B%0Atype%20ParamsType%20%3D%20%7B%20id%3A%20string%20%7D%3B%0Aconst%20params%20%3D%20reactive%3CParamsType%3E(%7B%20id%3A%20%22%22%20%7D)%3B%0Aconst%20loading%20%3D%20ref(false)%3B%0Aconst%20getOptions%20%3D%20async%20(%7B%20id%20%7D%3A%20ParamsType)%20%3D%3E%20%7B%0A%20%20loading.value%20%3D%20true%3B%0A%20%20const%20res%3A%20OptionNodeType%5B%5D%20%3D%20await%20new%20Promise((resolve)%20%3D%3E%20%7B%0A%20%20%20%20setTimeout(%0A%20%20%20%20%20%20()%20%3D%3E%0A%20%20%20%20%20%20%20%20resolve(%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%20label%3A%20%22%E6%8A%BD%E7%83%9F%22%20%2B%20id%2C%20value%3A%20%2201%22%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20label%3A%20%22%E5%96%9D%E9%85%92%22%20%2B%20id%2C%20value%3A%20%2202%22%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20label%3A%20%22%E7%83%AB%E5%A4%B4%22%20%2B%20id%2C%20value%3A%20%2203%22%20%7D%2C%0A%20%20%20%20%20%20%20%20%5D)%2C%0A%20%20%20%20%20%201000%0A%20%20%20%20)%3B%0A%20%20%7D)%3B%0A%20%20loading.value%20%3D%20false%3B%0A%20%20return%20res%3B%0A%7D%3B%0A%3C%2Fscript%3E%0A%0A%3Ctemplate%3E%0A%20%20%3Cel-space%3E%0A%20%20%20%20%3Cel-button%0A%20%20%20%20%20%20%3Aloading%3D%22loading%22%0A%20%20%20%20%20%20%40click%3D%22params.id%20%3D%20%60%24%7BMath.floor(Math.random()%20*%2010000)%7D%60%22%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%E9%87%8D%E6%96%B0%E8%AF%B7%E6%B1%82%0A%20%20%20%20%3C%2Fel-button%3E%0A%20%20%20%20%3Cpro-checkbox%20v-model%3D%22inputValue%22%20%3Aparams%3D%22params%22%20%3Arequest%3D%22getOptions%22%20%2F%3E%0A%20%20%3C%2Fel-space%3E%0A%3C%2Ftemplate%3E"},{default:r(()=>[u(v,null,{default:r(()=>[u(C,{loading:a.value,onClick:o[0]||(o[0]=E=>n.id=`${Math.floor(Math.random()*1e4)}`)},{default:r(()=>[w]),_:1},8,["loading"]),u(_,{modelValue:e.value,"onUpdate:modelValue":o[1]||(o[1]=E=>e.value=E),params:n,request:t},null,8,["modelValue","params"])]),_:1})]),_:1})}}}),M=i(N,[["__file","E:/frontend/pro-components-vue3/packages/examples/src/views/pro-field/pro-checkbox/ProCheckboxRequest.md"]]),$=A({__name:"Index",setup(B){return(e,n)=>(c(),x(k,null,[u(D(h)),u(D(g)),u(D(P)),u(D(O)),u(D(M))],64))}}),I=i($,[["__file","E:/frontend/pro-components-vue3/packages/examples/src/views/pro-field/pro-checkbox/Index.vue"]]);export{I as default};
