# Form 表单组件

### 介绍

用于数据录入、校验，支持输入框、单选框、复选框、文件上传等类型，需要与 Cell 组件搭配使用。

### 安装

    
``` javascript
import { createApp } from 'vue';
// vue
import { Form,FormItem,Cell,CellGroup } from '@nutui/nutui';
// taro
import { Form,FormItem,Cell,CellGroup  } from '@nutui/nutui-taro';

const app = createApp();
app.use(Form);
app.use(FormItem);
app.use(Cell);
app.use(CellGroup);
```


### 基础用法



## API

### Props

| 参数                | 说明                                             | 类型               | 默认值  |
|---------------------|--------------------------------------------------|--------------------|---------|
| label-width         | 表单项 label 宽度，默认单位为`px`                | _number \| string_ | `100px` |
| label-align         | 表单项 label 对齐方式，可选值为 `center` `right` | _string_           | `left`  |
| input-align         | 输入框对齐方式，可选值为 `center` `right`        | _string_           | `left`  |
| error-message-align | 错误提示文案对齐方式，可选值为 `center` `right`  | _string_           | `left`  |
| show-error          | 是否在校验不通过时标红输入框                     | _boolean_          | `false` |
| show-error-message  | 是否在校验不通过时在输入框下方展示错误提示       | _boolean_          | `true`  |
### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| click  | 点击图标时触发 | event: Event |


### Rule 数据结构

使用 Field 的`rules`属性可以定义校验规则，可选属性如下:

| 键名      | 说明                                              | 类型                                            |
|-----------|---------------------------------------------------|-------------------------------------------------|
| required  | 是否为必选字段                                    | _boolean_                                       |
| message   | 错误提示文案                                      | _string \| (value, rule) => string_             |
| validator | 通过函数进行校验                                  | _(value, rule) => boolean \| string \| Promise_ |
| pattern   | 通过正则表达式进行校验                            | _RegExp_                                        |
| trigger   | 本项规则的触发时机，可选值为 `onChange`、`onBlur` | _string_                                        |
| formatter | 格式化函数，将表单项的值转换后进行校验            | _(value, rule) => any_                          |

### Methods

通过 [ref](https://v3.cn.vuejs.org/api/special-attributes.html#key) 可以获取到 Uploader 实例并调用实例方法

| 方法名 | 说明                               | 参数 | 返回值 |
|--------|------------------------------------|------|--------|
| submit | 提交表单，与点击提交按钮的效果等价 | -    | -      |
| reset  | 清空提示态                         | -    | -      |