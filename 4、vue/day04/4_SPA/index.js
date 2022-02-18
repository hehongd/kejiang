var index={
  template:`<main>
    <my-header></my-header>
    <h1 style="color:lightGreen">这里是首页</h1>
    <router-link to="/details/5">查看5号商品的详情</router-link><br/>
    <button @click="toDetails">查看10号商品的详情</button>
  </main>`,
  methods:{
    toDetails(){
      this.$router.push("/details/10");
    }
  }
}