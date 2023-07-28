<script setup>
    import { inject } from 'vue'
    const count =inject('count')
    const setCount= inject('setCount')
    
</script>
<template>
    <div class="box">
        <h3>底层组件 <button @click="setCount(2)">底层改变祖先count</button></h3>
        <p>祖先传递的count{{count}}</p>

    </div>

</template>
<style scoped>
    .box {
        text-align: center;
    }
</style>