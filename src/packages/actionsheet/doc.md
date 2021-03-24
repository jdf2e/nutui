# ActionSheet 动作面板

从底部弹出的动作菜单面板。

## 基本用法(选择类)

默认
```html
<div @click="switchActionSheet">
    <span class="title"><label>性别</label></span>
    <span class="selected-option">{{sex}}</span>
</div>
<nut-actionsheet :is-visible="isVisible" 
    @close="switchActionSheet"
    :menu-items="menuItems"
    @choose="chooseItem"
></nut-actionsheet>
```
```javascript
export default {
    data() {
        return {
            sex: '请选择',
            isVisible: false,
            menuItems: [
                {
                    'name': '男',
                    'value': 0
                },
                {
                    'name': '女',
                    'value': 1
                }
            ]
        };
    },
    methods: {
        switchActionSheet() {
            this.isVisible = !this.isVisible;
        },

        chooseItem(itemParams) {
            this.sex = itemParams.name;
        }
    }
};
```

带取消按钮
```html
<div @click="switchActionSheet">
    <span class="title"><label>性别</label></span>
    <span class="selected-option">{{sex}}</span>
</div>
 <nut-actionsheet :is-visible="isVisible" 
    @close="switchActionSheet"
    :menu-items="menuItems"
    @choose="chooseItem"
    cancelTxt="取消"
></nut-actionsheet>
```
```javascript
export default {
    data() {
        return {
            sex: '请选择',
            isVisible: false,
            menuItems: [
                {
                    'name': '男',
                    'value': 0
                },
                {
                    'name': '女',
                    'value': 1
                }
            ]
        };
    },
    methods: {
        switchActionSheet() {
            this.isVisible = !this.isVisible;
        },

        chooseItem(itemParams) {
            this.sex = itemParams.name;
        }
    }
};
```

高亮已选项
```html
<div @click="switchActionSheet">
    <span class="title"><label>性别</label></span>
    <span class="selected-option">{{sex}}</span>
</div>
<nut-actionsheet :is-visible="isVisible" 
    @close="switchActionSheet"
    :menu-items="menuItems"
    @choose="chooseItem"
    :chooseTagValue="sex"
></nut-actionsheet>
```
```javascript
export default {
    data() {
        return {
            sex: '请选择',
            isVisible: false,
            menuItems: [
                {
                    'name': '男',
                    'value': 0
                },
                {
                    'name': '女',
                    'value': 1
                }
            ]
        };
    },
    methods: {
        switchActionSheet() {
            this.isVisible = !this.isVisible;
        },

        chooseItem(itemParams) {
            this.sex = itemParams.name;
        }
    }
};
```

设置禁用状态
```html
<div @click="switchActionSheet">
    <span class="title"><label>性别</label></span>
    <span class="selected-option">{{sex}}</span>
</div>
<nut-actionsheet :is-visible="isVisible" 
    @close="switchActionSheet"
    :menu-items="menuItems"
    @choose="chooseItem"
    :chooseTagValue="sex"
></nut-actionsheet>
```
```javascript
export default {
    data() {
        return {
            sex: '请选择',
            isVisible: false,
            menuItems: [
                {
                    'name': '男',
                    'value': 0,
                    'disable': false
                },
                {
                    'name': '女',
                    'value': 1,
                    'disable': true
                }
            ]
        };
    },
    methods: {
        switchActionSheet() {
            this.isVisible = !this.isVisible;
        },

        chooseItem(itemParams) {
            this.sex = itemParams.name;
        }
    }
};
```

## 提示
```html
<div @click="switchActionSheet">
    <span class="title"><label>我就列表测试数据</label></span>
    <span class="sub-title">我是描述~~~~</span>
    <div class="selected-option">删除本条</div>
</div>
<nut-actionsheet :is-visible="isVisible" 
    :menu-items="menuItems4" 
    chooseTagValue="确定"
    cancelTxt="取消"
    @close="switchActionSheet"
    @choose="choose"
>
    <span slot="title"><label>确定删除吗？</label></span>
    <span slot="sub-title">删除之后不能，描述信息，删除之后不能，描述信息</span>
</nut-actionsheet>
```
```javascript
export default {
    data() {
        return {
            sex: '请选择',
            isVisible: false,
            menuItems: [
                {
                     'name': '确定'
                }
            ]
        };
    },
    methods: {
        switchActionSheet() {
            this.isVisible = !this.isVisible;
        },

        choose(itemParams) {
            
        }
    }
};
```

## 自定义内容
```html
<div @click="switchActionSheet">
    <span class="title"><label>内容自定义</label></span>
    <div class="selected-option">打开</div>
</div>
<nut-actionsheet :is-visible="isVisible" 
    @close="switchActionSheet"
>
    <div slot="custom" class="custom-wrap"><span>自定义</span></div>
</nut-actionsheet>
```
```javascript

export default {
    data() {
        return {
            isVisible: false
        }   
    },
    methods: {
        switchActionSheet() {
            this.isVisible = !this.isVisible;
        }
    }
};
```

## Prop

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| is-animation | 是否开启动画 | Boolean | true
| is-lock-bg-scroll | 是否锁定背景滚动 | Boolean | false
| is-visible | 是否可见 | Boolean | false
| is-show-mask | 是否显示背景遮罩 | Boolean | true
| is-click-choose-close | 是否点击列表项后立即关闭 | Boolean | true
| is-click-close-mask | 是否点击mask蒙层关闭 | Boolean | true
| cancel-txt | 取消文案 | String | '取消'
| choose-tag-value | 已选值，如果填写，高亮显示 | String | -
| menu-items | 列表项 | Array | [ ]
| option-tag | 设置列表项展示使用参数 | String | 'name'

## Slot

| 名称 | 说明 
|----- | ----- 
| custom | 自定义内容
| title | 自定义标题
| subTitle | 自定义副标题  

## Event

| 字段 | 说明 | 回调参数 
|----- | ----- | ----- 
| choose | 选择之后触发 | 选中列表项 
| close | 关闭时触发 | 无 
| cancel | 点击取消文案时触发 | 无 