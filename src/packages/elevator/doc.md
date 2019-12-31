# Elevator 电梯楼层组件

## 基本用法

```html
<nut-elevator 
        :dataArray="dataList"  
        :showIndicator="true"
        :navHeight="40"
        :otherHeight="60"
        :initIndex="0" 
        :hiddenTime='500'
        @clickNav="clickNav"
        @clickList="clickList"
        >
</nut-elevator>
```
数据类型
```js
dataList:[
    {
      title:"A",
      list:[//可以为空数组
        {
          name:'安其拉',
          id:'a1'//id字段可以没有
        },
        {
          name:'安琪',
          id:'a2'
        }
      ]
    }    
]
```

## Prop

| 参数 | 说明 | 类型 | 默认值|可选值|
|----- | ----- | ----- | ----- |---|
| dataArray | 渲染楼层数据，为必填项 | Array | []| --|
| showIndicator | 是否显示索引值提示符	 | Boolean | -- | --|
| hiddenTime | 索引值提示符显示的时间，单位ms | Number | 500 | --|
| navHeight | 索引栏每个索引区域的高度，单位px | Number | 40 | --|
| initIndex | 进入页面后，当前定位到的索引值 | Number | 0 | --|
| otherHeight| 显示组件区域外部的高度，比如title区域高度，单位px|Number|40|--|

## Events
|事件名|说明|回调参数|
|--|--|--|
|clickNav|点击/离开索引栏时的回调函数|返回点击的索引值和title|
|clickList|点击左侧列表时的回调函数|返回点击的对象数据和所在区域的对象数据|




