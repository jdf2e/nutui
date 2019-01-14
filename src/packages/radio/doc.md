# Radio 单选按钮

## 基本用法

通过 **v-model** 绑定值当前选中项的 **label** ，二者一致时 **Radio** 选中。
```html
<nut-radio 
  v-model="radioVal"
  :label="b"
>备选项1
</nut-radio>
```
```javascript
export default {
  data() {
    return {
      radioVal:"a",
    }
  }
};
```

## 组合使用

```html
<nut-radio 
  v-model="radioVal1"
  :label="1"
>备选项1
</nut-radio>

<nut-radio 
  v-model="radioVal1"
  :label="2"
>备选项2
</nut-radio>
```


> 组合使用 **Radio** 组件时，推荐使用 **RadioGroup** 组件，按需加载时，别忘了引入哦

```html
<nut-radiogroup v-model="radioGroupVal1">
  <nut-radio label="a">备选项1</nut-radio>
  <nut-radio label="b">备选项2</nut-radio>
</nut-radiogroup>
```
```javascript
export default {
  data() {
    return {
      radioGroupVal1:"b",
    }
  }
};
```

## 禁用状态

通过给 **disabled** 传布尔值 **false** ，可将组件禁用

```html
<nut-radio 
  :disabled="true" 
  v-model="radioVal2" 
  label="禁用"
>备选项1
</nut-radio>
```


RadioGroup整体禁用

```html
<nut-radiogroup v-model="radioGroupVal2" :disabled="true">
  <nut-radio label="1">备选项1</nut-radio>
  <nut-radio label="2">备选项2</nut-radio>
  <nut-radio label="3">备选项3</nut-radio>
</nut-radiogroup>
```

## 自定义尺寸

内置 **small**，**base**，**large** 三种规格供使用。

```html
<nut-radio 
  size="small"
>小号
</nut-radio>

<nut-radio 
  size="base"
>默认
</nut-radio>

<nut-radio 
  size="large"
>大号
</nut-radio>
```

自定义RadioGroup整体尺寸

```html
<nut-radiogroup v-model="radioGroupVal3" size="large">
  <nut-radio label="1">备选项1</nut-radio>
  <nut-radio label="2">备选项2</nut-radio>
  <nut-radio label="3">备选项3</nut-radio>
</nut-radiogroup>
```

## 禁用动效

通过给 **animated** 传布尔值 **false** ，禁用自带动效

```html
<nut-radio 
   :animated="false" 
   v-model="radioVal3" 
   label="a"
>备选项1
</nut-radio>

<nut-radio 
   :animated="false" 
   v-model="radioVal3" 
   label="b"
>备选项2</nut-radio>
```

禁用 **RadioGroup** 动效

```html
<nut-radiogroup v-model="radioGroupVal4" :animated="false">
  <nut-radio label="a">备选项1</nut-radio>
  <nut-radio label="b">备选项2</nut-radio>
  <nut-radio label="c">备选项3</nut-radio>
</nut-radiogroup>
```


## 新增自定义class
```html
<nut-radio 
   class="my-radio"
>备选项</nut-radio>
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
| animated | 是否需要动效 | Boolean | true

### RadioGroup

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| v-model | 当前选中项的标识符，与label值一致时呈选中状态 | 任意类型 | -
| size | 尺寸，可选值small/base/large | String | base
| disabled | 是否禁用 | Boolean | false
| animated | 是否需要动效 | Boolean | true
