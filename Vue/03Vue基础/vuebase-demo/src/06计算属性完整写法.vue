<template>
  <div id="app">
    <span>姓名:</span>
    <input type="text" v-model="full">
  </div>
</template>

<script>
export default {
computed:{
 full:{
  set(val){console.log(val);},   //赋值触发set方法
  get(){return '无名氏'}        //使用触发get值
 }
}
}
</script>

<style>

</style>