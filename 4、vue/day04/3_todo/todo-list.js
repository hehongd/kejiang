var todoList={
  //从父组件给的自定义属性tasks中取出父组件给的tasks变量值
  props:[ "tasks" ],
  //props中的变量用法和自己data中变量用法完全一样，都可用于绑定、指令等。
  template:`<ul>
    <!--根据父组件中tasks数组中的元素个数，反复生成多个<todo-item>子组件-->
    <todo-item v-for="(task,i) of tasks" :key="i" :task="task"  :i="i"></todo-item>
  </ul>`,
  //规定todoItem组件只能在当前todoList组件内才能使用，出了todoList组件外使用会报错
  components:{ todoItem }
  //自动翻译  <todo-item>
}