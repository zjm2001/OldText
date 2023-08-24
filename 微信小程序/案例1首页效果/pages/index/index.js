// index.js
// 获取应用实例

Page({
  data: {
    swiperList:[],
    categoriesList:[]
  
  },
 
  onLoad() {
    this.getSwiperList()
    this.getCategorieslist()
   
  },
  //获取轮播图的请求
  getSwiperList(){
      wx.request({
        url: 'https://applet-base-api-t.itheima.net/slides',
        method:'GET',
        success:(res)=>{
          // console.log(res);
          this.setData({
            swiperList:res.data
          })
        }
      })
  },
  getCategorieslist(){
    wx.request({
      url: 'https://applet-base-api-t.itheima.net/categories',
      method:'get',
      success:(res)=>{
        // console.log(res);
        this.setData({
          categoriesList:res.data
        })
      }
    })
  },

})
