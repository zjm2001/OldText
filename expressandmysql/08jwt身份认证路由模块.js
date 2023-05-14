const express = require('express')
const router = express.Router()
//导入两个分别是生成jwt和还原jwt
const jwt = require('jsonwebtoken')
//定义密钥要和app里一样
const secretKey = 'zhoujiamingming ^_^'
router.post('/api/login',(req,res)=>{
    let { username, password } = req.body
    if (username !== 'admin' || password !== '000000') {
        return res.send({ status: 400, msg: '登录失败' })
    }
    const tokenStr = jwt.sign(
        { username: username },    //用户信息对象
        secretKey,                //加密密钥
        { expiresIn: '300s' }      //配置对象配置当前token有效期h是小时
    )
    res.send({
        status: 200,
        msg: '登录成功',
        token: tokenStr   //发送到客户端客户端进行保存 
        //然后对需要权限接口发送请求时携带参数Authorization = Bearer空格token字符串
        
    })
})

// 这是一个有权限的 API 接口
router.get('/admin/getinfo', function (req, res) {
   //使用 req.auth 获取用户信息，并使用 data 属性将用户信息发送给客户端
    console.log(req.auth);
    res.send({status: 200,message: '获取用户信息成功！', data: req.auth})
  })
module.exports = router