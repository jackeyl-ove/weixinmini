
Page({
  data: {
    searchContent: '',
    list:[]
  },
  
/**
 * 跳转新增界面
 */
  add: function () {
    //wx.navigateTo 保留当前页面，跳转到应用内的某个页面
    wx.navigateTo({
      url: '../add/add',
    })
  },

/**
 * 跳转修改界面
 */
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
/**
 *搜索
 */
  formSubmit: function (e) { 
    //wx.cloud.database()云数据库
    //在云端接收notelist参数传给note
    const note=wx.cloud.database().collection('notelist');
    var that=this;
    //where指定查询条件，返回带新查询条件的新的集合引用(用get返回)
    note.where({
      name: wx.cloud.database().RegExp({
        //db.RegExp 方法来构造正则对象,从搜索栏中获取的value作为规则进行匹配。
        regexp: e.detail.value.searchContent,  
        //大小写不区分
        options: 'i',
      })
      //获取根据查询条件筛选后的记录数据
    }).get({
      success:function(res){
        console.log(res)
        that.setData({ //将数据从逻辑层发送到视图层
          list:res
        })
      }
    })
  }
,
/**
 * 删除
 */
  deletel: function (event) {
    const note = wx.cloud.database().collection('notelist');
    var that = this;
    note.doc(event.currentTarget.id).remove({
      success:function(res){
        console.log(res)
        note.get({
          success:function(res){
            console.log(res)
            wx.showToast({
              title: '成功',
              icon: 'success',
              duration: 2000
            })
            that.setData({
              list: res
            })
          }
        })
      }
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
/**
 * 获取记录渲染
 */
  onShow: function () {
    //.collection('notelist')
    //where().get() 获取符合条件的记录
    //doc().get() id的记录
    const note = wx.cloud.database().collection('notelist');
    var that=this;
    note.get({
      success:function(res){
        console.log(res);
        that.setData({
          list:res
        });
      },
      fail(err){
        console.log(err)
        console.log(1)
      }
    })
    
  },
  
  })