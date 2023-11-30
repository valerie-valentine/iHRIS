"use strict";(self["webpackChunkiHRIS_v5"]=self["webpackChunkiHRIS_v5"]||[]).push([[844],{3633:function(e,t,s){s.r(t),s.d(t,{default:function(){return U}});var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",{staticClass:"py-5"},[s("v-card",{staticClass:"py-4 px-2"},[e.hideLabel?e._e():s("v-card-title",{staticClass:"ma-4"},[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-icon",{staticClass:"mr-2",attrs:{color:"#0d3552"}},[e._v("mdi-table-large")]),s("h4",{staticClass:"font-weight-bold",staticStyle:{color:"#0d3552"}},[e._v(e._s(e.label))]),s("v-spacer"),s("v-row",{staticClass:"pr-4",attrs:{align:"center",justify:"end"}},[s("v-btn",{staticClass:"mr-2",attrs:{color:"primary"},on:{click:function(){e.dialog=!0}}},[s("v-icon",{attrs:{left:""}},[e._v("mdi-chart-box-plus-outline")]),e._v(" Customize Report "+e._s(e.$t("App.hardcoded-texts.Customize Report"))+" ")],1),s("v-btn",{attrs:{color:"info"},on:{click:function(t){return e.reportExport("csv")}}},[e.downloading?s("v-progress-circular",{attrs:{color:"amber",indeterminate:""}}):s("v-icon",{attrs:{left:""}},[e._v("mdi-microsoft-excel")]),e._v(" "+e._s(e.$t("App.hardcoded-texts.Export"))+" ")],1)],1)],1)],1),s("v-divider",{staticClass:"my-2"}),s("v-expansion-panels",{staticClass:"elevation-0",attrs:{hover:""}},[s("v-expansion-panel",[s("v-expansion-panel-header",{attrs:{color:"blue-grey darken-2"},scopedSlots:e._u([{key:"actions",fn:function(){return[s("v-icon",{attrs:{color:"white"}},[e._v(" $expand ")])]},proxy:!0}])},[s("h3",{staticClass:"font-weight-bold subtitle-2 white--text"},[s("v-icon",{staticClass:"mr-2",attrs:{color:"white"}},[e._v("mdi-filter-variant")]),e._v("Filters")],1)]),s("v-expansion-panel-content",[e.hideLabel?e._e():s("v-card-title",{staticClass:"elevation-0"},[e._t("default")],2)],1)],1)],1),e.error_message?s("v-card-subtitle",{staticClass:"white--text error"},[e._v(e._s(e.error_message)+" ")]):e._e(),s("v-data-table",{staticClass:"elevation-1 mt-3",staticStyle:{cursor:"pointer"},attrs:{"footer-props":{"items-per-page-options":e.itemsPerPage},headers:e.headers,items:e.results,loading:e.loading,options:e.options,"server-items-length":e.total,"show-select":e.reportData.displayCheckbox&&!e.hideCheckboxes,"item-key":"id"},on:{"update:options":function(t){e.options=t}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1),s("v-row",{attrs:{justify:"center"}},[s("v-dialog",{attrs:{"max-width":"80%",persistent:""},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[s("v-card",{staticClass:"px-6 py-4"},[s("v-card-title",{staticClass:"justify-center"},[s("span",{staticClass:"text-h6"},[s("v-icon",{staticClass:"mr-2",attrs:{color:"primary",large:""}},[e._v("mdi-table-check")]),e._v(e._s(e.$t("App.hardcoded-texts.selectFeild")))],1)]),s("v-card-text",[s("v-container",{attrs:{fluid:""}},[s("v-row",e._l(e.allHeaders,(function(t){return s("v-col",{key:t.value,attrs:{cols:"12",md:"4",sm:"4"}},[s("v-checkbox",{attrs:{label:t.text,value:t.value,color:"primary","hide-details":""},model:{value:e.selectedColumns,callback:function(t){e.selectedColumns=t},expression:"selectedColumns"}})],1)})),1)],1)],1),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{color:"warning"},on:{click:function(){e.dialog=!1}}},[s("v-icon",{attrs:{left:""}},[e._v("mdi-close-box-multiple")]),e._v(" "+e._s(e.$t("App.hardcoded-texts.Close"))+" ")],1),s("v-btn",{attrs:{color:"warning"},on:{click:e.reset}},[s("v-icon",{attrs:{left:""}},[e._v("mdi-close-box-multiple")]),e._v(" "+e._s(e.$t("App.hardcoded-texts.Reset"))+" ")],1),s("v-btn",{attrs:{color:"primary"},on:{click:e.onFilter}},[s("v-icon",{attrs:{left:""}},[e._v("mdi-content-save-check-outline")]),e._v(" "+e._s(e.$t("App.hardcoded-texts.Apply"))+" ")],1)],1)],1)],1)],1)],1)},a=[],n=s(3905),o=s(9669),l=s.n(o),r={name:"ihris-report",props:["reportData","label","terms","termsConditions","dataURL","page","hideCheckboxes","hideLabel"],data:function(){return{debug:"",downloading:!1,headers:[],allHeaders:[],results:[],selectedColumns:[],options:{itemsPerPage:10},loading:!1,total:0,prevPage:-1,link:[],selected:[],error_message:null,selectAll:!1,dialog:!1}},watch:{selected(){this.selected.length!==this.results.length&&this.selectAll&&(this.selectAll=!1),n.Y.$emit("ihris-report-selections",this.selected,this.reportData,this.terms,this.termsConditions,this.selectAll)},terms:{handler(){this.selectAll=!1,this.getTotalRecords(),this.getData(!0),n.Y.$emit("changedTerms",this.terms)},deep:!0},termsConditions:{handler(){Object.keys(this.terms).length>0&&(this.selectAll=!1,this.getTotalRecords(),this.getData(!0))},deep:!0},options:{handler(){this.getTotalRecords(),this.getData()},deep:!0}},computed:{itemsPerPage(){let e=[5,10,20,50];return e}},created:function(){this.reportData&&this.reportData.fieldsDetails&&this.reportData.fieldsDetails.sort(((e,t)=>null!=e[2]&&null==t[2]||null!=e[2]&&null!=t[2]&&e[2]<t[2]?-1:null!=t[2]&&null==e[2]||null!=e[2]&&null!=t[2]&&e[2]>t[2]?1:-1));for(let e of this.reportData.fieldsDetails)this.headers.push({text:e[0],value:e[1]}),this.allHeaders.push({text:e[0],value:e[1]});n.Y.$on("reload-report",(()=>{this.getTotalRecords(),this.getData()})),n.Y.$on("mhero-select-all",(()=>{this.selected=[],this.selected=this.results,this.selectAll=!0}))},methods:{reset(){this.headers=this.allHeaders,this.dialog=!1},onFilter(){this.dialog=!1,this.headers=this.allHeaders.filter((e=>{if(this.selectedColumns.includes(e.value))return e}))},clickIt:function(e){this.$router.push({name:"resource_view",params:{page:this.page,id:e.id}})},buildTerms(){let e,t={};if(t={query:{bool:{must:[],must_not:[]}}},Object.keys(this.terms).length>0)for(let s in this.terms){if(!this.terms[s]||0===this.terms[s].length)continue;let i;if(e=this.reportData.filters.find((e=>e.field===s)),e.isDropDown||(this.terms[s]=this.terms[s].replace(/\s+/g," ").trim()),i=e.isDropDown?s+".keyword":s,Array.isArray(this.terms[s])){let e={terms:{}};e.terms[i]=[];for(let t of this.terms[s])e.terms[i].push(t);"exclude"===this.termsConditions[s]?t.query.bool.must_not.push(e):t.query.bool.must.push(e)}else if(e.isDropDown){let e={terms:{}};e.terms[i]=[this.terms[s]],"exclude"===this.termsConditions[s]?t.query.bool.must_not.push(e):t.query.bool.must.push(e)}else{let e=this.terms[s].split(" ");for(let a of e){let e={};this.reportData.mappings.mappings.properties[i]&&"text"===this.reportData.mappings.mappings.properties[i].type?(e.wildcard={},e.wildcard[i]="*"+a+"*"):(e.term={},e.term[i]=a),"exclude"===this.termsConditions[s]?t.query.bool.must_not.push(e):t.query.bool.must.push(e)}}}if(e&&e.field&&("startDate"==e.field||"endDate"==e.field)){let s,i=(new Date).toISOString().slice(0,10);"startDate"==e.field&&(s=this.terms.startDate),"endDate"==e.field&&(i=this.terms.endDate),t={query:{bool:{filter:[{range:{startDate:{gte:s}}},{range:{endDate:{lte:i}}}]}}}}return n.Y.$emit("builtESTerms",t),t},getTotalRecords(){let e=`/es/${this.reportData.indexName}/_count`,t=this.buildTerms();t.reportOptions={locationBasedConstraint:this.reportData.locationBasedConstraint},fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((e=>{e.json().then((e=>{this.total=e.count,n.Y.$emit("report-total-records",this.total)}))}))},getData(e){this.loading=!0,this.error_message=null;let t="";e&&(this.options.page=1);let s=this.options.itemsPerPage||10;-1===s&&(s=this.total);let i=this.options.page*this.options.itemsPerPage-this.options.itemsPerPage;t=`/es/${this.reportData.indexName}/_search?size=${s}&from=${i}`,this.prevPage=this.options.page;let a=this.buildTerms();a.reportOptions={locationBasedConstraint:!0};let n=[];for(let o in this.options.sortBy){let e,t=this.options.sortBy[o],s={};e=this.reportData.mappings.mappings.properties[t]&&"text"===this.reportData.mappings.mappings.properties[t].type?t+".keyword":t,this.options.sortDesc[o]?s[e]="desc":s[e]="asc",n.push(s)}a.sort=n,fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then((e=>{e.json().then((e=>{if(this.results=[],e.hits.total.value>0){this.link=e.link;for(let t of e.hits.hits){let e={};for(let s in t["_source"])e[s]=t["_source"][s];e.id=t["_id"],this.results.push(e)}}this.selectAll&&(this.selected=this.results),this.loading=!1})).catch((e=>{this.loading=!1,this.error_message="Unable to load results.",console.log(e)}))})).catch((e=>{this.loading=!1,this.error_message="Unable to load results.",console.log(e)}))},reportExport(e){this.downloading=!0;let t=`/es/export/${e}/${this.reportData.indexName}`,s={query:this.buildTerms(),headers:this.headers,label:this.label,selected:this.selected};l()({url:t,method:"POST",responseType:"blob",data:s}).then((t=>{this.downloading=!1;let s=new Blob([t.data],{type:"text/csv"}),i=document.createElement("a");i.href=window.URL.createObjectURL(s),i.download=`${this.label}.${e}`,i.click()}))}}},h=r,c=s(3736),d=s(3453),p=s.n(d),u=s(3150),m=s(2371),v=s(7118),x=(s(2245),s(172)),g=s(8230),f=s(7764),b=f.Z.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data(){return{inputIndeterminate:this.indeterminate}},computed:{classes(){return{...g.Z.options.computed.classes.call(this),"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate}},computedIcon(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate(e){this.$nextTick((()=>this.inputIndeterminate=e))},inputIndeterminate(e){this.$emit("update:indeterminate",e)},isActive(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox(){const{title:e,...t}=this.attrs$;return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(x.Z,this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",{...t,"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()}),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot(){return[this.genCheckbox(),this.genLabel()]}}}),C=s(2102),y=s(4228),_=s(1859),k=s(4497),D=s(1418),w=s(7352),A=s(6257),$=s(4589),P=s(3325),I=(0,P.Z)((0,w.d)("expansionPanels","v-expansion-panel","v-expansion-panels"),(0,A.J)("expansionPanel",!0)).extend({name:"v-expansion-panel",props:{disabled:Boolean,readonly:Boolean},data(){return{content:null,header:null,nextIsActive:!1}},computed:{classes(){return{"v-expansion-panel--active":this.isActive,"v-expansion-panel--next-active":this.nextIsActive,"v-expansion-panel--disabled":this.isDisabled,...this.groupClasses}},isDisabled(){return this.expansionPanels.disabled||this.disabled},isReadonly(){return this.expansionPanels.readonly||this.readonly}},methods:{registerContent(e){this.content=e},unregisterContent(){this.content=null},registerHeader(e){this.header=e,e.$on("click",this.onClick)},unregisterHeader(){this.header=null},onClick(e){e.detail&&this.header.$el.blur(),this.$emit("click",e),this.isReadonly||this.isDisabled||this.toggle()},toggle(){this.$nextTick((()=>this.$emit("change")))}},render(e){return e("div",{staticClass:"v-expansion-panel",class:this.classes,attrs:{"aria-expanded":String(this.isActive)}},(0,$.z9)(this))}}),B=s(5827),S=s(8625),Z=s(6952);const T=(0,P.Z)(S.Z,Z.Z,(0,A.f)("expansionPanel","v-expansion-panel-content","v-expansion-panel"));var V=T.extend().extend({name:"v-expansion-panel-content",data:()=>({isActive:!1}),computed:{parentIsActive(){return this.expansionPanel.isActive}},watch:{parentIsActive:{immediate:!0,handler(e,t){e&&(this.isBooted=!0),null==t?this.isActive=e:this.$nextTick((()=>this.isActive=e))}}},created(){this.expansionPanel.registerContent(this)},beforeDestroy(){this.expansionPanel.unregisterContent()},render(e){return e(B.Fx,this.showLazyContent((()=>[e("div",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-content",directives:[{name:"show",value:this.isActive}]}),[e("div",{class:"v-expansion-panel-content__wrap"},(0,$.z9)(this,"default",{open:this.isActive}))])])))}}),R=s(6286);const E=(0,P.Z)(Z.Z,(0,A.f)("expansionPanel","v-expansion-panel-header","v-expansion-panel"));var O=E.extend().extend({name:"v-expansion-panel-header",directives:{ripple:R.Z},props:{disableIconRotate:Boolean,expandIcon:{type:String,default:"$expand"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1}},data:()=>({hasMousedown:!1}),computed:{classes(){return{"v-expansion-panel-header--active":this.isActive,"v-expansion-panel-header--mousedown":this.hasMousedown}},isActive(){return this.expansionPanel.isActive},isDisabled(){return this.expansionPanel.isDisabled},isReadonly(){return this.expansionPanel.isReadonly}},created(){this.expansionPanel.registerHeader(this)},beforeDestroy(){this.expansionPanel.unregisterHeader()},methods:{onClick(e){this.$emit("click",e)},genIcon(){const e=(0,$.z9)(this,"actions",{open:this.isActive})||[this.$createElement(x.Z,this.expandIcon)];return this.$createElement(B.Z5,[this.$createElement("div",{staticClass:"v-expansion-panel-header__icon",class:{"v-expansion-panel-header__icon--disable-rotate":this.disableIconRotate},directives:[{name:"show",value:!this.isDisabled}]},e)])}},render(e){return e("button",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-header",class:this.classes,attrs:{tabindex:this.isDisabled?-1:null,type:"button","aria-expanded":this.isActive},directives:[{name:"ripple",value:this.ripple}],on:{...this.$listeners,click:this.onClick,mousedown:()=>this.hasMousedown=!0,mouseup:()=>this.hasMousedown=!1}}),[(0,$.z9)(this,"default",{open:this.isActive},!0),this.hideActions||this.genIcon()])}}),H=s(4622),j=s(1824),q=H.y.extend({name:"v-expansion-panels",provide(){return{expansionPanels:this}},props:{accordion:Boolean,disabled:Boolean,flat:Boolean,hover:Boolean,focusable:Boolean,inset:Boolean,popout:Boolean,readonly:Boolean,tile:Boolean},computed:{classes(){return{...H.y.options.computed.classes.call(this),"v-expansion-panels":!0,"v-expansion-panels--accordion":this.accordion,"v-expansion-panels--flat":this.flat,"v-expansion-panels--hover":this.hover,"v-expansion-panels--focusable":this.focusable,"v-expansion-panels--inset":this.inset,"v-expansion-panels--popout":this.popout,"v-expansion-panels--tile":this.tile}}},created(){this.$attrs.hasOwnProperty("expand")&&(0,j.fK)("expand","multiple",this),Array.isArray(this.value)&&this.value.length>0&&"boolean"===typeof this.value[0]&&(0,j.fK)(':value="[true, false, true]"',':value="[0, 2]"',this)},methods:{updateItem(e,t){const s=this.getValue(e,t),i=this.getValue(e,t+1);e.isActive=this.toggleMethod(s),e.nextIsActive=this.toggleMethod(i)}}}),L=s(6428),z=s(4470),M=s(624),Y=s(2877),F=s(9762),N=(0,c.Z)(h,i,a,!1,null,null,null),U=N.exports;p()(N,{VBtn:u.Z,VCard:m.Z,VCardActions:v.h7,VCardSubtitle:v.Qq,VCardText:v.ZB,VCardTitle:v.EB,VCheckbox:b,VCol:C.Z,VContainer:y.Z,VDataTable:_.Z,VDialog:k.Z,VDivider:D.Z,VExpansionPanel:I,VExpansionPanelContent:V,VExpansionPanelHeader:O,VExpansionPanels:q,VIcon:L.Z,VLayout:z.Z,VProgressCircular:M.Z,VRow:Y.Z,VSpacer:F.Z})}}]);
//# sourceMappingURL=ihris-es-report.02039b43.js.map