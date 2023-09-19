

{
    //多个泛型
    //需求:定义一个函数,出入一个对象,再传入一个字符串参数,返回属性值
    // O 表示传入的是这个对象属性,
    // K extends keyof O  意思就是 K必须是O里面的属性
    function getProp<O,K extends keyof O>(obj:O,key:K){
        return obj[key]
    }
    const p1 ={
        name:'zjm',
        gender:'男'
    }
    const res =getProp(p1,'name')
    const res1 =getProp(p1,'gender')

    //keyof常规用法
    type Friend ={
        name:string,
        age:number,
        hobby:string
    }
    let num: keyof Friend='age'  //拿到Friend三个类型值
}