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
  <hr>
  <h1>下面是具名插槽的使用</h1>
 <UserName></UserName>
  <hr>
  <h1>下面是作用域插槽的使用</h1>
  <UserSlot1></UserSlot1>
  <hr>
  <h1>下面是作用域插槽使用场景</h1>
  <UseTable></UseTable>
  <hr>
  <h1>下面是自定义指令</h1>
  <UseDirective></UseDirective>
  </div>
</template>

<script>
import UserDy from './view/UserDy.vue'
import UserDy1 from './view/UserDy1.vue'
import UserSlot from './view/UserSlot.vue'
import UserSlot1 from './view/UserSlot1.vue'
import UseTable from './view/UseTable.vue'
import UserName from './view/UserName.vue'
import UseDirective from './view/UseDirective.vue'

export default {
components:{
    UserDy,
    UserDy1,
    UserSlot,
    UserSlot1,
    UseTable,
    UserName,
    UseDirective

},

}
</script>

<style scoped>

</style>