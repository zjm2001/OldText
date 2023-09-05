// custom-tab-bar/index.js
import {storeBindingsBehavior} from 'mobx-miniprogram-bindings'
import {store} from '../store/store'

Component({
  options:{
    styleIsolation:'shared'
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  behaviors:[storeBindingsBehavior],
  storeBindings:{
    store,//指定那个store
    fields:{
     sun:'sun',  //方法三
     activeTab:'activeTab'
    },
    actions:{
      updateActiveTab:'updateActiveTab'
    }
  },
  observers:{
    'sun':function(val){
      this,this.setData({
        'list[1].info':val
      })
    }
  },
  data: {
    list: [
      {
        "pagePath": "/pages/home/home",
        "text": "首页",
        "iconPath": "/images/tabs/home.png",
        "selectedIconPath": "/images/tabs/home-active.png"
      },
      {
        "pagePath": "/pages/message/message",
        "text": "消息",
        "iconPath": "/images/tabs/message.png",
        "selectedIconPath": "/images/tabs/message-active.png",
        info:2
      },
      {
        "pagePath": "/pages/contact/contact",
        "text": "联系我们",
        "iconPath": "/images/tabs/contact.png",
        "selectedIconPath": "/images/tabs/contact-active.png"
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange(event) {
      this.updateActiveTab(event.detail)
      wx.switchTab({
        url: this.data.list[event.detail].pagePath,
      })
    },
  }
})
