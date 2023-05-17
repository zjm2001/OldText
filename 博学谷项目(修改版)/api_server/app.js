const express = require('express');
const app = express();
const session=require('express-session')    //session
const cors = require('cors');
const UserRouter=require('./router/user')
const ListRouter=require('./router/list')
app.use(express.json())
app.use(express.urlencoded({extended:false})) 
app.use(cors())  //一定要在路由前使用  //配置跨域
app.use(session({
    secret:'token',//属性值可为任意字符串
    cookie:{maxAge:500000},//作用时间 单位毫秒 5000就是5秒
    rolling:true,//只要操作有响应 就会刷新这个时间 不然会总断
    resave:false,   //固定写法
    saveUninitialized:true
}))
//挂载用户路由 需要登录
app.use(UserRouter)
//列表路由不需要权限
app.use('/list',ListRouter)
app.listen(3307, () => {
    console.log(' http:127.0.0.1:3307');
})