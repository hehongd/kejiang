<template>
  <div>
    <!-- 顶部导航开始 -->
    <mt-header title="用户注册">
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
      <mt-field
        type="password"
        label="确认密码"
        placeholder="请再次输入密码"
        v-model="conpassword"
        @blur.native.capture="checkConpassword"
        :state="conpasswordState"
      ></mt-field>
      <mt-button type="primary" size="large" @click="register">快速注册</mt-button>
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
      //确认密码初始值
      conpassword: "",
      //用户名状态的初始值
      usernameState: "",
      //密码状态的初始值
      passwordState: "",
      //确认密码状态的初始值
      conpasswordState: ""
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
    //检测确认密码
    checkConpassword() {
      if (this.password != this.conpassword) {
        this.conpasswordState = "error";
        return false;
      } else {
        this.conpasswordState = "success";
        return true;
      }
      //可简化成
      //this.conpasswordState = this.password != this.conpassword ? 'error' : 'success';
      //return this.password != this.conpassword;
    },
    //用户单击注册按钮时,进行验证
    register() {
      if (this.checkUsername() && this.checkPassword() && this.checkConpassword()) {
        console.log("要发送AJAX请求到服务器了");
        //this.$router.push('/');
      } else {
        console.log("你肯定有不对的地方,现在我什么也不干");
      }
    }
  }
};
</script>