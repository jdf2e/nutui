# Menu 菜单

## 基础样式
```html
<nut-menu 
    mask
    :list="list1"
    @open="onOpen" 
    @close="onClose"
/>
```

## 多选样式
```html
<nut-menu 
   mask 
   :list="list1" 
   type="multiple"
   :max="2"
   @maxTip="onMaxTip"
   @reset="onReset"
   @ok="onOK"
/>
```

## 单选且为单列数据

```html
<nut-menu
    mask 
    :list="list" 
    type="simple" 
    @open="onOpen" 
    @close="onClose"
    @reset="onReset"
    @ok="onOK" 
    @maxtip="onReset" 
/>
list：
[
    {
    id: 1,
    text: '全部订单',
    selected: false,
    },
    {
    id: 2,
    text: '派送订单',
    selected: false,
    },
    {
    id: 3,
    text: '揽收订单',
    selected: false,
    },
    {
    id: 4,
    text: '其他订单',
    selected: false,
    },
]

```

## 自定义菜单

```html
<nut-menu>
    <div slot="custom" class="custom-wrap"><span>自定义</span></div>
</nut-menu>
```
## DEMO
```javascript
<template>
  <div>
    <h4>基础样式</h4>
    <nut-menu mask :list="list"  @open="onOpen" @close="onClose" />
    <h4>多选样式</h4>
    <nut-menu :class="{ hidden: isVisible1 }" mask :list="list1" type="multiple" :max="2" @maxTip="onMaxTip"  @reset="onReset" @ok="onOK"></nut-menu>
  </div>
</template>

<script>
import cloneDeep from 'lodash.clonedeep';
const list = [
  {
    id: 0,
    text: '综合',
    selected: true,
    children: [
      {
        id: 1,
        text: '全部订单',
        selected: false,
      },
      {
        id: 2,
        text: '派送订单',
        selected: false,
      },
      {
        id: 3,
        text: '揽收订单',
        selected: false,
      },
      {
        id: 4,
        text: '其他订单',
        selected: false,
      },
    ],
  },
  {
    id: 1,
    text: '综合',
    selected: true,
    children: [
      {
        id: 1,
        text: '全部订单',
        selected: false,
      },
      {
        id: 2,
        text: '派送订单',
        selected: false,
      },
      {
        id: 3,
        text: '揽收订单',
        selected: false,
      },
      {
        id: 4,
        text: '其他订单',
        selected: false,
      },
    ],
  },
  {
    id: 2,
    text: '综合',
    selected: true,
    children: [
      {
        id: 1,
        text: '全部订单',
        selected: false,
      },
      {
        id: 2,
        text: '派送订单',
        selected: false,
      },
      {
        id: 3,
        text: '揽收订单',
        selected: false,
      },
      {
        id: 4,
        text: '其他订单',
        selected: false,
      },
    ],
  },
]
export default {
  data() {
    return {
      num: 1,
      titlenum: 1,
      max: 6,
      isVisible1: false,
      list,
      list1: cloneDeep(list),
    };
  },

  methods: {
    onOpen() {
      this.isVisible1 = true;
    },
    onClose() {
      this.isVisible1 = false;
    },
    onOK(data) {
      console.log('onReset data = ', data);
    },
    onReset(data, index) {
      console.log('onReset data = ', data, ', index = ', index);
    },
    chooseMenu(item, index, list) {},
    onMaxTip() {
      alert('超过了最大选择数');
    },
  },
};
</script>

<style lang="scss" scoped>
.hidden {
  display: none;
}

.custom-wrap {
  height: 260px;
  line-height: 260px;
  text-align: center;
}
.nut-menu.custom-nut-menu {
}
.nut-menu-title {
  width: 50px !important;
}
</style>


```
## Prop

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | -----
| isAnimation | 是否启用动画 | Boolean | true
| visible | 是否显示 | Boolean | false
| type | 单选simple，多选multiple | String | simple
| col | 显示的列数 | String/Number | 1
| max | 多选下，允许选择的最大标签数 | String/Number | 5
| list | 选项列表 | Array | [ { text: '全部订单', selected: false }, ...] 或 [ {children:[{ text: '全部订单', selected: false }]}, ...]

## Event

| 字段 | 说明 | 回调参数
|----- | ----- | -----
| close | 遮罩点击 | 无
| open | 面板展开 | 无
| choose | 单选下，选择之后触发 | 1.选择的列表对象。2.列表索引
| maxTip | 多选下，选择的数量最大时触发 | 无
| reset | 多选下，重置按钮触发 | 返回重置之后的列表
| ok | 多选下，点击确定之后触发 | 返回列表
