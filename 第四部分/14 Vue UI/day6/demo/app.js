// 加载Express模块
const express = require('express');
// 加载CORS模块
const cors = require('cors');
// 加载body-parser模块(在Express4.5及以上的版本,自带body-parser中间件)
const bodyParser = require('body-parser');
// 加载MD5模块
const md5 = require('md5');
// 加载MySQL模块
const mysql = require('mysql');

// 创建WEB服务器
const server = express();

// 为所有的HTTP请求使用CORS模块
server.use(cors({
  origin: ['http://127.0.0.1:8080', 'http://localhost:8080']
}));

// 为所有的HTTP请求使用body-parser模块

server.use(bodyParser.urlencoded({
  extended: false
}));

//创建MySQL连接池
const pool = mysql.createPool({
  // 数据库服务器的地址
  host: '127.0.0.1',
  // 数据库服务器的端口号
  port: 3306,
  // 数据库用户的用户名
  user: 'root',
  // 数据库用户的密码
  password: '',
  // 数据库名称
  database: 'xzqa',
  // 最大连接数
  connectionLimit: 15
});

// 获取所有的文章分类
server.get('/category', (req, res) => {
  // 查询xzqa_category数据表的全部记录
  let sql = 'SELECT id,category_name FROM xzqa_category ORDER BY id';
  // 执行SQL查询
  pool.query(sql, (error, results) => {
    if (error) throw error;
    res.send({ code: 200, message: '查询成功', results: results });
  });
});

// 获取指定分类下包含的文章数据
server.get('/articles', (req, res) => {
  // 获取地址栏URL参数 --- 文章分类ID
  let id = req.query.id;
  // 获取地址栏URL参数 --- 页码
  let page = req.query.page;
  // 每页显示的记录数量
  let pagesize = 15;
  // 根据当前的页码,并且结合LIMIT语句的标准公
  // 式来计算机出offset参数值
  let offset = (page - 1) * pagesize;
  //执行SQL语句,以获取总记录数
  let sql = 'SELECT COUNT(id) AS count FROM xzqa_article WHERE category_id=?';

  //声明变量，用于存储总记录数
  let rowcount;
  pool.query(sql, [id], (error, results) => {
    if (error) throw error;
    rowcount = results[0].count;
    /////////////////////////////////////////////////
    //计算出总页数
    let pagecount = Math.ceil(rowcount / pagesize);
    // 查找特定分类下包含的文章数据
    sql = 'SELECT id,subject,description,image FROM xzqa_article WHERE category_id=? LIMIT ?,?';
    // 执行SQL查询
    pool.query(sql, [id, offset, pagesize], (error, results) => {
      if (error) throw error;
      res.send({
        code: 200,
        message: "查询成功",
        results: results,
        pagecount: pagecount
      });
    });
    /////////////////////////////////////////////////
  });
});

// 获取指定的文章信息
server.get('/review', (req, res) => {
  // 获取地址栏的URL参数 -- 文章ID
  let id = req.query.id;
  // 查询特定记录的SQL语句
  let sql = 'SELECT r.id,subject,content,created_at,nickname,avatar,article_number FROM xzqa_article AS r INNER JOIN xzqa_author AS u ON author_id = u.id WHERE r.id=?';

  // 执行SQL语句
  pool.query(sql, [id], (error, results) => {
    if (error) throw error;
    res.send({ code: 200, message: "查询成功", result: results[0] });
  });
});

//获取文章的评论信息接口
server.get('/comments', (req, res) => {
  // 获取文章的ID
  let id = req.query.id;
  // 查询的SQL语句
  let sql = 'SELECT c.id,content,username,avatar,created_at FROM xzqa_comments AS c INNER JOIN xzqa_users AS u  ON user_id = u.id WHERE article_id =  ? ORDER BY c.id LIMIT 5';
  // 执行SQL查询
  pool.query(sql, [id], (error, results) => {
    if (error) throw error;
    res.send({ code: 200, message: "查询成功", results: results });
  });
});

//用户注册接口
server.post('/register', (req, res) => {

  //console.log(md5('12345678'));

  //获取用户名和密码信息
  let username = req.body.username;
  let password = req.body.password;
  // 先需要以username为条件进行用户的查找操作
  let sql = 'SELECT COUNT(id) AS count FROM xzqa_author WHERE username=?';
  // 执行SQL查询
  pool.query(sql, [username], (error, results) => {        
    if (error) throw error;
    if (results[0].count) {
      res.send({ code: 201, message: "用户注册失败" });
    } else {
      // 插入记录的SQL语句
      sql = 'INSERT INTO xzqa_author(username,password) VALUES(?,MD5(?))';
      // 执行SQL语句
      pool.query(sql, [username, password], (error, results) => {
        if (error) throw error;
        //console.log(results);
        res.send({ code: 200, message: "用户注册成功" })
      })
    }
  });

});

// 用户登录的接口
server.post('/login',(req,res)=>{
  // 获取用户名和密码信息
  let username = req.body.username;
  let password = md5(req.body.password);
  // SQL查询语句
  let sql = 'SELECT id,username,nickname,avatar,article_number FROM xzqa_author WHERE username=? AND password=?';
  // 执行SQL查询
  pool.query(sql,[username,password],(error,results)=>{
    if(error) throw error;
    if(results.length){
      console.log('登录成功');
    } else {
      console.log('登录失败');
    }
  });
});

// 指定 WEB服务器监听的端口
server.listen(3000);
