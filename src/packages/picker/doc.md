#  Picker组件

### 介绍
    
提供多个选项集合供用户选择其中一项。
    
## 安装
```javascript
import { createApp } from 'vue';
import { Picker } from '@nutui/nutui';

const app = createApp();
app.use(Picker);
```
    
## 代码演示

    
### 基础用法
```html
<nut-cell title="请选择城市" :desc="desc" @click="open"></nut-cell>
<nut-picker
    v-model:visible="show"
    :list-data="listData"
    title="城市选择"
    @confirm="confirm" 
></nut-picker>
```
```javascript
<script>
export default createDemo({
  setup(props, { emit }) {
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

    return {
      listData,
      open: (index) => {
        show.value = true;
      },
      confirm: (res) => {
        desc.value = res;
      }
    };
  }
});
</script>
```
### 多列样式

```html
<nut-cell title="请选择时间" :desc="desc" @click="open"></nut-cell>
<nut-picker
    v-model:visible="show"
    :list-data="listData"
    title="多列选择"
    @confirm="confirm"
    @close="close"
></nut-picker>
```
```javascript
<script>
export default createDemo({
  setup(props, { emit }) {
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

    return {
      listData,
      open: (index) => {
        show.value = true;
      },
      confirm: (res) => {
        desc.value = res.join(' ');
      }
    };
  }
});
</script>
```
### 多级联动
```html
<nut-cell title="地址" :desc="desc" @click="open"></nut-cell>
<nut-picker
    v-model:visible="show"
    :list-data="listData"
    title="地址选择"
    @confirm="confirm" 
></nut-picker>
```
```javascript
<script>
export default createDemo({
  setup(props, { emit }) {
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

    return {
      listData,
      open: (index) => {
        show.value = true;
      },
      confirm: (res) => {
        desc.value = res.join(' ');
      }
    };
  }
});
</script>
``` 



## API
    
### Props
    
| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| v-model:visible   | 是否可见               | Boolean | false             |
| title        | 设置标题                         | String | -                |
| list-data         | 列表数据 | Array | -                |
| default-value-index         | 初始选中项的索引，默认为 0 | number | 0                |
   
### Events
    
| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| close  | 关闭弹窗时触发  | event: Event |
| confirm  | 点击确认时候触发  | event: Event |
| change  | 改变时触发  | val |
    