# ActionSheet 动作面板

从底部弹出的动作菜单面板。

## 基本用法(选择类)

默认
```html
<div @click="switchActionSheet">
   <span><label>基础用法</label></span>
   <div class="selected-option">state.val }}</div>
</div>
<nut-actionsheet
        :is-visible="state.isVisible"
        :menu-items="menuItems"
        @choose="chooseItem"
      ></nut-actionsheet>
```

## 展示取消按钮
```html
<div @click="switchActionSheet">
   <span><label>展示取消按钮</label></span>
    <div class="selected-option">state.val }}</div>
</div>
 <nut-actionsheet :is-visible="isVisible" 
    @close="switchActionSheet"
    :menu-items="menuItems"
    @choose="chooseItem"
    cancelTxt="取消"
></nut-actionsheet>
```
## 展示描述信息
```html
<div @click.native="switchActionSheet">
   <span><label>展示取消按钮</label></span>
    <div class="selected-option">state.val }}</div>
</div>
 <nut-actionsheet :is-visible="isVisible" 
    @close="switchActionSheet"
    description="state.desc"
    :menu-items="menuItems"
    @choose="chooseItem"
    cancelTxt="取消"
></nut-actionsheet>
```

## 选项状态
```html
<div @click.native="switchActionSheet">
    <span class="title"><label>性别</label></span>
    <span class="selected-option">{{sex}}</span>
</div>
<nut-actionsheet
@close="switchActionSheet"
        :is-visible="state.isVisible4"
        cancelTxt="取消"
        :menu-items="menuItemsThree"
      ></nut-actionsheet>
```
```javascript

```

## 自定义内容
```html
<div @click.native="switchActionSheet">
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
    const menuItemsStatus = [
      {
        name: '着色选项',
        color: '#ee0a24',
        value: 0
      },
      {
        name: '禁用选项',
        disable: true,
        value: 1
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

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
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