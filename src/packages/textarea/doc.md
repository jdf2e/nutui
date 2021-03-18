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


```html
<nut-textarea
      v-model:value="state.val0"
      @change="change"
      rows="5"
       placeholder="高度可拉伸"
      :autosize="true"
      label="留言："
    />
```

### 显示字数统计


```html
 <nut-textarea
       v-model:value="state.val1"
      @change="change"
      rows="5"
      :limitShow="true"
      maxLength="20"
      type="textarea"
      placeholder="设置输入五行"
      label="留言："
    />
```



| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| value      | 输入值，双向绑定 | String |  -     |
| placeholder         | 为空时占位符 | String |       -       |
| label          | 	左侧文案                       | string | -             |
| maxlength          | 限制最长输入字符                   | string/number | -               |
| rows          | textarea时高度                   | string/number | 2             |
| limit-show          | textarea时是否展示输入字符。须设置maxlength                        | boolean | `false`               |
| change          | 输入内容时触发                        | function | -               |
| focus          | 聚焦时触发                        | function | -               |
| blur          | 失焦时触发                        | function | -               |
| clear          | 点击清空时触发                        | function | -               |








