<template>
  <div>

      <div style="background:#000;height:80px;"></div>
      <div 
        style="border:2px solid #f00;"
        infinite-scroll-distance="10"
        v-infinite-scroll="loadData"
        infinite-scroll-disabled="busy">
          <p v-for="(v,k) of i" :key="k">{{v}}</p>
      </div>
      <div style="background:#00f;height:120px;"></div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      i:30,
      busy:false
    }
  },
  methods:{
    loadData(){
      this.$indicator.open({
        text:"加载中...",
        spinnerType:"fading-circle"
      });
      this.busy = true;
      //模拟假设当前WEB服务器运行速度非常慢
      window.setTimeout(()=>{
        this.i += 30;
        this.busy = false;
        this.$indicator.close();
      },10000);
    }
  }
}
</script>