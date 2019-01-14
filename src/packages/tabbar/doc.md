# Tabbar 标签栏

## 基本用法

```html
<nut-tabbar 
  @tab-switch="tabSwitch1" 
  type="card"  
  :tabbarList="tabList1"
></nut-tabbar>
```
```javascript
export default {
  data() {
    return {
      tabList1:[
        {
          'tabTitle':'日用品',
          'curr':true,
          'icon':'http://img13.360buyimg.com/uba/jfs/t30331/209/562746340/2190/6619973d/5bf763aaN6ff02099.jpg',
          'activeIcon':'http://img20.360buyimg.com/uba/jfs/t28675/125/569589124/2710/fe1b0e7c/5bf79218Nbc49fc24.jpg'
        },
        {
          'tabTitle':'服饰',
          'curr':false,
          'icon':'http://img13.360buyimg.com/uba/jfs/t27280/289/2061314663/2392/872e32ff/5bf76318Ndc80c1d8.jpg',
          'activeIcon':'http://img14.360buyimg.com/uba/jfs/t28468/128/565494642/3313/ce508dd6/5bf79214Nab2a3076.jpg'
        },
        {
          'tabTitle':'娱乐',
          'curr':false,
          'icon':'http://img10.360buyimg.com/uba/jfs/t26779/215/2118525153/2413/470d1613/5bf767b2N075957b7.jpg',
          'activeIcon':'http://img11.360buyimg.com/uba/jfs/t27370/260/2117900302/3274/bd097e85/5bf7921bNafc526e2.jpg'
        }
      ]
    };
  },
  methods: {
      tabSwitch1:function(value,index){
        console.log(index);
      },
  }
```

带有tips的文本标签栏

```html
<nut-tabbar 
  @tab-switch="tabSwitch2" 
  type="card" 
  :tabbarList="tabList2"
>
</nut-tabbar>
```
```javascript
export default {
  data() {
    return {
      tabList2:[
        {
          'tabTitle':'百度',
          'curr':false,
          'icon':'',
          'num':5,
        },
        {
          'tabTitle':'京东',
          'curr':true,
          'icon':''
        },
        {
          'tabTitle':'知乎',
          'curr':false,
          'icon':'',
        }
      ]
    };
  },
  methods: {
      tabSwitch2:function(value,index){
        console.log(value);
      }
  }
};
```

固定底部，可跳转页面

```html
<nut-tabbar 
  @tab-switch="tabSwitch3" 
  :tabbarList="tabList3" 
  :bottom="true"
>
</nut-tabbar>
```

```javascript
export default {
  components: {
    [tabbar.name]: tabbar,
  },
  data() {
    return {
      tabList3:[
        {
          'tabTitle':'主页',
          'curr':true,
          'icon':'http://img13.360buyimg.com/uba/jfs/t1/29316/38/1115/3203/5c0f3d61E35d0c7da/9e557f2cb5c9dab6.jpg',
          'activeIcon':'http://img20.360buyimg.com/uba/jfs/t1/9996/36/8646/4833/5c0f3d61E7c1b7e0f/c98ad61124172e93.jpg',
          'href':'###'
        },
        {
          'tabTitle':'分类',
          'curr':false,
          'icon':'http://img12.360buyimg.com/uba/jfs/t1/25443/23/1062/4600/5c0f3d61E2e9f1360/c9b3421fe18614e2.jpg',
          'activeIcon':'http://img20.360buyimg.com/uba/jfs/t1/19241/12/1048/8309/5c0f3d61E17ed5a56/c3af0964cade47f8.jpg',
          'href':'###'
        },
        {
          'tabTitle':'发现',
          'curr':false,
          'icon':'http://img13.360buyimg.com/uba/jfs/t1/10361/35/4713/4643/5c0f3d62E437a3c94/273fd0fb90798f03.jpg',
          'activeIcon':'http://img14.360buyimg.com/uba/jfs/t1/26604/35/1073/7896/5c0f3d61Eb9f5f184/5f01c938abe4216d.jpg',
          'href':'###'
        },
        {
          'tabTitle':'购物车',
          'curr':false,
          'num':2,
          'icon':'http://img11.360buyimg.com/uba/jfs/t1/14848/18/1066/3723/5c0f41bdE9f2a38fe/e6ed6768717297fb.jpg',
          'activeIcon':'http://img30.360buyimg.com/uba/jfs/t1/17538/16/1070/6214/5c0f41bdE4bc9a1db/74cf978e5015454b.jpg',
          'href':'###'
        },
        {
          'tabTitle':'我的',
          'curr':false,
          'icon':'http://img20.360buyimg.com/uba/jfs/t1/20004/20/1045/3620/5c0f3d61Eaaec1670/9e59db63983b7b9f.jpg',
          'activeIcon':'http://img14.360buyimg.com/uba/jfs/t1/23967/14/1072/6714/5c0f3d61E0ad8991e/8f741953f6e38f15.jpg',
          'href':'###'
        }
      ]
    };
  },
  methods: {
      tabSwitch3:function(value,index){
        console.log(index);
      }
  }
};
```


### Prop

### nut-tabbar

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| type | 页签栏的样式 based/card | String | based
| tabbarList | 渲染数据 | Array | --
| tabTitle | 标签页的标题 | String | --
| curr | 是否为选中的标签页 | Booble | false
| icon | 标签页显示的图片 | String | --
| activeIcon | 标签页的活动状态显示的图片 | String | --
| href | 标签页的跳转链接 | String | --


### Event

| 事件名称 | 说明 | 回调参数 
|----- | ----- | ----- 
| tabSwitch | 切换页签时触发事件 | 点击的索引值和对应的数据

