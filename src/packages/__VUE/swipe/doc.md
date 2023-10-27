# Swipe 滑动手势

## 介绍

常用于单元格左右滑删除等手势操作

## 安装

```js
import { createApp } from 'vue';
import { Swipe } from '@nutui/nutui';

const app = createApp();
app.use(Swipe);
```

## 代码演示

### 基础用法

:::demo

```vue
<template>
  <nut-swipe>
    <nut-cell round-radius="0" title="左滑删除" />
    <template #right>
      <nut-button shape="square" style="height:100%" type="danger">删除</nut-button>
    </template>
  </nut-swipe>
</template>
```

:::

### 禁止滑动

:::demo

```vue
<template>
  <nut-swipe disabled>
    <nut-cell round-radius="0" title="禁止滑动" />
    <template #right>
      <nut-button shape="square" style="height:100%" type="danger">删除</nut-button>
    </template>
  </nut-swipe>
</template>
```

:::

### 左右滑动

:::demo

```vue
<template>
  <nut-swipe>
    <template #left>
      <nut-button shape="square" style="height:100%" type="success">选择</nut-button>
    </template>
    <nut-cell round-radius="0" title="左滑右滑都可以哦" />
    <template #right>
      <nut-button shape="square" style="height:100%" type="danger">删除</nut-button>
      <nut-button shape="square" style="height:100%" type="info">收藏</nut-button>
    </template>
  </nut-swipe>
</template>
```

:::

### 异步控制

:::demo

```vue
<template>
  <nut-switch v-model="checked" @change="changSwitch" />
  <nut-swipe ref="refSwipe">
    <nut-cell title="异步打开关闭"></nut-cell>
    <template #right>
      <nut-button shape="square" style="height:100%" type="danger">删除</nut-button>
    </template>
  </nut-swipe>
</template>
<script setup>
import { ref } from 'vue';
const refSwipe = ref();
const checked = ref(false);
const changSwitch = (value) => {
  if (value) {
    refSwipe.value?.open('left');
  } else {
    refSwipe.value?.close();
  }
};
</script>
```

:::

### 自定义

:::demo

```vue
<template>
  <nut-swipe>
    <template #left>
      <nut-button shape="square" style="height:100%" type="success">选择</nut-button>
    </template>
    <nut-cell title="商品描述">
      <template #link>
        <nut-input-number v-model="number" />
      </template>
    </nut-cell>
    <template #right>
      <nut-button shape="square" style="height:100%" type="danger">删除</nut-button>
      <nut-button shape="square" style="height:100%" type="info">收藏</nut-button>
    </template>
  </nut-swipe>
</template>
<script setup>
import { ref } from 'vue';
const number = ref(0);
</script>
```

:::

### 使用 SwipeGroup 控制 Swipe 之间互斥

此时各个 Swipe 的 name 为必填项。

:::demo

```vue
<template>
  <nut-swipe-group lock>
    <nut-swipe name="11">
      <nut-cell round-radius="0" title="左滑删除" />
      <template #right>
        <nut-button shape="square" style="height: 100%" type="danger">删除</nut-button>
      </template>
    </nut-swipe>
    <nut-swipe name="22">
      <nut-cell round-radius="0" title="左滑删除" />
      <template #right>
        <nut-button shape="square" style="height: 100%" type="danger">删除</nut-button>
      </template>
    </nut-swipe>
    <div>
      <nut-swipe name="33">
        <nut-cell round-radius="0" title="左滑删除" />
        <template #right>
          <nut-button shape="square" style="height: 100%" type="danger">删除</nut-button>
        </template>
      </nut-swipe>
    </div>
  </nut-swipe-group>
</template>
```

:::

## Swipe

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 唯一标识 | string | - |
| disabled | 是否禁用滑动 | string | `false` |
| touch-move-prevent-default | 是否阻止滑动事件行为 | boolean | `false` |
| touch-move-stop-propagation | 是否阻止滑动事件冒泡 | boolean | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| open | 滑动时触发，left 指向左滑，right 指向右滑 | `name, position: 'left' \| 'right'` |
| close | 关闭时触发，同上 | `name, position: 'left' \| 'right'` |

### Slots

| 名称 | 说明 |
| --- | --- |
| left | 左侧滑动内容 |
| default | 自定义内容 |
| right | 右侧滑动内容 |

### Methods

通过 [ref](https://vuejs.org/guide/essentials/template-refs.html) 可以获取到 `Swipe` 实例并调用实例方法。

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| click | 点击事件 | `name, position: 'left' \| 'content' \| 'right'` |
| open | 滑动单元格侧边栏，left 指向左滑，right 指向右滑 | `name, position: 'left' \| 'right'` |
| close | 收起单元格侧边栏，同上 | `name, position: 'left' \| 'right'` |

## SwipeGroup

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| lock`v4.1.1` | 控制内部 Swipe 互斥，即滑动打开某一个 Swipe 时，触发其余 Swipe 的 close 方法 | boolean | `false` |
