<template>
    <div class="my-header" :style="{backgroundColor: background, color}">{{title}}</div>
  </template>
  
  <script>
  export default {
    props: {
        background: String, // 外部插入此变量的值, 必须是字符串类型, 否则报错
        color: {
            type: String, // 约束color值的类型
            default: "#fff" // color变量默认值(外部不给 我color传值, 使用默认值)
        },
        title: {
            type: String,
            required: true // 必须传入此变量的值
        }
    }
}

  </script>
  
  <style lang="less" scoped>
    .my-header {
      height: 45px;
      line-height: 45px;
      text-align: center;
      background-color: #1d7bff;
      color: #fff;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 2;
    }
  </style>