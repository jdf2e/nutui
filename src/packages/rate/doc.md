# Rate 评分

### 介绍

用于快速的评级操作，或对评价进行展示。

### 安装

``` javascript
import { createApp } from 'vue';
import { Rate } from '@nutui/nutui';

const app = createApp();
app.use(Rate);
```

## 代码演示

### 基础用法

```html
    <nut-rate 
        v-model:value="state.val"
    >
    </nut-rate>
```

### 自定义icon

```html
    <nut-rate
        checked-icon="heart-fill1"
        unchecked-icon="heart"
        v-model:value="state.val3"
    >
    </nut-rate>
```

### 自定义数量

```html
    <nut-rate 
        :total="6" 
        v-model:value="state.val4"
    >
    </nut-rate>
```

### 自定义颜色

```html
    <nut-rate 
        active-color="#FFC800" 
        v-model:value="state.val5"
    >
    </nut-rate>
```

### 禁用状态

```html
    <nut-rate 
        :disabled="true" 
        v-model:value="state.val6"
    >
    </nut-rate>
```

### 只读

```html
<nut-rate 
    v-model:value="val"
    :readOnly="true"
>
</nut-rate>
```


### 绑定事件

```html
<nut-rate 
    @click="onClick"
>
</nut-rate>
```

### 自定义尺寸

```html
<nut-rate 
    :size="35"
>
</nut-rate>
```



## Prop

| 字段 | 说明 | 类型 | 默认值
| ----- | ----- | ----- | -----
| total | star 总数 | Number | 5
| value | 当前 star 数，可使用 v-model 双向绑定数据 | Number | 0
| size | star 大小 | Number | 25
| spacing | 两个star的间距 | Number | 20
| read-only | 是否只读 | Boolean | false
| unchecked-icon | 使用图标(未选中) | String | -
| checked-icon | 使用图标(选中) | String | -

## Event
| 字段 | 说明 | 回调参数 
|----- | ----- | ----- 
| click | 点击star时触发 | star的index