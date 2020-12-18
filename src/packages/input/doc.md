| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| type         | 类型，可选值为 `text` `textarea` `number`  等 | String |`text`         |
| value      | 输入值，双向绑定 | String |  -     |
| placeholder         | 为空时占位符 | String |       -       |
| placeholder-style | placeholder 样式     | String | - |
| label          | 	左侧文案                       | string | -             |
| has-border          | 	是否有边框                       | boolean | true            |
| disabled          | 	是否禁用                       | boolean | false              |
| readonly          | 是否只读                        | boolean | false               |
| clear-btn       | 是否带清除按钮（icon）                        | boolean | true               |
| required          | 是否带必填的*号，且blur事件做非空校验                       | boolean | false               |
| maxlength          | 限制最长输入字符                   | string/number | -               |
| limit-show          | textarea时是否展示输入字符。须设置maxlength                        | boolean | false               |


事件
| input          | 输入内容时触发                        | function | -               |
| change          | 输入内容时触发                        | function | -               |
| focus          | 聚焦时触发                        | function | -               |
| blur          | 失焦时触发                        | function | -               |
| clear          | 点击清空时触发                        | function | -               |
| error          | 校验错误时触发                        | function | -               |







