<template>
  <div>
    <h1>{{msg}}</h1>
    <h1>{{obj.name}}</h1>
    <h1>{{obj.age>18? '成年人':'未成年'}}</h1>
  </div>
</template>

<script>
export default{
 //变量声明再data函数return上
 data(){
  return{
    msg:'hello,zjm',
    obj:{
      name:'zjm',
      age:20
    }
  }
 }
}
</script>

<style>
h1{
  text-align: center;
}
</style>