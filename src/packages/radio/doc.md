# Radio 单选按钮

## 基本用法

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
## 禁用状态

非选中时的禁用状态

```html
<nut-radio 
  :disabled="true" 
  v-model="radioVal2" 
  label="禁用"
>备选项1
</nut-radio>
```

选中时的禁用状态

```html
<nut-radio 
  :disabled="true" 
  v-model="radioVal2" 
  label="选中且禁用"
>备选项2
</nut-radio>
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

## 禁用动效

animation属性值为false时，禁用自带动效

```html
<nut-radio 
   :animation="false" 
   v-model="radioVal3" 
   label="a"
>备选项1
</nut-radio>

<nut-radio 
   :animation="false" 
   v-model="radioVal3" 
   label="b"
>备选项2</nut-radio>
```


## 新增自定义class
```html
<nut-radio 
   class="my-radio"
>备选项</nut-radio>
```

## API

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| v-model | 当前选中项的标识符，与label值一致时呈选中状态 | 任意类型 | -
| label | 标识符，与v-model值一致时呈选中状态 | 任意类型 | -
| size | 尺寸，可选值small/base/large | String | base
| disabled | 是否禁用 | Boolean | false
| animation | 是否需要动效 | Boolean | true

## Event

| 字段 | 说明 | 回调参数 
|----- | ----- | ----- 
| change | 值变化时触发 | 当前选中项标识符（label） 
