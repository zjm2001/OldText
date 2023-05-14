const http = require('http')
const server = http.createServer()
server.on('request', (req, res) => {
    let str = '404无法访问'
    let { url } = req
    console.log(url);
    if (url === '/index' || url === '/') {
        str = '欢迎来到主页'
    } else if (url === '/login') {
        str = '请登录'
    }
    
    res.setHeader('Content-Type', 'text/html;charset=utf-8');  //解决中文乱码
    res.end(str)


})
server.listen(9090, () => {
    console.log('启动成功:127.0.0.1:9090')
})