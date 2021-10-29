# Avatar 头像

### 介绍

用来代表用户或事物，支持图片、图标或字符展示。

### 安装
``` javascript
import { Avatar } from '@nutui/nutui-react';
```

## 代码示例

### 基本用法

内置 smal / normal / large 三种尺寸规格

``` tsx
<Avatar size="large" src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
></Avatar>
<Avatar size="normal" src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
></Avatar>
<Avatar size="small" src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
></Avatar>  
```

### 修改形状类型

``` tsx
<Avatar shape="square"></Avatar>
<Avatar shape="round"></Avatar>
```

### 修改背景色

``` tsx
<Avatar bg-color="#f0250f"></Avatar>
```

### 修改背景icon

``` tsx
<Avatar icon="https://img30.360buyimg.com/uba/jfs/t1/84318/29/2102/10483/5d0704c1Eb767fa74/fc456b03fdd6cbab.png"></Avatar>
```

### 设置头像的文本内容

``` tsx
<Avatar icon>N</Avatar>
```


### Prop

| 字段     | 说明                                                                     | 类型   | 默认值 |
|----------|--------------------------------------------------------------------------|--------|--------|
| bgColor | 设置头像背景色                                                           | String | #eee   |
| size     | 设置头像的大小，提供三种：large/normal/small，支持直接输入数字           | String | normal |
| shape    | 设置头像的形状，默认是圆形，可以设置为square方形                         | String | round  |
| src      | 设置头像的背景图片                                                       | String | ''     |
| icon     | 设置头像的icon图标, 优先级低于src,类似Icon组件的name属性，支持名称和链接 | String | ''     |

### Events

| 字段     | 说明                 | 类型     | 回调参数 |
|----------|----------------------|----------|----------|
| onClick | 点击图片触发事件 | Function | event    |