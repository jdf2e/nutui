# FixedNav 悬浮导航

### 介绍

悬浮收齐体验交互，用于快捷导航

### 安装
    
``` javascript
import { FixedNav } from '@nutui/nutui-react';
```


### 基础用法

``` tsx
<FixedNav
  navList={navList}
  activeText="基础用法"
  overlay={true}
  position={{ top: '70px' }}
  change={change}
  visible={visible}
  selected={selected}
>
```
``` tsx
const navList = [
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
];
const [visible, setVisible] = useState(false);
const change = (value: boolean) => {
  setVisible(value);
};
const selected = (item: any, event: MouseEvent) => {
  console.log(item, event);
};
```


### 左侧效果

``` tsx
<FixedNav
  navList={navList}
  type={"left"}
  position={{ top: '140px' }}
  visible={visible}
  activeText={"左侧收起"}
  unActiveText={"左侧展开"}
  change={change}
  selected={selected}
/>
```



### 取消背景遮罩

``` tsx
<FixedNav
  navList={navList}
  position={{ top: '210px' }}
  overlay={false}
  visible={visible}
  change={change}
  selected={selected}
/>
```


### 自定义使用

``` tsx
<FixedNav
  position={{ top: '280px' }}
  type={"left"}
  visible={visible}
  change={change}
  selected={selected}
  slotList={
    <ul className="nut-fixednav__list" slot={"list"}>
      <li className="nut-fixednav__list-item">1</li>
      <li className="nut-fixednav__list-item">2</li>
      <li className="nut-fixednav__list-item">3</li>
      <li className="nut-fixednav__list-item">4</li>
      <li className="nut-fixednav__list-item">5</li>
    </ul>
  }
  slotBtn={
    <>
      <Icon name="retweet" color="#fff"> </Icon>
      <span className="text">{ visible ? '自定义开' : '自定义关' }</span>
    </>
  }
/>
```


### 支持拖拽

``` tsx
// 配合 Drag 支持拖拽 ，小程序暂不支持
<Drag direction={"y"} style={{ right: '0px', bottom: '240px' }}>
  <FixedNav
    navList={navList}
    unActiveText="支持拖拽"
    visible={visible} 
    change={change}
    selected={selected} />
</Drag>
```


### Prop
| 字段           | 说明                       | 类型    | 默认值                       |
|:---------------|:---------------------------|:--------|:-----------------------------|
| visible        | 是否打开                   | Boolean | false                        |
| navList       | 悬浮列表内容数据           | Array   | []                           |
| activeText    | 收起列表按钮文案           | String  | 收起导航                     |
| unActiveText | 展开列表按钮文案           | String  | 快速导航                     |
| type           | 导航方向,可选值 left right | String  | right                        |
| overlay        | 展开时是否显示遮罩         | Boolean | true                         |
| position       | fixed 垂直位置             | Object  | {top: 'auto',bottom: 'auto'} |
| slotList       | 自定义展开列表内容             | HTMLElement  | - |
| slotBtn       | 自定义按钮            | HTMLElement  | - |


### Event

| 字段     | 说明         | 回调参数                 |
|----------|--------------|--------------------------|
| change | 展开收起按钮回调 | {value:boolean} |
| selected | 选择之后触发 | {item:item, event:MouseEvent} |


    