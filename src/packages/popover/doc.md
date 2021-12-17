# Popover 气泡弹出框

### 介绍

点击或在元素上悬停鼠标，弹出气泡卡片浮层。

### 安装

``` javascript
import { Popover } from '@nutui/nutui';
```

### 代码实例

### 基本用法
Popover 支持明朗和暗黑两种风格，默认为明朗风格，将 theme 属性设置为 dark 可切换为暗黑风格。

```tsx
<Popover 
  visible={lightTheme} 
  onClick={()=>{lightTheme ? setLightTheme(false) : setLightTheme(true)}} 
  list={itemList}>
  <Button type="primary" shape="square">明朗风格</Button>
</Popover>
<Popover 
  visible={darkTheme} 
  theme="dark" 
  onClick={()=>{darkTheme ? setDarkTheme(false) : setDarkTheme(true)}} 
  list={itemList}>
  <Button type="primary" shape="square">暗黑风格</Button>
</Popover>
```

```javascript

  const [lightTheme, setLightTheme] = useState(false)
  const [darkTheme, setDarkTheme] = useState(false)
  const itemList = [
    {name: '选项一'},
    {name: '选项二'},
    {name: '选项三'}];

```

### 选项配置

```tsx
<Popover
  visible={showIcon} 
  theme="dark" 
  onClick={()=>{showIcon ? setShowIcon(false) : setShowIcon(true)}} 
  list={iconItemList}>
  <Button type="primary" shape="square">展示图标</Button>
</Popover>
<Popover 
  visible={disableAction} 
  onClick={()=>{disableAction ? setDisableAction(false) : setDisableAction(true)}} 
  list={itemListDisabled}>
  <Button type="primary" shape="square">禁用选项</Button>
</Popover>
```

```javascript

  const [showIcon, setShowIcon] = useState(false)
  const [disableAction, setDisableAction] = useState(false)
 const iconItemList= [
    {name: '选项一',icon: 'my2'},
    {name: '选项二',icon: 'cart2'},
    {name: '选项三',icon: 'location2'}
  ];
  const itemListDisabled=[
    {name: '选项一',disabled: true},
    {name: '选项二', disabled: true},
    {name: '选项三'}
  ];

```

### 自定义内容

```tsx
 <Popover 
  visible={customized} 
  onClick={()=>{customized ? setCustomized(false) : setCustomized(true)}}>
  <Button type="primary" shape="square">自定义内容</Button>
  {
    customized ? 
    <div className="self-content" style={selfContentStyle}>
    {
      selfContent.map((item: any)=>{
        return <div className="self-content-item" style={selfContentItem} key={item.name}>
          <Icon name={item.name} size="15"></Icon>
          <div className="self-content-desc" style={selfContentDesc}>{ item.desc }</div>
        </div>
      })
    }
  </div> : ''
  }
</Popover>
```
```javascript

  const [customized, setCustomized] = useState(false)
  const selfContent= [
    {
      name: 'service',
      desc: '选项一'
    },
    {
      name: 'notice',
      desc: '选项二'
    },
    {
      name: 'location',
      desc: '选项三'
    },
    {
      name: 'category',
      desc: '选项四'
    },
    {
      name: 'scan2',
      desc: '选项五'
    },
    {
      name: 'message',
      desc: '选项六'
    }
  ];

```

### 位置自定义

```tsx
<Popover  
  visible={topLocation} 
  location="top" 
  theme="dark" 
  onClick={()=>{topLocation ? setTopLocation(false) : setTopLocation(true)}} 
  list={iconItemList}>
  <Button type="primary" shape="square">向上弹出</Button>
</Popover>
<Popover 
  visible={rightLocation} 
  location="right" 
  theme="dark" 
  onClick={()=>{rightLocation ? setRightLocation(false) : setRightLocation(true)}} 
  list={iconItemList}>
  <Button type="primary" shape="square">向右弹出</Button>
</Popover>
<Popover  
  visible={leftLocation} 
  location="left" 
  theme="dark" 
  onClick={()=>{leftLocation ? setLeftLocation(false) : setLeftLocation(true)}} 
  list={iconItemList}>
  <Button type="primary" shape="square">向左弹出</Button>
</Popover>
```

```javascript

  const [topLocation, setTopLocation] = useState(false)
  const [rightLocation, setRightLocation] = useState(false)
  const [leftLocation, setLeftLocation] = useState(false)
  const iconItemList= [
    {name: '选项一',icon: 'my2'},
    {name: '选项二',icon: 'cart2'},
    {name: '选项三',icon: 'location2'}
  ];

```

## API

### Props

| 字段            | 说明                            | 类型     | 默认值      |
|----------------|---------------------------------|---------|------------|
| list          | 选项列表                          | List[]   | []        |
| visible      | 是否展示气泡弹出层                 | boolean  | false     |
| theme          | 主题风格，可选值为 dark            | string   | `light`   |
| location       | 弹出位置，可选值为 top,left,right  | string   | `bottom`  |

### List 数据结构  

List 属性是一个由对象构成的数组，数组中的每个对象配置一列，对象可以包含以下值：

| 键名            | 说明                 | 类型      | 默认值  |
|----------------|----------------------|----------|--------|
| name           | 选项文字               | string   | -      |
| icon           | nut-icon 图标名称      | string   | -      |
| disabled       | 是否为禁用状态          | boolean  | false  | 

### Events

| 名称    | 说明         |
|---------|--------------|
| onClick | 打开（关闭）菜单时触发 |



