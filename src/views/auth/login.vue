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




  <el-form  label-position="left" label-width="0px" class="demo-ruleForm login-container">
    <h3 class="title">系统登录</h3>
    <el-form-item prop="account">
      <el-input type="text" v-model="from.username" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item prop="checkPass">
      <el-input type="password" v-model="from.password" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:100%;" @click="login" :loading="isLoging">登录</el-button>
      <!--<el-button @click.native.prevent="handleReset2">重置</el-button>-->
    </el-form-item>
  </el-form>




    </div>
</template>


<script>
// import Loading from "./Loading.vue";
import user from '../../api/user'
export default {
  name: "login",
  data() {
    return {
      isLoging: false,
      from:{
        username: "",
        password: ""
      },
      checked: true

    };
  },
  components: {
    // Loading
  },
  created(){
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
      if (this.from.username != "" && this.from.password != "") {
        this.isLoging = true;
        this.toLogin(this.from);
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
      console.log("from",this.from)
      this.$axios.post("/user/login", params).then(res=>{
        this.isLoging = false;
        console.log(res.data)

        this.$store.commit('set_token',res.data.token)
        this.$store.commit('set_role',res.data.user_role)
        let rol =res.data.user_role
        if(rol == '[Admin]'){
          this.$parent.user_type = 'Admin'
          this.$router.push("/admin");
        }else if(rol == "[Operate]"){
          this.$parent.user_type = 'Dist'
          this.$router.push("/dist");
        }else{
          this.$parent.user_type = 'User'
          this.$router.push("/user");
        }
      }).catch(err=>{
        console.log(err)
      })


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


  .login{
    border: 0.1px solid #B2E7F5;
    background-image: url("data:image/jpeg;base64,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");
    /*background-repeat: repeat-x;*/
    background-repeat:no-repeat;
    background-size:100% 100%;
    -moz-background-size:100% 100%;
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

