# Picker

### Intro

The picker component is usually used with Popup Component.

### Install

```javascript
import { createApp } from 'vue';
// vue
import { Picker, Popup, OverLay } from '@nutui/nutui';
// taro
import { Picker, Popup, OverLay } from '@nutui/nutui-taro';

const app = createApp();
app.use(Picker);
app.use(Popup);
app.use(OverLay);
```

### Basic Usage

:::demo

```html
<template>
  <nut-cell title="Choose City" :desc="desc" @click="()=>{show=true}"></nut-cell>
  <nut-picker
    v-model:visible="show"
    :columns="columns"
    title="Choose City"
    @change="change"
    @confirm="confirm"
  >
  </nut-picker>
</template>
<script>
  import { ref } from 'vue';
  export default {
    setup(props) {
      const show = ref(false);
      const desc = ref('');
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
        desc.value = selectedValue.join(',');
      }
      const change = ({ selectedValue,selectedOptions }) => {
        console.log(selectedValue);
      };

      return {show,desc,columns,change, confirm};
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
  <nut-cell title="Choose City" :desc="desc" @click="() => { show = true;}"></nut-cell>
  <nut-picker
    v-model="selectedValue"
    v-model:visible="show"
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
      const show = ref(false);
      const desc = ref('');
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
        desc.value = selectedValue.join(',');
      }

      return {show,desc,columns,selectedValue, confirm};
    }
  };
</script>
```

:::

### Tile

:::demo

```html
<template>
  <nut-cell title="Choose City" :desc="desc" @click="() => { show = true;}"></nut-cell>
  <nut-picker
    v-model="selectedValue"
    v-model:visible="show"
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
      const show = ref(false);
      const desc = ref('');
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
        desc.value = selectedValue.join(',');
      }

      return {show,desc,columns,selectedValue, confirm};
    }
  };
</script>
```

:::

### Multiple Columns

:::demo

```html
<template>
  <nut-cell title="Choose City" :desc="desc" @click="()=>{show=true}"></nut-cell>
    <nut-picker
      v-model:visible="show"
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
      const show = ref(false);
      const desc = ref('');
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
        desc.value = selectedValue.join(',');
      }
      const change = ({ selectedValue,selectedOptions }) => {
        console.log(selectedValue);
      };

      return {show,desc,columns,change, confirm};
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
  <nut-cell title="Choose City" :desc="desc" @click="()=>{show=true}"></nut-cell>
  <nut-picker
    v-model:visible="show"
    v-model="selectedCascader"
    :columns="cascaderColumns"
    title="Choose City"
    @confirm="confirm"
    @change="change"
  ></nut-picker>
</template>
<script>
  import { ref } from 'vue';
  export default {
    setup(props) {
      const show = ref(false);
      const desc = ref('');
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
        desc.value = selectedValue.join(',');
      }
      const change = ({ selectedValue,selectedOptions }) => {
        console.log(selectedValue);
      };

      return {show,desc,selectedCascader,cascaderColumns,change, confirm};
    }
  };
</script>
```

:::

### Async

:::demo

```html
<template>
  <nut-cell title="Choose City" :desc="desc" @click="()=>{show=true}"></nut-cell>
  <nut-picker
    v-model="asyncValue"
    v-model:visible="show"
    :columns="asyncColumns"
    title="Choose City"
    @confirm="confirm"
  ></nut-picker>
</template>
<script>
  import { ref, onMounted } from 'vue';
  export default {
    setup(props) {
      const show = ref(false);
      const desc = ref('');
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
        desc.value = selectedValue.join(',');
      }

      return {show,desc,asyncColumns,asyncValue, confirm};
    }
  };
</script>
```

:::

### Slots

Slots are arranged at the bottom and top respectively for custom Settings

:::demo

```html
<template>
  <nut-cell title="Valid Time" :desc="desc" @click="()=>{show=true}"></nut-cell>
  <nut-picker
    v-model:visible="show"
    :columns="asyncColumns"
    title="Choose Date"
    @confirm="confirm"
  >
   <nut-button block  @click="alwaysFun">Always</nut-button>
  </nut-picker>
</template>
<script>
  import { ref, onMounted } from 'vue';
  export default {
    setup(props) {
      const show = ref(false);
      const desc = ref('');
      const effectColumns = ref([]);

      onMounted(() => {
        // 用于模拟接口请求
        setTimeout(() => {
          effectColumns.value = [
            { text: '2022-01', value: 'January' },
            { text: '2022-02', value: 'February' },
            { text: '2022-03', value: 'March' },
            { text: '2022-04', value: 'April' },
            { text: '2022-05', value: 'May' },
            { text: '2022-06', value: 'June' },
            { text: '2022-07', value: 'July' },
            { text: '2022-08', value: 'August' },
            { text: '2022-09', value: 'September' },
            { text: '2022-10', value: 'October' },
            { text: '2022-11', value: 'November' },
            { text: '2022-12', value: 'December' }
          ];

        }, 500);
      });
      
      const confirm = ( { selectedValue,selectedOptions })=>{
        desc.value = selectedValue.join(',');
      }

      const alwaysFun = () => {
        showEffect.value = false;
        desc.effect = 'Always';
      };

      return {show,desc,alwaysFun,effectColumns, confirm};
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
| close  | Emitted when click close button. | { selectedValue, selectedOptions } |
| change  | Emitted when current option changed. | { columnIndex, selectedValue, selectedOptions } |

### Slots

| Event | Description           |
|--------|----------------|
| default  | Custom content bottom columns |
| top  | Custom content top columns |
