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
    <nut-leftslip :right-width="0.8">
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


### 消息列表

```html
<div class="cell-box">
    <nut-leftslip v-for="(item, index) in list" :key="item.id" ref="leftslip">
        <div slot="slip-main" class="slip-main">
          <nut-cell class="cell-item" :title="item.title" :sub-title="item.subTitle">
            <div slot="avatar"><nut-avatar sizeNum="60" :bg-image="require('../../assets/img/cell-avatar.jpeg')" bg-icon></nut-avatar></div>
            <div slot="desc">
              <p class="timer">{{item.time} }</p>
              <p class="badge"><nut-badge :is-dot="item.isDot" :value="item.value" :max="99" top="0px" right="15px"></nut-badge></p>
            </div>
          </nut-cell>
        </div>
        <div slot="slipbtns" class="slipbtns"
          ><a href="javascript:;" @click="delItem(index)">删除</a>
        </div>
    </nut-leftslip>
</div>
```

```javascript
import Icon from '../icon/icon.vue';
import Avatar from '../avatar/avatar.vue';
import Badge from '../badge/badge.vue'

export default {
    components: {},
    data() {
        return {
            list: [
                { id: 'add1', title: '噜啦噜1',subTitle:'我又来送福利啦！关注之后你就会',time:'10:13',isDot:false,value:9},
                { id: 'add2', title: '噜啦噜2',subTitle:'我又来送福利啦！关注之后你就会',time:'10:12',isDot:true,value:1},
                { id: 'add5', title: '噜啦噜5',subTitle:'我又来送福利啦！关注之后你就会',time:'1小时前',isDot:false,value:99},
                { id: 'add8', title: '噜啦噜8',subTitle:'我又来送福利啦！关注之后你就会',time:'星期五' ,isDot:false,value:100}
            ],
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
    <button class="btn" @click="disabledHandle">{{isDisable ? '开启滑动' : '禁止滑动'} }</button>
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

| 字段           | 说明                 | 类型    | 默认值 |
| -------------- | -------------------- | ------- | ------ |
| slip-main | 列表主内容自定义区域 | html    | -      |
| slipbtns  | 左滑按钮自定义区域   | html    | -      |

## Prop

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| right-width | 右侧按钮区域超出一行时的默认宽度，默认占整个宽度的80% | Number | 0.8
|  disabled  | 禁止滑动操作 | Boolean | false


