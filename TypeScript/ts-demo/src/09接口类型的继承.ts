import { type } from "os";

{
    console.log('接口继承---------------------------------');
    interface Iperson{
        name:string
        age:number
        siHi:()=>void
    }
    interface Istudent extends Iperson{
        score:number
        sleep:()=>void
    }
    
    //Istudent继承了Iperson的所有属性
    const s1:Istudent={
        name:'zjm',
        age:22,
        score:55,
        siHi:()=>{console.log('我是学生继承了父亲的sihi')},
        sleep:()=>{console.log('这是我自己的属性睡觉') }
    }

    s1.siHi()
    s1.sleep()



    //type如何和interface实现类似继承效果
    type one={
        username:string
        id:number
    }
    // &与链接符:纪要满足前面也要满足后面
    //| 或连接符:满足其中一个
    type two={
        age:number,
        sex:string
    } & one

    let data:two={
        username:'zjm',
        id:1,
        age:22,
        sex:'男'
    }
}