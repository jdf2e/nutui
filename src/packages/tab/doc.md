# Tab 选项卡

常用于平级区域大块内容的的收纳和展现，支持内嵌标签形式和渲染循环数据形式。

> 注意，使用该组件需要在引入 nut-tab-panel 组件

`import { TabPanel } from "@nutui/nutui";`

## 基础样式

```html
<nut-tab @tab-switch="tabSwitch">
    <nut-tab-panel tab-title="页签一">这里是页签1内容</nut-tab-panel>
    <nut-tab-panel tab-title="页签二">这里是页签2内容</nut-tab-panel>
    <nut-tab-panel tab-title="页签三">这里是页签3内容</nut-tab-panel>
    <nut-tab-panel tab-title="页签四">这里是页签4内容</nut-tab-panel>
</nut-tab>
```
```javascript
export default {
  methods: {
      tabSwitch:function(index,event){
        console.log(index+'--'+event);
      }
  }
};
```

## 禁用样式：

```html
<nut-tab @tab-switch="tabSwitch">
    <nut-tab-panel tab-title="页签一">这里是页签1内容</nut-tab-panel>
    <nut-tab-panel tab-title="页签二">这里是页签2内容</nut-tab-panel>
    <nut-tab-panel tab-title="页签三" :disable="true">这里是页签3内容</nut-tab-panel>
    <nut-tab-panel tab-title="页签四">这里是页签4内容</nut-tab-panel>
</nut-tab>
```

## 超出界面宽度
```html
<nut-tab @tab-switch="tabSwitch" :is-scroll="true">
  <nut-tab-panel
    v-for="value in editableTabs"
    v-bind:key="value.tabTitle"
    :tab-title="value.tabTitle"
    :icon-url="value.iconUrl"
    v-html="value.content"
  ></nut-tab-panel>
</nut-tab>
```
```javascript
export default {
  data() {
      return {
          editableTabs: [
          {
            tabTitle: "推荐分类",
            iconUrl: "",
            content: "<p>这里是推荐分类内容</p>"
          },
          {
            tabTitle: "家电清洗",
            iconUrl: "",
            content: "<p>这里是家电清洗内容</p>"
          },
          {
            tabTitle: "箱包养护",
            iconUrl: "",
            content: "<p>这里是箱包养护内容</p>"
          },
          {
            tabTitle: "屏幕换新",
            iconUrl: "",
            content: "<p>这里是屏幕换新内容</p>"
          },
          {
            tabTitle: "电池换新",
            iconUrl: "",
            content: "<p>这里是电池换新内容</p>"
          },
          {
            tabTitle: "内存升级",
            iconUrl: "",
            content: "<p>这里是内存升级内容</p>"
          },
          {
            tabTitle: "家电服务",
            iconUrl: "",
            content: "<p>这里是家电服务内容</p>"
          }
        ]
      }
  }
};
```

## 纵向tab切换

```html
<nut-tab @tab-switch="tabSwitch" position-nav="left" :wrapper-height="350">
  <nut-tab-panel
    v-for="value in editableTabs"
    v-bind:key="value.tabTitle"
    :tab-title="value.tabTitle"
    :icon-url="value.iconUrl"
    v-html="value.content"
  ></nut-tab-panel>
</nut-tab>
```

## 纵向tab切换超出界面高度，设置tab区域高度

```html
<nut-tab @tab-switch="tabSwitch" position-nav="left" :is-scroll="true" :wrapper-height="200">
  <nut-tab-panel
    v-for="value in editableTabs"
    v-bind:key="value.tabTitle"
    :tab-title="value.tabTitle"
    :icon-url="value.iconUrl"
    v-html="value.content"
  ></nut-tab-panel>
</nut-tab>
```

## 设置可以滑动的线段

```html
<nut-tab @tab-switch="tabSwitch" :tab-line="false" :scroll-line="true">
    <nut-tab-panel tab-title="页签一">这里是页签1内容</nut-tab-panel>
    <nut-tab-panel tab-title="页签二">这里是页签2内容</nut-tab-panel>
    <nut-tab-panel tab-title="页签三">这里是页签3内容</nut-tab-panel>
    <nut-tab-panel tab-title="页签四">这里是页签4内容</nut-tab-panel>
</nut-tab>
```

## 若更新页面，将监听变化的数据传入init-data，且可以自定义class类名，样式覆盖
```html
<nut-tab 
  :def-index="defIndex" 
  class="customer-css" 
  :tab-line="false" 
  @tab-switch="tabSwitch" 
  :init-data="disableTabs"  
  :scroll-line="true">
  <nut-tab-panel
    v-for="value in disableTabs"
    v-bind:key="value.tabTitle"
    :tab-title="value.tabTitle"
    :icon-url="value.iconUrl"
    :disable="value.disable"
    v-html="value.content"
  ></nut-tab-panel>
</nut-tab>
<div style="width:100%;height=50px;text-align:center">
  <nut-button @click="resetHandler" type="light">重置Tab页面</nut-button>
  <nut-button @click="clickHandler">更新Tab页面</nut-button>
</div>
```

```javascript
import Button from '../button/button.vue';
export default {
  data() {
    return {
      positionNavCurr:'top',
      disableTabs:[
        {
          'tabTitle':'衣物',
          'disable':true,
          'tabUrl':'http://img13.360buyimg.com/uba/jfs/t27280/289/2061314663/2392/872e32ff/5bf76318Ndc80c1d8.jpg',
          'content':'<p>衣物内容</p>'
        },
        {
          'tabTitle':'日用品',
          'tabUrl':'http://img13.360buyimg.com/uba/jfs/t30331/209/562746340/2190/6619973d/5bf763aaN6ff02099.jpg',
          'content':'<p>日用品内容</p>'
        },
        {
          'tabTitle':'运动器材',
          'tabUrl':'http://img20.360buyimg.com/uba/jfs/t30346/262/553689202/2257/5dfa3983/5bf76407N72deabf4.jpg',
          'content':'<p>运动器材内容</p>'
        },
        {
          'tabTitle':'电影票',
          'tabUrl':'http://img10.360buyimg.com/uba/jfs/t26779/215/2118525153/2413/470d1613/5bf767b2N075957b7.jpg',
          'content':'<p>电影票内容</p>'
        }
      ]
    };
  },
  methods: {
      tabSwitch:function(index,event){
        console.log(index+'--'+event.target);
      },
      clickHandler:function(){
        let newEditableTabs = [
          {
            tabTitle: "衣物2",
            iconUrl:
              "http://img13.360buyimg.com/uba/jfs/t27280/289/2061314663/2392/872e32ff/5bf76318Ndc80c1d8.jpg",
            content: "<p>改变衣物内容</p>"
          },
          {
            tabTitle: "日用品2",
            iconUrl:
              "http://img13.360buyimg.com/uba/jfs/t30331/209/562746340/2190/6619973d/5bf763aaN6ff02099.jpg",
            content: "<p>改变日用品内容</p>"
          },
          {
            tabTitle: "器材2",
            iconUrl:
              "http://img20.360buyimg.com/uba/jfs/t30346/262/553689202/2257/5dfa3983/5bf76407N72deabf4.jpg",
            content: "<p>改变运动器材内容</p>"
          },
          {
            tabTitle: "电影票2",
            iconUrl:
              "http://img10.360buyimg.com/uba/jfs/t26779/215/2118525153/2413/470d1613/5bf767b2N075957b7.jpg",
            content: "<p>改变电影票内容</p>"
          }
        ]
        this.disableTabs = newEditableTabs;
      },
      resetHandler:function(){
          let newEditableTabs = [
          {
            tabTitle: "衣物",
            disable: true,
            iconUrl:
              "http://img13.360buyimg.com/uba/jfs/t27280/289/2061314663/2392/872e32ff/5bf76318Ndc80c1d8.jpg",
            content: "<p>衣物内容</p>"
          },
          {
            tabTitle: "日用品",
            iconUrl:
              "http://img13.360buyimg.com/uba/jfs/t30331/209/562746340/2190/6619973d/5bf763aaN6ff02099.jpg",
            content: "<p>日用品内容</p>"
          },
          {
            tabTitle: "运动器材",
            iconUrl:
              "http://img20.360buyimg.com/uba/jfs/t30346/262/553689202/2257/5dfa3983/5bf76407N72deabf4.jpg",
            content: "<p>运动器材内容</p>"
          },
          {
            tabTitle: "电影票",
            iconUrl:
              "http://img10.360buyimg.com/uba/jfs/t26779/215/2118525153/2413/470d1613/5bf767b2N075957b7.jpg",
            content: "<p>电影票内容</p>"
          }
        ]
        this.disableTabs = newEditableTabs;
      }
  }
};
```


### Prop

### nut-tab

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| position-nav | 页签栏的分布，可选值 top/bottom/left/right | String | top
| def-index | 默认选中的页签栏 | String | 1
| init-data | 监听数据变化，渲染更新页面 | Array | []
| scroll-line|是否显示tab切换时，滑动效果的红条|Boolean|false|
| tab-line|是否显示tab切换时，无滑动效果的active红条|Boolean|true|
| is-scroll|是否支持超出范围后，滑动选择多个页签|Boolean|false|
| wrapper-height |设置tab区域的高度，只有在 is-scroll=true；positionNav=left或者right 的情况下有效|Number/String|200|


### nut-tab-panel

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| tab-title | 页签的标题 | String | ''
| icon-url | 页签的图标地址 | String | ''
| content | 页签的自定义内容 | String | ''
| disable | 是否禁用页签 |Boolean|false|

### Event

| 事件名称 | 说明 | 回调参数 
|----- | ----- | ----- 
| tab-switch | 切换页签时触发事件 | 点击的索引值和触发元素

