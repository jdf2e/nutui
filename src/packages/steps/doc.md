# Steps 步骤条

拆分展示某项流程的步骤，引导用户按流程完成任务或向用户展示当前状态。

## 基本用法

基础样式

```html
<nut-steps>
  <nut-step title="已签收" content="您的订单已由本人签收。如有疑问您可以联系配送员，感谢您在京东购物。" time="2020-03-03 11:09:96">
    <template v-slot:status-icon>
      <nut-icon type="self" :url="require('../../assets/svg/finish.svg')"></nut-icon>
    </template>
  </nut-step>
  <nut-step title="运输中" content="您的订单已达到京东【北京旧宫营业部】" time="2020-03-03 11:09:06">
    <template v-slot:status-icon>
      <nut-icon type="self" :url="require('../../assets/svg/processed.svg')"></nut-icon>
    </template>
  </nut-step>
  <nut-step content="您的订单已达到京东【北京旧宫营业部】" time="2020-03-03 11:09:06"></nut-step>
  <nut-step content="您的订单由京东【北京顺义分拣中心】送往【北京旧宫营业部】" time="2020-03-03 11:09:06"></nut-step>
  <nut-step title="已下单" content="您提交了订单，请等待系统确认" time="2020-03-03 11:09:06">
    <template v-slot:status-icon>
      <nut-icon type="self" :url="require('../../assets/svg/processed.svg')"></nut-icon>
    </template>
  </nut-step>
</nut-steps>
```

迷你样式

```html
<nut-steps type="mini">
  <nut-step title="已签收" content="您的订单已由本人签收。如有疑问您可以联系配送员，感谢您在京东购物。" time="2020-03-03 11:09:96"></nut-step>
  <nut-step title="运输中" content="您的订单已达到京东【北京旧宫营业部】" time="2020-03-03 11:09:06"></nut-step>
  <nut-step content="您的订单已达到京东【北京旧宫营业部】" time="2020-03-03 11:09:06"></nut-step>
  <nut-step content="您的订单由京东【北京顺义分拣中心】送往【北京旧宫营业部】" time="2020-03-03 11:09:06"></nut-step>
  <nut-step title="已下单" content="您提交了订单，请等待系统确认" time="2020-03-03 11:09:06"></nut-step>
</nut-steps>
```

时间前置

```html
<nut-steps :time-forward="true">
  <nut-step title="已签收" content="您的订单已由本人签收。如有疑问您可以联系配送员，感谢您在京东购物。" time="03-03 11:09">
    <template v-slot:status-icon>
      <nut-icon type="self" :url="require('../../assets/svg/finish.svg')"></nut-icon>
    </template>
  </nut-step>
  <nut-step title="运输中" content="您的订单已达到京东【北京旧宫营业部】" time="03-03 11:09">
    <template v-slot:status-icon>
      <nut-icon type="self" :url="require('../../assets/svg/processed.svg')"></nut-icon>
    </template>
  </nut-step>
  <nut-step content="您的订单已达到京东【北京旧宫营业部】" time="03-03 11:09"></nut-step>
  <nut-step content="您的订单由京东【北京顺义分拣中心】送往【北京旧宫营业部】" time="03-03 11:09"></nut-step>
  <nut-step title="已下单" content="您提交了订单，请等待系统确认" time="03-03 11:09"></nut-step>
</nut-steps>
```

横向步骤条
```html
<nut-steps :current="1" type="process" direction="horizontal">
  <nut-step title="已完成"></nut-step>
  <nut-step title="进行中">
    <template v-slot:status-icon>
      <nut-icon type="self" :url="require('../../assets/svg/process.svg')"></nut-icon>
    </template>
  </nut-step>
  <nut-step title="等待中"></nut-step>
</nut-steps>
<nut-steps :current="1" type="process" direction="horizontal">
  <nut-step title="已完成" content="这里是描述文字"></nut-step>
  <nut-step title="进行中" content="这里是描述文字">
    <template v-slot:status-icon>
      <nut-icon type="self" :url="require('../../assets/svg/process.svg')"></nut-icon>
    </template>
  </nut-step>
  <nut-step title="等待中" content="这里是描述文字"></nut-step>
</nut-steps>
```



## Prop

### nut-steps

| 字段    | 说明                                  | 类型   | 默认值                                                   |
|---------|---------------------------------------|--------|----------------------------------------------------------|
| current | 当前所在的步骤                        | Number | 0                                                        |
| time-forward  | 时间前置选项                    | Boolean | false |
| direction  | 垂直或水平方向 | String  | vertical                                                       |
| type  | 步骤条类型 | String  | '' (可选 process, mini)                                                       |
| source  | 数据依赖 | any  |                                                     |
### nut-step
  
| 字段    | 说明              | 类型   | 默认值   |
|---------|-------------------|--------|----------|
| title   | 流程步骤的title   | String | 步骤     |
| content | 流程步骤的content | String | 步骤描述 |
| time | 流程步骤的操作时间| String | 步骤操作时间 |