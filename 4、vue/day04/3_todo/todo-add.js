var todoAdd={
  props:["tasks"],
  template:`<div>
    <input v-model="task"><button @click="add">+</button>
  </div>`,
  data(){
    return {
      task:""
    }
  },
  methods:{
    add(){
      this.tasks.push(this.task);
      //在添加成功后，清空task变量值，也就自动清空了文本框中残留
      this.task="";
    }
  }
}