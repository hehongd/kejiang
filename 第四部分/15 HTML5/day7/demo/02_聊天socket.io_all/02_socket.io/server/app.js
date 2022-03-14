//构建基础的HTTP服务器
const app = require('http').createServer();
//创建Socket.io服务器
const server = require('socket.io')(app);

//当客户端连接到服务器后,服务器要执行的业务逻辑
server.on('connect',(client)=>{
    //报告村长:.....
    client.on('send message',(data)=>{
        //村长广播:......
        server.emit('boast message',{message:data.message})
    });
});

//指定监听端口
app.listen(5000,()=>{
  console.log('server running...');
});
