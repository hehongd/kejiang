<template>
  <div>
    <!-- 顶部导航开始 -->
    <mt-header title="学前端，到学问">
        <div slot="right" class="shortcut">
            <router-link to="/register">免费注册</router-link>
            <router-link to="/login">登录</router-link>
        </div>
    </mt-header>
    <!-- 顶部导航结束 -->
    <!-- 顶部选项卡开始 -->
    <mt-navbar v-model="active">
        <mt-tab-item id="1">HTML5</mt-tab-item>
        <mt-tab-item id="2">CSS3</mt-tab-item>
        <mt-tab-item id="3">JavaScript</mt-tab-item>
        <mt-tab-item id="4">MySQL</mt-tab-item>
        <mt-tab-item id="5">jQuery</mt-tab-item>
    </mt-navbar>
    <!-- 顶部选项卡结束 -->
    <!-- 面板区域开始 -->
    <div class="panel">
      <mt-tab-container v-model="active">
          <mt-tab-container-item id="1">
             <!-- 单一文章信息开始 -->
             <div class="info-item">
               <!-- 标题区域开始 -->
               <div class="info-item-head">
                  <router-link to="/">十年之后，中国将剩下哪几家自主品牌车企？为什么？</router-link>
               </div>
               <!-- 标题区域结束 -->
               <!-- 内容区域开始 -->
               <div class="info-item-content">
                 <!-- 图像区域开始 -->
                 <div class="info-item-img">
                    <img src="../assets/images/articles/v2-c9acade792e89a7af148803dfbad0821_224x148.jpg" alt="">
                 </div>
                 <!-- 图像区域结束 -->
                 <!-- 内容简介区域开始 -->
                 <div class="info-item-des">
                    12345
                 </div>
                 <!-- 内容简介区域结束 -->
               </div>
               <!-- 内容区域结束 -->
             </div>
             <!-- 单一文章信息结束 -->
          </mt-tab-container-item>
          <mt-tab-container-item id="2">
              <p>CSS3文章1</p>            
              <p>CSS3文章1</p>            
              <p>CSS3文章1</p>            
              <p>CSS3文章1</p>            
          </mt-tab-container-item>
          <mt-tab-container-item id="3">
              <p>JavaScript文章1</p>                       
              <p>JavaScript文章1</p>                       
              <p>JavaScript文章1</p>                       
              <p>JavaScript文章1</p>                       
          </mt-tab-container-item>
          <mt-tab-container-item id="4">
              <p>MySQL文章</p>                       
              <p>MySQL文章</p>                       
              <p>MySQL文章</p>                       
              <p>MySQL文章</p>                       
          </mt-tab-container-item>
          <mt-tab-container-item id="5">
              <p>jQuery文章</p>                       
              <p>jQuery文章</p>                       
              <p>jQuery文章</p>                       
              <p>jQuery文章</p>                       
          </mt-tab-container-item>        
      </mt-tab-container>
    </div>
    <!-- 面板区域结束 -->
    <!-- 底部选项卡开始 -->
    <mt-tabbar v-model="selectedTab" fixed>
        <mt-tab-item id="home">
          <img src="../assets/images/home_enable.png" alt="" slot="icon" v-show="selectedTab == 'home'">
          <img src="../assets/images/home_disable.png" alt="" slot="icon" v-show="selectedTab != 'home'">
          首页
        </mt-tab-item>
        <mt-tab-item id="me">
          <img src="../assets/images/me_enable.png" alt="" slot="icon" v-show="selectedTab == 'me'">
          <img src="../assets/images/me_disable.png" alt="" slot="icon" v-show="selectedTab != 'me'">
          我的
        </mt-tab-item>
    </mt-tabbar>
    <!-- 底部选项卡结束 -->
  </div>
</template>
<style scoped>
.shortcut a{
  color:#fff;
  text-decoration: none;
  padding-right:5px;
}
.panel {
  margin-top:10px;
  margin-bottom:55px;
}
.info-item{
  margin:0 10px;
  border-bottom: .5px solid #d3d3d3;
}
.info-item-head a{
  font-weight: 600;
  font-size: 17px;
  color: #1a1a1a;
  line-height: 22px;
  text-decoration: none;
}
.info-item-content{
  display: flex;
  align-items: center;
  width: 100%;  
}
</style>
<script>
export default {
  data(){
      return {
        //默认被选定的顶部选项卡
        active:'1',
        //默认被选定的底部选项卡
        selectedTab:'home'
      }
  },
  method(){
    this.axios.get("/categories");
  }
}
</script>
