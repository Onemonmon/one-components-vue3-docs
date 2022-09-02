import{d as a,r as s,a as c,c as d,w as l,o as i,b as o,_ as m,e as f,f as C,u as _,F}from"./index.702722e5.js";import{D as E}from"./DemoContainer.e79ff2ce.js";const B=a({__name:"ProInputBasic",setup(p){const e=s("\u6211\u662F\u4E00\u4E2A\u7C89\u5237\u5320");return(n,u)=>{const t=c("pro-input");return i(),d(E,{title:"\u57FA\u672C\u4F7F\u7528",description:"\u4E0E el-input \u7684\u63D2\u69FD\u4F7F\u7528\u76F8\u540C",code:"%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20%22vue%22%3B%0A%0Aconst%20inputValue%20%3D%20ref(%22%E6%88%91%E6%98%AF%E4%B8%80%E4%B8%AA%E7%B2%89%E5%88%B7%E5%8C%A0%22)%3B%0A%3C%2Fscript%3E%0A%0A%3Ctemplate%3E%0A%20%20%3Cpro-input%0A%20%20%20%20v-model%3D%22inputValue%22%0A%20%20%20%20%3Afield-props%3D%22%7B%20maxlength%3A%2010%2C%20showWordLimit%3A%20true%20%7D%22%0A%20%20%2F%3E%0A%3C%2Ftemplate%3E"},{default:l(()=>[o(t,{modelValue:e.value,"onUpdate:modelValue":u[0]||(u[0]=r=>e.value=r),"field-props":{maxlength:10,showWordLimit:!0}},null,8,["modelValue"])]),_:1})}}}),D=m(B,[["__file","E:/frontend/pro-components-vue3/packages/examples/src/views/pro-field/pro-input/ProInputBasic.md"]]),v=f("Http://"),x=f(".com"),V=a({__name:"ProInputSlot",setup(p){const e=s("\u6211\u662F\u4E00\u4E2A\u7C89\u5237\u5320");return(n,u)=>{const t=c("pro-input");return i(),d(E,{title:"\u63D2\u69FD",description:"",code:"%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20%22vue%22%3B%0A%0Aconst%20inputValue%20%3D%20ref(%22%E6%88%91%E6%98%AF%E4%B8%80%E4%B8%AA%E7%B2%89%E5%88%B7%E5%8C%A0%22)%3B%0A%3C%2Fscript%3E%0A%0A%3Ctemplate%3E%0A%20%20%3Cpro-input%20v-model%3D%22inputValue%22%3E%0A%20%20%20%20%3Ctemplate%20%23prepend%3EHttp%3A%2F%2F%3C%2Ftemplate%3E%0A%20%20%20%20%3Ctemplate%20%23append%3E.com%3C%2Ftemplate%3E%0A%20%20%3C%2Fpro-input%3E%0A%3C%2Ftemplate%3E"},{default:l(()=>[o(t,{modelValue:e.value,"onUpdate:modelValue":u[0]||(u[0]=r=>e.value=r)},{prepend:l(()=>[v]),append:l(()=>[x]),_:1},8,["modelValue"])]),_:1})}}}),b=m(V,[["__file","E:/frontend/pro-components-vue3/packages/examples/src/views/pro-field/pro-input/ProInputSlot.md"]]),y=a({__name:"ProInputType",setup(p){const e=s(1),n=s("\u6211\u662F\u4E00\u4E2A\u7C89\u5237\u5320");return(u,t)=>{const r=c("pro-input");return i(),d(E,{title:"\u8F93\u5165\u6846\u7C7B\u578B",description:"type=number \u65F6\u5C06\u4F1A\u4F7F\u7528 el-input-number \u7EC4\u4EF6\u4EE5\u53CA\u5BF9\u5E94\u7684 fieldProps",code:"%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20%22vue%22%3B%0A%0Aconst%20inputValue1%20%3D%20ref(1)%3B%0Aconst%20inputValue2%20%3D%20ref(%22%E6%88%91%E6%98%AF%E4%B8%80%E4%B8%AA%E7%B2%89%E5%88%B7%E5%8C%A0%22)%3B%0A%3C%2Fscript%3E%0A%0A%3Ctemplate%3E%0A%20%20%3Cpro-input%0A%20%20%20%20v-model%3D%22inputValue1%22%0A%20%20%20%20%3Astyle%3D%22%7B%20marginBottom%3A%20'10px'%20%7D%22%0A%20%20%20%20%3Afield-props%3D%22%7B%0A%20%20%20%20%20%20type%3A%20'number'%2C%0A%20%20%20%20%20%20max%3A%2010%2C%0A%20%20%20%20%20%20min%3A%201%2C%0A%20%20%20%20%20%20step%3A%200.5%2C%0A%20%20%20%20%20%20precision%3A%202%2C%0A%20%20%20%20%7D%22%0A%20%20%2F%3E%0A%20%20%3Cpro-input%0A%20%20%20%20v-model%3D%22inputValue2%22%0A%20%20%20%20%3Afield-props%3D%22%7B%0A%20%20%20%20%20%20type%3A%20'textarea'%2C%0A%20%20%20%20%20%20maxlength%3A%20100%2C%0A%20%20%20%20%20%20showWordLimit%3A%20true%2C%0A%20%20%20%20%20%20autosize%3A%20%7B%20minRows%3A%202%2C%20maxRows%3A%204%20%7D%2C%0A%20%20%20%20%7D%22%0A%20%20%2F%3E%0A%3C%2Ftemplate%3E"},{default:l(()=>[o(r,{modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=A=>e.value=A),style:{marginBottom:"10px"},"field-props":{type:"number",max:10,min:1,step:.5,precision:2}},null,8,["modelValue","field-props"]),o(r,{modelValue:n.value,"onUpdate:modelValue":t[1]||(t[1]=A=>n.value=A),"field-props":{type:"textarea",maxlength:100,showWordLimit:!0,autosize:{minRows:2,maxRows:4}}},null,8,["modelValue"])]),_:1})}}}),g=m(y,[["__file","E:/frontend/pro-components-vue3/packages/examples/src/views/pro-field/pro-input/ProInputType.md"]]),h=a({__name:"PropsDesc",props:{title:{type:String,required:!0},data:{type:Array,required:!0}},setup(p){const e=s([{prop:"prop",label:"\u5C5E\u6027",minWidth:100},{prop:"desc",label:"\u8BF4\u660E",minWidth:200},{prop:"type",label:"\u7C7B\u578B",minWidth:200},{prop:"choose",label:"\u53EF\u9009\u503C",minWidth:100},{prop:"default",label:"\u9ED8\u8BA4\u503C",minWidth:100}]);return(n,u)=>{const t=c("pro-table");return i(),d(t,{class:"props-table",title:p.title,columns:e.value,tableProps:{data:p.data},proQueryFilterProps:!1,paginationProps:!1,toolbarConfig:!1},null,8,["title","columns","tableProps"])}}});const P=m(h,[["__scopeId","data-v-77c32134"],["__file","E:/frontend/pro-components-vue3/packages/examples/src/components/PropsDesc.vue"]]),w=a({__name:"Index",setup(p){const e=[{prop:"modelValue",desc:"v-model\u53CC\u5411\u7ED1\u5B9A",type:"string | number",choose:"",default:""},{prop:"fieldProps",desc:"el-input \u548C el-input-number \u5185\u7F6E\u7684\u53C2\u6570",type:"object<ProInputFieldPropsType>",choose:"",default:`{
        type: "text",
        placeholder: "\u8BF7\u8F93\u5165",
        clearable: true,
        controlsPosition: "right"
      }`},{prop:"editable",desc:"\u662F\u5426\u53EF\u7F16\u8F91",type:"boolean",choose:"",default:"true"},{prop:"formatConfig",desc:"\u53EA\u8BFB\u6001\u7684\u914D\u7F6E\uFF0Ceditable = false \u65F6\u751F\u6548",type:"object<FormatConfigType>",choose:"",default:""}];return(n,u)=>(i(),C(F,null,[o(_(D)),o(_(b)),o(_(g)),o(P,{title:"ProInput \u53C2\u6570\u8BF4\u660E",data:e})],64))}}),k=m(w,[["__file","E:/frontend/pro-components-vue3/packages/examples/src/views/pro-field/pro-input/Index.vue"]]);export{k as default};
