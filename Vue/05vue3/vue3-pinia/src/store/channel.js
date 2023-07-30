import axios from 'axios';
import { defineStore } from 'pinia';
import {ref} from 'vue';
export const useChannelStore = defineStore('channel',() => {
    //定义数据
    const list =ref([])
    const getList = async ()=>{
        const {data} =await axios.get('http://geek.itheima.net/v1_0/channels')
        list.value=data.data.channels
    }
    //操作数据
    //返回数据
    return {list,getList}
})