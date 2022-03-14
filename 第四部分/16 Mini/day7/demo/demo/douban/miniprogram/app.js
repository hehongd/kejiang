//app.js
App({
  onLaunch: function () {
    wx.cloud.init({
      env:'web-mx-wuhua-gn0n3',
      traceUser:true
    })
  },
  globalData: {
    userInfo: null,
    url:'https://api.douban.com',
    apikey:'0df993c66c0c636e29ecbb5344252a4a'
  }
})