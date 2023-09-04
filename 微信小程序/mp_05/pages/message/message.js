// pages/message/message.js
import {createStoreBindings} from 'mobx-miniprogram-bindings'
import {store} from '../../store/store'
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  btnHandler(e){
console.log(e.target.dataset.step);
this.updateNum1(e.target.dataset.step)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.storeBindings= createStoreBindings(this,{
      store, //数据源
      fields:['numA','numB','sun'], //导入数据和计算属性
      actions:['updateNum1','updateNum2'], //导入actions
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    this.storeBindings.destoryStoreBindings()

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})