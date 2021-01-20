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
<nut-input v-model:value="state.val1" @change="change" label="标题：" />

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
### 文本域

```html
 <nut-input v-model:value="state.val7" @change="change" autosize="true" type="textarea" placeholder="文本域" label="留言："/>
<nut-input v-model:value="state.val7" @change="change" rows="5" type="textarea" placeholder="设置输入五行"  label="留言："/>

```
### 文本域字数统计

```html
 <nut-input v-model:value="state.val8" @change="change" rows="5" limitShow="true" maxLength="20" type="textarea" placeholder="设置输入五行" label="留言："/>

```


| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| type         | 类型，可选值为 `text` `textarea` `number`  等 | String |`text`         |
| value      | 输入值，双向绑定 | String |  -     |
| placeholder         | 为空时占位符 | String |       -       |
| placeholder-style | placeholder 样式     | String | - |
| label          | 	左侧文案                       | string | -             |
| disabled          | 	是否禁用                       | boolean | `false`              |
| readonly          | 是否只读                        | boolean | `false`               |
| clear-btn       | 是否带清除按钮（icon）                        | boolean | `true`               |
| required          | 是否带必填的*号，且blur事件做非空校验                       | boolean | `false`               |
| maxlength          | 限制最长输入字符                   | string/number | -               |
| rows          | textarea时高度                   | string/number | 2             |
| limit-show          | textarea时是否展示输入字符。须设置maxlength                        | boolean | `false`               |

| change          | 输入内容时触发                        | function | -               |
| focus          | 聚焦时触发                        | function | -               |
| blur          | 失焦时触发                        | function | -               |
| clear          | 点击清空时触发                        | function | -               |








