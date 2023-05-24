<template>
  <div>
    <p v-text="str"></p>
    <p v-html="str"></p>
   
  </div>
</template>

<script>
export default {
data() {
  return {
    str:' <a href="http://www.baidu.com">我是超链接吗</a>'
  }
},
}
</script>

<style>

</style>