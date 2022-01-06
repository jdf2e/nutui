# Popup 弹出层

### 介绍

弹出层容器，用于展示弹窗、信息提示等内容，支持多个弹出层叠加展示

### 安装

```javascript
import { createApp } from 'vue';
//vue
import { Popup,OverLay } from '@nutui/nutui';
//taro
import { Popup,OverLay } from '@nutui/nutui-taro';

const app = createApp();
app.use(Popup).use(OverLay)
```

## 代码演示

### 基础用法

`visible` 控制显示/隐藏

```html
<nut-popup :style="{ padding: '30px' }" v-model:visible="show">正文</nut-popup>
```

### 弹出位置

```html
<nut-popup
  position="top"
  v-model:visible="show"
  :style="{ height: '20%' }"
></nut-popup>

<nut-popup
  position="left"
  v-model:visible="show"
  :style="{ height: '100%', width: '20%' }"
></nut-popup>
```

### 图标

```html
<nut-popup
  position="bottom"
  closeable
  :style="{ height: '20%' }"
  v-model:visible="show"
></nut-popup>

<nut-popup
  position="bottom"
  closeable
  close-icon-position="top-left"
  :style="{ height: '20%' }"
  v-model:visible="show"
></nut-popup>

<nut-popup
  position="bottom"
  closeable
  close-icon-position="top-left"
  close-icon="heart"
  :style="{ height: '20%' }"
  v-model:visible="show"
></nut-popup>
```

### 圆角弹框

```html
<nut-popup
  position="bottom"
  closeable
  round
  :style="{ height: '30%' }"
  v-model:visible="show"
></nut-popup>
```

### 指定挂载节点

```html
<nut-popup :style="{ padding: '30px' }" teleport="#app" v-model:visible="show">app</nut-popup>
```

## API

### Props

| 参数                   | 说明                                                        | 类型           | 默认值        |
|------------------------|-------------------------------------------------------------|----------------|---------------|
| v-model:visible        | 当前组件是否显示                                            | Boolean        | `false`       |
| z-index                | 遮罩层级                                                    | String、Number | `2000`        |
| duration               | 动画时长，单位秒                                            | String、Number | `0.3`         |
| overlay-class          | 自定义遮罩类名                                              | String         | -             |
| overlay-style          | 自定义遮罩样式                                              | CSSProperties  | -             |
| lock-scroll            | 背景是否锁定                                                | Boolean        | `true`       |
| overlay                | 是否显示遮罩                                                | Boolean        | `true`        |
| close-on-click-overlay | 是否点击遮罩关闭                                            | Boolean        | `true`        |
| position               | 弹出位置（top,bottom,left,right,center）                    | String         | `"center"`    |
| transition             | 动画名                                                      | String         | -             |
| style                  | 自定义弹框样式                                              | CSSProperties  | -             |
| pop-class              | 自定义弹框类名                                              | String         | -             |
| closeable              | 是否显示关闭按钮                                            | Boolean        | `false`        |
| close-icon-position    | 关闭按钮位置（top-left,top-right,bottom-left,bottom-right） | String         | `"top-right"` |
| close-icon             | 自定义 Icon                                                 | String         | `"close"`     |
| destroy-on-close       | 组件销毁后是否关闭                                          | Boolean        | `true`        |
| round                  | 是否显示圆角                                                | Boolean        | `false`       |
| teleport               | 指定挂载节点(`小程序不支持`)                                                | String         | `"body"`      |

### Events

| 事件名           | 说明                   | 回调参数       |
|------------------|------------------------|----------------|
| click            | 点击弹框时触发         | `event: Event` |
| click-close-icon | 点击关闭图标时触发     | `event: Event` |
| open             | 打开弹框时触发         | -              |
| close            | 关闭弹框时触发         | -              |
| opend            | 遮罩打开动画结束时触发 | `event: Event` |
| closed           | 遮罩关闭动画结束时触发 | `event: Event` |
| click-overlay    | 点击遮罩触发           | `event: Event` |
