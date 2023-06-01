<template>
    <div id="container">
      <div id="app">
        <h3>案例：折叠面板</h3>
        <MyPoetry1>
         <template v-slot="scope">
          {{scope.row}}
         </template>  
        </MyPoetry1>
      </div>
    </div>
  </template>
  
  <script>
  import MyPoetry1 from '../components/MyPoetry1.vue'
  export default {
    components:{
        MyPoetry1
    }
  };
  </script>
  
  <style scoped>
  #app {
    width: 400px;
    margin: 20px auto;
    background-color: #fff;
    border: 4px solid blueviolet;
    border-radius: 1em;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
    padding: 1em 2em 2em;
  }
  </style>