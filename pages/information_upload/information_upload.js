const app = getApp();
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    name:'',
    stunumber:'',
    index: null,
    index1: null,
    index2: null,
    index3: null,
    index4: null,
    index5: null,
    picker1: ['男', '女'],
    picker2: ['2020级', '2019级','2018级','2017级'],
    picker3: ['计算机学院', '软件学院', '网络空间安全学院','材料学院','物理学院','机械学院'],
    picker4: ['网络空间安全学院'],
    picker5: ['网络空间安全专业'],
    picker6: ['是','否'],
    date: '2020-11-22',
    imgList: [],
    modalName: null,
    textareaAValue: '',
    textareaBValue: ''
  },
  PickerChange1(e) {
    console.log(e);
    this.setData({
      index1: e.detail.value
    })
  },
  PickerChange2(e) {
    console.log(e);
    this.setData({
      index2: e.detail.value
    })
  },
  PickerChange3(e) {
    console.log(e);
    this.setData({
      index3: e.detail.value
    })
  },
  PickerChange4(e) {
    console.log(e);
    this.setData({
      index4: e.detail.value
    })
  },
  PickerChange5(e) {
    console.log(e);
    this.setData({
      index5: e.detail.value
    })
  },
  PickerChange6(e) {
    console.log(e);
    this.setData({
      index6: e.detail.value
    })
  },
  
  DateChange(e) {
    this.setData({
      date: e.detail.value
    })
  },

  ChooseImage() {
    wx.chooseImage({
      count: 4, //默认9
      sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album'], //从相册选择
      success: (res) => {
        if (this.data.imgList.length != 0) {
          this.setData({
            imgList: this.data.imgList.concat(res.tempFilePaths)
          })
        } else {
          this.setData({
            imgList: res.tempFilePaths
          })
        }
      }
    });
  },
  ViewImage(e) {
    wx.previewImage({
      urls: this.data.imgList,
      current: e.currentTarget.dataset.url
    });
  },
  textareaAInput(e) {
    this.setData({
      textareaAValue: e.detail.value
    })
  },
  tabSelect1(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id-1)*60
    })
    wx.navigateTo({
      url: '../index/index'
    })
  },
  tabSelect2(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id-1)*60
    })
    wx.navigateTo({
      url: '../information_upload/information_upload'
    })
  },
  tabSelect3(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id-1)*60
    })
    wx.navigateTo({
      url: '../user/user'
    })
  },
  submit:function(e){
    console.log(e.detail.value);
    //表单数据
    var objData = e.detail.value;
    if (objData.date ){
      //异步方式储存表单数据
      wx.setStorage({
        key: 'date',
        data: objData.date,
      })
      // wx.setStorage({
      //   key: 'passWord',
      //   data: objData.passWord,
      // })
    }
  },
  textareaBInput(e) {
   
    const self = this
    const value = e.detail.value
    if (value) {
    wx.setStorageSync('reason', value)
  }
  },
  onShow() {
    const self = this
    let name = wx.getStorageSync('name')
    let stunumber = wx.getStorageSync('stunumber')
    let major = wx.getStorageSync('major')
    let phone = wx.getStorageSync('phone')
    let reason = wx.getStorageSync('reason')
    if (name) {
        self.data.name = name
        self.setData(self.data)
    } 
    if (stunumber) {
      self.data.stunumber = stunumber
      self.setData(self.data)
  } 
  if (major) {
    self.data.major = major
    self.setData(self.data)
} 
  if (phone) {
    self.data.phone = phone
    self.setData(self.data)
  } 
  if (reason) {
    self.data.reason = reason
    self.setData(self.data)
  } 
    // page载入的时候先读取一次，wx.getStorageSync('userText')里面有没有内容，有内容就填充，没有则什么也不做
},
onInputText(e) {
    const self = this
    const value = e.detail.value
    if (value) {
        wx.setStorageSync('name', value)
    } // 监听用户输入的信息，一旦有内容输入进去，就会使用wx.setStorageSync('userText', value)设置usertext这个key的值，使用wx.getStorageSync('userText')可以得到usertext这个key的值
},
onInputTextstunumber(e) {
  const self = this
  const value = e.detail.value
  if (value) {
      wx.setStorageSync('stunumber', value)
  } // 监听用户输入的信息，一旦有内容输入进去，就会使用wx.setStorageSync('userText', value)设置usertext这个key的值，使用wx.getStorageSync('userText')可以得到usertext这个key的值
},
onInputTextmajor(e) {
  const self = this
  const value = e.detail.value
  if (value) {
      wx.setStorageSync('major', value)
  } // 监听用户输入的信息，一旦有内容输入进去，就会使用wx.setStorageSync('userText', value)设置usertext这个key的值，使用wx.getStorageSync('userText')可以得到usertext这个key的值
},
onInputTextphone(e) {
  const self = this
  const value = e.detail.value
  if (value) {
      wx.setStorageSync('phone', value)
  } // 监听用户输入的信息，一旦有内容输入进去，就会使用wx.setStorageSync('userText', value)设置usertext这个key的值，使用wx.getStorageSync('userText')可以得到usertext这个key的值
},
})