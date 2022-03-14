import Vue from 'vue'
import Vuex from 'vuex'

//Vuex是Vue的一个插件
Vue.use(Vuex)

export default new Vuex.Store({ // 仓库
  //存储应用程序中共享的数据 -- 商品
  state: {
    username: 'Tom',
    age: 25,
    sex: true,
    friends: [
      {
        username: 'Rose',
        age: 21,
        address: '河北省'
      },
      {
        username: 'Frank',
        age: 20,
        address: '山东省'
      },
      {
        username: 'David',
        age: 19,
        address: '河南省'
      }
    ]
  },
  //用于操纵state中的数据 -- 只能进行同步操作(理货员) 
  mutations: {
      //用于增加年龄,state参数代表是当前store中的全部数据,也就是store中的state成员
      //state参数会自动注入到当前方法中
      age_increment_mutation:(state)=>{                  
          state.age ++;
      },
      //用于减少年龄,state参数代表是当前store中的全部数据,也就是store中的state成员
      age_decrement_mutation:(state)=>{
          state.age --;
      } ,
      //用于完成按指定参数实现年龄的增加操作
      //payload,意为载荷
      age_add_mutation:(state,payload)=>{
          state.age += payload;
      },
      //用于完成修改state中username的操作
      username_change_mutation:(state,payload)=>{
          state.username = payload;
      }

  },
  actions: {
      //向WEB服务器发送异步AJAX请求
      //context译为上下文,代表当前store中的mutations
      get_server_data_action:(context)=>{
          //该数据是服务器返回的结果
          let username = 'Frank';
          //要通知Mutations中的方法来改变state中的数据
          context.commit('username_change_mutation',username);
      }
  },
  modules: {
  }
})
