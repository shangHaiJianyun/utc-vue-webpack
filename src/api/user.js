
import http from './http'
const user = {
  /**
   * 登录
   */
  login: (params) => {
    console.log("6666666",params)
    http.post('http://127.0.0.1:5000/passport/login', params, data => {

      console.log("6666666",data)
      if (data == null) {
        return;
      }
      if (data.status == true) {
        console.log("login..", this.isLoging);
        console.log("store", this.$store.state.isLoggedIn);
        let expireDays = 1000 * 60 * 60 * 24 * 15;
        this.setCookie("session", "blablablablabla...", expireDays);
        //   this.$store.state.isLoggedIn = true;
        this.$store.commit("set_token", "Authentication-Token");
        this.$router.push("/admin-home");

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


        // localStorage.setItem('token', data.data.token)
        // Toast({
        //   mes: data.msg,
        //   timeout: 2000,
        //   icon: 'success',
        //   callback: () => {
        //     router.push({path: '/'});
        //   }
        // });
      } else {
        // Toast({
        //   mes: data.msg,
        //   timeout: 2000,
        //   icon: 'error'
        // });
      }
    });
  },
  /**
   * 注册
   */
  register: (params) => {
    axios.post('/register', params).then(res => {
      let data = res.data;
      if (data.status == true) {
        // Toast({
        //   mes: data.msg,
        //   timeout: 2000,
        //   icon: 'success',
        //   callback: () => {
        //     this.$router.push({path: 'login'});
        //   }
        // });
      } else {
        // Toast({
        //   mes: data.msg,
        //   timeout: 3000,
        //   icon: 'error'
        // });
      }

      console.log(res);
    }).catch(err => {
      console.log(err);
    });
  }
}
export default user;
