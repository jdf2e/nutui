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
          icon: require('../../assets/img/address.png'),
          activeIcon: require('../../assets/img/address-red.png')
        },
        {
          tabTitle: '收藏',
          curr: false,
          isDot:true,
          href:"http://nutui.jd.com/demo.html#/index",
          icon: require('../../assets/img/collection.png'),
          activeIcon: require('../../assets/img/collection-red.png')
        },
        {
          tabTitle: '任务',
          curr: false,
          num:9,
          href:"http://nutui.jd.com/demo.html#/index",
          icon: require('../../assets/img/task.png'),
          activeIcon: require('../../assets/img/task-red.png')
        },
        {
          tabTitle: '我的',
          curr: false,
          num:100,
          href:"http://nutui.jd.com/demo.html#/index",
          icon: require('../../assets/img/myicon.png'),
          activeIcon: require('../../assets/img/myicon-red.png')
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

