Vue.component(`todo`,{
  template:`<div>
    <h1>待办事项列表</h1>
    <todo-add :tasks="tasks"></todo-add>
    <todo-list :tasks="tasks"></todo-list>
  </div>`,
  //因为三个子组件都需要访问一个任务数组
  //所以在父组件中统一保存一个任务数组供所有子组件共同使用！
  data(){
    return {
      tasks:["吃饭","睡觉","打亮亮"]
    }
  },
  //规定todoAdd和todoList两个组件只能在当前todo组件内才能使用，出了todo组件外使用会报错
  components:{ todoAdd, todoList }
  //自动翻译  <todo-add> <todo-list> 
})