var routes=[
  //默认首页
  {path:"/", component:index},
  //想让详情页可以带商品编号参数lid
  {path:"/details/:lid", component:details, props:true},
  //除以上路径之外，其余路径都导向404页面
  {path:"*", component:notFound}
];
var router=new VueRouter({ routes });