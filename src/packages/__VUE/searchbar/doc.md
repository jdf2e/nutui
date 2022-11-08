# SearchBar 搜索栏

### 介绍

搜索栏
    
### 安装
    
```javascript
import { createApp } from 'vue';

// vue
import { SearchBar, Icon } from '@nutui/nutui';
// taro
import { SearchBar, Icon } from '@nutui/nutui-taro';

const app = createApp();
app.use(SearchBar);
app.use(Icon);

```    
    
### 基础用法
:::demo
```html
<template>
  <nut-searchbar v-model="searchValue"></nut-searchbar>
</template>
<script lang="ts">
  import { reactive, toRefs } from 'vue';
  export default {
    setup() {
      const state = reactive({
        searchValue: ""
      });

      return {
        ...toRefs(state),
      };
    }
  };
</script>
```
:::

### 搜索事件监听
:::demo
```html
<template>
  <nut-searchbar v-model="searchValue" @search="search"></nut-searchbar>
</template>
<script lang="ts">
  import { toRefs, reactive } from 'vue';
  import { Toast } from '@nutui/nutui';
  export default {
    setup() {
      const state = reactive({
        searchValue: ""
      });

      const search = function () {
        Toast.text('搜索触发');
      };

      return {
        ...toRefs(state),
        search,
      };
    }
  };
</script>
```
:::

### 显示搜索 icon
:::demo
```html
<template>
  <nut-searchbar v-model="searchValue">
    <template v-slot:leftin>
      <nut-icon size="14" name="search2"></nut-icon>
    </template>
  </nut-searchbar>
</template>
<script lang="ts">
  import { toRefs, reactive } from 'vue';
  import { Icon } from '@nutui/nutui';
  export default {
    setup() {
      const state = reactive({
        searchValue: ""
      });

      return {
        ...toRefs(state),
      };
    }
  };
</script>
```
:::

### 右侧添加搜索文字
:::demo
```html
<template>
  <nut-searchbar v-model="searchValue">
    <template v-slot:rightout>
      搜索
    </template>
  </nut-searchbar>
</template>
<script lang="ts">
  import { toRefs, reactive } from 'vue';
  export default {
    setup() {
      const state = reactive({
        searchValue: ""
      });

      return {
        ...toRefs(state),
      };
    }
  };
</script>
```
:::

### 更改输入框内部及外部的背景样式
:::demo
```html
<template>
  <nut-searchbar v-model="searchValue" background="linear-gradient(to right, #9866F0, #EB4D50)" input-background="#fff"> </nut-searchbar>
</template>
<script lang="ts">
  import { toRefs, reactive } from 'vue';
  export default {
    setup() {
      const state = reactive({
        searchValue: ""
      });

      return {
        ...toRefs(state),
      };
    }
  };
</script>
```
:::

### 自定义清除按钮 icon
:::demo
```html
<template>
  <nut-searchbar v-model="searchValue" :clear-icon="icon"> </nut-searchbar>
</template>
<script lang="ts">
  import { toRefs, reactive } from 'vue';
  export default {
    setup() {
      const icon = 
      'https://img10.360buyimg.com/imagetools/jfs/t1/170133/30/22902/10546/61833626E32d7ccde/a7c373ba30de9a89.png';
      const state = reactive({
        searchValue: ""
      });

      return {
        ...toRefs(state),
        icon
      };
    }
  };
</script>
```
:::

### 显示全部 icon
:::demo
```html
<template>
  <nut-searchbar v-model="searchValue">
    <template v-slot:leftout>
      <nut-icon @click="clickLeft" size="20" name="left"></nut-icon>
    </template>
    <template v-slot:leftin>
      <nut-icon size="14" name="search2"></nut-icon>
    </template>
    <template v-slot:rightin>
      <nut-icon size="20" name="photograph"></nut-icon>
    </template>
    <template v-slot:rightout>
      <nut-icon size="20" name="message"></nut-icon>
    </template>
  </nut-searchbar> 
</template>
<script lang="ts">
  import { toRefs, reactive } from 'vue';
  import { Icon } from '@nutui/nutui';
  export default {
    setup() {
      const state = reactive({
        searchValue: ""
      });

      return {
        ...toRefs(state),
      };
    }
  };
</script>
```
:::

## API
### Props
    
| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| v-model	         | 当前输入的值   | Number / String | ''      |
| label `v3.1.21`| 搜索框左侧文本 | String | '' |
| shape | 搜索框形状，可选值为 round | String | square |
| max-length         | 最大输入长度   | [Number,String] | '9999'      |
| input-type    | 输入框类型   | String | 'text'      |
| placeholder        | 输入框默认暗纹  | String | '请输入'   |
| clearable          | 是否展示清除按钮 | Boolean | true     |
| clear-icon `v3.2.2`         | 自定义清除按钮图标 | String | "circle-close"     |
| background      | 输入框外部背景 | String |   '#fff'   |
| input-background   | 输入框内部背景 | String |   '#f7f7f7'   |
| confirm-type   | 键盘右下角按钮的文字（`仅支持小程序`），仅在`type='text'`时生效,可选值 `send`：发送、`search`：搜索、`next`：下一个、`go`：前往、`done`：完成 | String |   `done`   |
| input-background   | 输入框内部背景 | String |   '#f7f7f7'   |
| autofocus `v3.1.21` | 是否自动聚焦 | boolean | false |
| focus-style `v3.2.2` | 聚焦时搜索框样式 | Object | - |
| disabled `v3.1.21` | 是否禁用输入框 | boolean | false |
| readonly `v3.1.21`| 输入框只读 | boolean | false |
| input-align `v3.1.21`| 对齐方式，可选`center` `right` | string | `left` |



### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| change  | 输入内容时触发 | val, event |
| focus  | 聚焦时触发 | val, event |
| blur  | 失焦时触发 | val, event |
| clear  | 点击清空时触发 | val |
| search  | 按下 ENTER 键时触发 | val, event |
| click-input `v3.1.21`|	点击输入区域时触发	 |	event |
| click-left-icon `v3.1.21`|	点击左侧图标时触发 |	val, event |
| click-right-icon `v3.1.21`|	点击右侧图标时触发 |	val, event |

### Slots

| 名称          | 说明                 |
|---------------|----------------------|
| leftin      | 输入框内 左icon  |
| leftout     | 输入框外 左icon |
| rightin     | 输入框内 右icon |
| rightout    | 输入框外 右icon |
