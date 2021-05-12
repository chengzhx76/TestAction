const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(new Date());
    res.end();
}).listen(3000);

setTimeout(() => {
  console.log("关闭 server")
  server.close()
}, 5000)
