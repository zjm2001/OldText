// 导入express模块;
const express = require('express');
const cors = require('cors');
//导入session
const session=require('express-session')
const router=require('./04router模块')
//导入session路由模块
const SessionRouter=require('./06session认证')
// 创建express的服务器实例;
const app = express();


//配置中间件
app.use(session({
    secret:'token',//属性值可为任意字符串
    cookie: {maxAge: 1800000},//作用时间 单位毫秒 5000就是5秒
    rolling:true,//只要操作有响应 就会刷新这个时间 不然会总断
    resave:false,   //固定写法
    saveUninitialized:true
}))
//配置内置解析请求数据格式
app.use(express.urlencoded({extended:false})) 

app.use(cors())  //一定要在路由前使用
app.use('/api',router)
app.use('/api',SessionRouter)

app.listen(80, () => {
    console.log('Express server running at http:127.0.0.1');
})