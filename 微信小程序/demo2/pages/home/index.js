// pages/home/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:'llldalldsad',
    name:'LASFJKFAFA'

  },
  ongetAPI(){
    wx.request({
      url: 'https://applet-base-api-t.itheima.net/api/get',
      method:'GET',
      data:{
        name: 'zs',
        age: 22
      },
      success:(res)=>{
        //成功后的回调函数
        console.log(res);
      }
    })
  },
  postAPI(){
    wx.request({
      url: 'https://applet-base-api-t.itheima.net/api/post',
      method:'post',
      data:{
        name:'ls5555',
        gender:'男'
      },
      success:(res)=>{
        console.log(res);
      }
    })
  },
  fn(){
    wx.switchTab({
      url: '/pages/index/index',
    })
  },
  fn1(){
  wx.navigateTo({
    url: '/pages/logs/logs',
  })
  },
  fn3(){
    wx.navigateTo({
      url: '/pages/info/index?name=zjm111&age=20',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.postAPI()
    this.ongetAPI()

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})