<template>
  <div class="home">
    <!-- 这是一个轮播图的使用 -->
    <div class="sw">
      <van-swipe class="my-swipe" :autoplay="5000" indicator-color="white" lazy-render>
        <van-swipe-item v-for="obj in imglist" :key="obj.bannerId">
          <img :src="obj.pic" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 下面是推荐歌单的使用 -->
    <div class="tj">
      <van-row>
        <van-col span="24">
          <p>推荐歌单 ></p>
        </van-col>
      </van-row>
      <van-row class="tjcon">
        <van-col span="8" class="main" v-for="obj in recommendlist" :key="obj.id">
          <van-image :src="obj.picUrl" />
          <span>{{ obj.name }}</span>
        </van-col>
      </van-row>
    </div>
    <!-- 热门艺人的部分 -->
    <div class="rmyr">
      <van-row><van-col span="24">
          <p>热门歌手 ></p>
        </van-col></van-row>
      <van-row class="list" v-for="obj in artistslist" :key="obj.id">
        <van-col span="8">
          <img :src="obj.img1v1Url" alt="">
        </van-col>
        <van-col span="16">
          <span>{{ obj.name }}</span>

        </van-col>
      </van-row>
    </div>
    <!-- 热门歌曲部分 -->
    <div class="rmgq">
      <van-row><van-col span="24">
          <p>推荐歌曲 ></p>
        </van-col></van-row>
      <!-- <van-cell center v-for="obj in newMusiclist" :key="obj.id" :title="obj.name"
        :label="obj.song.artists[0].name + ' - ' + obj.name">
        <template #icon>
          <van-image  class="titleimg" :src="obj.picUrl" />
        </template>
        <template #right-icon>
          <van-icon name="play-circle-o" size="0.6rem" />
        </template>
      </van-cell> -->
      <SongItem v-for='obj in newMusiclist' :key="obj.id" :pic="obj.picUrl" :cname="obj.name" :id="obj.id" :uname="obj.song.artists[0].name"></SongItem>
    </div>
  </div>
</template>

<script>
import SongItem from '@/components/SongItem'
import { banner, recommend, artists, newMusic } from '@/api/home.js'
export default {
  data() {
    return {
      imglist: [], //轮播图推荐新碟上架
      recommendlist: [], //推荐歌单列表数据
      artistslist: [], //歌手列表5个
      newMusiclist: [],  //最新音乐列表
    }
  },
  components:{
    SongItem
  },
  async created() {
    const res = await banner({ type: 1 })    //获取数据barren
    this.imglist = res.data.banners
    const res1 = await recommend({ limit: 6 })  //获取6条数据
    console.log(res1);
    this.recommendlist = res1.data.result
    const res2 = await artists({ limit: 5 })  //获取6条数据
    this.artistslist = res2.data.artists
    const res3 = await newMusic({ limit: 20 })  //获取20条数据
    this.newMusiclist = res3.data.result
    // console.log(this.newMusiclist[1].song.artists[1].name);

  }

}
</script>

<style scoped>
.home {
  margin-top: 12px;
  margin-bottom: 1.3333rem;

}

.sw {
  width: 95%;
  /* height: 380.0025px; */
  margin: 0 auto;
  border-radius: .2667rem;
  overflow: hidden;
}

.sw img {
  width: 100%;
  height: 100%;
}

.tj {
  background-color: #fff;
  padding: .1333rem;
}

.tj p {
  font-size: .4rem;
  padding: .1333rem 0;
}

.tjcon span {
  display: inline-block;
  font-size: .2667rem;
  height: .7067rem;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

.tjcon img {
  border-radius: 2px;
  width: 100%;
  height: 100%;
}

.tjcon .main {
  padding: .1067rem .1333rem;
}

.rmyr {
  margin: .2667rem 0;
  background-color: #fff;
  padding-bottom: .5333rem;
}

.rmyr p {
  font-size: .4rem;
  padding: .1333rem;
}

.rmyr .list {
  background-color: rgba(241, 240, 240, 0.683);
  border-radius: 20px;
  height: 2rem;
  margin: .2667rem .4rem;
}

.rmyr img {
  margin: 0 .1333rem;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
}

.rmyr .list span {
  display: inline-block;
  font-size: .5rem;
  height: 100%;
  line-height: 1.3333rem;

}

.rmgq {
  margin: .2667rem 0;
  background-color: #fff;

}

.rmgq p {
  font-size: .4rem;
  padding: .1333rem;
}

.rmgq .titleimg {
  margin-left: -20px;
  width: 80px;
  height: 100%;
  padding: 0 .2rem;
}

.rmgq .custom-title {
  text-align: center;
}

.van-cell__label {}
</style>