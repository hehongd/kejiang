<template>
    <div>
        <h1>访问数据--页面2</h1>
        <p>姓名：{{$store.state.username}}</p>
        <p>年龄：{{$store.state.age}}</p>
        <p>性别：{{$store.state.sex? '男':'女'}}</p>
        <h1>他/她有一下好朋友</h1>
        <p v-for="(friend,index) of this.$store.state.friends" :key="index">
            姓名：{{friend.username}}年龄：{{friend.age}}地址:{{friend.address}}
        </p>
    </div>
</template>
    
