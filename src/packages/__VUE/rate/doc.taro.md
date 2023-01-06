# Rate 评分

### 介绍

用于快速的评级操作，或对评价进行展示。

### 安装

``` javascript
import { createApp } from 'vue';
import { Rate } from '@nutui/nutui-taro';

const app = createApp();
app.use(Rate);
```

### 基础用法

:::demo
```html
<template>
    <nut-cell class="cell">
        <nut-rate v-model="value" />
    </nut-cell>
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
    <nut-cell class="cell">
        <nut-rate allow-half v-model="value"></nut-rate>
    </nut-cell>
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
    <nut-cell class="cell">
        <nut-rate :icon="HeartFill" v-model="value" />
    </nut-cell>
</template>
<script lang="ts">
import { ref } from 'vue';
import { HeartFill } from '@nutui/icons-vue-taro';
export default {
    components: { HeartFill },
    setup() {
        const value = ref(3);
        return { value, HeartFill }
    }
}
</script>
```
:::

### 自定义数量

:::demo
```html
<template>
    <nut-cell class="cell">
        <nut-rate :count="6" v-model="value" />
    </nut-cell>
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

:::demo
```html
<template>
    <nut-cell class="cell">
        <nut-rate disabled v-model="value" />
    </nut-cell>
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
    <nut-cell class="cell">
        <nut-rate disabled v-model="value" />
    </nut-cell>
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

### 只读状态

:::demo
```html
<template>
    <nut-cell class="cell">
        <nut-rate v-model="value" readonly />
    </nut-cell>
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
    <nut-cell class="cell">
        <nut-rate v-model="value" @change="onChange" />
    </nut-cell>
</template>
<script lang="ts">
import { ref } from 'vue';
export default {
    setup() {
        const value = ref(3);
        const onChange = (val)=>{
            console.log(val);
        }
    return { value,onChange }
    }
}
</script>
```
:::


## API
### Props

| 参数            | 说明                                               | 类型    | 默认值           |
|-----------------|----------------------------------------------------|---------|------------------|
| v-model         | 当前 `star` 数，可使用 `v-model` 双向绑定数据          | number  | -                |
| count           | `star` 总数                                          | number  | `5`                |
| icon-size       | `star` 大小                                          | number  | `18`               |
| active-color    | 图标选中颜色                                       | string  | `#fa200c `         |
| void-color      | 图标未选中颜色                                     | string  | `#ccc`             |
| unchecked-icon  | 使用图标(未选中)[图标名称](#/zh-CN/component/icon) | string  | `star-n`           |
| checked-icon    | 使用图标(选中)[图标名称](#/zh-CN/component/icon)   | string  | `star-fill-n`      |
| font-class-name | 自定义icon 字体基础类名                            | string  | `nutui-iconfont` |
| class-prefix    | 自定义icon 类名前缀，用于使用自定义图标            | string  | `nut-icon`       |
| allow-half      | 是否半星                                           | Boolean | `false`            |
| readonly        | 是否只读                                           | Boolean | `false`            |
| disabled        | 是否禁用                                           | Boolean | `false`            |
| spacing         | 间距                                               | number  | `20`               |

### Events
| 事件名   | 说明                       | 回调参数 |
|--------|----------------------------|----------|
| change | 当前分值修改时时触发的事件 | 当前值   |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称                       | 默认值                     |
|----------------------------|----------------------------|
| --nut-rate-icon-color      | _var(--nut-primary-color)_ |
| --nut-rate-icon-void-color | _var(--nut-disable-color)_ |