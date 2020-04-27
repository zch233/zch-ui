(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{279:function(e,a,t){"use strict";var n=t(1),s=t(139).trim;n({target:"String",proto:!0,forced:t(280)("trim")},{trim:function(){return s(this)}})},280:function(e,a,t){var n=t(2),s=t(140);e.exports=function(e){return n((function(){return!!s[e]()||"​᠎"!="​᠎"[e]()||s[e].name!==e}))}},281:function(e,a,t){},315:function(e,a,t){},558:function(e,a,t){"use strict";var n=t(1),s=t(86),o=t(41),l=t(17),i=t(15),c=t(89),d=t(61),h=t(43),r=t(14),m=h("splice"),p=r("splice",{ACCESSORS:!0,0:0,1:2}),f=Math.max,u=Math.min;n({target:"Array",proto:!0,forced:!m||!p},{splice:function(e,a){var t,n,h,r,m,p,y=i(this),v=l(y.length),w=s(e,v),g=arguments.length;if(0===g?t=n=0:1===g?(t=0,n=v-w):(t=g-2,n=u(f(o(a),0),v-w)),v+t-n>9007199254740991)throw TypeError("Maximum allowed length exceeded");for(h=c(y,n),r=0;r<n;r++)(m=w+r)in y&&d(h,r,y[m]);if(h.length=n,t<n){for(r=w;r<v-n;r++)p=r+t,(m=r+n)in y?y[p]=y[m]:delete y[p];for(r=v;r>v-n+t;r--)delete y[r-1]}else if(t>n)for(r=v-n;r>w;r--)p=r+t-1,(m=r+n-1)in y?y[p]=y[m]:delete y[p];for(r=0;r<t;r++)y[r+w]=arguments[r+2];return y.length=v-n+t,h}})},559:function(e,a,t){"use strict";var n=t(315);t.n(n).a},568:function(e,a,t){"use strict";t.r(a);t(37),t(58),t(279),t(144),t(141),t(60),t(558),t(82),t(142);var n={name:"ZchCollapse",props:{value:{required:!0,type:[Array,Number,String]},accordion:Boolean},data:function(){return{activeItems:[]}},watch:{value:{immediate:!0,handler:function(){this.activeItems=[].concat(this.value)}}},provide:function(){return{collapse:this}},mounted:function(){var e=this;this.$on("item-click",(function(a){var t=e.activeItems.slice(0);if(e.accordion)t=a.name===t[0]?[]:[a.name];else{var n=t.indexOf(a.name);n>-1?t.splice(n,1):t.push(a.name)}e.$emit("input",t),e.$emit("change",t)}))}},s=t(19),o=Object(s.a)(n,(function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"zch-collapse"},[this._t("default")],2)}),[],!1,null,null,null).exports,l=t(282),i=t(327),c=t.n(i),d={name:"ZchCollapseItem",components:{ZchIcon:l.a},props:{title:String,name:{type:[String,Number],required:!0},disabled:Boolean},inject:["collapse"],computed:{contentVisible:function(){return this.collapse&&this.collapse.activeItems.indexOf(this.name)>=0}},methods:{handleClick:function(){this.disabled||this.collapse&&this.collapse.$emit("item-click",this)},beforeEnter:function(e){e.style.opacity=0},enter:function(e,a){c()(e,{opacity:1},{duration:300})},leave:function(e,a){c()(e,{opacity:0},{complete:a})}}},h=(t(559),Object(s.a)(d,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"zch-collapse-item",attrs:{"data-name":e.name}},[t("div",{staticClass:"zch-collapse-item-title-wrapper",class:[e.disabled&&"disabled"],on:{click:e.handleClick}},[t("div",{staticClass:"zch-collapse-item-title"},[e._t("title",[e._v(e._s(e.title))])],2),e._v(" "),t("zch-icon",{class:{active:e.contentVisible},attrs:{icon:"rightArrow"}})],1),e._v(" "),t("transition",{on:{"before-enter":e.beforeEnter,enter:e.enter,leave:e.leave}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.contentVisible,expression:"contentVisible"}],staticClass:"zch-collapse-item-content",class:{active:e.contentVisible}},[e._t("default")],2)])],1)}),[],!1,null,"379235fe",null).exports),r=t(284),m=(t(281),{name:"CollapseExample",components:{ZchCollapseItem:h,ZchCollapse:o,ZchIcon:l.a,CodeBar:r.default},data:function(){return{activeCollapse1:"1",activeCollapse2:"1",activeCollapse3:"1",activeCollapse4:"1",code1:'\n        <zch-collapse v-model="activeCollapse">\n          <zch-collapse-item title="This is panel header 1" name="1">\n            A dog is a type of domesticated animal. Known for its loyalty and faithfulness,\n            it can be found as a welcome guest in many households across the world.\n          </zch-collapse-item>\n          <zch-collapse-item title="This is panel header 2" name="2">\n            A dog is a type of domesticated animal. Known for its loyalty and faithfulness,\n            it can be found as a welcome guest in many households across the world.\n          </zch-collapse-item>\n          <zch-collapse-item title="This is panel header 3" name="3">\n            A dog is a type of domesticated animal. Known for its loyalty and faithfulness,\n            it can be found as a welcome guest in many households across the world.\n          </zch-collapse-item>\n          <zch-collapse-item title="This is panel header 4" name="4">\n            A dog is a type of domesticated animal. Known for its loyalty and faithfulness,\n            it can be found as a welcome guest in many households across the world.\n          </zch-collapse-item>\n        </zch-collapse>\n\n        <script>\n          export default {\n            data() {\n              return {\n                activeCollapse: [\'1\']\n              };\n            },\n          }\n        <\/script>\n      '.replace(/^ {8}/gm,"").trim(),code2:'\n        <zch-collapse v-model="activeCollapse" accordion>\n          <zch-collapse-item title="This is panel header 1" name="1">\n            A dog is a type of domesticated animal. Known for its loyalty and faithfulness,\n            it can be found as a welcome guest in many households across the world.\n          </zch-collapse-item>\n          <zch-collapse-item title="This is panel header 2" name="2">\n            A dog is a type of domesticated animal. Known for its loyalty and faithfulness,\n            it can be found as a welcome guest in many households across the world.\n          </zch-collapse-item>\n          <zch-collapse-item title="This is panel header 3" name="3">\n            A dog is a type of domesticated animal. Known for its loyalty and faithfulness,\n            it can be found as a welcome guest in many households across the world.\n          </zch-collapse-item>\n          <zch-collapse-item title="This is panel header 4" name="4">\n            A dog is a type of domesticated animal. Known for its loyalty and faithfulness,\n            it can be found as a welcome guest in many households across the world.\n          </zch-collapse-item>\n        </zch-collapse>\n\n        <script>\n          export default {\n            data() {\n              return {\n                activeCollapse: [\'1\']\n              };\n            },\n          }\n        <\/script>\n      '.replace(/^ {8}/gm,"").trim(),code3:'\n        <zch-collapse v-model="activeCollapse3" accordion>\n          <zch-collapse-item title="This is panel header 1" name="1">\n            <template slot="title">\n              This is panel header 1\n              <zch-icon icon="star"></zch-icon>\n            </template>\n            A dog is a type of domesticated animal. Known for its loyalty and faithfulness,\n            it can be found as a welcome guest in many households across the world.\n          </zch-collapse-item>\n          <zch-collapse-item title="This is panel header 2" name="2">\n            A dog is a type of domesticated animal. Known for its loyalty and faithfulness,\n            it can be found as a welcome guest in many households across the world.\n          </zch-collapse-item>\n          <zch-collapse-item title="This is panel header 3" name="3">\n            A dog is a type of domesticated animal. Known for its loyalty and faithfulness,\n            it can be found as a welcome guest in many households across the world.\n          </zch-collapse-item>\n          <zch-collapse-item title="This is panel header 4" name="4">\n            A dog is a type of domesticated animal. Known for its loyalty and faithfulness,\n            it can be found as a welcome guest in many households across the world.\n          </zch-collapse-item>\n        </zch-collapse>\n\n        <script>\n          export default {\n            data() {\n              return {\n                activeCollapse: [\'1\']\n              };\n            },\n          }\n        <\/script>\n      '.replace(/^ {8}/gm,"").trim(),code4:'\n        <zch-collapse v-model="activeCollapse4">\n          <zch-collapse-item title="This is panel header 1" name="1">\n            A dog is a type of domesticated animal. Known for its loyalty and faithfulness,\n            it can be found as a welcome guest in many households across the world.\n          </zch-collapse-item>\n          <zch-collapse-item title="This is panel header 2" disabled name="2">\n            A dog is a type of domesticated animal. Known for its loyalty and faithfulness,\n            it can be found as a welcome guest in many households across the world.\n          </zch-collapse-item>\n          <zch-collapse-item title="This is panel header 3" name="3">\n            A dog is a type of domesticated animal. Known for its loyalty and faithfulness,\n            it can be found as a welcome guest in many households across the world.\n          </zch-collapse-item>\n          <zch-collapse-item title="This is panel header 4" name="4">\n            A dog is a type of domesticated animal. Known for its loyalty and faithfulness,\n            it can be found as a welcome guest in many households across the world.\n          </zch-collapse-item>\n        </zch-collapse>\n\n        <script>\n          export default {\n            data() {\n              return {\n                activeCollapse: [\'1\']\n              };\n            },\n          }\n        <\/script>\n      '.replace(/^ {8}/gm,"").trim()}}}),p=Object(s.a)(m,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("h4",[e._v("通过折叠面板收纳内容区域")]),e._v(" "),t("h3",[e._v("基础用法")]),e._v(" "),t("h5",[e._v("可同时展开多个面板，面板之间不影响")]),e._v(" "),t("div",{staticClass:"block"},[t("div",{staticClass:"source"},[t("zch-collapse",{model:{value:e.activeCollapse1,callback:function(a){e.activeCollapse1=a},expression:"activeCollapse1"}},[t("zch-collapse-item",{attrs:{title:"This is panel header 1",name:"1"}},[e._v("\n          A dog is a type of domesticated animal. Known for its loyalty and faithfulness,\n          it can be found as a welcome guest in many households across the world.\n        ")]),e._v(" "),t("zch-collapse-item",{attrs:{title:"This is panel header 2",name:"2"}},[e._v("\n          A dog is a type of domesticated animal. Known for its loyalty and faithfulness,\n          it can be found as a welcome guest in many households across the world.\n        ")]),e._v(" "),t("zch-collapse-item",{attrs:{title:"This is panel header 3",name:"3"}},[e._v("\n          A dog is a type of domesticated animal. Known for its loyalty and faithfulness,\n          it can be found as a welcome guest in many households across the world.\n        ")]),e._v(" "),t("zch-collapse-item",{attrs:{title:"This is panel header 4",name:"4"}},[e._v("\n          A dog is a type of domesticated animal. Known for its loyalty and faithfulness,\n          it can be found as a welcome guest in many households across the world.\n        ")])],1)],1),e._v(" "),t("code-bar",{attrs:{code:e.code1}})],1),e._v(" "),t("h3",[e._v("手风琴效果")]),e._v(" "),t("h5",[e._v("每次只能展开一个面板")]),e._v(" "),t("div",{staticClass:"block"},[t("div",{staticClass:"source"},[t("zch-collapse",{attrs:{accordion:""},model:{value:e.activeCollapse2,callback:function(a){e.activeCollapse2=a},expression:"activeCollapse2"}},[t("zch-collapse-item",{attrs:{title:"This is panel header 1",name:"1"}},[e._v("\n          A dog is a type of domesticated animal. Known for its loyalty and faithfulness,\n          it can be found as a welcome guest in many households across the world.\n        ")]),e._v(" "),t("zch-collapse-item",{attrs:{title:"This is panel header 2",name:"2"}},[e._v("\n          A dog is a type of domesticated animal. Known for its loyalty and faithfulness,\n          it can be found as a welcome guest in many households across the world.\n        ")]),e._v(" "),t("zch-collapse-item",{attrs:{title:"This is panel header 3",name:"3"}},[e._v("\n          A dog is a type of domesticated animal. Known for its loyalty and faithfulness,\n          it can be found as a welcome guest in many households across the world.\n        ")]),e._v(" "),t("zch-collapse-item",{attrs:{title:"This is panel header 4",name:"4"}},[e._v("\n          A dog is a type of domesticated animal. Known for its loyalty and faithfulness,\n          it can be found as a welcome guest in many households across the world.\n        ")])],1)],1),e._v(" "),t("code-bar",{attrs:{title:"通过 accordion 属性来设置是否以手风琴模式显示。",code:e.code2}})],1),e._v(" "),t("h3",[e._v("自定义面板标题")]),e._v(" "),t("h5",[e._v("除了可以通过 title 属性以外，还可以通过具名 slot 来实现自定义面板的标题内容，以实现增加图标等效果。")]),e._v(" "),t("div",{staticClass:"block"},[t("div",{staticClass:"source"},[t("zch-collapse",{attrs:{accordion:""},model:{value:e.activeCollapse3,callback:function(a){e.activeCollapse3=a},expression:"activeCollapse3"}},[t("zch-collapse-item",{attrs:{title:"This is panel header 1",name:"1"}},[t("template",{slot:"title"},[e._v("\n            This is panel header 1\n            "),t("zch-icon",{attrs:{icon:"star"}})],1),e._v("\n          A dog is a type of domesticated animal. Known for its loyalty and faithfulness,\n          it can be found as a welcome guest in many households across the world.\n        ")],2),e._v(" "),t("zch-collapse-item",{attrs:{title:"This is panel header 2",name:"2"}},[e._v("\n          A dog is a type of domesticated animal. Known for its loyalty and faithfulness,\n          it can be found as a welcome guest in many households across the world.\n        ")]),e._v(" "),t("zch-collapse-item",{attrs:{title:"This is panel header 3",name:"3"}},[e._v("\n          A dog is a type of domesticated animal. Known for its loyalty and faithfulness,\n          it can be found as a welcome guest in many households across the world.\n        ")]),e._v(" "),t("zch-collapse-item",{attrs:{title:"This is panel header 4",name:"4"}},[e._v("\n          A dog is a type of domesticated animal. Known for its loyalty and faithfulness,\n          it can be found as a welcome guest in many households across the world.\n        ")])],1)],1),e._v(" "),t("code-bar",{attrs:{title:"通过 accordion 属性来设置是否以手风琴模式显示。",code:e.code3}})],1),e._v(" "),t("h3",[e._v("禁用一项")]),e._v(" "),t("div",{staticClass:"block"},[t("div",{staticClass:"source"},[t("zch-collapse",{model:{value:e.activeCollapse4,callback:function(a){e.activeCollapse4=a},expression:"activeCollapse4"}},[t("zch-collapse-item",{attrs:{title:"This is panel header 1",name:"1"}},[e._v("\n          A dog is a type of domesticated animal. Known for its loyalty and faithfulness,\n          it can be found as a welcome guest in many households across the world.\n        ")]),e._v(" "),t("zch-collapse-item",{attrs:{title:"This is panel header 2",disabled:"",name:"2"}},[e._v("\n          A dog is a type of domesticated animal. Known for its loyalty and faithfulness,\n          it can be found as a welcome guest in many households across the world.\n        ")]),e._v(" "),t("zch-collapse-item",{attrs:{title:"This is panel header 3",name:"3"}},[e._v("\n          A dog is a type of domesticated animal. Known for its loyalty and faithfulness,\n          it can be found as a welcome guest in many households across the world.\n        ")]),e._v(" "),t("zch-collapse-item",{attrs:{title:"This is panel header 4",name:"4"}},[e._v("\n          A dog is a type of domesticated animal. Known for its loyalty and faithfulness,\n          it can be found as a welcome guest in many households across the world.\n        ")])],1)],1),e._v(" "),t("code-bar",{attrs:{title:"设置 disabled 来禁用一项。",code:e.code4}})],1)])}),[],!1,null,null,null);a.default=p.exports}}]);