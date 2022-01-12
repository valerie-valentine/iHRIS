(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["resource-add"],{cd8b:function(r,i,e){"use strict";e.r(i);var h,n=function(){var r=this,i=r.$createElement,e=r._self._c||i;return e("ihris-template",{key:r.$route.path},[r._v(" Loading... ")])},a=[],f=(e("d3b7"),e("a026")),m={name:"fhir-page-add",data:function(){return{}},created:function(){this.getTemplate()},methods:{getTemplate:function(){var r=this;fetch("/config/page/"+h).then((function(i){i.json().then((function(i){"OperationOutcome"===i.resourceType?f["default"].component("ihris-template",{name:"ihris-template",data:function(){return{issues:i.issue}},components:{"ihris-outcome":function(){return e.e("fhir-outcome").then(e.bind(null,"adbd"))}},template:'<div><ihris-outcome :issues="issues"></ihris-outcome></div>'}):f["default"].component("ihris-template",{name:"ihris-template",data:function(){return{isEdit:!0,fhirId:void 0,sectionMenu:i.data.sectionMenu,subFields:i.data.subFields,columns:i.data.columns,actions:i.data.actions,links:i.data.links,constraints:i.data.constraints}},components:{"ihris-resource":function(){return Promise.all([e.e("fhir-main~fhir-primary~fhir-search~fhir-secondary~mhero"),e.e("fhir-main~fhir-primary~fhir-search~mhero"),e.e("fhir-primary~fhir-search~mhero"),e.e("fhir-main~fhir-primary"),e.e("fhir-primary")]).then(e.bind(null,"7372"))},"ihris-codesystem":function(){return e.e("fhir-codesystem").then(e.bind(null,"2d9b"))},"ihris-section":function(){return Promise.all([e.e("fhir-main~fhir-primary~fhir-search~fhir-secondary~mhero"),e.e("fhir-main~fhir-primary~fhir-search~mhero"),e.e("fhir-primary~fhir-search~mhero"),e.e("fhir-main~fhir-primary"),e.e("fhir-primary")]).then(e.bind(null,"e07f"))},"ihris-secondary":function(){return Promise.all([e.e("fhir-main~fhir-primary~fhir-search~fhir-secondary~mhero"),e.e("fhir-main~fhir-primary~fhir-search~mhero"),e.e("fhir-primary~fhir-search~mhero"),e.e("fhir-main~fhir-primary"),e.e("fhir-primary")]).then(e.bind(null,"39e1"))},"ihris-array":function(){return Promise.all([e.e("fhir-main~fhir-primary~fhir-search~fhir-secondary~mhero"),e.e("fhir-main~fhir-primary~fhir-search~mhero"),e.e("fhir-primary~fhir-search~mhero"),e.e("fhir-main~fhir-primary"),e.e("fhir-primary")]).then(e.bind(null,"bb1d"))},"fhir-extension":function(){return Promise.all([e.e("fhir-main~fhir-primary~fhir-search~fhir-secondary~mhero"),e.e("fhir-main~fhir-primary~fhir-search~mhero"),e.e("fhir-primary~fhir-search~mhero"),e.e("fhir-main~fhir-primary"),e.e("fhir-primary")]).then(e.bind(null,"6b10"))},"fhir-reference":function(){return Promise.all([e.e("fhir-main~fhir-primary~fhir-search~fhir-secondary~mhero"),e.e("fhir-main~fhir-secondary"),e.e("fhir-secondary")]).then(e.bind(null,"99fa"))},"fhir-backbone-element":function(){return Promise.all([e.e("fhir-main~fhir-primary~fhir-search~fhir-secondary~mhero"),e.e("fhir-main~fhir-secondary"),e.e("fhir-secondary")]).then(e.bind(null,"8142"))},"fhir-string":function(){return Promise.all([e.e("fhir-main~fhir-primary~fhir-search~fhir-secondary~mhero"),e.e("fhir-main~fhir-primary~fhir-search~mhero"),e.e("fhir-primary~fhir-search~mhero"),e.e("fhir-main~fhir-primary"),e.e("fhir-primary")]).then(e.bind(null,"b78c"))},"fhir-attachment":function(){return Promise.all([e.e("fhir-main~fhir-primary~fhir-search~fhir-secondary~mhero"),e.e("fhir-main~fhir-secondary"),e.e("fhir-secondary")]).then(e.bind(null,"ca33"))},"fhir-human-name":function(){return Promise.all([e.e("fhir-main~fhir-primary~fhir-search~fhir-secondary~mhero"),e.e("fhir-main~fhir-primary~fhir-search~mhero"),e.e("fhir-primary~fhir-search~mhero"),e.e("fhir-main~fhir-primary"),e.e("fhir-primary")]).then(e.bind(null,"89c1"))},"fhir-code":function(){return Promise.all([e.e("fhir-main~fhir-primary~fhir-search~fhir-secondary~mhero"),e.e("fhir-main~fhir-primary~fhir-search~mhero"),e.e("fhir-primary~fhir-search~mhero"),e.e("fhir-main~fhir-primary"),e.e("fhir-primary")]).then(e.bind(null,"1131"))},"fhir-date":function(){return Promise.all([e.e("fhir-main~fhir-primary~fhir-search~fhir-secondary~mhero"),e.e("fhir-main~fhir-primary~fhir-search~mhero"),e.e("fhir-primary~fhir-search~mhero"),e.e("fhir-main~fhir-primary"),e.e("fhir-primary")]).then(e.bind(null,"7fb0"))},"fhir-date-time":function(){return Promise.all([e.e("fhir-main~fhir-primary~fhir-search~fhir-secondary~mhero"),e.e("fhir-main~fhir-primary~fhir-search~mhero"),e.e("fhir-primary~fhir-search~mhero"),e.e("fhir-main~fhir-primary"),e.e("fhir-primary")]).then(e.bind(null,"45dd"))},"fhir-period":function(){return Promise.all([e.e("fhir-main~fhir-primary~fhir-search~fhir-secondary~mhero"),e.e("fhir-main~fhir-secondary"),e.e("fhir-secondary")]).then(e.bind(null,"4807"))},"fhir-identifier":function(){return Promise.all([e.e("fhir-main~fhir-primary~fhir-search~fhir-secondary~mhero"),e.e("fhir-main~fhir-primary~fhir-search~mhero"),e.e("fhir-primary~fhir-search~mhero"),e.e("fhir-main~fhir-primary"),e.e("fhir-primary")]).then(e.bind(null,"c408"))},"fhir-contact-point":function(){return Promise.all([e.e("fhir-main~fhir-primary~fhir-search~fhir-secondary~mhero"),e.e("fhir-main~fhir-secondary"),e.e("fhir-secondary")]).then(e.bind(null,"4b80"))},"fhir-address":function(){return Promise.all([e.e("fhir-main~fhir-primary~fhir-search~fhir-secondary~mhero"),e.e("fhir-main~fhir-secondary"),e.e("fhir-secondary")]).then(e.bind(null,"b248"))},"fhir-codeable-concept":function(){return Promise.all([e.e("fhir-main~fhir-primary~fhir-search~fhir-secondary~mhero"),e.e("fhir-main~fhir-primary~fhir-search~mhero"),e.e("fhir-primary~fhir-search~mhero"),e.e("fhir-main~fhir-primary"),e.e("fhir-primary")]).then(e.bind(null,"309c"))},"fhir-uri":function(){return Promise.all([e.e("fhir-main~fhir-primary~fhir-search~fhir-secondary~mhero"),e.e("fhir-main~fhir-secondary"),e.e("fhir-secondary")]).then(e.bind(null,"6d39"))},"fhir-boolean":function(){return Promise.all([e.e("fhir-main~fhir-primary~fhir-search~fhir-secondary~mhero"),e.e("fhir-main~fhir-secondary"),e.e("fhir-secondary")]).then(e.bind(null,"ff03"))},"fhir-positive-int":function(){return Promise.all([e.e("fhir-main~fhir-primary~fhir-search~fhir-secondary~mhero"),e.e("fhir-main~fhir-secondary"),e.e("fhir-secondary")]).then(e.bind(null,"b750"))},"fhir-unsigned-int":function(){return Promise.all([e.e("fhir-main~fhir-primary~fhir-search~fhir-secondary~mhero"),e.e("fhir-main~fhir-secondary"),e.e("fhir-secondary")]).then(e.bind(null,"4c52"))},"fhir-integer":function(){return Promise.all([e.e("fhir-main~fhir-primary~fhir-search~fhir-secondary~mhero"),e.e("fhir-main~fhir-secondary"),e.e("fhir-secondary")]).then(e.bind(null,"eaae"))},"fhir-coding":function(){return Promise.all([e.e("fhir-main~fhir-primary~fhir-search~fhir-secondary~mhero"),e.e("fhir-main~fhir-primary~fhir-search~mhero"),e.e("fhir-primary~fhir-search~mhero"),e.e("fhir-main~fhir-primary"),e.e("fhir-primary")]).then(e.bind(null,"eee9"))},"fhir-money":function(){return Promise.all([e.e("fhir-main~fhir-primary~fhir-search~fhir-secondary~mhero"),e.e("fhir-main~fhir-secondary"),e.e("fhir-secondary")]).then(e.bind(null,"a6ba"))},"fhir-decimal":function(){return e.e("fhir-decimal").then(e.bind(null,"8892"))}},template:i.template}),r.$forceUpdate()})).catch((function(i){console.log(i),f["default"].component("ihris-template",{template:"<div><h1>Error</h1><p>An error occurred trying to load this page</p>.</div>"}),r.$forceUpdate()}))})).catch((function(i){console.log(i),f["default"].component("ihris-template",{template:"<div><h1>Error</h1><p>An error occurred trying to load this page</p>.</div>"}),r.$forceUpdate()}))}},components:{},beforeCreate:function(){h=this.$route.params.page,f["default"].component("ihris-template",{template:"<div>Loading...</div>"})}},o=m,t=e("2877"),c=Object(t["a"])(o,n,a,!1,null,null,null);i["default"]=c.exports}}]);
//# sourceMappingURL=resource-add.98cffd95.js.map