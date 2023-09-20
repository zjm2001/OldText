<script setup lang="ts">
import Son from '@/components/Son.vue'
import { ref } from 'vue';
const house=ref('大别野')
const age =ref(5555)
//子传递到父自定义函数触发事件
const fn =(val:string)=>{
    console.log(val);
    
}
//
const fn1 =(val:string)=>{
    console.log(val);
    
}


//ref在ts中
const msg =ref('statad')
const mag1=ref<string>('大师的撒')
// 或者是复杂类型
const list =ref([
    {id:1,name:'达大厦',fid:false},
    {id:2,name:'达大55厦',fid:false},
    {id:3,name:'达大46厦',fid:true},
]) 
//(这样写就会有各种代码提示)
type ToDo ={
    id: number;
    name: string;
    fid: boolean;
}[]
const list1=ref<ToDo>([
    {id:1,name:'达大厦',fid:false},
    {id:2,name:'达大55厦',fid:false},
    {id:3,name:'达大46厦',fid:true},
])

list1.value[0].fid
</script>

<template>
我是app
<Son :house="house" :age="age" @getGift="fn" @getGift1="fn1"></Son>
<Son :house="house" ></Son>
<h1>----------------------------------------------------------</h1>
</template>

<style scoped>

</style>
