# Skeleton 骨架屏

### 介绍

在页面上待加载区域填充灰色的占位图，本质上是界面加载过程中的过渡效果。

### 安装

```javascript

import { createApp } from 'vue';
// vue
import { Skeleton } from '@nutui/nutui';
// taro
import { Skeleton } from '@nutui/nutui-taro';

const app = createApp();
app.use(Skeleton);

```

### 代码实例

### 基础用法

```html
<nut-skeleton width="250px" height="15px" animated> </nut-skeleton>
```

### 传入多行

```html
 <nut-skeleton width="250px" height="15px" title animated row="3"> </nut-skeleton>
```


### 显示头像

```html
<nut-skeleton width="250px" height="15px" title animated avatar row="3"> </nut-skeleton>
```


### 标题段落圆角风格

```html
<nut-skeleton width="250px" height="15px" animated round></nut-skeleton>
```


### 显示子组件

```html
    <div class="content">
      <nut-switch v-model="checked" size="15px" />

      <nut-skeleton width="250px" height="15px" title animated avatar row="3" :loading="!checked">
        <div class="container">
          <nut-avatar
            size="50"
            icon="https://img14.360buyimg.com/imagetools/jfs/t1/167902/2/8762/791358/603742d7E9b4275e3/e09d8f9a8bf4c0ef.png"
          />
          <div class="right-content">
            <div class="title">NutUI</div>
            <div class="desc"
              >一套京东风格的轻量级移动端Vue组库，提供丰富的基础组件和业务组件，帮助开发者快速搭建移动应用。</div
            >
          </div>
        </div>
      </nut-skeleton>
    </div>
```





### Prop  

| 字段       | 说明                                             | 类型    | 默认值    |
|------------|-------------------------------------------------|---------|----------|
| loading    | 是否显示骨架屏                                    | Boolean | `true`    | 
| width       | 每行宽度                                        | String  | `default` |
| height      | 每行高度                                        | String  | `100px`   |
| animated    | 是否开启骨架屏动画                                | Boolean  | `false`  |
| avatar      | 是否显示头像                                     | Boolean | `false`   |
| avatar-shape      | 头像形状：正方形/圆形                        | String | `round`   |
| avatar-size       | 头像大小                                   | String | `50px`    |
| round  | 标题/段落是否采用圆角风格                                | Boolean | `false`  |
| row    | 设置段落行数                                           | String | `1`       |
| title  | 是否显示段落标题                                        | Boolean | `true`   |


### Slots

| 名称    | 说明           |
|---------|---------------|
| default | 骨架屏显示内容  |

