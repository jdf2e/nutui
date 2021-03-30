# Avatar 头像

### 介绍

用来代表用户或事物，支持图片、图标或字符展示。

### 安装
``` javascript
import { createApp } from 'vue';
import { Avatar } from '@nutui/nutui';

const app = createApp();
app.use(Avatar);
```

## 代码示例

### 基本用法

内置 smal / normal / large 三种尺寸规格

``` html
<nut-avatar size="large" src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
></nut-avatar>
<nut-avatar size="normal" src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
></nut-avatar>
<nut-avatar size="small" src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
></nut-avatar>  
```

### 修改形状类型

``` html
<nut-avatar shape="square"></nut-avatar>
<nut-avatar shape="round"></nut-avatar>
```

### 修改背景色

``` html
<nut-avatar bg-color="#f0250f"></nut-avatar>
```

### 修改背景icon

``` html
<nut-avatar icon="https://img30.360buyimg.com/uba/jfs/t1/84318/29/2102/10483/5d0704c1Eb767fa74/fc456b03fdd6cbab.png"></nut-avatar>
```

### 设置头像的文本内容

``` html
<nut-avatar icon>N</nut-avatar>
```


### Prop

| 字段     | 说明                                                                     | 类型   | 默认值 |
|----------|--------------------------------------------------------------------------|--------|--------|
| bg-color | 设置头像背景色                                                           | String | #eee   |
| size     | 设置头像的大小，提供三种：large/normal/small，支持直接输入数字           | String | normal |
| shape    | 设置头像的形状，默认是圆形，可以设置为square方形                         | String | round  |
| src      | 设置头像的背景图片                                                       | String | ''     |
| icon     | 设置头像的icon图标, 优先级低于src,类似Icon组件的name属性，支持名称和链接 | String | ''     |

### Events

| 字段     | 说明                 | 类型     | 回调参数 |
|----------|----------------------|----------|----------|
| on-error | 加载图片失败触发事件 | Function | event    |