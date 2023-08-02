<script setup>
import SonCom1 from './components/SonCom1.vue';
import SonCom2 from './components/SonCom2.vue';
import SonCom3 from './components/SonCom3.vue';
import { useUserStore } from '@/store/user.js'
import {ref} from 'vue';
const store = useUserStore()
import { useCountStore } from '@/store/count.js'
const CountStore=useCountStore()
import { useChannelStore } from '@/store/channel.js'
const ChannelStore=useChannelStore()
const data =ref('')

</script>
<template>
    <h1>我是app.vue顶层组件---{{store.username}} ----{{CountStore.count}} --双倍:{{CountStore.double}}</h1>
    <hr>
    <SonCom1></SonCom1>
    <SonCom2></SonCom2>
    <hr>
    <button @click="ChannelStore.getList">点击获取列表数据</button>
    <ul>
        <li v-for="item in ChannelStore.list" :key="item.id">{{item.name}}</li>
    </ul>

    <!-- 放置一个子组件 -->
      {{data}}
    <SonCom3 v-model="data"></SonCom3>
</template>
<style scoped></style>