// components/demo4/demo4.js
const myBehavior=require('../../behavior/my-behavior')
Component({
  behaviors:[myBehavior],
  /**
   * 组件的属性列表
   */
  properties: {
    count:Number  //接收传递的数字
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    add(){
      this.setData({
        count:this.properties.count+1
      })
      this.triggerEvent('addBtn',{value:this.properties.count})
    },
  }
})
