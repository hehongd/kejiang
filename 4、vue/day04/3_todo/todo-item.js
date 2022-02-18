var todoItem={
  //从父组件todoList给的两个自定义属性中取出父组件给的变量值
  props:["task","i"],
  //props中的变量和data中自己的变量用法一样，也可用于绑定和指令等。只不过props来源于外部，而data是内部定义的而已。
  template:`<li>
    {{i+1}}. {{task}} <a href="javascript:;">×</a>
  </li>`
}