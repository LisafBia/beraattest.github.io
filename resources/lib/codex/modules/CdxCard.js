"use strict";const e=require("vue"),s=require("./Icon.js"),a=require("./CdxThumbnail.js"),i=require("./_plugin-vue_export-helper.js");require("./useComputedDirection.js");require("./useComputedLanguage.js");require("./constants.js");const d=e.defineComponent({name:"CdxCard",components:{CdxIcon:s.CdxIcon,CdxThumbnail:a},props:{url:{type:String,default:""},icon:{type:[String,Object],default:""},thumbnail:{type:[Object,null],default:null},forceThumbnail:{type:Boolean,default:!1},customPlaceholderIcon:{type:[String,Object],default:void 0}},setup(t){const o=e.computed(()=>!!t.url),n=e.computed(()=>o.value?"a":"span"),c=e.computed(()=>o.value?t.url:void 0);return{isLink:o,contentTag:n,cardLink:c}}});const u={class:"cdx-card__text"},p={class:"cdx-card__text__title"},m={key:0,class:"cdx-card__text__description"},_={key:1,class:"cdx-card__text__supporting-text"};function h(t,o,n,c,k,C){const r=e.resolveComponent("cdx-thumbnail"),l=e.resolveComponent("cdx-icon");return e.openBlock(),e.createBlock(e.resolveDynamicComponent(t.contentTag),{href:t.cardLink,class:e.normalizeClass(["cdx-card",{"cdx-card--is-link":t.isLink,"cdx-card--title-only":!t.$slots.description&&!t.$slots["supporting-text"]}])},{default:e.withCtx(()=>[t.thumbnail||t.forceThumbnail?(e.openBlock(),e.createBlock(r,{key:0,thumbnail:t.thumbnail,"placeholder-icon":t.customPlaceholderIcon,class:"cdx-card__thumbnail"},null,8,["thumbnail","placeholder-icon"])):t.icon?(e.openBlock(),e.createBlock(l,{key:1,icon:t.icon,class:"cdx-card__icon"},null,8,["icon"])):e.createCommentVNode("v-if",!0),e.createElementVNode("span",u,[e.createElementVNode("span",p,[e.renderSlot(t.$slots,"title")]),t.$slots.description?(e.openBlock(),e.createElementBlock("span",m,[e.renderSlot(t.$slots,"description")])):e.createCommentVNode("v-if",!0),t.$slots["supporting-text"]?(e.openBlock(),e.createElementBlock("span",_,[e.renderSlot(t.$slots,"supporting-text")])):e.createCommentVNode("v-if",!0)])]),_:3},8,["href","class"])}const f=i._export_sfc(d,[["render",h]]);module.exports=f;
