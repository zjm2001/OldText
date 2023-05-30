<template>
  <div id="h">
    <h1>我是comeHa组件</h1>
    <input type="text" v-model="list[0].goods_count">
    <button @click="list[0].goods_count++">点击加一</button>
  </div>
</template>

<script>
export default {
name:'ComeHa',
props:['list']
}
</script>

<style>

</style>