# Checkbox 复选按钮

### 介绍

多选按钮用于选择。

### 安装

``` javascript
import { createApp } from 'vue';
import { Checkbox } from '@nutui/nutui';

const app = createApp();
app.use(Checkbox);
```

## 基本用法

```html
<nut-checkbox v-model="checkbox">选项</nut-checkbox>
```
```javascript
setup() {
  return {
    checkbox: false,
  };
}
```

## CheckboxGroup基本用法
```html
<nut-checkboxgroup v-model="checkboxGroup">
  <nut-checkbox label="选项一"></nut-checkbox>
  <nut-checkbox label="选项二"></nut-checkbox>
</nut-checkboxgroup>
```
```javascript
setup() {
  return {
    checkboxGroup: ['选项一'],
  };
}
```
## 禁用状态

```html
<nut-checkbox v-model="checkbox1" disabled>未选时禁用状态</nut-checkbox>
<nut-checkbox v-model="checkbox2" disabled>已选时禁用状态</nut-checkbox>
```

```javascript
setup() {
  return {
    checkbox1: false,
    checkbox2: true,
  };
}
```

## CheckboxGroup整体禁用

```html
<nut-checkboxgroup v-model="checkboxGroup" disabled>
  <nut-checkbox label="选项一"></nut-checkbox>
  <nut-checkbox label="选项二"></nut-checkbox>
</nut-checkboxgroup>
```

```javascript
setup() {
  return {
    checkboxGroup: ['选项一'],
  };
}
```

## 自定义尺寸

内置 **small**，**normal**，**large** 三种规格供使用。
```html
<nut-checkbox v-model="checkbox1" size="small">小号1</nut-checkbox>
<nut-checkbox v-model="checkbox2" size="normal">默认</nut-checkbox>
<nut-checkbox v-model="checkbox3" size="large">大号</nut-checkbox>
```

```javascript
setup() {
  return {
    checkbox1: true,
    checkbox2: true,
    checkbox3: true,
  };
}

```

## CheckboxGroup整体尺寸

```html
<nut-checkboxgroup v-model="checkboxGroup" size="small">
  <nut-checkbox label="选项一"></nut-checkbox>
  <nut-checkbox label="选项二"></nut-checkbox>
</nut-checkboxgroup>
```

```javascript
setup() {
  return {
    checkboxGroup: [],
  };
}
```

## 禁用动效

is-animation属性值为false时，禁用自带动效

```html
<nut-checkbox v-model="checkbox" :is-animation="false">没有动效</nut-checkbox>
```

```javascript
setup() {
  return {
    checkbox: false,
  };
}
```

## CheckboxGroup整体禁用动效

```html
<nut-checkboxgroup v-model="checkboxGroup" :is-animation="false">
  <nut-checkbox label="没有动效1"></nut-checkbox>
  <nut-checkbox label="没有动效2"></nut-checkbox>
</nut-checkboxgroup>
```

```javascript
setup() {
  return {
    checkboxGroup: ['没有动效1'],
  };
}
```

## 事件

值发生变化时，将触发change事件

```html
<nut-checkbox v-model="checkbox" @change="checkboxChange">
  change事件
</nut-checkbox>
```

```javascript
setup() {
  const checkbox = ref(false);
  const checkboxChange= (checked) => {
    console.log('change事件触发' + checked);
	}  
  return {
    checkbox,
    checkboxChange
  };
}
```

## CheckboxGroup整体事件

```html
<nut-checkboxgroup v-model="checkboxGroup" @change="getChange">
  <nut-checkbox label="选项一"></nut-checkbox>
  <nut-checkbox label="选项二"></nut-checkbox>
</nut-checkboxgroup>
```

```javascript
setup() {
  const checkboxGroup = reactive(['选项一']);
  const getChange= (val) => {
    console.log('选中状态选项：' + val);
	}  
  return {
    checkboxGroup,
    getChange
  };
}
```
## 自定义class
```html
<nut-checkbox class="my-checkbox" v-model="checkbox">自定义Class:"my-checkbox"</nut-checkbox>
```
```javascript
setup() {
  const checkbox = ref(false);
  return {
    checkbox,
  };
}
```

## 全选与反选
```html
<nut-checkboxgroup
  ref="checkboxGroupDemo"
  v-model="checkboxGroup"
  @change="getChange"
>
  <nut-checkbox label="选项一"></nut-checkbox>
  <nut-checkbox label="选项二"></nut-checkbox>
  <nut-checkbox label="选项三"></nut-checkbox>
</nut-checkboxgroup>
<nut-button size="small" type="primary" @click="chooseAll(true)">全选</nut-button>
<nut-button size="small" type="primary" @click="chooseAll()">反选</nut-button>
<nut-button size="small" type="primary" @click="chooseAll(false)">取消</nut-button>
```
```javascript
setup() {
  const checkboxGroup = ref([]);
  const getChange = (val: string) => {
    console.log('选中状态选项：' + val);
  };
  const checkboxGroupDemo = ref(null);
  const chooseAll = (val: boolean | string) => {
    (checkboxGroupDemo.value as any).toggleAll(val);
  };
  return {
    checkboxGroup,
    getChange,
    chooseAll
  };
}
```

## CheckboxGroup排列方向

```html
<nut-checkboxgroup
  v-model="checkboxGroup"
  direction="vertical"
  @change="getChange"
>
  <nut-checkbox label="选项一"></nut-checkbox>
  <nut-checkbox label="选项二"></nut-checkbox>
  <nut-checkbox label="选项三"></nut-checkbox>
</nut-checkboxgroup>
```
```javascript
setup() {
  const checkboxGroup = ref([]);
  const getChange = (val: string) => {
    console.log('选中状态选项：' + val);
  };
  return {
    checkboxGroup,
    getChange,
  };
}
```

## Prop

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| name | checkbox的name属性 | String | -
| v-model | 必填项，当前选中项的选中状态,同步value | Boolean | false
| label | 当前选中项的label值，（可不设，设置后label有值，替换插值内容） | String | -
| checked | checkbox的checked属性 | Boolean | false
| size | 尺寸，可选值small/normal/large | String | normal
| disabled | 是否禁用 | Boolean | false
| is-animation | 是否需要动效 | Boolean | true

### CheckGroup

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| v-model | 必填项，当前选中项的选中状态,同步value | Boolean | false
| size | 尺寸，可选值small/normal/large | String | normal
| disabled | 是否禁用 | Boolean | false
| is-animation | 是否需要动效 | Boolean | true


## Event

| 字段 | 说明 | 回调参数 
|----- | ----- | ----- 
| change | 值变化时触发 | 当前选中项状态（checked），当前选中项值（label）【设置label后有值、默认为空】,event
