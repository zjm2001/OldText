<template>
  <div id="app">
<myPr title='时令水果' price="200" intro="太贵了快来买"></myPr>
<myPr title='时令ll' price="20" intro="太贵了快来买"></myPr>
<myPr title='sdadad1' price="20" :intro="str"></myPr>
<myPr title='adsda' price="20" :intro="str"></myPr>

  </div>
</template>

<script>
//引入组件
import myPr from './components/MyProduct.vue'
export default {
data() {
  return {
    str:'我是变量我想咋写就咋写',
  }
},
components:{
  myPr    //  如果同名可直接写一个
}
}
</script>

<style>

</style>