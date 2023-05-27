<template>
  <div id="app">
    <input type="text" v-model="name">
    <h1><input type="text" v-model="user.name"></h1>
    <h1><input type="text" v-model.number="user.age"></h1>
  </div>
</template>

<script>
export default {
data() {
  return {
    name:'',
    user:{
      name:'zjm',
      age:15
    }
  }
},
//侦听name值的改变
watch:{
   name(newval,oldval){
    console.log(newval);  //最新值
    console.log(oldval);  //上一次的值
   },
   user:{
    immediate:true, //立即执行网页打开就执行一次
    deep:true, //深度监听复杂类型内变化
    handler(newval,oldval){
      console.log(newval);  //最新值
    console.log(oldval);  //上一次的值
    }
   }
   
},
}
</script>

<style>

</style>