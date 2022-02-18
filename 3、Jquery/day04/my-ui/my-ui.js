jQuery.prototype.myAccordion=function(){
  console.log(`调用了自定义的myAccordion()函数`)
  //1. 为要应用插件的当前元素及其子元素自动添加class
  //问题: 如何获得当前要应用插件的元素? 
  //解决：this->将来要应用插件的.前的元素
  //因为this->$("#my-accordion")，已经是jQuery子对象，所以不用$(this);
  var $parent=this;//$parent->id为my-accordion的父元素div
  //为父元素div本身添加class accordion
  $parent.addClass("accordion")
  //为父元素下所有偶数位置的元素加title class
        .children(":even").addClass("title")
  //return 所有偶数位置的元素
  //为每个偶数位置的元素的下一个兄弟元素加content和fade class
        .next().addClass("content fade")
  //return 所有奇数位置的元素
  //为所有奇数位置的元素中第一个元素加class in
        .first().addClass("in");
  //2. 自动绑定事件
  $(".accordion").on("click",".title",e=>
    $(e.target).next(".content").toggleClass("in")
      .siblings(".content").removeClass("in")
  );
}
//将来: 比如: id为my-accordion的div想应用手风琴插件
//按jquery ui做法: 
//$("#my-accordion").myAccordion()
//找到插件父元素      调用自定义插件函数