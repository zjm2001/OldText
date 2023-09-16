{
    console.log('可选参数');
    //需求定义一个可选参数函数
    const print = (name: string, gender: string): void => {
        console.log(name, gender);

    }
    print('zjm', '男')   //正确写法
   // print('zjm')   // 报错
    //js中定义的形参,调用函数时可以不穿实参非常灵活
    // ts中定义了形参,调用是必须传入实参否则报错
    //如果要实现可选参数加一个问好
    //注意事项:必选参数不可位于可选参数后面
    const print1 = (name?: string, gender?: string): void => {
        console.log(name, gender);

    }
    print1('zjm')    //正确
    print1('zjm', '男')    //正确
    print1()    //正确


}