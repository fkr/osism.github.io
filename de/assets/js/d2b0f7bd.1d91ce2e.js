"use strict";(self.webpackChunkosism=self.webpackChunkosism||[]).push([[3199],{5581:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>o});var s=t(5893),r=t(1151);const i={sidebar_label:"Network",sidebar_position:15},l="Network",a={id:"guides/configuration-guide/network",title:"Network",description:"Netplan",source:"@site/docs/guides/configuration-guide/network.md",sourceDirName:"guides/configuration-guide",slug:"/guides/configuration-guide/network",permalink:"/de/docs/guides/configuration-guide/network",draft:!1,unlisted:!1,editUrl:"https://github.com/osism/osism.github.io/tree/main/docs/guides/configuration-guide/network.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{sidebar_label:"Network",sidebar_position:15},sidebar:"tutorialSidebar",previous:{title:"Manager",permalink:"/de/docs/guides/configuration-guide/manager"},next:{title:"Proxy",permalink:"/de/docs/guides/configuration-guide/proxy"}},d={},o=[{value:"Netplan",id:"netplan",level:2},{value:"Example",id:"example",level:3},{value:"Dispatcher scripts",id:"dispatcher-scripts",level:3},{value:"Dummy interfaces",id:"dummy-interfaces",level:3},{value:"<code>/etc/interfaces</code>",id:"etcinterfaces",level:2},{value:"IPv6 fabric underlay",id:"ipv6-fabric-underlay",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"network",children:"Network"})}),"\n",(0,s.jsx)(n.h2,{id:"netplan",children:"Netplan"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="Since OSISM 6.1.0, the default network type is a netplan and no longer needs to be set explicitly"',children:"network_type: netplan\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The configuration is written to ",(0,s.jsx)(n.code,{children:"/etc/netplan/01-osism.yaml"})," by default. Can be changed\nvia the ",(0,s.jsx)(n.code,{children:"network_netplan_path"})," and ",(0,s.jsx)(n.code,{children:"network_netplan_file"})," parameters. The file permissions\nare ",(0,s.jsx)(n.code,{children:"0600"})," by default (cane be changed via the ",(0,s.jsx)(n.code,{children:"network_netplan_permissions"})," parameter).\nBy default, all other files in ",(0,s.jsx)(n.code,{children:"/etc/netplan"})," are removed. If you do not want this, you\ncan set ",(0,s.jsx)(n.code,{children:"network_netplan_remove_unmanaged_files"})," to ",(0,s.jsx)(n.code,{children:"false"}),". It is also possible to explicitly\nlist individual files that should not be deleted in ",(0,s.jsx)(n.code,{children:"network_netplan_managed_files_extra"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["An existing ",(0,s.jsx)(n.code,{children:"/etc/intefaces"})," file is replaced with a placeholder file. It is not possible\nto use ",(0,s.jsx)(n.code,{children:"/etc/interfaces"})," and Netplan in parallel."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="This template is used as the base for the configuration"',children:"# This file describes the network interfaces available on your system\n# For more information, see netplan(5).\n---\nnetwork:\n  version: {{ network_version }}\n  renderer: {{ network_renderer }}\n\n  bonds:\n    {{ network_bonds|to_nice_yaml(indent=4)|indent(4) }}\n\n  bridges:\n    {{ network_bridges|to_nice_yaml(indent=4)|indent(4) }}\n\n  ethernets:\n    {{ network_ethernets|to_nice_yaml(indent=4)|indent(4) }}\n\n  tunnels:\n    {{ network_tunnels|to_nice_yaml(indent=4)|indent(4) }}\n\n  vlans:\n    {{ network_vlans|to_nice_yaml(indent=4)|indent(4) }}\n\n  vrfs:\n    {{ network_vrfs|to_nice_yaml(indent=4)|indent(4) }}\n"})}),"\n",(0,s.jsx)(n.p,{children:"The parameters listed in the following table can be used in the template."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Parameter"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Default"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"network_version"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"2"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Defines what version of the configuration format is used. The only value supported at the moment is 2."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"network_renderer"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"networkd"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Defines what network configuration tool will be used to set up your configuration."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"network_bonds"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"{}"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.a,{href:"https://netplan.readthedocs.io/en/stable/netplan-yaml/#properties-for-device-type-bonds",children:"https://netplan.readthedocs.io/en/stable/netplan-yaml/#properties-for-device-type-bonds"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"network_bridges"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"{}"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.a,{href:"https://netplan.readthedocs.io/en/stable/netplan-yaml/#properties-for-device-type-bridges",children:"https://netplan.readthedocs.io/en/stable/netplan-yaml/#properties-for-device-type-bridges"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"network_ethernets"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"{}"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.a,{href:"https://netplan.readthedocs.io/en/stable/netplan-yaml/#properties-for-device-type-ethernets",children:"https://netplan.readthedocs.io/en/stable/netplan-yaml/#properties-for-device-type-ethernets"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"network_tunnels"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"{}"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.a,{href:"https://netplan.readthedocs.io/en/stable/netplan-yaml/#properties-for-device-type-tunnels",children:"https://netplan.readthedocs.io/en/stable/netplan-yaml/#properties-for-device-type-tunnels"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"network_vlans"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"{}"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.a,{href:"https://netplan.readthedocs.io/en/stable/netplan-yaml/#properties-for-device-type-vlans",children:"https://netplan.readthedocs.io/en/stable/netplan-yaml/#properties-for-device-type-vlans"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"network_vrfs"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"{}"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.a,{href:"https://netplan.readthedocs.io/en/stable/netplan-yaml/#properties-for-device-type-vrfs",children:"https://netplan.readthedocs.io/en/stable/netplan-yaml/#properties-for-device-type-vrfs"})})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["By default changes to the network configuration are not applied automatically. This is done on\npurpose to allow a manual check in advance. Changes to the network configuration can\nbe applied either by rebooting or by executing ",(0,s.jsx)(n.code,{children:"netplan apply"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ osism console --type clush all\nEnter 'quit' to leave this interactive mode\nWorking with nodes: testbed-manager.testbed.osism.xyz,testbed-node-[0-2].testbed.osism.xyz\nclush> sudo netplan apply\n"})}),"\n",(0,s.jsxs)(n.p,{children:["It is possible to execute the ",(0,s.jsx)(n.code,{children:"netplan apply"})," automatically via a handler when changes are made.\nThe parameter ",(0,s.jsx)(n.code,{children:"network_allow_service_restart"})," is used for this."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="environments/configuration.yml"',children:"network_allow_service_restart: true\n"})}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(n.p,{children:["The Netplan documentation contains a large number of example configurations. The following\nexample shows the use of ",(0,s.jsx)(n.a,{href:"https://netplan.readthedocs.io/en/stable/examples/#how-to-create-vlans",children:"How to create VLANs"})," with the osism.commons.network role."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'network_ethernets:\n  mainif:\n    match:\n      macaddress: "de:ad:be:ef:ca:fe"\n    set-name: mainif\n    addresses: [ "10.3.0.5/23" ]\n    nameservers:\n      addresses: [ "8.8.8.8", "8.8.4.4" ]\n      search: [ example.com ]\n    routes:\n      - to: default\n        via: 10.3.0.1\n\nnetwork_vlans:\n  vlan15:\n    id: 15\n    link: mainif\n    addresses: [ "10.3.99.5/24" ]\n  vlan10:\n    id: 10\n    link: mainif\n    addresses: [ "10.3.98.5/24" ]\n    nameservers:\n      addresses: [ "127.0.0.1" ]\n      search: [ domain1.example.com, domain2.example.com ]\n'})}),"\n",(0,s.jsx)(n.h3,{id:"dispatcher-scripts",children:"Dispatcher scripts"}),"\n",(0,s.jsx)(n.h3,{id:"dummy-interfaces",children:"Dummy interfaces"}),"\n",(0,s.jsxs)(n.p,{children:["Dummy devices are created with the help of\n",(0,s.jsx)(n.a,{href:"https://www.freedesktop.org/software/systemd/man/latest/systemd.netdev.html",children:"systemd.netdev"}),"\nand can then be used as a normal netowrk device in the Netplan configuration."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"network_dummy_interfaces:\n  - dummy0\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The MTU is set to 9000 by default and can be set via ",(0,s.jsx)(n.code,{children:"network_dummy_interface_mtu"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"etcinterfaces",children:(0,s.jsx)(n.code,{children:"/etc/interfaces"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="If /etc/interfaces is to be used, the network_type must be explicitly set in environments/configuration.yml"',children:"network_type: interfaces\n"})}),"\n",(0,s.jsx)(n.h2,{id:"ipv6-fabric-underlay",children:"IPv6 fabric underlay"}),"\n",(0,s.jsxs)(n.p,{children:["Example configuration for a node. The configuration is stored in the ",(0,s.jsx)(n.code,{children:"host_vars"})," file for the node in ",(0,s.jsx)(n.code,{children:"inventory"}),"\ndirectory in the configuration repository."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"##########################################################\n# ansible\n\nansible_host: 10.10.42.10\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"##########################################################\n# generic\n\ninternal_interface: dummy0\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"##########################################################\n# network\n\nnetwork_type: netplan\nnetwork_dummy_interfaces:\n  - dummy0\nnetwork_ethernets:\n  enp99s0f0np0:\n    mtu: 9100\n  enp99s0f1np1:\n    mtu: 9100\n  dummy0:\n    addresses:\n      - 10.10.42.10/32\n      - 2001:db8::10:10:42:10/128\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"##########################################################\n# frr\n\nfrr_local_as: 4210042010\nfrr_loopback_v4: 10.10.42.10\nfrr_loopback_v6: 2001:db8::10:10:42:10\nfrr_uplinks:\n  - interface: enp99s0f0np0\n    remote_as: 65401\n  - interface: enp99s0f1np1\n    remote_as: 65402\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'##########################################################\n# kolla\n\nnetwork_interface: "{{ internal_interface }}"\n'})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>l});var s=t(7294);const r={},i=s.createContext(r);function l(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);