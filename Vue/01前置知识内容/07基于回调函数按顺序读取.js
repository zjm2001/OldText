import thenFs from 'then-fs'
//异步任务无法确定读取文件可以 返回值是一个Promise实例对象
// thenFs.readFile('./files/1.txt', 'utf8').then((r1) => { console.log(r1); })
// thenFs.readFile('./files/2.txt', 'utf8').then((r2) => { console.log(r2); })
// thenFs.readFile('./files/3.txt', 'utf8').then((r3) => { console.log(r3); })
//基于Promise按顺序读取文件内容

thenFs.readFile('./files/111.txt', 'utf8')
        .catch(err=>{
       console.log(err.message);
      })
    .then((r1) => {
        console.log(r1)
       thenFs.readFile('./files/2.txt', 'utf8')
    .then((r2) => {
                console.log(r2)
                thenFs.readFile('./files/3.txt', 'utf8')
    .then((r3) => {
              console.log(r3)
            })
    })
 })

