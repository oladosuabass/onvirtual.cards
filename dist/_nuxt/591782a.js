(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{572:function(t,n,e){"use strict";e.r(n);e(32),e(33),e(9),e(51);var r=e(27),c=e(29),o=e(31),l=e(34),f=e(26),d=e(30),v=e(22);function h(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=Object(f.a)(t);if(n){var c=Object(f.a)(this).constructor;e=Reflect.construct(r,arguments,c)}else e=r.apply(this,arguments);return Object(l.a)(this,e)}}var y=function(t,n,e,desc){var r,c=arguments.length,o=c<3?n:null===desc?desc=Object.getOwnPropertyDescriptor(n,e):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,n,e,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(n,e,o):r(n,e))||o);return c>3&&o&&Object.defineProperty(n,e,o),o},O=function(t){Object(o.a)(e,t);var n=h(e);function e(){return Object(r.a)(this,e),n.apply(this,arguments)}return Object(c.a)(e,[{key:"source",get:function(){var t;return null===(t=this.transaction.additionalFields)||void 0===t?void 0:t.sourceInstrumentFriendlyName}},{key:"destination",get:function(){var t;return null===(t=this.transaction.additionalFields)||void 0===t?void 0:t.destinationInstrumentFriendlyName}},{key:"isOut",get:function(){return void 0!==this.destination}},{key:"isIn",get:function(){return void 0!==this.source}}]),e}(v.Vue);y([Object(v.Prop)()],O.prototype,"transaction",void 0);var _=O=y([Object(v.Component)({components:{TransferIcon:function(){return e.e(58).then(e.t.bind(null,525,7))},Amount:function(){return e.e(2).then(e.bind(null,580))},CardFee:function(){return e.e(3).then(e.bind(null,583))}}})],O),j=e(42),component=Object(j.a)(_,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-row",{attrs:{"align-v":"center"}},[e("b-col",{attrs:{cols:"1"}},[e("div",{staticClass:"transaction-type-icon"},[e("div",{staticClass:"transaction increase"},[e("transfer-icon")],1)])]),t._v(" "),e("b-col",[e("div",{staticClass:"transaction-type"},[e("div",{staticClass:"transaction"},[t.isOut?[t._v("To "+t._s(t.destination))]:t._e(),t._v(" "),t.isIn?[t._v("From "+t._s(t.source))]:t._e()],2)]),t._v(" "),e("b-row",{staticClass:"text-muted"},[e("b-col",[t._v("\n        Personal Transfer\n      ")]),t._v(" "),e("b-col",{staticClass:"text-right"},[e("card-fee",{attrs:{transaction:t.transaction}})],1)],1)],1),t._v(" "),e("b-col",{staticClass:"text-right",attrs:{cols:"3",xl:"2"}},[e("amount",{attrs:{transaction:t.transaction}})],1)],1)}),[],!1,null,null,null);n.default=component.exports}}]);