const { throws } = require('assert');
const express=require('express');
const send = require('send');
const app =express()
app.use(express.urlencoded({extended:false})) 

app.use((err,req,res,next)=>{
    console.log('发生了错误'+err.message);
    res,send('Error'+err.message)
})
app.post('/login',(req, res) => {
    res.send('post')
})
app.post('/' ,(req, res) => {
    throw new Error('服务器发生错误')
    res.send('post')
})
app.listen(80,()=>{
    console.log('127.0.0.1')
})