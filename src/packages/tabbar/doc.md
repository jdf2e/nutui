# TabBar 标签栏

## 图标文本标签栏

```html
<nut-tabbar @tab-switch="tabSwitch1" :tabbar-list="tabList1"></nut-tabbar>
```

## 不同数量的标签栏
```html
<nut-tabbar @tab-switch="tabSwitch1" :tabbar-list="tabList2"></nut-tabbar>
<nut-tabbar @tab-switch="tabSwitch1" :tabbar-list="tabList3"></nut-tabbar>
<nut-tabbar @tab-switch="tabSwitch1" :tabbar-list="tabList4"></nut-tabbar>
<nut-tabbar @tab-switch="tabSwitch1" :tabbar-list="tabList5"></nut-tabbar>
```

## 固定底部，徽标提示
```html
<nut-tabbar @tab-switch="tabSwitch1" :tabbar-list="tabList6" :bottom="true"> </nut-tabbar>
```

```js
export default {
  data() {
    return {
      tabList6: [
        {
          tabTitle: '定位',
          curr: true,
          href:"http://nutui.jd.com/demo.html#/index",
          icon: "https://img14.360buyimg.com/imagetools/jfs/t1/118307/14/13356/6509/5f1f964eE49521709/01d7262779580eae.png",
          activeIcon: "https://img13.360buyimg.com/imagetools/jfs/t1/144737/16/3979/6780/5f1f964eE1ea6a85c/f0884d425c08f817.png"
        },
        {
          tabTitle: '收藏',
          curr: false,
          isDot:true,
          href:"http://nutui.jd.com/demo.html#/index",
          icon: "https://img12.360buyimg.com/imagetools/jfs/t1/121804/37/8253/8253/5f1f964cE49319b40/e1013b7ecccddb9d.png",
          activeIcon: "https://img14.360buyimg.com/imagetools/jfs/t1/147105/26/3919/8702/5f1f964cEa84ada31/49449b6837783b96.png"
        },
        {
          tabTitle: '任务',
          curr: false,
          num:9,
          href:"http://nutui.jd.com/demo.html#/index",
          icon: "https://img13.360buyimg.com/imagetools/jfs/t1/135718/27/5479/4044/5f1f964cE2a855efc/be6cf14f8508d995.png",
          activeIcon: "https://img11.360buyimg.com/imagetools/jfs/t1/134812/35/5525/4171/5f1f964cE87259d35/0c15597415912785.png"
        },
        {
          tabTitle: '我的',
          curr: false,
          num:100,
          href:"http://nutui.jd.com/demo.html#/index",
          icon: "https://img10.360buyimg.com/imagetools/jfs/t1/134791/32/5470/6758/5f1f964cEa5ffb2c4/a001fcc43aebd555.png",
          activeIcon: "https://img12.360buyimg.com/imagetools/jfs/t1/141460/22/3921/6967/5f1f964cE0f298049/1aa9437df6e5e747.png"
        }
      ]
    };
  },
  methods: {
    tabSwitch1: function(value, index) {
      console.log(value, index);
    }
  }
};
```

**重要提示**

组件中的 curr 属性相当于默认的选中tab，如果tabbar组件被应用于跳转路由，若tabbar没有按照预想的选中高亮的话，请注意，一般是因为重新渲染了tabbar组件导致的，解决方法如下：
- 方法1、通过监听切换事件 @tab-switch 改变传入数据 tabList 中想要高亮对象的 curr 值为 true；
- 方法2、把 tabbar 组件放在路由层级之外，令其独立出来，避免点击 tabbar 会重新渲染该组件；



### Prop

### nut-tabbar

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| tabbar-list | 渲染数据 | Array | []
| bottom | 是否固定在页面底部 |Boolean|false|
| replace | replace为true的时候，跳转url以替换的形式进行 |Boolean|false|

### tabbar-list

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| tabTitle | 标签页的标题 | String | --
| curr | 是否为选中的标签页 | Boolean | false
| icon | 标签页显示的图片 | String | --
| activeIcon | 标签页的活动状态显示的图片 | String | --
| href | 标签页的跳转链接 | String | --
| num |页签右上角的数字角标，超出99之后为省略号|Number|--
| isDot |页签右上角的角标，是否为小点|Boolean|false

### Event

| 事件名称 | 说明 | 回调参数 
|----- | ----- | ----- 
| tab-switch | 切换页签时触发事件 | 点击的索引值和对应的数据

