"use strict";(self["webpackChunkiHRIS_v5"]=self["webpackChunkiHRIS_v5"]||[]).push([[8983],{8275:function(t,e,r){r.r(e),r.d(e,{default:function(){return c}});var o,a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ihris-template",{key:t.$route.path},[t._v(" Loading... ")])},n=[],i=r(538),p={name:"fhir-report",props:["report"],data:function(){return{}},created:function(){this.$route.params&&this.$route.params.report?o=this.$route.params.report:this.report&&(o=this.report),this.getTemplate()},methods:{getTemplate:function(){fetch("/config/report/"+o).then((t=>{t.json().then((t=>{i["default"].component("ihris-template",{name:"ihris-template",data:function(){return{reportData:t.reportData,dataURL:t.dataURL,terms:{}}},components:{"ihris-report":()=>Promise.all([r.e(3986),r.e(7724),r.e(2242)]).then(r.bind(r,7108)),"ihris-search-term":()=>Promise.all([r.e(3986),r.e(7724),r.e(2242)]).then(r.bind(r,1841))},template:t.reportTemplate,methods:{searchData:function(t,e){this.$set(this.terms,t,e)}}}),this.$forceUpdate(),console.log("updated template")})).catch((t=>{console.log(t),i["default"].component("ihris-template",{template:"<div><h1>Error</h1><p>An error occurred trying to load this report</p>.</div>"}),this.$forceUpdate()}))})).catch((t=>{console.log(t),i["default"].component("ihris-template",{template:"<div><h1>Error</h1><p>An error occurred trying to load this report</p>.</div>"}),this.$forceUpdate()}))}},components:{},beforeCreate:function(){i["default"].component("ihris-template",{template:"<div>Loading...</div>"})}},s=p,h=r(3736),l=(0,h.Z)(s,a,n,!1,null,null,null),c=l.exports}}]);
//# sourceMappingURL=report.a3b97309.js.map