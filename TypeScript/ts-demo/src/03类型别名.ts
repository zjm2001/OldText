{console.log('类型别名------------------------');
// 当多个需要使用联合类型时
//写法复杂繁琐
let arr3: (number | string)[] = [1, 2, 3, 'aaa']
let arr2: (number | string)[] = [1, 2, 3, 'aaa']
let arr1: (number | string)[] = [1, 2, 3, 'aaa']
//写法一
type ArrType=(number | string)[]   //声明类型
let arr4: ArrType = [1, 2, 3, 'aaa']
let arr5: ArrType = [1, 2, 3, 'aaa']
let arr6: ArrType = [1, 2, 3, 'aaa']
//写法二组合写法  灵活度高随意组合使用
type ArrItem=(number | string)   //声明类型
let arr7: ArrItem[] = [1, 2, 3, 'aaa']
let arr8: ArrItem[] = [1, 2, 3, 'aaa']
let arr9: ArrItem[] = [1, 2, 3, 'aaa']

}