<template>
  <div>
    <div class="container">
        <p v-for="(v,k) in 50" :key="k">{{v}}</p>
    </div>
    <mt-tabbar v-model="selectedTab" fixed>
        <mt-tab-item id="home">
          <img src="../../assets/images/home_enable.png" alt="" slot="icon" v-show="selectedTab == 'home'">
          <img src="../../assets/images/home_disable.png" alt="" slot="icon" v-show="selectedTab != 'home'">
          首页
        </mt-tab-item>
        <mt-tab-item id="cart">
            购物车
            <img src="../../assets/images/cart_enable.png" alt="" slot="icon" v-show="selectedTab == 'cart'">
            <img src="../../assets/images/cart_disable.png" alt="" slot="icon" v-show="selectedTab != 'cart'">
        </mt-tab-item>
        <mt-tab-item id="me">
            我的
            <img src="../../assets/images/me_enable.png" alt="" slot="icon" v-show="selectedTab == 'me'">
            <img src="../../assets/images/me_disable.png" alt="" slot="icon" v-show="selectedTab != 'me'">
        </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<style scoped>
.container{
  margin-bottom:55px;
}
</style>
<script>
export default {
  data(){
    return {
      selectedTab:'cart'
    }
  }
}
</script>