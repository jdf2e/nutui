# Switch 滑动开关

用来打开或关闭选项。

## 基本用法

```html
<nut-switch 
  :active="true"
>
</nut-switch>
```
加上 **.sync** 可实现数据的“双向绑定”。

```html
<nut-switch 
  :active.sync="swActive"
>
</nut-switch>
```
```javascript
export default {
  data() {
    return {
      swActive: true
    };
  }
};
```

## 自定义尺寸

内置 **small**，**base**，**large** 三种规格供使用。
```html
<nut-switch 
  :active="true" 
  size="small"
>
<nut-switch 
  :active="true" 
  size="base"
>
<nut-switch 
  :active="true" 
  size="large"
>
```

## change事件
```html
<nut-switch 
  @change="onChange"
>
</nut-switch>
```
```javascript
export default {
  methods: {
    onChange(status) {
      alert(status);
    }
  }
};
```

## 禁用状态
```html
<nut-switch 
  :disabled="true"
>
</nut-switch>
```
> 禁用状态下，change事件参数永远为初始值

## 自定义Class
```html
<nut-switch 
  :active="true"  
  class="my-switch"
>
</nut-switch>
```


## Prop

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| active | 开关状态 | Boolean | false
| size | 尺寸，可选值small/base/large | String | base
| disabled | 是否禁用 | Boolean | false
