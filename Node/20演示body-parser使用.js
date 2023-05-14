// 导入express模块
const express = require('express')
const parser = require('body-parser')

// 创建express的服务器实例;
const app = express()

app.use(parser.urlencoded({extended:false}))
app.post('/', (req, res) => { 
    res.send(req.body)
})
// 调用app.listen方法，在指定的80端口启动web服务器
app.listen(80, () => {
    console.log('127.0.0.1')
})