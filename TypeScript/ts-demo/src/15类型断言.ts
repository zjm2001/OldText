{
   //页面上有一个id为link的a标签
   //我们知道他是a标签 但是ts并不知道 
   //document.getElementById返回的是一个HTMLElement
   //而HTMLElement身上并没有href
   //类型断言:强行指定获取到的结果类型
    const aLink=document.getElementById('link')
   // const result =document.createElement('a')这个可以知道标签属于哪一个类型
    const a =document.getElementById('link') as HTMLAnchorElement
    //a.href   //就不会报错
    // 注意当获取到的结果较为宽泛时,我们有知道具体的类型,就可以使用断言强行指定类型
    // 语法二知道就行用的少
    const aLink2 = <HTMLAnchorElement>document.getElementById('link')

}