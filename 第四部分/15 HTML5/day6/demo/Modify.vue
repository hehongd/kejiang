<template>
  <div>    

      <button @click="increment">增加年龄</button>
      <button @click="decrement">减少年龄</button>
      <button @click="add">带有参数的增加年龄(每次加5岁)</button>
      <h1>年龄是:{{this.$store.state.age}}</h1>
  </div>
</template>
<script>
export default {
  methods: {
    //增加年龄
    increment(){
        //调用了仓库中名称为age_increment_mutation的理货员
        this.$store.commit('age_increment_mutation');
    },
    //减少年龄
    decrement(){
       //调用了仓库中名称为age_decrement_mutation的理货员
        this.$store.commit('age_decrement_mutation');
    },
    //调用按指定参数增加年龄的理货员
    add(){
      this.$store.commit('age_add_mutation',5);
    }
  },
}
</script>