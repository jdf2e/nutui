#  Swipe 滑动手势

## 介绍

常用于单元格左右滑删除等手势操作

## 安装

```javascript
import { createApp } from 'vue'
import { Swipe } from '@nutui/nutui-taro'

const app = createApp()
app.use(Swipe)
```

## 代码演示

### 基础用法

:::demo
```html
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
```html
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
```html
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
```html
<template>
  <nut-swipe ref="refSwipe" @open="open" @close="close">
    <nut-cell title="异步打开关闭">
    <template v-slot:link>
      <nut-switch v-model="checked" @change="changSwitch" active-text="开" inactive-text="关" />
    </template>
    </nut-cell>
    <template #right>
      <nut-button shape="square" style="height:100%" type="danger">删除</nut-button>
    </template>
  </nut-swipe>
</template>
<script lang="ts">
import { ref } from 'vue';
export default {
  setup() {
    const refSwipe = ref<HTMLElement>();
    const checked = ref(false);
    const changSwitch = (value: boolean) => {
      if (value) {
        refSwipe.value?.open('left');
      } else {
        refSwipe.value?.close();
      }
    };
    const open = (obj: any) => {
      console.log(obj);
    };
    const close = (obj: any) => {
      console.log(obj);
    };
    return { checked, changSwitch, refSwipe, open, close };
  }
}
</script>
```
:::

### 自定义

:::demo
```html
<template>
<nut-swipe>
    <template #left>
        <nut-button shape="square" style="height:100%" type="success">选择</nut-button>
    </template>
    <nut-cell title="商品描述">
    <template v-slot:link>
        <nut-input-number v-model="number" />
    </template>
    </nut-cell>
    <template #right>
        <nut-button shape="square" style="height:100%" type="danger">删除</nut-button>
        <nut-button shape="square" style="height:100%" type="info">收藏</nut-button>
    </template>
</nut-swipe>
</template>
<script lang="ts">
import { ref } from 'vue';
export default {
    setup() {
        const number = ref(0);
        return { number };
    }
}
</script>
```
:::

## Swipe

### Props

| 参数                        | 说明                 | 类型    | 默认值  |
|-----------------------------|----------------------|---------|---------|
| name                        | 唯一标识             | string  | -       |
| disabled                    | 是否禁用滑动         | string  | `false` |
| touch-move-prevent-default  | 是否阻止滑动事件行为 | boolean | `false` |
| touch-move-stop-propagation | 是否阻止滑动事件冒泡 | boolean | `false` |

### Events

| 事件名 | 说明       | 回调参数            |
|--------|------------|---------------------|
| open   | 滑动时触发，left 指向左滑，right 指向右滑 | `name, position: 'left' | 'right'` |
| close  | 关闭时触发，同上 | `name, position: 'left' | 'right'` |

### Slots

| 名称    | 说明         |
|---------|--------------|
| left    | 左侧滑动内容 |
| default | 自定义内容   |
| right   | 右侧滑动内容 |

### Methods

通过 [ref](https://vuejs.org/guide/essentials/template-refs.html) 可以获取到 Swipe 实例并调用实例方法。

| 方法名 | 说明             | 参数                |
|--------|------------------|---------------------|
| open   | 滑动单元格侧边栏，left 指向左滑，right 指向右滑 | `name, position: 'left' | 'right'` |
| close  | 收起单元格侧边栏，同上 | `name, position: 'left' | 'right'` |