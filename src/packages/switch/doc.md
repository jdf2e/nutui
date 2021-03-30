#  Switch组件

### 介绍

用来打开或关闭选项。

### 安装

``` javascript
import { createApp } from 'vue';
import { Switch } from '@nutui/nutui';
const app = createApp();
app.use(Switch);

```

## 代码演示

### 基础用法

``` html
<nut-switch v-model="checked" />
```
``` javascript
import { ref } from 'vue';
export default {
  setup() {
    const checked = ref(true);
    return { checked };
  },
};
```

### 禁用状态

``` html
<nut-switch v-model="checked" disable />
```

### change事件

``` html
<nut-switch v-model="checked" @change="change" />
```
``` javascript
import { ref, getCurrentInstance } from 'vue';
export default {
  setup() {
    let { proxy } = getCurrentInstance() as any;
    const checked = ref(true);
    const change = (value: boolean, event: Event) => {
      proxy.$toast.text(`触发了change事件，开关状态：${value}`);
    };
    return {
      checked,
      change
    };
  }
};
```

### 异步控制

``` html
<nut-switch :model-value="checkedAsync" @change="changeAsync" />
```
``` javascript
import { ref, getCurrentInstance } from 'vue';
export default {
  setup() {
    let { proxy } = getCurrentInstance() as any;
    const checkedAsync = ref(true);
    const changeAsync = (value: boolean, event: Event) => {
      proxy.$toast.text(`2秒后异步触发 ${value}`);
      setTimeout(() => {
        checkedAsync.value = value;
      }, 2000);
    };
    
    return {
      checkedAsync,
      changeAsync
    };
  }
};
```
### 自定义颜色

``` html
<nut-switch v-model="checked" @change="switchChange" active-color="blue" />
```
### 支持文字

``` html
<nut-switch v-model="checked" @change="switchChange" active-text="开" inactive-text="关" />
```

## API

### Props

| 参数           | 说明             | 类型    | 默认值                |
|----------------|------------------|---------|-----------------------|
| v-model        | 开关状态         | Boolean | `false`               |
| disable        | 禁用状态         | Boolean | `false`               |
| active-color   | 打开时的背景颜色 | String  | `#fa2c19`    |
| inactive-color | 关闭时的背景颜色 | String  | `#ebebeb` |
| active-text    | 打开时文字描述   | String  | -                     |
| inactive-text  | 关闭时文字描述   | String  | -                     |


### Events

| 事件名 | 说明           | 回调参数                      |
|--------|----------------|-------------------------------|
| change | 切换开关时触发 | (value: boolean,event: Event) |
    