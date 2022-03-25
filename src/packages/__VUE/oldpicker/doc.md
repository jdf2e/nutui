#  OldPicker 选择器

### 介绍
    
提供多个选项集合供用户选择其中一项。

> OldPicker 组件在 3.1.18 版本后将不再维护，请移步 [Picker 组件](https://nutui.jd.com/#/picker)。
    
### 安装
```javascript
import { createApp } from 'vue';
// vue
import { OldPicker, Popup } from '@nutui/nutui';
// taro
import { OldPicker, Popup } from '@nutui/nutui-taro';

const app = createApp();
app.use(Picker);
app.use(Popup);
```
    
## 代码演示

    
### 基础用法
:::demo
```html
<template>
  <nut-cell title="请选择城市" :desc="desc" @click="open"></nut-cell>
  <nut-old-picker
      v-model:visible="show"
      :list-data="listData"
      title="城市选择"
      @confirm="confirm" 
  ></nut-old-picker>
</template>
<script>
  import { ref } from 'vue';
  export default {
    setup(props) {
      const show = ref(false);
      const listData = [
        '南京市',
        '无锡市',
        '海北藏族自治区',
        '北京市',
        '连云港市',
        '浙江市',
        '江苏市'
      ];
      const desc = ref(listData[0]);
      const open = ()=>{
        show.value = true;
      }
      const confirm = (res)=>{
        desc.value = res;
      }
      return {show,desc,listData,open, confirm};
    }
  };
</script>
```
:::

### 默认选中项
:::demo
```html
<template>
  <nut-cell title="请选择城市" :desc="desc" @click="open"></nut-cell>
  <nut-old-picker
      v-model:visible="show"
      :list-data="listData"
      title="城市选择"
      @confirm="confirm" 
      :defaultIndex="2"
  ></nut-old-picker>
</template>
<script>
  import { ref } from 'vue';
  export default {
    setup(props) {
      const show = ref(false);
      const listData = [
        '南京市',
        '无锡市',
        '海北藏族自治区',
        '北京市',
        '连云港市',
        '浙江市',
        '江苏市'
      ];
      const desc = ref(listData[2]);
      const open = ()=>{
        show.value = true;
      }
      const confirm = (res)=>{
        desc.value = res;
      }
      return {show,desc,listData,open, confirm};
    }
  };
</script>
```
:::

### 多列样式

:::demo
```html
<template>
  <nut-cell title="请选择城市" :desc="desc" @click="open"></nut-cell>
  <nut-old-picker
      v-model:visible="show"
      :list-data="listData"
      title="城市选择"
      @confirm="confirm" 
  ></nut-old-picker>
</template>
<script>
  import { ref } from 'vue';
  export default {
    setup(props) {
      const show = ref(false);
      const listData = [
        {
          values: ['周一', '周二', '周三', '周四', '周五'],
          defaultIndex: 2
        },
        // 第二列
        {
          values: ['上午', '下午', '晚上'],
          defaultIndex: 1
        }
      ];
      const desc = ref(`${listData[0].values[listData[0].defaultIndex]} ${listData[1].values[listData[1].defaultIndex]}`);
      const open = ()=>{
        show.value = true;
      }
      const confirm = (res)=>{
        desc.value = res.join(' ');
      }
      return {show,desc,listData,open, confirm};
    }
  };
</script>
```
:::


### 多级联动

:::demo
```html
<template>
  <nut-cell title="地址" :desc="desc" @click="open"></nut-cell>
  <nut-old-picker
      v-model:visible="show"
      :list-data="listData"
      title="地址选择"
      @confirm="confirm" 
  ></nut-old-picker>
</template>
<script>
  import { ref } from 'vue';
  export default {
    setup(props) {
      const show = ref(false);
      const listData = [
        {
          text: '浙江',
          children: [
            {
              text: '杭州',
              children: [{ text: '西湖区' }, { text: '余杭区' }]
            },
            {
              text: '温州',
              children: [{ text: '鹿城区' }, { text: '瓯海区' }]
            }
          ]
        },
        {
          text: '福建',
          children: [
            {
              text: '福州',
              children: [{ text: '鼓楼区' }, { text: '台江区' }]
            },
            {
              text: '厦门',
              children: [{ text: '思明区' }, { text: '海沧区' }]
            }
          ]
        }
      ];

      const desc = ref(
        `${listData[0].text}
        ${listData[0].children[0].text}
        ${listData[0].children[0].children[0].text}`
      );

      return {
        desc,
        show,
        listData,
        open: (index) => {
          show.value = true;
        },
        confirm: (res) => {
          desc.value = res.join(' ');
        }
      };
    }
  };
</script>
```
:::

### 动态设置
:::demo
```html
<template>
  <nut-cell title="请选择时间" :desc="desc" @click="open"></nut-cell>
  <nut-old-picker
      v-model:visible="show"
      :list-data="listData"
      :demoIndex="demoIndex"
      title="地址选择"
      @change="onChange"
      @confirm="confirm"
    ></nut-old-picker>
</template>
<script>
  import { ref } from 'vue';
  export default {
    setup(props) {
      const show = ref(false);
      const cities = {
        浙江: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
        福建: ['福州', '厦门', '莆田', '三明']
      };

      const listData = ref([
        {
          values: Object.keys(cities)
        },
        {
          values: cities['浙江']
        }
      ]);
      const desc = ref('浙江 杭州');

  
      return {
        show,
        desc,
        listData,
        open: (index) => {
          show.value = true;
        },
        confirm: (res) => {
          desc.value = res[0]+' '+res[1];
        },
        onChange: (res, columnIndex, dataIndex) => {
          listData.value[1].values = cities[res[0]];
        }
      };
    }
  };
</script>
```
:::

## API
    
### Props
    
| 参数                   | 说明                       | 类型    | 默认值 |
|------------------------|----------------------------|---------|--------|
| v-model:visible        | 是否可见                   | Boolean | false  |
| title                  | 设置标题                   | String  | -      |
| cancel-text            | 取消按钮文案               | String  | 取消   |
| ok-text                | 确定按钮文案               | String  | 确定   |
| list-data              | 列表数据                   | Column[]   | -      |
| default-index    | 单列选择时，初始选中项的索引，默认为 0 | number  | 0      |
| teleport               | 指定挂载节点               | String  | "body" |
| close-on-click-overlay | 点击蒙层是否关闭对话框     | Boolean | false  |
| lock-scroll            | 背景是否锁定               | Boolean | false  |
   
### Column 数据结构

当传入多列时，columns 为一个对象数组，数组中的每一个对象配置每一列
    
| 事件名  | 说明             | 回调参数     |
|---------|------------------|--------------|
| values   | 列中对应的值   | string |
| default-index | 初始选中项的索引，默认值 0 | number |
| children  | 级联选项       | Column |

### Events
    
| 事件名  | 说明             | 回调参数     |
|---------|------------------|--------------|
| close   | 关闭弹窗时触发   | event: Event |
| confirm | 点击确认时候触发 | event: Event |
| change  | 改变时触发       | 选中的值, 第几列, 第几个 |
    