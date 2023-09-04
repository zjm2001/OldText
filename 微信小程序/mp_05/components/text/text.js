// components/text/text.js
import {storeBindingsBehavior} from 'mobx-miniprogram-bindings'
import {store} from '../../store/store'
Component({
  behaviors:[storeBindingsBehavior],
  storeBindings:{
    store,//指定那个store
    fields:{
     numA:()=>store.numA, //绑定字段方法一
     numB:(store)=> store.numB, //方法二
     sun:'sun'  //方法三
    },
    actions:{
      updateNum2:'updateNum2'
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {

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
    btnHandler(e){
      console.log(e.target.dataset.step);
      this.updateNum2(e.target.dataset.step)
    }

  }
})
