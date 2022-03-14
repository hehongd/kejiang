<template>
        <div>
            {{rus}}
            <button @click="increment">年龄增加</button>
            <button @click="decrement">年龄减少</button>
            <button @click="add">年龄增加/减少5</button>
            <h1>年龄是：{{$store.state.age}}</h1>
        </div>
</template>
<script>
export default {
    data(){
        return{
            rus:Math.random()
        }
    },
    methods:{
        increment(){b 
          //调入仓库中的理货员
            this.$store.commit('age_increment_mutation')
        },
        decrement(){
            this.$store.commit('age_decrement_mutation')
        },
        add(){
            this.$store.commit('age_add_mutation',5)
        }
    },
}
</script>