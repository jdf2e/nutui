# Magic 魔方

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
                    type:'rank',
                    name:'name1',
                    pictureUrl:'https://img10.360buyimg.com/n5/s54x54_jfs/t1/164065/10/8839/39628/603ee7edE9dee283f/e56acfa461919177.jpg',
                    desc:'desc',
                    link:'link'
                },
                {
                    type:'rank',
                    name:'name2',
                    pictureUrl:'https://img10.360buyimg.com/n5/s54x54_jfs/t1/164065/10/8839/39628/603ee7edE9dee283f/e56acfa461919177.jpg',
                    desc:'desc',
                    link:'link'
                },
                {
                    type:'lbs',
                    name:'name3',
                    pictureUrl:'https://img10.360buyimg.com/n5/s54x54_jfs/t1/164065/10/8839/39628/603ee7edE9dee283f/e56acfa461919177.jpg',
                    desc:'desc',
                    link:'link'
                },
                {
                    type:'lbs',
                    name:'name4',
                    pictureUrl:'https://img10.360buyimg.com/n5/s54x54_jfs/t1/164065/10/8839/39628/603ee7edE9dee283f/e56acfa461919177.jpg',
                    desc:'desc',
                    link:'link'
                },
                {
                    type:'act',
                    name:'name5',
                    pictureUrl:'https://img10.360buyimg.com/n5/s54x54_jfs/t1/164065/10/8839/39628/603ee7edE9dee283f/e56acfa461919177.jpg',
                    desc:'desc',
                    link:'link'
                },
                {
                    type:'act',
                    name:'name6',
                    pictureUrl:'https://img10.360buyimg.com/n5/s54x54_jfs/t1/164065/10/8839/39628/603ee7edE9dee283f/e56acfa461919177.jpg',
                    desc:'desc',
                    link:'link'
                },
                {
                    type:'rank',
                    name:'name7',
                    pictureUrl:'https://img10.360buyimg.com/n5/s54x54_jfs/t1/164065/10/8839/39628/603ee7edE9dee283f/e56acfa461919177.jpg',
                    desc:'desc',
                    link:'link'
                },
                {
                    type:'rank',
                    name:'name8',
                    pictureUrl:'https://img10.360buyimg.com/n5/s54x54_jfs/t1/164065/10/8839/39628/603ee7edE9dee283f/e56acfa461919177.jpg',
                    desc:'desc',
                    link:'link'
                }
          ]
        };
    },
    methods: {
        click(item) {
            console.log('clicked now', item);
        }
    }
}
```



## Prop

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| type | 样式类型 | String | rank
| autoplay | 自动轮播 | Boolean | true
| data | 传入数据 | Array | []
| data[].type | 样式类型 | String | ''
| data[].name | 名称 | String | ''
| data[].pictureUrl | 上半部分背景图片 | String | ''
| data[].desc | 描述 | String | ''
| data[].link | 跳转链接 | String | ''

## 事件

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| click | 点击魔方触发事件 | function | -



