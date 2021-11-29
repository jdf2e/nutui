# Toast 组件

### 介绍

用于轻提示。

### 安装

```javascript
import { Toast } from '@nutui/nutui'
```

## 代码演示

### 基础用法

文字提示

```javascript
Toast.text('网络失败，请稍后再试~')
```

成功提示

```javascript
Toast.success('成功提示')
```

失败提示

```javascript
Toast.fail('失败提示')
```

警告提示

```javascript
Toast.warn('警告提示')
```

加载提示

```javascript
Toast.loading('加载中')
```

展示时长设置

```javascript
Toast.text('设置展示时长为10秒', {duration:10})
```

自定义 icon 图标

```javascript
Toast.customIcon('设置icon为JD图标', {
      duration:0, //duration为0则一直展示
      icon:'JD',
      id: '',
      center: true, // toast是否居中展示
      type: 'text',
      customClass: '', // 自定义样式名
      bottom: 30,
      size: 'base', 
      textAlignCenter: true, 
      bgColor: 'rgba(0, 0, 0, .8)',
      cover: true, //是否展示透明遮罩层 
      coverColor: 'rgba(0, 0, 0, 0.4)', // 遮罩颜色设定
      closeOnClickOverlay: true, // 点击遮罩可关闭
      onClose: () => {
        console.log('closeToast')
      }
    })
```

## API

| 方法名        | 说明                       | 参数            | 返回值     |
| ---------- | ------------------------ | --------------- | ---------- |
| Toast.text                | 展示文字提示    |  message｜ options | toast 实例(message支持传入HTML) |
| Toast.success             | 展示成功提示       | message｜ options| toast 实例 |
| Toast.fail                | 展示失败提示     | message｜ options| toast 实例 |
| Toast.warn                | 展示警告提示        | message｜ options | toast 实例 |
| Toast.hide                | 关闭提示          | force:boolean   | void       |
| Toast.loading             | 展示加载提示       | message｜ options | toast 实例 |

### Props

| 字段                | 说明              | 类型          | 默认值                        |
| ------------------- | -------------- | ------------- | ----------------------------- |
| id                  | 标识符，相同者共用一个实例<br>loading类型默认使用一个实例，其他类型默认不共用 | String/Number | -                             |
| duration            | 展示时长（毫秒）<br>值为 0 时，toast 不会自动消失      | Number        | 2000                          |
| center              | 是否展示在页面中部（为false时展示在底部）                                     | Boolean       | true                          |
| bottom              | 距页面底部的距离（像素），option.center为false时生效                          | Number       | 30                          |
| textAlignCenter     | 多行文案是否居中                                                              | Boolean       | true                          |
| bgColor             | 背景颜色（透明度）                                                            | String        | "rgba(0, 0, 0, 0.8)"       |
| customClass         | 自定义类名                                            | String        | ""                            |
| icon                | 自定义图标，**支持图片链接或base64格式**              | String        | ""                            |
| size                | 文案尺寸，**small**/**base**/**large**三选一                                                  | String        | "base"                        |
| cover               | 是否显示遮罩层                                          | Boolean       | false |
| coverColor          | 遮罩层颜色，默认透明                                                          | String        | "rgba(0,0,0,0)"               |
| loadingRotate       | loading图标是否旋转，仅对loading类型生效                                      | Boolean       | true                          |
| onClose             | 关闭时触发的事件                                                              | function      | null                          |
| closeOnClickOverlay | 是否在点击遮罩层后关闭提示                                                    | Boolean       | false                         |

