# Steps 步骤条

拆分展示某项流程的步骤，引导用户按流程完成任务或向用户展示当前状态。

## 基本用法

正常流程

```html
<nut-steps 
  :current="current"
>
  <nut-step 
    title="已完成" 
    content="这里是该步骤的描述信息"
  >
  </nut-step>
  <nut-step 
    title="已完成" 
    content="这里是该步骤的描述信息"
  >
  </nut-step>
  <nut-step 
    title="进行中" 
    content="这里是该步骤的描述信息"
  >
  </nut-step>
  <nut-step 
    title="待进行" 
    content="这里是该步骤的描述信息"
  >
  </nut-step>
  <nut-step 
    title="待进行" 
    content="这里是该步骤的描述信息"
  >
  </nut-step>
</nut-steps>
```

流程终止

```html
<nut-steps 
  :current="current" 
  status="error"
>
  <nut-step 
    title="已完成" 
    content="这里是该步骤的描述信息"
  >
  </nut-step>
  <nut-step 
    title="已完成" 
    content="这里是该步骤的描述信息"
  >
  </nut-step>
  <nut-step 
    title="进行中" 
    content="这里是该步骤的描述信息"
  >
  </nut-step>
  <nut-step 
    title="待进行" 
    content="这里是该步骤的描述信息"
  >
  </nut-step>
  <nut-step 
    title="待进行" 
    content="这里是该步骤的描述信息"
  >
  </nut-step>
</nut-steps>
```


## Prop

### nut-steps

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| current | 当前所在的步骤 | Number | 0
| status | 流程状态 | String | "process"（可选值 "wait"、"process"、"finish"、"error"）

### nut-step
  
| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| title | 流程步骤的title | String | 步骤
| content | 流程步骤的content | String | 步骤描述
