<template>
    <div id="container">
      <div id="app">
        <h3>案例：折叠面板</h3>
        <MyPoetry>
        <h3>展示第一个</h3>
        <input type="text">
        </MyPoetry>
        <MyPoetry>
             <h3>展示第二个</h3>
             <button>我是按钮</button>
        </MyPoetry>
        <MyPoetry></MyPoetry>
      </div>
    </div>
  </template>
  
  <script>
  import MyPoetry from '../components/MyPoetry.vue'
  export default {
    components:{
        MyPoetry
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