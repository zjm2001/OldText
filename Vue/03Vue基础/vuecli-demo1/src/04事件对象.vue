<template>
  <div>
    <a href="http://www.baidu.com" @click="one">百度</a>
    <br><br><br>
    <a href="http://www.taobao.com" @click="two(10,$event)">淘宝</a>
  </div>
</template>

<script>

export default {
   methods:{
    //事件触发无传值时可直接获取事件对象
    one(e){
      e.preventDefault()
    },
    //事件触发 传值,需要手动传入$event
    two(n,e){
      e.preventDefault()
      n+1
    }
   }
}
</script>

<style>

</style>