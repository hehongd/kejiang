var details={
  //接住地址栏中的lid变量的值（比如设置props为true才能这样用）
  props:["lid"],
  template:`<main>
    <my-header></my-header>
    <h1 style="color:orange">这里是{{lid}}号商品的详情</h1>
  </main>`
}