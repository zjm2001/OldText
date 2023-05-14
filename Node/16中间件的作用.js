const express=require('express')
const app =express()
app.use(express.urlencoded({extended:false})) 
//最简单的全局中间件
app.use((req,res,next)=>{
    // console.log('最简单全局中间件')
    const {uname,psw}=req.body
    if(uname==='zjm'&&psw==='123456'){
        req.body={
            status:200,
            msg:'post成功',
            body:{uname:uname,psw:psw}
        }
    }else{
         req.body={
        status:201,
        msg:'post错误',
        // body:{}
    } 
    }
  
    next()
})
app.post('/login', (req, res) => {
  const{status,msg,body}=  req.body
    let data={
        status:status,
        msg:msg,
        data:body
    }
    res.send(data)
})
app.listen(80,()=>{
    console.log('127.0.0.1')
})