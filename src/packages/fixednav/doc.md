# FixedNav 悬浮导航

可拖拽的悬浮导航

## 基本用法

> 按需引用组件
``` javascript
import {FixedNav, Drag, Popup } from '@nutui/nutui';
FixedNav.install(Vue);
Drag.install(Vue);
Popup.install(Vue);
```

```html
<!-- 基本用法 -->
<nut-drag direction="y" :style="{right:'0px',top:'50px'}">
    <nut-fixednav active-text="右侧收起" un-active-text="右侧展开" :nav-list="navList" @selected="selected">
    </nut-fixednav>
</nut-drag>
<nut-drag direction="y" :style="{left:'0px',top:'100px'}">
    <nut-fixednav active-text="左侧收起" un-active-text="左侧展开" type="left" :nav-list="navList" @selected="selected">
    </nut-fixednav>
</nut-drag>
<nut-drag direction="y" :style="{right:'0px',top:'150px'}">
    <nut-fixednav :nav-list="navList" @selected="selected">
    </nut-fixednav>
</nut-drag>
<nut-drag direction="y" :style="{left:'0px',top:'200px'}">
    <nut-fixednav :nav-list="navList" type="left" @selected="selected">
    </nut-fixednav>
</nut-drag>
<nut-drag direction="y" :style="{right:'0px',top:'250px'}">
    <nut-fixednav :nav-list="navList" @selected="selected">
    </nut-fixednav>
</nut-drag>
<nut-drag direction="y" :style="{left:'0px',top:'300px'}">
    <nut-fixednav :nav-list="navList" type="left" @selected="selected">
    </nut-fixednav>
</nut-drag>
<!-- 自定义用法 -->
<nut-drag direction="y" :style="{left:'0px',top:'300px'}">
    <nut-fixednav :active.sync="myActive" type="left" @selected="selected">
    <ul slot="list" class="fixed-list">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
    </ul>
    <template slot="btn" @click="myActive=!myActive">
        <img style="width:20px;height:20px"
        src="https://img10.360buyimg.com/imagetools/jfs/t1/143466/8/1743/6993/5ef9fb50E10f30d87/993e4e681fc50cac.png" />
        <span>{{myActive?'自定义开':'自定义关'}}</span>
    </template>
    </nut-fixednav>
</nut-drag>

<!-- 无拖拽效果 -->
<nut-fixednav active-text="收起" un-active-text="无法拖拽" :style="{position:'fixed',bottom:'10px',right:'0px'}"
    :nav-list="navList" @selected="selected">
</nut-fixednav>
```

``` javascript
export default {
  data() {
    return {
      myActive: false,
      navList: [
        {
          id: 1,
          text: '首页',
          icon: 'https://img11.360buyimg.com/imagetools/jfs/t1/117646/2/11112/1297/5ef83e95E81d77f05/daf8e3b1c81e3c98.png'
        },
        {
          id: 2,
          text: '分类',
          icon: 'https://img12.360buyimg.com/imagetools/jfs/t1/119490/8/9568/1798/5ef83e95E968c69a6/dd029326f7d5042e.png'
        },
        {
          id: 3,
          text: '购物车',
          num: 2,
          icon: 'https://img14.360buyimg.com/imagetools/jfs/t1/130725/4/3157/1704/5ef83e95Eb976644f/b36c6cfc1cc1a99d.png'
        },
        {
          id: 4,
          text: '我的',
          icon: 'https://img12.360buyimg.com/imagetools/jfs/t1/147573/29/1603/1721/5ef83e94E1393a678/5ddf1695ec989373.png'
        }
      ]
    };
  },
  methods: {
    selected($event) {
      console.log($event);
    }
  }
};
```

## Prop
| 字段           | 说明                       | 类型    | 默认值     |
|:---------------|:---------------------------|:--------|:-----------|
| active.sync         | 是否打开                   | Boolean | false      |
| navList        | 悬浮列表内容数据           | Array   | []         |
| active-text    | 收起列表按钮文案           | String  | '收起导航' |
| un-active-text | 展开列表按钮文案           | String  | '快速导航' |
| type           | 导航方向,可选值 left right | String  | 'right'     |


## Slot

| 名称 | 说明               |
|------|--------------------|
| btn  | 自定义按钮         |
| list | 自定义展开列表内容 |

## Event

| 字段     | 说明         | 回调参数                 |
|----------|--------------|--------------------------|
| selected | 选择之后触发 | {item:item,$event:Event} |