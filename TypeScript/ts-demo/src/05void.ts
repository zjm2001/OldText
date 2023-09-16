{
    console.log('void类型------------------');

    //需求:定义一个打印文本函数,不需要返回值
    //如果不写return 我们知道默认返回的是undefined,但是ts给我们推断为void
    // 在ts中写 :undefined设置返回值类型的意思是:必须返回一个undefined
    // ts给我们提供了一个返回值类型:void意思就是没有返回值
    const siHI = (conent: string) => {
       console.log(conent);
       
    }
    siHI('你好世界')
}