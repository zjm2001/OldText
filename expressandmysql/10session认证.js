const express = require('express');
const cors = require('cors');
//导入session
const session=require('express-session')
 const router=require('./11session_router')
const app = express();
app.use(cors())  //一定要在路由前使用
//配置中间件
app.use(session({
    secret:'token',//属性值可为任意字符串
    cookie: {maxAge: 1800000},//作用时间 单位毫秒 5000就是5秒
    rolling:true,//只要操作有响应 就会刷新这个时间 不然会总断
    resave:false,   //固定写法
    saveUninitialized:true
   
}))
// 挂载静态资源
app.use(express.static('/expressandmysql'))
app.use(express.json())
app.use(express.urlencoded({extended:false})) 
app.use(router)
app.listen(80, () => {
    console.log(' http:127.0.0.1');
})