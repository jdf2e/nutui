# Switch 滑动开关

用来打开或关闭选项。

## 基础样式

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

内置 **small**，**base** 两种规格供使用。
```html
<nut-switch 
  :active="true" 
  size="small"
>
<nut-switch 
  :active="true" 
  size="base"
>
```

## change事件
```html
<nut-switch 
  @change="onChange($event,'1')"
>
</nut-switch>
```
```javascript
export default {
  methods: {
    onChange(status,index) {
      alert('status:'+status+',selected:'+index);
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
| size | 尺寸，可选值small/base | String | base
| disabled | 是否禁用 | Boolean | false