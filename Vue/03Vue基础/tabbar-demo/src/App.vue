<template>
  <div id="app">
    <!-- 头部组件 -->
    <MyHeader title="tabbar头部"></MyHeader>
    <div class="main">
      <keep-alive>
        <component :is="componentId"></component>
      </keep-alive>
    </div>

    <MyTabBar :arr="tabList" @indexstr="fn"></MyTabBar>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader'
import MyTabBar from './components/MyTabBar.vue'
import MyGoodsList from './views/MyGoodsList.vue'
import MyGoodsSearch from './views/MyGoodsSearch.vue'
import MyUserInfo from './views/MyUserInfo.vue'
export default {
  components: {
    MyHeader,
    MyTabBar,
    MyGoodsList,
    MyGoodsSearch,
    MyUserInfo

  },
  data() {
    return {
      componentId: 'MyGoodsList',
      tabList: [
        {
          iconText: "icon-shangpinliebiao",
          text: "商品列表",
          componentName: "MyGoodsList"
        },
        {
          iconText: "icon-sousuo",
          text: "商品搜索",
          componentName: "MyGoodsSearch"
        },
        {
          iconText: "icon-user",
          text: "我的信息",
          componentName: "MyUserInfo"
        }
      ]
    }
  },
  methods: {
    //子组件点击了那个底部导航返回索引
    fn(str){
      // console.log(str);
      this.componentId=str

    }
  },

}
</script>

<style scoped>
.main{
  padding-top: 45px;
  padding-bottom: 51px;
}
#app{
  /* width: 1200px;
  margin: 0 auto; */
}
</style>