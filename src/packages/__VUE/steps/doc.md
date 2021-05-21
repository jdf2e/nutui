# Steps 步骤条 组件

### 介绍

拆分展示某项流程的步骤，引导用户按流程完成任务或向用户展示当前状态。

### 安装

```javascript
import { createApp } from 'vue';
import { Steps } from '@nutui/nutui';

const app = createApp();
app.use(Steps);
```

## 代码演示

### 基本用法

```html
<nut-steps current="1">
  <nut-step title="进行中">1</nut-step>
  <nut-step title="未开始">2</nut-step>
  <nut-step title="未开始">3</nut-step>
  <nut-step title="未开始">4</nut-step>
</nut-steps>
```

### 标题和描述信息

```html
<nut-steps current="2">
  <nut-step title="已完成" content="步骤描述" icon="nutui-iconfont nut-icon-wanshangshide">1</nut-step>
  <nut-step title="进行中" content="步骤描述">2</nut-step>
  <nut-step title="未开始" content="步骤描述">3</nut-step>
</nut-steps>
```

### 自定义图标

```html
<nut-steps current="1">
  <nut-step title="已完成" icon="nutui-iconfont nut-icon-wanshangshide" status="error">1</nut-step>
  <nut-step title="进行中" icon="nutui-iconfont nut-icon-notice">2</nut-step> 
  <nut-step class="nut-step-wait" title="未开始" icon="nutui-iconfont nut-icon-notice">3</nut-step>
</nut-steps>
```

### 竖向步骤条

```html
<nut-steps direction="vertical" current="2">
  <nut-step title="已完成" icon="nutui-iconfont nut-icon-wanshangshide" content="您的订单已经打包完成，商品已发出" >1</nut-step>
  <nut-step title="进行中" content="您的订单正在配送途中" >2</nut-step>
  <nut-step title="未开始" content="收货地址为：北京市经济技术开发区科创十一街18号院京东大厦">3</nut-step>
</nut-steps>
```

### 点状步骤和垂直方向
```html
<nut-steps direction="vertical" progress-dot current="2">
  <nut-step title="已完成" content="您的订单已经打包完成，商品已发出" >1</nut-step>
  <nut-step title="进行中" content="您的订单正在配送途中">2</nut-step>
  <nut-step title="未开始" content="收货地址为：北京市经济技术开发区科创十一街18号院京东大厦">3</nut-step>
</nut-steps>
```


## API

### Props

#### nut-steps

| 参数                   | 说明                                                        | 类型           | 默认值      |
| ---------------------- | ----------------------------------------------------------- | -------------- | ----------- |
| direction	             | 	显示方向，`horizontal`,`vertical`  | String        | 'horizontal'  | 
| current	               | 	当前所在的步骤           | Number、String        | '0'      |
| progress-dot            |  点状步骤条     | Boolean | false         |



#### nut-step

| 参数           | 说明                   | 类型     | 默认值      |
| ---------------- | ---------------------- | ------------ | ----------- |
| title            | 流程步骤的标题         | String | 步骤 |
| content          | 流程步骤的描述性文字(支持 html 结构)       | String | 步骤描述 |
| icon          | 图标       | String | null |