
<!-- <script>

export default {
  //执行时机比beforeCreate还要早,
  // setup函数中 , 获取不到this(undefined)
  // 数据和函数需要在setup最后return才能再模板中使用
  //可以通过setup语法糖简写
  setup() {
  
    console.log('我是serup函数');  //最先执行
    const message = '我是message'
    const fnMessage = () => {
      console.log(message);
    }
    return {
      message,
      fnMessage,
    }
  },
  beforeCreate() {
    console.log('我是beforecreate');
  }

}

</script> -->
<script setup>
 const message='我是语法糖写法'
 const fnMessage = () => {
      console.log(message);
    }
</script>
<template>
  <h1>{{ message }}</h1>
  <button @click="fnMessage">点击按钮</button>
</template>