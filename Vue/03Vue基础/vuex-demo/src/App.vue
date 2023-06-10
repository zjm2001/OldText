<template>
  <div>
    <h1>原始获取{{$store.state.count}}</h1>
    {{count}}
    {{sum}}
    <button @click="btn1()">count+1</button>
    <button @click="btn2()">count+10</button>
    <button @click="addCount">辅助函数加1</button>
    <button @click="btn3">异步调用</button>
    <button @click="btn4">异步调用传参</button>
    <button @click="getAsy1(11)">异步辅助函数调用传参</button>
    <div>{{ $store.getters.filterList  }}</div>
    <div>{{ filterList }}</div>
    <p>用户token {{ $store.state.user.token }}</p>
    <p>网站名称 {{ $store.state.setting.name }}</p>
    <p>用户token {{ token }}</p>
    <p>网站名称 {{ name }}</p>
  </div>
</template>

<script>
import {mapState,mapMutations,mapActions,mapGetters  } from "vuex";
export default {
computed:{
  ...mapState(['count','sum']),
  ...mapGetters(['filterList','token', 'name'])
},
methods:{
  btn1(){
    this.$store.commit('addCount')  // 直接调用mutations
  },
  btn2(){
    this.$store.commit('addCount1',10)  // 直接调用mutations
  },
  btn3(){
    this.$store.dispatch('getAsy')
  },
  btn4(){
    this.$store.dispatch('getAsy1',20)
  },
  ...mapMutations(['addCount']),
  ...mapActions(['getAsy','getAsy1'])
}
}
</script>

<style>

</style>