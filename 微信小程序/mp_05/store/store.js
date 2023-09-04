//类似于vuex
import {
  observable,
  action
} from 'mobx-miniprogram'
export const store = observable({
  numA: 1,
  numB: 20,
  //计算属性 get关键字
  get sun() {
    return this.numA + this.numB
  },
  //actions方法,用来修改store中的数据
  updateNum1: action(function(step){
    this.numA += step
  }),
  updateNum2: action(function(step){
    this.numB += step
  }),
})