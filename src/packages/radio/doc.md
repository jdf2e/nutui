# Radio 单选按钮

## Radio 基本用法

通过 **v-model** 绑定值当前选中项的 **label** ，二者一致时 **Radio** 选中。
```html
<nut-radio v-model="radioVal" :label="b">备选项1</nut-radio>
```
```javascript
setup() {
  return {
    radioVal:"a",
  };
}
```

## 组合使用 Radio

```html
<nut-radio v-model="radioVal" :label="1">备选项1</nut-radio>
<nut-radio v-model="radioVal" :label="2">备选项2</nut-radio>
```
```javascript
setup() {
  return {
    radioVal:"2",
  };
}
```

## RadioGroup基本用法

```html
<nut-radiogroup v-model="radioGroupVal">
  <nut-radio label="a">备选项1</nut-radio>
  <nut-radio label="b">备选项2</nut-radio>
</nut-radiogroup>
```
```javascript
setup() {
  return {
    radioGroupVal:"b",
  };
}
```


## Radio 禁用

通过给 **disabled** 传布尔值 **false** ，可将组件禁用

```html
<nut-radio :disabled="true" label="禁用">备选项1</nut-radio>
```

## RadioGroup 整体禁用

```html
<nut-radiogroup v-model="radioGroupVal" :is-animated="false">
  <nut-radio label="a">备选项1</nut-radio>
  <nut-radio label="b">备选项2</nut-radio>
  <nut-radio label="c">备选项3</nut-radio>
</nut-radiogroup>
```
```javascript
setup() {
  return {
    radioGroupVal:"c",
  };
}
```

## Radio 自定义尺寸

内置 **small**，**base**，**large** 三种规格供使用。

```html
<nut-radio size="small">小号</nut-radio>
<nut-radio size="base">默认</nut-radio>
<nut-radio size="large">大号</nut-radio>
```

## RadioGroup整体定义尺寸

内置 **small**，**base**，**large** 三种规格供使用。

```html
<nut-radiogroup v-model="radioGroupVal" size="large">
  <nut-radio label="1">备选项1</nut-radio>
  <nut-radio label="2">备选项2</nut-radio>
  <nut-radio label="3">备选项3</nut-radio>
</nut-radiogroup>
```
```javascript
setup() {
  return {
    radioGroupVal:"2",
  };
}
```

## 禁用动效

通过给 **is-animated** 传布尔值 **false** ，禁用自带动效

```html
<nut-radio :is-animated="false" v-model="radioVal" label="a">备选项1</nut-radio>
<nut-radio :is-animated="false" v-model="radioVal" label="b">备选项2</nut-radio>
```
```javascript
setup() {
  return {
    radioVal: 'b',
  };
}
```

## RadioGroup 禁用动效

```html
<nut-radiogroup v-model="radioGroupVal" :is-animated="false">
  <nut-radio label="a">备选项1</nut-radio>
  <nut-radio label="b">备选项2</nut-radio>
  <nut-radio label="c">备选项3</nut-radio>
</nut-radiogroup>
```
```javascript
setup() {
  return {
    radioGroupVal: 'c',
  };
}
```


## 新增自定义class
```html
<nut-radio class="my-radio">备选项</nut-radio>
```
**RadioGroup** 也支持新增自定义class

## Prop

### Radio

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| v-model | 当前选中项的标识符，与label值一致时呈选中状态 | 任意类型 | -
| label | 标识符，与v-model值一致时呈选中状态 | 任意类型 | -
| size | 尺寸，可选值small/base/large | String | base
| disabled | 是否禁用 | Boolean | false
| is-animated | 是否需要动效 | Boolean | true

### RadioGroup

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| v-model | 当前选中项的标识符，与label值一致时呈选中状态 | String、Number、Boolean | -
| size | 尺寸，可选值small/base/large | String | `base`
| disabled | 是否禁用 | Boolean | `false`
| is-animated | 是否需要动效 | Boolean | `true`

## Event

| 字段 | 说明 | 回调参数 
|----- | ----- | ----- 
| change | 值变化时触发 | 当前选中项值（label）【设置label后有值、默认为空】