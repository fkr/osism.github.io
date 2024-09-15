"use strict";(self.webpackChunkosism=self.webpackChunkosism||[]).push([[6330],{7752:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var i=s(5893),r=s(1151);const o={sidebar_label:"OpenStack",sidebar_position:60},t="OpenStack",c={id:"guides/deploy-guide/services/openstack",title:"OpenStack",description:"Common issues with deploying OpenStack services are documented in the",source:"@site/docs/guides/deploy-guide/services/openstack.md",sourceDirName:"guides/deploy-guide/services",slug:"/guides/deploy-guide/services/openstack",permalink:"/docs/guides/deploy-guide/services/openstack",draft:!1,unlisted:!1,editUrl:"https://github.com/osism/osism.github.io/tree/main/docs/guides/deploy-guide/services/openstack.md",tags:[],version:"current",sidebarPosition:60,frontMatter:{sidebar_label:"OpenStack",sidebar_position:60},sidebar:"tutorialSidebar",previous:{title:"Ceph via Rook (technical preview)",permalink:"/docs/guides/deploy-guide/services/rook"},next:{title:"Examples",permalink:"/docs/guides/deploy-guide/examples/"}},a={},l=[];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"openstack",children:"OpenStack"})}),"\n",(0,i.jsxs)(n.p,{children:["Common issues with deploying OpenStack services are documented in the\n",(0,i.jsx)(n.a,{href:"/docs/guides/troubleshooting-guide/openstack",children:"OpenStack Troubleshooting Guide"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["An OpenStack deployment contains a number of components providing APIs to access infrastructure resources.\nThe ",(0,i.jsx)(n.a,{href:"https://www.openstack.org/software/project-navigator/openstack-components#openstack-services",children:"OpenStack Components"}),"\npage lists the various services that can be deployed to provide such resources to cloud end users.\nUnfortunately, not all of the OpenStack projects listed there are still active.\nNot all of the services listed there are supported by OSISM."]})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"OpenStack client"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"osism apply openstackclient\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Keystone"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"osism apply -a pull keystone\nosism apply keystone\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Glance"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"osism apply -a pull glance\nosism apply glance\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Designate"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"osism apply -a pull designate\nosism apply designate\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Placement"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"osism apply -a pull placement\nosism apply placement\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Cinder"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"osism apply -a pull cinder\nosism apply cinder\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Neutron"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"osism apply -a pull neutron\nosism apply neutron\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Nova"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"osism apply -a pull nova\nosism apply nova\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Octavia"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"osism apply octavia-certificates\nosism apply copy-octavia-certificates\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"osism apply -a pull octavia\nosism apply octavia\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Optional: Manage amphora image"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"This step is only necessary if the Amphora Driver is used. If OVN is used as the driver,\nthis step is not necessary."}),"\n",(0,i.jsxs)(n.p,{children:["We provide regularly updated images for Octavia in\n",(0,i.jsx)(n.a,{href:"https://github.com/osism/openstack-octavia-amphora-image",children:"osism/openstack-octavia/amphora-image"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Configure API Endpoint"}),"\n",(0,i.jsxs)(n.p,{children:["For the command to be usable, a cloud profile for octavia must currently be added in the\nclouds.yml file of the OpenStack environment. The ",(0,i.jsx)(n.code,{children:"auth_url"})," is changed accordingly."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title="environments/openstack/clouds.yml"',children:"clouds:\n  [...]\n  octavia:\n    auth:\n      username: octavia\n      project_name: service\n      auth_url: https://api.testbed.osism.xyz:5000/v3\n      project_domain_name: default\n      user_domain_name: default\n    cacert: /etc/ssl/certs/ca-certificates.crt\n    identity_api_version: 3\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Configure the secret"}),"\n",(0,i.jsxs)(n.p,{children:["The secret is added to the secure.yml file. The password is set in the parameter\n",(0,i.jsx)(n.code,{children:"octavia_keystone_password"})," in the file ",(0,i.jsx)(n.code,{children:"environments/kolla/secrets.yml"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Get the secret with"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"make ansible_vault_show FILE=environments/kolla/secrets.yml |grep octavia_keystone_password\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title="environments/openstack/secure.yml"',children:"---\nclouds:\n  [...]\n  octavia:\n    auth:\n      password: VALUE_OF_octavia_keystone_password\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Upload the correct and current image depending on the current Openstack release:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"osism manage image octavia\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"11",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Horizon"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"osism apply -a pull horizon\nosism apply horizon\n"})}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>t});var i=s(7294);const r={},o=i.createContext(r);function t(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);