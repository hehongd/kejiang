<template>
  <div id="app">
    <div id="nav">
      <h1>{{rnd}}</h1>
      <router-link to="/">Home</router-link> |
      <router-link to="/access1">访问数据页面1</router-link> |
      <router-link to="/access2">访问数据页面2</router-link> |
      <router-link to="/modify">修改数据</router-link> |      
      <router-link to="/ajax">异步请求</router-link> | 
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  data(){
    return {
       //为证明在单击链接时，页面没有刷新
       rnd:Math.random()
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
