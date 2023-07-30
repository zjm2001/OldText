import { defineStore } from 'pinia'
export const useUserStore = defineStore('user', {
    state: () => ({ username: '周家明' }),
    getters: {
    },
    actions: {
    
    },
  })
  //你可以认为 state 是 store 的数据 (data)， 
  //getters 是 store 的计算属性 (computed)，
  //而 actions 则是方法 (methods)。