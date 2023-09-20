<script setup lang="ts">
import { ref } from 'vue';

//非ts语法
// defineProps({
//     house:{
//         type:String,
//         required:true
//     }
// })

//TS语法
type TypeProps={
    house:string,  //必须传递
    age?:number   //可选参数
}
//设置默认值 (值必须是可选参数,当不传值则为默认值) 
 const props=withDefaults( defineProps<TypeProps>(),{
    age:888  //设置不传值的默认值
 })



 //子传父
 //传统写法
// const emit=defineEmits(['getGift'])
// emit('getGift','孙子')


// ts写法
//泛型对象中有几个事假就写几个约束
// ():中有n个参数 e是固定的其他就按照具体来传递参数
//语法 (e:事件名,参数名1:类型,参数名2:类型...)
const emit =defineEmits<{
(e:'getGift',gift:string):void,
(e:'getGift1',gift:string):void
}>()
emit('getGift','孙子')
emit('getGift1','孙子5464')

</script>

<template>
    <h3>
        我是son
        直接父亲传递:{{house}}
        我是可选参数大小:{{age}}平方米
    </h3>

</template>

<style scoped>

</style>