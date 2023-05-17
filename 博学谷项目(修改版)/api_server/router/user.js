const express = require('express');
const router = express.Router()
//导入用户处理函数
const{regUser,loginUser}=require('../router_had/user_had')
// 登录接口
router.use('/login',loginUser)
//注册接口
router.use('/login',regUser)
module.exports = router