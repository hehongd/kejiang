//构建基础的HTTP服务器
const app = require('http').createServer();
//创建Socket.io服务器
const server = require('socket.io')(app);

//指定监听端口
app.listen(5000,()=>{
  console.log('server running...');
});
