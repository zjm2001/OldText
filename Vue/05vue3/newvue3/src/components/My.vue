<template>
  <h1>我是组件my</h1>
  <h1>我是组件中的{{str}}</h1>
</template>

<script setup>
const props = defineProps(['str'])
</script>

<style>

</style>