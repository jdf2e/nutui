# ActionSheet 动作面板

从底部弹出的动作菜单面板。

## 基本用法

默认
``` html
<div @click="switchActionSheet">
   <span><label>基础用法</label></span>
   <div class="selected-option" v-html="state.val"></div>
</div>
<nut-actionsheet
  v-model:visible="state.isVisible"
  :menu-items="menuItems"
  @choose="chooseItem"
></nut-actionsheet>
```

## 展示取消按钮
```html
<div @click="switchActionSheet">
  <span><label>展示取消按钮</label></span>
  <div class="selected-option" v-html="state.val"></div>
</div>
<nut-actionsheet v-model:visible="isVisible" 
  @close="switchActionSheet"
  :menu-items="menuItems"
  @choose="chooseItem"
  cancel-txt="取消"
></nut-actionsheet>
```
## 展示描述信息
```html
<div @click.native="switchActionSheet">
   <span><label>展示取消按钮</label></span>
    <div class="selected-option" v-html="state.val"></div>
</div>
 <nut-actionsheet v-model:visible="isVisible" 
    @close="switchActionSheet"
    description="state.desc"
    :menu-items="menuItems"
    @choose="chooseItem"
    cancel-txt="取消"
></nut-actionsheet>
```

## 选项状态
```html
<div @click.native="switchActionSheet">
    <span class="title"><label>性别</label></span>
    <span class="selected-option" v-html="sex"></span>
</div>
<nut-actionsheet
@close="switchActionSheet"
  v-model:visible="state.isVisible4"
  cancel-txt="取消"
  :menu-items="menuItemsThree"
></nut-actionsheet>
```

```javascript
setup() {
    const state = reactive({
      isVisible: false,
      value: '',
      desc: '这是一段描述信息'
    });
    const menuItems = [
      {
        name: '选项一',
        value: 0
      },
      {
        name: '选项二',
        value: 1
      },
      {
        name: '选项三',
        value: 2
      }
    ];
     const switchActionSheet = () => {
       state.isVisible = !state.isVisible
    };
    const chooseItem = (item,index) => {
      console.log(item,index);
    };

```

## Prop

| 字段             | 说明                                   | 类型    | 默认值    |
|------------------|----------------------------------------|---------|-----------|
| cancel-txt       | 取消文案                               | String  | '取消'    |
| menu-items       | 列表项                                 | Array   | [ ]       |
| option-tag       | 设置列表项展示使用参数                 | String  | 'name'    |
| v-model:visible       | 遮罩层可见                             | Boolean | false     |
| option-sub-tag   | 设置列表项描述展示使用参数             | String  | 'subname' |
| choose-tag-value | 设置选中项的值，和'option-tag'的值对应 | String  | ''        |
| title            | 设置列表项标题                         | String  | ''        |
| description      | 设置列表项副标题/描述                  | String  | ''        |
| color            | 高亮颜色                               | String  | '#ee0a24' |
| close-abled      | 遮罩层是否可关闭                       | Boolean | true      |


## Event

| 字段   | 说明               | 回调参数                          |
|--------|--------------------|-----------------------------------|
| choose | 选择之后触发       | 选中列表项item, 选中的索引值index |
| cancel | 点击取消文案时触发 | 无                                |