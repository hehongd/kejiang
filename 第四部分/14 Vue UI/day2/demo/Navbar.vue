<template>
  <div>
    <div>
      <div class="top">
        <mt-header title="学前端,到学问"></mt-header>
        <mt-navbar v-model="active">
          <mt-tab-item id="a">
            HTML5
            <img src="../assets/images/html5.png" alt="" slot="icon" />
          </mt-tab-item>
          <mt-tab-item id="b">
            CSS3
            <img src="../assets/images/css3.png" alt="" slot="icon" />
          </mt-tab-item>
          <mt-tab-item id="c">
            JavaScript
            <img src="../assets/images/js.png" alt="" slot="icon" />
          </mt-tab-item>
        </mt-navbar>
      </div>
      <div class="main">
        <!-- 面板开始 -->
        <mt-tab-container v-model="selected" swipeable>
          <mt-tab-container-item id="item01">
            <p v-for="(v, k) of 50" :key="k">{{ v }}</p>
          </mt-tab-container-item>
          <mt-tab-container-item id="item02">22</mt-tab-container-item>
          <mt-tab-container-item id="item03">33</mt-tab-container-item>
        </mt-tab-container>
        <!-- 面板结束 -->
      </div>
      <!--  底部选项卡开始 -->
      <mt-tabbar v-model="selectedTab" fixed>
        <mt-tab-item id="index">
          首页
          <img
            src="../assets/images/index_enable.png"
            alt=""
            slot="icon"
            v-if="selectedTab == 'index'"
          />
          <img
            src="../assets/images/index_disable.png"
            alt=""
            slot="icon"
            v-else
          />
        </mt-tab-item>
        <mt-tab-item id="me">
          我的
          <img
            src="../assets/images/me_enable.png"
            alt=""
            slot="icon"
            v-if="selectedTab == 'me'"
          />
          <img
            src="../assets/images/me_disable.png"
            alt=""
            slot="icon"
            v-else
          />
        </mt-tab-item>
      </mt-tabbar>
      <!--  底部选项卡结束 -->
    </div>
  </div>
</template>
<style scoped>
.top {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 666;
}
.main {
  margin-top: 115px;
  margin-bottom: 55px;
}
</style>
<script>
export default {
  data() {
    return {
      active: "a",
      selected: "item01",
      selectedTab: "index",
    };
  },
  watch: {
    selectedTab(value) {
      if (value == "index") {
        this.$router.push("/");
      } else if (value == "me") {
        this.$router.push("/button");
      }
    },
    // watch()时可以带有两个参数
    // 第一个参数代表新值
    // 第二个参数代表旧值
    active(value) {
      if (value == "a") {
        this.selected = "item01";
      } else if (value == "b") {
        this.selected = "item02";
      } else if (value == "c") {
        this.selected = "item03";
      }
    },
  },
};
</script>