<template>
  <div>
    <button @click="componentId='MyUser'">账号密码填写</button>
    <button  @click="componentId='MyInfo'">个人信息注册</button>
    <p>下面显示动态组件:</p>
    <div style="border:1px solid red">
    <!-- <MyInfo></MyInfo>
    <MyUser></MyUser> -->
    <component :is="componentId"></component>
    </div>
  </div>
</template>

<script>
import MyUser from '../components/MyUser.vue'
import MyInfo from '../components/MyInfo.vue'
export default {
    components:{
        MyUser,
        MyInfo
    },
    data() {
        return {
            componentId:'MyUser'
        }
    },

}
</script>

<style>

</style>