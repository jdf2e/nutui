# AddressList

### Intro

It is mainly used to display and operate the address list.

### Install

```javascript
import { createApp } from "vue";
import { AddressList } from "@nutui/nutui";

const app = createApp();
app.use(AddressList);
```

### Basic Usage

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
### Long Press Function

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
### Swipe Function

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

| Attribute          | Description       | Type   | Default |
| ------------------ | ---------------- | ------- | ------ |
| data               | Address array         | Array   | -      |
| long-press | Long Press Function   | boolean | `false`  |
| swipe-edition      | Swipe right           | boolean | `false`  |
| show-bottom-button | Whether to show the bottom button | boolean | `true`   |
| data-options | When customizing the `key` value, set the mapping relationship

### Events

| Event              | Description                  | Arguments         | Remark               |
| ------------------ | ---------------------------- | ----------------- | ------------------ |
| del-icon      | Click the delete icon        | event: Event,item | public               |
| edit-icon     | Click the edit icon          | event: Event,item | public               |          |
| click-item         | Click on each item in the address list | event: Event,item | public     |
| add    | Click the Add Address button at the bottom | event: Event   | public |
| long-copy | Click the Copy Address button      | event: Event,item | Click event under long press function |
| long-set  | Click the Set Default button       | event: Event,item | Click event under long press function  |
| long-del  | Click the Delete Address button    | event: Event,item | Click event under long press function |
| swipe-del      | Default right swipe delete button  | event: Event,item | Click event under swipe function |

### Slots

The `AddressList` component is divided into several areas by default, and these areas are defined as slots, which can be replaced as needed

| Name          | Description                                     | Illustrate  |
| ------------- | ----------------------------------------------- | ----------- |
| item-infos     | Address list item name/contact/default one line | public      |
| item-icon      | address list item icon                          | public      |
| item-addr      | Address list item detailed address              | public      |
| swipe-right    | Address list item right swipe area              | Use with swipe |
| longpress-btns | Address list item long press to mask content    | Use with long press |

### Each item in the data array is smoothed with the parameters of the dataOptions object

Below is the underlying data structure for each item in the `data` array

```javascript
const dataInfo = {
  id: 2, //地址id
  addressName: "姓名", //地址姓名
  phone: "123****4567", //联系方式
  defaultAddress: false, //是否是默认
  fullAddress: "北京市通州区测试测试测试测试测试测试测试测试测试", //详细地址
};
```

In the component, the fields defined in the basic data structure are preferentially obtained. If you want to customize the `key` value, you can set the mapping relationship through `dataOptions`

```javascript
const dataOptions = {
  id: "testid",
  addressDetail: "testaddressDetail",
  addressName: "testaddressName",
};
```

## Theming

### CSS Variables


The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
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
