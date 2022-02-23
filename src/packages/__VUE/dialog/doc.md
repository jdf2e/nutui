# Dialog 对话框


### 介绍

模态对话框，在浮层中显示，引导用户进行相关操作，常用于消息提示、消息确认，或在当前页面内完成特定的交互操作。

弹出框组件支持函数调用和组件调用两种方式。

### 安装
    
```javascript
import { createApp } from 'vue';
import { Dialog,Popup,OverLay } from '@nutui/nutui';

const app = createApp();
app.use(Dialog).use(Popup).use(OverLay)
```


## 函数调用

:::demo
```html
<template>
 <nut-cell-group title="函数式调用">
  <nut-cell title="基础弹框" @click="baseClick"></nut-cell>
  <nut-cell title="无标题弹框" @click="noTitleClick"></nut-cell>
  <nut-cell title="提示弹框" @click="tipsClick"></nut-cell>
  <nut-cell title="底部按钮 垂直调用" @click="verticalClick"></nut-cell>
</nut-cell-group>
</template>
<script lang="ts">
import { ref } from 'vue';
import { Dialog } from '@nutui/nutui';
export default {
    setup() {
        const onCancel = () => {
          console.log('event cancel');
        };
        const onOk = () => {
          console.log('event ok');
        };
        const baseClick = (): void => {
          Dialog({
            title: '基础弹框',
            content: '支持函数调用和组件调用两种方式。',
            onCancel,
            onOk
          });
        };
        const noTitleClick = () => {
          Dialog({
            content: '无标题弹框',
            onCancel,
            onOk
          });
        };
        const tipsClick = () => {
          Dialog({
            title: '温馨提示',
            content: '支持函数调用和组件调用两种方式。',
            noCancelBtn: true,
            onCancel,
            onOk
          });
        };
        const verticalClick = () => {
          Dialog({
            title: '温馨提示',
            content: '支持底部按钮纵向排列。',
            footerDirection: 'vertical',
            onCancel,
            onOk
          });
        };
        return {
          baseClick,
          noTitleClick,
          tipsClick,
          verticalClick
        };
    }
}
```
::: 

## teleport 使用，挂载到指定节点

``` html
<nut-dialog teleport="#app" ... />
```

``` javascript
Dialog({
  teleport: '#app',
  ...
});
Dialog({
  teleport: '.demo',
  ...
});
```

## 函数调用 proxy.&dialog(...)

```javascript
import { ref } from 'vue';
import { Dialog } from '@nutui/nutui';
import { getCurrentInstance } from 'vue';

export default {
  setup() {
    const { proxy } = getCurrentInstance();
    proxy.$dialog({
      title: '基础弹框',
      content: '支持函数调用和组件调用两种方式。'
    });
  }
}
```


## 标签式组件使用


:::demo
```html
<template>
  <nut-cell-group title="标签式使用">
    <nut-cell title="组件调用" @click="componentClick"></nut-cell>
    <nut-dialog
      teleport="#app"
      title="组件调用"
      content="如果需要在弹窗内嵌入组件或其他自定义内容，可以使用组件调用的方式。"
      v-model:visible="visible"
    >
    </nut-dialog>
    <nut-cell title="底部按钮 垂直使用" @click="componentvVrticalClick"></nut-cell>
    <nut-dialog
      footer-direction="vertical"
      teleport="#app"
      title="组件调用"
      content="如果需要在弹窗内嵌入组件或其他自定义内容，可以使用组件调用的方式。"
      v-model:visible="visible1"
    >
    </nut-dialog>
  </nut-cell-group>
</template>
<script lang="ts">
import { ref } from 'vue';
export default {
  setup() {
    const visible = ref(false);
    const visible1 = ref(false);
    const componentClick = () => {
      visible.value = true;
    };
    const componentvVrticalClick = () => {
      visible1.value = true;
    };
    return { visible,visible1,componentClick,componentvVrticalClick };
  }
}
```
:::

## API
| 字段                | 说明                                  | 类型     | 默认值   |
|---------------------|---------------------------------------|----------|----------|
| title               | 标题                                  | String   | -        |
| content             | 内容，支持HTML                        | String   | -        |
| teleport            | 指定挂载节点                          | String   | "body"   |
| closeOnClickOverlay | 点击蒙层是否关闭对话框                | Boolean  | false    |
| noFooter            | 是否隐藏底部按钮栏                    | Boolean  | false    |
| noOkBtn             | 是否隐藏确定按钮                      | Boolean  | false    |
| noCancelBtn         | 是否隐藏取消按钮                      | Boolean  | false    |
| cancelText          | 取消按钮文案                          | String   | ”取消“   |
| okText              | 确定按钮文案                          | String   | ”确定“   |
| okBtnDisabled       | 禁用确定按钮                          | Boolean  | false    |
| cancelAutoClose     | 取消按钮是否默认关闭弹窗              | Boolean  | true     |
| textAlign           | 文字对齐方向，可选值同css的text-align | String   | "center" |
| closeOnPopstate     | 是否在页面回退时自动关闭              | Boolean  | false    |
| onUpdate            | 更新                                  | Boolean  | false    |
| onOk                | 确定按钮回调                          | Function | -        |
| onCancel            | 取消按钮回调                          | Function | -        |
| onOpen              | 背景是否锁定                          | Function | -        |
| onClosed            | 关闭回调，任何情况关闭弹窗都会触发    | Function | -        |


## Props

| 字段                   | 说明                                     | 类型    | 默认值     |
|------------------------|------------------------------------------|---------|------------|
| title                  | 标题                                     | String  | -          |
| content                | 内容，支持HTML                           | String  | -          |
| teleport               | 指定挂载节点                             | String  | "body"     |
| close-on-click-overlay | 点击蒙层是否关闭对话框                   | Boolean | false      |
| no-footer              | 是否隐藏底部按钮栏                       | Boolean | false      |
| no-ok-btn              | 是否隐藏确定按钮                         | Boolean | false      |
| no-cancel-btn          | 是否隐藏取消按钮                         | Boolean | false      |
| cancel-text            | 取消按钮文案                             | String  | ”取消“     |
| ok-text                | 确定按钮文案                             | String  | ”确 定“    |
| ok-btn-disabled        | 禁用确定按钮                             | Boolean | false      |
| cancel-auto-close      | 取消按钮是否默认关闭弹窗                 | Boolean | true       |
| text-align             | 文字对齐方向，可选值同css的text-align    | String  | "center"   |
| close-on-popstate      | 是否在页面回退时自动关闭                 | Boolean | false      |
| lock-scroll            | 背景是否锁定                             | Boolean | false      |
| footer-direction       | 使用横纵方向 可选值 horizontal、vertical | string  | horizontal |

## Events

| 字段   | 说明                               | 类型     | 默认值 |
|--------|------------------------------------|----------|--------|
| ok     | 确定按钮回调                       | Function | -      |
| cancel | 取消按钮回调                       | Function | -      |
| closed | 关闭回调，任何情况关闭弹窗都会触发 | Function | -      |


## Slots

| 名称    | 说明               |
|---------|--------------------|
| header  | 自定义标题区域     |
| default | 自定义内容         |
| footer  | 自定义底部按钮区域 |