// 导入express模块;
const express = require('express');
// 创建express的服务器实例;
const app = express();
//配置内置解析中间件
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.post('/user', (req, res) => {

    console.log(req.body)
    res.send('ok')
})
// 调用app.listen方法，在指定的80端口启动web服务器;
app.listen(80, () => {
    console.log('Express server running at http:127.0.0.1');
})
