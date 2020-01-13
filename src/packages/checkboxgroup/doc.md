# CheckboxGroup 复选按钮

## 基本用法(2s后动态更新)

```html
<nut-checkboxgroup
    ref="checkboxGroup"
	:checkBoxData="data"
	v-model="group">
</nut-checkboxgroup>
<p>{{group1}}</p>
<nut-button small @click="checkAll(true)">全选</nut-button>
<nut-button small @click="checkAll(false)">取消全选</nut-button>
<nut-button small @click="checkAll()">反选</nut-button>
```

```javascript
data() {
    return {
    	data:[
            {id:11,value:'选项A',label:'选项A'},
            {id:12,value:'选项B',label:'选项B'},
            {id:13,value:'选项C',label:'选项C'},
            {id:14,value:'选项D',label:'选项D'},
        ],
        group: ['选项A'],
    };
},
mounted(){
    setTimeout(() => {
        this.group.push('选项B')
    }, 2000);
},
methods:{
    checkAll(state){
        this.$refs.checkboxGroup.toggleAll(state);
    }
}
```
v-model绑定的数组选项对应data的value值，控制选项是否选中，如代码所示，‘选项A’被勾选。如果group为空那么所有选项未选中。

```html
<nut-checkboxgroup  
	:checkBoxData="['A','B','C','D']">
	v-model="group"
</nut-checkboxgroup>
```

```javascript
 data() {
    return {
        group: ['A'],
    };
}
```
checkBoxData也可直接在标签中传入数据

## 禁用状态

data控制禁用状态

```html
<nut-checkboxgroup  
	:checkBoxData="data2">
</nut-checkboxgroup>
```

```javascript
data() {
    return {
	 	data2:[
            {id:21,value:'选项1',label:'选项1',disabled:true},
            {id:22,value:'选项2',label:'选项2',disabled:true},
            
        ],
	};
}
```

标签控制禁用状态(用于全组禁用)

```html
<nut-checkboxgroup  
	:checkBoxData="data2"
	disabled>
</nut-checkboxgroup>
```

```javascript
data() {
    return {
	 	data2:[
	       	{id:21,value:'选项1',label:'选项1'},
            {id:22,value:'选项2',label:'选项2'},
	    ],
	};
}
```



## 自定义尺寸

内置 **small**，**base**，**large** 三种规格供使用。

```html
<nut-checkboxgroup  
	:size="'small'" 
	:checkBoxData="data1" >
</nut-checkboxgroup>

<nut-checkboxgroup  
	:size="'base'" 
	:checkBoxData="data2" >
</nut-checkboxgroup>

<nut-checkboxgroup  
	:size="'small'" 
	:checkBoxData="data3" >
</nut-checkboxgroup>
```

```javascript
data() {
    return {
		data1:[
            {id:41,value:'备选项',label:'备选项'},
        ],
        data2:[
            {id:42,value:'备选项',label:'备选项'},
        ],
        data3:[
            {id:43,value:'备选项',label:'备选项',size:'large'},
        ],
    };
}
```

也可用data控制size属性

```html

<nut-checkboxgroup  
	:checkBoxData="data" v-model="group">
</nut-checkboxgroup>
```

```javascript
data() {
    return {
		data:[
            {id:41,value:'1',label:'选项1',size:'large'},
            {id:42,value:'2',label:'选项2',size:'base'},
            {id:43,value:'3',label:'选项3',size:'small'},
        ],
        group:['1','2','3'],
    };
}
```

**注意**：如果data中设置了size，显示data中size属性，data中的size属性优先级高于标签size的设置。


## 禁用动效

animation属性值为false时，禁用自带动效

```html
<nut-checkboxgroup  
	:checkBoxData="data"
	v-model="group"  
	:animation="false" >
</nut-checkboxgroup>
```

## 横向排列

vertical属性值为true时，横向排列

```html
<nut-checkboxgroup   
	:checkBoxData="data" 
	v-model="group"
	:vertical="true">
</nut-checkboxgroup>
```


## 事件

值发生变化时，将触发change事件

```html
<nut-checkboxgroup 
	:checkBoxData="data5"
	v-model="group"  
	@change="changeEvt">
</nut-checkboxgroup>
```

```javascript
methods: {
	changeEvt(val,label,e){
        alert('已选值:['+ val+']，当前选择值：'+ label);
    }  
}
```


## 新增自定义class
```html
<nut-checkboxgroup  
	:customClass="'my-checkbox'" 
	v-model="group" 
	:checkBoxData="data6" >
</nut-checkboxgroup>
```

## Prop

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| checkBoxData | 传入选项数组 | Array | -
| v-model,value | 选择项数组，可定义默认选中项 | Array | -
| vertical | 横向排列 | Boolean | false
| size | 尺寸，可选值small/base/large | String | base
| disabled | 是否禁用 | Boolean | false
| animation | 是否需要动效 | Boolean | true
| customClass | 自定义样式 | String | -

## Event

| 字段 | 说明 | 回调参数 
|----- | ----- | ----- 
| change | 值变化时触发 | 当前已选中项的状态（values），当前选中项值（label），event

## CheckboxGroup 方法

#### 通过 ref 可以获取到 CheckboxGroup 实例并调用实例方法

| 方法名 | 说明 | 参数 
|----- | ----- | ----- 
| toggleAll | 切换所有复选框的选中状态 | checked?: boolean

