<script setup>
  import CenterCom from './components/center-com.vue'
  import { provide,ref } from "vue";
  const count =ref(100)
  provide('count',count)
 const chengeCount =()=>{
  count.value++
 }
 provide('setCount',(newCount)=>{
  count.value-=newCount
 })
</script>
<template>
  <div class="box">
     <h1>顶层组件 <button @click="chengeCount">改变count</button></h1>  
     <CenterCom></CenterCom>
  </div>
 
</template>
<style scoped>
  .box{
    text-align: center;
  }
</style>