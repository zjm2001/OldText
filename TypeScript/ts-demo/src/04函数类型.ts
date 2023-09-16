

{
    console.log('函数类型-----------------------------------');
    function add(a,b){
        return a+b
    }
    console.log(add(1,2));
    
    add(1,2)

    // function 函数名(参数一:参数1类型,参数二:参数2类型):返回值类型{函数体}
    // 注意:返回值类型会自动生成可写可不写
    function add1(num1:number,num2:number){
        return num1+num2
    }

    // add1(true,1)   //报错参数类型错误
    add1(3,4)      //正常
    // 函数表达式
    const fn =function(a:number,b:number):number{
        return a+b
    }
    //箭头函数 注意以前箭头函数如果只有一个参数,则可以省略小括号,ts不行
    const sub =(a:number,b:number):number=>{
        return a+b
    }

    //函数的类型别名
  //类型别名通常是给监听函数 / 函数表达式使用不会给函数声明使用
    type fnType=(a:number,b:number)=>number
    const sub1:fnType=(a,b)=>{
        return a+b
    }
    const fn1:fnType =function(a,b){
        return a+b
    }
    console.log(fn1(2,3));
    
}