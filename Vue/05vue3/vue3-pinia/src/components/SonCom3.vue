<script setup>
// import {ref} from 'vue'
defineProps({
    modelValue:String
})
const emit =defineEmits(['update:modelValue'])
const add =()=>{
    emit('update:modelValue','吉萨汇顶科技花洒客户端')
}
// const changeInfo =(e)=>{
//     console.log(e);
//     emit('update:modelValue',e.target.value)
// }
</script>
<template>
    {{modelValue}}
<!-- <input type="text" :value="modelValue" @input="changeInfo($event)" > -->
<select :value="modelValue" @change="emit('update:modelValue', $event.target.value)">
    <option value='1' label="第一">11</option>
    <option value='2' label="第二">22</option>
    <option value='3' label="第三">33</option>
</select>
    <button @click="add" >点击改变值</button>
</template>
<style scoped></style>