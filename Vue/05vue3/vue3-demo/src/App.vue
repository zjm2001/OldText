<script setup>
    import MyInput from './components/my-input.vue'
    import {ref} from 'vue';
    const txt=ref('123456')
</script>
<template>
    <MyInput v-model="txt"></MyInput>
 {{txt}}
</template>