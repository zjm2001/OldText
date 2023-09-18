{
    console.log('any类型不推荐使用------------');
    let obj:any ={x:0}
    obj.bar=100
    obj()
    //原则:不推荐使用any!这个会让typeScript变为anyScript(失去代码保护又是)
    // 其他隐式具有any的类型情况
    // 1.声明变量不提供类型也不提供默认值
    //2.函数参数不加类型
   // 所以这两种情况下都应该提供类型
    
}