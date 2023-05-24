<template>
  <div>
 <p>购买商品数量{{ count }}</p>
 <!-- 1.绑定事件少量代码 -->
 <button v-on:click="count+=1">点击加一</button>
 <!-- 2.绑定methods函数名 -->
 <button v-on:click="addFn">methods函数名+1</button>
 <!-- 3.带参数的绑定函数名 -->
 <button v-on:click="addcountFn(5)">methods函数名+5</button>
 <!-- 4.简写方式 -->
 <button @click="count-=1">减1</button>
  </div>
</template>

<script>
export default {
 data(){return{count:1 }},
 methods:{
  addFn(){  this.count++ },
  addcountFn(n){ this.count+=n }
 }
}
</script>

<style>

</style>