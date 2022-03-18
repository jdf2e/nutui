# Picker

### 介绍

提供多个选项集合供用户选择其中一项。

### 组件重构

Picker 组件在 3.2.0 版本进行重构，调整了之前 API 设计不合理的地方，主要变更如下：

* 支持通过 v-model 绑定当前选中的值，移除 default-index 属性
* 重命名选项集合属性 list-data 为 columns 
* 重新定义 columns 属性的数据格式，是由对象构成的一维或多维数组
* 重新定义 confirm、close、change 事件的回调参数

同时也对重构前的 Picker 组件进行了保留，如有需要可通过 XX 进行查看。

### 安装

```javascript
import { createApp } from 'vue';
// vue
import { Picker, Popup } from '@nutui/nutui';
// taro
import { Picker, Popup } from '@nutui/nutui-taro';

const app = createApp();
app.use(Picker);
app.use(Popup);
```

### 基础用法
:::demo
```html
<template>
  <nut-cell title="请选择城市" :desc="desc" @click="()=>{show=true}"></nut-cell>
  <nut-picker
    v-model:visible="show"
    :columns="columns"
    title="城市选择"
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
        { text: '南京市', value: 'NanJing' },
        { text: '无锡市', value: 'WuXi' },
        { text: '海北藏族自治区', value: 'ZangZu' },
        { text: '北京市', value: 'BeiJing' },
        { text: '连云港市', value: 'LianYunGang' },
        { text: '浙江市', value: 'ZheJiang' },
        { text: '江苏市', value: 'JiangSu' }
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

### 默认选中项

通过设置 modelValue 实现默认选中项，modelValue 是一个包含每项配置 value 值的数组。

:::demo
```html
<template>
  <nut-cell title="请选择城市" :desc="desc" @click="() => { show = true;}"></nut-cell>
  <nut-picker
    v-model="selectedValue"
    v-model:visible="show"
    :columns="columns"
    title="城市选择"
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
        { text: '南京市', value: 'NanJing' },
        { text: '无锡市', value: 'WuXi' },
        { text: '海北藏族自治区', value: 'ZangZu' },
        { text: '北京市', value: 'BeiJing' },
        { text: '连云港市', value: 'LianYunGang' },
        { text: '浙江市', value: 'ZheJiang' },
        { text: '江苏市', value: 'JiangSu' }
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

### 多列展示

columns 属性可以通过二维数组的形式配置多列选择。

:::demo
```html
<template>
  <nut-cell title="请选择城市" :desc="desc" @click="()=>{show=true}"></nut-cell>
    <nut-picker
      v-model:visible="show"
      :columns="multipleColumns"
      title="城市选择"
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

### 多级联动

使用 columns 属性的 children 字段可以实现选项级联的效果。

:::demo
```html
<template>
  <nut-cell title="请选择城市" :desc="desc" @click="()=>{show=true}"></nut-cell>
  <nut-picker
    v-model:visible="show"
    :columns="cascaderColumns"
    title="城市选择"
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
        desc.value = selectedValue.join(',');
      }
      const change = ({ selectedValue,selectedOptions }) => {
        console.log(selectedValue);
      };

      return {show,desc,cascaderColumns,change, confirm};
    }
  };
</script>
```
:::

### 异步获取

在实际开发中，大部分情况 Columns 属性的数据是通过异步方式获取的。

:::demo
```html
<template>
  <nut-cell title="请选择城市" :desc="desc" @click="()=>{show=true}"></nut-cell>
  <nut-picker
    v-model="asyncValue"
    v-model:visible="show"
    :columns="asyncColumns"
    title="城市选择"
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
        desc.value = selectedValue.join(',');
      }

      return {show,desc,asyncColumns,asyncValue, confirm};
    }
  };
</script>
```
:::

## API

### Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| v-model:value         | 默认选中项               | Array | []              |
| v-model:visible          | 是否可见               | Boolean | -                |
| columns         | 对象数组，配置每一列显示的数据               | Array | -                |
| title                  | 设置标题                   | String  | -      |
| cancel-text            | 取消按钮文案               | String  | 取消   |
| ok-text                | 确定按钮文案               | String  | 确定   |

### Columns 数据结构

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| text        | 选项的文字内容               | String|Number |               |
| value          | 选项对应的值，且唯一               | String|Number |            |
| children         | 用于级联选项               | Array | -                |
| className                  | 添加额外的类名                   | String  |      |

### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| confirm  | 点击确定按钮时触发 | { selectedValue, selectedOptions } |
| close  | 点击取消按钮时触发 | { selectedValue, selectedOptions } |
| change  | 选项发生改变时触发 | { columnIndex, selectedValue, selectedOptions } |
