<script setup>
//原始写法
defineProps({
    modelValue:String
})
const emit =defineEmits(['update:modelValue'])
</script>
  
<template>
    <h3><input type="text" :value="modelValue" @input="e=>emit('update:modelValue',e.target.value)"/></h3>

</template>