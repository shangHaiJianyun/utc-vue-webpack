webpackJsonp([10],{MkTm:function(r,e,n){var t=n("j6IM");"string"==typeof t&&(t=[[r.i,t,""]]),t.locals&&(r.exports=t.locals);n("rjj0")("7bbf1a3c",t,!1,{})},NBc0:function(r,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t={data:function(){return{options:[{value:"User",label:"用户"},{value:"Operate",label:"操作员"},{value:"Admin",label:"管理员"}],value:"",form:{username:"",password:"",user_role:""}}},created:function(){},methods:{register:function(){var r=this;""!=this.form.username&&""!=this.form.password&&""!=this.form.user_role?this.$axios.post(this.$api+"/api/user/add_user",this.form).then(function(e){console.log(e),e.data.new_user?(r.$message({message:"注册成功",type:"success"}),r.$router.push("/login")):r.$message.error("用户已注册")}).catch(function(r){console.log(r)}):alert("信息不全")}}},o=function(){var r=this,e=r.$createElement,n=r._self._c||e;return n("div",{staticClass:"register"},[n("el-form",{staticClass:"demo-ruleForm login-container",attrs:{"label-position":"left","label-width":"0px"}},[n("h3",{staticClass:"title"},[r._v("用户注册")]),r._v(" "),n("el-form-item",{attrs:{prop:"account"}},[n("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:"账号"},model:{value:r.form.username,callback:function(e){r.$set(r.form,"username",e)},expression:"form.username"}})],1),r._v(" "),n("el-form-item",{attrs:{prop:"checkPass"}},[n("el-input",{attrs:{type:"password","auto-complete":"off",placeholder:"密码"},model:{value:r.form.password,callback:function(e){r.$set(r.form,"password",e)},expression:"form.password"}})],1),r._v(" "),n("el-form-item",[n("el-select",{attrs:{placeholder:"用户类型"},model:{value:r.form.user_role,callback:function(e){r.$set(r.form,"user_role",e)},expression:"form.user_role"}},r._l(r.options,function(r){return n("el-option",{key:r.value,attrs:{label:r.label,value:r.value}})}))],1),r._v(" "),n("el-form-item",{staticStyle:{width:"100%"}},[n("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary"},on:{click:function(e){r.register()}}},[r._v("注册")])],1)],1)],1)};o._withStripped=!0;var a={render:o,staticRenderFns:[]},s=a;var i=!1;var l=n("VU/8")(t,s,!1,function(r){i||n("MkTm")},"data-v-0dfcf280",null);l.options.__file="src/views/auth/register.vue";e.default=l.exports},emD6:function(r,e){r.exports="../../static/img/register.19c1026.jpg"},j6IM:function(r,e,n){var t=n("kxFB");(r.exports=n("FZ+f")(!0)).push([r.i,"\n.register[data-v-0dfcf280] {\r\n  background-image: url("+t(n("emD6"))+");\r\n  /*background-repeat: repeat-x;*/\r\n  background-repeat: no-repeat;\r\n  background-size: 100% 100%;\r\n  -moz-background-size: 100% 100%;\r\n  position: fixed;\r\n  height: 100%;\r\n  top: 0;\r\n  width: 100%;\r\n  /*height:100%;*/\n}\n.login-container[data-v-0dfcf280] {\r\n  /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/\r\n  border-radius: 5px;\r\n  -moz-border-radius: 5px;\r\n  background-clip: padding-box;\r\n  margin: 180px auto;\r\n  width: 350px;\r\n  padding: 35px 35px 15px 35px;\r\n  background: #fff;\r\n  border: 1px solid #eaeaea;\r\n  -webkit-box-shadow: 0 0 25px #cac6c6;\r\n          box-shadow: 0 0 25px #cac6c6;\r\n  opacity: 0.8;\n}\n.title[data-v-0dfcf280] {\r\n  margin: 0px auto 40px auto;\r\n  text-align: center;\r\n  color: #505458;\n}\n.remember[data-v-0dfcf280] {\r\n  margin: 0px 0px 35px 0px;\n}\r\n","",{version:3,sources:["D:/my-vue-webpack/utc-vue-webpack/src/views/auth/src/views/auth/register.vue"],names:[],mappings:";AA4FA;EACA,gDAAA;EACA,gCAAA;EACA,6BAAA;EACA,2BAAA;EACA,gCAAA;EACA,gBAAA;EACA,aAAA;EACA,OAAA;EACA,YAAA;EACA,gBAAA;CACA;AACA;EACA,iFAAA;EAEA,mBAAA;EACA,wBAAA;EACA,6BAAA;EACA,mBAAA;EACA,aAAA;EACA,6BAAA;EACA,iBAAA;EACA,0BAAA;EACA,qCAAA;UAAA,6BAAA;EACA,aAAA;CACA;AACA;EACA,2BAAA;EACA,mBAAA;EACA,eAAA;CACA;AACA;EACA,yBAAA;CACA",file:"register.vue",sourcesContent:['<template>\r\n  <div class="register">\r\n    <el-form label-position="left" label-width="0px" class="demo-ruleForm login-container">\r\n      <h3 class="title">用户注册</h3>\r\n      <el-form-item prop="account">\r\n        <el-input type="text" v-model="form.username" auto-complete="off" placeholder="账号"></el-input>\r\n      </el-form-item>\r\n      <el-form-item prop="checkPass">\r\n        <el-input type="password" v-model="form.password" auto-complete="off" placeholder="密码"></el-input>\r\n      </el-form-item>\r\n      <el-form-item>\r\n        <el-select v-model="form.user_role" placeholder="用户类型">\r\n          <el-option\r\n            v-for="item in options"\r\n            :key="item.value"\r\n            :label="item.label"\r\n            :value="item.value"\r\n          ></el-option>\r\n        </el-select>\r\n      </el-form-item>\r\n\r\n      <el-form-item style="width:100%;">\r\n        <el-button type="primary" style="width:100%;" @click="register()">注册</el-button>\r\n        \x3c!--<el-button @click.native.prevent="handleReset2">重置</el-button>--\x3e\r\n      </el-form-item>\r\n    </el-form>\r\n  </div>\r\n</template>\r\n\r\n\r\n<script>\r\nexport default {\r\n  data() {\r\n    return {\r\n      options: [\r\n        {\r\n          value: "User",\r\n          label: "用户"\r\n        },\r\n        {\r\n          value: "Operate",\r\n          label: "操作员"\r\n        },\r\n        {\r\n          value: "Admin",\r\n          label: "管理员"\r\n        }\r\n      ],\r\n      value: "",\r\n      form: {\r\n        username: "",\r\n        password: "",\r\n        user_role: ""\r\n      }\r\n    };\r\n  },\r\n\r\n  created() {},\r\n  methods: {\r\n    //登录逻辑\r\n    register() {\r\n      var _that = this;\r\n      if (\r\n        this.form.username != "" &&\r\n        this.form.password != "" &&\r\n        this.form.user_role != ""\r\n      ) {\r\n        this.$axios\r\n          .post(_that.$api + "/api/user/add_user", this.form)\r\n          .then(res => {\r\n            console.log(res);\r\n            if (res.data.new_user) {\r\n              this.$message({\r\n                message: "注册成功",\r\n                type: "success"\r\n              });\r\n              this.$router.push("/login");\r\n            } else {\r\n              this.$message.error("用户已注册");\r\n            }\r\n          })\r\n          .catch(err => {\r\n            console.log(err);\r\n          });\r\n      } else {\r\n        alert("信息不全");\r\n      }\r\n    }\r\n  }\r\n};\r\n<\/script>\r\n<style scoped>\r\n.register {\r\n  background-image: url("../../assets/images/register.jpg");\r\n  /*background-repeat: repeat-x;*/\r\n  background-repeat: no-repeat;\r\n  background-size: 100% 100%;\r\n  -moz-background-size: 100% 100%;\r\n  position: fixed;\r\n  height: 100%;\r\n  top: 0;\r\n  width: 100%;\r\n  /*height:100%;*/\r\n}\r\n.login-container {\r\n  /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/\r\n  -webkit-border-radius: 5px;\r\n  border-radius: 5px;\r\n  -moz-border-radius: 5px;\r\n  background-clip: padding-box;\r\n  margin: 180px auto;\r\n  width: 350px;\r\n  padding: 35px 35px 15px 35px;\r\n  background: #fff;\r\n  border: 1px solid #eaeaea;\r\n  box-shadow: 0 0 25px #cac6c6;\r\n  opacity: 0.8;\r\n}\r\n.title {\r\n  margin: 0px auto 40px auto;\r\n  text-align: center;\r\n  color: #505458;\r\n}\r\n.remember {\r\n  margin: 0px 0px 35px 0px;\r\n}\r\n</style>\r\n\r\n'],sourceRoot:""}])},kxFB:function(r,e){r.exports=function(r){return"string"!=typeof r?r:(/^['"].*['"]$/.test(r)&&(r=r.slice(1,-1)),/["'() \t\n]/.test(r)?'"'+r.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':r)}}});
//# sourceMappingURL=10.61da71171d9a6b5d902c.js.map