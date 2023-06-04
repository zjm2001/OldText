<template>
  <div>
    <div class="footer_wrap">
      <span @click="btn('/find', 'Find')">发现音乐</span>
      <span @click="btn('/my', 'My')">我的音乐</span>
      <span @click="onebtn()">朋友-德哈卡水电卡</span>
      <span @click="twobtn()">朋友-哈斯复活卡换肤</span>

      <!-- <a href="#/find">发现音乐</a>
      <a href="#/my">我的音乐</a>
      <a href="#/part">朋友</a> -->
    </div>
    <div class="top">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    btn(str, namess) {
      // 方法一使用path跳转
      this.$router.push({
        // path:str
        name: namess

      })
    },
    onebtn() {
      this.$router.push({
        name: 'Part',
        params:{
          username:'第一个名字'
        }
      })
    },
    twobtn() {
      this.$router.push({
        name: 'Part',
        query:{
          name:'第二个名字'
        }
      })
    }
  }
};
</script>

<style scoped>
.footer_wrap {
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  width: 100%;
  text-align: center;
  background-color: #333;
  color: #ccc;
}

.footer_wrap span {
  flex: 1;
  text-decoration: none;
  padding: 20px 0;
  line-height: 20px;
  background-color: #333;
  color: #ccc;
  border: 1px solid black;
}

.footer_wrap span:hover {
  background-color: #555;
}

.top {
  padding-top: 62px;
}

.footer_wrap .router-link-active {
  color: white;
  background: black;
}
</style>