const express=require('express')
const router = require('./13创建路由模块')
const app =express()
app.use(express.urlencoded({extended:false})) 
app.use('/app',router)   //
app.listen(80,()=>{
    console.log('127.0.0.1')
})