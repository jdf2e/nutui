#  DatePicker 日期选择器

### 介绍
    
时间选择器，支持日期、年月、时分等维度，通常与弹出层组件配合使用。

#### 直接使用 Taro 现有 Picker[mode="date"] 组件开发 [参考文档](https://docs.taro.zone/docs/components/forms/picker)
    
<!-- ### 安装

```javascript
import { createApp } from 'vue';
import { DatePicker } from '@nutui/nutui-taro';

const app = createApp();
app.use(DatePicker);
```

## 代码演示
```html
<nut-datepicker @onChange="onChange">
  <nut-cell title="请选择日期" :desc="desc"></nut-cell>
</nut-datepicker>
```
```javascript
<script>
export default createDemo({
  setup() {
    const desc = ref();

    const onChange = (value: any) => {
      desc.value = value;
    };

    return {
      desc,
      onChange
    };
  }
});
</script>
```


## API

### Props

| 参数            | 说明                                              | 类型    | 默认值   |
|-----------------|---------------------------------------------------|---------|----------|
| value        | 选中的日期，格式为'YYYY-MM-DD'                        | String    | `new Date()` |
| start        | 开始日期                                          | String    | `1970-01-01` |
| end        | 结束日期                                          | String    | `2999-01-01` |
| fields        | 选择器的粒度(`year`、`month`、`day`)            | String    | `day` |



### Events
    
| 事件名  | 说明               | 回调参数     |
|---------|--------------------|--------------|
| onChange | 点击确定按钮时触发 | event: Event | -->