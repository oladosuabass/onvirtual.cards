(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{465:function(e,t,r){var content=r(473);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(92).default)("2af9f63a",content,!0,{sourceMap:!1})},467:function(e,t,r){"use strict";r.r(t);r(32),r(33),r(9),r(51);var o=r(27),n=r(29),c=r(31),l=r(34),f=r(26),d=r(30),h=r(22),v=r(64),y=r(66);function O(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=Object(f.a)(e);if(t){var n=Object(f.a)(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return Object(l.a)(this,r)}}var _=function(e,t,r,desc){var o,n=arguments.length,c=n<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(c=(n<3?o(c):n>3?o(t,r,c):o(t,r))||c);return n>3&&c&&Object.defineProperty(t,r,c),c},m=Object(v.namespace)(y.name),E=function(e){Object(c.a)(r,e);var t=O(r);function r(){return Object(o.a)(this,r),t.apply(this,arguments)}return Object(n.a)(r,[{key:"onClose",value:function(){this.resetErrors()}},{key:"hasError",get:function(){return null!=this.errors}},{key:"hasConflict",get:function(){return null!=this.conflict}},{key:"errorMessage",get:function(){if(null==this.errors)return"";if(""!==this.message)return this.message;if(!(this.errors&&this.errors.data&&this.errors.data.errorCode))return"An error occurred. Please try again.";switch(console.log(this.errors.data),this.errors.data.errorCode){case"ROOT_EMAIL_NOT_UNIQUE":case"EMAIL_NOT_UNIQUE":return"This email address already exists in the system.  Do you want to log in instead?";case"INVALID_CREDENTIALS":return"Invalid Credentials";case"ROOT_USERNAME_NOT_UNIQUE":return"Username already exists in the system. Please try a different username.";case"INVALID_NONCE_OR_MOBILE":return"There is something wrong with your verification code.";default:return"An error occurred. Please try again."}}}]),r}(h.Vue);_([m.Getter],E.prototype,"errors",void 0),_([m.Getter],E.prototype,"conflict",void 0),_([m.Getter],E.prototype,"conflictMessage",void 0),_([m.Action],E.prototype,"resetErrors",void 0),_([Object(h.Prop)({default:""})],E.prototype,"message",void 0),_([Object(h.Prop)({default:null})],E.prototype,"errorLink",void 0),_([Object(h.Emit)("close")],E.prototype,"onClose",null);var k=E=_([h.Component],E),j=(r(472),r(42)),component=Object(j.a)(k,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.hasConflict?r("div",[r("div",{staticClass:"error-alert",attrs:{role:"alert"}},[r("p",[e._v(e._s(e.conflictMessage))]),e._v(" "),r("button",{on:{click:e.onClose}},[r("img",{attrs:{src:"/img/close.svg",width:"16",alt:""}})])])]):e.hasError?r("div",[r("div",{staticClass:"error-alert",attrs:{role:"alert"}},[r("p",[e._v("\n        "+e._s(e.errorMessage)+"\n        "),null!=e.errorLink?r("b-link",{staticClass:"error-alert-link",attrs:{to:e.errorLink.link}},[e._v("\n          "+e._s(e.errorLink.text)+"\n        ")]):e._e()],1),e._v(" "),r("button",{on:{click:e.onClose}},[r("img",{attrs:{src:"/img/close.svg",width:"16",alt:""}})])])]):e._e()])}),[],!1,null,"2c5db22a",null);t.default=component.exports},472:function(e,t,r){"use strict";r(465)},473:function(e,t,r){(t=r(91)(!1)).push([e.i,".error-alert-link[data-v-2c5db22a]{text-transform:none;color:#fff;text-decoration:underline}",""]),e.exports=t}}]);