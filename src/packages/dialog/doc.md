# Dialog 对话框


### 介绍

模态对话框，在浮层中显示，引导用户进行相关操作，常用于消息提示、消息确认，或在当前页面内完成特定的交互操作。

弹出框组件支持函数调用和组件调用两种方式。

### 安装
    
```javascript
import { createApp } from 'vue';
import { Dialog } from '@nutui/nutui';

const app = createApp();
app.use(Dialog);
```


## 函数调用

``` javascript
Dialog({
  title: '基础弹框',
  content: '支持函数调用和组件调用两种方式。'
});

Dialog({
  content: '无标题弹框'
});

Dialog({
  title: '提示弹框',
  content: '支持函数调用和组件调用两种方式。',
  noCancelBtn: true,
});
```



## 标签式组件使用

```html
<nut-dialog :title="title" :close-on-click-overlay="false" :content="content" v-model:visible="visible"></nut-dialog>
```

``` javascript
import { ref } from 'vue';
import { Dialog } from '@nutui/nutui';
export default {
  setup() {
    const visible = ref(true);
    const title = '标签式使用';
    const content = '内容';
  
    return { visible,title,content };
  },
};
```

## API
| 字段                | 说明                                  | 类型     | 默认值   |
|---------------------|---------------------------------------|----------|----------|
| title               | 标题                                  | String   | -        |
| content             | 内容，支持HTML                        | String   | -        |
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

| 字段                   | 说明                                  | 类型    | 默认值   |
|------------------------|---------------------------------------|---------|----------|
| title                  | 标题                                  | String  | -        |
| content                | 内容，支持HTML                        | String  | -        |
| close-on-click-overlay | 点击蒙层是否关闭对话框                | Boolean | false    |
| no-footer              | 是否隐藏底部按钮栏                    | Boolean | false    |
| no-ok-btn              | 是否隐藏确定按钮                      | Boolean | false    |
| no-cancel-btn          | 是否隐藏取消按钮                      | Boolean | false    |
| cancel-text            | 取消按钮文案                          | String  | ”取消“   |
| ok-text                | 确定按钮文案                          | String  | ”确 定“  |
| ok-btn-disabled        | 禁用确定按钮                          | Boolean | false    |
| cancel-auto-close      | 取消按钮是否默认关闭弹窗              | Boolean | true     |
| text-align             | 文字对齐方向，可选值同css的text-align | String  | "center" |
| close-on-popstate      | 是否在页面回退时自动关闭              | Boolean | false    |
| lock-scroll            | 背景是否锁定                          | Boolean | false    |


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