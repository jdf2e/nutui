# Tab 选项卡

常用于平级区域大块内容的的收纳和展现，支持内嵌标签形式和渲染循环数据形式。

> 注意，由于小程序端依赖的 swiper 组件存在兼容性问题，因此在小程序端暂时只支持基础的 tab 切换功能，待 swiper 组件修复后，开放所有功能。

## 安装

```js
import { createApp } from 'vue';
// vue
import { Tab, TabPanel, Swiper, SwiperItem } from '@nutui/nutui';
// taro
import { Tab, TabPanel, Swiper, SwiperItem } from '@nutui/nutui-taro';

const app = createApp();
app.use(Tab);
app.use(TabPanel);
app.use(Swiper);
app.use(SwiperItem);
```

## 基础样式，默认 tab-title 宽度均分相等

```html
<nut-tab>
  <nut-tab-panel tab-title="全部">
    <p class="content-tab">这里是页签全部内容</p>
  </nut-tab-panel>
  <nut-tab-panel tab-title="待付款">
    <p class="content-tab">这里是页签待付款内容</p>
  </nut-tab-panel>
  <nut-tab-panel tab-title="待收获">
    <p class="content-tab">这里是页签待收获内容</p>
  </nut-tab-panel>
  <nut-tab-panel tab-title="已完成">
    <p class="content-tab">这里是页签已完成内容</p>
  </nut-tab-panel>
</nut-tab>
```

## 默认显示 tab：

defaultIndex 设置默认显示 tab
switchTab 监听切换 tab 返回事件

```html
<nut-tab :defaultIndex="1" @switchTab="switchTab">
  <nut-tab-panel tab-title="全部">
    <p class="content-tab">这里是页签全部内容</p>
  </nut-tab-panel>
  <nut-tab-panel tab-title="待付款">
    <p class="content-tab">这里是页签待付款内容</p>
  </nut-tab-panel>
  <nut-tab-panel tab-title="待收获">
    <p class="content-tab">这里是页签待收获内容</p>
  </nut-tab-panel>
  <nut-tab-panel tab-title="已完成">
    <p class="content-tab">这里是页签已完成内容</p>
  </nut-tab-panel>
</nut-tab>
<script lang="ts">
  export default {
    setup() {
      function switchTab(activeInddex: number) {
        console.log(activeInddex);
      }
      return {
        switchTab
      };
    }
  };
</script>
```

## animatedTime 开启切换标签内容时的转场动画时间

```html
<nut-tab :animatedTime="500">
  <nut-tab-panel tab-title="全部">
    <p class="content-tab">这里是页签全部内容</p>
  </nut-tab-panel>
  <nut-tab-panel tab-title="待付款">
    <p class="content-tab">这里是页签待付款内容</p>
  </nut-tab-panel>
  <nut-tab-panel tab-title="待收获">
    <p class="content-tab">这里是页签待收获内容</p>
  </nut-tab-panel>
  <nut-tab-panel tab-title="已完成">
    <p class="content-tab">这里是页签已完成内容</p>
  </nut-tab-panel>
</nut-tab>
```

## 禁止 tab 内容滑动

```html
<nut-tab :no-swiping="true">
  <nut-tab-panel tab-title="全部">
    <p class="content-tab">这里是页签全部内容</p>
  </nut-tab-panel>
  <nut-tab-panel tab-title="待付款">
    <p class="content-tab">这里是页签待付款内容</p>
  </nut-tab-panel>
  <nut-tab-panel tab-title="待收获">
    <p class="content-tab">这里是页签待收获内容</p>
  </nut-tab-panel>
  <nut-tab-panel tab-title="已完成">
    <p class="content-tab">这里是页签已完成内容</p>
  </nut-tab-panel>
</nut-tab>
```

## 设置 scrollType="scroll"，标签栏可以在水平方向上滚动

切换时会自动将当前标签居中。

```html
<nut-tab :animatedTime="500" scrollType="scroll">
  <nut-tab-panel tab-title="全部">
    <p class="content-tab">这里是页签全部内容</p>
  </nut-tab-panel>
  <nut-tab-panel tab-title="待付款">
    <p class="content-tab">这里是页签待付款内容</p>
  </nut-tab-panel>
  <nut-tab-panel tab-title="待收获">
    <p class="content-tab">这里是页签待收获内容</p>
  </nut-tab-panel>
  <nut-tab-panel tab-title="已完成">
    <p class="content-tab">这里是页签已完成内容</p>
  </nut-tab-panel>
  <nut-tab-panel tab-title="已取消">
    <p class="content-tab">这里是页签已取消内容</p>
  </nut-tab-panel>
  <nut-tab-panel tab-title="待评价">
    <p class="content-tab">这里是页签待评价内容</p>
  </nut-tab-panel>
</nut-tab>
```

## 设置 slot:header 可以自定义标签

```html
<nut-tab>
  <nut-tab-panel tab-title="全部">
    <template v-slot:header><nut-icon name="dongdong"></nut-icon></template>
    <p class="content-tab">这里是页签全部内容</p>
  </nut-tab-panel>
  <nut-tab-panel tab-title="待付款">
    <p class="content-tab">这里是页签待付款内容</p>
  </nut-tab-panel>
  <nut-tab-panel tab-title="待收获">
    <p class="content-tab">这里是页签待收获内容</p>
  </nut-tab-panel>
  <nut-tab-panel tab-title="已完成">
    <p class="content-tab">这里是页签已完成内容</p>
  </nut-tab-panel>
  <nut-tab-panel tab-title="已取消">
    <p class="content-tab">这里是页签已取消内容</p>
  </nut-tab-panel>
  <nut-tab-panel tab-title="待评价">
    <p class="content-tab">这里是页签待评价内容</p>
  </nut-tab-panel>
</nut-tab>
```

## 左右 tab 布局

```html
<nut-tab
  direction="vertical"
  :animated-time="500"
  :default-index="2"
  scrollType="scroll"
  icon-type="half"
>
  <nut-tab-panel tab-title="页签一">
    <p class="content-tab">这里是页签一内容</p>
  </nut-tab-panel>
  <nut-tab-panel tab-title="页签二">
    <p class="content-tab">这里是页签二内容</p>
  </nut-tab-panel>
  <nut-tab-panel tab-title="页签三">
    <p class="content-tab">这里是页签三内容</p>
  </nut-tab-panel>
  <nut-tab-panel tab-title="页签四">
    <p class="content-tab">这里是页签四内容</p>
  </nut-tab-panel>
  <nut-tab-panel tab-title="页签五">
    <p class="content-tab">这里是页签五内容</p>
  </nut-tab-panel>
  <nut-tab-panel tab-title="页签六">
    <p class="content-tab">这里是页签六内容</p>
  </nut-tab-panel>
  <nut-tab-panel tab-title="页签七">
    <p class="content-tab">这里是页签七内容</p>
  </nut-tab-panel>
</nut-tab>
```

## 异步操作

```html
<nut-tab :animatedTime="500" v-if="editList.length>0">
    <nut-tab-panel :tab-title="item.title" v-for="(item,index) in editList" :key="index">
      <p class="content-tab">这里是页签{{index}}内容</p>
    </nut-tab-panel>
</nut-tab>
<nut-button type="primary" @click="changeList">改变数据</nut-button>
</div>
<script lang="ts">
import { ref , reactive,toRefs } from "vue";
export default {
  setup() {
    const resData = reactive({
      editList:[
        {
          title:'标签一'
        },
        {
          title:'标签二'
        }
      ]
    });
    function changeList(){
      resData.editList.push({
        title:'标签'+resData.editList.length
      })
    }
    return {
      ...toRefs(resData),
      changeList
    };
  }
}
</script>
```

### Prop

### nut-tab

| 字段          | 说明                                                                                                        | 类型    | 默认值     |
| ------------- | ----------------------------------------------------------------------------------------------------------- | ------- | ---------- |
| direction     | 页签栏的位置，可选值 horizontal/vertical                                                                    | String  | horizontal |
| default-index | 默认选中的页签栏                                                                                            | Number  | 0          |
| animated-time | 开启切换标签内容时的转场动画时间                                                                            | Number  | 0          |
| no-swiping    | 禁止 tab 内容滑动                                                                                           | Boolean | false      |
| scroll-type    | 页签栏的分布，默认平均分布，设置为"scroll"，有最小宽度，发生滚动                                            | string  | “default“  |
| icon-type     | 页签底部选中的红色样式，当为 half 的时候，显示半圆的红色 icon，默认为 all：红色横线，用来兼容不同的视觉规范 | String  | all        |

### nut-tab-panel

| 字段        | 说明                     | 类型   | 默认值 |
| ----------- | ------------------------ | ------ | ------ |
| tab-title   | 页签的标题               | String | ''     |
| slot:header | 页签 title 的自定义 slot | vnode  | --     |

### Event

| 事件名称   | 说明               | 回调参数             |
| ---------- | ------------------ | -------------------- |
| switch-tab | 切换页签时触发事件 | 当前活动状态的索引值 |
