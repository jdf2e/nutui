# Rate 评分

用于快速的评级操作，或对评价进行展示。

## 基础用法

```html
<nut-rate 
    v-model="val"
>
</nut-rate>
```

只读
```html
<nut-rate 
    v-model="val"
    :readOnly="true"
>
</nut-rate>
```


绑定事件

```html
<nut-rate 
    @click="onClick"
>
</nut-rate>
```

自定义尺寸

```html
<nut-rate 
    :size="35"
>
</nut-rate>
```

自定义颜色

```html
<nut-rate 
    :checkedColor="checkedColor"
>
</nut-rate>
```

自定义ICON

```html
<nut-rate
    :checkedIcon="icon1"
    :uncheckedIcon="icon2"
></nut-rate>
```

```javascript
export default {
    data(){
        return{
            val:4,
            val2:2,
            result:'',
            result2:'',
            icon1: require('./../../assets/img/checked.png'),
            icon2: require('./../../assets/img/unchecked.png')
        }
    },
   
    methods:{
        onClick(idx){
            this.result = '您点击了第'+idx+'个!';
        },
        onClick2(idx){
            this.result2 = '您点击了第'+idx+'个!';
        }
    }
}
```

## Prop

| 字段 | 说明 | 类型 | 默认值
| ----- | ----- | ----- | -----
| total | star 总数 | Number | 5
| value | 当前 star 数，可使用 v-model 双向绑定数据 | Number | 3
| size | star 大小 | Number | 25
| spacing | 两个star的间距 | Number | 20
| readOnly | 是否只读 | Boolean | false
| uncheckedIcon | 使用图标(未选中) | String | -
| checkedIcon | 使用图标(选中) | String | -
| checkedColor | 选中star颜色 | String | -
| showHalf | 是否显示文字 | Boolean | true


## Event
| 字段 | 说明 | 回调参数 
|----- | ----- | ----- 
| click | 点击star时触发 | star的index