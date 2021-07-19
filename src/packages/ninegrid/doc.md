# NineGrid 九宫格
 
 

## 基本用法

```html
    <nut-magic @click="click" :data="dataArr"></nut-magic>
```

```javascript
export default {
    data() {
        return {
            dataArr: [
                {
                    name:'商品名称名称',
                    price:'199',
                    pictureUrl:'//m.360buyimg.com/babel/s180x180_jfs/t1/174906/19/10256/188436/60a242afE89a800c9/801b64e5b80fde9a.jpg!q70.jpg'
                },
                {
                    name:'商品名称名称',
                    price:'199',
                    pictureUrl:'//m.360buyimg.com/babel/s180x180_jfs/t1/133995/36/19954/205635/60ccc436E19f8b69b/8fc0a468ac037d2e.jpg!q70.jpg'
                },
                {
                    name:'商品名称名称',
                    price:'199',
                    pictureUrl:'//m.360buyimg.com/babel/s180x180_jfs/t1/17279/28/13940/140479/60b984f4E723b9981/d007711aa1cdc358.jpg!q70.jpg'
                },
                ...('需要有16个数据‘)
                
          ]
        };
    },
    methods: {
        change() {
            console.log('更新数据');
        },
        toDetail(item) {
            console.log('跳转',item);
        }
    }
}
```



## Prop

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| data | 传入数据，每次传入数据需有16个item，分为正反两面 | Array | []
| data[].name | 名称 | String | ''
| data[].pictureUrl | 商品图片 | String | ''
| data[].price | 价格 | String | ''
| data[].link | 跳转链接 | String | ''

## 事件

| 字段 | 说明 | 类型 | 返回值| 默认值
|----- | ----- | ----- | -----  | ----- 
| change | 魔方翻转两次触发事件（16个item展示完毕） | function | - | ----- 
| toDetail | 点击商品跳转详情 | function | item | ----- 



