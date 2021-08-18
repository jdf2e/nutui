# Avatar 头像

### 介绍

用来代表用户或事物，支持图片、图标或字符展示。

### 安装
``` javascript
import { createApp } from 'vue';
// vue
import { Avatar } from '@nutui/nutui';
// taro
import { Avatar } from '@nutui/nutui-taro';

const app = createApp();
app.use(Avatar);
```

## 代码示例

### 基本用法

内置 smal / normal / large 三种尺寸规格

``` html
<nut-avatar size="large" icon="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
></nut-avatar>
<nut-avatar size="normal" icon="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
></nut-avatar>
<nut-avatar size="small" icon="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
></nut-avatar>  
```

### 修改形状类型

``` html
<nut-avatar icon="my" shape="square"></nut-avatar>
<nut-avatar icon="my" shape="round"></nut-avatar>
```

### 修改背景色

``` html
<nut-avatar icon="my" bg-color="#FA2C19" />
```

### 修改背景icon

``` html
<nut-avatar icon="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png" />
```

### 设置头像的文本内容

``` html
<nut-avatar>N</nut-avatar>
```


### Prop

| 字段     | 说明                                                                     | 类型   | 默认值 |
|----------|--------------------------------------------------------------------------|--------|--------|
| bg-color | 设置头像背景色                                                           | String | #eee   |
| size     | 设置头像的大小，提供三种：large/normal/small，支持直接输入数字           | String | normal |
| shape    | 设置头像的形状，默认是圆形，可以设置为square方形                         | String | round  |
| icon     | 设置头像的icon图标, 类似Icon组件的name属性，支持名称和链接 | String | ''     |

### Events

| 字段     | 说明                 | 类型     | 回调参数 |
|----------|----------------------|----------|----------|
| active-avatarror | 点击触发事件 | Function | event    |