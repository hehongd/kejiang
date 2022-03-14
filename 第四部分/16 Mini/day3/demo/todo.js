// pages/todo/todo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //待办事项
    worker:'',
    //存储待办事项
    todoList:[]
  },

  //获取输入的待办事项
  inputWorker(e){
    this.setData({
      worker:e.detail.value
    });
  },

  //添加待办事项
  add(e){     
    //获取出输入的待办事项
    let worker = this.data.worker.trim();    
     if(worker){     
      //把输入的事项添加到todoList数组中
      let todoList = this.data.todoList;
      todoList.push(worker);
      this.setData({
        todoList:todoList,
        worker:''
      });
    } else {
      //短消息提示框
      wx.showToast({
        title: '内容不能为空',
        image:'/images/dee89573a5ea4b22.jpg',
        duration: 20000,
        mask:true
      });
    }

  },
  
  //删除待办事项

  remove(e){
    console.log(5);
    console.log(e.target.id);
    //怎么知道单击的是哪个按钮
    let index = e.target.dataset.index;
    //对应的todoList成员删除
    let todoList = this.data.todoList;
    todoList.splice(index,1);    
    this.setData({
      todoList:todoList
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})