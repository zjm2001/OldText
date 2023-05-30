<template>
  <div id="app">
    <!-- 头部 -->
    <MyHeader  title="购物车案例" ></MyHeader>
    <!-- 内容部分 -->
    <div class="main">
      <MyGoods v-for="obj in list" :key="obj.id" :arr='obj'></MyGoods>
    </div>
    <MyFootre @keydata="fn" :arr="list"></MyFootre>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyGoods from './components/MyGoods.vue'
import MyFootre from './components/MyFooter.vue'
export default {
  components: {
    MyHeader,
    MyGoods,
    MyFootre
  },
  data() {
    return {
      list: [
        {
          goods_count:1,
          goods_img:'http://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          goods_name:'以每日hiash卡是开发合肥市返回话费卡沙发客服',
          goods_price:108,
          goods_state:true,
          id:1
        
        },
        {
          goods_count:1,
          goods_img:'http://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          goods_name:'以每日hiash卡是开发合肥市l返回话费卡硕大的见哦按讲道理沙发客服',
          goods_price:158,
          goods_state:true,
          id:2
        
        },
        {
          goods_count:1,
          goods_img:'http://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          goods_name:'以每日hiash卡是开发合肥市啥的卡号地块返回话费卡沙发客服',
          goods_price:138,
          goods_state:true,
          id:3
        
        },
        {
          goods_count:1,
          goods_img:'http://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          goods_name:'以每日hiash卡是开发合肥市返回话费卡沙发客服',
          goods_price:158,
          goods_state:true,
          id:4
        
        },
        {
          goods_count:1,
          goods_img:'http://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          goods_name:'以每日hiash卡是开发合肥的哈利开始导航卡申卡电话卡市返回话费卡沙发客服',
          goods_price:10,
          goods_state:true,
          id:5
        
        }
      ] // 商品所有数据
    }
  },
  methods: {
    // 接收子元素全选传递的值
    fn(bol){

    }

  },
  created(){
    // this.$axios({
    //   url: "/api/cart"
    // }).then(res => {
    //   console.log(res);
    //   if(res.data.list.length >0){
    //     this.list = res.data.list
    //   }
     
    // })
  }
}
</script>

<style scoped>
.main{
  padding: 45px 0;
}
</style>