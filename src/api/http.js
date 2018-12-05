import axios from 'axios'
const http = {
  /**
   * get请求
   */
  get: (url, params, fun) => {
    axios.get(url, {params: params}).then(res => {
      fun(res.data);
    }).catch(err => {
      fun(null);
      // Toast({
      //   mes: '网络请求错误！',
      //   timeout: 2000,
      //   icon: 'error'
      // });
      console.log(err)
    })
  },
  /**
   * post请求
   */
  post: (url, params, fun) => {
    axios.post(url, params).then(res => {
      fun(res.data);
    }).catch(err => {
      // fun(null);
      // Toast({
      //   mes: '网络请求错误！',
      //   timeout: 2000,
      //   icon: 'error'
      // });
      console.log(err);
    });
  }
}

export default http
