//导入qs内置模块
const qs=require('querystring')
const bodyStr=(req,res,next)=>{
    let str =''
    // 监听req 的data事件接收发送数据
    req.on('data',(chunk)=>{
    str+=chunk
    })
    //监听req的end事件 请求数据完毕后触发(可以拿到处理完整的请求数据)
    req.on('end',()=>{
     //导入querystring调用qs.parse() 把查询的字符串解析为对象
     const body =qs.parse(str)
     req.body=body   //解析数据挂载到req.body
     next()
    }) 
}
module.exports={
    bodyStr,
    uname:'zjm'
}