<template>
  <div id="app">
    <Dog v-for="(obj,index) in list " :key="index" :imgstr="obj.dogImgUrl" :str="obj.dogName"  @namelist="fn"></Dog>
   <p v-for="(val,ind) in lovelist" :key="ind">{{ val }}</p>
  </div>
</template>

<script>
import Dog from './components/Dog1.vue'
export default {
  components: {
    Dog
  },
  data() {
    return {
      lovelist:[],
      list:[
    {
        dogImgUrl:
        "https://scpic.chinaz.net/files/pic/pic9/202003/zzpic23514.jpg",
        dogName: "博美",
    },
    {
        dogImgUrl:
        "https://scpic.chinaz.net/files/pic/pic9/202003/zzpic23514.jpg",
        dogName: "泰迪",
    },
    {
        dogImgUrl:
        "https://scpic.chinaz.net/files/pic/pic9/202003/zzpic23514.jpg",
        dogName: "金毛",
    },
    {
        dogImgUrl:
        "https://pic1.zhimg.com/80/v2-7ba4342e6fedb9c5f3726eb0888867da_1440w.jpg?source=1940ef5c",
        dogName: "哈士奇",
    },
    {
        dogImgUrl:
        "https://scpic.chinaz.net/files/pic/pic9/202003/zzpic23514.jpg",
                dogName: "阿拉斯加",
    },
    {
        dogImgUrl:
        "https://scpic.chinaz.net/files/pic/pic9/202003/zzpic23514.jpg",
                dogName: "萨摩耶",
    },
],

    }
  },
  methods:{
    fn(name){
      this.lovelist.push(name)
    }
  }

}
</script>

<style scoped>
#app{
  display: flex;
  flex-flow: wrap;
}
</style>