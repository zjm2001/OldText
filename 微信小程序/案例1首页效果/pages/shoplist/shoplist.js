// pages/shoplist/shoplist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '',
    title: '',
    shopList: [],
    page: 1,
    pageSize: 10,
    total: 0,
    isok: false,
    isShow: false
  },

  getShopList(cb) {
    this.setData({
      isok: true
    })
    wx.showLoading({
      title: '数据加载中....',
    })
    wx.request({
      url: `https://applet-base-api-t.itheima.net/categories/${this.data.id}/shops`,
      method: 'get',
      data: {
        _page: this.data.page,
        _limit: this.data.pageSize
      },
      success: (res) => {
        // console.log(res);
        this.setData({
          shopList: [...this.data.shopList, ...res.data],
          total: res.header['X-Total-Count'] - 0
        })
      },
      complete: () => {
        wx.hideLoading()
        this.setData({
          isok: false
        })
        cb && cb()
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    if (this.data.isok) return
    this.setData({
      id: options.id,
      title: options.title
    })
    this.getShopList()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    wx.setNavigationBarTitle({
      title: this.data.title
    })

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
    //重置关键数据重新发起请求
    this.setData({
      page: 1,
      shopList: [],
      total: 0
    })
    //重新发起数据(传递一个数据过去让他知道是上拉刷新)
    this.getShopList(()=>{
      wx.stopPullDownRefresh()
    } )


  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    //判断是否加载结束
    if (this.data.page * this.data.pageSize >= this.data.total) {
      this.setData({
        isShow: true
      })
      return wx.showToast({
        title: '数据加载完毕',
        icon: 'none'
      })
    }
    this.setData({
      page: this.data.page + 1
    })
    this.getShopList()

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})