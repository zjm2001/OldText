<script setup>
import {ref ,watch} from 'vue'
 const count= ref(0)
 const nickname=ref('张三')
 const changCount=()=>{
  count.value++
 }
 const changNickname=()=>{
  nickname.value='李四'
 }
//  监视单个数据变化
//  语法  watch(ref对象,(newVal,oldVal)=>{})
watch(count,(newVal,oldVal)=>{
  console.log(newVal,oldVal);
})
// 监视多个数据变化
//  语法  watch([ref对象一,ref对象二],(newArr,oldArr)=>{})
watch([count,nickname],(newArr,oldArr)=>{
  console.log(newArr,oldArr);
})
//  立即执行immediate
watch(count,(newVal,oldVal)=>{
  console.log(newVal,oldVal);
},{immediate:true})
//深度监视deep
const user=ref({
  username:'周家明',
  age:20
})
const changUser=()=>{
  user.value.age++
}
watch(user,(newVal)=>{
  console.log(newVal);
},{deep:true})
//精确侦听对象中的属性
watch(()=>user.value.age,(newVal)=>{console.log(newVal);})

</script>
<template>
  <div>{{count}}</div>
  <div>{{nickname}}</div>
  <button @click="changCount">+1</button>
  <button @click="changNickname">改变名称</button>
  <p>---------------------------------------------------------</p>
  <div>{{ user }}</div>
  <button @click="changUser">改变user里面的age</button>
</template>