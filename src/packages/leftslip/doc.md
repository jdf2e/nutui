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
        <div slot="slip-main" class="slip-main">
            {{ 222 }}
        </div>
        <div slot="slipbtns" class="slipbtns"><a href="javascript:;">删除</a></div>
    </nut-leftslip>
</div>
```

### 列表

```html
<nut-leftslip @slide-left="slideLeft" @slide-right="slideRight" @slide-no="slideNo" during="0.2">
    <div slot="slip-main" class="slip-main">
        <div class="addr">
            <p class="name-mobile">159****8888</p>
            <p class="full-addr">北京市大兴区亦庄经济开发中心京东大厦B座</p>
        </div>
        <a class="addr-edit" href="javascript:void(0)"></a>
    </div>
    <div slot="slipbtns" class="slipbtns"> <a href="javascript:;">删除</a><a href="javascript:;">收藏</a> </div>
</nut-leftslip>
```

```javascript
export default {
    components: {},
    data() {
        return {};
    },
    methods: {
        slideLeft() {
            console.log('左划了');
        },
        slideRight() {
            console.log('右划了');
        },
        slideNo() {
            console.log('没有划动');
        }
    }
};
```
