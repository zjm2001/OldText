const mysql =require('mysql')
const db=mysql.createPool({
    host:'127.0.0.1',    //数据库ip
    user:'root',        //数据库账号
    password:'admin123',   //数据库账号密码
    database:'mydb'    //指定操作那个数据库
})
module.exports=db