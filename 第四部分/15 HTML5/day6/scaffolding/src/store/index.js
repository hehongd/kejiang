import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username:'Tome',
    age:21,
    sex:true,
    friends:[
      {
        username:'Los',
        age:18,
        address:'湖南'
      },
      {
        username:'Mos',
        age:25,
        address:'北京'
      },
      {
        username:'Mol',
        age:19,
        address:'上海'
      }
    ]
  },
  mutations: {
    //增加年龄
    age_increment_mutation:(state)=>{
        state.age++;
    },
    //减少年龄

    age_decrement_mutation:(state)=>{
      state.age--;
    },
      age_add_mutation:(state,payload)=>{
        state.age+=payload;
      },
      username_change_mutation:(state,payload)=>{
        state.username=payload;
      }
  },
  actions: {
    get_server_date_action:(context)=>{
      let username="Frank";
      context.commit('username_change_mutation',username);

    }
  },
  modules: {
  }
})
