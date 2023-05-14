const fs  = require('fs');
fs.readFile('./files/11.txt','utf-8',function(err,dataStr){
    if(err){
        return  console.log('读取文件失败'+err.message);
    }
    // console.log(err);  //读取正确就是null  错误就是错误信息
    console.log('读取成功:'+dataStr);  //读取文件内容
})
