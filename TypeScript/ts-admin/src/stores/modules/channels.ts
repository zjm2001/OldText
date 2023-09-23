import { defineStore } from 'pinia'
import { ref } from 'vue'
import $http from 'axios';
export const useChannelsStore = defineStore('channels', () => {
    const str = ref<string>('zxaacadad')
    const list = ref<{
        id: number;
        name: string; }[]>()
    type Chan = {
        data: {
            channels: {
                id: number,
                name: string
            }[]
        },
        message: string
    }
    const getAPI = async () => {
        const res = await $http.get<Chan>('http://geek.itheima.net/v1_0/channels')
        // console.log(res.data.data.channels);
        list.value = res.data.data.channels
        // console.log(list.value);
        
    }
    return { str, getAPI,list }
})