# Range 区间选择器

### 介绍
  
滑动输入条，用于在给定的范围内选择一个值。

### 安装

```javascript
import { createApp } from 'vue';
//vue
import { Range } from '@nutui/nutui';
//taro
import { Range } from '@nutui/nutui-taro';

const app = createApp();
app.use(Range);
```

## 代码演示

### 基础用法
:::demo

```html
<template>
  <nut-cell :style="{padding: '40px 18px'}">
    <nut-range v-model="value" @change="onChange"></nut-range>
  </nut-cell>
</template>

<script lang="ts">
  import { ref } from 'vue';
  import { Toast } from '@nutui/nutui';
  export default {
    setup() {
      const value = ref(40);
      const onChange = (value) => Toast.text('当前值：' + value);
      return {
        value,
        onChange,
      };
    },
  };
</script>

```
:::

### 双滑块
:::demo
```html
<template>
  <nut-cell :style="{padding: '40px 18px'}">
    <nut-range range v-model="value" @change="onChange"></nut-range>
  </nut-cell>
</template>

<script lang="ts">
import { ref } from 'vue';
import { Toast } from '@nutui/nutui';
export default {
  setup() {
    const value = ref([20, 80]);
    const onChange = (value) => Toast.text('当前值：' + value);
    return {
      value,
      onChange,
    };
  },
};
</script>
```
:::
### 指定范围
:::demo
```html
<template>
  <nut-cell :style="{padding: '40px 18px'}">
    <nut-range v-model="value" :max="10" :min="-10" @change="onChange" />
  </nut-cell>
</template>

<script lang="ts">
import { ref } from 'vue';
import { Toast } from '@nutui/nutui';
export default {
  setup() {
    const value = ref(0);
    const onChange = (value) => Toast.text('当前值：' + value);
    return {
      value,
      onChange,
    };
  },
};
</script>
```
:::
### 设置步长
:::demo
```html
<template>
  <nut-cell :style="{padding: '40px 18px'}">
    <nut-range v-model="value" :step="5" @change="onChange"></nut-range>
  </nut-cell>
</template>

<script lang="ts">
import { ref } from 'vue';
import { Toast } from '@nutui/nutui';
export default {
  setup() {
    const value = ref(20);
    const onChange = (value) => Toast.text('当前值：' + value);
    return {
      value,
      onChange,
    };
  },
};
</script>
```
:::
### 隐藏范围
:::demo
```html
<template>
  <nut-cell :style="{padding: '40px 18px'}">
    <nut-range v-model="value" hidden-range @change="onChange"></nut-range>
  </nut-cell>
</template>

<script lang="ts">
import { ref } from 'vue';
import { Toast } from '@nutui/nutui';
export default {
  setup() {
    const value = ref(30);
    const onChange = (value) => Toast.text('当前值：' + value);
    return {
      value,
      onChange,
    };
  },
};
</script>
```
:::
### 隐藏标签
:::demo
```html
<template>
  <nut-cell :style="{padding: '40px 18px'}">
    <nut-range v-model="value" :hidden-tag="true" @change="onChange"></nut-range>
  </nut-cell>
</template>

<script lang="ts">
import { ref } from 'vue';
import { Toast } from '@nutui/nutui';
export default {
  setup() {
    const value = ref(40);
    const onChange = (value) => Toast.text('当前值：' + value);
    return {
      value,
      onChange,
    };
  },
};
</script>
```
:::

### 禁用
:::demo
```html
<template>
  <nut-cell :style="{padding: '40px 18px'}">
    <nut-range v-model="value" disabled @change="onChange"></nut-range>
  </nut-cell>
</template>

<script lang="ts">
import { ref } from 'vue';
import { Toast } from '@nutui/nutui';
export default {
  setup() {
    const value = ref(50);
    const onChange = (value) => Toast.text('当前值：' + value);
    return {
      value,
      onChange,
    };
  },
};
</script>
```
:::
### 自定义样式
:::demo
```html
<template>
  <nut-cell :style="{padding: '40px 18px'}">
    <nut-range
      v-model="value"
      inactive-color="rgba(163,184,255,1)"
      button-color="rgba(52,96,250,1)"
      active-color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%"
      @change="onChange">
    </nut-range>
  </nut-cell>
</template>

<script lang="ts">
import { ref } from 'vue';
import { Toast } from '@nutui/nutui';
export default {
  setup() {
    const value = ref(40);
    const onChange = (value) => Toast.text('当前值：' + value);
    return {
      value,
      onChange,
    };
  },
};
</script>
```
:::

### 自定义按钮
```html



```
:::demo
```html
<style>
  .custom-button {
    width: 26px;
    color: #fff;
    font-size: 10px;
    line-height: 18px;
    text-align: center;
    background-color: #ee0a24;
    border-radius: 100px;
  }
</style>
<template>
  <nut-cell :style="{padding: '40px 18px'}">
   <nut-range v-model="value" @change="onChange">
      <template #button>
        <div class="custom-button">{{ value }}</div>
      </template>
    </nut-range>
  </nut-cell>
</template>

<script lang="ts">
import { ref } from 'vue';
import { Toast } from '@nutui/nutui';
export default {
  setup() {
    const value = ref(60);
    const onChange = (value) => Toast.text('当前值：' + value);
    return {
      value,
      onChange,
    };
  },
};
</script>
```
:::
  ## API
  
  ### Props
  
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 当前进度百分比 | Number、Number[] | `0` |
| range | 是否开启双滑块模式 | Boolean | `false` |
| max | 最大值 | Number、String | `100` |
| min | 最小值 | Number、String | `0` |
| step | 步长 | Number、String | `1` |
| disabled | 是否禁用滑块 | Boolean | `false` |
| hidden-range | 是否隐藏范围值 | Boolean | `false` |
| hidden-tag | 是否隐藏标签 | Boolean | `false` |
| active-color | 进度条激活态颜色 | String | `rgba(250, 44, 25, 1)` |
| inactive-color | 进度条非激活态颜色 | String | `rgba(255, 163, 154, 1)` |
| button-color | 按钮颜色 | String | `rgba(250, 44, 25, 1)` |

  
### Events

| 事件名             | 说明                     | 回调参数        |
| ------------------ | ------------------------ | --------------- |
| change             | 进度变化且结束拖动后触发 | value: 当前进度 |
| drag-start         | 开始拖动时触发           | -               |
| drag-end           | 结束拖动时触发           | -               |

### Slots

| 名称   | 说明           |
| ------ | -------------- |
| button | 自定义滑动按钮 |

