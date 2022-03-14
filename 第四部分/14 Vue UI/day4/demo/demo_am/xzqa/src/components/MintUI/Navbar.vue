<template>
  <div>
    <!-- 顶部选项卡开始 -->
    <mt-navbar v-model="active">
        <mt-tab-item id="a">生活</mt-tab-item>
        <mt-tab-item id="b">娱乐</mt-tab-item>
        <mt-tab-item id="c">汽车</mt-tab-item>
        <mt-tab-item id="d">游戏</mt-tab-item>
    </mt-navbar>
    <!-- 顶部选项卡结束 -->
    <!-- 面板开始 -->
    <mt-tab-container v-model="active" :swipeable="true">
        <mt-tab-container-item id="a">
            文章列表1<br>
            文章列表1<br>
            文章列表1<br>
            文章列表1<br>
        </mt-tab-container-item>
        <mt-tab-container-item id="b">
            文章列表2<br>
            文章列表2<br>
            文章列表2<br>
            文章列表2<br>
            文章列表2<br>
        </mt-tab-container-item>
        <mt-tab-container-item id="c">
            文章列表3<br>
            文章列表3<br>
            文章列表3<br>
            文章列表3<br>
            文章列表3<br>
        </mt-tab-container-item>
        <mt-tab-container-item id="d">
            文章列表4<br>
            文章列表4<br>
            文章列表4<br>
            文章列表4<br>
        </mt-tab-container-item>
    </mt-tab-container>
    <!-- 面板结束 -->
  </div>
</template>
<script>
export default {
  data(){
    return {
      active:'c'
    }
  }
}
</script>