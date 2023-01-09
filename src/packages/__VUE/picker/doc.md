# Picker

### 介绍

提供多个选项集合供用户选择其中一项，通常与弹出层组件配合使用。


### 安装

```javascript
import { createApp } from 'vue';
import { Picker } from '@nutui/nutui';

const app = createApp();
app.use(Picker);
```

### 基础用法
:::demo
```html
<template>
  <nut-picker :columns="columns" title="城市选择" @confirm="confirm"></nut-picker>
</template>
<script lang="ts">
  import { ref } from 'vue';
  import { showToast } from '@nutui/nutui';
  import '@nutui/nutui/dist/packages/toast/style'; 
  export default {
    setup(props) {
      const columns = ref([
        { text: '南京市', value: 'NanJing' },
        { text: '无锡市', value: 'WuXi' },
        { text: '海北藏族自治区', value: 'ZangZu' },
        { text: '北京市', value: 'BeiJing' },
        { text: '连云港市', value: 'LianYunGang' },
        { text: '浙江市', value: 'ZheJiang' },
        { text: '江苏市', value: 'JiangSu' }
      ]);
    
      const confirm = ( { selectedValue,selectedOptions })=>{
        showToast.text(selectedOptions.map((val: any) => val.text).join(','))
      }

      return {columns, confirm};
    }
  };
</script>
```
:::

### 搭配 Popup 使用

Picker 通常作为用于辅助表单填写，可以搭配 Popup 实现效果。

:::demo
```html
<template>
  <nut-cell title="请选择城市" :desc="popupDesc" @click="show = true"></nut-cell>
  <nut-popup position="bottom"  v-model:visible="show">
    <nut-picker
      :columns="columns"
      title="请选择城市"
      @confirm="popupConfirm"
      @cancel="show=false"
    >
      <nut-button block type="primary">永远有效</nut-button>
    </nut-picker>
  </nut-popup>
</template>
<script lang="ts">
  import { ref } from 'vue';
  import { showToast } from '@nutui/nutui';
  import '@nutui/nutui/dist/packages/toast/style'; 
  export default {
    setup(props) {
      const show = ref(false)
      const popupDesc = ref()
      const columns = ref([
        { text: '南京市', value: 'NanJing' },
        { text: '无锡市', value: 'WuXi' },
        { text: '海北藏族自治区', value: 'ZangZu' },
        { text: '北京市', value: 'BeiJing' },
        { text: '连云港市', value: 'LianYunGang' },
        { text: '浙江市', value: 'ZheJiang' },
        { text: '江苏市', value: 'JiangSu' }
      ]);
    
      const popupConfirm = ( { selectedValue,selectedOptions })=>{
        popupDesc.value = selectedOptions.map((val: any) => val.text).join(',')
        show.value = false
      }

      return {show,popupDesc,columns, confirm,popupConfirm};
    }
  };
</script>
```
:::


### 默认选中项

通过设置 `modelValue` 实现默认选中项，`modelValue` 是一个包含每项配置 value 值的数组。

:::demo
```html
<template>
  <nut-picker
    v-model="selectedValue"
    :columns="columns"
    title="城市选择"
    @confirm="confirm"
  >
  </nut-picker>
</template>
<script lang="ts">
  import { ref } from 'vue';
  import { showToast } from '@nutui/nutui';
  import '@nutui/nutui/dist/packages/toast/style'; 
  export default {
    setup(props) {
      const selectedValue = ref(['ZheJiang']);
      const columns = ref([
        { text: '南京市', value: 'NanJing' },
        { text: '无锡市', value: 'WuXi' },
        { text: '海北藏族自治区', value: 'ZangZu' },
        { text: '北京市', value: 'BeiJing' },
        { text: '连云港市', value: 'LianYunGang' },
        { text: '浙江市', value: 'ZheJiang' },
        { text: '江苏市', value: 'JiangSu' }
      ]);
    
      const confirm = ( { selectedValue,selectedOptions })=>{
        showToast.text(selectedOptions.map((val: any) => val.text).join(','))
      }

      return {columns,selectedValue, confirm};
    }
  };
</script>
```
:::

### 平铺展示

属性 `threeDimensional` 可关闭 3D 滚动效果。

:::demo
```html
<template>
  <nut-picker
    v-model="selectedValue"
    :columns="columns"
    title="城市选择"
    :threeDimensional="false"
    @confirm="confirm"
  >
  </nut-picker>
</template>
<script lang="ts">
  import { ref } from 'vue';
  import { showToast } from '@nutui/nutui';
  import '@nutui/nutui/dist/packages/toast/style'; 
  export default {
    setup(props) {
      const selectedValue = ref(['ZheJiang']);
      const columns = ref([
        { text: '南京市', value: 'NanJing' },
        { text: '无锡市', value: 'WuXi' },
        { text: '海北藏族自治区', value: 'ZangZu' },
        { text: '北京市', value: 'BeiJing' },
        { text: '连云港市', value: 'LianYunGang' },
        { text: '浙江市', value: 'ZheJiang' },
        { text: '江苏市', value: 'JiangSu' }
      ]);
    
      const confirm = ( { selectedValue,selectedOptions })=>{
        showToast.text(selectedOptions.map((val: any) => val.text).join(','))
      }

      return { columns,selectedValue, confirm};
    }
  };
</script>
```
:::

### 多列展示

`columns` 属性可以通过二维数组的形式配置多列选择。

:::demo
```html
<template>
    <nut-picker
      v-model="selectedTime"
      :columns="multipleColumns"
      title="城市选择"
      @confirm="confirm"
      @change="change"
    >
    </nut-picker>
</template>
<script lang="ts">
  import { ref } from 'vue';
  import { showToast } from '@nutui/nutui';
  import '@nutui/nutui/dist/packages/toast/style'; 
  export default {
    setup(props) {
      const selectedTime = ref(['Wednesday','Afternoon']);
      const multipleColumns = ref([
        // 第一列
        [
          { text: '周一', value: 'Monday' },
          { text: '周二', value: 'Tuesday' },
          { text: '周三', value: 'Wednesday' },
          { text: '周四', value: 'Thursday' },
          { text: '周五', value: 'Friday' }
        ],
        // 第二列
        [
          { text: '上午', value: 'Morning' },
          { text: '下午', value: 'Afternoon' },
          { text: '晚上', value: 'Evening' }
        ]
      ]);
    
      const confirm = ( { selectedValue,selectedOptions })=>{
        showToast.text(selectedOptions.map((val: any) => val.text).join(','))
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

### 多级联动

使用 `columns` 属性的 `children` 字段可以实现选项级联的效果。

:::demo
```html
<template>
  <nut-picker
    v-model="selectedCascader"
    :columns="cascaderColumns"
    title="城市选择"
    @confirm="confirm"
  ></nut-picker>
</template>
<script lang="ts">
  import { ref } from 'vue';
  import { showToast } from '@nutui/nutui';
  import '@nutui/nutui/dist/packages/toast/style'; 
  export default {
    setup(props) {
      const selectedCascader = ref(['FuJian', 'FuZhou','TaiJiang']);
      const cascaderColumns = ref([
        {
          text: '浙江',
          value: 'ZheJiang',
          children: [
            {
              text: '杭州',
              value: 'HangZhou',
              children: [
                { text: '西湖区', value: 'XiHu' },
                { text: '余杭区', value: 'YuHang' }
              ]
            },
            {
              text: '温州',
              value: 'WenZhou',
              children: [
                { text: '鹿城区', value: 'LuCheng' },
                { text: '瓯海区', value: 'OuHai' }
              ]
            }
          ]
        },
        {
          text: '福建',
          value: 'FuJian',
          children: [
            {
              text: '福州',
              value: 'FuZhou',
              children: [
                { text: '鼓楼区', value: 'GuLou' },
                { text: '台江区', value: 'TaiJiang' }
              ]
            },
            {
              text: '厦门',
              value: 'XiaMen',
              children: [
                { text: '思明区', value: 'SiMing' },
                { text: '海沧区', value: 'HaiCang' }
              ]
            }
          ]
        }
      ]);
    
      const confirm = ( { selectedValue,selectedOptions })=>{
         showToast.text(selectedOptions.map((val: any) => val.text).join(','))
      }
     

      return {selectedCascader,cascaderColumns, confirm};
    }
  };
</script>
```
:::

### 异步获取

在实际开发中，大部分情况 `Columns` 属性的数据是通过异步方式获取的。

:::demo
```html
<template>
  <nut-picker
    v-model="asyncValue"
    :columns="asyncColumns"
    title="城市选择"
    @confirm="confirm"
  ></nut-picker>
</template>
<script lang="ts">
  import { ref, onMounted } from 'vue';
  import { showToast } from '@nutui/nutui';
  import '@nutui/nutui/dist/packages/toast/style'; 
  export default {
    setup(props) {
      const asyncColumns = ref([]);
      const asyncValue = ref<string[]>([]);
      onMounted(() => {
        // 用于模拟接口请求
        setTimeout(() => {
          asyncColumns.value = [
            { text: '南京市', value: 'NanJing' },
            { text: '无锡市', value: 'WuXi' },
            { text: '海北藏族自治区', value: 'ZangZu' },
            { text: '北京市', value: 'BeiJing' },
            { text: '连云港市', value: 'LianYunGang' },
            { text: '浙江市', value: 'ZheJiang' },
            { text: '江苏市', value: 'JiangSu' }
          ];

          asyncValue.value = ['ZangZu'];
        }, 500);
      });
      
      const confirm = ( { selectedValue,selectedOptions })=>{
         showToast.text(selectedOptions.map((val: any) => val.text).join(','))
      }

      return {asyncColumns,asyncValue, confirm};
    }
  };
</script>
```
:::


## API

### Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| v-model:value         | 默认选中项               | Array | `[]`              |
| columns         | 对象数组，配置每一列显示的数据               | Array | -                |
| title                  | 设置标题                   | string  | -      |
| cancel-text            | 取消按钮文案               | string  | `取消`   |
| ok-text                | 确定按钮文案               | string  | `确定`   |
| three-dimensional          | 是否开启3D效果               | boolean  | `true`   |
| swipe-duration         | 惯性滚动时长        | number \| string  | `1000`   |
| visible-option-num          |可见的选项个数              | number \| string | `7`               |
| option-height         | 选项高度             | number \| string | `36`     |
| show-toolbar         | 是否显示顶部导航             | boolean | `true`    |

### Columns 数据结构

| 键名         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| text        | 选项的文字内容               | string \| number |   -            |
| value          | 选项对应的值，且唯一               | string \| number |     -       |
| children         | 用于级联选项               | Array | -                |
| className                  | 添加额外的类名                   | string  | -    |

### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| confirm  | 点击确定按钮时触发 | `{ selectedValue, selectedOptions }` |
| cancel  | 点击取消按钮时触发 | `{ selectedValue, selectedOptions }` |
| change  | 选项发生改变时触发 | `{ columnIndex, selectedValue, selectedOptions }` |

### Slots

| 名称 | 说明           | 
|--------|----------------|
| default  | 自定义滑动数据底部区域 |
| top  | 自定义滑动数据顶部区域 |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称                                    | 默认值                     | 
| --------------------------------------- | -------------------------- | 
| --nut-picker-cancel-color| _#808080_  | 
| --nut-picker-ok-color| _var(--nut-primary-color)_  | 
| --nut-picker-bar-cancel-font-size| _14px_  | 
| --nut-picker-bar-ok-font-size| _14px_  | 
| --nut-picker-bar-button-padding| _0 15px_  | 
| --nut-picker-bar-title-font-size| _16px_  | 
| --nut-picker-bar-title-color| _var(--nut-title-color)_  | 
| --nut-picker-bar-title-font-weight| _normal_  | 
| --nut-picker-item-height| _36px_  | 
| --nut-picker-item-text-color| _var(--nut-title-color)_  | 
| --nut-picker-item-text-font-size| _14px_  | 
| --nut-picker-item-active-line-border| _1px solid #d8d8d8_  | 