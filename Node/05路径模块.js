
const path = require('path')    
//路径拼接
const pathStr =path.join(__dirname,'/files','/44.txt')   
console.log(pathStr); //D:\desktop\文件\Code\Node\files\44.txt                 
//获取路径中的文件名
const str ='/a/b/c/index.css'
let name=path.basename(str)
console.log(name)//index.css
let name1=path.basename(str,'.css')
console.log(name1) //index
//获取路径拓展名
let a =path.extname(str)
console.log(a) //.css