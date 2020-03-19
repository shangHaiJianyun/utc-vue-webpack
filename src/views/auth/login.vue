<template>
  <div class="login"
       :style="{height:heights}">
    <el-form label-position="left"
             label-width="0px"
             class="demo-ruleForm login-container">
      <h3 class="title">系统登录</h3>
      <el-form-item prop="account">
        <el-input type="text"
                  v-model="form.username"
                  auto-complete="off"
                  placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item prop="checkPass">
        <el-input type="password"
                  v-model="form.password"
                  auto-complete="off"
                  placeholder="密码"></el-input>
      </el-form-item>
      <el-row>
        <el-col :span="12">
          <el-checkbox v-model="checked"
                       checked
                       class="remember">记住密码</el-checkbox>
        </el-col>
        <el-col :span="12">
          <div @click="register()"
               class="registertext">用户注册</div>
        </el-col>
      </el-row>

      <el-form-item style="width:100%;">
        <el-button type="primary"
                   style="width:100%;"
                   @click="login()">登录</el-button>
        <div>使用合作网站账号登陆后台：</div>
        <div>
          <div class="imgbox"
               @click="wxlogin()">
            <img src="../../assets/images/wxlogin.png"
                 class="loginimg" />
          </div>
          <div class="imgbox">
            <img src="../../assets/images/qqlogin.png"
                 class="loginimg" />
          </div>
        </div>

      </el-form-item>
    </el-form>
    <div id="login_container"></div>
  </div>
</template>


<script>
export default {
  name: "login",
  data () {
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

  created () { },
  mounted () {
    var _that = this;
    var code = _that.getQueryString('code');
    if (code !== '' && code !== null && code !== undefined) {
      // _that.$http
      //   .get('https://wx.upctech.com.cn/wx/worker/userinfo_by_code?code=' + code)
      //   .then(function (response) {
      //     alert("拿到用户信息");
      //   })
      //   .catch(function (error) {
      //     console.log(error)
      //   })
    }
  },
  methods: {
    //登录逻辑
    login () {
      if (this.form.username != "" && this.form.password != "") {
        this.isLoging = true;
        this.toLogin(this.form);
      }
    },
    register () {
      this.$router.push("/register");
    },
    //登录请求
    toLogin (params) {
      var _that = this;
      console.log(_that.$api);

      _that.$axios
        .post(_that.$api + "/api/user/login", params)
        .then(res => {

          let rol = res.data.user_role;
          let promise = new Promise(function (resolve, reject) {
            _that.$store.commit("set_token", res.data.token);
            _that.$store.commit("set_role", res.data.user_role);
            resolve();
          });

          promise.then(function () {
            _that.isLoging = false;
            _that.$router.push("/admin?admin");
          });

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
    },
    wxlogin () {
      alert("微信登陆了")
      var _that = this;
      let openid = window.localStorage.getItem("openid");  // 从内存取得openid
      if (!openid) {
        // 检测是否参数内有code，若有则跳接口获取openid，若没有则跳授权页
        // var urls = window.location.href.split('?').toString();
        var urls = "https://wx.upctech.com.cn/bk";
        //					获取code
        let link = 'https://open.weixin.qq.com/connect/qrconnect?appid=wx419b2ae85e0e33d8&redirect_uri=' + urls + '&response_type=code&scope=snsapi_login#wechat_redirect';
        console.log(link);
        window.location.href = link;

      }
    },
    getQueryString (name) {
      var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
      var r = window.location.search.substr(1).match(reg)
      if (r != null) return unescape(r[2])
      return null
    }
  }
};
</script>
<style scoped>
.loginimg {
  width: 35px;
}
.imgbox {
  width: 50%;
  float: left;
}
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

