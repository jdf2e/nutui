# ActionSheet 动作面板

### 介绍

从底部弹出的动作菜单面板。

### 安装

```js
import { createApp } from 'vue'
import { ActionSheet } from '@nutui/nutui-taro'

const app = createApp()
app.use(ActionSheet)
```

### 基础用法

> demo: actionsheet basic feedback

### 自定义信息

> demo: actionsheet custom feedback

### 选项状态

> demo: actionsheet status feedback

### 自定义内容

> demo: actionsheet content feedback

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model:visible | 是否展示动作面板 | boolean | `false` |
| menu-items | 列表项 | MenuItems[] | `[ ] ` |
| option-tag | 设置列表项标题展示使用参数 | string | `'name'` |
| option-sub-tag | 设置列表项二级标题展示使用参数 | string | `'subname'` |
| choose-tag-value | 设置选中项的值，和 `'option-tag'` 的值对应 | string | '' |
| color | 选中项颜色，当 `choose-tag-value == option-tag` 的值 生效 | string | `'#ee0a24'` |
| title | 设置列表项标题 | string | `''` |
| description | 设置列表项副标题/描述 | string | `''` |
| cancel-txt | 取消文案 | string | `'取消'` |
| close-abled | 遮罩层是否可关闭 | boolean | `true` |

### MenuItems 数据结构

| 键名 | 说明 | 类型 |
| --- | --- | --- |
| name | 标题 | string |
| subname | 二级标题 | string |
| color | 选项字体颜色（选中项颜色层级>选项字体颜色） | string |
| loading | 是否为 `loading` 状态 | boolean |
| disable | 是否为禁用状态 | boolean |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| choose | 选择之后触发 | 选中列表项 `item`, 选中的索引值 `index` |
| cancel | 点击取消文案时触发 | - |
| close | 点击遮罩层时触发 | event: Event |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件]()。

| 名称 | 默认值 |
| --- | --- |
| --nut-actionsheet-light-color | _#f6f6f6_ |
| --nut-actionsheet-item-border-bottom | _none_ |
| --nut-actionsheet-item-font-size | _var(--nut-font-size-2)_ |
| --nut-actionsheet-item-subdesc-font-size | _var(--nut-font-size-1)_ |
| --nut-actionsheet-item-cancel-border-top | _1px solid var(--nut-actionsheet-light-color)_ |
| --nut-actionsheet-item-line-height | _24px_ |
| --nut-actionsheet-item-font-color | _var(--nut-title-color)_ |
