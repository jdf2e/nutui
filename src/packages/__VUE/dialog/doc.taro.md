# Dialog 对话框


### 介绍

模态对话框，在浮层中显示，引导用户进行相关操作，常用于消息提示、消息确认，或在当前页面内完成特定的交互操作。

### 安装
    
```javascript
import { createApp } from 'vue';
import { Dialog,Popup,OverLay } from '@nutui/nutui-taro';

const app = createApp();
app.use(Dialog);
app.use(Popup);
app.use(OverLay);

```

### 使用方式

```html
<nut-cell title="基础弹框" @click="baseClick"></nut-cell>
<nut-dialog title="基础弹框" content="这是基础弹框。" v-model:visible="visible1" @cancel="onCancel" @ok="onOk" />

<nut-cell title="无标题弹框" @click="noTitleClick"></nut-cell>
<nut-dialog content="这是无标题弹框。" v-model:visible="visible2" @cancel="onCancel" @ok="onOk" />

<nut-cell title="提示弹框" @click="tipsClick"></nut-cell>
<nut-dialog no-cancel-btn title="温馨提示" content="这是提示弹框。" v-model:visible="visible3" @cancel="onCancel" @ok="onOk" />

<nut-cell title="底部按钮 垂直调用" @click="verticalClick"></nut-cell>
<nut-dialog footer-direction="vertical" teleport="#app" title="温馨提示" content="这是提示弹框。" v-model:visible="visible5" />

<nut-cell title="异步关闭" @click="componentClick"></nut-cell>
<nut-dialog title="异步关闭" :content="closeContent" :visible="visible4" @cancel="onCancel" @ok="onOkAsync" />
```

``` javascript
import { ref } from 'vue';
export default {
  setup() {
    const visible1 = ref(false);
    const visible2 = ref(false);
    const visible3 = ref(false);
    const visible4 = ref(false);
    const visible5 = ref(false);
    const closeContent = ref('');
    const sleep = () => new Promise((resolve) => setTimeout(resolve, 1000));
    const countDown = (second: number) => `倒计时 ${second} 秒`;

    const onCancel = () => {
      console.log('event cancel');
    };
    const onOk = () => {
      console.log('event ok');
    };
    const onOkAsync = () => {
      sleep()
        .then(() => {
          closeContent.value = countDown(2);
          return sleep();
        })
        .then(() => {
          closeContent.value = countDown(1);
          return sleep();
        })
        .then(() => {
          closeContent.value = countDown(0);
        })
        .then(() => {
          visible4.value = false;
        });
    };

    const baseClick = (): void => {
      visible1.value = true;
    };
    const noTitleClick = () => {
      visible2.value = true;
    };
    const tipsClick = () => {
      visible3.value = true;
    };

    const componentClick = () => {
      closeContent.value = `点击确定时3s后关闭`;
      visible4.value = true;
    };

    const verticalClick = () => {
      visible5.value = true;
    };


    return {
      visible1,
      visible2,
      visible3,
      visible4,
      visible5,
      onCancel,
      onOk,
      closeContent,
      onOkAsync,
      baseClick,
      noTitleClick,
      componentClick,
      tipsClick,
      verticalClick
    };
  }
};
```

## API
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