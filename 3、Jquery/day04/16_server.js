const http=require("http");
http.createServer(function(req,res){
  var weather=`晴 21~31度`;
  res.writeHead(200,{
    "Content-Type":"text/plain;charset=utf-8",
    "Access-Control-Allow-Origin":"http://127.0.0.1:5500"
  });
  res.write(weather);
  res.end();
}).listen(3000)