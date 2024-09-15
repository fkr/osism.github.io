"use strict";(self.webpackChunkosism=self.webpackChunkosism||[]).push([[5378],{9488:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>h});var s=r(5893),t=r(1151),i=r(4866),a=r(5162);const o={sidebar_label:"Ceph",sidebar_position:50},l="Ceph",c={id:"guides/deploy-guide/services/ceph",title:"Ceph",description:"In OSISM it is also possible to integrate and use existing Ceph clusters. It",source:"@site/docs/guides/deploy-guide/services/ceph.mdx",sourceDirName:"guides/deploy-guide/services",slug:"/guides/deploy-guide/services/ceph",permalink:"/de/docs/guides/deploy-guide/services/ceph",draft:!1,unlisted:!1,editUrl:"https://github.com/osism/osism.github.io/tree/main/docs/guides/deploy-guide/services/ceph.mdx",tags:[],version:"current",sidebarPosition:50,frontMatter:{sidebar_label:"Ceph",sidebar_position:50},sidebar:"tutorialSidebar",previous:{title:"Logging & Monitoring",permalink:"/de/docs/guides/deploy-guide/services/logging-monitoring"},next:{title:"Ceph via Rook (technical preview)",permalink:"/de/docs/guides/deploy-guide/services/rook"}},d={},h=[{value:"RGW service",id:"rgw-service",level:2},{value:"Avoiding service restarts",id:"avoiding-service-restarts",level:2},{value:"Throttling service restarts",id:"throttling-service-restarts",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"ceph",children:"Ceph"})}),"\n",(0,s.jsxs)(n.p,{children:["In OSISM it is also possible to integrate and use existing Ceph clusters. It\nis not necessary to deploy Ceph with OSISM. If Ceph is deployed with OSISM, it\nshould be noted that OSISM does not claim to provide all possible features of Ceph.\nCeph provided with OSISM is intended to provide the storage for Glance, Nova, Cinder\nand Manila. In a specific way that has been implemented by OSISM for years. It\nshould be checked in advance whether the way in OSISM the Ceph deployment and the\nprovided features are sufficient. If this is not the case, it is recommended to\ndeploy Ceph in a different way directly and independently of OSISM. For possible\nopen source projects, please refer to\n",(0,s.jsx)(n.a,{href:"https://docs.ceph.com/en/latest/cephadm/index.html",children:"cephadm"})," and\n",(0,s.jsx)(n.a,{href:"https://rook.io",children:"Rook"}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["Before starting the Ceph deployment, the configuration and preparation of the\nOSD devices must be completed. The steps that are required for this can be found in the\n",(0,s.jsx)(n.a,{href:"/de/docs/guides/configuration-guide/ceph#osd-devices",children:"Ceph Configuration Guide"}),"."]})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Deploy services."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Deploy ",(0,s.jsx)(n.a,{href:"https://docs.ceph.com/en/quincy/man/8/ceph-mon/",children:"ceph-mon"})," services"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"osism apply ceph-mons\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Deploy ceph-mgr services"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"osism apply ceph-mgrs\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Deploy ",(0,s.jsx)(n.a,{href:"https://docs.ceph.com/en/quincy/man/8/ceph-osd/",children:"ceph-osd"})," services"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"osism apply ceph-osds\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Generate pools and keys. This step is only necessary for OSISM >= 7.0.0."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"osism apply ceph-pools\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Deploy ceph-crash services"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"osism apply ceph-crash\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsx)(n.p,{children:"It's all done step by step here. It is also possible to do this in a single step.\nThis speeds up the entire process and avoids unnecessary restarts of individual\nservices."}),(0,s.jsxs)(i.Z,{children:[(0,s.jsxs)(a.Z,{value:"osism-7",label:"OSISM >= 7.0.0",children:[(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"osism apply ceph\n"})}),(0,s.jsx)(n.p,{children:"Generate pools and keys."}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"osism apply ceph-pools\n"})})]}),(0,s.jsx)(a.Z,{value:"osism-6",label:"OSISM < 7.0.0",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"osism apply ceph-base\n"})})})]})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Get ceph keys. This places the necessary keys in ",(0,s.jsx)(n.code,{children:"/opt/configuration"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"osism apply copy-ceph-keys\n"})}),"\n",(0,s.jsx)(n.p,{children:"After run, these keys must be permanently added to the configuration repository\nvia Git."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"environments/infrastructure/files/ceph/ceph.client.admin.keyring\nenvironments/kolla/files/overlays/gnocchi/ceph.client.gnocchi.keyring\nenvironments/kolla/files/overlays/nova/ceph.client.cinder.keyring\nenvironments/kolla/files/overlays/nova/ceph.client.nova.keyring\nenvironments/kolla/files/overlays/cinder/cinder-backup/ceph.client.cinder.keyring\nenvironments/kolla/files/overlays/cinder/cinder-backup/ceph.client.cinder-backup.keyring\nenvironments/kolla/files/overlays/cinder/cinder-volume/ceph.client.cinder.keyring\nenvironments/kolla/files/overlays/manila/ceph.client.manila.keyring\nenvironments/kolla/files/overlays/glance/ceph.client.glance.keyring\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If the ",(0,s.jsx)(n.code,{children:"osism apply copy-ceph-keys"})," fails because the keys are not found in the ",(0,s.jsx)(n.code,{children:"/share"}),"\ndirectory, this can be ignored. The keys of the predefined keys (e.g. for Manila) were\nthen not created as they are not used. If you only use Ceph and do not need the predefined\nkeys for OpenStack at all, you can also overwrite the ",(0,s.jsx)(n.code,{children:"ceph_kolla_keys"})," parameter to skip\nthese keys."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="environments/ceph/configuration.yml"',children:"ceph_kolla_keys: []\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"After the Ceph keys have been persisted in the configuration repository, the Ceph\nclient can be deployed."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"osism apply cephclient\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Enable and prepare the use of the Ceph dashboard."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"osism apply ceph-bootstrap-dashboard\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"rgw-service",children:"RGW service"}),"\n",(0,s.jsx)(n.p,{children:"Deployment of the Ceph RGW Service is optional. How the Ceph RGW service can be deployed\nand integrated into OpenStack is described here."}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsxs)(n.p,{children:["If an initial deployment is performed and Ceph RGW is not added to an existing deployment,\nsteps 4 and 5 are ",(0,s.jsx)(n.strong,{children:"not"})," required."]}),(0,s.jsxs)(n.p,{children:["Step 3 is then performed ",(0,s.jsx)(n.strong,{children:"later after"})," the OpenStack Keystone service has been deployed."]})]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/de/docs/guides/configuration-guide/ceph#rgw-service",children:"Configure the RGW service"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Apply role ",(0,s.jsx)(n.code,{children:"ceph-rgws"})," to deploy the Ceph RGW services."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"osism apply ceph-rgws\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Apply role ",(0,s.jsx)(n.code,{children:"kolla-ceph-rgw"})," to add the OpenStack endpoint.\nIf an initial deployment is performed and Ceph RGW is not added\nto an existing deployment run this step later after the OpenStack\nKeystone service has been deployed."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"osism apply kolla-ceph-rgw\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Apply role ",(0,s.jsx)(n.code,{children:"loadbalancer"})," to add the HAProxy backend and frontend."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"osism apply loadbalancer\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Apply role ",(0,s.jsx)(n.code,{children:"horizon"})," to enable the Swift dashboard."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"osism apply horizon\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"avoiding-service-restarts",children:"Avoiding service restarts"}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"Usable from OSISM 7.0.3 onwards."})}),"\n",(0,s.jsx)(n.p,{children:"If Ceph services are deployed sequentially, this can lead to unwanted service restarts.\nThis can also happen if, for example, new OSDs are added later or a new control node is\nadded."}),"\n",(0,s.jsx)(n.p,{children:"The Ceph RGW services are deployed here without restarting the Ceph OSD services."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"osism apply ceph-rgws -e ceph_handler_osds_restart=False\n"})}),"\n",(0,s.jsx)(n.p,{children:"The following parameters are available. Any number of parameters can be used with a single command."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"ceph_handler_crash_restart\nceph_handler_mdss_restart\nceph_handler_mgrs_restart\nceph_handler_mons_restart\nceph_handler_osds_restart\nceph_handler_rbdmirrors_restart\nceph_handler_rgws_restart\n"})}),"\n",(0,s.jsx)(n.h2,{id:"throttling-service-restarts",children:"Throttling service restarts"}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"Usable from OSISM 7.0.3 onwards."})}),"\n",(0,s.jsx)(n.p,{children:"Sometimes service restarts are required. For example, if the configuration has changed\nor if new OSDs have been added. It may be necessary and useful to only restart the\nservices on a specific number of nodes at a specific time."}),"\n",(0,s.jsxs)(n.p,{children:["Further information on throttling can be found in the\n",(0,s.jsx)(n.a,{href:"https://docs.ansible.com/ansible/latest/playbook_guide/playbooks_strategies.html#restricting-execution-with-throttle",children:"Ansible documentation"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"The Ceph OSD services are deployed here. If there is a restart required of other OSDs\nthat are already running, these restarts are executed on a maximum of 2 nodes at the\nsame time. The OSD services themselves on a node are always restarted one after the other\nand never all at the same time."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"osism apply ceph-osds -e ceph_handler_osds_restart_throttle=2\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If the nodes are to be processed one after the other, ",(0,s.jsx)(n.code,{children:"ceph_handler_osds_restart_throttle=1"}),"\ncan be used."]}),"\n",(0,s.jsx)(n.p,{children:"The following parameters are available. Any number of parameters can be used with a single command."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"ceph_handler_crash_restart_throttle\nceph_handler_mdss_restart_throttle\nceph_handler_mgrs_restart_throttle\nceph_handler_mons_restart_throttle\nceph_handler_osds_restart_throttle\nceph_handler_rbdmirrors_restart_throttle\nceph_handler_rgws_restart_throttle\n"})})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},5162:(e,n,r)=>{r.d(n,{Z:()=>a});r(7294);var s=r(6905);const t={tabItem:"tabItem_Ymn6"};var i=r(5893);function a(e){let{children:n,hidden:r,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,s.Z)(t.tabItem,a),hidden:r,children:n})}},4866:(e,n,r)=>{r.d(n,{Z:()=>_});var s=r(7294),t=r(6905),i=r(2466),a=r(6550),o=r(469),l=r(1980),c=r(7392),d=r(812);function h(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:r}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:r,attributes:s,default:t}}=e;return{value:n,label:r,attributes:s,default:t}}))}(r);return function(e){const n=(0,c.lx)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function u(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:r}=e;const t=(0,a.k6)(),i=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,l._X)(i),(0,s.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(t.location.search);n.set(i,e),t.replace({...t.location,search:n.toString()})}),[i,t])]}function f(e){const{defaultValue:n,queryString:r=!1,groupId:t}=e,i=p(e),[a,l]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!u({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=r.find((e=>e.default))??r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:i}))),[c,h]=m({queryString:r,groupId:t}),[f,x]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,i]=(0,d.Nk)(r);return[t,(0,s.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:t}),y=(()=>{const e=c??f;return u({value:e,tabValues:i})?e:null})();(0,o.Z)((()=>{y&&l(y)}),[y]);return{selectedValue:a,selectValue:(0,s.useCallback)((e=>{if(!u({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),x(e)}),[h,x,i]),tabValues:i}}var x=r(2389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=r(5893);function g(e){let{className:n,block:r,selectedValue:s,selectValue:a,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{const n=e.currentTarget,r=l.indexOf(n),t=o[r].value;t!==s&&(c(n),a(t))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;n=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;n=l[r]??l[l.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":r},n),children:o.map((e=>{let{value:n,label:r,attributes:i}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>l.push(e),onKeyDown:h,onClick:d,...i,className:(0,t.Z)("tabs__item",y.tabItem,i?.className,{"tabs__item--active":s===n}),children:r??n},n)}))})}function j(e){let{lazy:n,children:r,selectedValue:i}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===i));return e?(0,s.cloneElement)(e,{className:(0,t.Z)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function b(e){const n=f(e);return(0,v.jsxs)("div",{className:(0,t.Z)("tabs-container",y.tabList),children:[(0,v.jsx)(g,{...n,...e}),(0,v.jsx)(j,{...n,...e})]})}function _(e){const n=(0,x.Z)();return(0,v.jsx)(b,{...e,children:h(e.children)},String(n))}},1151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>a});var s=r(7294);const t={},i=s.createContext(t);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);