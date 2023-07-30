<script setup>
import { useUserStore } from '@/store/user.js'
const store = useUserStore()
import { useCountStore } from '@/store/count.js'
const CountStore=useCountStore()

</script>
<template>
    <h2>我是子组件1组件---{{store.username}} --- <button @click="CountStore.addCount">++</button></h2>
</template>
<style scoped></style>