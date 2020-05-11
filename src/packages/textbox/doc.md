# TextBox 文本域输入

多行文本输入框，支持字数提示、字数限制等功能。

## 基本用法

```html
<nut-textbox v-model="val"></nut-textbox>
```

## 自定义高度

```html
<nut-textbox :txtAreaH="5" :maxNum="300"> </nut-textbox>
```

## 自定义提示语

```html
<nut-textbox :placeText="'请填写详细情况请填写详细情况'"> </nut-textbox>
```

## 自定义字数限制

```html
<nut-textbox :maxNum="100"> </nut-textbox>
```

## 限制字数不可超出

```html
<nut-textbox :switchMax="true" :maxNum="10" :txtAreaH="2" textBgColor="#efefef">
</nut-textbox>
```

## 字数超出报错

```html
<nut-textbox :maxNum="10" :txtAreaH="2" @errorFunc="overLength"> </nut-textbox>
```

## 自定义文本框背景色

```html
<nut-textbox
  :switchMax="true"
  :maxNum="10"
  :txtAreaH="2"
  textBgColor="#feefef"
></nut-textbox>
```

## 不显示字数限制

```html
<nut-textbox :limitShow="false" :maxNum="10"></nut-textbox>
```

## 输入回调返回文字

```html
<nut-textbox :maxNum="10" txtAreaH="2" @inputFunc="inputText"></nut-textbox>
```

```javascript
export default {
  data() {
    return {
      val: ''
    }
  },
  methods: {
    inputText(val) {
      alert(val)
    }
  }
}
```

## Prop

| 字段        | 说明                                                        | 类型    | 默认值     |
| ----------- | ----------------------------------------------------------- | ------- | ---------- |
| value       | 当前 input 值，可使用 v-model 双向绑定数据                  | String  | ''         |
| txtAreaH    | 文本框高度                                                  | Number  | 1rem       |
| placeText   | 自定义 placeholder 文案提示                                 | String  | 请您在此输 |
| maxNum      | 最大字数                                                    | Number  | 50         |
| switchMax   | 控制字数超出是否不可输入，注意：最大字数限制，请设置 maxNum | Boolean | false      |
| textBgColor | 设置输入框背景色                                            | String  | #fff       |
| limitShow   | 不显示字数限制                                              | Boolean | true       |

## Event

| 字段      | 说明                               | 回调参数 |
| --------- | ---------------------------------- | -------- |
| errorFunc | 输入字数超过限定字数时触发事件     | --       |
<<<<<<< HEAD
| inputText | 文字输入事件回调，默认传回输入文本 | --       |
=======
| inputFunc | 文字输入事件回调，默认传回输入文本 | --       |
>>>>>>> eb029bbf225923b0e31bb3c26102bdaa5ca4e55d
