<template>
  <div>
      <button @click="handle">获取服务器数据</button>
      <h1>{{this.$store.state.username}}</h1>
  </div>
</template>
<script>
export default {
  methods: {
    handle(){
      //分发Action(调用Vuex中的Action内的方法)
      this.$store.dispatch('get_server_data_action');
    }
  },
}
</script>