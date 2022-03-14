import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //标识用户是否登录
    //isLogined:sessionStorage.getItem('isLogined') ? sessionStorage.getItem('isLogined')  : false
    //或者
    isLogined:localStorage.getItem('isLogined') ? localStorage.getItem('isLogined') : false
  },
  mutations: {
    logined_mutations:(state)=>{
        //将用户登录状态改为真
        state.isLogined = true;
    },
    logout_mutations:(state)=>{
        //将用户登录状态改为假
        state.isLogined = false;
        //清理掉webStroage
        localStorage.clear();
    }
  },
  actions: {
  },
  modules: {
  }
})
