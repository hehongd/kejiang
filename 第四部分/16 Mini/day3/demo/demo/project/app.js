//app.js
App({
  onLaunch: function () {
      console.log('app.onlaunch');
  },
  onShow(){
      console.log('app.onShow');
  },
  onHide(){
      console.log('app.onHide');
  },
  globalData: {
    userInfo: null
  }
})