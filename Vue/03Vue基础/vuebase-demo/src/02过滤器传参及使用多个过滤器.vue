<template>
  <div id="app">

  <h1>不使用过滤器:{{msg}}</h1>
  <!-- 多个过滤器使用 -->
  <h1>使用翻转过滤器:{{msg | rev("|") | toup }}</h1>
  <h1>不使用大写过滤器:{{str}}</h1>
  <h1>使用大写过滤器 :  {{str | toup}}</h1>

  </div>
</template>

<script>
export default {
data() {
  return {
    msg:'hello',
    str:'hakshdkjahkdhakhdkahsd'
  }
},
filters:{
  toup(val){
    return val.toUpperCase()
  },
  //过滤器传参
  rev(val,s){
    return val.split('').reverse().join(s)
  }
}
}
</script>

<style>

</style>