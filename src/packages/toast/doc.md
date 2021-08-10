#  Toast组件

### 介绍

用于轻提示。

### 安装

``` javascript
import { Toast } from '@nutui/nutui';
```

## 代码演示

### 基础用法

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

展示时长设置

```javascript
Toast.text('设置展示时长为10秒',10);
```
      
自定义icon图标
```javascript
Toast.customIcon('设置icon为JD图标',5,'JD');
```      

## API

| 方法名                    | 说明                                                                    | 参数            | 返回值     |
| ------------------------- | ----------------------------------------------------------------------- | --------------- | ---------- |
| Toast.text                | 展示文字提示                                                            | options/message | toast 实例 |
| Toast.success             | 展示成功提示                                                            | options/message | toast 实例 |
| Toast.fail                | 展示失败提示                                                            | options/message | toast 实例 |
| Toast.warn                | 展示警告提示                                                            | options/message | toast 实例 |
| Toast.hide                | 关闭提示                                                                | force:boolean   | void       |
| Toast.loading             | 展示加载提示   


### Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| msg         | 消息文本内容,支持传入               | String | -                |
| duration        | 展示时长（毫秒）                         | String | 3                |
| icon         | 自定义图标,支持icon组件中的icon | String | -                |
| mask          | 是否需要显示透明遮罩防止滑动穿透                        | Boolean | false              |

### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| onClose  | 关闭时触发 | event: Event |
