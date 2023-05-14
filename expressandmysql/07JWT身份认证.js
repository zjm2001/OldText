const express = require('express');
const app = express();
const { expressjwt: expressJWT } = require('express-jwt')
const router = require('./08jwt身份认证路由模块')
const cors = require('cors');
//定义密钥
const secretKey = 'zhoujiamingming ^_^'
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())  //一定要在路由前使用
//注意：只要配置成功了 express-jwt 这个中间件，就可以把解析出来的用户信息放到 req.auth里面
// 第一个参数是密钥 ,第二个参数是固定写法.unless(这里面写不要访问权限的接口)
app.use(expressJWT({ secret: secretKey, algorithms: ["HS256"] }).unless({ path: [/^\/api\//] }))
//定义一个全局错误的中间件函数
const errFun = (err, req, res, next) => {
    // 这次错误是由 token 解析失败导致的
    if (err.name === 'UnauthorizedError') {
        return res.send({status: 401, message: '无效的token',})
    }
    res.send({status: 500,message: '未知的错误', })
}
app.use(errFun)
app.use(router)
app.listen(80, () => {
    console.log('Express server running at http:127.0.0.1');
})