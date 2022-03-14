<template>
  <div>
    <mt-field
      type="text"
      label="用户名"
      placeholder="请输入用户名"
      state="error"
      v-model="username"
      :attr="{maxlength:'12'}"
      disableClear
    ></mt-field>

    <mt-field
      type="password"
      label="密码"
      placeholder="请输入密码"
      state="success"
      v-model="password"
      :attr="{maxlength:'20',autocomplete:'off'}"
    ></mt-field>

    <mt-field
      type="password"
      label="确认密码"
      placeholder="请再次输入密码"
      state="warning"
      v-model="conpassword"
    ></mt-field>
    <mt-button type="primary" size="large" @click="register">免费注册</mt-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      //用户名的初始值
      username: "",
      //密码的初始值
      password: "",
      //确认密码的初始值
      conpassword: ""
    };
  },
  methods: {
    register() {
      //用户名规则的正则表达式
      let usernameReg = /^[a-zA-Z0-9_]{6,12}$/;

      //密码规则的正则表达式
      let passwordReg = /^[a-zA-Z0-9_]{8,20}$/;

      //通过正则表达式对象的test()方法来验证用户名的合法性
      if (usernameReg.test(this.username)) {
        console.log("用户名合法");
      } else {
        console.log("请输入合法的用户名");
        return false;
      }
      //通过正则表达式对象的test()方法来验证密码的合法性
      if (passwordReg.test(this.password)) {
        console.log("密码合法");
      } else {
        console.log("请输入合法的密码");
        return false;
      }

      //检测两次密码是否一致
      if (this.password != this.conpassword) {
        console.log('两次密码不一致');
        return false;
      } else {
        console.log('确认密码合法');
      }
    }
  }
};
</script>