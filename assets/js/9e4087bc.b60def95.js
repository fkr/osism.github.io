"use strict";(self.webpackChunkosism=self.webpackChunkosism||[]).push([[3608],{3169:(e,r,t)=>{t.r(r),t.d(r,{default:()=>m});t(7294);var a=t(3692),s=t(5999),n=t(8264),i=t(9788),c=t(8955),l=t(2503),o=t(5893);function d(e){let{year:r,posts:t}=e;const s=(0,i.P)({day:"numeric",month:"long",timeZone:"UTC"});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.Z,{as:"h3",id:r,children:r}),(0,o.jsx)("ul",{children:t.map((e=>{return(0,o.jsx)("li",{children:(0,o.jsxs)(a.Z,{to:e.metadata.permalink,children:[(r=e.metadata.date,s.format(new Date(r)))," - ",e.metadata.title]})},e.metadata.date);var r}))})]})}function h(e){let{years:r}=e;return(0,o.jsx)("section",{className:"margin-vert--lg",children:(0,o.jsx)("div",{className:"container",children:(0,o.jsx)("div",{className:"row",children:r.map(((e,r)=>(0,o.jsx)("div",{className:"col col--4 margin-vert--lg",children:(0,o.jsx)(d,{...e})},r)))})})})}function m(e){let{archive:r}=e;const t=(0,s.I)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),a=(0,s.I)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),i=function(e){const r=e.reduce(((e,r)=>{const t=r.metadata.date.split("-")[0],a=e.get(t)??[];return e.set(t,[r,...a])}),new Map);return Array.from(r,(e=>{let[r,t]=e;return{year:r,posts:t}}))}(r.blogPosts);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.d,{title:t,description:a}),(0,o.jsxs)(c.Z,{children:[(0,o.jsx)("header",{className:"hero hero--primary",children:(0,o.jsxs)("div",{className:"container",children:[(0,o.jsx)(l.Z,{as:"h1",className:"hero__title",children:t}),(0,o.jsx)("p",{className:"hero__subtitle",children:a})]})}),(0,o.jsx)("main",{children:i.length>0&&(0,o.jsx)(h,{years:i})})]})]})}},9788:(e,r,t)=>{t.d(r,{P:()=>s});var a=t(2263);function s(e){void 0===e&&(e={});const{i18n:{currentLocale:r}}=(0,a.Z)(),t=function(){const{i18n:{currentLocale:e,localeConfigs:r}}=(0,a.Z)();return r[e].calendar}();return new Intl.DateTimeFormat(r,{calendar:t,...e})}}}]);