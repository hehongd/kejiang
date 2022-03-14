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
      >
      </mt-field>
      <mt-field
        type="password"
        label="密码"
        placeholder="请输入密码"
        v-model="password"
      >
      </mt-field>
      <mt-field
        type="password"
        label="确认密码"
        placeholder="请再次输入密码"
        v-model="conpassword"
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
  data(){
    return {
        //用户名、密码及确认密码
        username:'',
        password:'',
        conpassword:''
    }
  },
  methods:{
    //用户注册
    handle(){        
        // 校验用户名
        let usernameRegExp = /^[0-9A-Za-z]{6,12}$/;
        if(usernameRegExp.test(this.username)){
          console.log('用户名正确');
        } else {
          this.$toast("用户名错误");
          //console.log('用户名错误');
        }
    }
  }
}
</script>