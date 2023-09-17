{
    console.log('接口类型的使用----------------------------------------------');
    //作用:给对象约束属性和方法
    //基础语法
    // interface 接口名{
    //     属性名:类型
    // }
    interface Iperson{
        name:string
        age:number
    }
    const p1:Iperson={
        name:'ZJM',
        age:22
    }

    //interface与type对比
    //相同点:都可以给对象知道类型
    //不同点:接口只能为对象指定类型
    //       类型别名,不仅可以为对象指定类型,实际可以为任意类型指定别名
}