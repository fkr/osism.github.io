"use strict";(self.webpackChunkosism=self.webpackChunkosism||[]).push([[6299],{9270:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>l,frontMatter:()=>d,metadata:()=>t,toc:()=>m});var r=a(5893),i=a(1151);const d={sidebar_label:"Keystone"},o="Keystone",t={id:"guides/configuration-guide/openstack/keystone",title:"Keystone",description:"* Keystone admin guide",source:"@site/docs/guides/configuration-guide/openstack/keystone.md",sourceDirName:"guides/configuration-guide/openstack",slug:"/guides/configuration-guide/openstack/keystone",permalink:"/de/docs/guides/configuration-guide/openstack/keystone",draft:!1,unlisted:!1,editUrl:"https://github.com/osism/osism.github.io/tree/main/docs/guides/configuration-guide/openstack/keystone.md",tags:[],version:"current",frontMatter:{sidebar_label:"Keystone"},sidebar:"tutorialSidebar",previous:{title:"Ironic",permalink:"/de/docs/guides/configuration-guide/openstack/ironic"},next:{title:"Magnum",permalink:"/de/docs/guides/configuration-guide/openstack/magnum"}},s={},m=[{value:"Domain manager policy",id:"domain-manager-policy",level:2},{value:"OIDC Federation",id:"oidc-federation",level:2}];function _(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"keystone",children:"Keystone"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://docs.openstack.org/keystone/latest/admin/index.html",children:"Keystone admin guide"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://docs.openstack.org/keystone/latest/configuration/index.html",children:"Keystone configuration reference"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"domain-manager-policy",children:"Domain manager policy"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"This policy is currently still in draft status. Its use in production is currently not recommended."})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"SCS Standard Track"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"SCS Standard"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"SCS Documentation"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.a,{href:"https://docs.scs.community/standards/iam/",children:"IAM"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.a,{href:"https://github.com/SovereignCloudStack/standards/blob/main/Standards/scs-0302-v1-domain-manager-role.md",children:"scs-0302"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.a,{href:"https://docs.scs.community/standards/scs-0302-v1-domain-manager-role/",children:"Domain Manager configuration for Keystone"})})]})})]}),"\n",(0,r.jsxs)(n.p,{children:["To configure and use the domain manager role from the SCS project, the\n",(0,r.jsx)(n.code,{children:"environments/kolla/files/overlays/keystone/policy.yaml"})," file is created\nin the configuration repository. The deployment and upgrade of the Keystone\nservice itself is then done as usual."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'title="environments/kolla/files/overlays/keystone/policy.yaml"',children:'---\n# SCS Domain Manager policy configuration\n\n# Section A: OpenStack base definitons\n# The entries beginning with "base_<rule>" should be exact copies of the\n# default "identity:<rule>" definitions for the target OpenStack release.\n# They will be extended upon for the domain manager role below this section.\n"base_get_domain": "(role:reader and system_scope:all) or token.domain.id:%(target.domain.id)s or token.project.domain.id:%(target.domain.id)s"\n"base_list_domains": "(role:reader and system_scope:all)"\n"base_list_roles": "(role:reader and system_scope:all)"\n"base_get_role": "(role:reader and system_scope:all)"\n"base_list_users": "(role:reader and system_scope:all) or (role:reader and domain_id:%(target.domain_id)s)"\n"base_get_user": "(role:reader and system_scope:all) or (role:reader and token.domain.id:%(target.user.domain_id)s) or user_id:%(target.user.id)s"\n"base_create_user": "(role:admin and system_scope:all) or (role:admin and token.domain.id:%(target.user.domain_id)s)"\n"base_update_user": "(role:admin and system_scope:all) or (role:admin and token.domain.id:%(target.user.domain_id)s)"\n"base_delete_user": "(role:admin and system_scope:all) or (role:admin and token.domain.id:%(target.user.domain_id)s)"\n"base_list_projects": "(role:reader and system_scope:all) or (role:reader and domain_id:%(target.domain_id)s)"\n"base_get_project": "(role:reader and system_scope:all) or (role:reader and domain_id:%(target.project.domain_id)s) or project_id:%(target.project.id)s"\n"base_create_project": "(role:admin and system_scope:all) or (role:admin and domain_id:%(target.project.domain_id)s)"\n"base_update_project": "(role:admin and system_scope:all) or (role:admin and domain_id:%(target.project.domain_id)s)"\n"base_delete_project": "(role:admin and system_scope:all) or (role:admin and domain_id:%(target.project.domain_id)s)"\n"base_list_user_projects": "(role:reader and system_scope:all) or (role:reader and domain_id:%(target.user.domain_id)s) or user_id:%(target.user.id)s"\n"base_check_grant": "(role:reader and system_scope:all) or ((role:reader and domain_id:%(target.user.domain_id)s and domain_id:%(target.project.domain_id)s) or (role:reader and domain_id:%(target.user.domain_id)s and domain_id:%(target.domain.id)s) or (role:reader and domain_id:%(target.group.domain_id)s and domain_id:%(target.project.domain_id)s) or (role:reader and domain_id:%(target.group.domain_id)s and domain_id:%(target.domain.id)s)) and (domain_id:%(target.role.domain_id)s or None:%(target.role.domain_id)s)"\n"base_list_grants": "(role:reader and system_scope:all) or (role:reader and domain_id:%(target.user.domain_id)s and domain_id:%(target.project.domain_id)s) or (role:reader and domain_id:%(target.user.domain_id)s and domain_id:%(target.domain.id)s) or (role:reader and domain_id:%(target.group.domain_id)s and domain_id:%(target.project.domain_id)s) or (role:reader and domain_id:%(target.group.domain_id)s and domain_id:%(target.domain.id)s)"\n"base_create_grant": "(role:admin and system_scope:all) or ((role:admin and domain_id:%(target.user.domain_id)s and domain_id:%(target.project.domain_id)s) or (role:admin and domain_id:%(target.user.domain_id)s and domain_id:%(target.domain.id)s) or (role:admin and domain_id:%(target.group.domain_id)s and domain_id:%(target.project.domain_id)s) or (role:admin and domain_id:%(target.group.domain_id)s and domain_id:%(target.domain.id)s)) and (domain_id:%(target.role.domain_id)s or None:%(target.role.domain_id)s)"\n"base_revoke_grant": "(role:admin and system_scope:all) or ((role:admin and domain_id:%(target.user.domain_id)s and domain_id:%(target.project.domain_id)s) or (role:admin and domain_id:%(target.user.domain_id)s and domain_id:%(target.domain.id)s) or (role:admin and domain_id:%(target.group.domain_id)s and domain_id:%(target.project.domain_id)s) or (role:admin and domain_id:%(target.group.domain_id)s and domain_id:%(target.domain.id)s)) and (domain_id:%(target.role.domain_id)s or None:%(target.role.domain_id)s)"\n"base_list_role_assignments": "(role:reader and system_scope:all) or (role:reader and domain_id:%(target.domain_id)s)"\n"base_list_groups": "(role:reader and system_scope:all) or (role:reader and domain_id:%(target.group.domain_id)s)"\n"base_get_group": "(role:reader and system_scope:all) or (role:reader and domain_id:%(target.group.domain_id)s)"\n"base_create_group": "(role:admin and system_scope:all) or (role:admin and domain_id:%(target.group.domain_id)s)"\n"base_update_group": "(role:admin and system_scope:all) or (role:admin and domain_id:%(target.group.domain_id)s)"\n"base_delete_group": "(role:admin and system_scope:all) or (role:admin and domain_id:%(target.group.domain_id)s)"\n"base_list_groups_for_user": "(role:reader and system_scope:all) or (role:reader and domain_id:%(target.user.domain_id)s) or user_id:%(user_id)s"\n"base_list_users_in_group": "(role:reader and system_scope:all) or (role:reader and domain_id:%(target.group.domain_id)s)"\n"base_remove_user_from_group": "(role:admin and system_scope:all) or (role:admin and domain_id:%(target.group.domain_id)s and domain_id:%(target.user.domain_id)s)"\n"base_check_user_in_group": "(role:reader and system_scope:all) or (role:reader and domain_id:%(target.group.domain_id)s and domain_id:%(target.user.domain_id)s)"\n"base_add_user_to_group": "(role:admin and system_scope:all) or (role:admin and domain_id:%(target.group.domain_id)s and domain_id:%(target.user.domain_id)s)"\n\n# Section B: Domain Manager Extensions\n\n# classify domain managers with a special role\n"is_domain_manager": "role:manager"\n\n# specify a rule that whitelists roles which domain admins are permitted\n# to assign and revoke within their domain\n"is_domain_managed_role": "\'member\':%(target.role.name)s or \'load-balancer_member\':%(target.role.name)s or \'creator\':%(target.role.name)s"\n\n# allow domain admins to retrieve their own domain (does not need changes)\n"identity:get_domain": "rule:base_get_domain or rule:admin_required"\n\n# list_domains is needed for GET /v3/domains?name=... requests\n# this is mandatory for things like\n# `create user --domain $DOMAIN_NAME $USER_NAME` to correctly discover\n# domains by name\n"identity:list_domains": "rule:is_domain_manager or rule:base_list_domains or rule:admin_required"\n\n# list_roles is needed for GET /v3/roles?name=... requests\n# this is mandatory for things like `role add ... $ROLE_NAME`` to correctly\n# discover roles by name\n"identity:list_roles": "rule:is_domain_manager or rule:base_list_roles or rule:admin_required"\n\n# get_role is needed for GET /v3/roles/{role_id} requests\n# this is mandatory for the OpenStack SDK to properly process role assignments\n# which are issued by role id instead of name\n"identity:get_role": "(rule:is_domain_manager and rule:is_domain_managed_role) or rule:base_get_role or rule:admin_required"\n\n# allow domain admins to manage users within their domain\n"identity:list_users": "(rule:is_domain_manager and token.domain.id:%(target.domain_id)s) or rule:base_list_users or rule:admin_required"\n"identity:get_user": "(rule:is_domain_manager and token.domain.id:%(target.user.domain_id)s) or rule:base_get_user or rule:admin_required"\n"identity:create_user": "(rule:is_domain_manager and token.domain.id:%(target.user.domain_id)s) or rule:base_create_user or rule:admin_required"\n"identity:update_user": "(rule:is_domain_manager and token.domain.id:%(target.user.domain_id)s) or rule:base_update_user or rule:admin_required"\n"identity:delete_user": "(rule:is_domain_manager and token.domain.id:%(target.user.domain_id)s) or rule:base_delete_user or rule:admin_required"\n\n# allow domain admins to manage projects within their domain\n"identity:list_projects": "(rule:is_domain_manager and token.domain.id:%(target.domain_id)s) or rule:base_list_projects or rule:admin_required"\n"identity:get_project": "(rule:is_domain_manager and token.domain.id:%(target.project.domain_id)s) or rule:base_get_project or rule:admin_required"\n"identity:create_project": "(rule:is_domain_manager and token.domain.id:%(target.project.domain_id)s) or rule:base_create_project or rule:admin_required"\n"identity:update_project": "(rule:is_domain_manager and token.domain.id:%(target.project.domain_id)s) or rule:base_update_project or rule:admin_required"\n"identity:delete_project": "(rule:is_domain_manager and token.domain.id:%(target.project.domain_id)s) or rule:base_delete_project or rule:admin_required"\n"identity:list_user_projects": "(rule:is_domain_manager and token.domain.id:%(target.user.domain_id)s) or rule:base_list_user_projects or rule:admin_required"\n\n# allow domain managers to manage role assignments within their domain\n# (restricted to specific roles by the \'is_domain_managed_role\' rule)\n#\n# project-level role assignment to user within domain\n"is_domain_user_project_grant": "token.domain.id:%(target.user.domain_id)s and token.domain.id:%(target.project.domain_id)s"\n# project-level role assignment to group within domain\n"is_domain_group_project_grant": "token.domain.id:%(target.group.domain_id)s and token.domain.id:%(target.project.domain_id)s"\n# domain-level role assignment to group\n"is_domain_level_group_grant": "token.domain.id:%(target.group.domain_id)s and token.domain.id:%(target.domain.id)s"\n# domain-level role assignment to user\n"is_domain_level_user_grant": "token.domain.id:%(target.user.domain_id)s and token.domain.id:%(target.domain.id)s"\n"domain_manager_grant": "rule:is_domain_manager and (rule:is_domain_user_project_grant or rule:is_domain_group_project_grant or rule:is_domain_level_group_grant or rule:is_domain_level_user_grant)"\n"identity:check_grant": "rule:domain_manager_grant or rule:base_check_grant or rule:admin_required"\n"identity:list_grants": "rule:domain_manager_grant or rule:base_list_grants or rule:admin_required"\n"identity:create_grant": "(rule:domain_manager_grant and rule:is_domain_managed_role) or rule:base_create_grant or rule:admin_required"\n"identity:revoke_grant": "(rule:domain_manager_grant and rule:is_domain_managed_role) or rule:base_revoke_grant or rule:admin_required"\n"identity:list_role_assignments": "(rule:is_domain_manager and token.domain.id:%(target.domain_id)s) or rule:base_list_role_assignments or rule:admin_required"\n\n\n# allow domain managers to manage groups within their domain\n"identity:list_groups": "(rule:is_domain_manager and token.domain.id:%(target.group.domain_id)s) or (role:reader and system_scope:all) or rule:base_list_groups or rule:admin_required"\n"identity:get_group": "(rule:is_domain_manager and token.domain.id:%(target.group.domain_id)s) or (role:reader and system_scope:all) or rule:base_get_group or rule:admin_required"\n"identity:create_group": "(rule:is_domain_manager and token.domain.id:%(target.group.domain_id)s) or rule:base_create_group or rule:admin_required"\n"identity:update_group": "(rule:is_domain_manager and token.domain.id:%(target.group.domain_id)s) or rule:base_update_group or rule:admin_required"\n"identity:delete_group": "(rule:is_domain_manager and token.domain.id:%(target.group.domain_id)s) or rule:base_delete_group or rule:admin_required"\n"identity:list_groups_for_user": "(rule:is_domain_manager and token.domain.id:%(target.user.domain_id)s) or rule:base_list_groups_for_user or rule:admin_required"\n"identity:list_users_in_group": "(rule:is_domain_manager and token.domain.id:%(target.group.domain_id)s) or rule:base_list_users_in_group or rule:admin_required"\n"identity:remove_user_from_group": "(rule:is_domain_manager and token.domain.id:%(target.group.domain_id)s and token.domain.id:%(target.user.domain_id)s) or rule:base_remove_user_from_group or rule:admin_required"\n"identity:check_user_in_group": "(rule:is_domain_manager and token.domain.id:%(target.group.domain_id)s and token.domain.id:%(target.user.domain_id)s) or rule:base_check_user_in_group or rule:admin_required"\n"identity:add_user_to_group": "(rule:is_domain_manager and token.domain.id:%(target.group.domain_id)s and token.domain.id:%(target.user.domain_id)s) or rule:base_add_user_to_group or rule:admin_required"\n'})}),"\n",(0,r.jsxs)(n.p,{children:["The role ",(0,r.jsx)(n.code,{children:"manager"})," is created using the OpenStack CLI. Alternatively, the role can\nbe added using Ansible or other tools."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'$ openstack --os-cloud admin \\\n    role create \\\n    --or-show \\\n    --description "Domain Manager Role" \\\n    manager\n+-------------+----------------------------------+\n| Field       | Value                            |\n+-------------+----------------------------------+\n| description | Domain Manager Role              |\n| domain_id   | None                             |\n| id          | 9b7140bfe628468ab9b86b365f9ac4c2 |\n| name        | manager                          |\n| options     | {}                               |\n+-------------+----------------------------------+\n'})}),"\n",(0,r.jsx)(n.p,{children:"A user can then be made a domain manager for a particular domain by assigning this role."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"$ openstack --os-cloud admin \\\n    role add \\\n    --user test \\\n    --domain test \\\n    manager\n"})}),"\n",(0,r.jsx)(n.h2,{id:"oidc-federation",children:"OIDC Federation"})]})}function l(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(_,{...e})}):_(e)}},1151:(e,n,a)=>{a.d(n,{Z:()=>t,a:()=>o});var r=a(7294);const i={},d=r.createContext(i);function o(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);