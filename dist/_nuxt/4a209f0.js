(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{575:function(t,n,e){"use strict";e.r(n);e(32),e(33),e(9),e(51);var c=e(27),r=e(31),o=e(34),l=e(26),f=e(30),d=e(22);function v(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,c=Object(l.a)(t);if(n){var r=Object(l.a)(this).constructor;e=Reflect.construct(c,arguments,r)}else e=c.apply(this,arguments);return Object(o.a)(this,e)}}var h=function(t,n,e,desc){var c,r=arguments.length,o=r<3?n:null===desc?desc=Object.getOwnPropertyDescriptor(n,e):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,n,e,desc);else for(var i=t.length-1;i>=0;i--)(c=t[i])&&(o=(r<3?c(o):r>3?c(n,e,o):c(n,e))||o);return r>3&&o&&Object.defineProperty(n,e,o),o},y=function(t){Object(r.a)(e,t);var n=v(e);function e(){return Object(c.a)(this,e),n.apply(this,arguments)}return e}(d.Vue);h([Object(d.Prop)()],y.prototype,"transaction",void 0);var j=y=h([Object(d.Component)({components:{ManualTransactionIcon:function(){return e.e(54).then(e.t.bind(null,529,7))},Amount:function(){return e.e(2).then(e.bind(null,580))},CardFee:function(){return e.e(3).then(e.bind(null,583))}}})],y),O=e(42),component=Object(O.a)(j,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-row",{attrs:{"align-v":"center"}},[e("b-col",{attrs:{cols:"1"}},[e("div",{staticClass:"transaction-type-icon"},[e("div",{staticClass:"transaction increase"},[e("manual-transaction-icon")],1)])]),t._v(" "),e("b-col",[e("div",{staticClass:"transaction-type"},[e("div",{staticClass:"transaction"},[t._v("\n        Manual Adjustment\n      ")])]),t._v(" "),e("div",{staticClass:"text-muted"},[e("b-row",[e("b-col",[t._v("\n          "+t._s(t.transaction.additionalFields.note)+"\n        ")]),t._v(" "),e("b-col",{staticClass:"text-right"},[e("card-fee",{attrs:{transaction:t.transaction}})],1)],1)],1)]),t._v(" "),e("b-col",{staticClass:"text-right",attrs:{cols:"3",xl:"2"}},[e("amount",{attrs:{transaction:t.transaction}})],1)],1)}),[],!1,null,null,null);n.default=component.exports}}]);