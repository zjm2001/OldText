const express = require('express');
const session=require('express-session')   //session
const cors = require('cors');
const UserRouter=require('./router/user')
const ListRouter=require('./router/list')
const app = express()

//配置中间件
app.use(session({
    secret:'token1',//属性值可为任意字符串
    cookie: {maxAge: 1000*60*60*60},//作用时间 单位毫秒 
    rolling:true,//只要操作有响应 就会刷新这个时间 不然会总断
    resave:false,   //固定写法
    saveUninitialized:true
}))
//将静态资源挂载起来不然不同源无法使用session
app.use(express.static('../web'))
app.use(express.json())
app.use(express.urlencoded({extended:false})) 
// app.use(cors())  //一定要在路由前使用  //配置跨域  //session必须同才能使用所以不需要配置跨域问题 但是jwt可解决跨域数据访问
//列表路由不需要权限
app.use('/list',ListRouter)
//挂载用户路由 需要登录
app.use(UserRouter)

app.listen(3307, () => {
    console.log(' http:127.0.0.1:3307');
})