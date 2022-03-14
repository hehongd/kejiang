// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
//现在我们通过这个云函数来实现简单的加法
//其中第一个参数,叫a1
//第二个参数叫,a2
exports.main = async (param) => {
  //所谓的event是所有形参组成的对象!!!
  return param.a1 + param.a2;
}