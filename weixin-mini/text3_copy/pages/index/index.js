// //index.js
// //获取应用实例
var Bmob = require('../../hydrogen-js-sdk-master/dist/Bmob-2.2.5.min')
Bmob.initialize("377f03e7575728bb", "123456");

Page({
  data: {
    searchContent: '',
    time: '',
    list:[]
  },
  
// /**
//  * 跳转新增界面
//  */
  add: function () {
    //wx.navigateTo 保留当前页面，跳转到应用内的某个页面
    wx.navigateTo({
      url: '../add/add',
    })
  },

// /**
//  * 跳转修改界面
//  */
  change: function (e) {
    console.log(e)
    //wx.navigateTo 保留当前页面，跳转到应用内的某个页面
    wx.navigateTo({
      url: '../change/change?id='+e.currentTarget.id,
    })
  },
  check :function(e) {
    console.log(e);
    wx.navigateTo({
      url: '../cont/cont?id='+e.currentTarget.id,
    })
  },

  formSubmit: function (e) {
    const query = Bmob.Query('data_j');
    var that=this;
    console.log(e)
    if(query.equalTo("name","==", e.detail.value.searchContent)){
    query.find().then(res => {
    console.log(res)
      that.setData({
        list:res
      });
    })}
    // else {
    //   query.find().then(res => {
    //   console.log(res)
    //   that.setData({
    //     list:res
    //   });
    // });
    // }
    //where指定查询条件，返回带新查询条件的新的集合引用(用get返回)
    // query.where({
    //   name: Bmob.Query.RegExp({
    //     //db.RegExp 方法来构造正则对象,从搜索栏中获取的value作为规则进行匹配。
    //     regexp: e.detail.value.searchContent,  
    //     //大小写不区分
    //     options: 'i',
    //   })
    //   //获取根据查询条件筛选后的记录数据
    // }).get({
    //   success:function(res){
    //     console.log(res)
    //     that.setData({ //将数据从逻辑层发送到视图层
    //       list:res
    //     })
    //   }
    // })
  },
// /**
//  * 删除
//  */
  deletel: function (event) {
    const query = Bmob.Query('data_j');
    var that=this
    console.log(event)
    query.destroy(event.currentTarget.id).then(res => {
      console.log(res)
      query.find().then(res => {
        console.log(res)
        that.setData({
          list:res
        });
      });
    }).catch(err => {
      console.log(err)
    })
  },
  //回到顶部
  goTop: function (e) {  // 一键回到顶部
    //将页面滚动到目标位置
    if (wx.pageScrollTo) {
      wx.pageScrollTo({
        //滚动到页面的目标位置，单位 px
        scrollTop: 0
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
      })
    }
  },
// /**
//  * 获取记录渲染
//  */
  onShow: function () {
    //.collection('notelist')
    //where().get() 获取符合条件的记录
    //doc().get() id的记录
    const query = Bmob.Query('data_j');
    var that=this;
    query.find().then(res => {
      console.log(res)
      that.setData({
        list:res
      });
    });
  },
  onLoad:function(e){
    console.log(e);
  }

  })
  
// /*Page({
//   data: {
//     oid:''
//   },
//   tianjia: function (e) {
//     const query = Bmob.Query('data_j');
//     var data = this.data.oid
//     query.set("name","Bmob")
//     query.set("cover","后端云")
//     query.save().then(res => {
//       console.log(res)
//       this.setData({
//         data: res.objectId
//       })
//       data = res.objectId;
//       this.data.oid = res.objectId;
//       console.log(res.objectId)
//       console.log(data)
//       console.log(this.data.oid)
//     }).catch(err => {
//       console.log(err)
//     })
//   },

//   xiugai : function(e){
//      const query = Bmob.Query('data_j');
//       query.set('id', this.data.oid) //需要修改的objectId
//       query.set('name', '我改啦')
//       query.save().then(res => {
//       console.log(res)
//       }).catch(err => {
//       console.log(err)
//       })
//   }
// })
// */
