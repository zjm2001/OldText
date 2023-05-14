// 导入express模块;
const express = require('express');
const cors = require('cors');
const router=require('./24router')
// 创建express的服务器实例;
const app = express();
//配置内置解析请求数据格式
app.use(express.urlencoded({extended:false})) 

app.use(cors())  //一定要在路由前使用
app.use('/api',router)

app.listen(80, () => {
    console.log('Express server running at http:127.0.0.1');
})