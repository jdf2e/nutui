# Radio 单选按钮

### 介绍

用于在一组备选项中进行单选

### 安装

``` ts
import { createApp } from 'vue';
import { Radio } from '@nutui/nutui';

const app = createApp();
app.use(Radio);
```
## 基本用法

通过 **v-model** 绑定值当前选项的 **label** 。并且必须 **nut-radiogroup** 和 **nut-radio** 相结合进行使用

```html
<nut-radiogroup v-model="radioVal">
  <nut-radio :label="1">单选框1</nut-radio>
  <nut-radio :label="2">单选框2</nut-radio>
</nut-radiogroup>
```
```ts
setup() {
  return {
    radioVal:"1",
  };
}
```

## 禁用选择

```html
<nut-radiogroup v-model="radioVal3">
  <nut-radio :label="1" disabled>禁用单选框</nut-radio>
  <nut-radio :label="2" disabled>禁用单选框</nut-radio>
</nut-radiogroup>
```
```ts
setup() {
  return {
    radioVal3:"1",
  };
}
```

## 自定义尺寸

```html
<nut-radiogroup v-model="radioVal4">
  <nut-radio :label="1" icon-size="12">自定义尺寸12</nut-radio>
  <nut-radio :label="2" icon-size="12">自定义尺寸12</nut-radio>
</nut-radiogroup>
```
```ts
setup() {
  return {
    radioVal4:"1",
  };
}
```

## 自定义图标

建议 `icon-name` `icon-active-name` 一起修改

```html
<nut-radiogroup v-model="radioVal5">
  <nut-radio :label="1" icon-name="checklist" icon-active-name="checklist">自定义图标</nut-radio>
  <nut-radio :label="2" icon-name="checklist" icon-active-name="checklist">自定义图标</nut-radio>
</nut-radiogroup>
```
```ts
setup() {
  return {
    radioVal5:"1",
  };
}
```

## 触发 change 事件

```html
<nut-radiogroup v-model="radioVal6" @change="handleChange3">
  <nut-radio :label="1" >触发事件</nut-radio>
  <nut-radio :label="2" >触发事件</nut-radio>
</nut-radiogroup>
```
```ts
setup() {
  const handleChange3 = (value: any) => {
    Toast.text(`您选中了${value}`);
  }
  return {
    radioVal6:"1",
    handleChange3
  };
}
```

## Prop

### Radio

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| disabled | 是否禁用选择 | Boolean | `false`
| icon-size | [图标尺寸](#/icon) | String、Number | `18`
| icon-name | [图标名称](#/icon)，选中前(建议和`icon-active-name`一起修改) | String | `'check-normal'`
| icon-active-name | [图标名称](#/icon)，选中后(建议和`icon-name`一起修改) | String | `'check-checked'`
| label | 单选框标识 | String、Number、Boolean | -

### RadioGroup

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| v-model | 当前选中项的标识符，与label值一致时呈选中状态 | String、Number、Boolean | -
| text-position | 文本所在的位置，可选值：`left`,`right` | String | `right`

## RadioGroup Event

| 字段 | 说明 | 回调参数 
|----- | ----- | ----- 
| change | 值变化时触发 | 当前选中项值（label）【设置label后有值、默认为空】