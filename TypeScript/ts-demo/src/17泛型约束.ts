{
    function getStr<T>(val: T){
      //  console.log(val.length);  //报错的应为T是一个位置的类型 (也可以指定类型为string)
      //解决方法一类型收缩
      if(typeof val === 'string'){
        console.log(val.length)
      }
        return val
    }
    const str =getStr('abc')
    console.log(str);


      //方法二使用添加约束方法
      //1. 定义接口
      interface ILength{
        length:number
      }
    //添加约束(给泛型找爹)
    function getStr1<T extends ILength>(val: T){
        val.length  //就不会报错
        return val
    }
    getStr1<string>('adsada')
    //getStr1<number>(155)    //报错不满足ILength
}