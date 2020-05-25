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
            icon1:`url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath fill='rgb(255,0,0)' d='M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zM6.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm7 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm2.16 3H4.34a6 6 0 0 0 11.32 0z'/%3E%3C/svg%3E")`,
            icon2:`url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath fill='rgb(255,0,0)' d='M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM6.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm7 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM7 13h6a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2z'/%3E%3C/svg%3E")`
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

## Event
| 字段 | 说明 | 回调参数 
|----- | ----- | ----- 
| click | 点击star时触发 | star的index