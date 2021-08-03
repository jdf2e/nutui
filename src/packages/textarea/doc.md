# TextArea 文本域

### 介绍

文本框内输入或编辑文字，支持限制输入数量。

### 安装

```javascript
import { createApp } from 'vue'
import { TextArea } from '@nutui/nutui'

const app = createApp()
app.use(TextArea)
```

## 代码演示

### 基础用法

```html
<textarea defaultValue="{value1}" />
```

```javascript
const [value1, UpdateValue1] = useState('')
```

### 显示字数统计

```html
<textarea defaultValue="{value2}" limitShow maxlength="20" />
```

### 高度自定义，拉伸

```html
<textarea defaultValue="{value3}" rows="10" autosize />
```

### 只读、禁用

```html
<textarea readonly defaultValue="textarea只读状态" />
<textarea disabled defaultValue="textarea禁用状态" limitShow maxlength="20" />
```

## API

### Props

| 参数         | 说明                                              | 类型           | 默认值         |
| ------------ | ------------------------------------------------- | -------------- | -------------- |
| defaultValue | 初始默认值，支持双向绑定                          | String         | -              |
| placeholder  | 设置占位提示文字                                  | String         | `'请输入内容'` |
| maxlength    | 限制最长输入字符                                  | String、Number | -              |
| rows         | textarea 的高度                                   | String、Number | `2`            |
| limitShow    | textarea 是否展示输入字符。须配合`max-length`使用 | Boolean        | `false`        |
| autosize     | 高度是否可拉伸                                    | Boolean        | `false`        |
| textAlign    | 文本位置,可选值`left`,`center`,`right`            | String         | `left`         |
| readonly     | 只读属性                                          | Boolean        | `false`        |
| disabled     | 禁用属性                                          | Boolean        | `false`        |

### Events

| 名称   | 说明           | 回调参数 |
| ------ | -------------- | -------- |
| change | 输入内容时触发 | val      |
| focus  | 聚焦时触发     | val      |
| blur   | 失焦时触发     | val      |
