<template>
  <div>
    <van-search v-model="value" placeholder="请输入搜索关键词" shape="round" class="search" @input="onInput" />
    <div class="search_wrap" v-if="list.length === 0">
      <p class="hot_title">热门搜索</p>
      <div class="hot_name_wrap">
        <span class="hot_item" v-for="(obj, index) in datalist" :key="index" @click="fn(obj.first)">{{ obj.first }}</span>
      </div>
    </div>
    <div class="search_wrap main" v-else>
      <p class="hot_title">搜索结果</p>
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <!-- <van-cell center v-for="obj in list" :key="obj.id" :title="obj.name" :label="obj.ar[0].name + ' - ' + obj.name">
          <template #icon>
            <van-image class="titleimg" :src="obj.al.picUrl" />
          </template>
          <template #right-icon>
            <van-icon name="play-circle-o" size="0.6rem" />
          </template>
        </van-cell> -->
        <SongItem v-for="obj in list" :key="obj.id" :pic="obj.al.picUrl" :cname="obj.name" :id="obj.id" :uname="obj.ar[0].name"></SongItem>
      </van-list>
    </div>
  </div>
</template>

<script>
import SongItem from '@/components/SongItem'
import { hotSearch, searchResult } from '@/api/serch.js'
export default {
  data() {
    return {
      value: '',
      loading: false,  //加载状态
      finished: false,   //未加载全部
      datalist: [], //热词搜索
      list: [],
      page: 1,  //当前搜索结果的页码
      timer:null,  //输入框防抖定时器
    }
  },
  components:{
    SongItem
  },
  async created() {
    const res = await hotSearch()
    // console.log(res.data.result);
    this.datalist = res.data.result.hots

  },
  methods: {
    async getListFn() {
      return await searchResult({
        keywords: this.value,
        limit: 10,
        offset: (this.page - 1) * 10
      })
    },
    //热搜关键词点击事件
    async fn(str) {
      this.page=1
      this.value = str
      // console.log(this.getListFn());
      const res = await this.getListFn()
      // console.log(res);
      this.list = res.data.result.songs
      //  console.log(this.list[0].al.picUrl);

    },
    //搜索框输入为
    async onInput() {
      //需要防抖功能
      if(this.timer) clearTimeout(this.timer)
      this.timer=setTimeout( async ()=>{
        this.page=1
      if (this.value.length === 0) {
        this.list = []   //没有长度直接return
        return
      }
      const res = await this.getListFn()
      if (res.data.result.songs === undefined) {
        this.list=[]
        return  
      }
      // console.log(res);
      this.list = res.data.result.songs
      },900)
   
      
    },
    //加载更多事件
    async onLoad() {
      // 触底事件
      //页码添加   网络请求成功后lod改为false
      this.page++;
      const res = await this.getListFn()
      if (res.data.result.songs === undefined) {
        this.list=[]
        this.finished = true   
        return
      }
      //  console.log(res);
      this.list = [...this.list, ...res.data.result.songs]
      this.loading = false   //数据加载完毕保证下次还能触发
     
    }
  }

}
</script>

<style scopend>
/* 搜索容器的样式 */
.search_wrap {
  padding: 0.266667rem;
}

/*热门搜索文字标题样式 */
.hot_title {
  font-size: 0.32rem;
  color: #666;
}

/* 热搜词_容器 */
.hot_name_wrap {
  margin: 0.266667rem 0;
}

/* 热搜词_样式 */
.hot_item {
  display: inline-block;
  height: 0.853333rem;
  margin-right: 0.213333rem;
  margin-bottom: 0.213333rem;
  padding: 0 0.373333rem;
  font-size: 0.373333rem;
  line-height: 0.853333rem;
  color: #333;
  border-color: #d3d4da;
  border-radius: 0.853333rem;
  border: 1px solid #d3d4da;
}

.search {
  background-color: rgba(243, 243, 243, 0.82);

}

.main {
  margin-bottom: 1.3333rem;
}

.titleimg {
  margin-left: -20px;
  width: 80px;
  height: 100%;
  padding: 0 .2rem;
}

.custom-title {
  text-align: center;
}
</style>