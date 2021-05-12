const http = require('http')
const https = require('https')

https.get(`https://chengzhx76.cn/pusher-test/ping`, (response) => {
  console.log(`状态码: ${response.statusCode}`);
})

console.log('本地IP：' + getIPAddress())

const server = http.createServer((req, res) => {
    console.log(req.connection.remoteAddress)

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('' + new Date());
    res.end();
}).listen(3000);

setTimeout(() => {
  console.log("关闭 server")
  server.close()
}, 10000)






function getIPAddress() {
  var interfaces = require('os').networkInterfaces();
  for(var devName in interfaces){
      var iface = interfaces[devName];
      for(var i=0;i<iface.length;i++){
          var alias = iface[i];
          if(alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal){
              return alias.address;
          }
      }
  }
}
