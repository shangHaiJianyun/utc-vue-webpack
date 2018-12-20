import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    token:window.sessionStorage.getItem('token'),
    role:""
  },
  mutations: {
    set_token(state, token) {
      state.token = token
      sessionStorage.token = token
    },
    set_role(state,role){
      if(role == "[Admin]"){
        sessionStorage.role = 'Admin'
      }else if(role == "[Operate]"){
        sessionStorage.role = 'Dist'
      }else if(role == "[User]"){
        sessionStorage.role = 'User'
      }
    },
    del_token(state) {
      state.token = ''
      state.role = ''
      sessionStorage.removeItem('token')
      sessionStorage.removeItem('role')
    }
  }
})
