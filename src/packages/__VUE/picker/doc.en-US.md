# Picker

### Intro

The picker component is usually used with Popup Component.

### Install

```javascript
import { createApp } from 'vue';
import { Picker } from '@nutui/nutui';

const app = createApp();
app.use(Picker);
```

### Basic Usage

:::demo

```html
<template>
  <nut-picker :columns="columns" title="城市选择" @confirm="confirm"></nut-picker>
</template>
<script>
  import { ref } from 'vue';
  import { Toast } from '@nutui/nutui';
  export default {
    setup(props) {
      const columns = ref([
        { text: 'NanJing', value: 'NanJing' },
        { text: 'WuXi', value: 'WuXi' },
        { text: 'ZangZu', value: 'ZangZu' },
        { text: 'BeiJing', value: 'BeiJing' },
        { text: 'LianYunGang', value: 'LianYunGang' },
        { text: 'ZheJiang', value: 'ZheJiang' },
        { text: 'JiangSu', value: 'JiangSu' }
      ]);
    
      const confirm = ( { selectedValue,selectedOptions })=>{
        Toast.text(selectedOptions.map((val: any) => val.text).join(','))
      }

      return {columns, confirm};
    }
  };
</script>
```
:::

### With Popup 

The Picker is usually filled in as an auxiliary form, which can be paired with a Popup.

:::demo
```html
<template>
  <nut-cell title="Choose city" :desc="popupDesc" @click="show = true"></nut-cell>
    <nut-popup position="bottom"  v-model:visible="show">
      <nut-picker
        :columns="columns"
        title="Choose city"
        @confirm="popupConfirm"
        @cancel="show=false"
      >
      <nut-button block type="primary">Always</nut-button>
      </nut-picker>
    </nut-popup>
</template>
<script>
  import { ref } from 'vue';
  import { Toast } from '@nutui/nutui';
  export default {
    setup(props) {
      const show = ref(false)
      const popupDesc = ref()
      const columns = ref([
        { text: 'NanJing', value: 'NanJing' },
        { text: 'WuXi', value: 'WuXi' },
        { text: 'ZangZu', value: 'ZangZu' },
        { text: 'BeiJing', value: 'BeiJing' },
        { text: 'LianYunGang', value: 'LianYunGang' },
        { text: 'ZheJiang', value: 'ZheJiang' },
        { text: 'JiangSu', value: 'JiangSu' }
      ]);
    
      const popupConfirm = ( { selectedValue,selectedOptions })=>{
        popupDesc.value = selectedOptions.map((val: any) => val.text).join(',')
        show.value = false
      }

      return {columns, confirm};
    }
  };
</script>
```
:::

### Default Index

The default selection is implemented by setting `modelValue`, which is an array of values for each configuration。

:::demo

```html
<template>
  <nut-picker
    v-model="selectedValue"
    :columns="columns"
    title="Choose City"
    @confirm="confirm"
  >
  </nut-picker>
</template>
<script>
  import { ref } from 'vue';
  export default {
    setup(props) {
      const selectedValue = ref(['ZheJiang']);
      const columns = ref([
        { text: 'NanJing', value: 'NanJing' },
        { text: 'WuXi', value: 'WuXi' },
        { text: 'ZangZu', value: 'ZangZu' },
        { text: 'BeiJing', value: 'BeiJing' },
        { text: 'LianYunGang', value: 'LianYunGang' },
        { text: 'ZheJiang', value: 'ZheJiang' },
        { text: 'JiangSu', value: 'JiangSu' }
      ]);
    
       const confirm = ( { selectedValue,selectedOptions })=>{
        Toast.text(selectedOptions.map((val: any) => val.text).join(','))
      }

      return {columns,selectedValue, confirm};
    }
  };
</script>
```

:::

### Tile

:::demo

```html
<template>
  <nut-picker
    v-model="selectedValue"
    :columns="columns"
    title="Choose City"
    :threeDimensional="false"
    @confirm="confirm"
  >
  </nut-picker>
</template>
<script>
  import { ref } from 'vue';
  export default {
    setup(props) {
      const selectedValue = ref(['ZheJiang']);
      const columns = ref([
        { text: 'NanJing', value: 'NanJing' },
        { text: 'WuXi', value: 'WuXi' },
        { text: 'ZangZu', value: 'ZangZu' },
        { text: 'BeiJing', value: 'BeiJing' },
        { text: 'LianYunGang', value: 'LianYunGang' },
        { text: 'ZheJiang', value: 'ZheJiang' },
        { text: 'JiangSu', value: 'JiangSu' }
      ]);
    
       const confirm = ( { selectedValue,selectedOptions })=>{
        Toast.text(selectedOptions.map((val: any) => val.text).join(','))
      }

      return {columns,selectedValue, confirm};
    }
  };
</script>
```

:::

### Multiple Columns

:::demo

```html
<template>
    <nut-picker
      v-model="selectedTime"
      :columns="multipleColumns"
      title="Choose City"
      @confirm="confirm"
      @change="change"
    >
    </nut-picker>
</template>
<script>
  import { ref } from 'vue';
  export default {
    setup(props) {
       const selectedTime = ref(['Wednesday','Afternoon']);
      const multipleColumns = ref([
        // 第一列
        [
          { text: 'Monday', value: 'Monday' },
          { text: 'Tuesday', value: 'Tuesday' },
          { text: 'Wednesday', value: 'Wednesday' },
          { text: 'Thursday', value: 'Thursday' },
          { text: 'Friday', value: 'Friday' }
        ],
        // 第二列
        [
          { text: 'Morning', value: 'Morning' },
          { text: 'Afternoon', value: 'Afternoon' },
          { text: 'Evening', value: 'Evening' }
        ]
      ]);
    
      const confirm = ( { selectedValue,selectedOptions })=>{
         Toast.text(selectedOptions.map((val: any) => val.text).join(','))
      }
      const change = ({ selectedValue,selectedOptions }) => {
        console.log(selectedValue);
      };

      return {multipleColumns,change, confirm, selectedTime};
    }
  };
</script>
```

:::

### Cascade

Use the children field of the Columns attribute to cascade options

:::demo

```html
<template>
  <nut-picker
    v-model="selectedCascader"
    :columns="cascaderColumns"
    title="Choose City"
    @confirm="confirm"
  ></nut-picker>
</template>
<script>
  import { ref } from 'vue';
  export default {
    setup(props) {
      const selectedCascader = ref(['FuJian', 'FuZhou','TaiJiang']);
      const cascaderColumns = ref([
        {
          text: 'ZheJiang',
          value: 'ZheJiang',
          children: [
            {
              text: 'HangZhou',
              value: 'HangZhou',
              children: [
                { text: 'XiHu', value: 'XiHu' },
                { text: 'YuHang', value: 'YuHang' }
              ]
            },
            {
              text: 'WenZhou',
              value: 'WenZhou',
              children: [
                { text: 'LuCheng', value: 'LuCheng' },
                { text: 'OuHai', value: 'OuHai' }
              ]
            }
          ]
        },
        {
          text: 'FuJian',
          value: 'FuJian',
          children: [
            {
              text: 'FuZhou',
              value: 'FuZhou',
              children: [
                { text: 'GuLou', value: 'GuLou' },
                { text: 'TaiJiang', value: 'TaiJiang' }
              ]
            },
            {
              text: 'XiaMen',
              value: 'XiaMen',
              children: [
                { text: 'SiMing', value: 'SiMing' },
                { text: 'HaiCang', value: 'HaiCang' }
              ]
            }
          ]
        }
      ]);
    
       const confirm = ( { selectedValue,selectedOptions })=>{
         Toast.text(selectedOptions.map((val: any) => val.text).join(','))
      }
     

      return {selectedCascader,cascaderColumns, confirm};
    }
  };
</script>
```

:::

### Async

:::demo

```html
<template>
  <nut-picker
    v-model="asyncValue"
    :columns="asyncColumns"
    title="Choose City"
    @confirm="confirm"
  ></nut-picker>
</template>
<script>
  import { ref, onMounted } from 'vue';
  export default {
    setup(props) {
      const asyncColumns = ref([]);
      const asyncValue = ref<string[]>([]);

      onMounted(() => {
        // 用于模拟接口请求
        setTimeout(() => {
          asyncColumns.value = [
            { text: 'NanJing', value: 'NanJing' },
            { text: 'WuXi', value: 'WuXi' },
            { text: 'ZangZu', value: 'ZangZu' },
            { text: 'BeiJing', value: 'BeiJing' },
            { text: 'LianYunGang', value: 'LianYunGang' },
            { text: 'ZheJiang', value: 'ZheJiang' },
            { text: 'JiangSu', value: 'JiangSu' }
          ];

          asyncValue.value = ['ZangZu'];
        }, 500);
      });
      
      const confirm = ( { selectedValue,selectedOptions })=>{
         Toast.text(selectedOptions.map((val: any) => val.text).join(','))
      }

      return {asyncColumns,asyncValue, confirm};
    }
  };
</script>
```

:::


## API

### Props

| Attribute         | Description                             | Type   | Default           |
|--------------|----------------------------------|--------|------------------|
| v-model:value         | Default Index               | Array | []              |
| v-model:visible          | Is Show               | Boolean | -                |
| columns         | Columns data              | Array | -                |
| title                  | Toolbar title                   | String  | -      |
| cancel-text            | Text of cancel button               | String  | cancel   |
| ok-text                | Text of confirm button               | String  | confirm   |
| three-dimensional `v3.1.23`          | Turn on 3D effects      | Boolean  | true   |
| swipe-duration`v3.2.2`          | Duration of the momentum animation        | Number、String  | 1000   |
| safe-area-inset-bottom `v3.2.4`	| Whether to enable iPhone series full screen bottom safety zone adaptation, which is only valid when `position` is  `bottom` |	Boolean	|`false`     |
| visible-option-num          | Count of visible columns       | number \| string | 7               |
| option-height         | Option height             | number \| string | 36     |
| show-toolbar         | Whether to show toolbar             | Boolean | true    |

### Data Structure of Columns

| Attribute         | Description                             | Type   | Default           |
|--------------|----------------------------------|--------|------------------|
| text        | Text of column              | String|Number |               |
| value          | Value of column               | String|Number |            |
| children         | Cascader Option              | Array | -                |
| className                  | Extra CalssName                   | String  |      |

### Events

| Event | Description           | Arguments     |
|--------|----------------|--------------|
| confirm  | Emitted when click confirm button. | { selectedValue, selectedOptions } |
| cancel  | Emitted when click close button. | { selectedValue, selectedOptions } |
| change  | Emitted when current option changed. | { columnIndex, selectedValue, selectedOptions } |

### Slots

| Event | Description           |
|--------|----------------|
| default  | Custom content bottom columns |
| top  | Custom content top columns |
