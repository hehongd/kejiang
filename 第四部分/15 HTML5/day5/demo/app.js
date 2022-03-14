//加载Express模块
const express = require('express');

//加载fs(FileSystem)模块
const fs = require('fs');

//加载Multer模块
const multer = require('multer');

//设置Multer -- 上传位置 (destination)
const upload = multer({ dest: 'upload' });

//加载UUID模块
const uuid = require('uuid');


const server = express();

server.use(express.static('public'));

//单文件上传时HTML页面的路由
server.get('/single', (req, res) => {
  let data = fs.readFileSync('./01_single.html', { encoding: 'utf8' });
  res.send(data);
});

//单文件上传时处理上传业务的路由
server.post('/single', upload.single('avatar'), (req, res) => {
  console.log(req.file.originalname);
  res.send('文件上传成功');
});

//多文件上传时HTML页面的路由
server.get('/multiple', (req, res) => {

  let data = fs.readFileSync('./02_multiple.html', { encoding: 'utf8' });

  res.send(data);
});


//多文件上传时处理上传业务的路由
server.post('/multiple', upload.array('avatar'), (req, res) => {
  req.files.forEach(file => {
    console.log(file.originalname);
  });
  res.send('文件上传成功');
});


//多文件上传时HTML页面的路由  -- 自定义规则
server.get('/custom', (req, res) => {

  let data = fs.readFileSync('./03_custom.html', { encoding: 'utf8' });

  res.send(data);
});

//自定义存储规则，通过multer对象的diskStorag()方法进行定义
let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    //构建日期对象
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let day = now.getDate();
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;
    let path = 'upload/' + year + '-' + month + '-' + day;
    if(!fs.existsSync(path)){
        fs.mkdirSync(path,(err)=>{
          if(err) throw err;
        });
    }
    cb(null, path);
  },
  filename: function (req, file, cb) {
    //无论是单个文件还是多个文件上传
    //当前的file就是文件信息！文件信息！文件信息！
    //获取原始的名称才能进行更名操作
    let origin = file.originalname;
    //获取原始名称的中扩展名 -- 小写的扩展名而且不带有点(.)
    let extension = origin.substr(origin.lastIndexOf('.') + 1).toLowerCase();
    //根据UUID来生成唯一的主文件名称
    let mainname = uuid.v1();
    //将主文件名与原始的扩展名组合新的文件名称 (因为主文件名与扩展名之间以点分隔)
    //如果第62行不进行加1操作的话，第67中也就不用再进行点的连接了~~~
    let newname = mainname + '.' + extension;
    //通过回调函数将这个新的文件名告诉multer,让它按新的规则使用
    cb(null, newname);
  }
});

//声明常量upload1,并且使用刚刚定义的自定义规则
const upload1 = multer({
  storage: storage
});


//多文件上传时处理上传业务的路由 -- 自定义规则
server.post('/custom', upload1.array('avatar'), (req, res) => {

  res.send('文件上传成功');
});

//UUID测试
server.get('/uuid', (req, res) => {
  let v1 = uuid.v1();
  let v4 = uuid.v4();
  let str = 'V1的版本:' + v1 + ',V4的版本:' + v4;
  res.send(str);
});


//拖放上传时HTML页面的路由
server.get('/drag',(req,res)=>{
  let data = fs.readFileSync('./04_drag.html', { encoding: 'utf8' });
  res.send(data);
});

//拖放文件上传时处理上传业务的路由
server.post('/drag', upload1.array('aaa'), (req, res) => {
    res.send('文件上传成功');
});




server.listen(3000);