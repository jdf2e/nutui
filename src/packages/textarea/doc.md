# TextArea 文本域组件

### 介绍

支持多行文本

### 安装

``` javascript
import { createApp } from 'vue';
import { Textarea } from '@nutui/nutui';

const app = createApp();
app.use(Textarea);

```
## 代码演示

### 基础用法


```html
<nut-textarea
  v-model="state.val0"
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
  v-model="state.val1"
  @change="change"
  rows="5"
  :limit-show="true"
  max-length="20"
  type="textarea"
  placeholder="设置输入五行"
  label="留言："
/>
```


### Prop

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| value      | 输入值，支持双向绑定 | String |  -     |
| placeholder         | 为空时占位符 | String |       `'请输入信息'`       |
| label          | 	左侧文案                       | String | -             |
| max-length          | 限制最长输入字符                   | String、Number | -               |
| rows          | textarea的高度   | String、Number | `2`             |
| limit-show          | textarea是否展示输入字符。须配合`max-length`使用  | Boolean | `false` |
| autosize          | 高度是否可拉伸  | Boolean | `false` |
| text-align          | 文本位置,可选值`left`,`center`,`right`     | String | `left` |
| readonly          | 只读属性     | Boolean | `false` |
| disabled          | 禁用属性     | Boolean | `false` |


### Event

| 名称  | 说明     | 回调参数    |
|-------|----------|-------------|
| change | 输入内容时触发 | val |
| focus | 聚焦时触发 | val |
| blur | 失焦时触发 | val |








