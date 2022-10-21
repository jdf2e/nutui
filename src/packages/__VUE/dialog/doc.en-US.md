# Dialog


### Intro

Modal dialog box is displayed in the floating layer to guide users to carry out relevant operations. It is often used for message prompt, message confirmation, or completing specific interactive operations in the current page.

The popup box component supports function call and component call.

### Install
    
```javascript
import { createApp,createVNode } from 'vue';
import { Dialog,Popup,OverLay } from '@nutui/nutui';

const app = createApp();
app.use(Dialog);
app.use(Popup);
app.use(OverLay);

```


### Function use

:::demo
```html
<template>
 <nut-cell-group title="Function Use">
  <nut-cell title="Basic Usage" @click="baseClick"></nut-cell>
  <nut-cell title="Transparent Dialog" @click="transparentClick"></nut-cell>
  <nut-cell title="Use html" @click="htmlClick"></nut-cell>
  <nut-cell title="Before Close" @click="beforeCloseClick"></nut-cell>
  <nut-cell title="No Title" @click="noTitleClick"></nut-cell>
  <nut-cell title="Tips Dialog" @click="tipsClick"></nut-cell>
  <nut-cell title="Bottom button vertical use" @click="verticalClick"></nut-cell>
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
            title: 'Basic spring frame',
            content: createVNode('span', { style: { color: 'red' } }, 'I can be a custom component'),
            onCancel,
            onOk
          });
        };
        const transparentClick = (): void => {
          Dialog({
            overlayStyle: { background: 'rgba(0,0,0,0)' },
            title: 'Transparent Dialog',
            content: 'Content',
            onCancel,
            onOk
          });
        };
        const htmlClick = (): void => {
          Dialog({
            title: "Use html",
            content:
              "<p style='color:red'>html</p><img src='https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif' />",
            onCancel,
            onOk
          });
        };
        const beforeCloseClick = (): void => {
          Dialog({
            title: 'Before Close',
            content: 'Click confirm to close it in 1 second',
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
            content: 'Content',
            onCancel,
            onOk
          });
        };
        const tipsClick = () => {
          Dialog({
            title: 'Title',
            content: 'Function call and component call are supported.',
            noCancelBtn: true,
            onCancel,
            onOk
          });
        };
        const verticalClick = () => {
          Dialog({
            title: 'Title',
            content: 'Support vertical arrangement of bottom buttons.',
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

### Teleport use, mount to the specified element node

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

### Function use proxy.&dialog(...)

```javascript
import { ref } from 'vue';
import { Dialog } from '@nutui/nutui';
import { getCurrentInstance } from 'vue';

export default {
  setup() {
    const { proxy } = getCurrentInstance();
    proxy.$dialog({
      title: 'Basic spring frame',
      content: 'Function call and component call are supported.'
    });
  }
}
```


### Template use


:::demo
```html
<template>
  <nut-cell-group title="Template use">
    <nut-cell title="Template use" @click="componentClick"></nut-cell>
    <nut-dialog
      teleport="#app"
      title="Template use"
      content="Function call and template call are supported."
      v-model:visible="visible"
    >
    </nut-dialog>
    <nut-cell title="Bottom button vertical use" @click="componentvVrticalClick"></nut-cell>
    <nut-dialog
      footer-direction="vertical"
      teleport="#app"
      title="Template use"
      content="Function call and template call are supported."
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
| Attribute             | Description                                                                    | Type                     | Default              |
|-----------------------|--------------------------------------------------------------------------------|--------------------------|----------------------|
| title                 | Title                                                                          | String                   | -                    |
| id                    | Identifier, share one instance at the same time, default to multiple instances | String or Number         | new Date().getTime() |
| content               | Content, support HTML                                                          | String                   | -                    |
| teleport              | Specifies a target element where Dialog will be mounted                        | String                   | "body"               |
| closeOnClickOverlay   | Whether to close when overlay is clicked                                       | Boolean                  | false                |
| noFooter              | Hide bottom button bar                                                         | Boolean                  | false                |
| noOkBtn               | Hide OK button                                                                 | Boolean                  | false                |
| noCancelBtn           | Hide cancel button                                                             | Boolean                  | false                |
| cancelText            | Cancel button text                                                             | String                   | "Cancel"             |
| okText                | OK button text                                                                 | String                   | "Confirm"            |
| cancelAutoClose       | Click Cancel to close the popup                                                | Boolean                  | true                 |
| textAlign             | Text alignment direction, the optional value is the same as css text-align     | String                   | "center"             |
| closeOnPopstate       | Whether to close when popstate                                                 | Boolean                  | false                |
| customClass`v3.1.22`  | Custom dialog class                                                            | String                   |                      |
| overlayClass`v3.1.22` | Custom mask classname                                                          | String                   | -                    |
| overlayStyle`v3.1.22` | Custom mask styles                                                             | CSSProperties            | -                    |
| popClass  `v3.1.22`   | Custom popup classname                                                         | String                   | -                    |
| popStyle  `v3.1.22`   | Custom popup styles                                                            | CSSProperties            | -                    |
| onUpdate              | Update                                                                         | Boolean                  | false                |
| onOk                  | Emitted when the confirm button is clicked                                     | Function                 | -                    |
| onCancel              | Emitted when the cancel button is clicked                                      | Function                 | -                    |
| onOpened`v3.1.22`     | Emitted when Dialog is opened                                                  | Function                 | -                    |
| onClosed              | Emitted when Dialog is closed                                                  | Function                 | -                    |
| beforeClose`v3.1.22`  | Callback function before close support return `promise`                        | Function(action: string) | -                    |


### Props

| Attribute              | Description                                                                                               | Type                     | Default    |
|------------------------|-----------------------------------------------------------------------------------------------------------|--------------------------|------------|
| title                  | Title                                                                                                     | String                   | -          |
| content                | Content, support HTML                                                                                     | String                   | -          |
| teleport               | Specifies a target element where Dialog will be mounted                                                   | String                   | "body"     |
| close-on-click-overlay | Whether to close when overlay is clicked                                                                  | Boolean                  | false      |
| no-footer              | Hide bottom button bar                                                                                    | Boolean                  | false      |
| no-ok-btn              | Hide OK button                                                                                            | Boolean                  | false      |
| no-cancel-btn          | Hide cancel button                                                                                        | Boolean                  | false      |
| cancel-text            | Cancel button text                                                                                        | String                   | "Cancel"   |
| ok-text                | OK button text                                                                                            | String                   | "Confirm"  |
| cancel-auto-close      | Click Cancel to close the popup                                                                           | Boolean                  | true       |
| text-align             | Text alignment direction, the optional value is the same as css text-align                                | String                   | "center"   |
| close-on-popstate      | Whether to close when popstate                                                                            | Boolean                  | false      |
| lock-scroll            | Whether to lock background scroll                                                                         | Boolean                  | false      |
| footer-direction       | The bottom button uses the horizontal and vertical directions. Optional values ​​are horizontal and vertical. | string                   | horizontal |
| overlay-class`v3.1.22` | Custom mask classname                                                                                     | String                   | -          |
| overlay-style`v3.1.22` | Custom mask styles                                                                                        | CSSProperties            | -          |
| pop-class  `v3.1.22`   | Custom popup classname                                                                                    | String                   | -          |
| pop-style  `v3.1.22`   | Custom popup styles                                                                                       | CSSProperties            | -          |
| custom-class`v3.1.22`  | Custom dialog class                                                                                       | String                   | -          |
| before-close`v3.1.22`  | Callback function before close support return `promise`                                                   | Function(action: string) | -          |

### Events

| Event           | Description                                | Type     | Default |
|-----------------|--------------------------------------------|----------|---------|
| ok              | Emitted when the confirm button is clicked | Function | -       |
| cancel          | Emitted when the cancel button is clicked  | Function | -       |
| closed          | Emitted when Dialog is closed              | Function | -       |
| opened`v3.1.22` | Emitted when Dialog is Opened              | Function | -       |


### Slots

| Name    | Description    |
|---------|----------------|
| header  | Custom title   |
| default | Custom default |
| footer  | Custom footer  |