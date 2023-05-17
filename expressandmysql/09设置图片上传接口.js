const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())  //一定要在路由前使用
app.post('/add', (req, res) => {
    console.log(req.body);
    res.send({
        status:200,
        mag:'请求成功'
    })
})
app.listen(80, () => {
    console.log('Express server running at http:127.0.0.1');
})