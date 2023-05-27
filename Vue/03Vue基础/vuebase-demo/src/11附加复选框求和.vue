<template>
  <div id="app">
     <span v-for="(item,index) in arr" :key="index">
      <input type="checkbox" v-model="arr1" :value="item" />
     {{item}}
    </span>
    <p>选中商品和为{{count}}</p>
  </div>
</template>

<script>
export default {
data() {
  return {
    arr:[9, 15, 19, 25, 29, 31, 48, 57, 62, 79, 87],
    arr1:[]
  }
},
computed:{
  count(){
    return this.arr1.reduce((sun,item)=>{ return sun+item},0)
  }
}
}
</script>

<style>

</style>