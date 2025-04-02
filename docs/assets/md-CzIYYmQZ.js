import{_ as D,I as g}from"./slidev/two-cols-header-Xu6t5MfW.js";import{b as d,o,w as l,g as s,B as i,e as k,m as h,v as y,x as C,C as e}from"./modules/vue-CN_MgJgD.js";import{u as c,f as A}from"./slidev/context-D2X1yjGM.js";import"./modules/unplugin-icons-DEQuOA20.js";import"./index-lRGSiBie.js";import"./modules/shiki-CbJNJzfY.js";const x={__name:"thread_local.md__slidev_7",setup(u){const{$clicksContext:n,$frontmatter:r}=c();return n.setup(),(E,a)=>{const t=D;return o(),d(g,y(C(e(A)(e(r),6))),{left:l(p=>[k(t,h({},{ranges:[]}),{default:l(()=>a[0]||(a[0]=[s("pre",{class:"shiki shiki-themes dark-plus light-plus slidev-code",style:{"--shiki-dark":"#D4D4D4","--shiki-light":"#000000","--shiki-dark-bg":"#1E1E1E","--shiki-light-bg":"#FFFFFF"}},[s("code",{class:"language-cpp"},[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#C586C0","--shiki-light":"#AF00DB"}},"#include"),s("span",{style:{"--shiki-dark":"#CE9178","--shiki-light":"#A31515"}}," <iostream>")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#6A9955","--shiki-light":"#008000"}},"// some library")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#569CD6","--shiki-light":"#0000FF"}},"thread_local"),s("span",{style:{"--shiki-dark":"#569CD6","--shiki-light":"#0000FF"}}," char"),s("span",{style:{"--shiki-dark":"#9CDCFE","--shiki-light":"#001080"}}," lastErrorMsg"),s("span",{style:{"--shiki-dark":"#D4D4D4","--shiki-light":"#000000"}},"["),s("span",{style:{"--shiki-dark":"#B5CEA8","--shiki-light":"#098658"}},"1024"),s("span",{style:{"--shiki-dark":"#D4D4D4","--shiki-light":"#000000"}},"];"),s("span",{style:{"--shiki-dark":"#6A9955","--shiki-light":"#008000"}}," // library internal variable")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#6A9955","--shiki-light":"#008000"}},"// library API")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#569CD6","--shiki-light":"#0000FF"}},"void"),s("span",{style:{"--shiki-dark":"#DCDCAA","--shiki-light":"#795E26"}}," apiCall"),s("span",{style:{"--shiki-dark":"#D4D4D4","--shiki-light":"#000000"}},"() { "),s("span",{style:{"--shiki-dark":"#DCDCAA","--shiki-light":"#795E26"}},"strcpy"),s("span",{style:{"--shiki-dark":"#D4D4D4","--shiki-light":"#000000"}},"(lastErrorMsg, "),s("span",{style:{"--shiki-dark":"#CE9178","--shiki-light":"#A31515"}},'"An error explanation"'),s("span",{style:{"--shiki-dark":"#D4D4D4","--shiki-light":"#000000"}},"); }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#569CD6","--shiki-light":"#0000FF"}},"const"),s("span",{style:{"--shiki-dark":"#569CD6","--shiki-light":"#0000FF"}}," char*"),s("span",{style:{"--shiki-dark":"#DCDCAA","--shiki-light":"#795E26"}}," getApiLastErrorMsg"),s("span",{style:{"--shiki-dark":"#D4D4D4","--shiki-light":"#000000"}},"() { "),s("span",{style:{"--shiki-dark":"#C586C0","--shiki-light":"#AF00DB"}},"return"),s("span",{style:{"--shiki-dark":"#D4D4D4","--shiki-light":"#000000"}}," lastErrorMsg; }")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#6A9955","--shiki-light":"#008000"}},"// user code that is using library API after main  ")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#569CD6","--shiki-light":"#0000FF"}},"struct"),s("span",{style:{"--shiki-dark":"#4EC9B0","--shiki-light":"#267F99"}}," ApiUsage"),s("span",{style:{"--shiki-dark":"#D4D4D4","--shiki-light":"#000000"}},"{")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DCDCAA","--shiki-light":"#795E26"}},"  ApiUsage"),s("span",{style:{"--shiki-dark":"#D4D4D4","--shiki-light":"#000000"}},"() { "),s("span",{style:{"--shiki-dark":"#DCDCAA","--shiki-light":"#795E26"}},"apiCall"),s("span",{style:{"--shiki-dark":"#D4D4D4","--shiki-light":"#000000"}},"(); }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DCDCAA","--shiki-light":"#795E26"}},"  ~ApiUsage"),s("span",{style:{"--shiki-dark":"#D4D4D4","--shiki-light":"#000000"}},"(){")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#4EC9B0","--shiki-light":"#267F99"}},"    std"),s("span",{style:{"--shiki-dark":"#D4D4D4","--shiki-light":"#000000"}},"::cout << "),s("span",{style:{"--shiki-dark":"#CE9178","--shiki-light":"#A31515"}},'"Last error msg: "'),s("span",{style:{"--shiki-dark":"#D4D4D4","--shiki-light":"#000000"}}," << "),s("span",{style:{"--shiki-dark":"#DCDCAA","--shiki-light":"#795E26"}},"getApiLastErrorMsg"),s("span",{style:{"--shiki-dark":"#D4D4D4","--shiki-light":"#000000"}},"() << "),s("span",{style:{"--shiki-dark":"#CE9178","--shiki-light":"#A31515"}},'"'),s("span",{style:{"--shiki-dark":"#D7BA7D","--shiki-light":"#EE0000"}},"\\n"),s("span",{style:{"--shiki-dark":"#CE9178","--shiki-light":"#A31515"}},'"'),s("span",{style:{"--shiki-dark":"#D4D4D4","--shiki-light":"#000000"}},";")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#D4D4D4","--shiki-light":"#000000"}},"  }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#D4D4D4","--shiki-light":"#000000"}},"};")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#6A9955","--shiki-light":"#008000"}},"// global variable. Ctor before main() and Dtor after main() ")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#D4D4D4","--shiki-light":"#000000"}},"ApiUsage apiUsageInstance;")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#569CD6","--shiki-light":"#0000FF"}},"int"),s("span",{style:{"--shiki-dark":"#DCDCAA","--shiki-light":"#795E26"}}," main"),s("span",{style:{"--shiki-dark":"#D4D4D4","--shiki-light":"#000000"}},"(){ "),s("span",{style:{"--shiki-dark":"#C586C0","--shiki-light":"#AF00DB"}},"return"),s("span",{style:{"--shiki-dark":"#B5CEA8","--shiki-light":"#098658"}}," 0"),s("span",{style:{"--shiki-dark":"#D4D4D4","--shiki-light":"#000000"}},"; }")])])],-1)])),_:1},16)]),right:l(p=>[k(t,h({},{ranges:[]}),{default:l(()=>a[1]||(a[1]=[s("pre",{class:"shiki shiki-themes dark-plus light-plus slidev-code",style:{"--shiki-dark":"#D4D4D4","--shiki-light":"#000000","--shiki-dark-bg":"#1E1E1E","--shiki-light-bg":"#FFFFFF"}},[s("code",{class:"language-console"},[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#D4D4D4","--shiki-light":"#000000"}},"Last error msg: An error explanation")])])],-1)])),_:1},16),a[2]||(a[2]=s("p",null,"lastErrorMsg is POD so it has no Dtor",-1))]),default:l(()=>[a[3]||(a[3]=s("h1",null,"Class Destruction : WA-0 (POD)",-1)),a[4]||(a[4]=s("h4",null,[i("if possible - use Plain Old Data structures. E.g. "),s("code",null,"string"),i(" becomes "),s("code",null,"char[]"),i(".")],-1)),a[5]||(a[5]=s("h4",null,"Applicable if a resource management is not required.",-1))]),_:1},16)}}};export{x as default};
