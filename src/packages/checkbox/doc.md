# Checkbox 复选按钮

### 介绍

多选按钮用于选择。

### 安装

``` ts
import { Checkbox,CheckBoxGroup,Icon } from '@nutui/nutui';

```

## 基本用法

```html
const CheckBoxDemo = () => {
  const [checked, setChecked] = useState(true)
  return (<>
    <CheckBox textPosition={'left'} label={'复选框'} checked={checked}></CheckBox>
    <CheckBox textPosition={'right'} label={'复选框'} checked={false}></CheckBox>
  </>
  )
}
```

## 禁用状态

```html
const CheckBoxDemo = () => {
  return (<>
    <CheckBox
      textPosition={'right'}
      label={'未选时禁用状态'}
      checked={false}
      disabled={true}
    ></CheckBox>
    <CheckBox
      textPosition={'right'}
      label={'选中时禁用状态'}
      checked={true}
      disabled={true}
    ></CheckBox>
  </>)
}
```

## 自定义尺寸

```html
const CheckBoxDemo = () => {
  return (<>
    <CheckBox label={'自定义尺寸25'} iconSize={25}></CheckBox>
    <CheckBox label={'自定义尺寸10'} iconSize={10}></CheckBox>
  </>)
}
```

## 自定义图标

这里建议同时设置 `iconName` 和 `iconActiveName` 属性

```html
const CheckBoxDemo = () => {
  return (<>
    <CheckBox iconName="checklist" iconActiveName="checklist">自定义图标</CheckBox>
  </>)
}
```


## change事件

值发生变化时，将触发change事件

```html
const CheckBoxDemo = () => {
  return (<>
    <CheckBox
      checked={false}
      onChange={(state, label) => {
      Toast.text(`您${state ? '选中' : '取消'}了${label}`)
      }}
      >
      change复选框
    </CheckBox>
  </>)
}
```

## CheckBoxGroup使用

```html
const CheckBoxDemo = () => {
  const [checkboxgroup1, setCheckboxgroup1] = useState(['1'])
  return (
    <CheckBoxGroup
      checkedValue={checkboxgroup1}
      onChange={(value) => {
    console.log(value)
    setCheckboxgroup1(value)
    }}
    >
      <CheckBox checked={false} label="1">
        组合复选框
      </CheckBox>
      <CheckBox checked={false} label="2">
        组合复选框
      </CheckBox>
      <CheckBox checked={false} label="3">
        组合复选框
      </CheckBox>
      <CheckBox checked={false} label="4">
        组合复选框
      </CheckBox>
    </CheckBoxGroup>
  )
}
```

## CheckBoxGroup 全选/取消

```html
const CheckBoxDemo = () => {
  const [checkboxgroup2, setCheckboxgroup2] = useState(['1'])
  const checkboxgroup2Ref = useRef(null)
  return (<>
    <CheckBoxGroup
      style={{}}
      ref={checkboxgroup2Ref}
      checkedValue={checkboxgroup2}
      onChange={(value) => {
    Toast.text(`${value.length === 2 ? '全选' : '取消全选'}`)
    }}
    >
    <CheckBox checked={false} label="1">
      组合复选框
    </CheckBox>
    <CheckBox checked={false} label="2">
      组合复选框
    </CheckBox>
    </CheckBoxGroup>
    <Button
      type="primary"
      onClick={() => {
    ;(checkboxgroup2Ref.current as any).toggleAll(true)
    }}
    >
    全选
    </Button>
    <Button
      type="info"
      onClick={() => {
    ;(checkboxgroup2Ref.current as any).toggleAll(false)
    }}
    >
    取消
    </Button>
  </>)
}
```

## Checkbox

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| checked | 是否处于选中状态 | Boolean | `false`
| disabled | 是否禁用选择 | Boolean | `false`
| textPosition | 文本所在的位置，可选值：`left`,`right` | String | `right`
| iconSize | [图标尺寸](#/icon) | String、Number | `18`
| iconName | [图标名称](#/icon)，选中前(建议和`iconActiveName`一起修改) | String | `'check-normal'`
| iconActiveName | [图标名称](#/icon)，选中后(建议和`iconName`一起修改) | String | `'checked'`
| label | 复选框的文本内容 | String | -


## CheckBoxGroup

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| checkedValue | 当前选中项的标识符，和 `label` 相对应  | String | -
| disabled | 是否禁用选择,将用于其下的全部复选框 | Boolean | `false`



## Checkbox Event

| 字段 | 说明 | 回调参数
|----- | ----- | ----- 
| change | 值变化时触发 | (state, label),`state`代表当前状态，`label`表示当前选中的值

## CheckBoxGroup Event

| 字段 | 说明 | 回调参数
|----- | ----- | ----- 
| change | 值变化时触发 | label,`label`返回一个数组，表示当前选中项的集合