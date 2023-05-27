<template>
    <ul class="my-product">
        <li v-for="(item, index) in arr" :key="index">
            <span>{{ item.proname }}</span>
            <span>{{ item.proprice }}</span>
        </li>
    </ul>
  </template>
  
  <script>
  import eventBus from '../eventBus/index.js'
  export default {
    props: ['arr'],
    created() {
        eventBus.$on('send',(index,price)=>{
            console.log(index,price);
            this.arr[index].proprice=this.arr[index].proprice-price.toFixed(2)

        })
    },
  }
  </script>
  
  <style scoped>
  .my-product {
    width: 400px;
    height: 300px;
    padding: 20px;
    border: 2px solid #000;
    border-radius: 5px;
    margin: 10px;
  }
  </style>