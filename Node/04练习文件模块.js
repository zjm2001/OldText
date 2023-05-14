const fs =require('fs')
fs.readFile('./files/成绩.txt','utf-8',function(err,dataStr){
    if(err){
        return console.log('读取失败'+err.message)
    }
    // console.log(dataStr)
    //  const str = [...dataStr]
     const str = dataStr.split(' ')
    const arr =[]
    str.forEach(item=>{
        arr.push(item.replace('=',':'))
    })
   
    fs.writeFile('./files/成绩_ok.txt',arr.join('\r\n'),function(err){
        if(err){
            return console.log('写入失败'+err.message)
        }
        console.log('写入成功');
    })
})