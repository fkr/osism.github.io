"use strict";(self.webpackChunkosism=self.webpackChunkosism||[]).push([[8059],{6207:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var s=t(5893),r=t(1151);const i={slug:"2024-01-11-kubernetes-service-deployment",title:"Kubernetes Service Deployments",authors:["berendt"],tags:["Sneak Peak","Kubernetes"]},o=void 0,a={permalink:"/blog/2024-01-11-kubernetes-service-deployment",source:"@site/blog/2024-01-11-kubernetes-service-deployments.md",title:"Kubernetes Service Deployments",description:"New big and small features are constantly being added to OSISM. This makes using OSISM",date:"2024-01-11T00:00:00.000Z",tags:[{inline:!0,label:"Sneak Peak",permalink:"/blog/tags/sneak-peak"},{inline:!0,label:"Kubernetes",permalink:"/blog/tags/kubernetes"}],readingTime:1.025,hasTruncateMarker:!1,authors:[{name:"Christian Berendt",title:"Founder of OSISM",url:"https://github.com/berendt",imageURL:"https://github.com/berendt.png",key:"berendt",page:null}],frontMatter:{slug:"2024-01-11-kubernetes-service-deployment",title:"Kubernetes Service Deployments",authors:["berendt"],tags:["Sneak Peak","Kubernetes"]},unlisted:!1,prevItem:{title:"Restart of a container on a specific node",permalink:"/blog/2024-01-12-restart-of-a-container-on-a-specific-node"}},l={authorsImageUrls:[void 0]},c=[];function u(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["New big and small features are constantly being added to OSISM. This makes using OSISM\na little better for operators of the ",(0,s.jsx)(n.a,{href:"https://scs.community",children:"Sovereign Cloud Stack"})," every day."]}),"\n",(0,s.jsxs)(n.p,{children:["Since we currently only do a major release every 6 months in which we write about these big\nand small features in the release notes, there will be this kind of blog posts from now on.\nIn blog posts with the tag ",(0,s.jsx)(n.a,{href:"https://osism.tech/blog/tags/sneak-peak",children:"Sneak Peak"}),",\nwe will now write about new features before the next major release."]}),"\n",(0,s.jsx)(n.p,{children:"This blog entry is specifically about the possibility of deploying services on the recently\nintegrated Kubernetes cluster."}),"\n",(0,s.jsxs)(n.p,{children:["The deployment of services on the integrated Kubernetes cluster will be possible in\nfuture via the ",(0,s.jsx)(n.code,{children:"kubernetes"})," environment. A first simple example for the deployment\nof Nginx is already ",(0,s.jsx)(n.a,{href:"https://github.com/osism/testbed/tree/main/environments/kubernetes",children:"available in the osism/testbed repository"}),".\nThe new environment is used as usual with ",(0,s.jsx)(n.code,{children:"osism apply"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ osism apply -e kubernetes nginx\n\n$ kubectl get pods -n nginx\nNAME                    READY   STATUS    RESTARTS   AGE\nnginx-f7f5c78c5-crhnf   1/1     Running   0          2m28s\nnginx-f7f5c78c5-tjf6r   1/1     Running   0          2m28s\nnginx-f7f5c78c5-qbqjz   1/1     Running   0          2m28\n\n$ kubectl get services -n nginx\nNAME    TYPE           CLUSTER-IP     EXTERNAL-IP      PORT(S)        AGE\nnginx   LoadBalancer   10.43.84.203   192.168.16.100   80:30612/TCP   2m46s\n\n$ curl -I http://192.168.16.100\nHTTP/1.1 200 OK\nServer: nginx/1.25.3\n"})})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>o});var s=t(7294);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);