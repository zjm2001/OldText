const express = require('express');
const router = express.Router()
//导入用户处理函数
const{regUser,loginUser,judgeUser}=require('../router_had/user_had')
// 登录接口
router.post('/login',loginUser)
//注册接口
router.post('/reg',regUser)
//判断用户是否登录接口
router.get('/user',judgeUser)
//清空session
router.post('/logout',(req,res)=>{
    req.session.destroy()       //清空当前客户端对应session信息
    res.send({status:0,msg:'退出登录成功' })
})
module.exports = router