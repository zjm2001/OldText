<template>
  <div>
    <h1>这是输入用户名组件</h1>
    <span>账号</span> <input type="text">
    <span>密码</span> <input type="password" name="" id="">
  </div>
</template>

<script>
export default {
    created(){
      console.log('组件创建了');
    },
    destroyed(){
      console.log('组件销毁了')
    },
    activated() {
        console.log('myuser组价激活了');
    },
    deactivated(){
        console.log('myuase组件失去激活了');
    }
}
</script>

<style>

</style>