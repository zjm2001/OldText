<template>
    <div class="my-product">
      <h3>标题: {{ title }}</h3>
      <p>价格: {{ price }}元</p>
      <p>{{ intro }}</p>
      <button @click="kanfn">价格减一</button>
    </div>
  </template>
  
  <script>
    import eventBus from '../eventBus/index.js'
  export default {
    props: ['title', 'price', 'intro','index'],
    methods:{
      //子组件改父亲传入的数据 不通知父亲,数据不一致性
      //vue规定 props '本身'只读属性不允许赋值
        // btn(){
        //    this.price= this.price-1
        // }
        kanfn(){
          this.$emit('subprice',this.index,1)
          eventBus.$emit('send',this.index,1)

        }
    }
  }
  </script>
  
  <style scoped>
  .my-product {
    width: 400px;
    padding: 20px;
    border: 2px solid #000;
    border-radius: 5px;
    margin: 10px;
  }
  </style>