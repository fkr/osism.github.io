"use strict";(self.webpackChunkosism=self.webpackChunkosism||[]).push([[6537],{347:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>l});var r=i(5893),o=i(1151);const t={sidebar_label:"Inventory",sidebar_position:10},s="Inventory",a={id:"guides/configuration-guide/inventory",title:"Inventory",description:"The inventory used for the environment is located in the inventory directory.",source:"@site/docs/guides/configuration-guide/inventory.md",sourceDirName:"guides/configuration-guide",slug:"/guides/configuration-guide/inventory",permalink:"/docs/guides/configuration-guide/inventory",draft:!1,unlisted:!1,editUrl:"https://github.com/osism/osism.github.io/tree/main/docs/guides/configuration-guide/inventory.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_label:"Inventory",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Configuration repository",permalink:"/docs/guides/configuration-guide/configuration-repository"},next:{title:"Manager",permalink:"/docs/guides/configuration-guide/manager"}},d={},l=[{value:"Manager",id:"manager",level:2},{value:"Reconciler",id:"reconciler",level:2},{value:"Host Vars",id:"host-vars",level:2},{value:"Group Vars",id:"group-vars",level:2},{value:"Define variable for all nodes",id:"define-variable-for-all-nodes",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",p:"p",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"inventory",children:"Inventory"})}),"\n",(0,r.jsxs)(n.p,{children:["The inventory used for the environment is located in the ",(0,r.jsx)(n.code,{children:"inventory"})," directory."]}),"\n",(0,r.jsxs)(n.p,{children:["How an inventory works is described in detail in the ",(0,r.jsx)(n.a,{href:"https://docs.ansible.com/ansible/latest/inventory_guide/intro_inventory.html",children:"Ansible documentation"}),".\nIn this chapter, we only deal with special features in the context of OSISM."]}),"\n",(0,r.jsx)(n.h2,{id:"manager",children:"Manager"}),"\n",(0,r.jsxs)(n.p,{children:["The manager has his own inventory which is used exclusively for the seed phase of the manager.\nIt is located in the directory ",(0,r.jsx)(n.code,{children:"environments/manager"}),". There is a ",(0,r.jsx)(n.code,{children:"hosts"})," file with only the\nmanager node in it."]}),"\n",(0,r.jsx)(n.h2,{id:"reconciler",children:"Reconciler"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Inventory Reconciler",src:i(7305).Z+"",width:"1366",height:"768"})}),"\n",(0,r.jsx)(n.h2,{id:"host-vars",children:"Host Vars"}),"\n",(0,r.jsx)(n.h2,{id:"group-vars",children:"Group Vars"}),"\n",(0,r.jsx)(n.h3,{id:"define-variable-for-all-nodes",children:"Define variable for all nodes"}),"\n",(0,r.jsxs)(n.p,{children:["The Ansible group ",(0,r.jsx)(n.code,{children:"all"})," is specifically used internally by OSISM, is reserved and is not supported\nfor additional variables. When variables are added in the configuration repository for the all group,\nthey are ignored. In OSISM the group ",(0,r.jsx)(n.code,{children:"generic"})," can be used to store variables for all nodes."]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},7305:(e,n,i)=>{i.d(n,{Z:()=>r});const r=i.p+"assets/images/inventory-reconciler-acd822767003069a8935e016081383a5.png"},1151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>s});var r=i(7294);const o={},t=r.createContext(o);function s(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);