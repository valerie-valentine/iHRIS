(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["fhir-main~fhir-secondary"],{"5e89":function(e,t,i){var s=i("861d"),r=Math.floor;e.exports=function(e){return!s(e)&&isFinite(e)&&r(e)===e}},"8ba4":function(e,t,i){var s=i("23e7"),r=i("5e89");s({target:"Number",stat:!0},{isInteger:r})},"99fa":function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ihris-element",{attrs:{edit:e.edit,loading:e.loading},scopedSlots:e._u([{key:"form",fn:function(){return["tree"==e.displayType?i("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"290px","max-height":"500px"},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on;return[i("v-text-field",e._g({attrs:{label:e.$t("App.fhir-reference."+e.display),readonly:"",outlined:"","hide-details":"auto",rules:e.rules,"error-messages":e.errors,loading:e.loading,dense:""},scopedSlots:e._u([{key:"label",fn:function(){return[e._v(e._s(e.$t("App.fhir-reference."+e.display))+" "),e.required?i("span",{staticClass:"red--text font-weight-bold"},[e._v("*")]):e._e()]},proxy:!0}],null,!0),model:{value:e.displayValue,callback:function(t){e.displayValue=t},expression:"displayValue"}},s))]}}],null,!1,2315796841),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[e.disabled||e.preset&&"resource_add"===e.$route.name?e._e():i("v-card",[i("v-treeview",{attrs:{active:e.active,items:e.items,"load-children":e.fetchChildren,open:e.open,"item-disabled":"locked",activatable:"","multiple-active":!1,"selection-type":"independent",loading:e.loading},on:{"update:active":function(t){e.active=t},"update:open":function(t){e.open=t}},scopedSlots:e._u([{key:"label",fn:function(t){var s=t.item;return[s.isFacility?i("v-icon",{staticClass:"pr-2",attrs:{color:"teal darken-2"}},[e._v(" mdi-domain ")]):i("v-icon",{staticClass:"pr-2",attrs:{color:"teal darken-2"}},[e._v(" mdi-map-marker ")]),e._v(" "+e._s(s.name)+" ")]}}],null,!1,284449578)})],1)],1):i("v-autocomplete",{attrs:{loading:e.loading,items:e.items,"search-input":e.search,"cache-items":"",flat:"","hide-no-data":"","hide-details":"",label:e.display,outlined:"",dense:"",placeholder:"Start typing for selection",rules:e.rules,disabled:e.disabled||e.preset&&"resource_add"===e.$route.name,"error-messages":e.errors},on:{"update:searchInput":function(t){e.search=t},"update:search-input":function(t){e.search=t},change:function(t){e.errors=[]}},scopedSlots:e._u([{key:"label",fn:function(){return[e._v(e._s(e.$t("App.fhir-reference."+e.display))+" "),e.required?i("span",{staticClass:"red--text font-weight-bold"},[e._v("*")]):e._e()]},proxy:!0}]),model:{value:e.select,callback:function(t){e.select=t},expression:"select"}})]},proxy:!0},{key:"header",fn:function(){return[e._v(" "+e._s(e.$t("App.fhir-reference."+e.display))+" ")]},proxy:!0},{key:"value",fn:function(){return[e._v(" "+e._s(e.displayValue)+" ")]},proxy:!0}])})},r=[],a=(i("7db0"),i("caad"),i("b0c0"),i("d3b7"),i("ac1f"),i("8a79"),i("2532"),i("5319"),i("841c"),i("9911"),i("b85c")),n=(i("96cf"),i("1da1")),o=i("b287"),l=i("b383"),c="http://hl7.org/fhir/StructureDefinition/",u={name:"fhir-reference",props:["field","label","sliceName","targetProfile","targetResource","min","max","base-min","base-max","slotProps","path","sub-fields","edit","readOnlyIfSet","constraints","displayType","initialValue","overrideValue"],components:{IhrisElement:o["a"]},data:function(){return{source:{path:"",data:{}},value:{reference:""},qField:"valueReference",loading:!1,search:"",menu:!1,items:[],select:"",resource:"",awaitingSearch:!1,displayValue:"",preset:!1,disabled:!1,errors:[],lockWatch:!1,active:[],open:[],treeLookup:{},allAllowed:!0,isFacility:!1}},created:function(){this.setupData()},watch:{slotProps:{handler:function(){this.lockWatch||this.setupData()},deep:!0},search:function(e){var t=this;this.awaitingSearch||setTimeout((function(){e&&e.length>1&&t.querySelections(t.search),t.awaitingSearch=!1}),500),this.awaitingSearch=!0},select:function(e){this.value.reference=e,this.getDisplay()},active:function(){this.active.length?(this.select=this.active[0],this.displayValue=this.treeLookup[this.select]):(this.select=void 0,this.displayValue=""),this.menu=!1}},methods:{setupData:function(){if(this.targetProfile&&this.targetResource&&(this.targetProfile.replace(c,"")===this.targetResource?this.allAllowed=!0:this.allAllowed=!1,this.resource=this.targetResource),"tree"===this.displayType&&this.setupTreeItems(),this.slotProps&&this.slotProps.source){if(this.source={path:this.slotProps.source.path+"."+this.field,data:{}},this.slotProps.source.fromArray)this.source.data=this.slotProps.source.data;else{var e=this.$fhirutils.pathFieldExpression(this.field),t=this.$fhirpath.evaluate(this.slotProps.source.data,e);this.source.data=t[0]}this.source.data&&(this.preset=!0,this.select=this.source.data.reference,this.lockWatch=!0)}this.disabled=this.readOnlyIfSet&&this.preset},setupTreeItems:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=this.initialValue,this.overrideValue&&(t=this.overrideValue),this.loading=!0,i={},!t){e.next=10;break}return e.next=7,this.checkFacility(t);case 7:i=this.isFacility?{_id:t}:{partof:t},e.next=11;break;case 10:i={partof:"ET"};case 11:i._count=500,s="/fhir/"+this.resource+"?"+l.stringify(i),this.items=[],this.addItems(s,this.items);case 15:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),checkFacility:function(e){var t=this,i={_id:e,_profile:"http://ihris.org/fhir/StructureDefinition/ihris-facility",_summary:"count"},s="/fhir/"+this.resource+"?"+l.stringify(i);return new Promise((function(e){fetch(s).then((function(i){i.ok?i.json().then((function(i){i.total&&1==i.total&&(t.isFacility=!0),e()})).catch((function(t){console.log("failed to check facility for",s,t),e()})):(console.log("failed to check facility for",s,i.status),e())})).catch((function(t){console.log("failed to check facility for",s,t),e()}))}))},checkChildren:function(e){var t={partof:e.id,_summary:"count"},i="/fhir/"+this.resource+"?"+l.stringify(t);return new Promise((function(t){fetch(i).then((function(s){s.ok?s.json().then((function(i){i.total&&i.total>0&&(e.children=[]),t()})).catch((function(e){console.log("failed to check children for",i,e),t()})):(console.log("failed to check children for",i,s.status),t())})).catch((function(e){console.log("failed to check children for",i,e),t()}))}))},addItems:function(e,t){var i=this;console.log("the url",e),fetch(e).then((function(s){s.ok?s.json().then(function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(s){var r,n,o,l,c,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!(s.entry&&s.entry.length>0)){e.next=22;break}r=Object(a["a"])(s.entry),e.prev=2,r.s();case 4:if((n=r.n()).done){e.next=14;break}return o=n.value,l=!i.allAllowed&&!o.resource.meta.profile.includes(i.targetProfile),c={id:o.resource.resourceType+"/"+o.resource.id,name:o.resource.name,locked:l,isFacility:"http://ihris.org/fhir/StructureDefinition/ihris-facility"===i.targetProfile},e.next=10,i.checkChildren(c);case 10:i.treeLookup[c.id]=c.name,t.push(c);case 12:e.next=4;break;case 14:e.next=19;break;case 16:e.prev=16,e.t0=e["catch"](2),r.e(e.t0);case 19:return e.prev=19,r.f(),e.finish(19);case 22:s.link?(u=s.link.find((function(e){return"next"===e.relation})),u?i.addItems(u.url,t):i.loading=!1):i.loading=!1;case 23:case"end":return e.stop()}}),e,null,[[2,16,19,22]])})));return function(t){return e.apply(this,arguments)}}()).catch((function(t){console.log("Failed to add items for",e,t),i.loading=!1})):(console.log("//////////////////////////////"),console.log("Failed to add items for",e,s.status),i.loading=!1)})).catch((function(t){console.log("Failed to add items for",e,t),i.loading=!1}))},fetchChildren:function(e){var t=this,i={};i={partof:e.id,_count:500};var s="/fhir/"+this.resource+"?"+l.stringify(i);return this.loading=!0,this.addItems(s,e.children),new Promise((function(e){var i=0,s=function s(){!t.loading||i++>100?e():setTimeout(s,200)};s()}))},querySelections:function(e){var t=this;this.loading=!0;var i={"name:contains":e};this.targetProfile.endsWith(this.resource)||(i._profile=this.targetProfile);var s="/fhir/"+this.resource+"?"+l.stringify(i);fetch(s).then((function(e){e.ok?e.json().then(function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(i){var s,r,n,o,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.items=[],!i.entry||!i.entry.length){e.next=23;break}s=Object(a["a"])(i.entry),e.prev=3,s.s();case 5:if((r=s.n()).done){e.next=15;break}return n=r.value,o=n.resource.resourceType+"/"+n.resource.id,l={value:o},e.next=11,t.$fhirutils.resourceLookup(o);case 11:l.text=e.sent,t.items.push(l);case 13:e.next=5;break;case 15:e.next=20;break;case 17:e.prev=17,e.t0=e["catch"](3),s.e(e.t0);case 20:return e.prev=20,s.f(),e.finish(20);case 23:t.loading=!1;case 24:case"end":return e.stop()}}),e,null,[[3,17,20,23]])})));return function(t){return e.apply(this,arguments)}}()):(console.log("Failed to retrieve",t.resource),t.loading=!1)}))},getDisplay:function(){var e=this;(!this.edit||this.preset)&&this.value&&this.value.reference&&(this.loading=!0,this.$fhirutils.resourceLookup(this.value.reference).then((function(t){e.displayValue=t,"tree"!==e.displayType&&e.items.push({text:t,value:e.value.reference}),e.loading=!1})))}},computed:{index:function(){return this.slotProps?this.slotProps.input:void 0},display:function(){return this.slotProps&&this.slotProps.input?this.slotProps.input.label:this.label},required:function(){return(this.index||0)<this.min},rules:function(){var e=this;return this.required?[function(t){return!!t||e.display+" is required"}]:[]}}},h=u,d=i("2877"),f=i("6544"),p=i.n(f),v=i("c6a6"),m=i("b0af"),y=i("132d"),g=i("e449"),b=i("8654"),k=i("eb2a"),x=Object(d["a"])(h,s,r,!1,null,null,null);t["default"]=x.exports;p()(x,{VAutocomplete:v["a"],VCard:m["a"],VIcon:y["a"],VMenu:g["a"],VTextField:b["a"],VTreeview:k["a"]})},b287:function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[e.edit?i("v-container",[e._t("form")],2):i("div",[i("v-row",{attrs:{dense:""}},[i("v-col",{staticClass:"font-weight-bold",attrs:{cols:e.$store.state.cols.header}},[e._t("header")],2),e.loading?i("v-col",{attrs:{cols:e.$store.state.cols.content}},[i("v-progress-linear",{attrs:{indeterminate:"",color:"primary"}})],1):i("v-col",{attrs:{cols:e.$store.state.cols.content}},[e._t("value")],2)],1),i("v-divider")],1)],1)},r=[],a={name:"ihris-element",props:["edit","loading"]},n=a,o=i("2877"),l=i("6544"),c=i.n(l),u=i("62ad"),h=i("a523"),d=i("ce7e"),f=i("8e36"),p=i("0fd9"),v=Object(o["a"])(n,s,r,!1,null,null,null);t["a"]=v.exports;c()(v,{VCol:u["a"],VContainer:h["a"],VDivider:d["a"],VProgressLinear:f["a"],VRow:p["a"]})},eaae:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ihris-element",{attrs:{edit:e.edit,loading:!1},scopedSlots:e._u([{key:"form",fn:function(){return[i("v-text-field",{attrs:{"error-messages":e.errors,label:e.display,disabled:e.disabled,name:e.field,outlined:"","hide-details":"auto",rules:e.rules,dense:""},on:{change:function(t){e.errors=[]}},scopedSlots:e._u([{key:"label",fn:function(){return[e._v(e._s(e.display)+" "),e.required?i("span",{staticClass:"red--text font-weight-bold"},[e._v("*")]):e._e()]},proxy:!0}]),model:{value:e.value,callback:function(t){e.value=e._n(t)},expression:"value"}})]},proxy:!0},{key:"header",fn:function(){return[e._v(" "+e._s(e.display)+" ")]},proxy:!0},{key:"value",fn:function(){return[e._v(" "+e._s(e.value)+" ")]},proxy:!0}])})},r=[],a=(i("a9e3"),i("8ba4"),i("b287")),n={name:"fhir-integer",props:["field","label","min","max","id","path","slotProps","sliceName","base-min","base-max","edit","readOnlyIfSet","constraints"],components:{IhrisElement:a["a"]},data:function(){return{source:{path:"",data:{}},value:"",disabled:!1,errors:[],lockWatch:!1}},created:function(){this.setupData()},watch:{slotProps:{handler:function(){this.lockWatch||this.setupData()},deep:!0}},methods:{setupData:function(){if(this.slotProps&&this.slotProps.source){if(this.source={path:this.slotProps.source.path+"."+this.field,data:{}},this.slotProps.source.fromArray)this.source.data=this.slotProps.source.data,this.value=this.source.data,this.lockWatch=!0;else{var e=this.$fhirutils.pathFieldExpression(this.field);this.source.data=this.$fhirpath.evaluate(this.slotProps.source.data,e),1==this.source.data.length&&(this.value=this.source.data[0],this.lockWatch=!0)}this.disabled=this.readOnlyIfSet&&!!this.value}}},computed:{index:function(){return this.slotProps?this.slotProps.input:void 0},display:function(){return this.slotProps&&this.slotProps.input?this.slotProps.input.label:this.label},required:function(){return(this.index||0)<this.min},rules:function(){var e=this,t=function(t){var i=Number(t);return Number.isInteger(i)||e.display+" must be an integer"},i=[t];return this.required&&i.push((function(t){return!!t||e.display+" is required"})),i}}},o=n,l=i("2877"),c=i("6544"),u=i.n(c),h=i("8654"),d=Object(l["a"])(o,s,r,!1,null,null,null);t["default"]=d.exports;u()(d,{VTextField:h["a"]})},ff03:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ihris-element",{attrs:{edit:e.edit,loading:!1},scopedSlots:e._u([{key:"form",fn:function(){return[i("v-switch",{attrs:{label:e.display+": "+e.value.toString(),disabled:e.disabled,rules:e.rules,dense:"","error-messages":e.errors},on:{change:function(t){e.errors=[]}},scopedSlots:e._u([{key:"label",fn:function(){return[e._v(e._s(e.$t("App.fhir-boolean."+e.display))+": "+e._s(e.$t("App.fhir-boolean."+e.value.toString()))+" "),e.required?i("span",{staticClass:"red--text font-weight-bold"},[e._v("*")]):e._e()]},proxy:!0}]),model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})]},proxy:!0},{key:"header",fn:function(){return[e._v(" "+e._s(e.$t("App.fhir-boolean."+e.display))+" ")]},proxy:!0},{key:"value",fn:function(){return[e._v(" "+e._s(e.value)+" ")]},proxy:!0}])})},r=[],a=i("b287"),n={name:"fhir-boolean",props:["field","label","min","max","id","path","slotProps","sliceName","base-min","base-max","edit","readOnlyIfSet","constraints"],components:{IhrisElement:a["a"]},data:function(){return{source:{path:"",data:{}},value:!0,qField:"valueBoolean",disabled:!1,errors:[],lockWatch:!1}},created:function(){this.setupData()},watch:{slotProps:{handler:function(){this.lockWatch||this.setupData()},deep:!0}},methods:{setupData:function(){if(this.slotProps&&this.slotProps.source){if(this.source={path:this.slotProps.source.path+"."+this.field,data:{}},this.slotProps.source.fromArray)this.source.data=this.slotProps.source.data,this.value=this.source.data,this.lockWatch=!0;else{var e=this.$fhirutils.pathFieldExpression(this.field);this.source.data=this.$fhirpath.evaluate(this.slotProps.source.data,e),1==this.source.data.length&&(this.value=this.source.data[0],this.lockWatch=!0)}this.disabled=this.readOnlyIfSet&&!!this.value}}},computed:{index:function(){return this.slotProps&&this.slotProps.input?this.slotProps.input.index:void 0},display:function(){return this.slotProps&&this.slotProps.input?this.slotProps.input.label:this.label},required:function(){return(this.index||0)<this.min},rules:function(){return[]}}},o=n,l=i("2877"),c=i("6544"),u=i.n(c),h=i("b73d"),d=Object(l["a"])(o,s,r,!1,null,null,null);t["default"]=d.exports;u()(d,{VSwitch:h["a"]})}}]);
//# sourceMappingURL=fhir-main~fhir-secondary.97efb240.js.map