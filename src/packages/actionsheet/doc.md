# ActionSheet 动作面板

从底部弹出的动作菜单面板。

## 基本用法
```html
<nut-actionsheet :is-visible="isVisible" 
    @close="switchActionSheet('isVisible')"
    :menu-items="menuItems"
    @choose="chooseItem"
></nut-actionsheet>
```
## 带取消按钮
```html
<nut-actionsheet :is-visible="isVisible1" 
    @close="switchActionSheet('isVisible1')"
    cancelTxt="取消"
    :menu-items="menuItems2"
    @choose="chooseItemAgeSpec"
></nut-actionsheet>
```
## 高亮已选项
```html
<nut-actionsheet :is-visible="isVisible2" 
    :menu-items="menuItems2"
    :chooseTagValue="age"
    @close="switchActionSheet('isVisible2')"
    @choose="chooseItemAge"
></nut-actionsheet>
```
## 设置列表项展示使用参数
```html
<nut-actionsheet :is-visible="isVisible3" 
    :menu-items="menuItems3"
    :optionTag="`title`"
    @close="switchActionSheet('isVisible3')"
    @choose="chooseItemConstellation"
></nut-actionsheet>
```
## 提示
```html
<nut-actionsheet :is-visible="isVisible4" 
    :menu-items="menuItems4" 
    chooseTagValue="确定"
    cancelTxt="取消"
    @close="switchActionSheet('isVisible4')"
>
    <span slot="title"><label>确定删除吗？</label></span>
    <span slot="sub-title">删除之后不能，描述信息，删除之后不能，描述信息</span>
</nut-actionsheet>
```
## 自定义内容
```html
<nut-actionsheet :is-visible="isVisible5" 
    @close="switchActionSheet('isVisible5')"
>
    <div slot="custom" class="custom-wrap"><span>自定义</span></div>
</nut-actionsheet>
```
```javascript
import nutactionsheet from "./actionsheet.vue";
import "./actionsheet.scss";
export default {
    components: {
        [nutactionsheet.name]: nutactionsheet
    },
    data() {
        return {
            sex: '请选择',
            agespec: '请选择',
            isVisible: false,
            isVisible1: false,
            menuItems: [
                {
                    'name': '男',
                    'value': 0
                },
                {
                    'name': '女',
                    'value': 1
                }
            ],
            age: '请选择',
            isVisible2: false,
            menuItems2: [
                {
                    'name': '20岁以下',
                    'value': 0
                },
                {
                    'name': '20~40岁',
                    'value': 1
                },
                {
                    'name': '40~60岁',
                    'value': 2
                },
                {
                    'name': '60以上',
                    'value': 3
                }
            ],
            constellation: '请选择',
            isVisible3: false,
            menuItems3: [
                {
                    'title': '天蝎座',
                    'value': 0
                },
                {
                    'title': '巨蟹座',
                    'value': 1
                },
                {
                    'title': '双鱼座',
                    'value': 2
                },
                {
                    'title': '水瓶座',
                    'value': 3
                }
            ],
            isVisible4: false,
            menuItems4: [
                {
                    'name': '确定'
                } 
            ],
            isVisible5: false,
        };
    },
    methods: {
        switchActionSheet(param) {
            this[`${param}`] = !this[`${param}`];
        },

        chooseItem(itemParams) {
            this.sex = itemParams.name;
        },

        chooseItemAgeSpec(itemParams) {
            this.agespec = itemParams.name;
        },

        chooseItemAge(itemParams) {
            this.age = itemParams.name;
        },

        chooseItemConstellation(itemParams) {
            this.constellation = itemParams.title;
        }
    }
};
```

## Prop

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| isVisible | 是否可见 | Boolean | false
| isClickCloseMask | 是否点击mask蒙层关闭 | Boolean | true
| cancelTxt | 取消文案 | String | 取消
| chooseTagValue | 已选值，如果填写，高亮显示 | String | 空
| menuItems | 列表项 | Array | []
| optionTag | 设置列表项展示使用参数 | String | name

## Event

| 字段 | 说明 | 回调参数 
|----- | ----- | ----- 
| choose | 选择之后触发 | 选中列表项 
| close | 关闭时触发 | 无 