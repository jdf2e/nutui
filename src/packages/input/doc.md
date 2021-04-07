# Input 输入框组件

### 介绍

单行输入框

### 安装

``` javascript
import { createApp } from 'vue';
import { Input } from '@nutui/nutui';

const app = createApp();
app.use(Input);

```
## 代码演示

### 基础用法

双向绑定

```html
<nut-input
      v-model="state.val1"
      @change="change"
      @focus="focus"
      @blur="blur"
      label="文本"
    />
<nut-input placeholder="请输入文本"
      @change="change"
      v-model="state.val0"
      :require-show="true"
      label="文本"
      @clear="clear"
    />
```

### 禁用和只读


```html
<nut-input v-model="state.val2" @change="change"  disabled="true" label="标题："/>
<nut-input v-model="state.val3" @change="change" readonly="true"  label="标题："/>
```

### 限制输入长度

```html
 <nut-input v-model="state.val4" @change="change" max-length="7" label="限制7" />
```
### 其他类型

```html
<nut-input v-model="state.val0" @change="change" type="password" label="密码"/>
<nut-input v-model="state.val5" @change="change" type="number" label="整数" />
<nut-input v-model="state.val6" @change="change" type="digit" placeholder="支持小数点的输入" label="数字"/>
```


### Prop

| 参数          | 说明                                   | 类型           | 默认值  |
|---------------|----------------------------------------|----------------|---------|
| v-model         | 输入值，双向绑定                       | String         | -       |
| type          | 类型，可选值为 `text` `number`  等     | String         | `text`  |
| placeholder   | 为空时占位符                           | String         | -       |
| label         | 左侧文案                               | String         | -       |
| require-show  | 左侧*号是否展示                        | Boolean        | `false` |
| disabled      | 是否禁用                               | Boolean        | `false` |
| readonly      | 是否只读                               | Boolean        | `false` |
| max-length    | 限制最长输入字符                       | String、Number | -       |
| disable-clear | 禁止展示清除icon                       | Boolean        | `false` |
| text-align    | 文本位置,可选值`left`,`center`,`right` | String         | `left`  |

### Event

| 名称   | 说明           | 回调参数 |
|--------|----------------|----------|
| change | 输入内容时触发 | val      |
| focus  | 聚焦时触发     | val      |
| blur   | 失焦时触发     | val      |
| clear  | 点击清空时触发 | val      |








