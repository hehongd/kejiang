// pages/page03/page03.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  add(){
      //连接到云 数据库
      let db = wx.cloud.database();     
      db.collection("comments").add({
        data:{
        username:'张三',
        age:17,
        sex:true,
        friends:['李四','赵六'],
        otherInfo:{
            education:'研究生',
            isMarried :true
        }
      },
      success:res=>{
        console.log(res);
      }
    });

  },

  getAll(){
      let db = wx.cloud.database();
      db.collection('comments').get({
        success:res=>{
          console.log(res);
        }

      })
  },

  getSpeicalField(){
      let db = wx.cloud.database();
      console.log(db.command);
      db.collection('comments').field({
        username:true,
        sex:true,
        otherInfo:{
          education:true
        }
      }).get({
        success:res=>{
            console.log(res);
        }
      });
  },

  getByCondition1(){
    let db = wx.cloud.database();
    db.collection('comments').field({
       username:true,
       age:true
    }).where({
      age:db.command.gte(35)
    }).get({
      success:res=>{
        console.log(res);
      }
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