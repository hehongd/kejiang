<template>
  <div>
    <!-- 顶部导航开始 -->
    <mt-header title="用户登录">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <!-- 顶部导航结束 -->
    <!-- 表单区域开始 -->
    <div>
      <mt-field
        type="text"
        label="用户名"
        placeholder="请输入用户名"
        v-model="username"
        @blur.native.capture="checkUsername"
        :state="usernameState"
      ></mt-field>
      <mt-field
        type="password"
        label="密码"
        placeholder="请输入密码"
        v-model="password"
        @blur.native.capture="checkPassword"
        :state="passwordState"
      ></mt-field>
      <mt-button type="primary" size="large" @click="login">快速登录</mt-button>
    </div>
    <!-- 表单区域结束 -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      //用户名的初始值
      username: "",
      //密码初始值
      password: "",
      //用户名状态的初始值
      usernameState: "",
      //密码状态的初始值
      passwordState: ""
    };
  },
  methods: {
    //检测用户名
    checkUsername() {
      let usernameExp = /^[a-zA-Z0-9_]{6,12}$/;
      if (usernameExp.test(this.username)) {
        this.usernameState = "success";
        return true;
      } else {
        this.usernameState = "error";
        return false;
      }
    },
    //检测密码
    checkPassword() {
      let passwordExp = /^[a-zA-Z0-9_]{8,20}$/;
      if (passwordExp.test(this.password)) {
        this.passwordState = "success";
        return true;
      } else {
        this.passwordState = "error";
        return false;
      }
    },
    //用户单击登录按钮时,进行验证
    login() {
      if (this.checkUsername() && this.checkPassword()) {
        console.log("要发送AJAX请求到服务器了");
      } else {
        console.log("你肯定有不对的地方,现在我什么也不干");
      }
    }
  }
};
</script>