const express = require('express')
const router = express.Router()
//存储session
router.post('/login',(req,res)=>{
    let{username,password}=req.body
    if(username !=='admin' || password !=='000000'){
        return res.send({status:0,msg:'登录失败'})
    }
    req.session.user=req.body        //将用户数据存储到session中
    req.session.islogin=true         //登录状态存储到session中
    res.send({status:0,msg:'登录成功'})
})
// 获取session
router.get('/username',(req,res)=>{
    //判断用户是否登录
    if(!req.session.islogin){
        return res.send({status:1,msg:'fail'})  //未登录
    }
    res.send({
        status:0,
        msg:'success',
        uname:req.session.user.username
    })
})
//清空session
router.post('/logout',(req,res)=>{
    req.session.destroy()       //清空当前客户端对应session信息
    res.send({status:0,msg:'退出登录成功' })
})
module.exports = router