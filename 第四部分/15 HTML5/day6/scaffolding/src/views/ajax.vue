<template>
    <div>
        <button @click="handle">请求服务器数据</button>
        <h1>{{this.$store.state.username}}</h1>
    </div>
</template>
<script>
export default {
    methods:{
        handle(){
            this.$store.dispatch('get_server_date_action')
        }
    }
}
</script>
    