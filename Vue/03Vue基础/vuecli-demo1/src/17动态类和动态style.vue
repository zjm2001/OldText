<template>
  <div id="app">
    <button :class="{active:isok}" @click="btn">iiiasda</button>
    <button :style="{color:color}" @click="btn">iiiasda</button>
  </div>
</template>

<script>
export default {
data() {
  return {
    isok:false,
    color:'red',
  }
},
methods: {
  btn(){
    this.isok=!(this.isok)
  }
},
}
</script>

<style>
button{
  margin: 5px;
}
.active{
  background-color: pink;
}
</style>