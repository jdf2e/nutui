# Dialog 对话框


### 介绍

模态对话框，在浮层中显示，引导用户进行相关操作，常用于消息提示、消息确认，或在当前页面内完成特定的交互操作。

弹出框组件支持函数调用和组件调用两种方式。

### 安装
    
```javascript
import { createApp,createVNode } from 'vue';
import { Dialog,Popup,OverLay } from '@nutui/nutui';

const app = createApp();
app.use(Dialog);
app.use(Popup);
app.use(OverLay);

```


### 函数调用（小程序模式暂不支持）

:::demo
```html
<template>
 <nut-cell-group title="函数式调用">
  <nut-cell title="基础弹框" @click="baseClick"></nut-cell>
  <nut-cell title="透明弹框" @click="transparentClick"></nut-cell>
  <nut-cell title="支持富文本 html" @click="htmlClick"></nut-cell>
  <nut-cell title="异步关闭" @click="beforeCloseClick"></nut-cell>
  <nut-cell title="无标题弹框" @click="noTitleClick"></nut-cell>
  <nut-cell title="提示弹框" @click="tipsClick"></nut-cell>
  <nut-cell title="底部按钮 垂直调用" @click="verticalClick"></nut-cell>
 </nut-cell-group>
</template>
<script lang="ts">
import { ref,createVNode } from 'vue';
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
            content: createVNode('span', { style: { color: 'red' } }, '我可以是一个自定义组件'),
            onCancel,
            onOk
          });
        };
        const transparentClick = (): void => {
          Dialog({
            overlayStyle: { background: 'rgba(0,0,0,0)' },
            title: '透明弹框',
            content: 'Content',
            onCancel,
            onOk
          });
        };
        const htmlClick = (): void => {
          Dialog({
            title: "支持富文本 html",
            content:
              "<p style='color:red'>html</p><img src='https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif' />",
            onCancel,
            onOk
          });
        };
        const beforeCloseClick = (): void => {
          Dialog({
            title: '异步关闭',
            content: '点击确认后，1秒后关闭',
            onCancel,
            onOk,
            beforeClose: (action: string) => {
              return new Promise((r) => {
                setTimeout(() => {
                  r(action == 'ok');
                }, 1000);
              });
            }
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
          transparentClick,
          htmlClick,
          beforeCloseClick,
          noTitleClick,
          tipsClick,
          verticalClick
        };
    }
}
</script>
```
::: 

### teleport 使用，挂载到指定节点

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

### 函数调用 proxy.&dialog(...)

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


### 标签式组件使用


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
</script>
```
:::

## API
### DialogOptions
| 字段                  | 说明                                                          | 类型                     | 默认值               |
|-----------------------|---------------------------------------------------------------|--------------------------|----------------------|
| title                 | 标题                                                          | String                   | -                    |
| id                    | 标识符，相同时共用一个实例，默认为多个实例                    | String/Number            | new Date().getTime() |
| content               | 内容，支持HTML和组件                                          | String/VNode             | -                    |
| teleport              | 指定挂载节点                                                  | String                   | "body"               |
| closeOnClickOverlay   | 点击蒙层是否关闭对话框                                        | Boolean                  | false                |
| noFooter              | 是否隐藏底部按钮栏                                            | Boolean                  | false                |
| noOkBtn               | 是否隐藏确定按钮                                              | Boolean                  | false                |
| noCancelBtn           | 是否隐藏取消按钮                                              | Boolean                  | false                |
| cancelText            | 取消按钮文案                                                  | String                   | ”取消“               |
| okText                | 确定按钮文案                                                  | String                   | ”确定“               |
| cancelAutoClose       | 取消按钮是否默认关闭弹窗                                      | Boolean                  | true                 |
| textAlign             | 文字对齐方向，可选值同css的text-align                         | String                   | "center"             |
| closeOnPopstate       | 是否在页面回退时自动关闭                                      | Boolean                  | false                |
| customClass`v3.1.22`  | 自定义class                                                   | String                   |                      |
| overlayClass`v3.1.22` | 自定义遮罩类名                                                | String                   | -                    |
| overlayStyle`v3.1.22` | 自定义遮罩样式                                                | CSSProperties            | -                    |
| popClass  `v3.1.22`   | 自定义popup弹框类名                                           | String                   | -                    |
| popStyle  `v3.1.22`   | 自定义popup弹框样式                                           | CSSProperties            | -                    |
| onUpdate              | 更新                                                          | Boolean                  | false                |
| onOk                  | 确定按钮回调                                                  | Function                 | -                    |
| onCancel              | 取消按钮回调                                                  | Function                 | -                    |
| onOpened`v3.1.22`     | 打开弹框后回调                                                | Function                 | -                    |
| onClosed              | 关闭弹框后回调                                                | Function                 | -                    |
| beforeClose`v3.1.22`  | 关闭前的回调函数，返回 `false` 可阻止关闭，支持返回 `Promise` | Function(action: string) | -                    |


### Props

| 字段                   | 说明                                                          | 类型                     | 默认值     |
|------------------------|---------------------------------------------------------------|--------------------------|------------|
| title                  | 标题                                                          | String                   | -          |
| content                | 内容，支持HTML和组件                                          | String/VNode             | -          |
| teleport               | 指定挂载节点                                                  | String                   | "body"     |
| close-on-click-overlay | 点击蒙层是否关闭对话框                                        | Boolean                  | false      |
| no-footer              | 是否隐藏底部按钮栏                                            | Boolean                  | false      |
| no-ok-btn              | 是否隐藏确定按钮                                              | Boolean                  | false      |
| no-cancel-btn          | 是否隐藏取消按钮                                              | Boolean                  | false      |
| cancel-text            | 取消按钮文案                                                  | String                   | ”取消“     |
| ok-text                | 确定按钮文案                                                  | String                   | ”确 定“    |
| cancel-auto-close      | 取消按钮是否默认关闭弹窗                                      | Boolean                  | true       |
| text-align             | 文字对齐方向，可选值同css的text-align                         | String                   | "center"   |
| close-on-popstate      | 是否在页面回退时自动关闭                                      | Boolean                  | false      |
| lock-scroll            | 背景是否锁定                                                  | Boolean                  | false      |
| footer-direction       | 使用横纵方向 可选值 horizontal、vertical                      | string                   | horizontal |
| overlay-class`v3.1.22` | 自定义遮罩类名                                                | String                   | -          |
| overlay-style`v3.1.22` | 自定义遮罩样式                                                | CSSProperties            | -          |
| pop-class  `v3.1.22`   | 自定义popup弹框类名                                           | String                   | -          |
| pop-style  `v3.1.22`   | 自定义popup弹框样式                                           | CSSProperties            | -          |
| custom-class`v3.1.22`  | 自定义class                                                   | String                   | -          |
| before-close`v3.1.22`  | 关闭前的回调函数，返回 `false` 可阻止关闭，支持返回 `Promise` | Function(action: string) | -          |

### Events

| 字段   | 说明         | 类型     | 默认值 |
|--------|--------------|----------|--------|
| ok     | 确定按钮回调 | Function | -      |
| cancel | 取消按钮回调 | Function | -      |
| closed | 关闭弹框回调 | Function | -      |
| opened | 打开弹框回调 | Function | -      |


### Slots

| 名称    | 说明               |
|---------|--------------------|
| header  | 自定义标题区域     |
| default | 自定义内容         |
| footer  | 自定义底部按钮区域 |