//希望仅DOM内容（HTML+JS）加载完就提前出发
//固定套路！
//DOMContentLoaded
//$(document).ready(function(){ //早
//||
$(function(){
  alert("仅DOM内容（HTML+JS）加载完")
  //自动给id为btn的按钮，绑定单击事件
  $("#btn").click(function(){
    alert("抢票！")
  })
});
//希望当整个页面加载完成后，才
window.onload=function(){ //晚
  alert("整个页面加载完成！")
}