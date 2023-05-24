<template>
  <div>
  <h1 v-show="isOk">我是v-show显示的数字</h1>  
  <h1 v-if="isOk">我是v-if显示的数字</h1>
  <h1 v-if="key">我要吃饭吗</h1>
  <h1 v-else>我吃了饭不吃了</h1>
   
  </div>
</template>

<script>
export default {
data() {
  return {
   isOk:true,
   key:false
  }
},
}
</script>

<style>

</style>