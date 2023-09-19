{
    //泛型是可以在保证类型安全前提下，让函数等与多种类型一起工作，从而实现复用，常用于：函数、接口、class 中
    // 需求定义一个getId函数,传入一个值,返回这个值
    //any可以解决问题但是也带来问题 没有提示
    function getId(val:any){
        return val
    }
    //解决方法:泛型(需要输入什么类型值返回什么类型值)
    function getId1<T>(val: T){
        return val
    }
    //调用传入泛型指定值
    const res= getId1<Number>(122)
    const res1= getId1<string>('122')

    //简化调用写法: 调用可以不加<类型> ts会自动推断类型
    //const res3:122 得到的结果是一个字面量类型
    const res3= getId1(122)
    const res4= getId1('122')

     
}