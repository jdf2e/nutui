#  Picker 选择器

### 介绍
    
提供多个选项集合供用户选择其中一项。

#### 直接使用 Taro 现有 Picker 组件开发 [参考文档](https://docs.taro.zone/docs/components/forms/picker)
    
<!-- ## 安装
```javascript
import { createApp } from 'vue';
import { Picker } from '@nutui/nutui-taro';

const app = createApp();
app.use(Picker);
```
    
## 代码演示

    
### 基础用法
```html
<nut-picker mode="selector" :list-data="listData" @confirm="confirm">
  <nut-cell title="请选择城市" :desc="desc"></nut-cell>
</nut-picker>
```
```javascript
<script>
export default createDemo({
  setup(props, { emit }) {
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
    const confirm = (value: any, res: any) => {
      desc.value = res;
    };

    return {
      listData,
      confirm,
      desc
    };
  }
});
</script>
```
### 多列样式

```html
<nut-picker mode="multiSelector" :list-data="listData" @confirm="confirm">
  <nut-cell title="请选择时间" :desc="desc"></nut-cell>
</nut-picker>
```
```javascript
<script>
export default createDemo({
  setup(props, { emit }) {
    const listData = ref([
      {
        values: ['周一', '周二', '周三', '周四', '周五'],
        defaultIndex: 2
      },
      {
        values: ['上午', '下午', '晚上'],
        defaultIndex: 1
      }
    ]);
    const desc = ref(
      `${listData.value[0].values[listData.value[0].defaultIndex]} ${
        listData.value[1].values[listData.value[1].defaultIndex]
      }`
    );
    const confirm = (value: any, res: any) => {
      desc.value = res.join(' ');
      listData.value.forEach((item, idx) => {
        item.defaultIndex = value[idx];
      });
    };

    return {
      listData,
      confirm,
      desc
    };
  }
});
</script>
```


## API
    
### Props
    
| 参数                   | 说明                       | 类型    | 默认值 |
|------------------------|----------------------------|---------|--------|
| list-data              | 列表数据                   | Array   | -      |
| mode              | 选择类型                   | String   | selector      |
   
### Events
    
| 事件名  | 说明             | 回调参数     |
|---------|------------------|--------------|
| confirm | 点击确认时候触发 | event: Event | -->

    