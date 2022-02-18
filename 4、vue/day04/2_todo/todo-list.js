var todoList={
  template:`<ul>
    <todo-item></todo-item>
    <todo-item></todo-item>
    <todo-item></todo-item>
  </ul>`,
  //规定todoItem组件只能在当前todoList组件内才能使用，出了todoList组件外使用会报错
  components:{ todoItem }
  //自动翻译  <todo-item>
}