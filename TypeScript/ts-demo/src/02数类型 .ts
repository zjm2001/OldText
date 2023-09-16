console.log('数据类型------------------------');


//数组类型   类型注解1
let arr1 = [11, 222]
let arr: number[] = []


//类型注解2
let arr2: Array<Number> = []



//联合类型

let arr3: (number | string)[] = [1, 2, 3, 'aaa']
// 意思是既可以是数字类型也可以是字符串类型
//注意:使用|优先级较低,需要使用()包裹提高优先级
//弊端:一旦使用联合类型会丢失一部分提示信息
// 例如:
let timer: NodeJS.Timeout | null = null;
timer = setTimeout(() => { }, 1000)
console.log(timer);
