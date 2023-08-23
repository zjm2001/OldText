// pages/数据绑定/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg: '我是数据11',
    count: 1,
    txt:null,
    isok:true,
    list: [{
        name: 'zjm',
        age: 20,
        sex: '男'
      },
      {
        name: 'zjm1',
        age: 25,
        sex: '男'
      },
      {
        name: 'zjm2',
        age: 222,
        sex: '女'
      },
      {
        name: 'zjm3',
        age: 23,
        sex: '男'
      },
      {
        name: 'zjm4',
        age: 223,
        sex: '男'
      }
    ],
    num: Math.random() * 10,
  },
  onclick(e) {
    console.log(e);
  },

  addCount() {
    this.setData({
      count: this.data.count + 1
    })
  },
  btn(e){
    console.log(e.target.dataset.info);
  },
 fn(e){
   console.log(e.detail.value);
   this.setData({
     txt:e.detail.value
   })
 },
 onisok(e){
   this.setData({
     isok:!this.data.isok
   })
 },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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