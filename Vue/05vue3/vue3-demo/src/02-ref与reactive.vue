<script setup>
//1.使用reactive:接收一个对象类型数据返回一个响应的对象
import {reactive} from 'vue'
const state =reactive({
  count:0
})
const setCount=()=>{
  state.count++
}
//本质:是在原有传入基础上,外层包了一层对象,包成复杂数据类型再借助reactive实现响应式
//注意点1.脚本中访问数据需要.value来得到
//2. 在模板中使用不需要.value
import {ref} from 'vue'
const count= ref(0)
const setCount1= ()=>{
  count.value++
}
// 声明数据统一使用ref
</script>
<template>
  <p>使用reactive</p>
  <h1>总数:{{ state.count }}</h1>
  <button @click="setCount">总数+1</button>
  <p>使用ref</p>
  <!-- //2. 在模板中使用不需要.value -->
  <h1>总数:{{ count }}</h1>  
  <button @click="setCount1">总数+1</button>
</template> 