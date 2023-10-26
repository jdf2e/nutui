# Popup 弹出层

### 介绍

弹出层容器，用于展示弹窗、信息提示等内容，支持多个弹出层叠加展示

### 安装

```js
import { createApp } from 'vue';
import { Popup } from '@nutui/nutui-taro';

const app = createApp();
app.use(Popup);
```

### 基础用法

通过设置 `visible` 控制显示/隐藏

:::demo

```vue
<template>
  <nut-cell title="展示弹出层" is-link @click="show = true"></nut-cell>
  <nut-popup :style="{ padding: '30px 50px' }" v-model:visible="show">正文</nut-popup>
</template>
<script setup>
import { ref } from 'vue';
const show = ref(false);
</script>
```

:::

### 弹出位置

通过设置 `position` 的值来控制弹出位置

:::demo

```vue
<template>
  <nut-cell title="顶部弹出" is-link @click="showTop = true"></nut-cell>
  <nut-popup position="top" :style="{ height: '20%' }" v-model:visible="showTop"></nut-popup>
  <nut-cell title="底部弹出" is-link @click="showBottom = true"></nut-cell>
  <nut-popup position="bottom" :style="{ height: '20%' }" v-model:visible="showBottom"></nut-popup>
  <nut-cell title="左侧弹出" is-link @click="showLeft = true"></nut-cell>
  <nut-popup position="left" :style="{ width: '20%', height: '100%' }" v-model:visible="showLeft"></nut-popup>
  <nut-cell title="右侧弹出" is-link @click="showRight = true"></nut-cell>
  <nut-popup position="right" :style="{ width: '20%', height: '100%' }" v-model:visible="showRight"></nut-popup>
</template>
<script setup>
import { ref } from 'vue';
const showTop = ref(false);
const showBottom = ref(false);
const showLeft = ref(false);
const showRight = ref(false);
</script>
```

:::

### 图标

通过 `closeable` 控制图标是否可关闭，`close-icon-position` 来设置图标的位置，`close-icon` 来自定义显示图标

:::demo

```vue
<template>
  <nut-cell title="关闭图标" is-link @click="showIcon = true"></nut-cell>
  <nut-popup position="bottom" closeable :style="{ height: '20%' }" v-model:visible="showIcon"></nut-popup>
  <nut-cell title="图标位置" is-link @click="showIconPosition = true"></nut-cell>
  <nut-popup
    position="bottom"
    closeable
    close-icon-position="top-left"
    :style="{ height: '20%' }"
    v-model:visible="showIconPosition"
  ></nut-popup>
  <nut-cell title="自定义图标" is-link @click="showCloseIcon = true"></nut-cell>
  <nut-popup
    position="bottom"
    closeable
    close-icon-position="top-left"
    :style="{ height: '20%' }"
    v-model:visible="showCloseIcon"
  >
    <template #close-icon>
      <Heart></Heart>
    </template>
  </nut-popup>
</template>
<script setup>
import { ref } from 'vue';
import { Heart } from '@nutui/icons-vue-taro';
const showIcon = ref(false);
const showIconPosition = ref(false);
const showCloseIcon = ref(false);
</script>
```

:::

### 圆角弹框

通过设置 `round` 来控制是否显示圆角

:::demo

```vue
<template>
  <nut-cell title="圆角弹框" is-link @click="show = true"></nut-cell>
  <nut-popup position="bottom" closeable round :style="{ height: '30%' }" v-model:visible="show"></nut-popup>
</template>
<script setup>
import { ref } from 'vue';
const show = ref(false);
</script>
```

:::

:::

### 多层堆叠

:::demo

```vue
<template>
  <nut-cell title="多层堆叠" is-link @click="showPop1 = true"></nut-cell>
  <nut-popup :style="{ padding: '30px 50px' }" v-model:visible="showPop1">
    <div @click="showPop2 = true">点击它</div>
  </nut-popup>
  <nut-popup :style="{ padding: '30px 50px' }" v-model:visible="showPop2">正文</nut-popup>
</template>
<script setup>
import { ref } from 'vue';
const showPop1 = ref(false);
const showPop2 = ref(false);
</script>
```

:::

### 禁止滚动穿透

> 4.1.5 版本更新，仅适用于 H5 与微信小程序

使用这类全局遮罩类型的组件时，滑动组件可能会出现底层页面一起滑动的问题。

开启 `lock-scroll` 可以阻止 Popup 的背景遮罩层的滚动穿透问题，已默认开启。

使用 Taro 提供的 [catch-move](https://taro-docs.jd.com/docs/vue-overall#%E4%BA%8Ccatchmove) 可以阻止 Popup 的内容区域的滚动穿透问题，但会导致其本身无法滑动。

```vue
<template>
  <nut-popup :catch-move="true">
    <view>在该内容区域溢出时，无法滑动</view>
  </nut-popup>
</template>
```

如果需要内容支持溢出滚动，则需要包裹一层 `scroll-view` 组件。

```vue
<template>
  <nut-popup :catch-move="true">
    <scroll-view>
      <view>在该内容溢出时，则可以正常滑动</view>
    </scroll-view>
  </nut-popup>
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|  ---  |  ---  |  ---  |  ---  |
| v-model:visible | 控制当前组件显示/隐藏 | boolean | `false` |
| z-index | 遮罩层级 | string \| number | `2000` |
| duration | 组件显示/隐藏的动画时长，单位秒 | string \| number | `0.3` |
| lock-scroll | 背景是否锁定 | boolean | `true` |
| overlay | 是否显示遮罩 | boolean | `true` |
| close-on-click-overlay | 是否点击遮罩关闭 | boolean | `true` |
| position | 弹出位置（top,bottom,left,right,center） | string | `"center"` |
| transition | 动画名 | string | - |
| style | 自定义弹框样式 | CSSProperties | - |
| pop-class | 自定义弹框类名 | string | - |
| closeable | 是否显示关闭按钮 | boolean | `false` |
| close-icon-position | 关闭按钮位置（top-left,top-right,bottom-left,bottom-right） | string | `"top-right"` |
| destroy-on-close | 弹层关闭后 `slot`内容会不会清空 | boolean | `true` |
| round | 是否显示圆角 | boolean | `false` |
| overlay-class | 自定义遮罩层类名 | string | '' |
| overlay-style | 自定义遮罩层样式 | string | '' |
| safe-area-inset-bottom | 是否开启 iphone 系列全面屏底部安全区适配,仅当 `position` 为 `bottom` 时有效 | boolean | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
|  ---  |  ---  |  ---  |
| click-pop | 点击弹出层时触发 | `event: Event` |
| click-close-icon | 点击关闭图标时触发 | `event: Event` |
| open | 打开弹框时触发 | - |
| close | 关闭弹框时触发 | - |
| opened | 遮罩打开动画结束时触发 | `el: Element` |
| closed | 遮罩关闭动画结束时触发 | `el: Element` |
| click-overlay | 点击遮罩触发 | `event: Event` |

### Slots

| 名称 | 说明 |
|  ---  |  ---  |
| default | 自定义内嵌内容 |
| close-icon | 关闭按钮的自定义图标 |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 默认值 |
|  ---  |  ---  |
| --nut-popup-close-icon-margin | _16px_ |
| --nut-popup-border-radius | _20px_ |
