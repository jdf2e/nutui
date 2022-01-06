# Rate 评分

### 介绍

用于快速的评级操作，或对评价进行展示。

### 安装

``` javascript
import { createApp } from 'vue';
//vue
import { Rate,Icon } from '@nutui/nutui';
//taro
import { Rate,Icon } from '@nutui/nutui-taro';

const app = createApp();
app.use(Rate);
app.use(Icon);
```

## 代码演示

### 基础用法

``` html
<nut-rate v-model="value" />
```

``` javascript
import { ref } from 'vue';
setup() {
    const value = ref(3);
    return { value }
}
```

### 自定义icon

``` html
<nut-rate checked-icon="heart-fill1" unchecked-icon="heart" v-model="value" />
```

### 自定义数量

``` html
<nut-rate :total="6" v-model="value" />
```

### 自定义颜色

``` html
<nut-rate active-color="#FFC800" v-model="value" />
```

### 禁用状态

``` html
<nut-rate disabled v-model="value" />
```

### 只读

``` html
<nut-rate v-model="value" readOnly />
```
### 绑定事件

``` html
<nut-rate v-model="value" @change="onChange" />
```
``` javascript
import { ref } from 'vue';
setup() {
    const value = ref(3);
    const onChange = (val)=>{
        Toast.text(val);
    }
    return { value }
}
```
### 自定义尺寸

``` html
<nut-rate v-model="value" icon-size="35" />
```



## Prop

| 字段            | 说明                                      | 类型    | 默认值           |
|-----------------|-------------------------------------------|---------|------------------|
| v-model         | 当前 star 数，可使用 v-model 双向绑定数据 | Number  | -                |
| count           | star 总数                                 | Number  | 5                |
| icon-size       | star 大小                                 | Number  | 18               |
| active-color    | 图标选中颜色                              | String  | #fa200c          |
| void-color      | 图标未选中颜色                            | String  | #ccc             |
| unchecked-icon  | 使用图标(未选中)[图标名称](#/icon)    | String  | star-n           |
| checked-icon    | 使用图标(选中)[图标名称](#/icon)       | String  | star-fill-n      |
| font-class-name | 自定义icon 字体基础类名                   | String  | `nutui-iconfont` |
| class-prefix    | 自定义icon 类名前缀，用于使用自定义图标   | String  | `nut-icon`       |
| allow-half      | 是否半星                                  | Boolean | false            |
| readonly        | 是否只读                                  | Boolean | false            |
| disabled        | 是否禁用                                  | Boolean | false            |
| spacing         | 间距                                      | Number  | 20               |

## Event
| 字段   | 说明                       | 回调参数 |
|--------|----------------------------|----------|
| change | 当前分值修改时时触发的事件 | 当前值   |