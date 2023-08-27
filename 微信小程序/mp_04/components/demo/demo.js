// components/demo/demo.js
Component({
  options:{
    styleIsolation:"shared"
  },
  /**
   * 组件的属性列表
   */
  properties: {
    max:Number,
    min:{
      type:Number, // 数据类型
      value:10   //设置默认值
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    count:0,
    n1:0,
    n2:0,
    sum:0

  },

  /**
   * 组件的方法列表
   */
  methods: {
    fn(){
      if(this.data.count>=this.properties.max) return
      this.setData({
        count:this.data.count+1
      })
      this._mes()
    },
    _mes(){
      wx.showToast({
        title: 'count是:'+this.data.count,
        icon:'none'
      })
    }

  },
  observers:{
    'n1,n2':function(newN1,newN2){
      
    }
  }
})
