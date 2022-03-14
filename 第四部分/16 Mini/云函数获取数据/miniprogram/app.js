//app.js
App({
  onLaunch: function () {
    wx.cloud.init({
      env:'hhd635418133',//云开发里是设置里环境id
      traceUser:true
    })
  },
  globalData: {
    userInfo: null,
    url:'https://api.douban.com',
    apikey:'0df993c66c0c636e29ecbb5344252a4a'
  }
})