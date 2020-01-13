# Checkbox 复选按钮

## 基本用法

```html
<nut-checkbox 
	v-model="checkbox1">
	选项
</nut-checkbox>
```

```javascript
data() {
    return {
      	checkbox1: false,
    };
}
```
## 禁用状态

非选中时的禁用状态

```html
<nut-checkbox 
	v-model="checkbox1" 
	disabled>
	未选时禁用状态
</nut-checkbox>
```

```javascript
data() {
    return {
      	checkbox1: false,
    };
}
```

选中时的禁用状态

```html
<nut-checkbox 
	v-model="checkbox1" 
	disabled>
	已选时禁用状态
</nut-checkbox>
```

```javascript
data() {
    return {
      	checkbox1: true,
    };
},
```

## 自定义尺寸

内置 **small**，**base**，**large** 三种规格供使用。

```html
<nut-checkbox 
	v-model="checkbox1" 
	size="small">
	小号
</nut-checkbox>

<nut-checkbox 
	v-model="checkbox2" 
	size="base" >
 	默认
</nut-checkbox>

<nut-checkbox 
	v-model="checkbox3"  
	size="large">
	大号
</nut-checkbox>
```

```javascript
data() {
    return {
      	checkbox1: true,
      	checkbox2: true,
      	checkbox3: true,
    };
}

```

## 禁用动效

animation属性值为false时，禁用自带动效

```html
<nut-checkbox 
	v-model="checkbox1"
	:animation="false">
	没有动效
</nut-checkbox>
```

```javascript
data() {
    return {
      	checkbox1: false,
    };
}
```

## 事件

值发生变化时，将触发change事件

```html
<nut-checkbox 
	v-model="checkbox1" 
	@change="checkboxChange">
	change事件
</nut-checkbox>
```

```javascript
methods: {
	checkboxChange(checked) {
        alert('change事件触发' + checked);
	}  
}
```

设置label属性，获取选项状态和选项label值的方法：

```html
<nut-checkbox 
	v-model="checkbox1"
	:label="'选项值'"  
	@change="getChange">
	备选项
</nut-checkbox>
```

```javascript
methods: {
    getChange(checked,val){
        console.log('选中状态：' + checked +'，选中选项：' + val) 
    }
    
}
```

**注意**：当设置了label属性时，第二个参数label才有值，否则默认为空。(label设置后替换插值内容)


## 新增自定义class
```html
<nut-checkbox 
	v-model="checkbox1"
	class="my-checkbox">
	自定义了Class:"my-checkbox"
</nut-checkbox>
```

## Prop

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| name | checkbox的name属性 | String | -
| v-model | 必填项，当前选中项的选中状态,同步value | Boolean | false
| label | 当前选中项的label值，（可不设，设置后label有值，替换插值内容） | String | -
| checked | checkbox的checked属性 | Boolean | false
| size | 尺寸，可选值small/base/large | String | base
| disabled | 是否禁用 | Boolean | false
| animation | 是否需要动效 | Boolean | true


## Event

| 字段 | 说明 | 回调参数 
|----- | ----- | ----- 
| change | 值变化时触发 | 当前选中项状态（checked），当前选中项值（label）【设置label后有值、默认为空】,event
