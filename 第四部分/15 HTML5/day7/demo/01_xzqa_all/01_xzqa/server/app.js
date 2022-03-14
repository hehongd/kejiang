//加载Express模块
const express = require("express");

//加载cors模块
const cors = require("cors");

//加载MySQL模式
const mysql = require("mysql");

//加载body-parser模块
const bodyParser = require('body-parser');

//创建MySQL连接池
const pool = mysql.createPool({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: '',
    database: 'xzqa',
    connectionLimit: 15
});

//创建Express应用
const server = express();

//使用CROS模块

server.use(cors({
    origin: ['http://localhost:8080', 'http://127.0.0.1:8080']
}));

//使用body-parser中间件
server.use(bodyParser.urlencoded({
    extended:false
}));

//获取所有文章分类的接口
server.get('/categories', (req, res) => {

    //获取xzqa_category数据表的全部记录
    let sql = 'SELECT id,category_name FROM xzqa_category';

    //通过MySQL连接池执行SQL语句
    pool.query(sql, (err, results) => {
        if (err) throw err;
        res.send({ message: '查询成功', code: 1, results: results });
    });
});

//获取所有文章的接口

server.get('/articles', (req, res) => {

    //获取URL地址栏中的参数 -- 文章分类ID
    let cid = req.query.cid;
    //获取URL地址栏中的参数 -- 页码
    let page = parseInt(req.query.page);

    // //指定存储每页显示的记录数
    let pagesize = 15;

    //因为分页时是利用了SELECT语句的LIMIT子句
    //该子句中offset参数的计算公式是：
    //(当前页码-1) * 每页显示记录数
    //所以:
    let offset = (page - 1) * pagesize;

    //获取xzqa_article数据表中以获取到的cid为条件的记录
    let sql = 'SELECT id,subject,description,image FROM xzqa_article WHERE category_id=? LIMIT ' + offset + ',' + pagesize;

    //通过MySQL连接池执行SQL语句·
    pool.query(sql, [cid], (err, results) => {

        if (err) throw err;

        //统计指定文章分类包含的文章数量
        let sql = 'SELECT COUNT(id) AS count  FROM xzqa_article WHERE category_id=?';

        pool.query(sql,[cid],(err,record)=>{

            if(err) throws;
            //获取总记录数
            let count = record[0].count;
            //计算总页数
            let pagecount = Math.ceil(count / pagesize);

            res.send({ message: '查询成功', code: 1, results: results,pagecount:pagecount });
        })
        
    })
});


//获取特定文章的接口

server.get('/article',(req,res)=>{
    //获取URL地址栏的参数
    let id = req.query.id;
    //以id条件进行记录的查找
    let sql = 'SELECT  id,subject,content FROM xzqa_article WHERE id=?';
    //执行SQL查询
    pool.query(sql,[id],(err,results)=>{
        if(err) throw err;
        res.send({message:'查询成功',code:1,result:results[0]});
    });
});

// 用户登录的API
server.post('/login',(req,res)=>{
    //获取提交的用户名和密码
    let username = req.body.username;
    let password = req.body.password;
    //并且以此为条件进行查找操作
    let sql = 'SELECT id,username FROM xzqa_author WHERE username=? AND password=MD5(?)';
    pool.query(sql,[username,password],(err,results)=>{
        if(err) throw err;
        if(results.length == 0){
            res.send({message:'登录失败',code:0});
        }
        if(results.length == 1){
            //后续要调整(如果期望在客户端显示用户名或昵称的话，还需要
            //再返回相关的信息到客户端)
            res.send({message:'登录成功',code:1});
        }
    });
});

//指定WEB服务器的监听端口
server.listen(3000, () => {
    console.log('服务器启动...');
});