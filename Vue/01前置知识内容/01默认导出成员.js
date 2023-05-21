let n1 = 10 //定义私有成员
let n2 = 20 //定义私有成员不导出
function show() {console.log('我是私有共享') } //定义使用方法show
export default{
    n1,
    show
}