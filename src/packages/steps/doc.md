# Steps 步骤条

### 介绍

拆分展示某项流程的步骤，引导用户按流程完成任务或向用户展示当前状态。

### 安装

```javascript
import { Steps } from '@nutui/nutui';
```

## 代码演示

### 基本用法

```tsx
<Steps current={1}>
  <Step activeIndex={1} title="步骤一">1</Step>
  <Step activeIndex={2} title="步骤二">2</Step>
  <Step activeIndex={3} title="步骤三">3</Step>
</Steps>
```

### 标题和描述信息

```tsx
<Steps current={2}>
  <Step activeIndex={1} title="步骤一" content="步骤描述">1</Step>
  <Step activeIndex={2} title="步骤二" content="步骤描述">2</Step>
  <Step activeIndex={3} title="步骤三" content="步骤描述">3</Step>
</Steps>
```

### 自定义图标

```tsx
<Steps current={1}>
  <Step activeIndex={1} title="已完成" icon="service">1</Step>
  <Step activeIndex={2} title="进行中" icon="people">2</Step> 
  <Step activeIndex={3} title="未开始" icon="location2">3</Step>
</Steps>
```

### 竖向步骤条

```tsx
<Steps direction="vertical" current={2}>
  <Step activeIndex={1} title="已完成" content="您的订单已经打包完成，商品已发出">1</Step>
  <Step activeIndex={2} title="进行中" content="您的订单正在配送途中">2</Step>
  <Step activeIndex={3} title="未开始" content="收货地址为：北京市经济技术开发区科创十一街18号院京东大厦">3</Step>
</Steps>
```

### 点状步骤和垂直方向
```tsx
<Steps direction="vertical" progressDot current={2}>
  <Step activeIndex={1} title="已完成" content="您的订单已经打包完成，商品已发出">1</Step>
  <Step activeIndex={2} title="进行中" content="您的订单正在配送途中">2</Step>
  <Step activeIndex={3} title="未开始" renderContent={() => (
        <>
            <p>收货地址为：</p>
            <p>北京市经济技术开发区科创十一街18号院京东大厦</p>
        </>
  )}>3</Step>
</Steps>
```


## API

### Props

#### Steps

| 参数                   | 说明                                                        | 类型           | 默认值      |
| ---------------------- | ----------------------------------------------------------- | -------------- | ----------- |
| direction	             | 	显示方向，`horizontal`,`vertical`  | String        | 'horizontal'  | 
| current	               | 	当前所在的步骤           | Number        | 0      |
| progressDot            |  点状步骤条     | Boolean | false         |



#### nut-step

| 参数           | 说明                   | 类型     | 默认值      |
| ---------------- | ---------------------- | ------------ | ----------- |
| title            | 流程步骤的标题         | String | '' |
| content          | 流程步骤的描述性文字       | String | '' |
| icon          | 图标       | String | '' |
| size          | 图标尺寸大小       | String | '' |
| activeIndex          | 流程步骤的索引       | Number | 0 |
| renderContent         | 流程步骤的描述性文字的html结构      | React.ReactNode | - |