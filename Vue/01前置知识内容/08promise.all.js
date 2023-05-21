import thenFs from "then-fs";
const promiseAll = [
    thenFs.readFile('./files/1.txt', 'utf8'),
    thenFs.readFile('./files/3.txt', 'utf8'),
    thenFs.readFile('./files/2.txt', 'utf8'),
]
// Promise.all(promiseAll).then(res=>{
//     console.log(res)
// })
Promise.race(promiseAll).then(res=>{
    console.log(res)
})