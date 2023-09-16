 console.log('01类型注解');
 let a=0    // 相当于 let a: Number=0

 //a='20'//不能这样使用前面注解了a类型为number类型
 a=60
 a=50
//  a='20'
 console.log(a);   //可以运行但是会提示报错
 let username: boolean=false
 username=true
 let b: undefined=undefined
 let n:null=null
 