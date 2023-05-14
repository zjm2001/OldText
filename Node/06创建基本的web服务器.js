const http = require('http')  //导入http模块
const server = http.createServer()  //创建服务器实例
//监听request事件 监听客户端请求
server.on('request', (req, res) => {
    //req请求对象包含客户端相关数据
    console.log(req.url);                  // 是客户端请求的url地址
    console.log(req.method);               //客户端请求的类型
    //res响应对象
    res.setHeader('Content-Type', 'text/html;charset=utf-8');  //解决中文乱码
    res.end('萨达萨达的是')              //向客户端发送指定内容,并结束请求处理过程
   
})
server.listen(8080, () => {
    console.log('127.0.0.1:8080');
})