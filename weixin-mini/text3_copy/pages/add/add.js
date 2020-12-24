var util=require('../../utils/util');
var Bmob = require('../../hydrogen-js-sdk-master/dist/Bmob-2.2.5.min')
Bmob.initialize("377f03e7575728bb", "123456");

Page({
  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    content: '',
  },
  formSubmit: function (e) {
    const query = Bmob.Query('data_j');
    console.log(e);
    query.set("name",e.detail.value.name)
    query.set("content",e.detail.value.content)
    query.save().then(res => {
      console.log(res)
        wx.redirectTo({
        url: '../index/index',
       });
    }).catch(err => {
      console.log(err)
    })
  }
})
// fail:function(err){
//   console.log(err)
//   console.log(2);
// }