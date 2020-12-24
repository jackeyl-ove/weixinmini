// pages/add/add.js
var util=require('../../utils/util');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    content: '',
  },
  formSubmit: function (e) {
    const db = wx.cloud.database();//获取数据库的引用，不填就是默认环境。 {  env:'test'}
    const note=db.collection('notelist');//获取集合的引用
    console.log(e);
    note.add({
      data:{
        name:e.detail.value.name,
        content:e.detail.value.content,
      },
      success:function(res){
        //console.log(res);
        wx.navigateBack({
        url: '../pages/pages',
       });
      },
      fail:function(err){
        console.log(err)
        console.log(2);
      }
    })
  }
})