<template>
  <div>
    <!-- 顶部导航开始 -->
    <div>
      <mt-header title="学前端,到学问">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
        <router-link to="/" slot="right">登录</router-link>
      </mt-header>
    </div>
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
      >
      </mt-field>
      <mt-field
        type="password"
        label="密码"
        placeholder="请输入密码"
        v-model="password"
        @blur.native.capture="checkPassword"
        :state="passwordState"
      >
      </mt-field>
      <mt-field
        type="password"
        label="确认密码"
        placeholder="请再次输入密码"
        v-model="conpassword"
        @blur.native.capture="checkConpassword"
        :state="conpasswordState"
      >
      </mt-field>
      <mt-button type="primary" size="large" @click="handle"
        >免费注册</mt-button
      >
    </div>
    <!-- 表单区域结束 -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      //用户名、密码及确认密码
      username: "",
      password: "",
      conpassword: "",
      //用户名、密码及确认密码的状态
      usernameState:"",
      passwordState:"",
      conpasswordState:""
    };
  },
  methods: {
    // 校验用户名
    checkUsername() {
      let usernameRegExp = /^[0-9A-Za-z]{6,12}$/;
      if (usernameRegExp.test(this.username)) {
        this.usernameState = "success";
        return true;
      } else {
        this.$toast({
          message: "用户名错误",
          position: "middle",
          duration: 2500,
        });
        this.usernameState = "error";
        return false;
      }
    },
    // 校验密码
    checkPassword() {
      let passwordRegExp = /^[0-9A-Za-z]{8,16}$/;
      if (passwordRegExp.test(this.password)) {
        this.passwordState = "success";
        return true;
      } else {
        this.$toast({
          message: "密码错误",
          position: "middle",
          duration: 2500,
        });
        this.passwordState = "error";
        return false;
      }
    },
    // 校验两次密码是否一致
    checkConpassword() {
      
      if (this.password == this.conpassword) {
        this.conpasswordState = "success";
        return true;
      } else {
        this.$toast({
          message: "两次密码不一致",
          position: "middle",
          duration: 2500,
        });
        this.conpasswordState = "error";
        return false;
      }
    },
    //用户注册
    handle() {
      //调用之前的检测用户名、密码及两次密码是否一致函数
      //需要注意的是:此时会引发短路求值的现象
      //A.在逻辑或运算时,第一个表达式的结果为true会造成短路
      //B.在逻辑与运算时,第一个表达式的结果为false会造成短路
      if(this.checkUsername() && this.checkPassword() && this.checkConpassword()){
        //此时需要将用户名、密码等信息的提交到WEB服务器
      }
    },
  },
};
</script>