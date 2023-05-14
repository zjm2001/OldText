const fs  = require('fs');
fs.writeFile(__dirname+'/files/22.txt','写入的数据','utf-8',function(err){
    //参数一是写入文件位置  写入数据  编码格式(可省略) 完成回调函数
    // console.log(err); //null表示成功  否则输出错误对象
    if(err){
        return console.log('写入失败'+err.message);
    }
    console.log('写入成功');
})