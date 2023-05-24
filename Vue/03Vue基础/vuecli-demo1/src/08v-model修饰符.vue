<template>
  <div>
<h1>数量为:{{num}}</h1>
<h1>去除首尾空格:{{str}}</h1>
<h1>change触发非input触发:{{intor}}</h1>
输入数量:<input type="text" v-model.number="num"/>
输入字符串:<input type="text" v-model.trim="str"/>
change触发非input触发 <input type="text" v-model.lazy="intor"/>
  </div>
</template>

<script>
export default {
data() {
  return {
    num:0,
    str:'',
    intor:''
  }
},
}
</script>

<style>

</style>