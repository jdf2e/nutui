# AddressList

### Intro

It is mainly used to display and operate the address list. Dependent components: Icon, Swipe, Button.

### Install

```javascript
import { createApp } from "vue";
import { AddressList, Icon, Swipe, Button } from "@nutui/nutui";

const app = createApp();
app.use(AddressList);
app.use(Icon);
app.use(Swipe);
app.use(Button);
```

### Basic Usage

:::demo

```html
<template>
  <nut-addresslist
    :data="data"
    @handelDelIcon="delClick"
    @handelEditIcon="editClick"
    @handelItem="itemClick"
    :show-bottom-button="false"
    :dataMapOptions="dataMapOptions"
  >
  </nut-addresslist>
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
    const dataMapOptions = reactive({
      id: 'testid',
      addressDetail:'testaddressDetail',
      addressName:'testaddressName'
    });
    const itemClick = ()=>{
      Toast.text('Click To Address');
    }
    const delClick = ()=>{
      Toast.text('Click To Delete');
    }
    const editClick = ()=>{
      Toast.text('Click To Edit');
    }
    return {
      itemClick,
      holdDownClick,
      data,
      delClick,
      editClick,
      copyClick,
      setClick,
      addAddress,
      dataMapOptions
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
  <nut-addresslist
    :data="data"
    long-press-edition
    :show-bottom-button="false"
    @handelDelIcon="delClick"
    @handelEditIcon="editClick"
    @handelItem="itemClick"
    @longPressCopyClick="copyClick"
    @longPressSetClick="setClick"
    @longPressDelClick="delClick"
    :dataMapOptions="dataMapOptions"
  >
  </nut-addresslist>
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
      const dataMapOptions = reactive({
        id: 'testid',
        addressDetail:'testaddressDetail',
        addressName:'testaddressName'
      });
      const itemClick = ()=>{
        Toast.text('Click To Address');
      }
      const delClick = ()=>{
        Toast.text('Click To Delete');
      }
      const editClick = ()=>{
        Toast.text('Click To Edit');
      }
      const copyClick = ()=>{
        Toast.text('Click To Copy');
      }
      const holdDownClick = (event: Event,id:number)=>{
        Toast.text('Long Press');
      }
      const setClick = ()=>{
        Toast.text('Click On Settings');
      }
      const addAddress = ()=>{
        Toast.text('Click To Add');
      }
      return {
        itemClick,
        holdDownClick,
        data,
        delClick,
        editClick,
        copyClick,
        setClick,
        addAddress,
        dataMapOptions
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
  <nut-addresslist
    :data="data"
    swipe-edition
    show-bottom-button
    @handelItem="itemClick"
    @handelEditIcon="editClick"
    @handelDelIcon="delClick"
    @swipeDelClick="delClick"
    @addAddressClick="addAddress"
    :dataMapOptions="dataMapOptions"
  >
  </nut-addresslist>
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
      const dataMapOptions = reactive({
        id: 'testid',
        addressDetail:'testaddressDetail',
        addressName:'testaddressName'
      });
      const itemClick = ()=>{
        Toast.text('Click To Address');
      }
      const editClick = ()=>{
        Toast.text('Click To Edit');
      }
      const delClick = ()=>{
        Toast.text('Click To Delete');
      }
      const addAddress = ()=>{
        Toast.text('Click To Add');
      }
      return {
        itemClick,
        holdDownClick,
        data,
        delClick,
        editClick,
        copyClick,
        setClick,
        addAddress,
        dataMapOptions
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
| long-press-edition | Long Press Function   | Boolean | false  |
| swipe-edition      | Swipe right           | Boolean | false  |
| show-bottom-button | Whether to show the bottom button | Boolean | true   |

### Events

| Event              | Description                  | Arguments         | Remark               |
| ------------------ | ---------------------------- | ----------------- | ------------------ |
| handel-del-icon      | Click the delete icon        | event: Event,item | public               |
| handel-edit-icon     | Click the edit icon          | event: Event,item | public               |
| handel-del-icon      | Click the delete icon        | event: Event,item | public               |
| handel-item         | Click on each item in the address list | event: Event,item | public     |
| add-address-click    | Click the Add Address button at the bottom | event: Event   | public |
| long-press-copy-click | Click the Copy Address button      | event: Event,item | Click event under long press function |
| long-press-set-click  | Click the Set Default button       | event: Event,item | Click event under long press function  |
| long-press-del-click  | Click the Delete Address button    | event: Event,item | Click event under long press function |
| swipe-del-click      | Default right swipe delete button  | event: Event,item | Click event under swipe function |

### Slots

The `AddressList` component is divided into several areas by default, and these areas are defined as slots, which can be replaced as needed

| Name          | Description                                     | Illustrate  |
| ------------- | ----------------------------------------------- | ----------- |
| iteminfos     | Address list item name/contact/default one line | public      |
| itemicon      | address list item icon                          | public      |
| itemaddr      | Address list item detailed address              | public      |
| swiperight    | Address list item right swipe area              | Use with swipe |
| longpressbtns | Address list item long press to mask content    | Use with long press |

### Each item in the data array is smoothed with the parameters of the dataMapOptions object

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

In the component, the fields defined in the basic data structure are preferentially obtained. If you want to customize the `key` value, you can set the mapping relationship through `dataMapOptions`

```javascript
const dataMapOptions = {
  id: "testid",
  addressDetail: "testaddressDetail",
  addressName: "testaddressName",
};
```
