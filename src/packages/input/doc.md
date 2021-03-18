# Input 输入框组件

### 介绍


### 安装

``` javascript
import { createApp } from 'vue';
import { input } from '@nutui/nutui';

const app = createApp();
app.use(input);

```
## 代码演示

### 基础用法

双向绑定

```html
<nut-input
      v-model:value="state.val1"
      @change="change"
      @focus="focus"
      @blur="blur"
      label="文本"
    />
<nut-input placeholder="请输入文本"
      @change="change"
      v-model:value="state.val0"
      :requireShow="true"
      label="文本"
      @clear="clear"
    />
```

### 禁用和只读


```html
<nut-input v-model:value="state.val2" @change="change"  disabled="true" label="标题："/>
<nut-input v-model:value="state.val3" @change="change" readonly="true"  label="标题："/>
```

### 限制输入长度

```html
 <nut-input v-model:value="state.val4" @change="change" maxLength="7" label="限制7：" />
```
### 其他类型

```html
<nut-input v-model:value="state.val0" @change="change" type="password" label="密码："/>
<nut-input v-model:value="state.val5" @change="change" type="digit" label="整数：" />
<nut-input v-model:value="state.val6" @change="change" type="digit" placeholder="支持小数点的输入" label="数字："/>
```



| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| type         | 类型，可选值为 `text` `textarea` `number`  等 | String |`text`         |
| value      | 输入值，双向绑定 | String |  -     |
| placeholder         | 为空时占位符 | String |       -       |
| label          | 	左侧文案                       | string | -             |
| requireShow          |左侧*号是否展示                       | boolean | `false`           |
| disabled          | 	是否禁用                       | boolean | `false`              |
| readonly          | 是否只读                        | boolean | `false`               |
| maxlength          | 限制最长输入字符                   | string/number | -               |
| disableClear          | 禁止展示清除icon                   | boolean | false             |
| textAlign          | 文本位置                   | string | `left`             |
| change          | 输入内容时触发                        | function | -               |
| focus          | 聚焦时触发                        | function | -               |
| blur          | 失焦时触发                        | function | -               |
| clear          | 点击清空时触发                        | function | -               |








