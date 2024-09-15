"use strict";(self.webpackChunkosism=self.webpackChunkosism||[]).push([[7],{8121:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>d,contentTitle:()=>t,default:()=>l,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var n=r(5893),o=r(1151);const i={sidebar_label:"User"},t="User",a={id:"guides/configuration-guide/commons/user",title:"User",description:"With the osism.commons.user role, it is possible to manage additional",source:"@site/docs/guides/configuration-guide/commons/user.md",sourceDirName:"guides/configuration-guide/commons",slug:"/guides/configuration-guide/commons/user",permalink:"/de/docs/guides/configuration-guide/commons/user",draft:!1,unlisted:!1,editUrl:"https://github.com/osism/osism.github.io/tree/main/docs/guides/configuration-guide/commons/user.md",tags:[],version:"current",frontMatter:{sidebar_label:"User"},sidebar:"tutorialSidebar",previous:{title:"Timezone",permalink:"/de/docs/guides/configuration-guide/commons/timezone"},next:{title:"Services",permalink:"/de/docs/guides/configuration-guide/services/"}},d={},u=[];function c(e){const s={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"user",children:"User"})}),"\n",(0,n.jsxs)(s.p,{children:["With the ",(0,n.jsx)(s.code,{children:"osism.commons.user"})," role, it is possible to manage additional\nuser accounts on a node."]}),"\n",(0,n.jsxs)(s.p,{children:["Users are managed via the ",(0,n.jsx)(s.code,{children:"user_list"})," parameter."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-yaml",children:"user_list:\n  - name: testing\n    key: ssh-rsa AAAAB...\n    # default for groups is user_groups\n    # groups:\n    groups:\n      - docker\n    # default is a group with the name of the user\n    # or user_primary_group if set\n    # primary_group: dragon\n  - name: testing_github\n    key: https://github.com/testing.keys\n"})}),"\n",(0,n.jsxs)(s.p,{children:["By default a new group with the name of a user will be created and assigned as\nprimary group. It is possible to use an already existing group as primary group\nfor all users. Can be overwritten with the user specific ",(0,n.jsx)(s.code,{children:"primary_group"})," key."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-yaml",children:"user_primary_group: dragon\n"})}),"\n",(0,n.jsxs)(s.p,{children:["If all users should be added to other specific groups by default, the ",(0,n.jsx)(s.code,{children:"user_groups"}),"\nparameter can be used. Can be overwritten with the user specific ",(0,n.jsx)(s.code,{children:"groups"})," key."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-yaml",children:"user_groups:\n  - docker\n"})}),"\n",(0,n.jsxs)(s.p,{children:["If users should be deleted, they are added to the ",(0,n.jsx)(s.code,{children:"user_delete"})," list."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-yaml",children:"user_delete:\n  - user_to_delete_1\n  - user_to_delete_2\n"})})]})}function l(e={}){const{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1151:(e,s,r)=>{r.d(s,{Z:()=>a,a:()=>t});var n=r(7294);const o={},i=n.createContext(o);function t(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);