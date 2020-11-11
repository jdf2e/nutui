# LeftSlip 左滑删除

列表元素向左滑出现删除等按钮

## 基本用法

```html
<div>
    <nut-leftslip ref='demo1'>
        <div slot="slip-main" class="slip-main">向左滑动我</div>
        <div slot="slipbtns" class="slipbtns"><a href="javascript:;" @click="delSlipItem">删除</a><a href="javascript:;" class="favorite">收藏</a></div>
    </nut-leftslip>
    <nut-button @click="changeState">{ { state ? '异步关闭' : '异步打开' }}</nut-button>
</div>
```
```javascript
export default {
    data(){
        return {
            state:false
        };
    },
    methods: {
        delSlipItem(e) {
            this.$refs.demo1.sliderEle.remove();
        },
        changeState() {
            if (this.state) {
                this.$refs.demo1.restSlide();
            } else {
                this.$refs.demo1.openSlide();
            }
            this.state = !this.state;
        }
    }
};
```

### 单个按钮

```html
<div>
    <nut-leftslip>
        <div slot="slip-main" class="slip-main">自定义单一按钮</div>
        <div slot="slipbtns" class="slipbtns"><a href="javascript:;">删除</a></div>
    </nut-leftslip>
</div>
```

<!-- ### 单个按钮一键删除

```html
<nut-leftslip onlyDelBtn @oneDelete="oneDel">
    <div slot="slip-main" class="slip-main">单一按钮点击一键删除</div>
</nut-leftslip>
```

```javascript
export default {
    oneDel(par) {
        par.remove();
    }
};
``` -->

### 多个按钮

>如果超出一行宽度，默认右侧按钮区域占一行的80%，此处设置了60%

```html
<div>
    <nut-leftslip :rightWidth="0.6">
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

###  禁止滑动
```html
<div>
    <button class="btn" @click="disabledHandle">{{isDisable ? '开启滑动' : '禁止滑动'}}</button>
    <nut-leftslip :disabled="isDisable">
        <div slot="slip-main" class="slip-main">左滑触发删除</div>
        <div slot="slipbtns" class="slipbtns"><a href="javascript:;">删除</a></div>
    </nut-leftslip>
</div>
```

```javascript
    disabledHandle(){
        this.isDisable = !this.isDisable 
    }

```


## slot

| 字段      | 说明                 | 类型 | 默认值 |
|-----------|----------------------|------|--------|
| slip-main | 列表主内容自定义区域 | html | -      |
| slipbtns  | 左滑按钮自定义区域   | html | -      |

## Prop

| 字段       | 说明                                                  | 类型    | 默认值 |
|------------|-------------------------------------------------------|---------|--------|
| right-width | 右侧按钮区域超出一行时的默认宽度，默认占整个宽度的80% | Number  | 0.8    |
| disabled   | 禁止滑动操作                                          | Boolean | false  |

## Methods

#### 通过 ref 可以获取到 LeftSlip 组件实例并调用实例方法


| 方法名    | 说明             | 参数 | 返回值 |
|-----------|------------------|------|--------|
| restSlide | 关闭单元格侧边栏 | -    | -      |
| openSlide | 打开单元格侧边栏 | -    | -      |


