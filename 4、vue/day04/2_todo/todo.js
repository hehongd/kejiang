Vue.component(`todo`,{
  template:`<div>
    <h1>待办事项列表</h1>
    <todo-add></todo-add>
    <todo-list></todo-list>
  </div>`,
  //规定todoAdd和todoList两个组件只能在当前todo组件内才能使用，出了todo组件外使用会报错
  components:{ todoAdd, todoList }
  //自动翻译  <todo-add> <todo-list> 
})