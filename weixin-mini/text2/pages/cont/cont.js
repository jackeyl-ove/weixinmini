// pages/cont/cont.js
Page({
  data: {
    name:'',
    content:'',
    id:''
  },
  onLoad: function (e) {
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
  },
})