(()=>{"use strict";var e,t={45:(e,t,r)=>{var o=r(609);const n=window.wp.element,s=e=>{let t;const r=new Set,o=(e,o)=>{const n="function"==typeof e?e(t):e;if(!Object.is(n,t)){const e=t;t=(null!=o?o:"object"!=typeof n||null===n)?n:Object.assign({},t,n),r.forEach((r=>r(t,e)))}},n=()=>t,s={setState:o,getState:n,getInitialState:()=>a,subscribe:e=>(r.add(e),()=>r.delete(e)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),r.clear()}},a=t=e(o,n,s);return s};var a=r(79);const{useDebugValue:l}=o,{useSyncExternalStoreWithSelector:i}=a;let c=!1;const d=e=>e,u=e=>{"function"!=typeof e&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const t="function"==typeof e?(e=>e?s(e):s)(e):e,r=(e,r)=>function(e,t=d,r){r&&!c&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),c=!0);const o=i(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,r);return l(o),o}(t,e,r);return Object.assign(r,t),r},p="SET_CURRENT_STEP",m="SET_NPS_RATING",b="SET_SHOW_NPS",f=document.querySelectorAll('[data-id^="nps-survey-"]'),g={};Array.from(f).forEach((e=>{const t=JSON.parse(e.getAttribute("data-vars"));t.npsId=e.dataset.id,g[t.npsId]={showNps:t?.show_if,currentStep:"plugin-rating"===t?.nps_status?.dismiss_step?"plugin-rating":"nps-rating",npsRating:null,npsId:t.npsId}}));const h=(G=(e,{type:t,payload:r,npsId:o})=>{switch(t){case b:return{...e,[o]:{...e[o],showNps:r}};case p:return{...e,[o]:{...e[o],currentStep:r}};case m:return{...e,[o]:{...e[o],npsRating:r}};default:return e}},A=g,(T=(e,t,r)=>(r.dispatch=t=>(e((e=>G(e,t)),!1,t),t),r.dispatchFromDevtools=!0,{dispatch:(...e)=>r.dispatch(...e),...A}))?u(T):u),y=({children:e})=>(0,o.createElement)("p",{className:"mt-1 mx-0 mb-0 text-base leading-6 font-normal text-zip-body-text"},e),v=({children:e})=>(0,o.createElement)("h3",{className:"my-0 text-lg font-bold leading-7 text-zip-app-heading"},e),x=window.wp.i18n,w=function(e){const{message:{logo:t,plugin_name:r,nps_rating_message:s},npsId:a}=e,{dispatch:l}=h(),i=Array.from({length:10},((e,t)=>t+1)),[c,d]=(0,n.useState)(null);return(0,o.createElement)("div",null,(0,o.createElement)("div",{className:"flex items-center justify-start gap-2"},(0,o.createElement)("img",{className:"size-6",src:t,alt:"Brand Logo"}),(0,o.createElement)(v,null,r)),(0,o.createElement)(y,null,s.replaceAll("#pluginname",r)),(0,o.createElement)("div",{className:"mt-5"},(0,o.createElement)("span",{className:"isolate inline-flex gap-2 w-full"},i.map((e=>(0,o.createElement)("button",{type:"button",key:e,onClick:()=>async function(e){null===c&&(d(e),l({npsId:a,type:"SET_NPS_RATING",payload:e}),l(e>=8?{npsId:a,type:"SET_CURRENT_STEP",payload:"plugin-rating"}:{npsId:a,type:"SET_CURRENT_STEP",payload:"comment"}))}(e),className:"relative flex-1 inline-flex items-center justify-center bg-white py-1.5 text-sm font-medium text-nps-button-text hover:bg-gray-50 focus:z-10 border border-solid border-button-disabled rounded-md transition-colors ease-in-out duration-150 hover:cursor-pointer"},e))))),(0,o.createElement)("div",{className:"mt-3 flex items-center justify-between"},(0,o.createElement)("span",{className:"text-secondary-text text-xs font-medium leading-5"},(0,x.__)("Very unlikely","nps-survey")),(0,o.createElement)("span",{className:"text-secondary-text text-xs font-medium leading-5"},(0,x.__)("Very likely","nps-survey"))))},E=e=>{const t=_(e),{conflictingClassGroups:r,conflictingClassGroupModifiers:o}=e;return{getClassGroupId:e=>{const r=e.split("-");return""===r[0]&&1!==r.length&&r.shift(),S(r,t)||N(e)},getConflictingClassGroupIds:(e,t)=>{const n=r[e]||[];return t&&o[e]?[...n,...o[e]]:n}}},S=(e,t)=>{if(0===e.length)return t.classGroupId;const r=e[0],o=t.nextPart.get(r),n=o?S(e.slice(1),o):void 0;if(n)return n;if(0===t.validators.length)return;const s=e.join("-");return t.validators.find((({validator:e})=>e(s)))?.classGroupId},k=/^\[(.+)\]$/,N=e=>{if(k.test(e)){const t=k.exec(e)[1],r=t?.substring(0,t.indexOf(":"));if(r)return"arbitrary.."+r}},_=e=>{const{theme:t,prefix:r}=e,o={nextPart:new Map,validators:[]};return C(Object.entries(e.classGroups),r).forEach((([e,r])=>{z(r,o,e,t)})),o},z=(e,t,r,o)=>{e.forEach((e=>{if("string"!=typeof e){if("function"==typeof e)return j(e)?void z(e(o),t,r,o):void t.validators.push({validator:e,classGroupId:r});Object.entries(e).forEach((([e,n])=>{z(n,I(t,e),r,o)}))}else(""===e?t:I(t,e)).classGroupId=r}))},I=(e,t)=>{let r=e;return t.split("-").forEach((e=>{r.nextPart.has(e)||r.nextPart.set(e,{nextPart:new Map,validators:[]}),r=r.nextPart.get(e)})),r},j=e=>e.isThemeGetter,C=(e,t)=>t?e.map((([e,r])=>[e,r.map((e=>"string"==typeof e?t+e:"object"==typeof e?Object.fromEntries(Object.entries(e).map((([e,r])=>[t+e,r]))):e))])):e,P=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,r=new Map,o=new Map;const n=(n,s)=>{r.set(n,s),t++,t>e&&(t=0,o=r,r=new Map)};return{get(e){let t=r.get(e);return void 0!==t?t:void 0!==(t=o.get(e))?(n(e,t),t):void 0},set(e,t){r.has(e)?r.set(e,t):n(e,t)}}},O=e=>{const{separator:t,experimentalParseClassName:r}=e,o=1===t.length,n=t[0],s=t.length,a=e=>{const r=[];let a,l=0,i=0;for(let c=0;c<e.length;c++){let d=e[c];if(0===l){if(d===n&&(o||e.slice(c,c+s)===t)){r.push(e.slice(i,c)),i=c+s;continue}if("/"===d){a=c;continue}}"["===d?l++:"]"===d&&l--}const c=0===r.length?e:e.substring(i),d=c.startsWith("!");return{modifiers:r,hasImportantModifier:d,baseClassName:d?c.substring(1):c,maybePostfixModifierPosition:a&&a>i?a-i:void 0}};return r?e=>r({className:e,parseClassName:a}):a},R=e=>{if(e.length<=1)return e;const t=[];let r=[];return e.forEach((e=>{"["===e[0]?(t.push(...r.sort(),e),r=[]):r.push(e)})),t.push(...r.sort()),t};var T,G,A;function M(){let e,t,r=0,o="";for(;r<arguments.length;)(e=arguments[r++])&&(t=W(e))&&(o&&(o+=" "),o+=t);return o}const W=e=>{if("string"==typeof e)return e;let t,r="";for(let o=0;o<e.length;o++)e[o]&&(t=W(e[o]))&&(r&&(r+=" "),r+=t);return r};function D(e,...t){let r,o,n,s=function(l){const i=t.reduce(((e,t)=>t(e)),e());return r=(e=>({cache:P(e.cacheSize),parseClassName:O(e),...E(e)}))(i),o=r.cache.get,n=r.cache.set,s=a,a(l)};function a(e){const t=o(e);if(t)return t;const s=((e,t)=>{const{parseClassName:r,getClassGroupId:o,getConflictingClassGroupIds:n}=t,s=[];let a="";for(let t=e.length-1;t>=0;){for(;" "===e[t];)--t;const l=e.lastIndexOf(" ",t),i=e.slice(-1===l?0:l+1,t+1);t=l;const{modifiers:c,hasImportantModifier:d,baseClassName:u,maybePostfixModifierPosition:p}=r(i);let m=Boolean(p),b=o(m?u.substring(0,p):u);if(!b){if(!m){a=i+(a.length>0?" "+a:a);continue}if(b=o(u),!b){a=i+(a.length>0?" "+a:a);continue}m=!1}const f=R(c).join(":"),g=d?f+"!":f,h=g+b;if(s.includes(h))continue;s.push(h);const y=n(b,m);for(let e=0;e<y.length;++e){const t=y[e];s.push(g+t)}a=i+(a.length>0?" "+a:a)}return a})(e,r);return n(e,s),s}return function(){return s(M.apply(null,arguments))}}const V=e=>{const t=t=>t[e]||[];return t.isThemeGetter=!0,t},B=/^\[(?:([a-z-]+):)?(.+)\]$/i,L=/^\d+\/\d+$/,$=new Set(["px","full","screen"]),q=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,H=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,U=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,F=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,J=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,X=e=>K(e)||$.has(e)||L.test(e),Z=e=>de(e,"length",ue),K=e=>Boolean(e)&&!Number.isNaN(Number(e)),Q=e=>de(e,"number",K),Y=e=>Boolean(e)&&Number.isInteger(Number(e)),ee=e=>e.endsWith("%")&&K(e.slice(0,-1)),te=e=>B.test(e),re=e=>q.test(e),oe=new Set(["length","size","percentage"]),ne=e=>de(e,oe,pe),se=e=>de(e,"position",pe),ae=new Set(["image","url"]),le=e=>de(e,ae,be),ie=e=>de(e,"",me),ce=()=>!0,de=(e,t,r)=>{const o=B.exec(e);return!!o&&(o[1]?"string"==typeof t?o[1]===t:t.has(o[1]):r(o[2]))},ue=e=>H.test(e)&&!U.test(e),pe=()=>!1,me=e=>F.test(e),be=e=>J.test(e),fe=D((Symbol.toStringTag,()=>{const e=V("colors"),t=V("spacing"),r=V("blur"),o=V("brightness"),n=V("borderColor"),s=V("borderRadius"),a=V("borderSpacing"),l=V("borderWidth"),i=V("contrast"),c=V("grayscale"),d=V("hueRotate"),u=V("invert"),p=V("gap"),m=V("gradientColorStops"),b=V("gradientColorStopPositions"),f=V("inset"),g=V("margin"),h=V("opacity"),y=V("padding"),v=V("saturate"),x=V("scale"),w=V("sepia"),E=V("skew"),S=V("space"),k=V("translate"),N=()=>["auto",te,t],_=()=>[te,t],z=()=>["",X,Z],I=()=>["auto",K,te],j=()=>["","0",te],C=()=>[K,te];return{cacheSize:500,separator:":",theme:{colors:[ce],spacing:[X,Z],blur:["none","",re,te],brightness:C(),borderColor:[e],borderRadius:["none","","full",re,te],borderSpacing:_(),borderWidth:z(),contrast:C(),grayscale:j(),hueRotate:C(),invert:j(),gap:_(),gradientColorStops:[e],gradientColorStopPositions:[ee,Z],inset:N(),margin:N(),opacity:C(),padding:_(),saturate:C(),scale:C(),sepia:j(),skew:C(),space:_(),translate:_()},classGroups:{aspect:[{aspect:["auto","square","video",te]}],container:["container"],columns:[{columns:[re]}],"break-after":[{"break-after":["auto","avoid","all","avoid-page","page","left","right","column"]}],"break-before":[{"break-before":["auto","avoid","all","avoid-page","page","left","right","column"]}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top",te]}],overflow:[{overflow:["auto","hidden","clip","visible","scroll"]}],"overflow-x":[{"overflow-x":["auto","hidden","clip","visible","scroll"]}],"overflow-y":[{"overflow-y":["auto","hidden","clip","visible","scroll"]}],overscroll:[{overscroll:["auto","contain","none"]}],"overscroll-x":[{"overscroll-x":["auto","contain","none"]}],"overscroll-y":[{"overscroll-y":["auto","contain","none"]}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[f]}],"inset-x":[{"inset-x":[f]}],"inset-y":[{"inset-y":[f]}],start:[{start:[f]}],end:[{end:[f]}],top:[{top:[f]}],right:[{right:[f]}],bottom:[{bottom:[f]}],left:[{left:[f]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Y,te]}],basis:[{basis:N()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",te]}],grow:[{grow:j()}],shrink:[{shrink:j()}],order:[{order:["first","last","none",Y,te]}],"grid-cols":[{"grid-cols":[ce]}],"col-start-end":[{col:["auto",{span:["full",Y,te]},te]}],"col-start":[{"col-start":I()}],"col-end":[{"col-end":I()}],"grid-rows":[{"grid-rows":[ce]}],"row-start-end":[{row:["auto",{span:[Y,te]},te]}],"row-start":[{"row-start":I()}],"row-end":[{"row-end":I()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",te]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",te]}],gap:[{gap:[p]}],"gap-x":[{"gap-x":[p]}],"gap-y":[{"gap-y":[p]}],"justify-content":[{justify:["normal","start","end","center","between","around","evenly","stretch"]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal","start","end","center","between","around","evenly","stretch","baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":["start","end","center","between","around","evenly","stretch","baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[y]}],px:[{px:[y]}],py:[{py:[y]}],ps:[{ps:[y]}],pe:[{pe:[y]}],pt:[{pt:[y]}],pr:[{pr:[y]}],pb:[{pb:[y]}],pl:[{pl:[y]}],m:[{m:[g]}],mx:[{mx:[g]}],my:[{my:[g]}],ms:[{ms:[g]}],me:[{me:[g]}],mt:[{mt:[g]}],mr:[{mr:[g]}],mb:[{mb:[g]}],ml:[{ml:[g]}],"space-x":[{"space-x":[S]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[S]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",te,t]}],"min-w":[{"min-w":[te,t,"min","max","fit"]}],"max-w":[{"max-w":[te,t,"none","full","min","max","fit","prose",{screen:[re]},re]}],h:[{h:[te,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[te,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[te,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[te,t,"auto","min","max","fit"]}],"font-size":[{text:["base",re,Z]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Q]}],"font-family":[{font:[ce]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",te]}],"line-clamp":[{"line-clamp":["none",K,Q]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",X,te]}],"list-image":[{"list-image":["none",te]}],"list-style-type":[{list:["none","disc","decimal",te]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[h]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[h]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:["solid","dashed","dotted","double","none","wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",X,Z]}],"underline-offset":[{"underline-offset":["auto",X,te]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:_()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",te]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",te]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[h]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top",se]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",ne]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},le]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[b]}],"gradient-via-pos":[{via:[b]}],"gradient-to-pos":[{to:[b]}],"gradient-from":[{from:[m]}],"gradient-via":[{via:[m]}],"gradient-to":[{to:[m]}],rounded:[{rounded:[s]}],"rounded-s":[{"rounded-s":[s]}],"rounded-e":[{"rounded-e":[s]}],"rounded-t":[{"rounded-t":[s]}],"rounded-r":[{"rounded-r":[s]}],"rounded-b":[{"rounded-b":[s]}],"rounded-l":[{"rounded-l":[s]}],"rounded-ss":[{"rounded-ss":[s]}],"rounded-se":[{"rounded-se":[s]}],"rounded-ee":[{"rounded-ee":[s]}],"rounded-es":[{"rounded-es":[s]}],"rounded-tl":[{"rounded-tl":[s]}],"rounded-tr":[{"rounded-tr":[s]}],"rounded-br":[{"rounded-br":[s]}],"rounded-bl":[{"rounded-bl":[s]}],"border-w":[{border:[l]}],"border-w-x":[{"border-x":[l]}],"border-w-y":[{"border-y":[l]}],"border-w-s":[{"border-s":[l]}],"border-w-e":[{"border-e":[l]}],"border-w-t":[{"border-t":[l]}],"border-w-r":[{"border-r":[l]}],"border-w-b":[{"border-b":[l]}],"border-w-l":[{"border-l":[l]}],"border-opacity":[{"border-opacity":[h]}],"border-style":[{border:["solid","dashed","dotted","double","none","hidden"]}],"divide-x":[{"divide-x":[l]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[l]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[h]}],"divide-style":[{divide:["solid","dashed","dotted","double","none"]}],"border-color":[{border:[n]}],"border-color-x":[{"border-x":[n]}],"border-color-y":[{"border-y":[n]}],"border-color-t":[{"border-t":[n]}],"border-color-r":[{"border-r":[n]}],"border-color-b":[{"border-b":[n]}],"border-color-l":[{"border-l":[n]}],"divide-color":[{divide:[n]}],"outline-style":[{outline:["","solid","dashed","dotted","double","none"]}],"outline-offset":[{"outline-offset":[X,te]}],"outline-w":[{outline:[X,Z]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:z()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[h]}],"ring-offset-w":[{"ring-offset":[X,Z]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",re,ie]}],"shadow-color":[{shadow:[ce]}],opacity:[{opacity:[h]}],"mix-blend":[{"mix-blend":["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"]}],filter:[{filter:["","none"]}],blur:[{blur:[r]}],brightness:[{brightness:[o]}],contrast:[{contrast:[i]}],"drop-shadow":[{"drop-shadow":["","none",re,te]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[d]}],invert:[{invert:[u]}],saturate:[{saturate:[v]}],sepia:[{sepia:[w]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[r]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[i]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[d]}],"backdrop-invert":[{"backdrop-invert":[u]}],"backdrop-opacity":[{"backdrop-opacity":[h]}],"backdrop-saturate":[{"backdrop-saturate":[v]}],"backdrop-sepia":[{"backdrop-sepia":[w]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[a]}],"border-spacing-x":[{"border-spacing-x":[a]}],"border-spacing-y":[{"border-spacing-y":[a]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",te]}],duration:[{duration:C()}],ease:[{ease:["linear","in","out","in-out",te]}],delay:[{delay:C()}],animate:[{animate:["none","spin","ping","pulse","bounce",te]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[x]}],"scale-x":[{"scale-x":[x]}],"scale-y":[{"scale-y":[x]}],rotate:[{rotate:[Y,te]}],"translate-x":[{"translate-x":[k]}],"translate-y":[{"translate-y":[k]}],"skew-x":[{"skew-x":[E]}],"skew-y":[{"skew-y":[E]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",te]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",te]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":_()}],"scroll-mx":[{"scroll-mx":_()}],"scroll-my":[{"scroll-my":_()}],"scroll-ms":[{"scroll-ms":_()}],"scroll-me":[{"scroll-me":_()}],"scroll-mt":[{"scroll-mt":_()}],"scroll-mr":[{"scroll-mr":_()}],"scroll-mb":[{"scroll-mb":_()}],"scroll-ml":[{"scroll-ml":_()}],"scroll-p":[{"scroll-p":_()}],"scroll-px":[{"scroll-px":_()}],"scroll-py":[{"scroll-py":_()}],"scroll-ps":[{"scroll-ps":_()}],"scroll-pe":[{"scroll-pe":_()}],"scroll-pt":[{"scroll-pt":_()}],"scroll-pr":[{"scroll-pr":_()}],"scroll-pb":[{"scroll-pb":_()}],"scroll-pl":[{"scroll-pl":_()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",te]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[X,Z,Q]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}));function ge(e){var t,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e)){var n=e.length;for(t=0;t<n;t++)e[t]&&(r=ge(e[t]))&&(o&&(o+=" "),o+=r)}else for(r in e)e[r]&&(o&&(o+=" "),o+=r);return o}const he=window.wp.apiFetch;var ye=r.n(he);const ve=(...e)=>fe(function(){for(var e,t,r=0,o="",n=arguments.length;r<n;r++)(e=arguments[r])&&(t=ge(e))&&(o&&(o+=" "),o+=t);return o}(e)),xe=async function(e,t,r,o,n){try{(await ye()({path:"/nps-survey/v1/dismiss-nps-survey",method:"POST",headers:{"X-WP-Nonce":npsSurvey.rest_api_nonce,"content-type":"application/json"},data:{plugin_slug:n,current_step:r,dismiss_timespan:o}})).success&&(console.info("NPS Survey dismissed!"),t({npsId:e,type:"SET_SHOW_NPS",payload:!1}))}catch(e){console.error(e)}},we=async function(e,t,r,o,n,s,a){try{s(!0),(await ye()({path:"nps-survey/v1/rating",method:"POST",headers:{"X-WP-Nonce":npsSurvey.rest_api_nonce,"content-type":"application/json"},data:{nps_id:e,plugin_slug:a,rating:t,comment:r}})).success&&(""===o&&n({npsId:e,type:"SET_SHOW_NPS",payload:!1}),n({npsId:e,type:"SET_CURRENT_STEP",payload:o})),s(!1)}catch(e){console.error(e)}},Ee=(e,t,r,o)=>{t.preventDefault(),o||r({npsId:e,type:"SET_CURRENT_STEP",payload:"nps-rating"})},Se=(0,n.forwardRef)((({variant:e="primary",hasSuffixIcon:t=!1,hasPrefixIcon:r=!1,type:n="button",className:s,onClick:a,children:l,disabled:i=!1,id:c="",size:d="medium",...u},p)=>{const m={base:{default:"px-6 py-3",hasPrefixIcon:"pl-4 pr-6 py-3",hasSuffixIcon:"pl-6 pr-4 py-3"},medium:{default:"px-4 py-3 h-11",hasPrefixIcon:"pl-4 pr-6 py-3",hasSuffixIcon:"pl-6 pr-4 py-3"},small:{default:"px-5 py-2 h-[2.625rem]",hasPrefixIcon:"pl-3 pr-5 py-2 h-[2.625rem]",hasSuffixIcon:"pl-5 pr-3 py-2 h-[2.625rem]"}};return(0,o.createElement)("button",{type:n,className:ve("group flex items-center justify-center gap-2 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition duration-150 ease-in-out cursor-pointer border-0",{primary:"text-white bg-nps-button-background border border-solid border-nps-button-background",secondary:"text-zip-body-text bg-white border border-solid border-zip-body-text",dark:"text-white border border-white bg-transparent border-solid",link:"text-border-secondary underline border-0 bg-transparent",blank:"bg-transparent border-transparent"}[e],!r&&!t&&m[d].default,r&&m[d].hasPrefixIcon,t&&m[d].hasSuffixIcon,{base:"text-base font-medium",medium:"text-base font-medium",small:"text-sm font-medium"}[d],{base:"rounded-md",medium:"rounded-md",small:"rounded"}[d],i&&"cursor-not-allowed opacity-70",s),onClick:e=>{a&&"function"==typeof a&&a(e)},ref:p,disabled:i,...c&&{id:c},...u},l)})),ke=({className:e=""})=>(0,o.createElement)("svg",{className:ve("animate-spin size-5 text-white",e),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},(0,o.createElement)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,o.createElement)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"}));function Ne({title:e,titleId:t,...r},n){return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:n,"aria-labelledby":t},r),e?o.createElement("title",{id:t},e):null,o.createElement("path",{fillRule:"evenodd",d:"M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z",clipRule:"evenodd"}))}const _e=o.forwardRef(Ne),ze=function(e){const{message:{plugin_rating_title:t,plugin_rating_content:r},plugin_slug:s,npsId:a}=e,[l,i]=(0,n.useState)(""),c=h((e=>e)),{npsRating:d}=c[a],[u,p]=(0,n.useState)(!1),{dispatch:m}=h();return(0,o.createElement)("div",null,(0,o.createElement)("div",{className:"flex justify-between"},(0,o.createElement)(v,null,t)),(0,o.createElement)(y,null,r),(0,o.createElement)("div",{className:"mt-5"},(0,o.createElement)("form",{onSubmit:async function(e){e.preventDefault(),u||we(a,d,l,"",m,p,s)}},(0,o.createElement)("div",{className:"mt-2"},(0,o.createElement)("textarea",{rows:4,cols:65,name:"comment",id:"comment",className:"block w-full rounded-md py-1.5 text-zip-body-text shadow-sm border border-border-nps-primary border-solid placeholder:text-nps-placeholder-text focus:ring-1 focus:ring-nps-button-background sm:text-sm sm:leading-6",defaultValue:"",value:l,onChange:e=>{i(e.target.value)}})),(0,o.createElement)("div",{className:"mt-3 flex justify-between"},(0,o.createElement)(Se,{className:"relative border-none py-2 px-4 pl-0 font-semibold bg-transparent text-nps-button-background",variant:"primary",onClick:e=>Ee(a,e,m,u),size:"small"},(0,o.createElement)(_e,{className:"w-4"}),(0,x.__)("Back","nps-survey")),(0,o.createElement)(Se,{className:"relative py-2 px-4 font-semibold",variant:"primary",type:"submit",size:"small"},u&&(0,o.createElement)("span",{className:"absolute inset-0 inline-flex items-center justify-center"},(0,o.createElement)(ke,null)),(0,o.createElement)("span",{className:ve(u&&"invisible")},(0,x.__)("Submit","nps-survey")))))))},Ie=function(e){const{message:{feedback_title:t,feedback_content:r,plugin_rating_link:n},dismiss_timespan:s,plugin_slug:a,npsId:l}=e,i=h((e=>e)),{currentStep:c,npsRating:d}=i[l],[u,p]=(0,o.useState)(!1),{dispatch:m}=h(),b=async function(e=!0){we(l,d,"","plugin-rating",m,p,a),xe(l,m,c,s,a),e&&window.open(n,"_blank")};return(0,o.createElement)("div",{className:u&&"opacity-50 cursor-progress"},(0,o.createElement)("div",{className:"flex justify-between"},(0,o.createElement)(v,null,t)),(0,o.createElement)(y,null,r),(0,o.createElement)("div",{className:"flex justify-between mt-5"},(0,o.createElement)(Se,{className:"relative border-none py-2 px-4 pl-0 font-semibold bg-transparent text-nps-button-background",variant:"primary",onClick:e=>Ee(l,e,m),size:"small"},(0,o.createElement)(_e,{className:"w-4"}),(0,x.__)("Back","nps-survey")),(0,o.createElement)("div",{className:"flex justify-start"},(0,o.createElement)(Se,{variant:"link",className:"py-2 px-4 no-underline font-normal",type:"button",onClick:()=>b(!1),size:"small"},(0,x.__)("I already did!","nps-survey")),(0,o.createElement)(Se,{variant:"primary",className:"py-2 px-4 font-semibold",type:"button",onClick:b,size:"small"},(0,x.__)("Rate the Theme","nps-survey")))))};function je({title:e,titleId:t,...r},n){return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:n,"aria-labelledby":t},r),e?o.createElement("title",{id:t},e):null,o.createElement("path",{d:"M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"}))}const Ce=o.forwardRef(je),Pe=e=>{const{plugin_slug:t,dismiss_timespan:r,npsId:n,npsIndex:s}=e,a=h((e=>e)),{dispatch:l}=h(),{showNps:i,currentStep:c,npsRating:d}=a[n],[u,p]=(0,o.useState)(!1);if(i)return(0,o.createElement)("div",{className:"max-w-[30rem] w-full flex bg-white sm:rounded-lg fixed bottom-2 right-2 z-10 p-4 sm:p-5 border border-solid border-border-tertiary shadow-lg",style:{bottom:12*s+8+"px",right:12*s+8+"px"}},(0,o.createElement)("div",{className:u&&"opacity-50 cursor-progress"},"nps-rating"===c?(0,o.createElement)(w,{...e}):"comment"===c?(0,o.createElement)(ze,{...e}):"plugin-rating"===c?(0,o.createElement)(Ie,{...e}):void 0),(0,o.createElement)("span",{className:"absolute top-3 right-3 cursor-pointer",onClick:function(){u||(d&&"plugin-rating"===c&&we(n,d,"","plugin-rating",l,p,t),xe(n,l,c,r,t))}},(0,o.createElement)(Ce,{className:"h-5 w-5 text-zip-app-inactive-icon","aria-hidden":"true"})))},Oe=e=>(0,o.createElement)("div",{className:"nps-survey-wrapper"},e&&(0,o.createElement)(Pe,{...e}));document.querySelectorAll('[data-id^="nps-survey-"]').forEach(((e,t)=>{const r=(0,n.createRoot)(e),s=JSON.parse(e.getAttribute("data-vars"));s.npsId=e.dataset.id,s.npsIndex=t,r.render((0,o.createElement)(Oe,{...s,key:s.npsId}))}))},656:(e,t,r)=>{var o=r(609),n="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},s=o.useState,a=o.useEffect,l=o.useLayoutEffect,i=o.useDebugValue;function c(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!n(e,r)}catch(e){return!0}}var d="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var r=t(),o=s({inst:{value:r,getSnapshot:t}}),n=o[0].inst,d=o[1];return l((function(){n.value=r,n.getSnapshot=t,c(n)&&d({inst:n})}),[e,r,t]),a((function(){return c(n)&&d({inst:n}),e((function(){c(n)&&d({inst:n})}))}),[e]),i(r),r};t.useSyncExternalStore=void 0!==o.useSyncExternalStore?o.useSyncExternalStore:d},763:(e,t,r)=>{var o=r(609),n=r(257),s="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},a=n.useSyncExternalStore,l=o.useRef,i=o.useEffect,c=o.useMemo,d=o.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,r,o,n){var u=l(null);if(null===u.current){var p={hasValue:!1,value:null};u.current=p}else p=u.current;u=c((function(){function e(e){if(!i){if(i=!0,a=e,e=o(e),void 0!==n&&p.hasValue){var t=p.value;if(n(t,e))return l=t}return l=e}if(t=l,s(a,e))return t;var r=o(e);return void 0!==n&&n(t,r)?t:(a=e,l=r)}var a,l,i=!1,c=void 0===r?null:r;return[function(){return e(t())},null===c?void 0:function(){return e(c())}]}),[t,r,o,n]);var m=a(e,u[0],u[1]);return i((function(){p.hasValue=!0,p.value=m}),[m]),d(m),m}},257:(e,t,r)=>{e.exports=r(656)},79:(e,t,r)=>{e.exports=r(763)},609:e=>{e.exports=window.React}},r={};function o(e){var n=r[e];if(void 0!==n)return n.exports;var s=r[e]={exports:{}};return t[e](s,s.exports,o),s.exports}o.m=t,e=[],o.O=(t,r,n,s)=>{if(!r){var a=1/0;for(d=0;d<e.length;d++){r=e[d][0],n=e[d][1],s=e[d][2];for(var l=!0,i=0;i<r.length;i++)(!1&s||a>=s)&&Object.keys(o.O).every((e=>o.O[e](r[i])))?r.splice(i--,1):(l=!1,s<a&&(a=s));if(l){e.splice(d--,1);var c=n();void 0!==c&&(t=c)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[r,n,s]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={792:0,85:0};o.O.j=t=>0===e[t];var t=(t,r)=>{var n,s,a=r[0],l=r[1],i=r[2],c=0;if(a.some((t=>0!==e[t]))){for(n in l)o.o(l,n)&&(o.m[n]=l[n]);if(i)var d=i(o)}for(t&&t(r);c<a.length;c++)s=a[c],o.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return o.O(d)},r=self.webpackChunknps_survey=self.webpackChunknps_survey||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var n=o.O(void 0,[85],(()=>o(45)));n=o.O(n)})();