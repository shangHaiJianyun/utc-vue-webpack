<template>
    <div class="login" id="login">
        <a href="javascript:;" class="log-close"><i class="icons close"></i></a>
        <div class="log-bg">
            <div class="log-cloud cloud1"></div>
            <div class="log-cloud cloud2"></div>
            <div class="log-cloud cloud3"></div>
            <div class="log-cloud cloud4"></div>

            <div class="log-logo">Welcome!</div>
            <div class="log-text">@doterlin</div>
        </div>
        <!--<div class="log-email">-->
            <!--<input type="text" placeholder="Email" :class="'log-input' + (account==''?' log-input-empty':'')" v-model="from.account"><input type="password" placeholder="Password" :class="'log-input' + (password==''?' log-input-empty':'')" v-model="from.password">-->
            <!--<a href="javascript:;" class="log-btn" @click="login">Login</a>-->
        <!--</div>-->
      <div class="log-email">
        <b-container fluid>
          <b-row class="my-1">
            <b-col sm="3"><label >Type name:</label></b-col>
            <b-col sm="9"><b-form-input  v-model="from.username"></b-form-input></b-col>
          </b-row>
          <b-row class="my-1">
            <b-col sm="3"><label >Type password:</label></b-col>
            <b-col sm="9"><b-form-input  v-model="from.password"></b-form-input></b-col>
          </b-row>
          <b-row class="my-1">
            <b-col sm="12"><label ><a href="javascript:;" class="log-btn" @click="login">Login</a></label></b-col>

          </b-row>
        </b-container>
      </div>
        <!-- <Loading v-if="isLoging" marginTop="-30%"></Loading> -->
    </div>
</template>


<script>
// import Loading from "./Loading.vue";
import user from '../../api/user'
export default {
  name: "login",
  data() {
    return {
      // isLoging: false,
      from:{
        username: "",
        password: ""
      }

    };
  },
  components: {
    // Loading
  },
  methods: {
    //登录逻辑
    login() {
      console.log("store", this.$store.state.token);
      let expireDays = 1000 * 60 * 60 * 24 * 15;
      this.setCookie("session", "blablablablabla...", expireDays);
      // this.$router.push("/admin-home");
      if (this.from.username != "" && this.from.password != "") {
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
      console.log(this.$parent.user_type)
      this.$parent.user_type = 'Dist'
      let rol =this.$parent.user_type
      if(rol == 'Admin'){
        this.$router.push("/admin-home");
      }else{
        this.$router.push("/dists");
      }
      // this.$axios.post("/users/login",{params: params}).then(res=>{
      //   console.log(res)
      // }).catch(err=>{
      //   console.log(err)
      // })


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

