var Bmob = require('../../hydrogen-js-sdk-master/dist/Bmob-2.2.5.min')
Bmob.initialize("377f03e7575728bb", "123456");

Page({
  data:{
    name:'',
    content:'',
    id:''
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