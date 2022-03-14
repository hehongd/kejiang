<template>
  <div>
    <!-- 顶部导航开始 -->
    <mt-header title="学前端,到学问">
      <div slot="right" class="shortcut">
        <router-link to="/register">注册</router-link>
        <router-link to="/login">登录</router-link>
      </div>
    </mt-header>
    <!-- 顶部导航结束 -->
    <h1>{{ articles.length }}</h1>
    <!-- 顶部选项卡开始 -->
    <mt-navbar v-model="active">
      <mt-tab-item
        :id="item.id.toString()"
        v-for="(item, index) of category"
        :key="index"
      >
        {{ item.category_name }}
      </mt-tab-item>
    </mt-navbar>
    <!-- 顶部选项卡结束 -->
    <!-- 面板区域开始 -->
    <div
      class="main"
      infinite-scroll-distance="20"
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="busy"
      infinite-scroll-immediate-check="true"
    >
      <mt-tab-container>
        <mt-tab-container-item>
          <!-- 单一文章信息开始 -->
          <div
            class="articleItem"
            v-for="(article, index) of articles"
            :key="index"
          >
            <router-link :to="`/article/${article.id}`">
              <!-- 文章标题开始 -->
              <div class="articleItem-header">
                {{ article.subject }}{{ index + 1 }}
              </div>
              <!-- 文章标题结束 -->
              <!-- 文章图文信息开始 -->
              <div class="articleItem-wrapper">
                <!-- 文章图像开始  -->
                <div class="articleImg" v-if="article.image != null">
                  <img v-lazy="article.image" />
                </div>
                <!-- 文章图像结束 -->
                <!-- 文章简介开始 -->
                <div class="articleDes">
                  {{ article.description }}
                </div>
                <!-- 文章简介结束 -->
              </div>
              <!-- 文章图文信息结束 -->
            </router-link>
          </div>
          <!-- 单一文章信息结束 -->
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
    <!-- 面板区域结束 -->
    <!-- 底部选项卡开始 -->
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
        <img src="../assets/images/me_disable.png" alt="" slot="icon" v-else />
      </mt-tab-item>
    </mt-tabbar>
    <!-- 底部选项卡结束 -->
  </div>
</template>
<style scoped>
.shortcut a {
  display: inline-block;
  margin-left: 5px;
  color: #fff;
}
.main {
  margin-bottom: 55px;
}
.articleItem {
  padding: 10px 0;
  margin: 0 10px;
  border-bottom: 1px solid #999;
}
.articleItem-header {
  font-weight: 600;
  font-size: 17px;
  color: #1a1a1a;
  line-height: 22px;
}
.articleItem-wrapper {
  display: flex;
  align-items: center;
  padding-top: 10px;
  width: 100%;
}
.articleImg {
  margin-right: 15px;
}
.articleImg img {
  width: 112px;
  height: 74px;
  border-radius: 5px;
}
.articleDes {
  height: 65px;
  font-size: 15px;
  overflow: hidden;
  font-weight: 400;
  text-overflow: ellipsis;
  line-height: 21px;
  letter-spacing: normal;
  color: #444;
}
</style>
<script>
export default {
  data() {
    return {
      // 默认被选定的顶部选项卡及面板的ID
      active: "1",
      // 默认被选定的底部选项卡ID
      selectedTab: "index",
      // 存储所有的文章分类数据
      category: [],
      // 存储指定分类下包含的文章数据
      articles: [],
      // 标识当前的状态
      busy: false,
      //初始化的页码
      page: 1,
      //存储总页数
      pagecount:0
    };
  },
  methods: {
    // 加载数据的方法
    loadData(id, page) {
      // 修改状态
      this.busy = true;
      // 显示加载提示框
      this.$indicator.open({
          text:"加载中...",
          spinnerType:"double-bounce"
      });
      this.axios
        .get("/articles", {
          params: {
            id: id,
            page: page,
          },
        })
        .then((res) => {
          // 获取总页数
          this.pagecount = res.data.pagecount;
          // 获取文章数据
          let articles = res.data.results;
          articles.forEach(article=>{
              if(article.image != null){
                article.image = require('../assets/images/articles/' + article.image);
              }
              this.articles.push(article);
          });
          // 修改状态
          this.busy = false;
          // 关闭加载提示框
          this.$indicator.close();
        });
    },
    // 向下滚动时调用的方法
    loadMore() {
      // 页码累加
      this.page++;
      // 调用loadData()方法
      if(this.page <= this.pagecount){
        this.loadData(this.active,this.page);
      }
    },
  },
  watch: {
    active(value) {
      // 清空之前的数据
      this.articles = [];
      // 将页码重置1
      this.page = 1;
      // 此时的value代表的切换后的顶部选项卡的ID
      // 既然id(分类ID)已经知道了,那么此时就需要发送请求以获取服务器的相关数据
      // 调用loadData()方法
      this.loadData(value,this.page);
     
    },
  },
  mounted() {
    // 发送HTTP请求以获取服务器所有分类的数据
    this.axios.get("/category").then((res) => {
      // 获取服务器返回的结果
      let results = res.data.results;
      // 将服务器返回结果存储到category变量中
      this.category = results;
    });
    /////////////////////////////////////////////////
    // 发送HTTP请求以获取服务器中默认分类下包含的文章数据
    // 调用loadData()方法
    this.loadData(this.active,1);
  },
};
</script>