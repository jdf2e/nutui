#  Rate组件

### 介绍

用于快速的评级操作，或对评价进行展示。

### 安装

```javascript
import { Rate } from '@nutui/nutui-react';
```

## 代码演示

### 基础用法  
``` tsx
<Rate modelValue={3}></Rate>
``` 
        
### 半星  
``` tsx
 <Rate allowHalf modelValue="3.5"></Rate>
``` 

### 自定义 icon   
``` tsx
<Rate checkedIcon="heart-fill1" uncheckedIcon="heart" modelValue="3"></Rate>
``` 

### 自定义数量  
``` tsx
<Rate count="6" modelValue="3"></Rate>
``` 

### 自定义颜色 
``` tsx 
<Rate activeColor="#FFC800" modelValue="3"></Rate>
``` 

### 禁用状态  
``` tsx
<Rate disabled modelValue="3"></Rate>
``` 

### 只读状态  
``` tsx
<Rate modelValue="3" readonly></Rate>
``` 

### 绑定事件  
``` tsx
<Rate modelValue="3" change={() => onChange}></Rate>
``` 
### 自定义尺寸 35px  
``` tsx
<Rate modelValue="3" iconSize="35"></Rate>
``` 


## API

## Prop

| 字段           | 说明                                      | 类型    | 默认值      |
|----------------|-------------------------------------------|---------|-------------|
| modelValue        | 当前 star 数不能大于count | Number  | -           |
| count          | star 总数                                 | Number  | 5           |
| iconSize      | star 大小                                 | Number  | 18          |
| activeColor   | 图标选中颜色                              | String  | #fa200c     |
| voidColor     | 图标未选中颜色                            | String  | #ccc        |
| uncheckedIcon | 使用图标(未选中)                          | String  | star-n      |
| checkedIcon   | 使用图标(选中)                            | String  | star-fill-n |
| allowHalf     | 是否半星                                  | Boolean | false       |
| readonly       | 是否只读                                  | Boolean | false       |
| disabled       | 是否禁用                                  | Boolean | false       |
| spacing        | 间距                                      | Number  | 20          |

## Event
| 字段   | 说明                       | 回调参数 |
|--------|----------------------------|----------|
| change | 当前分值修改时时触发的事件 | 当前值   |
