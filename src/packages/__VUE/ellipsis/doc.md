# ellipsis

### 介绍

展示空间不足时，隐去部分内容并用“...”替代。

### 安装

```js
import { createApp } from 'vue';
import { Ellipsis } from '@nutui/nutui';

const app = createApp();
app.use(Ellipsis);
```

### 头部省略

> demo: ellipsis start

### 尾部省略

> demo: ellipsis end

### 中间省略

> demo: ellipsis middle

### 多行省略

> demo: ellipsis row

### 展开收起

> demo: ellipsis expand

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| content | 文本内容 | string | - |
| direction | 省略位置，可选值 `start` \| `end` \| `middle` | string | `end` |
| rows | 展示几行 | number | `1` |
| expand-text | 展开操作的文案 | string | `''` |
| collapse-text | 收起操作的文案 | string | `''` |
| symbol | 省略的符号 | string | `...` |
| line-height | 容器的行高 | string \| number | `20` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 文本点击时触发 | - |
| change | 点击展开收起时触发 | `expand` 或 `collapse` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 默认值 |
| --- | --- |
| --nut-ellipsis-expand-collapse-color | _#3460fa_ |
