# LeftSlip 左滑删除

列表元素向左滑出现删除等按钮

## 基本用法

```html
<div>
    <nut-leftslip ref="demo1">
        <div slot="slip-main" class="slip-main base-style">左滑触发删除<span class="main-right">这里是内容</span></div>
        <div slot="slipbtns" class="slipbtns"
          ><a href="javascript:;" @click="delSlipItem">删除</a></div
        >
    </nut-leftslip>
</div>
```
```javascript
export default {
    methods: {
        delSlipItem(e) {
            alert('确定删除吗？')
            this.$refs.demo1.sliderEle.remove()
        }
    }
};
```


### 多个按钮

>如果超出一行宽度，默认右侧按钮区域占一行的80%

```html
<div>
    <nut-leftslip :rightWidth="0.8">
        <div slot="slip-main" class="slip-main">左滑触发删除<span class="main-right">这里是内容</span></div>
        <div slot="slipbtns" class="slipbtns"
            ><a href="javascript:;">删除</a>
            <a href="javascript:;" class="favorite org3">确认</a>
            <a href="javascript:;" class="favorite">收藏</a>
        </div>
    </nut-leftslip>
</div>
```


### 自定义ICON

```html
<div>
    <nut-leftslip>
        <div slot="slip-main" class="slip-main">左滑触发删除<span class="main-right">这里是内容</span></div>
        <div slot="slipbtns" class="slipbtns">
            <a href="javascript:;"><nut-icon type="trolley" size="20px" color="#fff"></nut-icon></a>
        </div>
    </nut-leftslip>
</div>
```


### 列表

```html
<div class="address-list">
    <nut-leftslip v-for="(item, index) in list" :key="item.id" ref="leftslip" class="addr-item" >
        <div slot="slip-main" class="slip-main addr-main">
          <div class="addr">
            <p class="name-mobile">{{ item.tel } }</p>
            <p class="full-addr">{{ item.addr } }</p>
          </div>
          <a class="addr-edit" href="javascript:void(0)"></a>
        </div>
        <div slot="slipbtns" class="slipbtns"
          ><a href="javascript:;" @click="delItem(index)">删除</a></div
        >
    </nut-leftslip>
</div>
```

```javascript
export default {
    components: {},
    data() {
        return {
            list: [
                {id: 'add1', addr: '北京市大兴区亦庄经济开发中心京东大厦B座1', tel: '159****8888'},
                {id: 'add2', addr: '北京市大兴区亦庄经济开发中心京东大厦B座2', tel: '159****8888'},
                {id: 'add3', addr: '北京市大兴区亦庄经济开发中心京东大厦B座3', tel: '159****8888'},
                {id: 'add4', addr: '北京市大兴区亦庄经济开发中心京东大厦B座4', tel: '159****8888'},
                {id: 'add5', addr: '北京市大兴区亦庄经济开发中心京东大厦B座5', tel: '159****8888'},
                {id: 'add6', addr: '北京市大兴区亦庄经济开发中心京东大厦B座6', tel: '159****8888'},
                {id: 'add7', addr: '北京市大兴区亦庄经济开发中心京东大厦B座7', tel: '159****8888'},
                {id: 'add8', addr: '北京市大兴区亦庄经济开发中心京东大厦B座8', tel: '159****8888'}
            ]
        };
    },
    methods: {
        delItem(index) {
            this.list.splice(index, 1);
        }
    }
};
```

## slot

| 字段           | 说明                 | 类型    | 默认值 |
| -------------- | -------------------- | ------- | ------ |
| slip-main | 列表主内容自定义区域 | html    | -      |
| slipbtns  | 左滑按钮自定义区域   | html    | -      |

## Prop

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| rightWidth | 右侧按钮区域超出一行时的默认宽度，默认占整个宽度的80% | Number | 0.8


