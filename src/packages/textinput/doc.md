# TextInput 文本框

单行文本框。

## 基本用法

```html
<nut-textinput 
    v-model="val"
    label="无清空按钮："
    placeholder="请输入内容"
    :clearBtn="true"
    :disabled="false"
/>
```
## 高级用法

密码框
```html
<nut-textinput 
    placeholder="请输入密码" 
    v-model="val" 
    label="密码框：" 
    type="password"
/>
```

禁用
```html
<nut-textinput 
    label="禁用状态：" 
    :disabled="true" 
    placeholder="请输入内容" 
/>
```

使用input原生属性
```html
<!-- maxlength -->
<nut-textinput
    placeholder="maxlength=5"
    maxlength="5"
    label="限制文字数："
/>

<!-- readonly -->
<nut-textinput 
    placeholder="请输入内容" 
    v-model="val" 
    readonly 
    label="只读：" 
/>
```

使用input原生事件
```html
<nut-textinput
    placeholder="请输入内容"
    label="focus/blur事件："
    @focus="onFocus"
    @blur="onBlur"
    v-model="val"
/>
```
```javascript
export default {
  data() {
    return {
      val: ""
    };
  },
  methods: {
    onFocus() {
      console.log("focus事件触发！");
    },
    onBlur() {
      console.log("blur事件触发！");
    }
  }
};
```


## Prop

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| value | 当前input值，可使用 v-model 双向绑定数据 | String | ''
| label | 文本框前面的标签 | String | ''
| disabled | 是否禁用 | Boolean | false
| clearBtn | 是否需要清空按钮 | Boolean | true
| hasBorder | 是否需要边框 | Boolean | true