const app = getApp()

Page({
    data:{
      //用于保存轮播图数据
      swiperArray:[],
      //用于保存即将上映的影片
      coming_soon:[],
      //用于保存热映的影片
      in_theaters:[],
      //用于保存TOP205的影片
      top250:[]
    },
    onLoad(options){
      //获取轮播图数据 -- 是豆瓣电影的正在上映的影片
      wx.request({
        url: 'https://api.douban.com/v2/movie/new_movies?apikey=0df993c66c0c636e29ecbb5344252a4a',
        method:'GET',
        header:{
            'content-type':'application/x-www-form-urlencoded'
        },
        success:res=>{            
            this.setData({
              swiperArray:res.data.subjects
            });
        }
      });

      //获取即将上映的影片数据 -- 只返回前4条
      wx.request({
        url: 'https://api.douban.com/v2/movie/coming_soon?apikey=0df993c66c0c636e29ecbb5344252a4a',
        method:'GET',
        data:{
          start:0,
          count:4
        },
        header:{
          'content-type':'application/x-www-form-urlencoded'
        },
        success:res=>{
          console.log(res.data.subjects);
          this.setData({
            coming_soon:res.data.subjects
          });
        }
      });

      //获取热映的的影片数据 -- 只返回前4条

      wx.request({
        url: 'https://api.douban.com/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a',
        method:'GET',
        data:{
          start:0,
          count:4
        },
        header:{
          'content-type':'application/x-www-form-urlencoded'
        },
        success:res=>{
          this.setData({
            in_theaters:res.data.subjects
          });
        }
      });


       //获取TOP250的的影片数据 -- 只返回前12条

       wx.request({
        url: 'https://api.douban.com/v2/movie/top250?apikey=0df993c66c0c636e29ecbb5344252a4a',
        method:'GET',
        data:{
          start:0,
          count:12
        },
        header:{
          'content-type':'application/x-www-form-urlencoded'
        },
        success:res=>{
          this.setData({
            top250:res.data.subjects
          });
        }
      });

    }

})
