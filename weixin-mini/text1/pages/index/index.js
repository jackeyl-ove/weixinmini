//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    content:[
      {
        img:'../../img/pic1.jpg',
        title:'我和我的祖国',
        time:'2019年9月30日',
        id: 1
      },
      {
        img:'../../img/pic2.jpg',
        title:'哪吒：魔童降临',
        time:'2018年7月28日',
        id: 2
      },
      {
        img:'../../img/pic3.jpg',
        title:'小Q',
        time:'2019年9月20日',
        id: 3
      },
      {
        img:'../../img/pic4.jpg',
        title:'攀登者',
        time:'2019年9月30日',
        id: 4
      },
      {
        img:'../../img/pic5.jpg',
        title:'罗小黑战记',
        time:'2019年9月07日',
        id: 5
      },
    ],
  },
  tologs: function (e) {
    var id = e.currentTarget.id;
    wx.navigateTo({
      url: '../logs/logs?id=' + id,
    })
  },
})
