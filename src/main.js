// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import Vueresource from 'vue-resource'
import App from './App'
import router from './router'
import VueAxios from 'vue-axios'
import VueAuthenticate from 'vue-authenticate'
import axios from 'axios'
import BootstrapVue from 'bootstrap-vue'
import ElementUI from 'element-ui';


import 'element-ui/lib/theme-chalk/index.css';
import {
  store
} from './store/store'

import '@progress/kendo-ui'
import '@progress/kendo-theme-default/dist/all.css'
import {
  GridInstaller,
  Grid
} from '@progress/kendo-grid-vue-wrapper'
import {
  DataSourceInstaller
} from '@progress/kendo-datasource-vue-wrapper'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'




// import { Grid, GridInstaller } from '@progress/kendo-grid-vue-wrapper'
Vue.use(GridInstaller)
Vue.use(DataSourceInstaller)
// Vue.use(Vueresource)

Vue.use(ElementUI);
Vue.use(BootstrapVue);
Vue.use(VueAxios, axios)
Vue.use(VueAuthenticate, {
  // baseUrl: 'http://localhost:3000', // Your API domain

  // providers: {
  //     github: {
  //         clientId: '',
  //         redirectUri: 'http://localhost:8080/auth/callback' // Your client app URL
  //     }
  // }
})
Vue.prototype.$axios = axios
axios.defaults.baseURL = '/api'
// axios.defaults.headers.common['Authorization'] = 'Bearer '+ store.state.token
// console.log("000",axios.defaults.headers.common['Authorization'])
Vue.config.productionTip = false

Vue.prototype.setCookie = (c_name, value, expiredays) => {
  var exdate = new Date();
  exdate.setDate(exdate.getDate() + expiredays);
  document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
}

//获取cookie、
function getCookie(name) {
  var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  if (arr = document.cookie.match(reg))
    return (arr[2]);
  else
    return null;
}
Vue.prototype.getCookie = getCookie;

//删除cookie
Vue.prototype.delCookie = (name) => {
  console.log("000000")
  var exp = new Date();
  exp.setTime(exp.getTime() - 1);
  var cval = getCookie(name);
  if (cval != null)
    document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
  components: {
    App,
    Grid,
    DataSourceInstaller
  },
  template: '<App/>',
  watch: {
    "$route": 'checkLogin'
  },
  created() {
    this.checkLogin();
  },
  methods: {
    checkLogin() {

      //检查是否存在session
      // if (!this.getCookie('session')) {
      //   this.$router.push('/login');
      //   console.log('session not exists');
      //
      // } else {
      //   // this.$router.push('/routerdists');
      //   console.log('session exists', this.getCookie('session'));
      //
      // }
    }
  }
  //   methods: {
  //     login: function () {
  //       this.$auth.login({
  //         email,
  //         password
  //       }).then(function () {
  //         // Execute application logic after successful login
  //       })
  //     },

  //     register: function () {
  //       this.$auth.register({
  //         name,
  //         email,
  //         password
  //       }).then(function () {
  //         // Execute application logic after successful registration
  //       })
  //     },
  //     myMethod: function () {
  //       console.log('my method ...');
  //     }
  //   }
})
kendo.culture("zh-CN"); //中文显示
