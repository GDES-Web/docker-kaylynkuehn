import{n as o,V as l}from"./js/_plugin-vue2_normalizer.61652a7c.js";import{A as M}from"./js/index.cf60653e.js";import{a as c}from"./js/vuex.esm.8fdeb4b6.js";import{T as O}from"./js/WpTable.e7a99c57.js";import{a as I,b as L,d as U}from"./js/Caret.6d7f2e24.js";import{S as z}from"./js/Exclamation.fd45a7b0.js";import{a as F}from"./js/Image.00bca9a1.js";import"./js/SaveChanges.e40a9083.js";import{S as g}from"./js/Standalone.9c6e0f23.js";import{C as V}from"./js/GoogleSearchPreview.1f5696cc.js";import{S as D}from"./js/External.4c957e9a.js";import{d as N,s as u}from"./js/index.3751d023.js";import{s as W}from"./js/attachments.482685b4.js";import{l as Z}from"./js/loadTruSeo.386f041b.js";import{e as B}from"./js/elemLoaded.9a6eb745.js";import{t as v}from"./js/constants.59a77347.js";import{d as K}from"./js/cleanForSlug.961c836c.js";import"./js/client.e62d6c37.js";import"./js/_commonjsHelpers.f84db168.js";import"./js/translations.c394afe3.js";import"./js/default-i18n.3a91e0e5.js";import"./js/helpers.de7566d0.js";import"./js/portal-vue.esm.98f2e05b.js";import"./js/Index.ffa20ee1.js";import"./js/html.f941cb8b.js";import"./js/isArrayLikeObject.cf278c5f.js";function j(s){return M(v(s).toLowerCase())}function G(s,e,t,i){var n=-1,r=s==null?0:s.length;for(i&&r&&(t=s[++n]);++n<r;)t=e(t,s[n],n,s);return t}var H=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function q(s){return s.match(H)||[]}var J=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function Y(s){return J.test(s)}var b="\\ud800-\\udfff",Q="\\u0300-\\u036f",X="\\ufe20-\\ufe2f",ee="\\u20d0-\\u20ff",te=Q+X+ee,y="\\u2700-\\u27bf",$="a-z\\xdf-\\xf6\\xf8-\\xff",se="\\xac\\xb1\\xd7\\xf7",ie="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",ne="\\u2000-\\u206f",re=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",P="A-Z\\xc0-\\xd6\\xd8-\\xde",ae="\\ufe0e\\ufe0f",x=se+ie+ne+re,w="['’]",p="["+x+"]",oe="["+te+"]",k="\\d+",ce="["+y+"]",C="["+$+"]",S="[^"+b+x+k+y+$+P+"]",le="\\ud83c[\\udffb-\\udfff]",ue="(?:"+oe+"|"+le+")",pe="[^"+b+"]",A="(?:\\ud83c[\\udde6-\\uddff]){2}",R="[\\ud800-\\udbff][\\udc00-\\udfff]",a="["+P+"]",de="\\u200d",d="(?:"+C+"|"+S+")",_e="(?:"+a+"|"+S+")",_="(?:"+w+"(?:d|ll|m|re|s|t|ve))?",m="(?:"+w+"(?:D|LL|M|RE|S|T|VE))?",E=ue+"?",T="["+ae+"]?",me="(?:"+de+"(?:"+[pe,A,R].join("|")+")"+T+E+")*",fe="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",he="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",ge=T+E+me,ve="(?:"+[ce,A,R].join("|")+")"+ge,be=RegExp([a+"?"+C+"+"+_+"(?="+[p,a,"$"].join("|")+")",_e+"+"+m+"(?="+[p,a+d,"$"].join("|")+")",a+"?"+d+"+"+_,a+"+"+m,he,fe,k,ve].join("|"),"g");function ye(s){return s.match(be)||[]}function $e(s,e,t){return s=v(s),e=t?void 0:e,e===void 0?Y(s)?ye(s):q(s):s.match(e)||[]}var Pe="['’]",xe=RegExp(Pe,"g");function we(s){return function(e){return G($e(K(e).replace(xe,"")),s,"")}}var ke=we(function(s,e,t){return e=e.toLowerCase(),s+(t?j(e):e)});const f=ke;const Ce={components:{CoreGoogleSearchPreview:V,SvgCircleCheck:I,SvgCircleClose:L,SvgCircleExclamation:z,SvgExternal:D,SvgPencil:U},mixins:[g,O,F],data(){return{socialImageKey:0,strings:{snippetPreview:this.$t.__("Snippet Preview",this.$td),canonicalUrl:this.$t.__("Canonical URL",this.$td)}}},computed:{...c(["currentPost"]),...c("live-tags",["liveTags"]),tips(){let s=[{label:this.$t.__("Visibility",this.$td),name:"visibility",access:"aioseo_page_advanced_settings"},{label:this.$t.__("SEO Analysis",this.$td),name:"seoAnalysis",access:"aioseo_page_analysis"},{label:this.$t.__("Readability",this.$td),name:"readabilityAnalysis",access:"aioseo_page_analysis"},{label:this.$t.__("Focus Keyphrase",this.$td),name:"focusKeyphrase",access:"aioseo_page_analysis"},{label:this.$t.__("Social",this.$td),name:"social",access:"aioseo_page_social_settings"}].filter(e=>this.$allowed(e.access)&&(e.access!=="aioseo_page_analysis"||this.options.advanced.truSeo));return!this.options.social.facebook.general.enable&&!this.options.social.twitter.general.enable&&(s=s.filter(e=>e.name!=="social")),s.forEach((e,t)=>{s[t]={...e,...this.getData(e.name)}}),s},canImprove(){return this.tips.some(s=>s.type==="error")}},methods:{getIcon(s){switch(s){case"error":return"svg-circle-close";case"warning":return"svg-circle-exclamation";case"success":default:return"svg-circle-check"}},getData(s){const e={};if(s==="visibility"&&(e.value=this.$t.__("Good!",this.$td),e.type="success",(this.currentPost.default?this.dynamicOptions.searchAppearance.postTypes[this.currentPost.postType]&&!this.dynamicOptions.searchAppearance.postTypes[this.currentPost.postType].advanced.robotsMeta.default&&this.dynamicOptions.searchAppearance.postTypes[this.currentPost.postType].advanced.robotsMeta.noindex:this.currentPost.noindex)&&(e.value=this.$t.__("Blocked!",this.$td),e.type="error")),s==="seoAnalysis"){e.value=this.$t.__("N/A",this.$td),e.type="error";const t=this.currentPost.seo_score;Number.isInteger(t)&&(e.value=t+"/100",e.type=80<t?"success":50<t?"warning":"error")}if(s==="readabilityAnalysis"){e.value=this.$t.__("Good!",this.$td),e.type="success";const t=this.currentPost.page_analysis.analysis.readability.errors;t&&0<t&&(e.value=this.$t.sprintf(this.$t._n("%1$s error found!","%1$s errors found!",t,this.$td),t),e.type="error")}if(s==="focusKeyphrase"){e.value=this.$t.__("No focus keyphrase!",this.$td),e.type="error";const t=this.currentPost.keyphrases.focus;t&&t.keyphrase&&(e.value=t.score+"/100",e.type=80<t.score?"success":50<t.score?"warning":"error")}if(s==="social"){e.value=this.$t.__("Good!",this.$td),e.type="success",this.socialImageKey;const t=this.parseTags(this.currentPost.og_title||this.currentPost.title||this.currentPost.tags.title).trim(),i=this.parseTags(this.currentPost.og_description||this.currentPost.description||this.currentPost.tags.description).trim(),n=this.socialImage;(!t||!i||!n)&&(e.value=this.$t.__("Missing social markup!",this.$td),e.type="error")}return{...e,icon:this.getIcon(e.type)}},openSidebar(s){const{closePublishSidebar:e,openGeneralSidebar:t}=window.wp.data.dispatch("core/edit-post");switch(e(),t("aioseo-post-settings-sidebar/aioseo-post-settings-sidebar"),s){case"canonical":case"visibility":this.$bus.$emit("open-post-settings",{tab:"advanced"});break;case"seoAnalysis":this.$bus.$emit("open-post-settings",{tab:"general",card:"basicseo"});break;case"readabilityAnalysis":this.$bus.$emit("open-post-settings",{tab:"general",card:"readability"});break;case"focusKeyphrase":this.$bus.$emit("open-post-settings",{tab:"general",card:"focus"});break;case"social":this.$bus.$emit("open-post-settings",{tab:"social"});break}}},async mounted(){await this.setImageUrl().then(()=>{this.socialImage=this.imageUrl}),this.$bus.$on("updateSocialImagePreview",s=>{this.socialImage=s.image,this.socialImageKey++}),this.$nextTick(()=>{const s=document.querySelector(".aioseo-pre-publish .editor-post-publish-panel__link");s&&(s.innerHTML=this.canImprove?this.$t.__("Your post needs improvement!",this.$td):this.$t.__("You're good to go!",this.$td))})}};var Se=function(){var e=this,t=e._self._c;return e.currentPost.id?t("div",{staticClass:"seo-overview"},[t("ul",{staticClass:"pre-publish-checklist"},e._l(e.tips,function(i,n){return t("li",{key:n},[t("span",{staticClass:"icon"},[t(i.icon,{tag:"component",class:i.type})],1),t("span",[e._v(e._s(i.label)+": "),t("span",{staticClass:"result",class:i.value.endsWith("/100")?i.type:null},[e._v(e._s(i.value))])]),e.dynamicOptions.searchAppearance.postTypes[e.currentPost.postType]&&e.dynamicOptions.searchAppearance.postTypes[e.currentPost.postType].advanced.showMetaBox?t("span",{staticClass:"edit",on:{click:function(r){return e.openSidebar(i.name)}}},[t("svg-pencil")],1):e._e()])}),0),e.$allowed("aioseo_page_analysis")?t("div",{staticClass:"snippet-preview"},[t("p",{staticClass:"title"},[e._v(e._s(e.strings.snippetPreview)+":")]),t("core-google-search-preview",{class:{ismobile:e.currentPost.generalMobilePrev},attrs:{title:e.parseTags(e.currentPost.title||e.currentPost.tags.title||"#post_title #separator_sa #site_title"),separator:e.options.searchAppearance.global.separator,description:e.parseTags(e.currentPost.description||e.currentPost.tags.description||"#post_content")},scopedSlots:e._u([{key:"domain",fn:function(){return[t("a",{attrs:{href:e.liveTags.permalink,target:"_blank"}},[e._v(" "+e._s(e.liveTags.permalink)+" ")])]},proxy:!0}],null,!1,4038479585)})],1):e._e(),e.$allowed("aioseo_page_analysis")&&e.currentPost.canonicalUrl?t("div",{staticClass:"canonical-url"},[t("p",{staticClass:"title"},[e._v(" "+e._s(e.strings.canonicalUrl)+": "),t("span",{staticClass:"edit",on:{click:function(i){return e.openSidebar("canonical")}}},[t("svg-pencil")],1)]),t("a",{attrs:{href:e.currentPost.canonicalUrl,target:"_blank",rel:"noopener noreferrer"}},[t("span",[e._v(e._s(e.currentPost.canonicalUrl))]),t("svg-external")],1)]):e._e()]):e._e()},Ae=[],Re=o(Ce,Se,Ae,!1,null,null,null,null);const h=Re.exports,Ee={};var Te=function(){var e=this,t=e._self._c;return t("svg",{staticClass:"aioseo-facebook-rounded",attrs:{width:"32",height:"32",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("circle",{attrs:{cx:"16",cy:"16",r:"16",fill:"currentColor"}}),t("path",{attrs:{d:"M24 16c0-4.4-3.6-8-8-8s-8 3.6-8 8c0 4 2.9 7.3 6.7 7.9v-5.6h-2V16h2v-1.8c0-2 1.2-3.1 3-3.1.9 0 1.8.2 1.8.2v2h-1c-1 0-1.3.6-1.3 1.2V16h2.2l-.4 2.3h-1.9V24c4-.6 6.9-4 6.9-8z",fill:"#fff"}})])},Me=[],Oe=o(Ee,Te,Me,!1,null,null,null,null);const Ie=Oe.exports,Le={};var Ue=function(){var e=this,t=e._self._c;return t("svg",{staticClass:"aioseo-linkedin-rounded",attrs:{width:"32",height:"32",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("circle",{attrs:{cx:"16",cy:"16",r:"16",fill:"currentColor"}}),t("path",{attrs:{d:"M11.6 24H8.2V13.3h3.4V24zM9.9 11.8C8.8 11.8 8 11 8 9.9 8 8.8 8.9 8 9.9 8c1.1 0 1.9.8 1.9 1.9 0 1.1-.8 1.9-1.9 1.9zM24 24h-3.4v-5.8c0-1.7-.7-2.2-1.7-2.2s-2 .8-2 2.3V24h-3.4V13.3h3.2v1.5c.3-.7 1.5-1.8 3.2-1.8 1.9 0 3.9 1.1 3.9 4.4V24h.2z",fill:"#fff"}})])},ze=[],Fe=o(Le,Ue,ze,!1,null,null,null,null);const Ve=Fe.exports,De={};var Ne=function(){var e=this,t=e._self._c;return t("svg",{staticClass:"aioseo-pinterest-rounded",attrs:{width:"32",height:"32",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("circle",{attrs:{cx:"16",cy:"16",r:"16",fill:"currentColor"}}),t("path",{attrs:{d:"M16.056 6.583c-5.312 0-9.658 4.346-9.658 9.658a9.581 9.581 0 005.795 8.813c0-.724 0-1.448.12-2.173.242-.845 1.207-5.312 1.207-5.312s-.362-.604-.362-1.57c0-1.448.846-2.535 1.811-2.535.845 0 1.328.604 1.328 1.45 0 .844-.603 2.172-.845 3.38-.241.965.483 1.81 1.57 1.81 1.81 0 3.018-2.293 3.018-5.19 0-2.174-1.449-3.743-3.984-3.743-2.898 0-4.709 2.173-4.709 4.587 0 .845.242 1.449.604 1.932.12.241.242.241.12.483 0 .12-.12.603-.24.724-.121.242-.242.362-.483.242-1.329-.604-1.932-2.053-1.932-3.743 0-2.777 2.294-6.036 6.881-6.036 3.743 0 6.157 2.656 6.157 5.553 0 3.743-2.052 6.64-5.19 6.64-1.087 0-2.053-.603-2.415-1.207 0 0-.604 2.173-.725 2.656a10.702 10.702 0 01-.966 2.052c.846.242 1.811.363 2.777.363 5.312 0 9.658-4.347 9.658-9.659.121-4.829-4.225-9.175-9.537-9.175z",fill:"#fff"}})])},We=[],Ze=o(De,Ne,We,!1,null,null,null,null);const Be=Ze.exports,Ke={};var je=function(){var e=this,t=e._self._c;return t("svg",{staticClass:"aioseo-twitter-rounded",attrs:{width:"32",height:"32",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("circle",{attrs:{cx:"16",cy:"16",r:"16",fill:"currentColor"}}),t("path",{attrs:{d:"M24 11c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-2.1 0-3.7 2-3.2 4-2.7-.1-5.1-1.4-6.8-3.4-.9 1.5-.4 3.4 1 4.4-.5 0-1-.2-1.5-.4 0 1.5 1.1 2.9 2.6 3.3-.5.1-1 .2-1.5.1.4 1.3 1.6 2.3 3.1 2.3-1.2.9-3 1.4-4.7 1.2 1.5.9 3.2 1.5 5 1.5 6.1 0 9.5-5.1 9.3-9.8.7-.4 1.3-1 1.7-1.7z",fill:"#fff"}})])},Ge=[],He=o(Ke,je,Ge,!1,null,null,null,null);const qe=He.exports;const Je={components:{SvgFacebookRounded:Ie,SvgLinkedinRounded:Ve,SvgPinterestRounded:Be,SvgTwitterRounded:qe},mixins:[g],data(){return{strings:{title:this.$t.__("Get out the word!",this.$td),description:this.$t.__("Share your content on your favorite social media platforms to drive engagement and increase your SEO.",this.$td)}}},computed:{...c("live-tags",["liveTags"]),socialNetworks(){return[{icon:"svg-twitter-rounded",link:"https://twitter.com/share?url="},{icon:"svg-facebook-rounded",link:"https://www.facebook.com/sharer/sharer.php?u="},{icon:"svg-pinterest-rounded",link:"https://pinterest.com/pin/create/button/?url="},{icon:"svg-linkedin-rounded",link:"https://www.linkedin.com/shareArticle?url="}].map(s=>({...s,link:s.link+this.liveTags.permalink}))}}};var Ye=function(){var e=this,t=e._self._c;return e.liveTags.permalink?t("div",{staticClass:"aioseo-post-publish"},[t("h2",{staticClass:"title"},[e._v(e._s(e.strings.title))]),t("p",{staticClass:"description"},[e._v(e._s(e.strings.description))]),t("div",{staticClass:"links"},e._l(e.socialNetworks,function(i,n){return t("a",{key:n,staticClass:"link",attrs:{target:"_blank",href:i.link}},[t(i.icon,{tag:"component"})],1)}),0)]):e._e()},Qe=[],Xe=o(Je,Ye,Qe,!1,null,null,null,null);const et=Xe.exports;(function(s){if(!N()||!W()||!s.editPost.PluginDocumentSettingPanel)return;const e=s.editPost.PluginDocumentSettingPanel,t=s.editPost.PluginPrePublishPanel,i=s.editPost.PluginPostPublishPanel,n=s.plugins.registerPlugin,r=window.aioseo.user;!r.capabilities.aioseo_page_analysis&&!r.capabilities.aioseo_page_general_settings&&!r.capabilities.aioseo_page_advanced_settings||n("aioseo-publish-panel",{render:()=>s.element.createElement(s.element.Fragment,{},s.element.createElement(e,{title:"AIOSEO",className:"aioseo-document-setting aioseo-seo-overview",icon:s.element.Fragment},s.element.createElement("div",{},s.element.createElement("div",{id:"aioseo-document-setting"}))),s.element.createElement(t,{title:["AIOSEO",":",s.element.createElement("span",{key:"scoreDescription",className:"editor-post-publish-panel__link"})],className:"aioseo-pre-publish aioseo-seo-overview",initialOpen:!0,icon:s.element.Fragment},s.element.createElement("div",{},s.element.createElement("div",{id:"aioseo-pre-publish"}))),s.element.createElement(i,{title:"AIOSEO",initialOpen:!0,icon:s.element.Fragment},s.element.createElement("div",{},s.element.createElement("div",{id:"aioseo-post-publish"}))))})})(window.wp);window.aioseo.currentPost&&window.aioseo.currentPost.context==="post"&&[{id:"aioseo-pre-publish",component:h},{id:"aioseo-document-setting",component:h},{id:"aioseo-post-publish",component:et}].forEach(e=>{document.getElementById(e.id)?new l({store:u,render:t=>t(e.component)}).$mount("#"+e.id):(B("#"+e.id,f(e.id)),document.addEventListener("animationstart",function(t){f(e.id)===t.animationName&&new l({store:u,render:i=>i(e.component)}).$mount("#"+e.id)},{passive:!0}))});window.addEventListener("load",()=>{Z(!1)});