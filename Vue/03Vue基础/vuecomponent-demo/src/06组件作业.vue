<template>
  <div id="app">
   <Lis v-for="(obj,ind) in goodsArr" :key="ind" @strinpnut="fn1" :uname="obj.goodsName" :num="obj.count" :index="ind"  ></Lis>
  </div>
</template>

<script>
import Lis from './components/Lis.vue'
export default {
components:{
  Lis,
},
data() {
  return {
    goodsArr: [
    {
        count: 0,
        goodsName: "Watermelon"
    }, {
        count: 0,
        goodsName: "Banana"
    }, {
        count: 0,
        goodsName: "Orange"
    }, {
        count: 0,
        goodsName: "Pineapple"
    }, {
        count: 0,
        goodsName: "Strawberry"
    }
]
  }
},
methods:{
  fn1(index,num){
    // console.log(index,num);
    this.goodsArr[index].count=num
  }
}
}
</script>

<style>

</style>