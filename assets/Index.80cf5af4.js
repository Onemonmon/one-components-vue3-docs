import{d as A,r as a,a as u,c as B,w as l,o as s,b as e,_ as i,f as v,u as C,F}from"./index.702722e5.js";import{D as f}from"./DemoContainer.e79ff2ce.js";const x=A({__name:"ProTextBasic",setup(c){const t=a("\u6211\u662F\u4E00\u4E2A\u7C89\u5237\u5320"),o=a(["\u6211\u662F\u4E00\u4E2A\u7C89\u5237\u5320","\u7C89\u5237\u672C\u9886\u5F3A"]);return(p,n)=>{const r=u("pro-text");return s(),B(f,{title:"\u57FA\u672C\u4F7F\u7528",description:"",code:"%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20%22vue%22%3B%0A%0Aconst%20inputValue1%20%3D%20ref(%22%E6%88%91%E6%98%AF%E4%B8%80%E4%B8%AA%E7%B2%89%E5%88%B7%E5%8C%A0%22)%3B%0Aconst%20inputValue2%20%3D%20ref(%5B%22%E6%88%91%E6%98%AF%E4%B8%80%E4%B8%AA%E7%B2%89%E5%88%B7%E5%8C%A0%22%2C%20%22%E7%B2%89%E5%88%B7%E6%9C%AC%E9%A2%86%E5%BC%BA%22%5D)%3B%0A%3C%2Fscript%3E%0A%0A%3Ctemplate%3E%0A%20%20%3Cpro-text%20%3Avalue%3D%22inputValue1%22%20%2F%3E%0A%20%20%3Cpro-text%20%3Avalue%3D%22inputValue2%22%20%3AformatConfig%3D%22%7B%20textSpacer%3A%20'%2C'%20%7D%22%20%2F%3E%0A%3C%2Ftemplate%3E"},{default:l(()=>[e(r,{value:t.value},null,8,["value"]),e(r,{value:o.value,formatConfig:{textSpacer:","}},null,8,["value"])]),_:1})}}}),g=i(x,[["__file","E:/frontend/pro-components-vue3/packages/examples/src/views/pro-field/pro-text/ProTextBasic.md"]]),V=A({__name:"ProTextDot",setup(c){const t=a(["\u6211\u662F\u4E00\u4E2A\u7C89\u5237\u5320","\u7C89\u5237\u672C\u9886\u5F3A"]);return(o,p)=>{const n=u("pro-text");return s(),B(f,{title:"\u5706\u70B9\u5C55\u793A",description:"",code:"%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20%22vue%22%3B%0A%0Aconst%20inputValue%20%3D%20ref(%5B%22%E6%88%91%E6%98%AF%E4%B8%80%E4%B8%AA%E7%B2%89%E5%88%B7%E5%8C%A0%22%2C%20%22%E7%B2%89%E5%88%B7%E6%9C%AC%E9%A2%86%E5%BC%BA%22%5D)%3B%0A%3C%2Fscript%3E%0A%0A%3Ctemplate%3E%0A%20%20%3Cpro-text%20%3Avalue%3D%22inputValue%22%20%3AformatConfig%3D%22%7B%20dot%3A%20true%20%7D%22%20%2F%3E%0A%3C%2Ftemplate%3E"},{default:l(()=>[e(n,{value:t.value,formatConfig:{dot:!0}},null,8,["value"])]),_:1})}}}),y=i(V,[["__file","E:/frontend/pro-components-vue3/packages/examples/src/views/pro-field/pro-text/ProTextDot.md"]]),T=A({__name:"ProTextFormat",setup(c){const t=a("\u6211\u662F\u4E00\u4E2A\u7C89\u5237\u5320\uFF0C\u7C89\u5237\u672C\u9886\u5F3A"),o=a(13145201234e-4),p=a("digit"),n=[{label:"\u6570\u5B57",value:"digit"},{label:"\u767E\u5206\u6BD4",value:"percent"},{label:"\u91D1\u94B1",value:"money"}];return(r,E)=>{const m=u("pro-text"),_=u("pro-radio"),d=u("el-space");return s(),B(f,{title:"\u683C\u5F0F\u5316",description:"",code:"%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20FormatType%20%7D%20from%20%22%40%2Fcomponents%2Fshared%2Fsrc%2Ftype%22%3B%0Aimport%20%7B%20OptionNodeType%20%7D%20from%20%22one-components-vue3%22%3B%0Aimport%20%7B%20ref%20%7D%20from%20%22vue%22%3B%0A%0Aconst%20inputValue1%20%3D%20ref(%22%E6%88%91%E6%98%AF%E4%B8%80%E4%B8%AA%E7%B2%89%E5%88%B7%E5%8C%A0%EF%BC%8C%E7%B2%89%E5%88%B7%E6%9C%AC%E9%A2%86%E5%BC%BA%22)%3B%0Aconst%20inputValue2%20%3D%20ref(1314520.1234)%3B%0Aconst%20formatType%20%3D%20ref%3CFormatType%3E(%22digit%22)%3B%0Aconst%20options%3A%20OptionNodeType%5B%5D%20%3D%20%5B%0A%20%20%7B%0A%20%20%20%20label%3A%20%22%E6%95%B0%E5%AD%97%22%2C%0A%20%20%20%20value%3A%20%22digit%22%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20label%3A%20%22%E7%99%BE%E5%88%86%E6%AF%94%22%2C%0A%20%20%20%20value%3A%20%22percent%22%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20label%3A%20%22%E9%87%91%E9%92%B1%22%2C%0A%20%20%20%20value%3A%20%22money%22%2C%0A%20%20%7D%2C%0A%5D%3B%0A%3C%2Fscript%3E%0A%0A%3Ctemplate%3E%0A%20%20%3Cpro-text%0A%20%20%20%20%3Avalue%3D%22inputValue1%22%0A%20%20%20%20%3Astyle%3D%22%7B%20marginBottom%3A%20'10px'%20%7D%22%0A%20%20%20%20%3AformatConfig%3D%22%7B%20textFormat%3A%20(text)%20%3D%3E%20%60%E3%80%8A%E7%B2%89%E5%88%B7%E5%8C%A0%E3%80%8B%EF%BC%9A%24%7Btext%7D%60%20%7D%22%0A%20%20%2F%3E%0A%20%20%3Cel-space%3E%0A%20%20%20%20%3Cpro-radio%20v-model%3D%22formatType%22%20type%3D%22button%22%20%3Aoptions%3D%22options%22%20%2F%3E%0A%20%20%20%20%3Cpro-text%20%3Avalue%3D%22inputValue2%22%20%3AformatConfig%3D%22%7B%20formatType%20%7D%22%20%2F%3E%0A%20%20%3C%2Fel-space%3E%0A%3C%2Ftemplate%3E"},{default:l(()=>[e(m,{value:t.value,style:{marginBottom:"10px"},formatConfig:{textFormat:D=>`\u300A\u7C89\u5237\u5320\u300B\uFF1A${D}`}},null,8,["value","formatConfig"]),e(d,null,{default:l(()=>[e(_,{modelValue:p.value,"onUpdate:modelValue":E[0]||(E[0]=D=>p.value=D),type:"button",options:n},null,8,["modelValue"]),e(m,{value:o.value,formatConfig:{formatType:p.value}},null,8,["value","formatConfig"])]),_:1})]),_:1})}}}),b=i(T,[["__file","E:/frontend/pro-components-vue3/packages/examples/src/views/pro-field/pro-text/ProTextFormat.md"]]),k=A({__name:"ProTextOptions",setup(c){const t=a("02"),o=[{label:"\u62BD\u70DF",value:"01"},{label:"\u559D\u9152",value:"02"},{label:"\u70EB\u5934",value:"03"}];return(p,n)=>{const r=u("pro-radio"),E=u("pro-text"),m=u("el-space");return s(),B(f,{title:"\u4ECE options \u4E2D\u83B7\u53D6\u5C55\u793A\u6587\u672C",description:"",code:"%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20%22vue%22%3B%0Aimport%20type%20%7B%20OptionNodeType%20%7D%20from%20%22one-components-vue3%22%3B%0A%0Aconst%20inputValue%20%3D%20ref(%2202%22)%3B%0Aconst%20options%3A%20OptionNodeType%5B%5D%20%3D%20%5B%0A%20%20%7B%20label%3A%20%22%E6%8A%BD%E7%83%9F%22%2C%20value%3A%20%2201%22%20%7D%2C%0A%20%20%7B%20label%3A%20%22%E5%96%9D%E9%85%92%22%2C%20value%3A%20%2202%22%20%7D%2C%0A%20%20%7B%20label%3A%20%22%E7%83%AB%E5%A4%B4%22%2C%20value%3A%20%2203%22%20%7D%2C%0A%5D%3B%0A%3C%2Fscript%3E%0A%0A%3Ctemplate%3E%0A%20%20%3Cel-space%3E%0A%20%20%20%20%3Cpro-radio%20v-model%3D%22inputValue%22%20%3Aoptions%3D%22options%22%20%2F%3E%0A%20%20%20%20%3Cpro-text%0A%20%20%20%20%20%20%3Avalue%3D%22inputValue%22%0A%20%20%20%20%20%20%3Aoptions%3D%22options%22%0A%20%20%20%20%20%20%3AformatConfig%3D%22%7B%20color%3A%20'red'%20%7D%22%0A%20%20%20%20%2F%3E%0A%20%20%3C%2Fel-space%3E%0A%3C%2Ftemplate%3E"},{default:l(()=>[e(m,null,{default:l(()=>[e(r,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=_=>t.value=_),options:o},null,8,["modelValue"]),e(E,{value:t.value,options:o,formatConfig:{color:"red"}},null,8,["value"])]),_:1})]),_:1})}}}),P=i(k,[["__file","E:/frontend/pro-components-vue3/packages/examples/src/views/pro-field/pro-text/ProTextOptions.md"]]),w=A({__name:"Index",setup(c){return(t,o)=>(s(),v(F,null,[e(C(g)),e(C(y)),e(C(b)),e(C(P))],64))}}),$=i(w,[["__file","E:/frontend/pro-components-vue3/packages/examples/src/views/pro-field/pro-text/Index.vue"]]);export{$ as default};
