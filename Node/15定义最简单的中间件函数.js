const express=require('express')
const app =express()
app.use(express.urlencoded({extended:false})) 

//定义一个最简单的中间件函数
const mw =(req,res,next)=>{
    console.log('这是最简单的中间件')
    next()
}
//定义全局生效中间件
app.use(mw)
//最简单的全局中间件
app.use((req,res,next)=>{
    console.log('最简单全局中间件')
    next()
})
app.post('/login', (req, res) => {
    res.send('post login')
})
app.listen(80,()=>{
    console.log('127.0.0.1')
})