(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{545:function(t,e,r){"use strict";r.r(e);r(51),r(32),r(33),r(9);var n=r(27),o=r(29),c=r(31),l=r(34),d=r(26),f=r(30),y=r(22),h=r(66),v=r(88);function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var w=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},_=function(t){Object(c.a)(r,t);var e=m(r);function r(){var t;return Object(n.a)(this,r),(t=e.apply(this,arguments)).showError=!1,t}return Object(o.a)(r,[{key:"mounted",value:function(){try{var t={id:this.$route.query.identity_id.toString(),inviteId:this.$route.query.invite_id.toString(),body:{nonce:this.$route.query.nonce.toString()}};this.stores.corporates.validateInvite(t).catch(this.handleError.bind(this))}catch(t){}}},{key:"handleError",value:function(t){h.Helpers.setError(this.$store,t.response)}},{key:"asyncData",value:function(t){var e=t.route;try{return{form:{id:e.query.identity_id.toString(),body:{nonce:e.query.nonce.toString(),identityId:{type:e.query.identity_type.toString(),id:e.query.identity_id.toString()},userId:e.query.user_id.toString(),password:{value:""}}},showError:!1}}catch(t){return{showError:!0}}}},{key:"tryToSubmitForm",value:function(t){var e=this;t.preventDefault(),this.$refs.passwordForm.tokenize((function(t){if(""===t.password)return null;e.form.body.password.value=t.password,e.stores.corporates.consumeInvite(e.form).then((function(){e.$router.push("/login")}))}),(function(t){return console.error(t),null}))}},{key:"checkOnKeyUp",value:function(t){"Enter"===t.key&&(t.preventDefault(),this.tryToSubmitForm(t))}},{key:"passwordBaseStyle",get:function(){return{color:"#495057",fontSize:"16px",fontSmoothing:"antialiased",fontFamily:"'Be Vietnam', sans-serif",fontWeight:"400",lineHeight:"24px",margin:"0",padding:"6px 12px",textIndent:"0px","::placeholder":{color:"#B6B9C7",fontWeight:"400"}}}}]),r}(Object(y.mixins)(v.a)),S=_=w([Object(y.Component)({layout:"auth",components:{ErrorAlert:function(){return r.e(1).then(r.bind(null,467))},LoaderButton:function(){return r.e(0).then(r.bind(null,466))}}})],_),O=r(42),component=Object(O.a)(S,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-col",{attrs:{lg:"6","offset-lg":"3"}},[r("div",{staticClass:"text-center pb-5"},[r("img",{staticClass:"d-inline-block align-top",attrs:{src:"/img/logo.svg",width:"200",alt:"onvirtual.cards"}})]),t._v(" "),r("b-card",{attrs:{"body-class":"p-6"}},[t.showError?[r("b-alert",{attrs:{show:"",variant:"danger"}},[t._v("Some information is missing. Please make sure you copy the whole URL.")])]:[r("h3",{staticClass:"text-center font-weight-light mb-6"},[t._v("\n        Accept Invite\n      ")]),t._v(" "),r("error-alert"),t._v(" "),r("b-form",{on:{submit:t.tryToSubmitForm}},[r("client-only",{attrs:{placeholder:"Loading..."}},[r("weavr-form",{ref:"passwordForm"},[r("label",{staticClass:"d-block"},[t._v("PASSWORD:")]),t._v(" "),r("weavr-input",{attrs:{options:{placeholder:"****",classNames:{empty:"is-invalid"}},"base-style":t.passwordBaseStyle,"class-name":"sign-in-password",name:"password",field:"password",required:"true"},on:{onKeyUp:t.checkOnKeyUp}}),t._v(" "),r("small",{staticClass:"form-text text-muted"},[t._v("Minimum 8, Maximum 50 characters.")])],1)],1),t._v(" "),r("b-form-row",{staticClass:"mt-6"},[r("b-col",{staticClass:"text-center"},[r("b-button",{attrs:{variant:"secondary",type:"submit"}},[t._v("\n              submit\n              "),r("span",{staticClass:"pl-5"},[t._v("->")])])],1)],1)],1)]],2)],1)}),[],!1,null,null,null);e.default=component.exports}}]);