var u=Object.defineProperty,m=Object.defineProperties;var _=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var d=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var i=(t,e,n)=>e in t?u(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,s=(t,e)=>{for(var n in e||(e={}))d.call(e,n)&&i(t,n,e[n]);if(r)for(var n of r(e))f.call(e,n)&&i(t,n,e[n]);return t},a=(t,e)=>m(t,_(e));import{e as h,d as g,j as v}from"./index.0f8634bc.js";import{A as b,T}from"./TitleDescription.24f9c8bd.js";import{C as x}from"./Card.5e3c0ad5.js";import{C as y}from"./Tabs.e6c401d8.js";import{n as A}from"./vueComponentNormalizer.87056a83.js";import"./ToolsSettings.4a14c135.js";import"./JsonValues.08065e69.js";import"./MaxCounts.3eed5286.js";import"./RadioToggle.98e1e7ec.js";import"./RobotsMeta.2bc11dc9.js";import"./Checkbox.5873a8d2.js";import"./Checkmark.e7547654.js";import"./Row.13b6f3f1.js";import"./SettingsRow.eb71f07b.js";import"./GoogleSearchPreview.308b89da.js";import"./HtmlTagsEditor.aa4d89fe.js";import"./Editor.2fd4385f.js";import"./client.93f15631.js";import"./index.02c35f2a.js";import"./UnfilteredHtml.f98679bb.js";import"./Index.6d59ffe7.js";import"./Tooltip.674a9fb4.js";import"./QuestionMark.83ebd18e.js";import"./Slide.f5d21606.js";import"./TruSeoScore.a520926e.js";import"./Information.f4b75b56.js";var C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"aioseo-search-appearance-taxonomies"},t._l(t.taxonomies,function(o,p){return n("core-card",{key:p,attrs:{slug:o.name+"SA"},scopedSlots:t._u([{key:"header",fn:function(){return[n("div",{staticClass:"icon dashicons",class:""+(o.icon||"dashicons-admin-post")}),n("div",[t._v(" "+t._s(o.label)+" ")])]},proxy:!0},{key:"tabs",fn:function(){return[n("core-main-tabs",{attrs:{tabs:t.tabs,showSaveButton:!1,active:t.settings.internalTabs[o.name+"SA"],internal:""},on:{changed:function(l){return t.processChangeTab(o.name,l)}}})]},proxy:!0}],null,!0)},[n("transition",{attrs:{name:"route-fade",mode:"out-in"}},[n(t.settings.internalTabs[o.name+"SA"],{tag:"component",attrs:{object:o,separator:t.options.searchAppearance.global.separator,options:t.dynamicOptions.searchAppearance.taxonomies[o.name],type:"taxonomies","show-bulk":!1}})],1)],1)}),1)},S=[];const $={components:{Advanced:b,CoreCard:x,CoreMainTabs:y,TitleDescription:T},data(){return{internalDebounce:null,strings:{ctaButtonText:"Upgrade to Pro and Unlock Custom Taxonomies",ctaDescription:this.$t.sprintf("%1$s %2$s lets you set the SEO title and description for custom taxonomies. You can also control all of the robots meta and other options just like the default category and tags taxonomies.","AIOSEO","Pro"),ctaHeader:this.$t.sprintf("Custom Taxonomy Support is only available for licensed %1$s %2$s users.","AIOSEO","Pro")},tabs:[{slug:"title-description",name:"Title & Description",access:"aioseo_search_appearance_settings",pro:!1},{slug:"advanced",name:"Advanced",access:"aioseo_search_appearance_settings",pro:!1}]}},computed:a(s(s({},h(["isUnlicensed"])),g(["options","dynamicOptions","settings"])),{taxonomies(){return this.$aioseo.postData.taxonomies}}),methods:a(s({},v(["changeTab"])),{processChangeTab(t,e){this.internalDebounce||(this.internalDebounce=!0,this.changeTab({slug:`${t}SA`,value:e}),setTimeout(()=>{this.internalDebounce=!1},50))}})},c={};var D=A($,C,S,!1,O,null,null,null);function O(t){for(let e in c)this[e]=c[e]}var nt=function(){return D.exports}();export{nt as default};
