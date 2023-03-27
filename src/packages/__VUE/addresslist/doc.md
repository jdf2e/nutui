# AddressList 地址列表

### 介绍

主要用于进行地址列表的展示以及操作。

### 安装

```javascript
import { createApp } from "vue";
import { AddressList } from "@nutui/nutui";

const app = createApp();
app.use(AddressList);
```


### 基础用法

:::demo

```html
<template>
  <nut-address-list
    :data="data"
    @click-item="clickItem"
    @del-icon="delClick"
    @edit-icon="editClick"
    :show-bottom-button="false"
    :data-options="dataOptions"
  >
  </nut-address-list>
</template>
<script lang="ts">
import { ref, reactive } from 'vue';
export default {
  setup() {
    const data = ref([
      {
        testid:3,
        testaddressName:'姓名',
        phone:'123****4567',
        defaultAddress:false,
        fullAddress:'北京市通州区测试测试测试测试测试测试测试测试测试'
      },
      {
        testid:4,
        testaddressName:'姓名',
        phone:'123****4567',
        defaultAddress:true,
        fullAddress:'北京市通州区测试测试测试测试测试测试测试测试测试'
      },
    ]);
    const dataOptions = reactive({
      id: 'testid',
      addressDetail:'testaddressDetail',
      addressName:'testaddressName'
    });
    const clickItem = ()=>{
      console.log('Click To Address');
    }
    const delClick = ()=>{
      console.log('Click To Delete');
    }
    const editClick = ()=>{
      console.log('Click To Edit');
    }
    return {
      data,
      clickItem,
      delClick,
      editClick,
      dataOptions
    };
  }
};
</script>
```

:::
### 长按功能

:::demo

```html
<template>
  <nut-address-list
    :data="data"
    long-press
    :show-bottom-button="false"
    @del-icon="delClick"
    @edit-icon="editClick"
    @click-item="clickItem"
    @long-copy="copyClick"
    @long-set="setClick"
    @long-del="delClickLong"
    :data-options="dataOptions"
  >
  </nut-address-list>
</template>
<script lang="ts">
import { ref, reactive } from 'vue';
export default {
  setup() {
    const data = ref([
        {
          testid:3,
          testaddressName:'姓名',
          phone:'123****4567',
          defaultAddress:false,
          fullAddress:'北京市通州区测试测试测试测试测试测试测试测试测试'
        },
        {
          testid:4,
          testaddressName:'姓名',
          phone:'123****4567',
          defaultAddress:true,
          fullAddress:'北京市通州区测试测试测试测试测试测试测试测试测试'
        },
      ]);
      const dataOptions = reactive({
        id: 'testid',
        addressDetail:'testaddressDetail',
        addressName:'testaddressName'
      });
      const clickItem = ()=>{
        console.log('Click To Address');
      }
      const delClick = ()=>{
        console.log('Click To Delete');
      }
      const editClick = ()=>{
        console.log('Click To Edit');
      }
      const copyClick = ()=>{
        console.log('Click To Copy');
      }
      const setClick = ()=>{
        console.log('Click On Settings');
      }
      const delClickLong = ()=>{
        console.log('Click To Add');
      }
      return {
        data,
        clickItem,
        delClick,
        editClick,
        copyClick,
        setClick,
        delClickLong,
        dataOptions
      };
    }
  };
</script>
```
:::
### 滑动功能

:::demo

```html
<template>
  <nut-address-list
    :data="data"
    swipe-edition
    show-bottom-button
    @edit-icon="editClick"
    @del-icon="delClick"
    @click-item="clickItem"
    @swipe-del="delClickSwipe"
    @add="addAddress"
    :data-options="dataOptions"
  >
  </nut-address-list>
</template>
<script lang="ts">
import { ref, reactive } from 'vue';
export default {
  setup() {
    const data = ref([
        {
          testid:3,
          testaddressName:'姓名',
          phone:'123****4567',
          defaultAddress:false,
          fullAddress:'北京市通州区测试测试测试测试测试测试测试测试测试'
        },
        {
          testid:4,
          testaddressName:'姓名',
          phone:'123****4567',
          defaultAddress:true,
          fullAddress:'北京市通州区测试测试测试测试测试测试测试测试测试'
        },
      ]);
      const dataOptions = reactive({
        id: 'testid',
        addressDetail:'testaddressDetail',
        addressName:'testaddressName'
      });
      const clickItem = ()=>{
        console.log('Click To Address');
      }
      const editClick = ()=>{
        console.log('Click To Edit');
      }
      const delClick = ()=>{
        console.log('Click To Delete');
      }
      const delClickSwipe = () => {
        console.log('Click On DelClickSwipe');
      };
      const addAddress = ()=>{
        console.log('Click To Add');
      }
      return {
        data,
        clickItem,
        delClick,
        editClick,
        setClick,
        delClickSwipe,
        addAddress,
        dataOptions
      };
    }
  };
</script>
```

:::
## API

### Props

| 参数               | 说明             | 类型    | 默认值 |
| ------------------ | ---------------- | ------- | ------ |
| data               | 地址数组         | Array   | -      |
| long-press | 长按功能         | boolean | `false`  |
| swipe-edition      | 右滑功能         | boolean | `false`  |
| show-bottom-button | 是否展示底部按钮 | boolean | `true`   |
| data-options | 自定义 `key` 值时，设置映射关系 | Object | -   |

### Events

| 事件名             | 说明                 | 回调参数          | 备注               |
| ------------------ | -------------------- | ----------------- | ------------------ |
| del-icon      | 点击删除图标         | event: Event,item | 公共               |
| edit-icon     | 点击编辑图标         | event: Event,item | 公共               |             |
| click-item         | 点击地址列表每一项   | event: Event,item | 公共               |
| add    | 点击底部添加地址按钮 | event: Event      | 公共               |
| long-copy | 点击复制地址按钮     | event: Event,item | 长按功能下点击事件 |
| long-set  | 点击设置默认按钮     | event: Event,item | 长按功能下点击事件 |
| long-del  | 点击删除地址按钮     | event: Event,item | 长按功能下点击事件 |
| swipe-del      | 默认右滑删除按钮     | event: Event,item | 滑动功能下点击事件 |

### Slots

`AddressList` 组件默认划分为若干区域，这些区域都定义成了插槽，可以按照需求进行替换

| 名称        | 说明                             | 说明           |
| ------------- | -------------------------------- | -------------- |
| item-infos     | 地址列表项姓名/联系方式/默认一行 | 公共           |
| item-icon      | 地址列表项图标                   | 公共           |
| item-addr      | 地址列表项详细地址               | 公共           |
| swipe-right    | 地址列表项右滑区域               | 滑动功能下使用 |
| longpress-btns | 地址列表项长按遮罩内容           | 长按功能下使用 |

### data 数组中每一项 与 dataOptions 对象的参数磨平

下面是 `data` 数组中每一项 基础数据结构

```javascript
const dataInfo = {
  id: 2, //地址id
  addressName: "姓名", //地址姓名
  phone: "123****4567", //联系方式
  defaultAddress: false, //是否是默认
  fullAddress: "北京市通州区测试测试测试测试测试测试测试测试测试", //详细地址
};
```

组件内优先获取基础数据结构中定义的字段，若想自定义 `key` 值，可以通过 `dataOptions` 设置映射关系

```javascript
const dataOptions = {
  id: "testid",
  addressDetail: "testaddressDetail",
  addressName: "testaddressName",
};
```


## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称                                    | 默认值                     |
| --------------------------------------- | -------------------------- |
| --nut-addresslist-bg |  _#fff_   |
| --nut-addresslist-border |  _#f0f0f0_   |
| --nut-addresslist-font-color |  _#333333_   |
| --nut-addresslist-font-size |  _16px_   |
| --nut-addresslist-mask-bg |  _rgba(0, 0, 0, 0.4)_   |
| --nut-addresslist-addr-font-color |  _#666666_   |
| --nut-addresslist-addr-font-size |  _12px_   |
| --nut-addresslist-set-bg |  _#f5a623_   |
| --nut-addresslist-del-bg |  _#e1251b_   |
| --nut-addresslist-contnts-contact-default |  _var(--nut-primary-color)_   |
| --nut-addresslist-contnts-contact-color |  _var(--nut-white)_   |
