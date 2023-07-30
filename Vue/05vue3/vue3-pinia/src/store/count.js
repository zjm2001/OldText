import { defineStore } from 'pinia'
import {ref,computed} from 'vue'
export const useCountStore = defineStore('count', () => {
    const count = ref(1000)  //  ref() 就是 state 属性
    const double=computed(()=>count.value*2)  //  computed() 就是 getters
    const addCount= ()=>{count.value++}  //function() 就是 actions
    const delCount= ()=>{count.value--}
    return { count, addCount,delCount,double }   //必须return出去
  },{ persist: true,})

