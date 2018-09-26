//app.js
const API = 'http://127.0.0.1:3000';

App({
  onLaunch: function () {
    wx.request({
      url: `${API}/api/test2`, //仅为示例，并非真实的接口地址
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data);
      }
    })
  },
  globalData: {
    userInfo: null
  }
})
