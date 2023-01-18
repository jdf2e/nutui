
const config = require('../../nutui.config')
Page({
    data:{
        nav:config
    },
    go:function(e){
        console.log(e.currentTarget)
        let path = e.currentTarget.dataset.path
        wx.navigateTo({
            url: `/pages/basic/pages/${path.toLowerCase()}/index`,
          })
    },

    onLoad:function(){
      console.log(config)
    }
})
