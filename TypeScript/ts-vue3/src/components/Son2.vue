<script setup lang="ts">
import {ToDo} from '../types/index';
// 接收传递过来的todo
defineProps<{
    todo:ToDo
}>()
let obj:ToDo={
    id:222,
    name:'大萨达多',
    fid:true
}
</script>
<template>
    <h1>  我是son2222 -- {{todo.fid}}---{{todo.id}}---{{todo.name}}</h1>
    
  
</template>