# Popup 弹出层

### 介绍

弹出层容器，用于展示弹窗、信息提示等内容

### 安装

``` javascript
import { Popup } from '@nutui/nutui-react';
```

## 代码演示

### 基础用法

`visible` 控制显示/隐藏

```html
<Popup visible={ showBasic } style={{ padding: '30px 50px' }} onClose={ () => { setShowBasic(false) } }>正文</Popup>
```

### 弹出位置

```html
<Popup visible={ showTop } style={{ height: '20%' }} position="top" onClose={ () => { setShowTop(false) } }></Popup>
<Popup visible={ showBottom } style={{ height: '20%' }} position="bottom" onClose={ () => { setShowBottom(false) } }></Popup>
<Popup visible={ showLeft } style={{ width: '20%', height: '100%' }} position="left" onClose={ () => { setShowLeft(false) } }></Popup>
<Popup visible={ showRight } style={{ width: '20%', height: '100%' }} position="right" onClose={ () => { setShowRight(false) } }></Popup>
```

### 图标

```html
<Popup closeable visible={ showIcon } style={{ height: '20%' }} position="bottom" onClose={ () => { setShowIcon(false) } }></Popup>
<Popup closeable visible={ showIconPosition } style={{ height: '20%' }} closeIconPosition="top-left" position="bottom" onClose={ () => { setShowIconPosition(false) } }></Popup>
<Popup closeable visible={ showIconDefine } style={{ height: '20%' }} closeIcon="heart" position="bottom" onClose={ () => { setShowIconDefine(false) } }></Popup>
```

### 圆角弹框

```html
<Popup closeable visible={ showBottomRound } style={{ height: '20%' }} position="bottom" round onClose={ () => { setShowBottomRound(false) } }></Popup>
```

## API

### Props

| 参数                   | 说明                                                        | 类型           | 默认值        |
|------------------------|-------------------------------------------------------------|----------------|---------------|
| visible                | 当前组件是否显示                                            | Boolean        | `false`       |
| z-index                | 遮罩层级                                                    | String、Number | `2000`        |
| duration               | 遮罩动画时长，单位秒                                            | Number | `0.3`         |
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

### Events

| 事件名           | 说明                   | 回调参数       |
|------------------|------------------------|----------------|
| click            | 点击弹框时触发         | `event: MouseEvent` |
| click-close-icon | 点击关闭图标时触发     | `event: MouseEvent` |
| open             | 打开弹框时触发         | -              |
| close            | 关闭弹框时触发         | -              |
| opend            | 遮罩打开动画结束时触发 | `event: HTMLElement` |
| closed           | 遮罩关闭动画结束时触发 | `event: HTMLElement` |
| click-overlay    | 点击遮罩触发           | `event: MouseEvent` |
