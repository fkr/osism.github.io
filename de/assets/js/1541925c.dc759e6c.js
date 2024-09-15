"use strict";(self.webpackChunkosism=self.webpackChunkosism||[]).push([[8470],{1263:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>a,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var n=t(5893),s=t(1151);const o={sidebar_label:"Certificates"},c="Certificates",r={id:"guides/configuration-guide/commons/certificates",title:"Certificates",description:"With the osism.commons.certificates role, it is possible to add custom CA certificates",source:"@site/docs/guides/configuration-guide/commons/certificates.md",sourceDirName:"guides/configuration-guide/commons",slug:"/guides/configuration-guide/commons/certificates",permalink:"/de/docs/guides/configuration-guide/commons/certificates",draft:!1,unlisted:!1,editUrl:"https://github.com/osism/osism.github.io/tree/main/docs/guides/configuration-guide/commons/certificates.md",tags:[],version:"current",frontMatter:{sidebar_label:"Certificates"},sidebar:"tutorialSidebar",previous:{title:"Commons",permalink:"/de/docs/guides/configuration-guide/commons/"},next:{title:"Packages",permalink:"/de/docs/guides/configuration-guide/commons/packages"}},a={},d=[];function u(e){const i={a:"a",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.header,{children:(0,n.jsx)(i.h1,{id:"certificates",children:"Certificates"})}),"\n",(0,n.jsxs)(i.p,{children:["With the ",(0,n.jsx)(i.code,{children:"osism.commons.certificates"})," role, it is possible to add custom CA certificates\non a node. The parameter should be used in the ",(0,n.jsx)(i.code,{children:"environments/configuration.yml"})," file."]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-yaml",metastring:'title="environments/configuration.yml"',children:"certificates_ca:\n  - name: custom.crt\n    certificate: |\n      -----BEGIN CERTIFICATE-----\n      [...]\n      -----END CERTIFICATE-----\n"})}),"\n",(0,n.jsxs)(i.p,{children:["The role is part of the bootstrap of a node. CA certificates can be added at a later\npoint in time via ",(0,n.jsx)(i.code,{children:"osism apply certificates"})," on a node."]}),"\n",(0,n.jsxs)(i.p,{children:["Further details on the use of self-signed certificates can be found in chapter\n",(0,n.jsx)(i.a,{href:"../loadbalancer#self-signed-certificates",children:"Self-signed certificates"}),"\nof the configuration guide."]})]})}function m(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},1151:(e,i,t)=>{t.d(i,{Z:()=>r,a:()=>c});var n=t(7294);const s={},o=n.createContext(s);function c(e){const i=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),n.createElement(o.Provider,{value:i},e.children)}}}]);