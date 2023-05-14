const express=require('express')   //导入express
const router= express.Router()     //创建路由对象
router.get('/user/list',(req,res)=>{   //挂载用户列表路由
    let data={
        status:200,
        masg:'请求成功',
        data:req.query
    }
    res.send(data)
})
router.post('/user/add',(req,res)=>{   //挂载用户列表路由
    let data={
        status:200,
        masg:'请求成功',
        data:req.body
    }
    res.send(data)
})
module.exports=router                //向外导出路由对象