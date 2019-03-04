<template>
  <div class="login">
    <!--<a href="javascript:;" class="log-close"><i class="icons close"></i></a>-->
    <!--<div class="log-bg">-->
    <!--<div class="log-cloud cloud1"></div>-->
    <!--<div class="log-cloud cloud2"></div>-->
    <!--<div class="log-cloud cloud3"></div>-->
    <!--<div class="log-cloud cloud4"></div>-->

    <!--<div class="log-logo">Welcome!</div>-->
    <!--<div class="log-text">@doterlin</div>-->
    <!--</div>-->
    <!--&lt;!&ndash;<div class="log-email">&ndash;&gt;-->
    <!--&lt;!&ndash;<input type="text" placeholder="Email" :class="'log-input' + (account==''?' log-input-empty':'')" v-model="from.account"><input type="password" placeholder="Password" :class="'log-input' + (password==''?' log-input-empty':'')" v-model="from.password">&ndash;&gt;-->
    <!--&lt;!&ndash;<a href="javascript:;" class="log-btn" @click="login">Login</a>&ndash;&gt;-->
    <!--&lt;!&ndash;</div>&ndash;&gt;-->
    <!--<div class="log-email">-->
    <!--<b-container fluid>-->
    <!--<b-row class="my-1">-->
    <!--<b-col sm="3"><label >Type name:</label></b-col>-->
    <!--<b-col sm="9"><b-form-input  v-model="from.username"></b-form-input></b-col>-->
    <!--</b-row>-->
    <!--<b-row class="my-1">-->
    <!--<b-col sm="3"><label >Type password:</label></b-col>-->
    <!--<b-col sm="9"><b-form-input  v-model="from.password"></b-form-input></b-col>-->
    <!--</b-row>-->
    <!--<b-row class="my-1">-->
    <!--<b-col sm="12"><label ><a href="javascript:;" class="log-btn" @click="login">Login</a></label></b-col>-->

    <!--</b-row>-->
    <!--</b-container>-->
    <!--</div>-->
    <!--&lt;!&ndash; <Loading v-if="isLoging" marginTop="-30%"></Loading> &ndash;&gt;-->
    <!--</div>-->

    <el-form
      label-position="left"
      label-width="0px"
      class="demo-ruleForm login-container"
    >
      <h3 class="title">系统登录</h3>
      <el-form-item prop="account">
        <el-input
          type="text"
          v-model="form.username"
          auto-complete="off"
          placeholder="账号"
        ></el-input>
      </el-form-item>
      <el-form-item prop="checkPass">
        <el-input
          type="password"
          v-model="form.password"
          auto-complete="off"
          placeholder="密码"
        ></el-input>
      </el-form-item>
      <el-checkbox
        v-model="checked"
        checked
        class="remember"
      >记住密码</el-checkbox>
      <el-form-item style="width:100%;">
        <el-button
          type="primary"
          style="width:100%;"
          @click="login"
          :loading="isLoging"
        >登录</el-button>
        <!--<el-button @click.native.prevent="handleReset2">重置</el-button>-->
      </el-form-item>
    </el-form>

  </div>
</template>


<script>
// import Loading from "./Loading.vue";
import user from "../../api/user";
export default {
  name: "login",
  data() {
    return {
      isLoging: false,
      form: {
        username: "admin",
        password: ""
      },
      checked: true
    };
  },
  components: {
    // Loading
  },
  created() {
    // if(window.sessionStorage.getItem('token')){
    //
    // }
  },
  methods: {
    //登录逻辑
    login() {
      // console.log("store", this.$store.state.token);
      // let expireDays = 1000 * 60 * 60 * 24 * 15;
      // this.setCookie("session", "blablablablabla...", expireDays);
      // this.$router.push("/admin-home");
      if (this.form.username != "" && this.form.password != "") {
        this.isLoging = true;
        this.toLogin(this.form);
      }
    },

    //登录请求
    toLogin(params) {
      // user.login(params)
      // this.$axios.post("/users/login",{params: params}).then(res=>{
      //   console.log(res)
      // }).catch(err=>{
      //   console.log(err)
      // })
      // this.$store.commit('set_token','222222')
      // console.log(this.$parent.user_type)
      // this.$parent.user_type = 'User'
      // let rol =this.$parent.user_type
      // if(rol == 'Admin'){
      //   this.$router.push("/admin");
      // }else if(rol == "Dist"){
      //   this.$router.push("/dist");
      // }else{
      //   this.$router.push("/user");
      // }
      console.log("form", this.form);
      this.$axios
        .post("/user/login", params)
        .then(res => {
          this.isLoging = false;
          console.log("login res:", res.data);

          this.$store.commit("set_token", res.data.token);
          this.$store.commit("set_role", res.data.user_role);
          let rol = res.data.user_role;
          if (rol == "[Admin]") {
            this.$parent.user_type = "Admin";
            this.$router.push("/admin");
          } else if (rol == "[Operate]") {
            this.$parent.user_type = "Dist";
            this.$router.push("/dist");
          } else {
            this.$parent.user_type = "User";
            this.$router.push("/user");
          }
        })
        .catch(err => {
          console.log(err);
        });

      // js 在  index.html 中已加载
      //一般要跟后端了解密码的加密规则
      //这里例子用的哈希算法来自./js/sha1.min.js
      // let password_sha = hex_sha1(hex_sha1(this.password));

      //需要想后端发送的登录参数
      // let loginParam = {
      //   account: this.account,
      //   password_sha
      // };

      //设置在登录状态
      // this.isLoging = true;
      // console.log("login..", this.isLoging);
      // console.log("store", this.$store.state.isLoggedIn);
      // let expireDays = 1000 * 60 * 60 * 24 * 15;
      // this.setCookie("session", "blablablablabla...", expireDays);
      // //   this.$store.state.isLoggedIn = true;
      // this.$store.commit("set_token", "Authentication-Token");
      // this.$router.push("/admin-home");

      //   if ($store.state.token) {
      //     this.$router.push("/admin-home");
      //     console.log($store.state.token);
      //   } else {
      //     this.$router.replace("/login");
      //   }

      // example
      // https://blog.csdn.net/qq_34825875/article/details/79569579

      //请求后端,比如:
      /*this.$http.post( 'example.com/login.php', {
  		param: loginParam).then((response) => {
        if(response.data.code == 1){
          let expireDays = 1000 * 60 * 60 * 24 * 15;
          this.setCookie('session', response.data.session, expireDays);
          //登录成功后
          this.$router.push('/user_info');
        }
	    }, (response) => {
	        //Error
	    });
  		*/

      //演示用
      //   setTimeout(() => {
      //     //登录状态15天后过期
      //     let expireDays = 1000 * 60 * 60 * 24 * 15;
      //     this.setCookie("session", "blablablablabla...", expireDays);
      //     this.isLoging = false;
      //     //登录成功后
      //     this.$router.push("@views/Home");
      //   }, 3000);
    }
  }
};
</script>
<style scoped>
.login {
  border: 0.1px solid #b2e7f5;
  background-image: url("../../assets/images/login.jpg");
  /*background-repeat: repeat-x;*/
  background-repeat: no-repeat;
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
  /*height:100%;*/
}
.login-container {
  /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  background-clip: padding-box;
  margin: 180px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
  opacity: 0.8;
}
.title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}
.remember {
  margin: 0px 0px 35px 0px;
}
</style>

