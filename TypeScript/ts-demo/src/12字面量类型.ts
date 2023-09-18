{
   let str1='hello' 
   //const 声明变量是不可修改的,使得始终是hello,所以ts将其当做一个类型来看
   //这种类型就被称为[字面量]类型
   const str2='hello'
   //应用常景
//    例如你只能输入上下左右这四个字面量的函数
type Dir= '上' | '下' | '左' | '右'
function change(dir:Dir){
    console.log(dir);
    
}
change('右')
//change('zjm')  //报错只能上下左右
}