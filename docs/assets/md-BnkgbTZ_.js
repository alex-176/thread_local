import{d as i,z as d,f,o as c,g as n,j as p,k as m,b as _,w as h,v,x as g,C as a}from"./modules/vue-CN_MgJgD.js";import{u,f as k}from"./slidev/context-DAng1aKg.js";import"./index-DlMUDyXS.js";import"./modules/shiki-CbJNJzfY.js";function l(e){return e.startsWith("/")?"/thread_local"+e.slice(1):e}function x(e,r=!1){const t=e&&["#","rgb","hsl"].some(s=>e.indexOf(s)===0),o={background:t?e:void 0,color:e&&!t?"white":void 0,backgroundImage:t?void 0:e?r?`linear-gradient(#0005, #0008), url(${l(e)})`:`url("${l(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return o.background||delete o.background,o}const C={class:"my-auto w-full"},b=i({__name:"cover",props:{background:{default:"https://source.unsplash.com/collection/94734566/1920x1080"}},setup(e){u();const r=e,t=d(()=>x(r.background,!0));return(o,s)=>(c(),f("div",{class:"slidev-layout cover text-center",style:m(t.value)},[n("div",C,[p(o.$slots,"default")])],4))}}),z={__name:"thread_local.md__slidev_1",setup(e){const{$clicksContext:r,$frontmatter:t}=u();return r.setup(),(o,s)=>(c(),_(b,v(g(a(k)(a(t),0))),{default:h(()=>s[0]||(s[0]=[n("h1",null,"C++ thread_local",-1),n("br",null,null,-1),n("h2",null,"lifetime & performance",-1)])),_:1},16))}};export{z as default};
