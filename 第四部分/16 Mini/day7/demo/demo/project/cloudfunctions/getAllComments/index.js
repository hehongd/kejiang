// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  //这个地方不需要写wx，因为wx是微信客户端的前缀
  //而现在写的是云函数，云函数将部署到腾讯云服务器
  //同时云数据库也在腾讯云服务器
   let db = cloud.database();
   return db.collection('douban').get();
}