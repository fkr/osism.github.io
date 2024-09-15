"use strict";(self.webpackChunkosism=self.webpackChunkosism||[]).push([[3188],{2716:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>t,metadata:()=>o,toc:()=>r});var s=i(5893),a=i(1151);const t={sidebar_label:"Packages"},c="Packages",o={id:"guides/configuration-guide/commons/packages",title:"Packages",description:"With the osism.commons.packages role, it is possible to add packages on a node",source:"@site/docs/guides/configuration-guide/commons/packages.md",sourceDirName:"guides/configuration-guide/commons",slug:"/guides/configuration-guide/commons/packages",permalink:"/de/docs/guides/configuration-guide/commons/packages",draft:!1,unlisted:!1,editUrl:"https://github.com/osism/osism.github.io/tree/main/docs/guides/configuration-guide/commons/packages.md",tags:[],version:"current",frontMatter:{sidebar_label:"Packages"},sidebar:"tutorialSidebar",previous:{title:"Certificates",permalink:"/de/docs/guides/configuration-guide/commons/certificates"},next:{title:"Resolvconf",permalink:"/de/docs/guides/configuration-guide/commons/resolvconf"}},d={},r=[{value:"Distribution specific packages",id:"distribution-specific-packages",level:2},{value:"Debian",id:"debian",level:3},{value:"CentOS",id:"centos",level:3},{value:"Upgrade of packages",id:"upgrade-of-packages",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"packages",children:"Packages"})}),"\n",(0,s.jsxs)(n.p,{children:["With the ",(0,s.jsx)(n.code,{children:"osism.commons.packages"})," role, it is possible to add packages on a node\nThe parameters should be used in the inventory or in the\n",(0,s.jsx)(n.code,{children:"environments/configuration.yml"})," file."]}),"\n",(0,s.jsxs)(n.p,{children:["The role is applied during the bootstrap. The role can be applied manually using\n",(0,s.jsx)(n.code,{children:"osism apply packages"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"The following packages are installed by default."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"required_packages_default:\n  - curl\n  - dmidecode\n  - ethtool\n  - iotop\n  - jq\n  - lsscsi\n  - ltrace\n  - mtr\n  - nvme-cli\n  - pciutils\n  - rsyslog\n  - socat\n  - sysstat\n  - tmux\n  - tree\n  - whois\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Additional packages can be added via the ",(0,s.jsx)(n.code,{children:"required_packages_extra"})," parameter."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"required_packages_extra: []\n"})}),"\n",(0,s.jsx)(n.h2,{id:"distribution-specific-packages",children:"Distribution specific packages"}),"\n",(0,s.jsx)(n.h3,{id:"debian",children:"Debian"}),"\n",(0,s.jsxs)(n.p,{children:["With Debian, the packages listed in ",(0,s.jsx)(n.code,{children:"required_packages_distribution"})," are installed by default."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"required_packages_distribution:\n  - command-not-found\n  - debconf\n  - debsums\n  - htop\n  - iftop\n  - iperf\n  - multitail\n  - ncdu\n  - pv\n  - python-is-python3\n  - selinux-utils\n  - ssh\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"apt_cache_valid_time"})," parameter can be used to set the ",(0,s.jsx)(n.code,{children:"cache_valid_time"})," paremter\nof the ",(0,s.jsx)(n.code,{children:"ansible.builtin.apt"})," module. The module updates the apt cache if it is older than\nthe ",(0,s.jsx)(n.code,{children:"cache_valid_time"}),". The parameter is set in seconds and defaults to ",(0,s.jsx)(n.code,{children:"3600"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"centos",children:"CentOS"}),"\n",(0,s.jsxs)(n.p,{children:["With CentOS, the packages listed in ",(0,s.jsx)(n.code,{children:"required_packages_distribution"})," are installed by default."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"required_packages_distribution:\n  - libselinux-utils\n  - openssh\n"})}),"\n",(0,s.jsx)(n.h2,{id:"upgrade-of-packages",children:"Upgrade of packages"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"upgrade_packages"})," parameter can be used to configure the upgrade of packages.\nThe parameter is set to ",(0,s.jsx)(n.code,{children:"true"})," by default."]})]})}function u(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>c});var s=i(7294);const a={},t=s.createContext(a);function c(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);