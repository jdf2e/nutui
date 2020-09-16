# NumberKeyboard 数字键盘

### 介绍

数字虚拟键盘

### 默认样式

数字键盘提供了 `input`、`delete`、`close`、`enter`、`leave` 事件，分别对应输入内容、删除内容和失去焦点的动作

```html
  <nut-cell :isLink="true" @click.native="showKeyBoard" :showIcon="true" title="弹出默认键盘"></nut-cell>
  <nut-numberkeyboard
      :visible="visible"
      @input="input"
      @close="close"
      @enter="enter"
      @leave="leave"
  >
  </nut-numberkeyboard>
```

```js
export default {
    data() {
        return {
            visible: false,
            val: ''
        };
    },
    methods: {
        showKeyBoard() {
            this.visible = true;
        },
        input(number) {
            this.$toast.text(`输入：${number}`);
        },
        close() {
            this.visible = false;
        },
        enter() {
            console.log('键盘抬起');
        },
        leave() {
            console.log('键盘收起');
        },
    }
}
```
> 点击键盘以外的区域时，键盘会默认自动收起。
