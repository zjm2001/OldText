<template>
  <h1>{{ count }}</h1>
  <button @click="increment">Count is ++</button>
  <My :str="count"></My>
</template>
<script setup>
import { ref, onMounted, } from 'vue'
import My from './components/My.vue'  // vue3直接引入直接使用
// 响应式状态
const count = ref(0)
// 用来修改状态、触发更新的函数
function increment() {
  count.value++
}
// 生命周期钩子
onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})
</script>