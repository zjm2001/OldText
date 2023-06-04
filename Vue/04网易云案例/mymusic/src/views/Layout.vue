<template>
  <div>
    <!-- 头部的导航 -->
    <van-nav-bar :title="title" />
    <!-- 二级路由挂载点 -->
    <router-view></router-view>
    <!-- 底部导航条 -->
    <div class="bottom">
        <van-tabbar v-model="active">
  <van-tabbar-item name="home" icon="home-o" replace to="home">首页</van-tabbar-item>
  <van-tabbar-item name="search" icon="search" replace to="search">搜索</van-tabbar-item>
</van-tabbar>
    </div>
  
  </div>
</template>

<script>
export default {
  data() {
    return {
      active:0,
      title:this.$route.meta.title   //得到切换后路由里的title
    }
  },
  watch:{
    $route(){
      this.title=this.$route.meta.title
    }
  }

}
</script>

<style></style>