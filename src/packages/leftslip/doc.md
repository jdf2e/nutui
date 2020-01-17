# LeftSlip 左滑删除

列表元素向左滑出现删除等按钮

## 基本用法

```html
<div>
    <nut-leftslip>
        <div slot="slip-main" class="slip-main">向左滑动我</div>
        <div slot="slipbtns" class="slipbtns"><a href="javascript:;">删除</a><a href="javascript:;" class="favorite">收藏</a></div>
    </nut-leftslip>
</div>
```

### 单个按钮

```html
<div>
    <nut-leftslip>
        <div slot="slip-main" class="slip-main">单一按钮</div>
        <div slot="slipbtns" class="slipbtns"><a href="javascript:;">删除</a></div>
    </nut-leftslip>
</div>
```

### 单个按钮左滑一键删除

```html
<nut-leftslip onlyDel @oneDelete="oneDel">
    <div slot="slip-main" class="slip-main">向左滑滑滑~一键删除</div>
</nut-leftslip>
```

```javascript
export default {
    oneDel(par) {
        par.remove();
    }
};
```

### 多个按钮

```html
<div>
    <nut-leftslip>
        <div slot="slip-main" class="slip-main">向左滑动，多个按钮有超出限制哦~</div>
        <div slot="slipbtns" class="slipbtns"
            ><a href="javascript:;">删除</a>
            <a href="javascript:;" class="favorite">收藏</a>
            <a href="javascript:;" class="favorite org1"><nut-icon type="trolley" size="20px" color="#fff"></nut-icon></a>
            <a href="javascript:;" class="favorite org2"><nut-icon type="cross" size="15px" color="#fff"></nut-icon></a>
            <a href="javascript:;" class="favorite org3">确认</a>
            <a href="javascript:;" class="favorite org1">加购物车</a>
            <a href="javascript:;" class="favorite">收藏2</a>
            <a href="javascript:;" class="favorite">收藏3</a>
        </div>
    </nut-leftslip>
</div>
```

### 列表

```html
<div>
    <nut-leftslip v-for="(item, index) in list" :key="item.id" ref="leftslip">
        <div slot="slip-main" class="slip-main">
            <div class="addr">
                <p class="name-mobile">159****8888</p>
                <p class="full-addr">北京市大兴区亦庄经济开发中心京东大厦B座1</p>
            </div>
            <a class="addr-edit" href="javascript:void(0)"></a>
        </div>
        <div slot="slipbtns" class="slipbtns"
            ><a href="javascript:;" @click="delItem(index)">删除</a><a href="javascript:;" class="favorite">收藏</a></div
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

## Prop

| 字段           | 说明                                           | 类型    | 默认值 |
| -------------- | ---------------------------------------------- | ------- | ------ |
| slot:slip-main | 列表主内容自定义区域                           | html    | -      |
| slot:slipbtns  | 左滑按钮自定义区域                             | html    | -      |
| onlyDel        | 显示只有一个删除按钮的列表样式（支持一键删除） | Boolean | false  |

## Event

| 字段      | 说明                       | 回调参数 |
| --------- | -------------------------- | -------- |
| oneDelete | 单一删除按钮模式下删除事件 | 无       |
