const db = wx.cloud.database();
const _ = db.command;
// pages/page01/page01.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  getCloudComments(){
    wx.cloud.callFunction({
      name:'getAllComments',
      success:res=>{
        console.log(res);
      }
    })
  },
  getCloudResult(){
      wx.cloud.callFunction({
        name:'test',
        data:{
          a1:5,
          a2:9
        },
        success:res=>{
          console.log(res);
        }
      })
  },

  removeById(){
    // db.collection('comments').where({
    //   '_id':_.eq('3d23c0a05f1aa388007a6ef93a377729')
    // }).remove();
    db.collection('comments').doc('9bf625a55f1a9bbc005eeae019c6664b').remove();
  },

  changeAge(){

      db.collection('comments').where({
        age:db.command.neq(0)
      }).update({
        data:{
          age:db.command.inc(5)
        }
      });

  },

  getAvgAge(){
    const $ = db.command.aggregate;
    db.collection('comments')
      .aggregate()
      .group({       
        '_id' : null,
        //聚合操作符对象
        aaa: $.avg('$age')
      }).end({
        success:res=>{
          console.log(res);
        }
      });
  },

  getByAgeAndSex(){
      //类似于 SELECT * FROM comments WHERE age > 30 AND sex = true
      // db.collection('comments').where(_.and([
      //   {
      //     age:_.gt(30)
      //   },
      //   {
      //     sex:_.eq(true)
      //   }
      // ])).get({
      //   success:res=>{
      //     console.log(res);
      //   }
      // })

      // db.collection('comments').where({
      //   age:_.neq(35)
      // }).get({
      //   success:res=>{
      //     console.log(res);
      //   }
      // });
      //在MySQL不存在与之相吻合的语句
      db.collection('comments').where({
          '_openid':db.command.exists(false)
      }).get({
        success:res=>{
          console.log(res);
        }
      })
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