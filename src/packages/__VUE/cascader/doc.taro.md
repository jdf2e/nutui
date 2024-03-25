# Cascader 级联选择

### 介绍

级联选择器，用于多层级数据的选择，典型场景为省市区选择。

### 安装

```js
import { createApp } from 'vue'
import { Cascader } from '@nutui/nutui-taro'

const app = createApp()
app.use(Cascader)
```

### 基础用法

传入`options`列表。

> demo: cascader basic dentry

### 自定义属性名称

可通过`textKey`、`valueKey`、`childrenKey`指定属性名。

> demo: cascader custom dentry

### 动态加载

使用`lazy`标识是否需要动态获取数据，此时不传`options`代表所有数据都需要通过`lazyLoad`加载，首次加载通过`root`属性区分，当遇到非叶子节点时会调用`lazyLoad`方法，参数为当前节点和`resolve`方法，注意`resolve`方法必须调用，不传子节点时会被当做叶子节点处理。

> demo: cascader lazy dentry

### 部分数据动态加载

> demo: cascader partial dentry

### 自动转换

如果你的数据为可转换为树形结构的扁平结构时，可以通过`convertConfig`告诉组件需要进行自动转换，`convertConfig`接受 4 个参数，`topId`为顶层节点的父级 id，`idKey`为节点唯一 id，`pidKey`为指向父节点 id 的属性名，存在`sortKey`将根据指定字段调用 Array.prototype.sort()进行同层排序。

> demo: cascader convert dentry

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 选中值，双向绑定 | Array | - |
| v-model:visible | 显示选择层 | boolean | `false` |
| options | 级联数据 | Array | - |
| lazy | 是否开启动态加载 | boolean | - |
| lazy-load | 动态加载回调，开启动态加载时生效 | Function | - |
| value-key | 自定义 `options` 结构中 `value` 的字段 | string | - |
| text-key | 自定义 `options` 结构中 `text` 的字段 | string | - |
| children-key | 自定义 `options` 结构中 `children` 的字段 | string | - |
| convert-config | 当 `options` 为可转换为树形结构的扁平结构时，配置转换规则 | object | - |
| title | 标题 | string | `''` |
| close-icon-position | 取消按钮位置，继承 `Popup` 组件 | string | `"top-right"` |
| closeable | 是否显示关闭按钮，继承 `Popup` 组件 | boolean | `false` |
| poppable | 是否需要弹层展示（设置为 `false` 后，`title` 失效） | boolean | `true` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 选中值改变时触发 | `(value, pathNodes)` |
| path-change | 选中项改变时触发 | `(pathNodes)` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 默认值 |
| --- | --- |
| --nut-cascader-font-size | _var(--nut-font-size-2)_ |
| --nut-cascader-line-height | _22px_ |
| --nut-cascader-tabs-item-padding | _0 10px_ |
| --nut-cascader-bar-padding | _24px 20px 17px_ |
| --nut-cascader-bar-font-size | _var(--nut-font-size-4)_ |
| --nut-cascader-bar-line-height | _20px_ |
| --nut-cascader-bar-color | _var(--nut-title-color)_ |
| --nut-cascader-item-padding | _10px 20px_ |
| --nut-cascader-item-color | _var(--nut-title-color)_ |
| --nut-cascader-item-font-size | _var(--nut-font-size-2)_ |
| --nut-cascader-item-active-color | _var(--nut-primary-color)_ |
