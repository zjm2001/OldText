<script setup>
import {ref,computed} from 'vue'
const list =ref([1,5,3,1,4,6,8])
//声明一个计算属性,吧list中大于二的过滤出来
const computedList= computed(()=>{
  return list.value.filter(item =>item>2)
})

</script>
<template>
  <h1>原始数据:{{list}}</h1>
  <h1>计算后数据数据:{{computedList}}</h1>
</template>