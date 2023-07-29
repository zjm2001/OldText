<script setup>
//原始写法
// defineProps({
//     modelValue:String
// })
// const emit =defineEmits(['update:modelValue'])
//实验性质的需要改配置vite中配置
import {defineModel} from 'vue'
const modelValue=defineModel()
</script>
  
<template>
    <h3><input type="text" :value="modelValue" @input="e=>modelValue=e.target.value"/></h3>

</template>