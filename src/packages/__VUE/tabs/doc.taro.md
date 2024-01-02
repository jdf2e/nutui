# Tabs 选项卡切换

### 介绍

常用于平级区域大块内容的的收纳和展现，支持内嵌标签形式和渲染循环数据形式

### 安装

```js
import { createApp } from 'vue';
import { Tabs, TabPane } from '@nutui/nutui-taro';

const app = createApp();
app.use(Tabs);
app.use(TabPane);
```

### 基础用法

> demo: tabs basic nav

### Smile 类型

> demo: tabs smile nav

### 自动高度

> demo: tabs auto-height nav

### 手势滑动切换

> demo: tabs swipeable nav

### 标题滚动（上下布局）

> demo: tabs scroll nav

### 标题滚动（左右布局）

> demo: tabs vertical nav

### 左右布局 + Smile 类型

> demo: tabs vertical-smile nav

### 字体尺寸

> demo: tabs size nav

### 自定义标签栏

> demo: tabs custom nav

## API

### Tabs Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 绑定当前选中标签的标识符 | number \| string | `0` |
| color | 标签选中色 | string | `#1a1a1a` |
| background | 标签栏背景颜色 | string | `#f5f5f5` |
| direction | 使用横纵方向 可选值 horizontal、vertical | string | `horizontal` |
| type | 选中底部展示样式 可选值 line、smile | string | `line` |
| swipeable`4.0.3` | 是否开启手势左右滑动切换 | boolean | `false` |
| title-scroll | 标签栏是否可以滚动 | boolean | `false` |
| ellipsis | 是否省略过长的标题文字 | boolean | `true` |
| animated-time | 切换动画时长，单位 ms。0 代表无动画，此时必须设置 `pane-key`(_小程序场景数据过大建议设置 0，解决切换卡顿问题_) | number \| string | `300` |
| title-gutter | 标签间隙 | number \| string | `0` |
| size | 标签栏字体尺寸大小 可选值 large normal small | string | `normal` |
| auto-height | 自动高度。设置为 true 时，nut-tabs 和 nut-tabs\_\_content 会随着当前 nut-tab-pane 的高度而发生变化。 | boolean | `false` |
| name `v4.2.5 废弃` | 必须设置 name 才能开启 title-scroll 功能，版本 >=4.2.5 时不再需要。 | string | '' |

### Tabs Slots

| 名称 | 说明 |
| --- | --- |
| titles | 自定义导航区域 |
| default | 自定义内容 |

### TabPane Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 标题 | string | - |
| pane-key | 标签 Key , 匹配的标识符 | string | - |
| disabled | 是否禁用标签 | boolean | false |

### TabPane Slots

| 名称 | 说明 |
| --- | --- |
| default | 自定义内容 |

### Tabs Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击标签时触发 | {title,paneKey,disabled} |
| change | 当前激活的标签改变时触发 | {title,paneKey,disabled} |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 默认值 |
| --- | --- |
| --nut-tabs-tab-smile-color | _var(--nut-primary-color)_ |
| --nut-tabs-titles-border-radius | _0_ |
| --nut-tabs-titles-item-large-font-size | _var(--nut-font-size-3)_ |
| --nut-tabs-titles-item-font-size | _var(--nut-font-size-2)_ |
| --nut-tabs-titles-item-small-font-size | _var(--nut-font-size-1)_ |
| --nut-tabs-titles-item-color | _var(--nut-title-color)_ |
| --nut-tabs-titles-item-active-color | _var(--nut-title-color)_ |
| --nut-tabs-titles-background-color | _var(--nut-help-color)_ |
| --nut-tabs-horizontal-tab-line-color | _linear-gradient(90deg,var(--nut-primary-color) 0%,rgba(#fa2c19, 0.15) 100%)_ |
| --nut-tabs-horizontal-titles-height | _46px_ |
| --nut-tabs-horizontal-titles-item-min-width | _50px_ |
| --nut-tabs-horizontal-titles-item-active-line-width | _40px_ |
| --nut-tabs-vertical-tab-line-color | _linear-gradient(180deg,var(--nut-primary-color) 0%,rgba(#fa2c19, 0.15) 100%)_ |
| --nut-tabs-vertical-titles-item-height | _40px_ |
| --nut-tabs-vertical-titles-item-active-line-height | _14px_ |
| --nut-tabs-vertical-titles-width | _100px_ |
| --nut-tabs-titles-item-line-border-radius | _0_ |
| --nut-tabs-titles-item-line-opacity | _1_ |
