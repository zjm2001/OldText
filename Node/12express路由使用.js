const express = require('express')    //导入
const app = express()             //创建web服务命名为app
//挂载路由
app.use(express.urlencoded({extended:false}))   //加上这句才能获取psot数据
app.get('/add', (req, res) => {
    console.log(req.query);  //获取发过来的字符串get
    console.log(req.params);   //可以访问到url中通过:匹配的动态参数
     let data={
        status:0,
        masg:'请求成功',
        data:req.query
     }
    res.send(data)    //向客户端响应文本字符串


})
app.post('/login', (req, res) => {
    console.log(req.body); //获取发过来的数据对象post
    res.send('post login')
})
app.use(express.static('../xtx+htmlcss'))
//启动web服务
app.listen(8080, () => {
    console.log('启动成功:127.0.0.1:8080');
})