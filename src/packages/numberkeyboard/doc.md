# NumberKeyboard 数字键盘

### 默认样式

数字键盘提供了 `input`、`delete`、`close`、`enter`、`leave` 事件，分别对应输入内容、删除内容、键盘抬起和键盘关闭的动作

```javascript
  <nut-cell :isLink="true" @click.native="showKeyBoard" :showIcon="true" title="弹出默认键盘"></nut-cell>
  <nut-numberkeyboard
      :visible="visible"
      title="默认键盘"
      @input="input"
      @close="close"
      @enter="enter"
      @leave="leave"
  >
  </nut-numberkeyboard>
```

```javascript
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


### 右侧栏键盘

将 type 属性设置为 rightColumn 来展示键盘的右侧栏，常用于金钱支付的场景

```javascript
    <nut-cell :isLink="true" @click.native="showKeyBoard" :showIcon="true" title="弹出右侧栏键盘"></nut-cell>
    <nut-numberkeyboard
        :visible="visible"
        @input="input"
        @close="close"
    ></nut-numberkeyboard>
```

```javascript
export default {
    data() {
        return {
            visible: false,
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
        }
    }
}
```


## Prop

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| visible | 是否显示键盘 | boolean | false
| title | 键盘标题 | string | - |
| type | 键盘模式  | string | `default`：默认样式<br>`rightColumn`：带右侧栏 |





## Event

| 字段 | 说明 | 回调参数
|----- | ----- | -----
| input  | 点击按键时触发                 | 按键内容 |
| delete | 点击删除键时触发               | -             |
| close  | 点击关闭按钮或非键盘区域时触发  | -             |
| enter  | 键盘弹出时触发             | -             |
| leave  | 键盘收起时触发             | -             |
