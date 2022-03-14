<template>
    <div>
        <h1>访问数据--页面1</h1>
        <p>姓名：{{username}}</p>
        <p>年龄：{{age}}</p>
        <p>性别：{{sex? '男':'女'}}</p>
        <h1>他/她有一下好朋友</h1>
        <p v-for="(friend,index) of friends" :key="index">
            姓名：{{friend.username}}年龄：{{friend.age}}地址:{{friend.address}}
        </p>
    </div>
</template>


<script> 
import {mapState} from 'vuex'; 
export default { 
  //计算属性 
  computed: { 
    ...mapState(['username','age','sex','friends']) 
  }, 
} 
</script> 

