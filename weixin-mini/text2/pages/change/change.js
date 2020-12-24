// pages/change/change.js
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
    const note=wx.cloud.database().collection("notelist");
    console.log(id);
    note.doc(id).update({
      data:{
        name:e.detail.value.change_name,
        content:e.detail.value.change_content
      },
      success:function(res){
        console.log(res)
        wx.navigateBack({
           url: '../index/index',
        })
      }
    })
  },
  onLoad: function(e) {
    const note = wx.cloud.database().collection("notelist");
    console.log(e);
    var that = this;
    note.doc(e.id).get({
      success:function(res){
        console.log(res)
        that.setData({
        id: res.data._id,
        name: res.data.name,
        content: res.data.content,
       })
      }
    })
     
  }

})