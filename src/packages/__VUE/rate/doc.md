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


### 基础用法

:::demo
```html
<template>
    <nut-rate v-model="value" />
</template>
<script lang="ts">
import { ref } from 'vue';
export default {
    setup() {
        const value = ref(3);
        return { value }
    }
}
</script>
```
:::

### 半星

:::demo
```html
<template>
    <nut-rate allow-half v-model="value"></nut-rate>
</template>
<script lang="ts">
import { ref } from 'vue';
export default {
    setup() {
        const value = ref(3.5);
        return { value }
    }
}
</script>
```
:::

### 自定义icon

:::demo
```html
<template>
    <nut-rate checked-icon="heart-fill1" unchecked-icon="heart" v-model="value" />
</template>
<script lang="ts">
import { ref } from 'vue';
export default {
    setup() {
        const value = ref(3);
        return { value }
    }
}
</script>
```
:::

### 自定义数量

:::demo
```html
<template>
    <nut-rate :count="6" v-model="value" />
</template>
<script lang="ts">
import { ref } from 'vue';
export default {
    setup() {
        const value = ref(3);
        return { value }
    }
}
</script>
```
:::

### 自定义颜色

:::demo
```html
<template>
    <nut-rate active-color="#FFC800" v-model="value" />
</template>
<script lang="ts">
import { ref } from 'vue';
export default {
    setup() {
        const value = ref(3);
        return { value }
    }
}
</script>
```
:::

### 禁用状态

:::demo
```html
<template>
    <nut-rate disabled v-model="value" />
</template>
<script lang="ts">
import { ref } from 'vue';
export default {
    setup() {
        const value = ref(3);
        return { value }
    }
}
</script>
```
:::

### 只读

:::demo
```html
<template>
    <nut-rate v-model="value" readonly />
</template>
<script lang="ts">
import { ref } from 'vue';
export default {
    setup() {
        const value = ref(3);
        return { value }
    }
}
</script>
```
:::
### 绑定事件

:::demo
```html
<template>
    <nut-rate v-model="value" @change="onChange" />
</template>
<script lang="ts">
import { ref } from 'vue';
import { Toast } from '@nutui/nutui';
export default {
    setup() {
        const value = ref(3);
        const onChange = (val)=>{
            Toast.text(val);
        }
    return { value,onChange }
    }
}
</script>
```
:::

### 自定义尺寸

:::demo
```html
<template>
    <nut-rate v-model="value" icon-size="35" />
</template>
<script lang="ts">
import { ref } from 'vue';
import { Toast } from '@nutui/nutui';
export default {
    setup() {
        const value = ref(3);
        return { value }
    }
}
</script>
```
:::


## API
### Props

| 字段                               | 说明                                      | 类型    | 默认值           |
|------------------------------------|-------------------------------------------|---------|------------------|
| v-model                            | 当前 star 数，可使用 v-model 双向绑定数据 | Number  | -                |
| count                              | star 总数                                 | Number  | 5                |
| icon-size                          | star 大小                                 | Number  | 18               |
| active-color                       | 图标选中颜色                              | String  | #fa200c          |
| void-color                         | 图标未选中颜色                            | String  | #ccc             |
| unchecked-icon                     | 使用图标(未选中)[图标名称](#/icon)        | String  | star-n           |
| checked-icon                       | 使用图标(选中)[图标名称](#/icon)          | String  | star-fill-n      |
| font-class-name                    | 自定义icon 字体基础类名                   | String  | `nutui-iconfont` |
| class-prefix                       | 自定义icon 类名前缀，用于使用自定义图标   | String  | `nut-icon`       |
| allow-half                         | 是否半星                                  | Boolean | false            |
| readonly                           | 是否只读                                  | Boolean | false            |
| disabled                           | 是否禁用                                  | Boolean | false            |
| spacing                            | 间距                                      | Number  | 20               |
| touchable`v3.1.22` `小程序暂不支持` | 是否可以通过滑动手势选择评分              | Boolean | true             |

### Events
| 字段   | 说明                       | 回调参数 |
|--------|----------------------------|----------|
| change | 当前分值修改时时触发的事件 | 当前值   |