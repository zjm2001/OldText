<script setup>
import { ref } from "vue";
const num = ref(999)
const siHi=()=>{
    console.log('我是子组件的sihi方法');
}
defineExpose({
    num,
    siHi
})
</script>
<template>
    <div> 测试组件 num={{ num }} </div>
</template>