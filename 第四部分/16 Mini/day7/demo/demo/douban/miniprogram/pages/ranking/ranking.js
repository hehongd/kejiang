// pages/ranking/ranking.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //存储TOP250的影片信息
    movies: [],

    //存储当前的页码
    page: 1,

    //每次返回的记录数量
    pagesize: 10,
    //用来存储记录数(豆瓣电影返回的)
    total: 0,
    //用来标识是否还有更多的记录
    hasMore:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

   

    wx.showLoading({
      title: '努力加载中...',
      mask: true
    })

    wx.request({
      url: getApp().globalData.url + '/v2/movie/top250?apikey=' + getApp().globalData.apikey + '&start=0&count=10',
      method: 'get',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: res => {
        //console.log(res.data);
        this.setData({
          movies: res.data.subjects,
          total: res.data.total
        })
      }
    });

    wx.hideLoading();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

     //获取当前的页码
    let page = this.data.page;

    //页码累加
    page++;

    //根据当前的页码来计算偏移值
    let start = (page - 1) * this.data.pagesize;

    //根据豆瓣电影返回的总记录数与程序员期望的每页显示的记录数
    //计算出总页数

    let pagecount = Math.ceil(this.data.total / this.data.pagesize);


    if (page <= pagecount) {

      //显示加载提示框
      wx.showLoading({
        title: '努力加载中...',
        mask: true
      });

      //发送异步请求

      wx.request({
        url: 'https://api.douban.com/v2/movie/top250?apikey=0df993c66c0c636e29ecbb5344252a4a&start=' + start + '&count=' + this.data.pagesize,
        method: 'GET',
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        success: res => {

          //console.log(res.data);

          let movies = this.data.movies.concat(res.data.subjects);


          this.setData({
            movies: movies,
            total: res.data.total
          });
        }
      });

      this.setData({
        page: page
      });

      //隐藏加载提示框
      wx.hideLoading();


    } else {
        this.setData({
          hasMore:false
        });
    }

    
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



  onPageScroll() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})