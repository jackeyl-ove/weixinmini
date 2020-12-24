// pages/change/change.js
var Bmob = require('../../hydrogen-js-sdk-master/dist/Bmob-2.2.5.min')
Bmob.initialize("377f03e7575728bb", "123456");

Page({
  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    content: '',
    id: '',
  },
  //修改数据
  formSubmit: function(e) {
    var id=this.data.id;
    const query = Bmob.Query('data_j');
    console.log(e);
    query.set('id', id)
    query.set('name',e.detail.value.change_name)
    query.set('content',e.detail.value.change_content)
    query.save().then(res => {
      console.log(res)
      wx.navigateBack({
         url: '../index/index',
       })
    }).catch(err => {
    console.log(err)
    })
   
    // note.doc(id).update({
    //   data:{
    //     name:e.detail.value.change_name,
    //     content:e.detail.value.change_content
    //   },
    //   success:function(res){
    //     console.log(res)
    //     
    //   }
    // })
  },
  onLoad: function(e) {
    const query = Bmob.Query('data_j');
    console.log(e);
    var that = this;
    query.get(e.id).then(res => {
      console.log(res)
      that.setData({
        id: res.objectId,
        name: res.name,
        content: res.content,
      })
      console.log(res)
    }).catch(err => {
      console.log(err)
    }) 
  }

})