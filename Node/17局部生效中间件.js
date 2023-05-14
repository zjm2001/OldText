const express=require('express')
const app =express()
app.use(express.urlencoded({extended:false})) 
//定义的中间件函数
const mw =(req,res,next)=>{
    console.log('这是局部生效的中间件1')
    next()
}
const mw1 =(req,res,next)=>{
    console.log('这是局部生效的中间件2')
    next()
}
//局部生效中间件只作用再/login中
app.post('/login',mw,mw1 ,(req, res) => {
    res.send('post')
})
app.post('/' ,(req, res) => {
    res.send('post')
})
app.listen(80,()=>{
    console.log('127.0.0.1')
})