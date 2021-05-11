const https = require('https')

const cookie = process.env.TEST_COOKIE

const options = {
  hostname: 'https://chengzhx76.cn',
  port: 443,
  path: '/pusher-test/ping?functionId=signBeanIndex&appid=ld',
  menthod: 'POST',
  headers: {
    'Accept': 'application/json',
    'Cookie': cookie,
    'Content-Type': 'application/x-www-form-urlencoded',
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1',
    'Accept-Language': 'zh-cn',
    'Accept-Encoding': 'gzip, deflate, br'
  }
}

const req = https.request(options, res => {
  console.log(`状态码: ${res.statusCode}`)
  res.on('data', data => {
    process.stdout.write(data)
  })
})

req.on('error', error => {
  console.error(error)
})

req.end()
