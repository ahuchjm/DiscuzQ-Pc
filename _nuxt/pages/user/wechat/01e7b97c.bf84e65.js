(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{518:function(e,t,r){r(32);var n=r(501);r(51),e.exports={data:function(){var e=this;return{errorCodeHandler:{default:{model_not_found:function(){return e.$router.replace("/error")},not_authenticated:function(){return e.$router.push("/user/login")}},thread:{permission_denied:function(){return e.$router.replace("/error")}}}}},methods:{handleError:function(e){var t=arguments,r=this;return n(regeneratorRuntime.mark((function n(){var o,c,l,h,m;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(o=t.length>1&&void 0!==t[1]?t[1]:"",c=e.response.data.errors,!(Array.isArray(c)&&c.length>0)){n.next=13;break}if(l=c[0].code,h=c[0].detail&&c[0].detail.length>0?c[0].detail[0]:c[0].code,m=c[0].detail&&c[0].detail.length>0?c[0].detail[0]:r.$t("core.".concat(h)),"site_closed"!==c[0].code){n.next=10;break}return n.next=9,r.siteClose(c);case 9:return n.abrupt("return",n.sent);case 10:r.$message.error(m),r.errorCodeHandler.default[l]&&r.errorCodeHandler.default[l](),o&&r.errorCodeHandler[o][l]&&r.errorCodeHandler[o][l]();case 13:case"end":return n.stop()}}),n)})))()},siteClose:function(e){var t=this;return n(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,t.$store.dispatch("forum/setError",{code:e[0].code,detail:e[0].detail&&e[0].detail.length>0&&e[0].detail[0]});case 3:return r.next=5,t.$router.push("/site/close");case 5:r.next=9;break;case 7:r.prev=7,r.t0=r.catch(0);case 9:case"end":return r.stop()}}),r,null,[[0,7]])})))()}}}},519:function(e,t){e.exports={data:function(){return{title:"‎"}},computed:{forums:function(){return this.$store.state.site.info.attributes||{}}},head:function(){return{title:"‎"!==this.title&&this.forums&&this.forums.set_site&&this.forums.set_site.site_name?this.title+" - "+this.forums.set_site.site_name:this.title}}}},530:function(e,t,r){},584:function(e,t,r){"use strict";var n=r(530);r.n(n).a},586:function(e,t,r){"use strict";r.r(t);var n={name:"RegAgreement",props:{check:{type:Boolean,default:!0}},data:function(){return{forums:"",popTitle:"",popDetail:"",showagree:!1,checked:!0}},mounted:function(){this.getAttachMent()},methods:{getAttachMent:function(){var e=this;this.$store.dispatch("jv/get",["forum",{params:{include:"users","filter[tag]":"agreement"}}]).then((function(t){e.forums=t}))},open:function(e){this.$router.push("/user/agreement?type=".concat(e))},rcheck:function(){this.$emit("check",this.checked)}}},o=(r(584),r(13)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.forums.agreement&&e.forums.agreement.register||e.forums.agreement&&e.forums.agreement.privacy?r("div",{staticClass:"reg-agreement"},[e.check?r("el-checkbox",{on:{change:e.rcheck},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}}):e._e(),e._v(" "),r("span",{staticClass:"agree"},[e._v(e._s(e.$t("permission.user.agreement")))]),e._v(" "),e.forums.agreement&&e.forums.agreement.register?r("span",{staticClass:"regagree",on:{click:function(t){return e.open("register")}}},[e._v(e._s("《"+this.$t("permission.user.agreementRegister")+"》")+"\n  ")]):e._e(),e._v(" "),e.forums.agreement&&e.forums.agreement.privacy?r("span",{staticClass:"regagree",on:{click:function(t){return e.open("privacy")}}},[e._v(e._s("《"+this.$t("permission.user.agreementPrivacy")+"》")+"\n  ")]):e._e()],1):e._e()}),[],!1,null,"4d9c6d12",null);t.default=component.exports},720:function(e,t,r){},870:function(e,t,r){e.exports=r.p+"img/wechat.7bcb838.png"},871:function(e,t,r){"use strict";var n=r(720);r.n(n).a},939:function(e,t,r){"use strict";r.r(t);var head=r(519),n=r.n(head),o=r(518),c=r.n(o),l=r(171),h=r.n(l),m={name:"Wechat",mixins:[n.a,c.a,h.a],data:function(){return{title:this.$t("user.quicklogin"),code:"",wechatLogin:{},wechatLoginTimer:null,activeName:"0",ischeck:!0,preurl:"/"}},computed:{forums:function(){return this.$store.state.site.info.attributes||{}}},mounted:function(){var e=this.$route.query,code=e.code,t=e.preurl;t&&(this.preurl=t),"undefined"!==code&&(this.code=code),this.forums&&this.forums.set_site&&this.forums.set_site.site_mode&&(this.site_mode=this.forums.set_site.site_mode),this.createQRcode()},destroyed:function(){window.clearInterval(this.wechatLoginTimer)},methods:{check:function(e){this.ischeck=e},createQRcode:function(){var e=this;this.$store.dispatch("jv/get","/oauth/wechat/pc/qrcode").then((function(t){if(t){e.wechatLogin=t;var r=e;e.wechatLoginTimer=setInterval(r.getLoginStatus,3e3)}}),(function(t){return e.handleError(t)}))},getLoginStatus:function(){var e=this;this.wechatLogin&&!this.wechatLogin.session_token||this.$store.dispatch("jv/get","/oauth/wechat/pc/login/".concat(this.wechatLogin.session_token)).then((function(t){if(t){clearInterval(e.wechatLoginTimer),e.$store.commit("session/SET_USER_ID",t._jv.id),e.$store.commit("session/CHECK_SESSION",!0),e.$store.commit("session/SET_ACCESS_TOKEN",t.access_token);var r=e.$store.getters["session/get"]("userId");e.$store.dispatch("jv/get",["users/".concat(r),{params:{include:"groups,wechat"}}]).then((function(t){t.username&&(e.$message.success(e.$t("user.loginSuccess")),e.logind())}))}}),(function(t){var r=t.response.data.errors;if(Array.isArray(r)&&r.length>0){var n=r[0].detail&&r[0].detail.length>0?r[0].detail[0]:r[0].code,o=r[0].detail&&r[0].detail.length>0?r[0].detail[0]:e.$t("core.".concat(n));if("pc_qrcode_scanning_code"===n)return;if("no_bind_user"===n){var c=r[0].user.nickname,l=r[0].user.headimgurl,h=r[0].token;localStorage.setItem("wechat",h),e.forums&&e.forums.set_reg&&0===e.forums.set_reg.register_type&&e.$router.push("/user/register-bind?nickname=".concat(c,"&headimgurl=").concat(l)),e.forums&&e.forums.set_reg&&1===e.forums.set_reg.register_type&&e.$router.push("/user/wechat-bind-phone?nickname=".concat(c,"&headimgurl=").concat(l))}else clearInterval(e.wechatLoginTimer),e.$message.error(o),e.createQRcode()}}))},toUserlogin:function(){this.$router.push("/user/login?code=".concat(this.code,"&preurl=").concat(this.preurl))},toPhonelogin:function(){this.forums&&this.forums.set_reg&&1===this.forums.set_reg.register_type?this.$router.push("/user/phone-login-register?code=".concat(this.code,"&preurl=").concat(this.preurl)):this.$router.push("/user/phone-login?code=".concat(this.code,"&preurl=").concat(this.preurl))}}},d=(r(871),r(13)),component=Object(d.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.forums?n("div",{staticClass:"register"},[n("el-tabs",{staticClass:"register-select",attrs:{type:"border-card"},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[e.forums&&e.forums.passport&&e.forums.passport.oplatform_close?n("el-tab-pane",{attrs:{label:e.forums&&e.forums.set_reg&&2!==e.forums.set_reg.register_type?e.$t("user.quicklogin"):e.$t("user.quicklogin")+"/注册",name:"0"}},[n("div",{staticClass:"quick"},[n("div",{staticClass:"quick-container"},[n("div",{staticClass:"qrcode"},[n("img",{attrs:{src:e.wechatLogin.base64_img}})]),e._v(" "),n("div",{staticClass:"quick-title"},[n("img",{attrs:{src:r(870)}}),e._v(" "),n("span",[e._v("\n              "+e._s(e.forums&&e.forums.set_reg&&2!==e.forums.set_reg.register_type?e.$t("user.wechatlogin"):e.$t("user.wechatlogin")+"/注册")+"\n            ")])]),e._v(" "),n("div",{staticClass:"agreement"},[e.forums&&e.forums.set_reg&&2===e.forums.set_reg.register_type?n("reg-agreement",{attrs:{check:!1},on:{check:e.check}}):e._e()],1),e._v(" "),n("div",{staticClass:"otherlogin"},[e.forums&&e.forums.qcloud&&e.forums.qcloud.qcloud_sms&&e.forums.set_reg&&2!==e.forums.set_reg.register_type?n("svg-icon",{staticClass:"phone-icon",attrs:{type:"phonelogin"},on:{click:e.toPhonelogin}}):e._e(),e._v(" "),n("svg-icon",{staticClass:"wechat-icon",attrs:{type:"userlogin"},on:{click:e.toUserlogin}})],1)])])]):e._e()],1)],1):e._e()}),[],!1,null,"0dd0164b",null);t.default=component.exports;installComponents(component,{RegAgreement:r(586).default,SvgIcon:r(67).default})}}]);