<template>
  <div class="register">
    <el-form label-position="left" label-width="0px" class="demo-ruleForm login-container">
      <h3 class="title">用户注册</h3>
      <el-form-item prop="account">
        <el-input type="text" v-model="form.username" auto-complete="off" placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item prop="checkPass">
        <el-input type="password" v-model="form.password" auto-complete="off" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-select v-model="form.user_role" placeholder="用户类型">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item style="width:100%;">
        <el-button type="primary" style="width:100%;" @click="register()">注册</el-button>
        <!--<el-button @click.native.prevent="handleReset2">重置</el-button>-->
      </el-form-item>
    </el-form>
  </div>
</template>


<script>
export default {
  data() {
    return {
      options: [
        {
          value: "User",
          label: "用户"
        },
        {
          value: "Operate",
          label: "操作员"
        },
        {
          value: "Admin",
          label: "管理员"
        }
      ],
      value: "",
      form: {
        username: "",
        password: "",
        user_role: ""
      }
    };
  },

  created() {},
  methods: {
    //登录逻辑
    register() {
      if (
        this.form.username != "" &&
        this.form.password != "" &&
        this.form.user_role != ""
      ) {
        this.$axios
          .post("http://dev.upctech.com.cn//api/user/add_user", this.form)
          .then(res => {
            console.log(res);
            if (res.data.new_user) {
              this.$message({
                message: "注册成功",
                type: "success"
              });
              this.$router.push("/login");
            } else {
              this.$message.error("用户已注册");
            }
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        alert("信息不全");
      }
    }
  }
};
</script>
<style scoped>
.register {
  background-image: url("../../assets/images/register.jpg");
  /*background-repeat: repeat-x;*/
  background-repeat: no-repeat;
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
  position: fixed;
  height: 100%;
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
</style>

