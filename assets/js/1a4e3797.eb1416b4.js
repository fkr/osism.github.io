"use strict";(self.webpackChunkosism=self.webpackChunkosism||[]).push([[7920],{8824:(e,t,r)=>{r.d(t,{c:()=>u});var s=r(7294),a=r(2263);const n=["zero","one","two","few","many","other"];function c(e){return n.filter((t=>e.includes(t)))}const l={locale:"en",pluralForms:c(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,a.Z)();return(0,s.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:c(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),l}}),[e])}function u(){const e=o();return{selectMessage:(t,r)=>function(e,t,r){const s=e.split("|");if(1===s.length)return s[0];s.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${s.length}: ${e}`);const a=r.select(t),n=r.pluralForms.indexOf(a);return s[Math.min(n,s.length-1)]}(r,t,e)}}},1473:(e,t,r)=>{r.r(t),r.d(t,{default:()=>_});var s=r(7294),a=r(2263),n=r(8955),c=r(5742),l=r(3692),o=r(5999),u=r(8824),h=r(6010),i=r(6550),m=r(2389),d=r(1029);const p=function(){const e=(0,m.Z)(),t=(0,i.k6)(),r=(0,i.TH)(),{siteConfig:{baseUrl:s}}=(0,a.Z)(),n=e?new URLSearchParams(r.search):null,c=n?.get("q")||"",l=n?.get("ctx")||"",o=n?.get("version")||"",u=e=>{const t=new URLSearchParams(r.search);return e?t.set("q",e):t.delete("q"),t};return{searchValue:c,searchContext:l&&Array.isArray(d.Kc)&&d.Kc.some((e=>"string"==typeof e?e===l:e.path===l))?l:"",searchVersion:o,updateSearchPath:e=>{const r=u(e);t.replace({search:r.toString()})},updateSearchContext:e=>{const s=new URLSearchParams(r.search);s.set("ctx",e),t.replace({search:s.toString()})},generateSearchPageLink:e=>{const t=u(e);return`${s}search?${t.toString()}`}}};var g=r(22),x=r(8202),f=r(3545),y=r(2539),C=r(726),S=r(1073),j=r(311),I=r(3926);const v={searchContextInput:"searchContextInput_mXoe",searchQueryInput:"searchQueryInput_CFBF",searchResultItem:"searchResultItem_U687",searchResultItemPath:"searchResultItemPath_uIbk",searchResultItemSummary:"searchResultItemSummary_oZHr",searchQueryColumn:"searchQueryColumn_q7nx",searchContextColumn:"searchContextColumn_oWAF"};var w=r(51),P=r(5893);function R(){const{siteConfig:{baseUrl:e},i18n:{currentLocale:t}}=(0,a.Z)(),{selectMessage:r}=(0,u.c)(),{searchValue:n,searchContext:l,searchVersion:i,updateSearchPath:m,updateSearchContext:f}=p(),[y,C]=(0,s.useState)(n),[S,I]=(0,s.useState)(),[R,_]=(0,s.useState)(),F=`${e}${i}`,A=(0,s.useMemo)((()=>y?(0,o.I)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:y}):(0,o.I)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})),[y]);(0,s.useEffect)((()=>{m(y),S&&(y?S(y,(e=>{_(e)})):_(void 0))}),[y,S]);const $=(0,s.useCallback)((e=>{C(e.target.value)}),[]);return(0,s.useEffect)((()=>{n&&n!==y&&C(n)}),[n]),(0,s.useEffect)((()=>{!async function(){const{wrappedIndexes:e,zhDictionary:t}=!Array.isArray(d.Kc)||l||d.pQ?await(0,g.w)(F,l):{wrappedIndexes:[],zhDictionary:[]};I((()=>(0,x.v)(e,t,100)))}()}),[l,F]),(0,P.jsxs)(s.Fragment,{children:[(0,P.jsxs)(c.Z,{children:[(0,P.jsx)("meta",{property:"robots",content:"noindex, follow"}),(0,P.jsx)("title",{children:A})]}),(0,P.jsxs)("div",{className:"container margin-vert--lg",children:[(0,P.jsx)("h1",{children:A}),(0,P.jsxs)("div",{className:"row",children:[(0,P.jsx)("div",{className:(0,h.Z)("col",{[v.searchQueryColumn]:Array.isArray(d.Kc),"col--9":Array.isArray(d.Kc),"col--12":!Array.isArray(d.Kc)}),children:(0,P.jsx)("input",{type:"search",name:"q",className:v.searchQueryInput,"aria-label":"Search",onChange:$,value:y,autoComplete:"off",autoFocus:!0})}),Array.isArray(d.Kc)?(0,P.jsx)("div",{className:(0,h.Z)("col","col--3","padding-left--none",v.searchContextColumn),children:(0,P.jsxs)("select",{name:"search-context",className:v.searchContextInput,id:"context-selector",value:l,onChange:e=>f(e.target.value),children:[d.pQ&&(0,P.jsx)("option",{value:"",children:(0,o.I)({id:"theme.SearchPage.searchContext.everywhere",message:"Everywhere"})}),d.Kc.map((e=>{const{label:r,path:s}=(0,w._)(e,t);return(0,P.jsx)("option",{value:s,children:r},s)}))]})}):null]}),!S&&y&&(0,P.jsx)("div",{children:(0,P.jsx)(j.Z,{})}),R&&(R.length>0?(0,P.jsx)("p",{children:r(R.length,(0,o.I)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:R.length}))}):(0,P.jsx)("p",{children:(0,o.I)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"})})),(0,P.jsx)("section",{children:R&&R.map((e=>(0,P.jsx)(b,{searchResult:e},e.document.i)))})]})]})}function b(e){let{searchResult:{document:t,type:r,page:s,tokens:a,metadata:n}}=e;const c=r===f.P.Title,o=r===f.P.Keywords,u=r===f.P.Description,h=u||o,i=c||h,m=r===f.P.Content,p=(c?t.b:s.b).slice(),g=m||h?t.s:t.t;i||p.push(s.t);let x="";if(d.vc&&a.length>0){const e=new URLSearchParams;for(const t of a)e.append("_highlight",t);x=`?${e.toString()}`}return(0,P.jsxs)("article",{className:v.searchResultItem,children:[(0,P.jsx)("h2",{children:(0,P.jsx)(l.Z,{to:t.u+x+(t.h||""),dangerouslySetInnerHTML:{__html:m||h?(0,y.C)(g,a):(0,C.o)(g,(0,S.m)(n,"t"),a,100)}})}),p.length>0&&(0,P.jsx)("p",{className:v.searchResultItemPath,children:(0,I.e)(p)}),(m||u)&&(0,P.jsx)("p",{className:v.searchResultItemSummary,dangerouslySetInnerHTML:{__html:(0,C.o)(t.t,(0,S.m)(n,"t"),a,100)}})]})}const _=function(){return(0,P.jsx)(n.Z,{children:(0,P.jsx)(R,{})})}}}]);