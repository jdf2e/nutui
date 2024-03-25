# Toast 吐司

### 介绍

用于轻提示。

> 当前组件 Taro 环境暂不支持函数式调用，推荐使用 Taro.API 使用原生组件 https://taro-docs.jd.com/docs/apis/ui/interaction/showToast

### 安装

```js
import { createApp } from 'vue'
import { Toast } from '@nutui/nutui-taro'

const app = createApp()
app.use(Toast)
```

### 基础用法

:::

```vue
<template>
  <nut-toast :msg="state.msg" v-model:visible="state.show" :type="state.type" @closed="onClosed" :cover="state.cover" />
  <nut-cell title="Text 文字提示" is-link @click="openToast('text', '网络失败，请稍后再试~')"></nut-cell>
  <nut-cell
    title="Title 标题文字"
    is-link
    @click="openToast('text', '网络失败，请稍后再试~', false, '标题文字')"
  ></nut-cell>
  <nut-cell
    title="Text 自定义位置"
    is-link
    @click="openToast('text', '自定义位置', false, '', '20%', false)"
  ></nut-cell>
  <nut-cell title="Success 成功提示" is-link @click="openToast('success', '成功提示')"></nut-cell>
  <nut-cell title="Error 失败提示" is-link @click="openToast('fail', '失败提示')"></nut-cell>
  <nut-cell title="Warning 警告提示" is-link @click="openToast('warn', '警告提示')"></nut-cell>
  <nut-cell title="Loading 加载提示" is-link @click="openToast('loading', '加载中')"></nut-cell>
  <nut-cell title="Loading 带白色背景遮罩" is-link @click="openToast('loading', '加载中', true)"></nut-cell>
</template>
<script setup>
import { reactive } from 'vue'
const state = reactive({
  msg: 'toast',
  type: 'text',
  show: false,
  cover: false,
  title: '',
  bottom: '',
  center: true
})
const openToast = (type, msg, cover = false) => {
  state.show = true
  state.msg = msg
  state.type = type
  state.cover = cover
  state.title = title
  state.bottom = bottom
  state.center = center
}
const onClosed = () => console.log('closed')
</script>
```

:::

## API

### Props

| 字段 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| msg | 消息文本内容,支持传入 HTML | string \| VNode | `""` |
| duration | 展示时长（毫秒）<br>值为 0 时，toast 不会自动消失（loading 类型默认为 0） | number | `2000` |
| title | 标题 | string | `''` |
| center | 是否展示在页面中部（为 false 时展示在底部） | boolean | `true` |
| bottom | 距页面底部的距离（像素或者百分比），option.center 为 false 时生效 | string | `"30px" ` |
| text-align-center | 多行文案是否居中 | boolean | `true` |
| bg-color | 背景颜色（透明度） | string | "rgba(0, 0, 0, 0.8)" |
| custom-class | 自定义类名 | string | "" |
| icon | 自定义图标，**直接传入 Component 或者 h 函数** | Component | - |
| size | 文案尺寸，**small**/**base**/**large**三选一 | string | `"base"` |
| cover | 是否显示遮罩层，loading 类型默认显示 | boolean | loading 类型 true/`其他类型false` |
| cover-color | 遮罩层颜色，默认透明 | string | "rgba(0,0,0,0)" |
| loading-rotate | loading 图标是否旋转，仅对 loading 类型生效 | boolean | `true` |
| on-close | 关闭时触发的事件 | function | `null` |
| close-on-click-overlay | 是否在点击遮罩层后关闭提示 | boolean | `false` |
| toast-style | 提示框 style | object | `{}` |
| toast-class | 提示框 class | string | "" |
| type | 弹框类型 可选值（text、success、fail、warn、loading） | string | "" |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 默认值 |
| --- | --- |
| --nut-toast-title-font-size | _16px_ |
| --nut-toast-text-font-size | _14px_ |
| --nut-toast-font-color | _var(--nut-white)_ |
| --nut-toast-inner-padding | _24px 30px_ |
| --nut-toast-inner-bg-color | _rgba(0, 0, 0, 0.8)_ |
| --nut-toast-inner-border-radius | _12px_ |
| --nut-toast-cover-bg-color | _rgba(0, 0, 0, 0)_ |
