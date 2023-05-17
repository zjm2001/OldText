const express = require('express')
const db = require('./03mysqldb.js')
const router = express.Router()
//定义get查询接口
router.get('/get', (req, res) => {
  const sqlstr = 'select * from users'
  db.query(sqlstr, (err, results) => {
    if (err) return console.log(err.massage)
    res.send({
      status:'1',
      msg:'请求成功',
      data:results
    })
  })
})
//写一个个post添加数据接口
router.post('/add', (req, res) => {
  const sqlstr='insert into users set ?'
  db.query(sqlstr,req.body,(err,results)=>{
    if(err) return console.log(err.message);
   if(results.affectedRows === 1){
    res.send({
      status:'1',
      msg:'发送请求成功',
    })
    }
})
})
//更新接口
router.post('/updata', (req, res) => {
const {id}=req.body   //解构出id
  const sqlstr='update users set ? where id= ?'
  db.query(sqlstr,[req.body,id],(err,results)=>{
    if(err) return console.log(err.message);
   if(results.affectedRows === 1){
    res.send({
      status:'1',
      msg:'修改成功',
    })
    }
})
})

//删除
router.get('/delete', (req, res) => {
  const {id}=req.query
  const sqlstr = 'delete from users where id=?'
  db.query(sqlstr,id ,(err, results) => {
    if (err) return console.log(err.massage)
    res.send({
      status:'1',
      msg:'删除成功',
      data:results
    })
  })
})

module.exports = router