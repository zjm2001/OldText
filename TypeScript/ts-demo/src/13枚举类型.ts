{
    console.log('枚举类型---------');
  //创建枚举
    enum Dir{
        up,
        down,
        left,
        right
    }
   //使用枚举
   function changeDir(dir:Dir){
    console.log(dir);
    
   }  
   changeDir(Dir.up)   //0
   changeDir(Dir.down)  //1
   changeDir(Dir.left) // 2
   changeDir(Dir.right) // 3


//数字枚举
   enum Dir1{
    up=100,
    down,
    left,
    right
}
function changeDir1(dir:Dir1){
    console.log(dir);    
   }  
   changeDir1(Dir1.up)   //100
   changeDir1(Dir1.down)  //101
   changeDir1(Dir1.left) // 102
   changeDir1(Dir1.right) // 103



   //字符串枚举
   enum Dir2{
    up='上',
    down='下',
    left='左',
    right='右'
}

function changeDir2(dir:Dir2){
    console.log(dir);    
   }  
   changeDir2(Dir2.up)   //上
   changeDir2(Dir2.down)  //下
   changeDir2(Dir2.left) // 左
   changeDir2(Dir2.right) // 右
}