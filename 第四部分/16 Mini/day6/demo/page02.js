// pages/page02/page02.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  f1(){
    wx.chooseImage({
        count:1,
        sourceType:["album"],
        success:(res)=>{
          //获取上传文件临时路径及名称
          let oldName = res.tempFilePaths[0];
          //获取文件的扩展名
          let extension = oldName.substr(oldName.lastIndexOf('.')+1).toLowerCase();          
          //生成新的主文件名
          let mainName = "" + Date.now() + Math.ceil(Math.random() * 999999);
          //通过主文件名和扩展名来生成一个全新的文件名
          let filename = mainName + '.' + extension;        
          wx.cloud.uploadFile({
            filePath:res.tempFilePaths[0],
            cloudPath:"web2003/" + filename
          });
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