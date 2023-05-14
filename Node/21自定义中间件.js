// 导入express模块;
const express = require('express');
//导入qs内置模块
const qs=require('querystring')
//导入封装自定义中间件
const bodyStr =require('./22封装自定义中间件')
// 创建express的服务器实例;
const app = express();
// 定义全局中间件
console.log(bodyStr);
app.use(bodyStr.bodyStr)
app.post('/', (req, res) => { 
    res.send(req.body)
})
// 调用app.listen方法，在指定的80端口启动web服务器;
app.listen(80, () => {
    console.log('Express server running at http:127.0.0.1');
})