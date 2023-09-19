{
    //泛型接口
    interface Student<T>{
        id:number
        name:T
        hobby:string[]
    }
    //使用
    let s1:Student<string>={
        id:123,
        name:'zkk',
        hobby:['aa','bb']
    }
    let s2:Student<Number>={
        id:123,
        name:001,
        hobby:['aa','bb']
    }

}