"use strict";(self["webpackChunkiHRIS_v5"]=self["webpackChunkiHRIS_v5"]||[]).push([[743],{1835:function(e,t,i){i.d(t,{Z:function(){return c}});i(6699);var s=i(3986),n=i(5978),a=i(6290),r=i(4589);const o={...s.l,offsetY:!0,offsetOverflow:!0,transition:!1};var c=s.Z.extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:(e,t,i)=>i.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1},hideNoData:Boolean,menuProps:{type:s.Z.options.props.menuProps.type,default:()=>o},noFilter:Boolean,searchInput:{type:String}},data(){return{lazySearch:this.searchInput}},computed:{classes(){return{...s.Z.options.computed.classes.call(this),"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1}},computedItems(){return this.filteredItems},selectedValues(){return this.selectedItems.map((e=>this.getValue(e)))},hasDisplayedItems(){return this.hideSelected?this.filteredItems.some((e=>!this.hasItem(e))):this.filteredItems.length>0},currentRange(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems(){return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((e=>{const t=(0,r.qF)(e,this.itemText),i=null!=t?String(t):"";return this.filter(e,String(this.internalSearch),i)}))},internalSearch:{get(){return this.lazySearch},set(e){this.lazySearch!==e&&(this.lazySearch=e,this.$emit("update:search-input",e))}},isAnyValueAllowed(){return!1},isDirty(){return this.searchIsDirty||this.selectedItems.length>0},isSearching(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps(){const e=s.Z.options.computed.$_menuProps.call(this);return e.contentClass=`v-autocomplete__content ${e.contentClass||""}`.trim(),{...o,...e}},searchIsDirty(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem(){return this.multiple?null:this.selectedItems.find((e=>this.valueComparator(this.getValue(e),this.getValue(this.internalValue))))},listData(){const e=s.Z.options.computed.listData.call(this);return e.props={...e.props,items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch},e}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused(e){e?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive(e){!e&&this.hasSlot&&(this.lazySearch=null)},items(e,t){t&&t.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!e.length||this.activateMenu()},searchInput(e){this.lazySearch=e},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created(){this.setSearch()},destroyed(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged(e,t){if(e!==t){if(!this.autoSelectFirst){const i=t[this.$refs.menu.listIndex];i?this.setMenuIndex(e.findIndex((e=>e===i))):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick((()=>{this.internalSearch&&(1===e.length||this.autoSelectFirst)&&(this.$refs.menu.getTiles(),this.autoSelectFirst&&e.length&&(this.setMenuIndex(0),this.$emit("update:list-index",this.$refs.menu.listIndex)))}))}},onInternalSearchChanged(){this.updateMenuDimensions()},updateMenuDimensions(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex(e){this.searchIsDirty||(this.multiple&&e===r.Do.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&e===r.Do.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:e!==r.Do.backspace&&e!==r.Do["delete"]||this.deleteCurrentItem())},deleteCurrentItem(){const e=this.selectedIndex,t=this.selectedItems[e];if(!this.isInteractive||this.getDisabled(t))return;const i=this.selectedItems.length-1;if(-1===this.selectedIndex&&0!==i)return void(this.selectedIndex=i);const s=this.selectedItems.length,n=e!==s-1?e:e-1,a=this.selectedItems[n];a?this.selectItem(t):this.setValue(this.multiple?[]:null),this.selectedIndex=n},clearableCallback(){this.internalSearch=null,s.Z.options.methods.clearableCallback.call(this)},genInput(){const e=n.Z.options.methods.genInput.call(this);return e.data=(0,a.ZP)(e.data,{attrs:{"aria-activedescendant":(0,r.vO)(this.$refs.menu,"activeTile.id"),autocomplete:(0,r.vO)(e.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),e},genInputSlot(){const e=s.Z.options.methods.genInputSlot.call(this);return e.data.attrs.role="combobox",e},genSelections(){return this.hasSlot||this.multiple?s.Z.options.methods.genSelections.call(this):[]},onClick(e){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(e.target)||this.activateMenu())},onInput(e){if(this.selectedIndex>-1||!e.target)return;const t=e.target,i=t.value;t.value&&this.activateMenu(),this.multiple||""!==i||this.deleteCurrentItem(),this.internalSearch=i,this.badInput=t.validity&&t.validity.badInput},onKeyDown(e){const t=e.keyCode;!e.ctrlKey&&[r.Do.home,r.Do.end].includes(t)||s.Z.options.methods.onKeyDown.call(this,e),this.changeSelectedIndex(t)},onSpaceDown(e){},onTabDown(e){s.Z.options.methods.onTabDown.call(this,e),this.updateSelf()},onUpDown(e){e.preventDefault(),this.activateMenu()},selectItem(e){s.Z.options.methods.selectItem.call(this,e),this.setSearch()},setSelectedItems(){s.Z.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch(){this.$nextTick((()=>{this.multiple&&this.internalSearch&&this.isMenuActive||(this.internalSearch=!this.selectedItems.length||this.multiple||this.hasSlot?null:this.getText(this.selectedItem))}))},updateSelf(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem(e){return this.selectedValues.indexOf(this.getValue(e))>-1},onCopy(e){var t,i;if(-1===this.selectedIndex)return;const s=this.selectedItems[this.selectedIndex],n=this.getText(s);null==(t=e.clipboardData)||t.setData("text/plain",n),null==(i=e.clipboardData)||i.setData("text/vnd.vuetify.autocomplete.item+plain",n),e.preventDefault()}}})},4596:function(e,t,i){i.r(t),i.d(t,{default:function(){return $}});var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-container",{attrs:{"grid-list-xs":""}},[i("v-overlay",{attrs:{value:e.overlay}},[i("v-progress-circular",{attrs:{color:"primary",indeterminate:"",size:"50"}}),i("v-btn",{attrs:{icon:""},on:{click:function(t){e.overlay=!1}}},[i("v-icon",[e._v("mdi-close")])],1)],1),i("v-overlay",{attrs:{value:e.loadingComponents}},[i("v-progress-circular",{attrs:{color:"primary",indeterminate:"",size:"50"}})],1),i("v-navigation-drawer",{staticClass:"primary darken-1 white--text",staticStyle:{"z-index":"3"},attrs:{app:"",clipped:"",permanent:"",right:""}},[i("v-list",{staticClass:"white--text"},[i("v-list-item",[i("v-btn",{staticClass:"secondary",attrs:{dark:""},on:{click:function(t){return e.$router.push("/resource/view/bwpractitioner/"+e.queries.practitioner)}}},[i("v-icon",{attrs:{light:"",left:""}},[e._v("mdi-eye")]),i("span",[e._v("View Health Profession")])],1)],1),i("v-divider",{attrs:{color:"white"}}),e.canEditInspection?i("v-list-item",[i("v-btn",{staticClass:"secondary",attrs:{dark:""},on:{click:function(t){return e.$router.push("/questionnaire/pp-inspection/pp-inspection/"+e.inspectionId+"?practitioner="+e.queries.practitioner+"&application="+e.queries.id)}}},[i("v-icon",{attrs:{light:"",left:""}},[e._v("mdi-pencil")]),i("span",[e._v("Edit Inspection")])],1)],1):e._e(),e.canChangeLocation?i("v-list-item",[i("v-btn",{staticClass:"secondary",attrs:{dark:""},on:{click:function(t){return e.$router.push("/questionnaire/pp-change-location/pp-change-location?practitioner="+e.queries.practitioner+"&application="+e.queries.id)}}},[i("v-icon",{attrs:{light:"",left:""}},[e._v("mdi-swap-horizontal")]),i("span",[e._v("Change Location")])],1)],1):e._e(),1===e.totalLicenses?i("v-list-item",[i("v-btn",{staticClass:"secondary",attrs:{dark:""},on:{click:function(t){return e.$router.push("/questionnaire/pp-generate-license/pp-generate-license/"+e.generateLicenseId+"?practitioner="+e.queries.practitioner+"&application="+e.queries.id)}}},[i("v-icon",{attrs:{light:"",left:""}},[e._v("mdi-pencil")]),i("span",[e._v("Edit Profession Type")])],1)],1):e._e(),i("v-divider",{attrs:{color:"white"}}),e.canAddInspection?i("v-list-item",[i("v-btn",{staticClass:"secondary",attrs:{dark:""},on:{click:function(t){return e.$router.push("/questionnaire/pp-inspection/pp-inspection?practitioner="+e.queries.practitioner+"&application="+e.queries.id)}}},[i("v-icon",{attrs:{light:"",left:""}},[e._v("mdi-checkbox-multiple-marked-circle-outline")]),i("span",[e._v("Add Inspection")])],1)],1):e._e(),e.canApproveApplication?i("v-list-item",[i("v-btn",{staticClass:"primary",attrs:{disabled:!e.hasInspection,dark:""},on:{click:e.activateApplicationAppDialog}},[i("v-icon",{attrs:{light:"",left:""}},[e._v("mdi-check-decagram")]),i("span",[e._v("Approve/Reject")])],1)],1):e._e(),e.canGenerateLicense?i("v-list-item",[i("v-btn",{staticClass:"primary",attrs:{dark:""},on:{click:function(t){return e.$router.push("/questionnaire/pp-generate-license/pp-generate-license?practitioner="+e.queries.practitioner+"&application="+e.queries.id)}}},[i("v-icon",{attrs:{light:"",left:""}},[e._v("mdi-license")]),i("span",[e._v("Generate License")])],1)],1):e._e(),e.canChangeLicenseStatus?i("v-list-item",[i("v-btn",{staticClass:"primary",attrs:{dark:""},on:{click:e.activateChangeStatus}},[i("v-icon",{attrs:{light:"",left:""}},[e._v("mdi-check-decagram")]),i("span",[e._v("Change License Status")])],1)],1):e._e(),e.canRenewLicense?i("v-list-item",[i("v-btn",{staticClass:"primary",attrs:{dark:""},on:{click:function(t){e.renewDialog=!0}}},[i("v-icon",{attrs:{light:"",left:""}},[e._v("mdi-autorenew")]),i("span",[e._v("Renew License")])],1)],1):e._e(),e.canRenewLicense?i("v-list-item",[i("v-btn",{staticClass:"blue",attrs:{dark:""},on:{click:e.print_certificate}},[i("v-icon",{attrs:{light:"",left:""}},[e._v("mdi-download")]),i("span",[e._v("Print License")])],1)],1):e._e()],1)],1),i("v-dialog",{attrs:{persistent:"","max-width":"500px",transition:"dialog-transition"},model:{value:e.applicationApprovalDialog,callback:function(t){e.applicationApprovalDialog=t},expression:"applicationApprovalDialog"}},[i("v-card",[i("v-toolbar",{staticClass:"darken-1 white--text text-uppercase font-weight-bold",attrs:{color:"primary",dark:""}},[e._v(" Process Application "),i("v-spacer"),i("v-btn",{attrs:{icon:"",color:"white"},on:{click:function(t){e.applicationApprovalDialog=!1}}},[i("v-icon",[e._v("mdi-close")])],1)],1),i("v-progress-linear",{attrs:{active:e.loading,indeterminate:e.loading,color:"deep-purple accent-4",rounded:"",height:"6"}}),i("v-card-text",[i("br"),i("v-autocomplete",{attrs:{disabled:e.loading,label:"Status",items:e.appStatusCodes,outlined:"","hide-details":"auto","item-text":"display","item-value":"code","return-object":"",dense:""},model:{value:e.application.applicationStatus,callback:function(t){e.$set(e.application,"applicationStatus",t)},expression:"application.applicationStatus"}})],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"success",disabled:e.loading},on:{click:e.processApplication}},[e._v("Save")])],1)],1)],1),i("v-dialog",{attrs:{persistent:"","max-width":"500px",transition:"dialog-transition"},model:{value:e.licenseApprovalDialog,callback:function(t){e.licenseApprovalDialog=t},expression:"licenseApprovalDialog"}},[i("v-card",[i("v-toolbar",{staticClass:"darken-1 white--text text-uppercase font-weight-bold",attrs:{color:"primary",dark:""}},[e._v(" Approve/Reject License "),i("v-spacer"),i("v-btn",{attrs:{icon:"",color:"white"},on:{click:function(t){e.licenseApprovalDialog=!1}}},[i("v-icon",[e._v("mdi-close")])],1)],1),i("v-progress-linear",{attrs:{active:e.loading,indeterminate:e.loading,color:"deep-purple accent-4",rounded:"",height:"6"}}),i("v-card-text",[i("br"),i("v-autocomplete",{attrs:{disabled:e.loading,label:"Status",items:e.LicenseAppStatusCodes,outlined:"","hide-details":"auto","item-text":"display","item-value":"code","return-object":"",dense:""},model:{value:e.license.licenseStatus,callback:function(t){e.$set(e.license,"licenseStatus",t)},expression:"license.licenseStatus"}})],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"success",disabled:e.loading},on:{click:e.processLicense}},[e._v("Save")])],1)],1)],1),i("v-dialog",{attrs:{persistent:"","max-width":"500px",transition:"dialog-transition"},model:{value:e.changeLicenseStatusDialog,callback:function(t){e.changeLicenseStatusDialog=t},expression:"changeLicenseStatusDialog"}},[i("v-card",[i("v-toolbar",{staticClass:"darken-1 white--text text-uppercase font-weight-bold",attrs:{color:"primary",dark:""}},[e._v(" Change License Status "),i("v-spacer"),i("v-btn",{attrs:{icon:"",color:"white"},on:{click:function(t){e.changeLicenseStatusDialog=!1}}},[i("v-icon",[e._v("mdi-close")])],1)],1),i("v-progress-linear",{attrs:{active:e.loading,indeterminate:e.loading,color:"deep-purple accent-4",rounded:"",height:"6"}}),i("v-card-text",[i("br"),i("v-autocomplete",{attrs:{disabled:e.loading,label:"Status",items:e.LicenseChangeStatusCodes,outlined:"","hide-details":"auto","item-text":"display","item-value":"code","return-object":"",dense:""},model:{value:e.license.licenseStatus,callback:function(t){e.$set(e.license,"licenseStatus",t)},expression:"license.licenseStatus"}})],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"success",disabled:e.loading},on:{click:e.processLicense}},[e._v("Save")])],1)],1)],1),i("v-dialog",{attrs:{persistent:"","max-width":"500px",transition:"dialog-transition"},model:{value:e.renewDialog,callback:function(t){e.renewDialog=t},expression:"renewDialog"}},[i("v-card",[i("v-toolbar",{staticClass:"darken-1 white--text text-uppercase font-weight-bold",attrs:{color:"primary",dark:""}},[e._v(" License Renewal "),i("v-spacer"),i("v-btn",{attrs:{icon:"",color:"white"},on:{click:function(t){e.renewDialog=!1}}},[i("v-icon",[e._v("mdi-close")])],1)],1),i("v-card-text",[i("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on;return[i("v-text-field",e._g({attrs:{label:"Renewal Date*","prepend-icon":"mdi-event",readonly:""},model:{value:e.renewalDateFormatted,callback:function(t){e.renewalDateFormatted=t},expression:"renewalDateFormatted"}},s))]}}]),model:{value:e.dateMenu,callback:function(t){e.dateMenu=t},expression:"dateMenu"}},[i("v-date-picker",{on:{change:function(t){e.renewalDateFormatted=e.formatDate(e.renewalDate)},input:function(t){e.dateMenu=!1}},model:{value:e.renewalDate,callback:function(t){e.renewalDate=t},expression:"renewalDate"}})],1)],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"success",disabled:!e.renewalDate},on:{click:e.renew}},[e._v("Renew")])],1)],1)],1),i("bw-page-view",{key:e.appCompKey,attrs:{id:e.queries.id,page:"pp-license-application"}}),e.license.resource.id?i("bw-page-view",{key:e.licenseCompKey,attrs:{id:e.license.resource.id,page:"pp-license"}}):e._e(),e.generateLicenseId?i("bw-page-view",{attrs:{id:e.generateLicenseId,page:"pp-generate-license"}}):e._e(),e.inspectionId?i("bw-page-view",{attrs:{id:e.inspectionId,page:"pp-inspection"}}):e._e()],1)},n=[],a={props:["queries"],data(){return{overlay:!1,loading:!1,loadingComponents:!1,hasInspection:!0,inspectionId:"",generateLicenseId:"",applicationApprovalDialog:!1,licenseApprovalDialog:!1,changeLicenseStatusDialog:!1,renewDialog:!1,renewalDate:"",dateMenu:!1,renewalDateFormatted:"",appStatusCodes:[],LicenseAppStatusCodes:[],LicenseChangeStatusCodes:[],appCompKey:"application0",licenseCompKey:"license0",application:{resource:{},statusCode:"",applicationStatus:{}},license:{resource:{},statusCode:"",licenseStatus:{}},totalLicenses:0}},computed:{canAddInspection(){return!this.hasInspection&&"pp-role-data-entrant"===this.$store.state.user.role},canEditInspection(){return!(!this.hasInspection||"pp-role-data-entrant"!==this.$store.state.user.role)},canChangeLocation(){return"approved"===this.application.statusCode&&"pp-role-data-entrant"===this.$store.state.user.role},canApproveApplication(){return"approved"!==this.application.statusCode&&"pp-role-manager"===this.$store.state.user.role},canGenerateLicense(){return!(!this.application.statusCode||"approved"!==this.application.statusCode||this.license.resource.id||"pp-role-data-entrant"!==this.$store.state.user.role)},canChangeLicenseStatus(){return!(!this.license.statusCode||"pp-role-data-entrant"!==this.$store.state.user.role&&"pp-role-manager"!==this.$store.state.user.role)},canRenewLicense(){return!(!this.license.statusCode||"active"!==this.license.statusCode||"pp-role-data-entrant"!==this.$store.state.user.role&&"pp-role-manager"!==this.$store.state.user.role)}},methods:{formatDate(e){if(!e)return null;const[t,i,s]=e.split("-");return`${s}-${i}-${t}`},renew(){this.overlay=!0,this.renewDialog=!1;let e,t=this.license.resource.extension.find((e=>"http://ihris.org/fhir/StructureDefinition/ihris-practitioner-reference"===e.url)).valueReference.reference,i=this.license.resource.extension.find((e=>"http://ihris.org/fhir/StructureDefinition/pp-license-application-reference"===e.url)).valueReference.reference,s=this.license.resource.extension.find((e=>"http://ihris.org/fhir/StructureDefinition/license-number"===e.url)).valueString;e=this.renewalDate.split("-")[1]<4?this.renewalDate.split("-")[0]+"-03":parseInt(this.renewalDate.split("-")[0])+1+"-03",e=this.$moment(e,"YYYY-MM").endOf("month").format("YYYY-MM-DD");let n={resourceType:"Basic",meta:{profile:["http://ihris.org/fhir/StructureDefinition/pp-license-profile"]},extension:[{url:"http://ihris.org/fhir/StructureDefinition/start-date",valueDate:this.renewalDate},{url:"http://ihris.org/fhir/StructureDefinition/end-date",valueDate:e},{url:"http://ihris.org/fhir/StructureDefinition/license-number",valueString:s},{url:"http://ihris.org/fhir/StructureDefinition/pp-license-status",valueCoding:{system:"http://ihris.org/fhir/CodeSystem/pp-license-status-codesystem",code:"active",display:"Active"}},{url:"http://ihris.org/fhir/StructureDefinition/pp-license-application-reference",valueReference:{reference:i}},{url:"http://ihris.org/fhir/StructureDefinition/ihris-practitioner-reference",valueReference:{reference:t}},{url:"http://ihris.org/fhir/StructureDefinition/ihris-related-group",extension:[{url:"practitioner",valueString:t}]}]},a={method:"POST",headers:{"Content-Type":"application/fhir+json"},redirect:"manual",body:JSON.stringify(n)};fetch("/fhir/Basic",a).then((e=>{this.overlay=!1,201===e.status?(this.getLatestLicense(),this.$store.commit("setMessage",{type:"success",text:"License Renewed"})):this.$store.commit("setMessage",{type:"error",text:"Failed to renew license."})})).catch((()=>{this.overlay=!1,this.$store.commit("setMessage",{type:"error",text:"Failed to renew license."})}))},getInspection(){fetch("/fhir/Basic?_profile=http://ihris.org/fhir/StructureDefinition/pp-inspection-profile&_elements=id&ppapplication=Basic/"+this.queries.id).then((e=>{e.json().then((e=>{e.entry&&e.entry.length>0?(this.hasInspection=!0,this.inspectionId=e.entry[0].resource.id):this.hasInspection=!1,setTimeout((()=>{this.getLatestLicense()}),500)}))}))},getLatestLicense(){fetch("/fhir/Basic?_profile=http://ihris.org/fhir/StructureDefinition/pp-license-profile&_count=1&_sort=-_id&ppapplication=Basic/"+this.queries.id).then((e=>{e.json().then((e=>{e.entry&&e.entry.length>0&&(this.license.resource=e.entry[0].resource,this.license.licenseStatus=this.license.resource.extension.find((e=>"http://ihris.org/fhir/StructureDefinition/pp-license-status"===e.url)).valueCoding,this.license.statusCode=this.license.licenseStatus.code,this.licenseCompKey="license"+ ++this.licenseCompKey.split("license")[1]),setTimeout((()=>{this.getLatestGenerateLicense()}),500)}))}))},countLicenses(){fetch("/fhir/Basic?_profile=http://ihris.org/fhir/StructureDefinition/pp-license-profile&_count=0&ppapplication=Basic/"+this.queries.id).then((e=>{e.json().then((e=>{this.totalLicenses=e.total}))}))},getLatestGenerateLicense(){fetch("/fhir/Basic?_profile=http://ihris.org/fhir/StructureDefinition/pp-generate-license-profile&_count=1&_sort=-_id&_elements=id&ppapplication=Basic/"+this.queries.id).then((e=>{e.json().then((e=>{e.entry&&e.entry.length>0&&(this.generateLicenseId=e.entry[0].resource.id),this.loadingComponents=!1}))}))},getApplication(){fetch("/fhir/Basic/"+this.queries.id).then((e=>e.json().then((e=>{this.application.resource=e,this.application.applicationStatus=e.extension.find((e=>"http://ihris.org/fhir/StructureDefinition/pp-application-status"===e.url)).valueCoding,this.application.statusCode=this.application.applicationStatus.code,this.appCompKey="application"+ ++this.appCompKey.split("application")[1],setTimeout((()=>{this.getInspection()}),500)}))))},activateApplicationAppDialog(){0===this.appStatusCodes.length&&this.loadAppStatusCodes(),this.applicationApprovalDialog=!0},activateLicenseAppDialog(){0===this.LicenseAppStatusCodes.length&&this.loadLicenseAppStatusCodes(),this.licenseApprovalDialog=!0},activateChangeStatus(){0===this.LicenseChangeStatusCodes.length&&this.loadLicenseChangeStatusCodes(),this.changeLicenseStatusDialog=!0},async loadAppStatusCodes(){this.loading=!0,this.appStatusCodes=await this.$fhirutils.expand("http://ihris.org/fhir/StructureDefinition/pp-application-status-valueset"),this.loading=!1},async loadLicenseAppStatusCodes(){this.loading=!0,this.LicenseAppStatusCodes=await this.$fhirutils.expand("http://ihris.org/fhir/StructureDefinition/pp-license-approval-status-valueset"),this.loading=!1},async loadLicenseChangeStatusCodes(){this.loading=!0,this.LicenseChangeStatusCodes=await this.$fhirutils.expand("http://ihris.org/fhir/StructureDefinition/pp-license-change-status-valueset"),this.loading=!1},processApplication(){let e=this.application.resource.extension.findIndex((e=>"http://ihris.org/fhir/StructureDefinition/pp-application-status"===e.url));this.application.resource.extension[e].valueCoding=this.application.applicationStatus,this.applicationApprovalDialog=!1,this.overlay=!0;let t={method:"PUT",headers:{"Content-Type":"application/fhir+json"},redirect:"manual",body:JSON.stringify(this.application.resource)};fetch("/fhir/Basic/"+this.application.resource.id,t).then((e=>{201===e.status||200===e.status?(this.getApplication(),this.overlay=!1,this.$store.commit("setMessage",{type:"success",text:"Application Processed Successfully."})):this.$store.commit("setMessage",{type:"error",text:"Failed to process application, please retry."})})).catch((()=>{this.$store.commit("setMessage",{type:"error",text:"Failed to process application, please retry."})}))},processLicense(){let e=this.license.resource.extension.findIndex((e=>"http://ihris.org/fhir/StructureDefinition/pp-license-status"===e.url));this.license.resource.extension[e].valueCoding=this.license.licenseStatus,this.licenseApprovalDialog=!1,this.changeLicenseStatusDialog=!1,this.overlay=!0;let t={method:"PUT",headers:{"Content-Type":"application/fhir+json"},redirect:"manual",body:JSON.stringify(this.license.resource)};fetch("/fhir/Basic/"+this.license.resource.id,t).then((e=>{201===e.status||200===e.status?(this.overlay=!1,this.$store.commit("setMessage",{type:"success",text:"License Processed Successfully."}),this.getLatestLicense()):this.$store.commit("setMessage",{type:"error",text:"Failed to process license, please retry."})})).catch((()=>{this.$store.commit("setMessage",{type:"error",text:"Failed to process license, please retry."})}))},print_certificate(){this.overlay=!0,fetch("/site/pp/print_license/"+this.queries.id+"/"+this.queries.practitioner).then((e=>{e.blob().then((e=>{fetch("/fhir/Practitioner/"+this.queries.practitioner).then((t=>{t.json().then((t=>{this.overlay=!1;let i="",s=t.name.find((e=>{e.use}));if(!s&&t.name&&t.name.length>0&&(s=t.name[0]),s){let e=s.extension&&s.extension.find((e=>"http://ihris.org/fhir/StructureDefinition/ihris-practitioner-prefix"===e.url));e&&(i+=e.valueCoding.display),s.given&&(i&&(i+=" "),i+=s.given.join(" ")),s.family&&(i&&(i+=" "),i+=s.family)}let n=document.createElement("a");n.href=window.URL.createObjectURL(e),n.download=`${i}.pdf`,n.click()})).catch((()=>{this.overlay=!1}))})).catch((()=>{this.overlay=!1}))})).catch((()=>{this.overlay=!1}))})).catch((()=>{this.overlay=!1}))}},created(){this.loadingComponents=!0,this.getApplication(),this.countLicenses()},components:{"bw-page-view":()=>i.e(6688).then(i.bind(i,6688))}},r=a,o=i(3736),c=i(3453),l=i.n(c),p=i(1835),h=i(3150),u=i(2371),d=i(7118),v=i(4228),g=i(9771),m=i(4497),f=i(1418),S=i(6428),y=i(6816),I=i(7620),D=i(1152),x=i(5132),C=i(1058),w=i(624),b=i(7003),L=i(9762),_=i(5978),k=i(6656),A=(0,o.Z)(r,s,n,!1,null,null,null),$=A.exports;l()(A,{VAutocomplete:p.Z,VBtn:h.Z,VCard:u.Z,VCardActions:d.h7,VCardText:d.ZB,VContainer:v.Z,VDatePicker:g.Z,VDialog:m.Z,VDivider:f.Z,VIcon:S.Z,VList:y.Z,VListItem:I.Z,VMenu:D.Z,VNavigationDrawer:x.Z,VOverlay:C.Z,VProgressCircular:w.Z,VProgressLinear:b.Z,VSpacer:L.Z,VTextField:_.Z,VToolbar:k.Z})}}]);
//# sourceMappingURL=743.5ea7888b.js.map