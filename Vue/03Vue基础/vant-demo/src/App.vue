<template>
  <div>
 <van-button type="primary" @click="btn">主要按钮</van-button>
<van-button type="success">成功按钮</van-button>
<van-button type="default">默认按钮</van-button>
<van-button type="warning">警告按钮</van-button>
<van-button type="danger">危险按钮</van-button>

<van-action-sheet v-model="show" title="标题">
  <div class="content">内容</div>
</van-action-sheet>
<br>
<br>
<br>
<br>

<div class="main">
  <van-swipe-cell>
  <van-card
    num="2"
    price="2.00"
    desc="描述信息"
    title="商品标题"
    class="goods-card"
    thumb="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
  />
  <template #right>
    <van-button square text="删除" type="danger" class="delete-button" />
  </template>
</van-swipe-cell>
</div>

  </div>
</template>

<script>
export default {
data() {
  return {
    show:false,
  }
},
methods:{
  btn(){
    this.show=true
  }
}
}
</script>

<style scopend>
 .content {
    padding: 16px 16px 160px;
  }
  .goods-card {
    margin: 0;
    background-color: white;
  }

 .main .delete-button {
    height: 100%;
    }
</style>