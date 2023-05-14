//导入mysql模块
const mysql =require('mysql')
const db=mysql.createPool({
    host:'127.0.0.1',    //数据库ip
    user:'root',        //数据库账号
    password:'admin123',   //数据库账号密码
    database:'mydb'    //指定操作那个数据库
})
// 查询数据库
// let sql ='select * from users'
// db.query(sql,(err,results)=>{
//     if(err) return console.log(err.massage)
//     let body =results
//     console.log(body)
// })

// 修改数据库
// const user ={username:'大树哥',password:'123456'}
// // 定义待执行sql语句 ?表示站位符号
// const sqlstr='insert into users set ?'
// db.query(sqlstr,user,(err,results)=>{
//     if(err) return console.log(err.message);
// results.affectedRows 判断数据是否添加成功
//     if(results.affectedRows === 1){
//         console.log('插入数据成功');
//         //返回的是一个对象
//     }
// })


// 更新数据
// const user ={id:6,username:'弟弟们',password:'1254556'}
// // 定义待执行sql语句 ?表示站位符号
// const sqlstr='update users set ? where id= ?'
// db.query(sqlstr,[user,[user.id]],(err,results)=>{
//         if(err) return console.log(err.message);
//     if(results.affectedRows === 1){
//         console.log('更新数据成功');
//         //返回的是一个对象
//         }
// })


//删除数据 (谨慎使用)
// const sqlstr = 'delete from users where id=?'
// db.query(sqlstr,5,(err,results)=>{
//         if(err) return console.log(err.message);
//         if(results.affectedRows === 1){
//             console.log('删除数据成功');
//             //返回的是一个对象
//         }
//     })


//标记删除 使用delete 会把数据删除应当使用一个字段状态来表示 保留数据
// const sqlstr = 'update users set  status=? where id=?'
// db.query(sqlstr,['1',6],(err,results)=>{
// if(err) return console.log(err.message);
// if(results.affectedRows === 1){
// console.log('标记删除数据成功');
// //返回的是一个对象
// }
// })

