# Toast 吐司

轻提示。

### 介绍

用于轻提示。

### 安装

``` javascript
import { createApp } from 'vue';
import { Toast } from '@nutui/nutui';

const app = createApp();
app.use(Toast);
```

## 代码演示

### 基本用法

文字提示
```javascript
Toast.text('网络失败，请稍后再试~');
```

成功提示

```javascript
Toast.success('成功提示');
```

失败提示

```javascript
Toast.fail('失败提示');
```

警告提示

```javascript
Toast.warn('警告提示');
```

加载提示

```javascript
Toast.loading('加载中');
```

##¥ 支持在JS模块中导入使用
```javascript
import { Toast } from "@nutui/nutui";
Toast.text('在js模块中使用');
// 返回实例，可以手动调用实例中的hide方法关闭提示
const toast = Toast.loading('在js模块中使用');
toast.hide();
```


### API
| 方法名                    | 说明                                                                    | 参数            | 返回值     |
| ------------------------- | ----------------------------------------------------------------------- | --------------- | ---------- |
| Toast.text                | 展示文字提示                                                            | options/message | toast 实例 |
| Toast.success             | 展示成功提示                                                            | options/message | toast 实例 |
| Toast.fail                | 展示失败提示                                                            | options/message | toast 实例 |
| Toast.warn                | 展示警告提示                                                            | options/message | toast 实例 |
| Toast.hide                | 关闭提示                                                                | force:boolean   | void       |
| Toast.loading             | 展示加载提示                                                            | options/message | toast 实例 |

## Options

| 字段                | 说明                                                                          | 类型          | 默认值                        |
| ------------------- | ----------------------------------------------------------------------------- | ------------- | ----------------------------- |
| msg                 | 消息文本内容,支持传入HTML                                                     | String/VNode  | ""                            |
| id                  | 标识符，相同者共用一个实例<br>loading类型默认使用一个实例，其他类型默认不共用 | String/Number | -                             |
| duration            | 展示时长（毫秒）<br>值为 0 时，toast 不会自动消失（loading类型默认为0）       | Number        | 2000                          |
| center              | 是否展示在页面中部（为false时展示在底部）                                     | Boolean       | true                          |
| bottom              | 距页面底部的距离（像素），option.center为false时生效                          | Number       | 30                          |
| text-align-center     | 多行文案是否居中                                                              | Boolean       | true                          |
| bg-color             | 背景颜色（透明度）                                                            | String        | "rgba(0, 0, 0, 0.8)"       |
| custom-class         | 自定义类名                                                                    | String        | ""                            |
| icon                | 自定义图标，**支持图片链接或base64格式**                                        | String        | ""                            |
| size                | 文案尺寸，**small**/**base**/**large**三选一                                                  | String        | "base"                        |
| cover               | 是否显示遮罩层，loading类型默认显示                                           | Boolean       | loading类型true/其他类型false |
| cover-color          | 遮罩层颜色，默认透明                                                          | String        | "rgba(0,0,0,0)"               |
| loading-rotate       | loading图标是否旋转，仅对loading类型生效                                      | Boolean       | true                          |
| on-close             | 关闭时触发的事件                                                              | function      | null                          |
| close-on-click-overlay | 是否在点击遮罩层后关闭提示                                                    | Boolean       | false                         |
| toast-style          | 提示框style                                                        | object       | {}                         |
| toast-class          | 提示框class                                                        | String       | ""                         |

