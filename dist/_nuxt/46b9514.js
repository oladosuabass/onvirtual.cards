(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{434:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return o.default}}),t.regex=t.ref=t.len=t.req=void 0;var n,o=(n=r(437))&&n.__esModule?n:{default:n};function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var d=function(e){if(Array.isArray(e))return!!e.length;if(null==e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===c(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=d;t.len=function(e){return Array.isArray(e)?e.length:"object"===c(e)?Object.keys(e).length:String(e).length};t.ref=function(e,t,r){return"function"==typeof e?e.call(t,r):r[e]};t.regex=function(e,t){return(0,o.default)({type:e},(function(e){return!d(e)||t.test(e)}))}},435:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"alpha",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"alphaNum",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"numeric",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"between",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"email",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"ipAddress",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"macAddress",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"maxLength",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"minLength",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(t,"required",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"requiredIf",{enumerable:!0,get:function(){return _.default}}),Object.defineProperty(t,"requiredUnless",{enumerable:!0,get:function(){return O.default}}),Object.defineProperty(t,"sameAs",{enumerable:!0,get:function(){return E.default}}),Object.defineProperty(t,"url",{enumerable:!0,get:function(){return w.default}}),Object.defineProperty(t,"or",{enumerable:!0,get:function(){return x.default}}),Object.defineProperty(t,"and",{enumerable:!0,get:function(){return P.default}}),Object.defineProperty(t,"not",{enumerable:!0,get:function(){return R.default}}),Object.defineProperty(t,"minValue",{enumerable:!0,get:function(){return S.default}}),Object.defineProperty(t,"maxValue",{enumerable:!0,get:function(){return I.default}}),Object.defineProperty(t,"integer",{enumerable:!0,get:function(){return j.default}}),Object.defineProperty(t,"decimal",{enumerable:!0,get:function(){return k.default}}),t.helpers=void 0;var n=C(r(436)),o=C(r(439)),c=C(r(440)),d=C(r(441)),l=C(r(442)),f=C(r(443)),m=C(r(444)),h=C(r(445)),v=C(r(446)),y=C(r(447)),_=C(r(448)),O=C(r(449)),E=C(r(450)),w=C(r(451)),x=C(r(452)),P=C(r(453)),R=C(r(454)),S=C(r(455)),I=C(r(456)),j=C(r(457)),k=C(r(458)),$=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var desc=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};desc.get||desc.set?Object.defineProperty(t,r,desc):t[r]=e[r]}return t.default=e,t}(r(434));function C(e){return e&&e.__esModule?e:{default:e}}t.helpers=$},436:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(434).regex)("alpha",/^[a-zA-Z]*$/);t.default=n},437:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n="web"===e.env.BUILD?r(438).withParams:r(351).withParams;t.default=n}).call(this,r(120))},438:function(e,t,r){"use strict";(function(e){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.withParams=void 0;var n="undefined"!=typeof window?window:void 0!==e?e:{},o=n.vuelidate?n.vuelidate.withParams:function(e,t){return"object"===r(e)&&void 0!==t?t:e((function(){}))};t.withParams=o}).call(this,r(70))},439:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(434).regex)("alphaNum",/^[a-zA-Z0-9]*$/);t.default=n},440:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(434).regex)("numeric",/^[0-9]*$/);t.default=n},441:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(434);t.default=function(e,t){return(0,n.withParams)({type:"between",min:e,max:t},(function(r){return!(0,n.req)(r)||(!/\s/.test(r)||r instanceof Date)&&+e<=+r&&+t>=+r}))}},442:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(434).regex)("email",/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/);t.default=n},443:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(434),o=(0,n.withParams)({type:"ipAddress"},(function(e){if(!(0,n.req)(e))return!0;if("string"!=typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(c)}));t.default=o;var c=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},444:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(434);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,n.withParams)({type:"macAddress"},(function(t){if(!(0,n.req)(t))return!0;if("string"!=typeof t)return!1;var r="string"==typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==r&&(6===r.length||8===r.length)&&r.every(o)}))};var o=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},445:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(434);t.default=function(e){return(0,n.withParams)({type:"maxLength",max:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)<=e}))}},446:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(434);t.default=function(e){return(0,n.withParams)({type:"minLength",min:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)>=e}))}},447:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(434),o=(0,n.withParams)({type:"required"},(function(e){return"string"==typeof e?(0,n.req)(e.trim()):(0,n.req)(e)}));t.default=o},448:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(434);t.default=function(e){return(0,n.withParams)({type:"requiredIf",prop:e},(function(t,r){return!(0,n.ref)(e,this,r)||(0,n.req)(t)}))}},449:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(434);t.default=function(e){return(0,n.withParams)({type:"requiredUnless",prop:e},(function(t,r){return!!(0,n.ref)(e,this,r)||(0,n.req)(t)}))}},450:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(434);t.default=function(e){return(0,n.withParams)({type:"sameAs",eq:e},(function(t,r){return t===(0,n.ref)(e,this,r)}))}},451:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(434).regex)("url",/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i);t.default=n},452:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(434);t.default=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"or"},(function(){for(var e=this,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t.length>0&&t.reduce((function(t,r){return t||r.apply(e,n)}),!1)}))}},453:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(434);t.default=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"and"},(function(){for(var e=this,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t.length>0&&t.reduce((function(t,r){return t&&r.apply(e,n)}),!0)}))}},454:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(434);t.default=function(e){return(0,n.withParams)({type:"not"},(function(t,r){return!(0,n.req)(t)||!e.call(this,t,r)}))}},455:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(434);t.default=function(e){return(0,n.withParams)({type:"minValue",min:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))}},456:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(434);t.default=function(e){return(0,n.withParams)({type:"maxValue",max:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e}))}},457:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(434).regex)("integer",/(^[0-9]*$)|(^-[0-9]+$)/);t.default=n},458:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(434).regex)("decimal",/^[-]?\d*(\.\d+)?$/);t.default=n},462:function(e){e.exports=JSON.parse('[{"name":"Austria","alpha-2":"AT","alpha-3":"AUT","country-code":"040","iso_3166-2":"ISO 3166-2:AT","region":"Europe","sub-region":"Western Europe","intermediate-region":"","region-code":"150","sub-region-code":"155","intermediate-region-code":""},{"name":"Belgium","alpha-2":"BE","alpha-3":"BEL","country-code":"056","iso_3166-2":"ISO 3166-2:BE","region":"Europe","sub-region":"Western Europe","intermediate-region":"","region-code":"150","sub-region-code":"155","intermediate-region-code":""},{"name":"Bulgaria","alpha-2":"BG","alpha-3":"BGR","country-code":"100","iso_3166-2":"ISO 3166-2:BG","region":"Europe","sub-region":"Eastern Europe","intermediate-region":"","region-code":"150","sub-region-code":"151","intermediate-region-code":""},{"name":"Croatia","alpha-2":"HR","alpha-3":"HRV","country-code":"191","iso_3166-2":"ISO 3166-2:HR","region":"Europe","sub-region":"Southern Europe","intermediate-region":"","region-code":"150","sub-region-code":"039","intermediate-region-code":""},{"name":"Cyprus","alpha-2":"CY","alpha-3":"CYP","country-code":"196","iso_3166-2":"ISO 3166-2:CY","region":"Asia","sub-region":"Western Asia","intermediate-region":"","region-code":"142","sub-region-code":"145","intermediate-region-code":""},{"name":"Czechia","alpha-2":"CZ","alpha-3":"CZE","country-code":"203","iso_3166-2":"ISO 3166-2:CZ","region":"Europe","sub-region":"Eastern Europe","intermediate-region":"","region-code":"150","sub-region-code":"151","intermediate-region-code":""},{"name":"Denmark","alpha-2":"DK","alpha-3":"DNK","country-code":"208","iso_3166-2":"ISO 3166-2:DK","region":"Europe","sub-region":"Northern Europe","intermediate-region":"","region-code":"150","sub-region-code":"154","intermediate-region-code":""},{"name":"Estonia","alpha-2":"EE","alpha-3":"EST","country-code":"233","iso_3166-2":"ISO 3166-2:EE","region":"Europe","sub-region":"Northern Europe","intermediate-region":"","region-code":"150","sub-region-code":"154","intermediate-region-code":""},{"name":"Finland","alpha-2":"FI","alpha-3":"FIN","country-code":"246","iso_3166-2":"ISO 3166-2:FI","region":"Europe","sub-region":"Northern Europe","intermediate-region":"","region-code":"150","sub-region-code":"154","intermediate-region-code":""},{"name":"France","alpha-2":"FR","alpha-3":"FRA","country-code":"250","iso_3166-2":"ISO 3166-2:FR","region":"Europe","sub-region":"Western Europe","intermediate-region":"","region-code":"150","sub-region-code":"155","intermediate-region-code":""},{"name":"Germany","alpha-2":"DE","alpha-3":"DEU","country-code":"276","iso_3166-2":"ISO 3166-2:DE","region":"Europe","sub-region":"Western Europe","intermediate-region":"","region-code":"150","sub-region-code":"155","intermediate-region-code":""},{"name":"Greece","alpha-2":"GR","alpha-3":"GRC","country-code":"300","iso_3166-2":"ISO 3166-2:GR","region":"Europe","sub-region":"Southern Europe","intermediate-region":"","region-code":"150","sub-region-code":"039","intermediate-region-code":""},{"name":"Hungary","alpha-2":"HU","alpha-3":"HUN","country-code":"348","iso_3166-2":"ISO 3166-2:HU","region":"Europe","sub-region":"Eastern Europe","intermediate-region":"","region-code":"150","sub-region-code":"151","intermediate-region-code":""},{"name":"Iceland","alpha-2":"IS","alpha-3":"ISL","country-code":"352","iso_3166-2":"ISO 3166-2:IS","region":"Europe","sub-region":"Northern Europe","intermediate-region":"","region-code":"150","sub-region-code":"154","intermediate-region-code":""},{"name":"Italy","alpha-2":"IT","alpha-3":"ITA","country-code":"380","iso_3166-2":"ISO 3166-2:IT","region":"Europe","sub-region":"Southern Europe","intermediate-region":"","region-code":"150","sub-region-code":"039","intermediate-region-code":""},{"name":"Latvia","alpha-2":"LV","alpha-3":"LVA","country-code":"428","iso_3166-2":"ISO 3166-2:LV","region":"Europe","sub-region":"Northern Europe","intermediate-region":"","region-code":"150","sub-region-code":"154","intermediate-region-code":""},{"name":"Liechtenstein","alpha-2":"LI","alpha-3":"LIE","country-code":"438","iso_3166-2":"ISO 3166-2:LI","region":"Europe","sub-region":"Western Europe","intermediate-region":"","region-code":"150","sub-region-code":"155","intermediate-region-code":""},{"name":"Lithuania","alpha-2":"LT","alpha-3":"LTU","country-code":"440","iso_3166-2":"ISO 3166-2:LT","region":"Europe","sub-region":"Northern Europe","intermediate-region":"","region-code":"150","sub-region-code":"154","intermediate-region-code":""},{"name":"Luxembourg","alpha-2":"LU","alpha-3":"LUX","country-code":"442","iso_3166-2":"ISO 3166-2:LU","region":"Europe","sub-region":"Western Europe","intermediate-region":"","region-code":"150","sub-region-code":"155","intermediate-region-code":""},{"name":"Malta","alpha-2":"MT","alpha-3":"MLT","country-code":"470","iso_3166-2":"ISO 3166-2:MT","region":"Europe","sub-region":"Southern Europe","intermediate-region":"","region-code":"150","sub-region-code":"039","intermediate-region-code":""},{"name":"Netherlands","alpha-2":"NL","alpha-3":"NLD","country-code":"528","iso_3166-2":"ISO 3166-2:NL","region":"Europe","sub-region":"Western Europe","intermediate-region":"","region-code":"150","sub-region-code":"155","intermediate-region-code":""},{"name":"Norway","alpha-2":"NO","alpha-3":"NOR","country-code":"578","iso_3166-2":"ISO 3166-2:NO","region":"Europe","sub-region":"Northern Europe","intermediate-region":"","region-code":"150","sub-region-code":"154","intermediate-region-code":""},{"name":"Poland","alpha-2":"PL","alpha-3":"POL","country-code":"616","iso_3166-2":"ISO 3166-2:PL","region":"Europe","sub-region":"Eastern Europe","intermediate-region":"","region-code":"150","sub-region-code":"151","intermediate-region-code":""},{"name":"Portugal","alpha-2":"PT","alpha-3":"PRT","country-code":"620","iso_3166-2":"ISO 3166-2:PT","region":"Europe","sub-region":"Southern Europe","intermediate-region":"","region-code":"150","sub-region-code":"039","intermediate-region-code":""},{"name":"Romania","alpha-2":"RO","alpha-3":"ROU","country-code":"642","iso_3166-2":"ISO 3166-2:RO","region":"Europe","sub-region":"Eastern Europe","intermediate-region":"","region-code":"150","sub-region-code":"151","intermediate-region-code":""},{"name":"Slovakia","alpha-2":"SK","alpha-3":"SVK","country-code":"703","iso_3166-2":"ISO 3166-2:SK","region":"Europe","sub-region":"Eastern Europe","intermediate-region":"","region-code":"150","sub-region-code":"151","intermediate-region-code":""},{"name":"Slovenia","alpha-2":"SI","alpha-3":"SVN","country-code":"705","iso_3166-2":"ISO 3166-2:SI","region":"Europe","sub-region":"Southern Europe","intermediate-region":"","region-code":"150","sub-region-code":"039","intermediate-region-code":""},{"name":"Spain","alpha-2":"ES","alpha-3":"ESP","country-code":"724","iso_3166-2":"ISO 3166-2:ES","region":"Europe","sub-region":"Southern Europe","intermediate-region":"","region-code":"150","sub-region-code":"039","intermediate-region-code":""},{"name":"Sweden","alpha-2":"SE","alpha-3":"SWE","country-code":"752","iso_3166-2":"ISO 3166-2:SE","region":"Europe","sub-region":"Northern Europe","intermediate-region":"","region-code":"150","sub-region-code":"154","intermediate-region-code":""},{"name":"United Kingdom","alpha-2":"GB","alpha-3":"GBR","country-code":"826","iso_3166-2":"ISO 3166-2:GB","region":"Europe","sub-region":"Northern Europe","intermediate-region":"","region-code":"150","sub-region-code":"154","intermediate-region-code":""}]')},469:function(e,t,r){"use strict";(function(e){r(32),r(33),r(51),r(69);var n=r(40),o=r(27),c=r(29),d=r(31),l=r(34),f=r(26),m=(r(11),r(9),r(65),r(494),r(30)),h=r(22),v=r(64),y=r(435),_=r(93),O=r(35),E=r(55),w=r(90),x=r(89),P=r(88);function R(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(f.a)(e);if(t){var o=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var S=function(e,t,r,desc){var n,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(c=(o<3?n(c):o>3?n(t,r,c):n(t,r))||c);return o>3&&c&&Object.defineProperty(t,r,c),c},I=Object(v.namespace)(w.name),j=r(462),k=new WeakMap,$=function(t){Object(d.a)(f,t);var r,l=R(f);function f(){var e;return Object(o.a)(this,f),(e=l.apply(this,arguments)).rootMobileNumber="",e.numberIsValid=null,e.isLoadingRegistration=!1,e.dateOfBirth=null,e.registrationRequest={profileId:0,name:"",surname:"",email:"",mobileCountryCode:"",mobileNumber:"",sourceOfFunds:null,sourceOfFundsOther:"",occupation:null,baseCurrency:"EUR",dateOfBirth:null,acceptedTerms:!1,amlProviderKey:"sumsub"},e.password="",e}return Object(c.a)(f,[{key:"mounted",value:function(){this.registrationRequest.profileId=_.a.profileId.consumers}},{key:"doRegister",value:function(){this.isLoadingRegistration=!0,E.Helpers.create(this.$store,this.registrationRequest).then(this.doCreatePasswordIdentity.bind(this)).catch(this.registrationFailed.bind(this))}},{key:"registrationFailed",value:function(e){this.isLoadingRegistration=!1;var t=e.response.data.errorCode;"USERNAME_NOT_UNIQUE"===t||"EMAIL_NOT_UNIQUE"===t||this.$weavrToastError(t),window.scrollTo(0,0)}},{key:"doCreatePasswordIdentity",value:function(){var e={id:this.consumer.id.id,request:{profileId:this.registrationRequest.profileId}};O.Helpers.createPasswordIdentity(this.$store,e).then(this.doCreatePassword.bind(this),this.registrationFailed.bind(this))}},{key:"doCreatePassword",value:function(){var e={id:this.consumer.id.id,request:{credentialType:"ROOT",identityId:this.consumer.id.id,password:{value:this.password}}};O.Helpers.createPassword(this.$store,e).then(this.waitAndDoLogin.bind(this),this.registrationFailed.bind(this))}},{key:"waitAndDoLogin",value:function(){this.sleep(2e3).then(this.doLogin.bind(this))}},{key:"doLogin",value:function(){var e={code:this.registrationRequest.email,password:this.password};O.Helpers.authenticate(this.$store,e).then(this.goToAdressInputScreen.bind(this))}},{key:"goToAdressInputScreen",value:function(){this.isLoadingRegistration=!1,this.$router.push({path:"/profile/address"})}},{key:"submitForm",value:(r=Object(n.a)(regeneratorRuntime.mark((function e(){var t,r=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,null===this.numberIsValid&&(this.numberIsValid=!1),!this.$v.registrationRequest){e.next=6;break}if(this.$v.registrationRequest.$touch(),!this.$v.registrationRequest.$anyError&&this.numberIsValid){e.next=6;break}return e.abrupt("return",null);case 6:if(!this.isRecaptchaEnabled){e.next=13;break}return e.next=9,this.$recaptcha.getResponse();case 9:return t=e.sent,console.log("ReCaptcha token:",t),e.next=13,this.$recaptcha.reset();case 13:this.$refs.passwordForm.tokenize((function(e){if(""===e.password)return null;r.password=e.password,r.validatePassword()}),(function(e){return console.error(e),null})),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),console.log("Login error:",e.t0);case 20:case"end":return e.stop()}}),e,this,[[0,17]])}))),function(){return r.apply(this,arguments)})},{key:"validatePassword",value:function(){var e={identityProfileId:_.a.profileId.corporates?_.a.profileId.corporates:"",credentialType:"ROOT",password:{value:this.password}};x.Helpers.validatePassword(this.$store,e).then(this.doRegister.bind(this))}},{key:"checkOnKeyUp",value:function(e){console.log("checkOnKeyUp"),"Enter"===e.key&&(e.preventDefault(),this.submitForm())}},{key:"phoneUpdate",value:function(e){this.registrationRequest.mobileCountryCode="+"+e.countryCallingCode,this.registrationRequest.mobileNumber=e.nationalNumber,this.numberIsValid=e.isValid,console.log(e)}},{key:"delayTouch",value:function(e){e.$reset(),k.has(e)&&clearTimeout(k.get(e)),k.set(e,setTimeout(e.$touch,1e3))}},{key:"updateDOB",value:function(e){console.log(e),this.registrationRequest.dateOfBirth={year:e.getFullYear(),month:e.getMonth()+1,day:e.getDate()}}},{key:"passwordBaseStyle",get:function(){return{color:"#495057",fontSize:"16px",fontSmoothing:"antialiased",fontFamily:"'Be Vietnam', sans-serif",fontWeight:"400",lineHeight:"24px",margin:"0",padding:"6px 12px",textIndent:"0px","::placeholder":{color:"#B6B9C7",fontWeight:"400"}}}},{key:"mobileCountries",get:function(){return j.map((function(e){return e["alpha-2"]}))}},{key:"config",get:function(){return{wrap:!1,enableTime:!1,altInput:!0,altFormat:"d/m/Y",maxDate:new Date,locale:{firstDayOfWeek:1}}}},{key:"isRecaptchaEnabled",get:function(){return void 0!==e.env.RECAPTCHA}}]),f}(Object(h.mixins)(P.a));S([I.Getter],$.prototype,"consumer",void 0),$=S([Object(h.Component)({layout:"auth",validations:{registrationRequest:{email:{required:y.required,email:y.email},name:{required:y.required,maxLength:Object(y.maxLength)(20)},surname:{required:y.required,maxLength:Object(y.maxLength)(20)},mobileCountryCode:{required:y.required},mobileNumber:{required:y.required},dateOfBirth:{required:y.required},acceptedTerms:{required:y.required,sameAs:Object(y.sameAs)((function(){return!0}))}}},components:{ErrorAlert:function(){return r.e(1).then(r.bind(null,467))},LoaderButton:function(){return r.e(0).then(r.bind(null,466))},RegisterForm:function(){return r.e(11).then(r.bind(null,488))},ConsumerPersonalDetailsForm:function(){return r.e(13).then(r.bind(null,517))},RegistrationNav:function(){return r.e(6).then(r.bind(null,519))},ComingSoonCurrencies:function(){return r.e(7).then(r.bind(null,520))},DobPicker:function(){return r.e(59).then(r.bind(null,518))}}})],$),t.a=$}).call(this,r(120))},470:function(e,t,r){var n=r(52);e.exports=function(e,t){if(!n(e)||e._t!==t)throw TypeError("Incompatible receiver, "+t+" required!");return e}},494:function(e,t,r){"use strict";var n,o=r(46),c=r(356)(0),d=r(60),meta=r(162),l=r(357),f=r(495),m=r(52),h=r(470),v=r(470),y=!o.ActiveXObject&&"ActiveXObject"in o,_=meta.getWeak,O=Object.isExtensible,E=f.ufstore,w=function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},x={get:function(e){if(m(e)){var data=_(e);return!0===data?E(h(this,"WeakMap")).get(e):data?data[this._i]:void 0}},set:function(e,t){return f.def(h(this,"WeakMap"),e,t)}},P=e.exports=r(496)("WeakMap",w,x,f,!0,!0);v&&y&&(l((n=f.getConstructor(w,"WeakMap")).prototype,x),meta.NEED=!0,c(["delete","has","get","set"],(function(e){var t=P.prototype,r=t[e];d(t,e,(function(a,b){if(m(a)&&!O(a)){this._f||(this._f=new n);var t=this._f[e](a,b);return"set"==e?this:t}return r.call(this,a,b)}))})))},495:function(e,t,r){"use strict";var n=r(354),o=r(162).getWeak,c=r(50),d=r(52),l=r(352),f=r(353),m=r(356),h=r(71),v=r(470),y=m(5),_=m(6),O=0,E=function(e){return e._l||(e._l=new w)},w=function(){this.a=[]},x=function(e,t){return y(e.a,(function(e){return e[0]===t}))};w.prototype={get:function(e){var t=x(this,e);if(t)return t[1]},has:function(e){return!!x(this,e)},set:function(e,t){var r=x(this,e);r?r[1]=t:this.a.push([e,t])},delete:function(e){var t=_(this.a,(function(t){return t[0]===e}));return~t&&this.a.splice(t,1),!!~t}},e.exports={getConstructor:function(e,t,r,c){var m=e((function(e,n){l(e,m,t,"_i"),e._t=t,e._i=O++,e._l=void 0,null!=n&&f(n,r,e[c],e)}));return n(m.prototype,{delete:function(e){if(!d(e))return!1;var data=o(e);return!0===data?E(v(this,t)).delete(e):data&&h(data,this._i)&&delete data[this._i]},has:function(e){if(!d(e))return!1;var data=o(e);return!0===data?E(v(this,t)).has(e):data&&h(data,this._i)}}),m},def:function(e,t,r){var data=o(c(t),!0);return!0===data?E(e).set(t,r):data[e._i]=r,e},ufstore:E}},496:function(e,t,r){"use strict";var n=r(46),o=r(43),c=r(60),d=r(354),meta=r(162),l=r(353),f=r(352),m=r(52),h=r(53),v=r(163),y=r(123),_=r(165);e.exports=function(e,t,r,O,E,w){var x=n[e],P=x,R=E?"set":"add",S=P&&P.prototype,I={},j=function(e){var t=S[e];c(S,e,"delete"==e||"has"==e?function(a){return!(w&&!m(a))&&t.call(this,0===a?0:a)}:"get"==e?function(a){return w&&!m(a)?void 0:t.call(this,0===a?0:a)}:"add"==e?function(a){return t.call(this,0===a?0:a),this}:function(a,b){return t.call(this,0===a?0:a,b),this})};if("function"==typeof P&&(w||S.forEach&&!h((function(){(new P).entries().next()})))){var k=new P,$=k[R](w?{}:-0,1)!=k,C=h((function(){k.has(1)})),L=v((function(e){new P(e)})),M=!w&&h((function(){for(var e=new P,t=5;t--;)e[R](t,t);return!e.has(-0)}));L||((P=t((function(t,r){f(t,P,e);var n=_(new x,t,P);return null!=r&&l(r,E,n[R],n),n}))).prototype=S,S.constructor=P),(C||M)&&(j("delete"),j("has"),E&&j("get")),(M||$)&&j(R),w&&S.clear&&delete S.clear}else P=O.getConstructor(t,e,E,R),d(P.prototype,r),meta.NEED=!0;return y(P,e),I[e]=P,o(o.G+o.W+o.F*(P!=x),I),w||O.setStrong(P,e,E),P}},584:function(e,t,r){"use strict";r.r(t);var n=r(469).a,o=r(42),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-col",{attrs:{md:"6","offset-md":"3"}},[r("div",{staticClass:"text-center pb-5"},[r("img",{staticClass:"d-inline-block align-top",attrs:{src:"/img/logo.svg",width:"200",alt:"onvirtual.cards"}})]),e._v(" "),r("coming-soon-currencies"),e._v(" "),r("b-card",{staticClass:"overflow-hidden",attrs:{"no-body":""}},[r("b-card-body",{staticClass:"p-card"},[r("div",{staticClass:"form-screens"},[r("error-alert"),e._v(" "),r("div",{staticClass:"form-screen"},[r("b-form",{attrs:{novalidate:""},on:{submit:function(t){return t.preventDefault(),e.submitForm(t)}}},[r("h3",{staticClass:"text-center font-weight-light mb-5"},[e._v("\n              Register\n            ")]),e._v(" "),r("b-form-group",{attrs:{label:"First Name"}},[r("b-form-input",{attrs:{state:e.isInvalid(e.$v.registrationRequest.name),placeholder:"First Name"},model:{value:e.registrationRequest.name,callback:function(t){e.$set(e.registrationRequest,"name",t)},expression:"registrationRequest.name"}}),e._v(" "),e.$v.registrationRequest.name.required?e._e():r("b-form-invalid-feedback",[e._v("\n                This field is required\n              ")]),e._v(" "),e.$v.registrationRequest.name.maxLength?e._e():r("b-form-invalid-feedback",[e._v("\n                Name is too long.\n              ")])],1),e._v(" "),r("b-form-group",{attrs:{label:"Last Name"}},[r("b-form-input",{attrs:{state:e.isInvalid(e.$v.registrationRequest.surname),placeholder:"Last Name"},model:{value:e.registrationRequest.surname,callback:function(t){e.$set(e.registrationRequest,"surname",t)},expression:"registrationRequest.surname"}}),e._v(" "),e.$v.registrationRequest.surname.required?e._e():r("b-form-invalid-feedback",[e._v("\n                This field is required\n              ")]),e._v(" "),e.$v.registrationRequest.surname.maxLength?e._e():r("b-form-invalid-feedback",[e._v("\n                Surname is too long.\n              ")])],1),e._v(" "),r("b-form-group",{attrs:{label:"Date of Birth"}},[r("dob-picker",{staticClass:"d-flex",attrs:{value:e.dateOfBirth,placeholders:["Day","Month","Year"],"month-format":"long","show-labels":"false","select-class":"form-control","label-class":"small flex-fill"},on:{input:e.updateDOB,change:e.updateDOB}}),e._v(" "),r("b-form-invalid-feedback",{attrs:{state:e.isInvalid(e.$v.registrationRequest.dateOfBirth)}},[e._v("\n                This field is required.\n              ")])],1),e._v(" "),r("b-form-group",{attrs:{state:e.isInvalid(e.$v.registrationRequest.email),label:"Email"}},[r("b-form-input",{attrs:{state:e.isInvalid(e.$v.registrationRequest.email),placeholder:"name@email.com"},on:{input:function(t){return e.delayTouch(e.$v.registrationRequest.email)}},model:{value:e.$v.registrationRequest.email.$model,callback:function(t){e.$set(e.$v.registrationRequest.email,"$model",t)},expression:"$v.registrationRequest.email.$model"}}),e._v(" "),r("b-form-invalid-feedback",[e._v("Email address invalid.")])],1),e._v(" "),r("b-form-group",{attrs:{label:"MOBILE NUMBER"}},[r("vue-phone-number-input",{attrs:{"only-countries":e.mobileCountries,"border-radius":0,error:!1===e.numberIsValid,color:"#6C1C5C","error-color":"#F50E4C","valid-color":"#6D7490","default-country-code":"GB"},on:{update:e.phoneUpdate},model:{value:e.rootMobileNumber,callback:function(t){e.rootMobileNumber=t},expression:"rootMobileNumber"}}),e._v(" "),!1===e.numberIsValid?r("b-form-invalid-feedback",{attrs:{"force-show":""}},[e._v("\n                This field must be a valid mobile number.\n              ")]):e._e()],1),e._v(" "),r("client-only",{attrs:{placeholder:"Loading..."}},[r("weavr-form",{ref:"passwordForm",class:{"is-dirty":e.$v.registrationRequest.$dirty}},[r("label",{staticClass:"d-block"},[e._v("PASSWORD")]),e._v(" "),r("weavr-input",{attrs:{options:{placeholder:"****",classNames:{empty:"is-invalid"}},"base-style":e.passwordBaseStyle,"class-name":"sign-in-password",name:"password",field:"password",required:"true"},on:{onKeyUp:e.checkOnKeyUp}}),e._v(" "),r("small",{staticClass:"form-text text-muted"},[e._v("Minimum 8, Maximum 50 characters.")])],1)],1),e._v(" "),r("b-form-row",{staticClass:"small mt-3 text-muted"},[r("b-col",[r("b-form-group",[r("b-form-checkbox",{attrs:{state:e.isInvalid(e.$v.registrationRequest.acceptedTerms)},model:{value:e.$v.registrationRequest.acceptedTerms.$model,callback:function(t){e.$set(e.$v.registrationRequest.acceptedTerms,"$model",t)},expression:"$v.registrationRequest.acceptedTerms.$model"}},[e._v("\n                    I accept the\n                    "),r("a",{staticClass:"text-decoration-underline text-muted",attrs:{href:"https://www.onvirtual.cards/terms/consumer",target:"_blank"}},[e._v("terms of use")]),e._v("\n                    and\n                    "),r("a",{staticClass:"text-decoration-underline text-muted",attrs:{href:"https://www.onvirtual.cards/policy/",target:"_blank"}},[e._v("privacy policy")])]),e._v(" "),r("b-form-invalid-feedback",[e._v("This field is required.")])],1)],1)],1),e._v(" "),e.isRecaptchaEnabled?r("div",{staticClass:"mt-2"},[r("recaptcha")],1):e._e(),e._v(" "),r("b-row",{staticClass:"mt-4",attrs:{"align-v":"center"}},[r("b-col",{staticClass:"text-center"},[r("loader-button",{attrs:{"is-loading":e.isLoadingRegistration,"button-text":"continue"}})],1)],1)],1)],1)],1)])],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);