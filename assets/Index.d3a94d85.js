import{d as B,r as o,h as F,a as p,c as C,w as a,o as c,b as i,e as t,E as D,_ as d,u as v}from"./index.fc8e6b4d.js";import{D as h}from"./DemoContainer.a268d056.js";const g=t("\u59D3\u540D\u63D2\u69FD"),w=t("Http://"),x=t(".com"),T=B({__name:"ProQueryFilterBasic",setup(E){o(["01"]);const l=[{label:"\u62BD\u70DF",value:"01"},{label:"\u559D\u9152",value:"02"},{label:"\u70EB\u5934",value:"03"}],n=[{label:"\u901B\u8857",value:"04"},{label:"\u5305\u5305",value:"05"},{label:"\u5316\u5986",value:"06"}],u=o({}),b=o([{prop:"name",labelSlotName:"nameLabel",defaultSlotName:"nameDefault",minWidth:120},{prop:"money",label:"\u4F59\u989D",fieldProps:{type:"number",min:1e3,max:2e4},formProps:{rules:{type:"number",required:!0,message:"\u8BF7\u8F93\u5165\u4F59\u989D\uFF01"}},width:160},{prop:"gender",label:"\u6027\u522B",options:[{label:"\u7537",value:"male"},{label:"\u5973",value:"female"}],valueType:"radio",width:160},{prop:"hobby",label:"\u7231\u597D",dependencies:["gender"],request:({gender:e})=>e==="male"?l:n,valueType:"checkbox",width:240},{prop:"major",label:"\u4E13\u4E1A",options:l,fieldProps:{clearable:!1},hideInForm:e=>e.gender==="female",valueType:"select",width:140}]),f=async e=>{console.log("\u8868\u5355\u503C:",e);try{await new Promise((r,A)=>setTimeout(()=>{Math.random()>.5?r(""):A()},1e3)),D({message:e.name+"\u4FDD\u5B58\u6210\u529F",type:"success"})}catch{return D({message:e.name+"\u4FDD\u5B58\u5931\u8D25",type:"error"}),Promise.reject()}};return F(()=>{setTimeout(()=>{u.value={name:"\u5F20\u4E09",money:1e4,gender:"male",hobby:["01","02"],major:"03"}},1e3)}),(e,r)=>{const A=p("pro-input"),_=p("pro-query-filter");return c(),C(h,{title:"\u57FA\u672C\u4F7F\u7528",description:"",code:"%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20ref%2C%20onMounted%20%7D%20from%20%22vue%22%3B%0Aimport%20%7B%20ElMessage%20%7D%20from%20%22element-plus%22%3B%0Aimport%20type%20%7B%20OptionNodeType%20%7D%20from%20%22one-components-vue3%22%3B%0A%0Aconst%20inputValue%20%3D%20ref(%5B%2201%22%5D)%3B%0Aconst%20maleOptions%3A%20OptionNodeType%5B%5D%20%3D%20%5B%0A%20%20%7B%20label%3A%20%22%E6%8A%BD%E7%83%9F%22%2C%20value%3A%20%2201%22%20%7D%2C%0A%20%20%7B%20label%3A%20%22%E5%96%9D%E9%85%92%22%2C%20value%3A%20%2202%22%20%7D%2C%0A%20%20%7B%20label%3A%20%22%E7%83%AB%E5%A4%B4%22%2C%20value%3A%20%2203%22%20%7D%2C%0A%5D%3B%0Aconst%20femaleOptions%3A%20OptionNodeType%5B%5D%20%3D%20%5B%0A%20%20%7B%20label%3A%20%22%E9%80%9B%E8%A1%97%22%2C%20value%3A%20%2204%22%20%7D%2C%0A%20%20%7B%20label%3A%20%22%E5%8C%85%E5%8C%85%22%2C%20value%3A%20%2205%22%20%7D%2C%0A%20%20%7B%20label%3A%20%22%E5%8C%96%E5%A6%86%22%2C%20value%3A%20%2206%22%20%7D%2C%0A%5D%3B%0Aconst%20initialValues%20%3D%20ref(%7B%7D)%3B%0Aconst%20columns%20%3D%20ref(%5B%0A%20%20%7B%0A%20%20%20%20prop%3A%20%22name%22%2C%0A%20%20%20%20labelSlotName%3A%20%22nameLabel%22%2C%0A%20%20%20%20defaultSlotName%3A%20%22nameDefault%22%2C%0A%20%20%20%20minWidth%3A%20120%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20prop%3A%20%22money%22%2C%0A%20%20%20%20label%3A%20%22%E4%BD%99%E9%A2%9D%22%2C%0A%20%20%20%20fieldProps%3A%20%7B%20type%3A%20%22number%22%2C%20min%3A%201000%2C%20max%3A%2020000%20%7D%2C%0A%20%20%20%20formProps%3A%20%7B%0A%20%20%20%20%20%20rules%3A%20%7B%20type%3A%20%22number%22%2C%20required%3A%20true%2C%20message%3A%20%22%E8%AF%B7%E8%BE%93%E5%85%A5%E4%BD%99%E9%A2%9D%EF%BC%81%22%20%7D%2C%0A%20%20%20%20%7D%2C%0A%20%20%20%20width%3A%20160%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20prop%3A%20%22gender%22%2C%0A%20%20%20%20label%3A%20%22%E6%80%A7%E5%88%AB%22%2C%0A%20%20%20%20options%3A%20%5B%0A%20%20%20%20%20%20%7B%20label%3A%20%22%E7%94%B7%22%2C%20value%3A%20%22male%22%20%7D%2C%0A%20%20%20%20%20%20%7B%20label%3A%20%22%E5%A5%B3%22%2C%20value%3A%20%22female%22%20%7D%2C%0A%20%20%20%20%5D%2C%0A%20%20%20%20valueType%3A%20%22radio%22%2C%0A%20%20%20%20width%3A%20160%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20prop%3A%20%22hobby%22%2C%0A%20%20%20%20label%3A%20%22%E7%88%B1%E5%A5%BD%22%2C%0A%20%20%20%20dependencies%3A%20%5B%22gender%22%5D%2C%0A%20%20%20%20request%3A%20(%7B%20gender%20%7D)%20%3D%3E%20(gender%20%3D%3D%3D%20%22male%22%20%3F%20maleOptions%20%3A%20femaleOptions)%2C%0A%20%20%20%20valueType%3A%20%22checkbox%22%2C%0A%20%20%20%20width%3A%20240%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20prop%3A%20%22major%22%2C%0A%20%20%20%20label%3A%20%22%E4%B8%93%E4%B8%9A%22%2C%0A%20%20%20%20options%3A%20maleOptions%2C%0A%20%20%20%20fieldProps%3A%20%7B%20clearable%3A%20false%20%7D%2C%0A%20%20%20%20hideInForm%3A%20(model)%20%3D%3E%20model.gender%20%3D%3D%3D%20%22female%22%2C%0A%20%20%20%20valueType%3A%20%22select%22%2C%0A%20%20%20%20width%3A%20140%2C%0A%20%20%7D%2C%0A%5D)%3B%0Aconst%20handleSubmit%20%3D%20async%20(model)%20%3D%3E%20%7B%0A%20%20console.log(%22%E8%A1%A8%E5%8D%95%E5%80%BC%3A%22%2C%20model)%3B%0A%20%20try%20%7B%0A%20%20%20%20await%20new%20Promise((resolve%2C%20reject)%20%3D%3E%0A%20%20%20%20%20%20setTimeout(()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20Math.random()%20%3E%200.5%20%3F%20resolve(%22%22)%20%3A%20reject()%3B%0A%20%20%20%20%20%20%7D%2C%201000)%0A%20%20%20%20)%3B%0A%20%20%20%20ElMessage(%7B%20message%3A%20model.name%20%2B%20%22%E4%BF%9D%E5%AD%98%E6%88%90%E5%8A%9F%22%2C%20type%3A%20%22success%22%20%7D)%3B%0A%20%20%7D%20catch%20%7B%0A%20%20%20%20ElMessage(%7B%20message%3A%20model.name%20%2B%20%22%E4%BF%9D%E5%AD%98%E5%A4%B1%E8%B4%A5%22%2C%20type%3A%20%22error%22%20%7D)%3B%0A%20%20%20%20return%20Promise.reject()%3B%0A%20%20%7D%0A%7D%3B%0AonMounted(()%20%3D%3E%20%7B%0A%20%20setTimeout(()%20%3D%3E%20%7B%0A%20%20%20%20initialValues.value%20%3D%20%7B%0A%20%20%20%20%20%20name%3A%20%22%E5%BC%A0%E4%B8%89%22%2C%0A%20%20%20%20%20%20money%3A%2010000%2C%0A%20%20%20%20%20%20gender%3A%20%22male%22%2C%0A%20%20%20%20%20%20hobby%3A%20%5B%2201%22%2C%20%2202%22%5D%2C%0A%20%20%20%20%20%20major%3A%20%2203%22%2C%0A%20%20%20%20%7D%3B%0A%20%20%7D%2C%201000)%3B%0A%7D)%3B%0A%3C%2Fscript%3E%0A%0A%3Ctemplate%3E%0A%20%20%3Cpro-query-filter%0A%20%20%20%20%3Acolumns%3D%22columns%22%0A%20%20%20%20%3AinitialValues%3D%22initialValues%22%0A%20%20%20%20%3AonSubmit%3D%22handleSubmit%22%0A%20%20%3E%0A%20%20%20%20%3Ctemplate%20%23nameLabel%3E%E5%A7%93%E5%90%8D%E6%8F%92%E6%A7%BD%3C%2Ftemplate%3E%0A%20%20%20%20%3Ctemplate%20%23nameDefault%3D%22%7B%20model%2C%20prop%20%7D%22%3E%0A%20%20%20%20%20%20%3Cpro-input%20v-model%3D%22model%5Bprop%5D%22%3E%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23prepend%3EHttp%3A%2F%2F%3C%2Ftemplate%3E%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23append%3E.com%3C%2Ftemplate%3E%0A%20%20%20%20%20%20%3C%2Fpro-input%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%3C%2Fpro-query-filter%3E%0A%3C%2Ftemplate%3E"},{default:a(()=>[i(_,{columns:b.value,initialValues:u.value,onSubmit:f},{nameLabel:a(()=>[g]),nameDefault:a(({model:s,prop:m})=>[i(A,{modelValue:s[m],"onUpdate:modelValue":y=>s[m]=y},{prepend:a(()=>[w]),append:a(()=>[x]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:1},8,["columns","initialValues"])]),_:1})}}}),V=d(T,[["__file","E:/frontend/pro-components-vue3/packages/examples/src/views/pro-form/pro-query-filter/ProQueryFilterBasic.md"]]),P=B({__name:"Index",setup(E){return(l,n)=>(c(),C(v(V)))}}),O=d(P,[["__file","E:/frontend/pro-components-vue3/packages/examples/src/views/pro-form/pro-query-filter/Index.vue"]]);export{O as default};
