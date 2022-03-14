const app = getApp()

Page({

    data:{
      //用于保存轮播图数据
      swiperArray:[
        'http://m.iqiyipic.com/common/lego/20200614/cf339912845b47e2ab72f4d608a7e0ee.jpg',
        'http://m.iqiyipic.com/common/lego/20200612/45a165043de4414387d81b6e4bdd61b3.jpg',
        'http://m.iqiyipic.com/common/lego/20200612/635f5500a9994c5c8967749ea9929b18.jpg',
        'http://m.iqiyipic.com/common/lego/20200613/26dfd274bc224a74bc1a746b958eedcb.jpg',
        'http://m.iqiyipic.com/common/lego/20200605/a22767ec30474dda9354dd4cba413487.jpg',
      ],

      boards:{
          'coming_soon':{
              start:0,
              count:4,
              movies:[],
              title:''
          },
          'in_theaters':{
            start:0,
            count:8,
            movies:[],
            title:''
          },
          'top250':{
            start:0,
            count:12,
            movies:[],
            title:''
          }
      },

      //用于保存即将上映的影片
      coming_soon:[],
      //用于保存热映的影片
      in_theaters:[],
      //用于保存TOP205的影片
      top250:[]
    },

    /**
     * type表示影片的类型
     * 
     * start表示从第几条开始返回,从0开始编号
     * 
     * count表示获取的数量
     */
    
    loadMovies(type,start,count){
        wx.request({
          url: app.globalData.url + '/v2/movie/' + type + '?apikey=' + app.globalData.apikey +'&start=' + start +'&count=' + count,
          method:'get',
          header:{
            'content-type':'application/x-www-form-urlencoded'
          },
          success:res=>{
              let object = {};
              object['boards.' + type + '.movies'] = res.data.subjects;
              object['boards.' + type + '.title'] = res.data.title;
             
              this.setData(object);              
          }
        })

    },
    onLoad(options){

      

      Object.keys(this.data.boards).map(key=>{
          this.loadMovies(key,this.data.boards[key].start,this.data.boards[key].count);
      });
     
      
      //console.log(this.data.boards);

      //获取轮播图数据 -- 是豆瓣电影的正在上映的影片
      // wx.request({
      //   url: 'https://api.douban.com/v2/movie/new_movies?apikey=0df993c66c0c636e29ecbb5344252a4a',
      //   method:'GET',
      //   header:{
      //       'content-type':'application/x-www-form-urlencoded'
      //   },
      //   success:res=>{            
      //       this.setData({
      //         swiperArray:res.data.subjects
      //       });
      //   }
      // });

      //获取即将上映的影片数据 -- 只返回前4条
      // wx.request({
      //   url: 'https://api.douban.com/v2/movie/coming_soon?apikey=0df993c66c0c636e29ecbb5344252a4a',
      //   method:'GET',
      //   data:{
      //     start:0,
      //     count:4
      //   },
      //   header:{
      //     'content-type':'application/x-www-form-urlencoded'
      //   },
      //   success:res=>{
      //     //console.log(res.data.subjects);
      //     this.setData({
      //       coming_soon:res.data.subjects
      //     });
      //   }
      // });

      //获取热映的的影片数据 -- 只返回前4条

      // wx.request({
      //   url: 'https://api.douban.com/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a',
      //   method:'GET',
      //   data:{
      //     start:0,
      //     count:4
      //   },
      //   header:{
      //     'content-type':'application/x-www-form-urlencoded'
      //   },
      //   success:res=>{
      //     this.setData({
      //       in_theaters:res.data.subjects
      //     });
      //   }
      // });


       //获取TOP250的的影片数据 -- 只返回前12条

      //  wx.request({
      //   url: 'https://api.douban.com/v2/movie/top250?apikey=0df993c66c0c636e29ecbb5344252a4a',
      //   method:'GET',
      //   data:{
      //     start:0,
      //     count:12
      //   },
      //   header:{
      //     'content-type':'application/x-www-form-urlencoded'
      //   },
      //   success:res=>{
      //     this.setData({
      //       top250:res.data.subjects
      //     });
      //   }
      // });

    }

})
