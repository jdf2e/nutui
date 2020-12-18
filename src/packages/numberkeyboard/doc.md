# NumberKeyboard 数字键盘

### 默认样式

数字键盘提供了 `input`、`delete`、`close`、`enter`、`leave` 事件，分别对应输入内容、删除内容、键盘抬起和键盘关闭的动作


```javascript
    <nut-cell :isLink="true" @click.native="showKeyBoard" :showIcon="true" title="默认键盘"></nut-cell>
    <nut-numberkeyboard
        :visible="visible"
        @input="input"
        @close="close"
        @enter="enter"
        @leave="leave"
    ></nut-numberkeyboard>
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
    <nut-cell :isLink="true" @click.native="showKeyBoard" :showIcon="true" title="带右侧栏键盘"></nut-cell>
    <nut-numberkeyboard
        :visible="visible"
        :custom-key="customKey"
        @input="input"
        @close="close"
    ></nut-numberkeyboard>
```

```javascript
export default {
    data() {
        return {
            visible: false,
            customKey: ['.']
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


### 带标题栏键盘

通过 title 属性可以设置键盘标题

```javascript
    <nut-cell :isLink="true" @click.native="showKeyBoard" :showIcon="true" title="带标题栏键盘"></nut-cell>
    <nut-numberkeyboard 
        title="默认键盘" 
        :visible="visible"
        :custom-key="customKey"
        @input="input"
        @close="close"
    ></nut-numberkeyboard>
```

```javascript
export default {
    data() {
        return {
            visible: false,
            customKey: ['.']
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


### 双向绑定键盘

可以通过 `v-model` 绑定键盘当前输入值

```javascript
    <nut-textinput 
        placeholder="请输入内容"
        :has-border="false"
        v-model="value" 
        readonly 
        label="双向绑定：" 
    />
    <nut-numberkeyboard
        :visible="visible"
        v-model="value"
        maxlength="8"
        @close="close"
    ></nut-numberkeyboard>
```

```javascript
export default {
    data() {
        return {
            visible: false,
            value: ''
        };
    },
    methods: {
        showKeyBoard() {
            this.visible = true;
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
| custom-key | 自定义键盘额外的键  | array<br>string | 数组形式最多支持添加2个,超出默认取前2项 |
| v-model | 当前输入值 | string | - |
| maxlength  | 输入值最大长度，结合 v-model 使用 | number <br> string| 6 |




## Event

| 字段 | 说明 | 回调参数
|----- | ----- | -----
| input  | 点击按键时触发                 | 按键内容 |
| delete | 点击删除键时触发               | -             |
| close  | 点击关闭按钮或非键盘区域时触发  | -             |
| enter  | 键盘弹出时触发             | -             |
| leave  | 键盘收起时触发             | -             |

> 说明：使用数字键盘组件，请保证 NutUI 的版本在 V2.2.11 及以上