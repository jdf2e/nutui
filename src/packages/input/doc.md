# Input 输入框组件

### 介绍

单行输入框

### 安装

```javascript
import { createApp } from 'vue'
import { Input } from '@nutui/nutui'

const app = createApp()
app.use(Input)
```

## 代码演示

### 基础用法

```html
<input label="文本(异步)" defaultValue="{value1}" change="{change}" focus="{focus}" blur="{blur}" />
<input label="文本" defaultValue="{value2}" change="{change}" clear="{clear}" requireShow />
```

### 禁用和只读

```html
<input label="文本" defaultValue="禁止修改" disabled="{true}" />
<input label="文本" defaultValue="readonly只读" readonly="{true}" />
```

### 限制输入长度

```html
<input label="限制7" defaultValue="{value3}" maxlength="7" />
```

### 其他类型

```html
<input label="密码" defaultValue="{value4}" type="password" />
<input label="整数" defaultValue="{value5}" type="number" />
<input label="数字" defaultValue="" type="digit" placeholder="支持小数点的输入" />
```

### 代码

```js
const [value1, UpdateValue1] = useState('')
const [value2, UpdateValue2] = useState('')
const [value3, UpdateValue3] = useState('')
const [value4, UpdateValue4] = useState('')
const [value5, UpdateValue5] = useState('')
useEffect(() => {
  setTimeout(() => {
    UpdateValue1('异步文本')
  }, 5000)
}, [])
const change = (value: string, event: Event) => {
  UpdateValue2(value)
}
const focus = (value: string, event: Event) => {
  console.log('focus:', value, event)
}
const blur = (value: string, event: Event) => {
  console.log('blur:', value, event)
}
const clear = (value: string) => {
  console.log('clear:', value)
  UpdateValue2('')
}
```

### Prop

| 参数         | 说明                                   | 类型           | 默认值  |
| ------------ | -------------------------------------- | -------------- | ------- |
| defaultValue | 初始默认值，双向绑定                   | String         | -       |
| type         | 类型，可选值为 `text` `number` 等      | String         | `text`  |
| placeholder  | 为空时占位符                           | String         | -       |
| label        | 左侧文案                               | String         | -       |
| require-show | 左侧\*号是否展示                       | Boolean        | `false` |
| disabled     | 是否禁用                               | Boolean        | `false` |
| readonly     | 是否只读                               | Boolean        | `false` |
| max-length   | 限制最长输入字符                       | String、Number | -       |
| clearable    | 展示清除 icon                          | Boolean        | `true`  |
| text-align   | 文本位置,可选值`left`,`center`,`right` | String         | `left`  |

### Event

| 名称   | 说明           | 回调参数   |
| ------ | -------------- | ---------- |
| change | 输入内容时触发 | val ,event |
| focus  | 聚焦时触发     | val ,event |
| blur   | 失焦时触发     | val ,event |
| clear  | 点击清空时触发 | val        |
