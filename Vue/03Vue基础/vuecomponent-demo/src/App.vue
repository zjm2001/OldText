<template>
  <div id="app">
    <div>
   <myPr v-for="(obj,index) in list" :key="obj.id" 
    :title="obj.proname" 
    :intro="obj.info" 
    :index="index"
    :price="obj.proprice"
    @subprice="fn"></myPr>
    </div>
 
    <List :arr="list"></List>
  </div>
</template>

<script>
//引入组件
import myPr from './components/MyProduct1.vue'
import List from './components/List.vue'
export default {
  data() {
    return {
      list: [
        { id: 1, proname: "超级好吃的棒棒糖", proprice: 18.8, info: '开业大酬宾, 全场8折' },
        { id: 2, proname: "超级好吃的大鸡腿", proprice: 34.2, info: '好吃不腻, 快来买啊' },
        { id: 3, proname: "超级无敌的冰激凌", proprice: 14.2, info: '炎热的夏天, 来个冰激凌了' },
      ],
    }
  },
  components: {
    myPr,    //  如果同名可直接写一个
    List
  },
  methods: {
    fn(index,price){
      //逻辑代码
      this.list[index].proprice -= price

    }
  }
}
</script>

<style>
 #app{
  display: flex;
 }
</style>