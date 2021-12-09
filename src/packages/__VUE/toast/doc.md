# Toast 吐司

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

#### 全局使用方式
``` javascript
import { getCurrentInstance } from 'vue';

export default {
  setup() {
    const { proxy } = getCurrentInstance();
    proxy.$toast.text('全局使用方式');
    return {};
  },
};
```

#### 文字提示
``` javascript
import { Toast } from '@nutui/nutui';

export default {
  setup() {
    Toast.text('网络失败，请稍后再试~');
    return {};
  },
};
```
#### 标题提示

``` javascript
Toast.text(msg,{title:'标题文字' });
```
#### 成功提示

``` javascript
Toast.success('成功提示');
```

#### 失败提示

``` javascript
Toast.fail('失败提示');
```

#### 警告提示

``` javascript
Toast.warn('警告提示');
```

#### 加载提示

``` javascript
Toast.loading('加载中');
```

#### Toast不消失

``` javascript
Toast.text(msg,{
    duration:0
});
```
#### Toast自定义底部高度

``` javascript
Toast.text(msg, {
    center: false,
    bottom: '10%'
});
```

#### Loading带透明罩
``` javascript
Toast.loading(msg,{
     cover:true
});
```


####  支持在JS模块中导入使用
``` javascript
import { Toast } from "@nutui/nutui";
Toast.text('在js模块中使用');
// 返回实例，可以手动调用实例中的hide方法关闭提示
const toast = Toast.loading('在js模块中使用');
toast.hide();
```


### API
| 方法名                    | 说明                                                                    | 参数            | 返回值     |
| ------------------------- | ----------------------------------------------------------------------- | --------------- | ---------- |
| Toast.text                | 展示文字提示                                                            |  message｜ options | toast 实例(message支持传入HTML) |
| Toast.success             | 展示成功提示                                                            | message｜ options| toast 实例 |
| Toast.fail                | 展示失败提示                                                            | message｜ options| toast 实例 |
| Toast.warn                | 展示警告提示                                                            | message｜ options | toast 实例 |
| Toast.hide                | 关闭提示                                                                | 默认关闭所有实例，可传id关闭指定实例   | void       |
| Toast.loading             | 展示加载提示                                                            | message｜ options | toast 实例 |

## Options

| 字段                | 说明                                                                          | 类型          | 默认值                        |
| ------------------- | ----------------------------------------------------------------------------- | ------------- | ----------------------------- |
| id                  | 标识符，相同者共用一个实例<br>loading类型默认使用一个实例，其他类型默认不共用 | String/Number | -                             |
| duration            | 展示时长（毫秒）<br>值为 0 时，toast 不会自动消失      | Number        | 2000                          |
| title            | 标题     | String        | ''                          |
| center              | 是否展示在页面中部（为false时展示在底部）                                     | Boolean       | true                          |
| bottom              | 距页面底部的距离（像素或者百分比），option.center为false时生效                          | String       | "30px"                     |
| textAlignCenter     | 多行文案是否居中                                                              | Boolean       | true                          |
| bgColor             | 背景颜色（透明度）                                                            | String        | "rgba(0, 0, 0, 0.8)"       |
| customClass         | 自定义类名                                                                    | String        | ""                            |
| icon                | 自定义图标，**支持图片链接或base64格式**                                        | String        | ""                            |
| size                | 文案尺寸，**small**/**base**/**large**三选一                                                  | String        | "base"                        |
| cover               | 是否显示遮罩层                                          | Boolean       | false |
| cover-color          | 遮罩层颜色，默认透明                                                          | String        | "rgba(0,0,0,0)"               |
| loadingRotate       | loading图标是否旋转，仅对loading类型生效                                      | Boolean       | true                          |
| on-close             | 关闭时触发的事件                                                              | function      | null                          |
| close-on-click-overlay | 是否在点击遮罩层后关闭提示                                                    | Boolean       | false                         |
| toast-style          | 提示框style                                                        | object       | {}                         |
| toast-class          | 提示框class                                                        | String       | ""                         |

