<template>
  <div id="app">
    <h1>动态组件使用</h1>
    <UserDy></UserDy>
    <hr>
    <h1>组件缓存</h1>
    <UserDy1></UserDy1>
    <hr>
    <h1>下面是组件插槽的使用</h1>
  <UserSlot></UserSlot>
  </div>
</template>

<script>
import UserDy from './view/UserDy.vue'
import UserDy1 from './view/UserDy1.vue'
import UserSlot from './view/UserSlot.vue'
export default {
components:{
  UserDy,
  UserDy1,
  UserSlot
},

}
</script>

<style scoped>

</style>