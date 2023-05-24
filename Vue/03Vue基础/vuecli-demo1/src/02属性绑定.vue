<template>
  <div>
    <h1>
      <!-- 语法一 -->
       <a v-bind:href="url">点击去百度</a>
       <!-- 简便写法 -->
       <img :src="imgurl" alt="">
       <img :src="imgstr" alt="">
    </h1>
  
  </div>
</template>

<script>
//导入图片方法
import imgstr from './assets/images/1293838344.jpeg'
export default{
//1.准备变量
data(){
  return{
    url:'http://www.baidu.com',
    imgurl:require('@/assets/images/1293838344.jpeg'),
    imgstr:imgstr
  }
}
}
</script>

<style>
h1{
  text-align: center;
}
img{
  width: 300px;
  height: 200px;

}
</style>