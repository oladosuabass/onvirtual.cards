(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{471:function(t,e,n){"use strict";n(32),n(33),n(9),n(51);var r=n(27),o=n(29),c=n(31),l=n(34),f=n(26),m=n(30),h=n(22);function d(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var v=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},O=n(10),y=function(t){Object(c.a)(n,t);var e=d(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"monthsFilter",value:function(t){for(var e=[],n=O(t),r=O();n.isBefore(r)&&!n.isSame(r,"month");){var o=n.isSame(r,"year")?n.format("MMMM"):n.format("MMMM Y");e.push({value:{start:n.startOf("month").valueOf(),end:n.endOf("month").valueOf()},text:o}),n=n.add(1,"month")}return e.push({value:{start:O().startOf("month").valueOf(),end:O().endOf("month").valueOf()},text:"this month"}),e.reverse()}}]),n}(h.Vue);y=v([h.Component],y),e.a=y},570:function(t,e,n){"use strict";n.r(e);n(15),n(12),n(32),n(33),n(51),n(11),n(9),n(13);var r=n(3),o=n(27),c=n(29),l=n(31),f=n(34),m=n(26),h=n(30),d=n(22),v=n(88),O=n(468),y=n(471),j=n(479);function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function S(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(m.a)(t);if(e){var o=Object(m.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var k=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},_=n(10),R=n(464),C=function(t){Object(l.a)(n,t);var e=S(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"filterMonthChange",value:function(t){this.setFilters({fromTimestamp:t.start,toTimestamp:t.end}),console.log(t)}},{key:"downloadStatement",value:function(){var t=R.object(this.$route.query),e=t.filters?t.filters:{};e.fromTimestamp||(e.fromTimestamp=_().startOf("month").valueOf()),e.toTimestamp||(e.toTimestamp=_().endOf("month").valueOf());var n=function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({showFundMovementsOnly:!0,orderByTimestamp:j.a.DESC,paging:{limit:100,offset:0}},e);this.downloadAsCSV(this.account.id.id,"managed_accounts",n)}},{key:"filteredStatement",get:function(){return this.stores.accounts.filteredStatement}},{key:"account",get:function(){return this.stores.accounts.account}},{key:"availableBalance",get:function(){return this.stores.accounts.account?this.stores.accounts.account.balances.availableBalance:0}},{key:"filteredStatementLength",get:function(){return this.filteredStatement?Object.keys(this.filteredStatement).length:0}},{key:"filterDate",get:function(){return{start:this.filters.fromTimestamp,end:this.filters.toTimestamp}}},{key:"months",get:function(){return this.monthsFilter(parseInt(this.account.creationTimestamp))}}]),n}(Object(d.mixins)(v.a,O.a,y.a));k([Object(d.Prop)()],C.prototype,"filters",void 0);var P=C=k([Object(d.Component)({components:{StatementItem:function(){return n.e(14).then(n.bind(null,571))},DownloadIcon:function(){return n.e(9).then(n.t.bind(null,524,7))}}})],C),D=n(42),component=Object(D.a)(P,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",[n("b-row",{staticClass:"mb-2",attrs:{"align-v":"center"}},[n("b-col",[n("b-row",[n("b-col",[n("h6",{staticClass:"font-weight-lighter"},[n("b-row",{attrs:{"align-v":"center"}},[n("b-col",{attrs:{cols:"auto"}},[t._v("\n                All Transactions\n              ")]),t._v(" "),n("b-col",{attrs:{cols:"auto"}},[n("b-form-select",{staticClass:"w-auto d-inline-block",attrs:{options:t.months,value:t.filterDate},on:{change:t.filterMonthChange}})],1)],1)],1)]),t._v(" "),n("b-col",{staticClass:"d-flex justify-content-end",attrs:{lg:"7",xs:"14"}},[n("div",[n("b-button",{staticClass:"px-0 d-flex align-items-center font-weight-lighter text-decoration-none",attrs:{variant:"link"},on:{click:t.downloadStatement}},[n("download-icon",{staticClass:"mr-2"}),t._v("\n              download\n            ")],1)],1)])],1),t._v(" "),t.filteredStatement&&t.filteredStatementLength>0?n("b-row",[n("b-col",t._l(t.filteredStatement,(function(e,r){return n("b-row",{key:r},[n("b-col",[n("b-row",{staticClass:"mt-4"},[n("b-col",{staticClass:"text-muted"},[t._v("\n                  "+t._s(t._f("moment_statement")(r))+"\n                ")])],1),t._v(" "),t._l(e,(function(t,e){return n("b-row",{key:e},[n("b-col",[n("statement-item",{attrs:{transaction:t}})],1)],1)}))],2)],1)})),1)],1):0===t.availableBalance?n("b-row",{staticClass:"py-5"},[n("b-col",{staticClass:"text-center"},[n("h5",{staticClass:"font-weight-light"},[t._v("\n            Your transactions will appear here.\n          ")]),t._v(" "),n("b-button",{attrs:{to:"/managed-accounts/"+t.account.id.id+"/topup",variant:"link"}},[t._v("\n            Start by topping up your account.\n          ")])],1)],1):t._e()],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);