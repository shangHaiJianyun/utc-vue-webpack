<template>
  <div class="login" :style="{height:heights}">
    <el-form label-position="left" label-width="0px" class="demo-ruleForm login-container">
      <h3 class="title">系统登录</h3>
      <el-form-item prop="account">
        <el-input type="text" v-model="form.username" auto-complete="off" placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item prop="checkPass">
        <el-input type="password" v-model="form.password" auto-complete="off" placeholder="密码"></el-input>
      </el-form-item>
      <el-row>
        <el-col :span="12">
          <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
        </el-col>
        <el-col :span="12">
          <div @click="register()" class="registertext">用户注册</div>
        </el-col>
      </el-row>

      <el-form-item style="width:100%;">
        <el-button type="primary" style="width:100%;" @click="login()">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>


<script>
export default {
  name: "login",
  data() {
    return {
      heights: document.documentElement.clientHeight + "px",
      isLoging: false,
      form: {
        username: "",
        password: ""
      },
      checked: true
    };
  },

  created() {},
  methods: {
    //登录逻辑
    login() {
      if (this.form.username != "" && this.form.password != "") {
        this.isLoging = true;
        this.toLogin(this.form);
      }
    },
    register() {
      this.$router.push("/register");
    },
    //登录请求
    toLogin(params) {
      console.log(params);
      this.$axios
        .post("http://dev.upctech.com.cn/api/user/login", params)
        .then(res => {
          this.isLoging = false;
          this.$store.commit("set_token", res.data.token);
          this.$store.commit("set_role", res.data.user_role);
          let rol = res.data.user_role;
          this.$router.push("/admin");
          // if (rol == "[Admin]") {
          //   this.$parent.user_type = "Admin";
          //   this.$router.push("/admin");
          // } else if (rol == "[Operate]") {
          //   this.$parent.user_type = "Dist";
          //   this.$router.push("/dist");
          // } else {
          //   this.$parent.user_type = "User";
          //   this.$router.push("/user");
          // }
        })
        .catch(err => {
          console.log(err);
        });
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
  position: fixed;
  top: 0;
  width: 100%;
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
.registertext {
  color: #409eff;
}
</style>

