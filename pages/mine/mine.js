// pages/mine/mine.js

// 定义几个变量: 手指起始的坐标+移动坐标+移动的距离
let startY = 0
let moveY = 0
let moveDistance = 0

Page({

  /**
   * 页面的初始数据
   */
  data: {
    coverTransform: 'translateY(200rpx)', // 移动距离
    coverTransition: '' // 过渡效果
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  // 3个事件处理: 事件对象event
  handleTouchStart(event) {
    // 更新过渡状态: 重置
    this.setData({
      coverTransition: ''
    })

    // console.log(event);
    // console.log('开始Start');
    startY = event.touches[0].clientY
    // console.log('初始的坐标：', startY);


  },
  handleTouchMove(event) {
    // console.log('移动Move');
    moveY = event.touches[0].clientY
    moveDistance = moveY - startY
    // console.log('移动的距离：', moveDistance);

    // 距离小于0 停止移动
    if (moveDistance <= 0) {
      return;
    }
    if (moveDistance >= 80) {
      moveDistance = 80
    }

    // 动态更新coverTransform的状态值
    this.setData({
      coverTransform: `translateY(${moveDistance}rpx)`
    })

  },
  handleTouchEnd() {
    // console.log('结束End');
    // 动态更新coverTransform的状态值
    this.setData({
      coverTransform: `translateY(0rpx)`,
      coverTransition: 'transform 1s linear' // 平滑过渡
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