# Card 卡片


## 基本用法

基础样式

```html
    <nut-card
      content="这里是默认卡片内容"
      :footer-buttons="footerButtons"
      @click1="clickHandler1"
      @click2="clickHandler2"
    ></nut-card>
```


可添加标题的卡片

```html
    <nut-card title="卡片标题" supply-title="一小时" content="这里是卡片内容区域"></nut-card>
```

带标题/操作
```html
    <nut-card
      title="卡片标题"
      supply-title="一小时"
      content="这里是卡片内容区域"
      :footer-buttons="footerButtons"
      @click1="clickHandler1"
      @click2="clickHandler2"
    ></nut-card>
```


可展开/收起的卡片

```html
    <nut-card
      title="卡片标题"
      content="这里是卡片内容区域"
      open-icon
      :is-open="isOpen"
      @switch-click="switchClick"
    ></nut-card>
```

通栏卡片

```html
    <nut-card
      title="卡片标题"
      content="这里是卡片内容区域"
      is-full
      open-icon
      :is-open="isFullOpen"
      @switch-click="switchFullClick"
    ></nut-card>
```
## 自定义内容
Card组件提供了多个插槽，可以灵活地自定义内容

```html
    <nut-card has-content has-footer>
      <div slot="title" class="card-title">
        <div class="right">我是标题</div>
        <div class="left">一小时</div>
      </div>
      <div slot="content">这里是卡片内容区域</div>
      <div slot="footer">
        <nut-button size="small" type="bottom" color="#646464" @click="clickHandler1">操作一</nut-button>
        <nut-button size="small" type="bottom" color="#646464" @click="clickHandler2">操作二</nut-button>
      </div>
    </nut-card>
```
```css
.card-title {
  display: flex;
  justify-content: space-between;
  width: 100%;
  .right {
    flex: 1;
    font-size: $font-size-body-normal;
    font-weight: 600;
  }
  .left {
    color: $text-black-4;
  }
}
```
以上操作对应的js部分
```javascript
export default {
  data() {
    return {
      isOpen: false,
      isFullOpen: false,
      footerButtons: [
        { event: 'click1', clickName: '操作一' }, // event的值 对应组件的点击事件 clickName为按钮显示的文案
        { event: 'click2', clickName: '操作二' }
      ]
    };
  },
  methods: {
    clickHandler1() {
      // 操作1
      this.$toast.text('操作一', { duration: 1000 });
    },
    clickHandler2() {
      // 操作2
      this.$toast.text('操作二', { duration: 1000 });
    },
    switchClick() {
      // 展开收起卡片
      this.isOpen = !this.isOpen;
    },
    switchFullClick() {
      // 展开收起卡片
      this.isFullOpen = !this.isFullOpen;
    }
  }
};
```


## Prop

### nut-card

| 字段    | 说明                                  | 类型   | 默认值                                                   |
|---------|---------------------------------------|--------|----------------------------------------------------------|
| title     | 标题 | String | '' |
| supply-title     | 补充说明文案 | String | '' |
| open-icon  | 展开收起图标是否展示 | Boolean | false |
| content  | 内容 | String  | '' |
| is-open  | 是否展开卡片内容 | Boolean  | true |
| footer-buttons  | 底部按钮 | Array  | [] |
| is-full  | 是否为通栏卡片 | Boolean  | false |
| has-content  | 使用slot自定义content内容 | Boolean  | false |
| has-footer  | 使用slot自定义底部按钮 | Boolean  | false |