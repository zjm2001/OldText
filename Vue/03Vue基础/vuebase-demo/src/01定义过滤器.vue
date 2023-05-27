<template>
  <div id="app">

  <h1>不使用过滤器:{{msg}}</h1>
  <h1>使用翻转过滤器:{{msg | rev}}</h1>
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
  }
}
}
</script>

<style>

</style>