#  Notify 消息通知

### 介绍
    
在页面顶部展示消息提示
    
### 安装
``` javascript
import { createApp } from 'vue';
import { Notify } from '@nutui/nutui-taro';

const app = createApp();
app.use(Notify);
```    
### 基础用法
:::demo
```html
<template>
  <nut-cell-group :title="baseState.state.desc">
    <nut-cell is-Link @click="baseState.methods.cellClick">基础用法</nut-cell>
    <nut-notify @click="onClick" @closed="onClosed" v-model:visible="baseState.state.show" :msg="baseState.state.desc" />
  </nut-cell-group>
</template>
<script lang="ts">
import { reactive } from 'vue';
export default {
  setup() {
    const onClosed = () => console.log('closed');
    const onClick = () => console.log('click');

    const baseState = {
      state: reactive({
        show: false,
        desc: '基础用法'
      }),
      methods: {
        cellClick() {
          baseState.state.show = true;
        }
      }
    };
    return {
      baseState,
      onClosed,
      onClick
    };
  }
};
</script>
```
:::


### 通知类型
:::demo
```html
<template>
  <nut-cell-group title="通知类型">
    <nut-notify
      @click="onClick"
      @closed="onClosed"
      :type="notifyState.state.type"
      v-model:visible="notifyState.state.show"
      :msg="notifyState.state.desc"
    />
    <nut-cell is-Link @click="notifyState.methods.cellClick('primary','主要通知')">主要通知</nut-cell>
    <nut-cell is-Link @click="notifyState.methods.cellClick('success','成功通知')">成功通知</nut-cell>
    <nut-cell is-Link @click="notifyState.methods.cellClick('danger','危险通知')">危险通知</nut-cell>
    <nut-cell is-Link @click="notifyState.methods.cellClick('warning','警告通知')">警告通知</nut-cell>
  </nut-cell-group>
</template>
<script lang="ts">
import { reactive } from 'vue';
export default {
  setup() {
    const onClosed = () => console.log('closed');
    const onClick = () => console.log('click');

    const notifyState = {
      state: reactive({
        show: false,
        desc: '',
        type: 'primary'
      }),
      methods: {
        cellClick(type: string, desc: string) {
          notifyState.state.show = true;
          notifyState.state.type = type;
          notifyState.state.desc = desc;
        }
      }
    };
    const customState = {
      state: reactive({
        show: false,
        desc: '',
        type: 'primary',
        duration: 3000
      }),
      methods: {
        cellClick(type: string, desc: string, duration: number) {
          customState.state.show = true;
          customState.state.type = type;
          customState.state.desc = desc;
          customState.state.duration = duration;
        }
      }
    };
    return {
      notifyState,
      customState,
      onClosed,
      onClick
    };
  }
};
</script>
```
:::

### Props
    
| 参数       | 说明                                                  | 类型    | 默认值   |
|------------|-------------------------------------------------------|---------|----------|
| type       | 提示的信息类型，可选值为`primary` `success` `danger` `warning` | string        | `danger` |
| visible    | 显示与否                                           | boolean | `false` |
| msg    | 展示文案，支持通过`\n`换行                              | string       | `''`    |
| duration   | 展示时长(ms)，值为 0 时，notify 不会消失              | number        | `3000`     |
| color      | 字体颜色                                              | string        | `''`      |
| background | 背景颜色                                              | string        |`''`       |
| class-name | 自定义类名                                            | string \| number | `1`        |
| position | 自定义位置，可选值为 `top` `bottom` `left` `right` `center`              | string | `top`        |

### Events

| 事件名 | 说明         | 回调参数 |
|--------|--------------|----------|
| click  | 点击事件回调 | `-`       |
| closed | 关闭事件回调 | `-`       |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称                                    | 默认值                     | 
| --------------------------------------- | -------------------------- |
|  --nut-notify-text-color| _var(--nut-white)_  |
|  --nut-notify-padding| _12px 0_  |
|  --nut-notify-font-size| _14px_  |
|  --nut-notify-height| _44px_  |
|  --nut-notify-line-height| _auto_  |
|  --nut-notify-base-background-color| _linear-gradient(135deg,var(--nut-primary-color) 0%,var(--nut-primary-color-end) 100%)_  |
|  --nut-notify-primary-background-color| _linear-gradient(315deg, rgba(73, 143, 242, 1) 0%, rgba(73, 101, 242, 1) 100%)_  |
|  --nut-notify-success-background-color| _linear-gradient(135deg,rgba(38, 191, 38, 1) 0%,rgba(39, 197, 48, 1) 45%,rgba(40, 207, 63, 1) 83%,rgba(41, 212, 70, 1) 100%)_  |
|  --nut-notify-danger-background-color| _rgba(250, 50, 25, 1)_  |
|  --nut-notify-warning-background-color| _linear-gradient(135deg, rgba(255, 93, 13, 1) 0%, rgba(255, 154, 13, 1) 100%)_  |
    