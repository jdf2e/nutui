# Tour 引导

### 介绍

用于引导用户了解产品功能的气泡组件。自 4.0 版本开始提供该组件。

### 安装

```javascript

import { createApp } from 'vue';
import { Tour } from '@nutui/nutui';

const app = createApp();
app.use(Tour);
```

### 基础用法

在每一步中设置 `target` 目标元素的 id ，Tour 组件则会根据设置的 id 值进行查找

:::demo
```html
<template>
  <nut-cell title="点击试试">
    <template v-slot:link>
      <nut-switch id="target7" v-model="switchValue" @click="showTour3 = true" />
    </template>
  </nut-cell>
  <nut-tour
    v-model="showTour3"
    :steps="steps3"
    type="tile"
    location="bottom-end"
  ></nut-tour>
</template>
<script>
import { reactive, toRefs } from 'vue';
export default {
  setup() {
    const state = reactive({
      switchValue: false,
      showTour3: false,
      steps3: [{
          content: '70+ 高质量组件，覆盖移动端主流场景',
          target: 'target7'
        }]
    });
    return {...toRefs(state)};
    }
}
</script>
<style>
  .nut-tour-content-inner{
    white-space: nowrap
  }
</style>
```
:::

### 自定义样式

通过 `maskWidth`、`maskHeight`、`bgColor` 可配置镂空遮罩的大小、气泡弹层背景色

:::demo
```html
<template>
  <nut-cell title="点击试试">
    <template v-slot:link>
      <nut-switch id="target5" v-model="switchValue" @click="showTour1 = true" />
    </template>
  </nut-cell>

  <nut-tour
    class="nut-custom-tour nut-customword-tour nut-customstyle-tour"
    v-model="showTour1"
    :steps="steps1"
    location="bottom-end"
    type="tile"
    bgColor="#f00"
    theme="dark"
    :offset="[0, 0]"
    maskWidth="50"
    maskHeight="50"
  ></nut-tour>
</template>

<script>
import { reactive, toRefs } from 'vue';
export default {
   setup() {
    const state = reactive({
      switchValue: false,
      showTour1: false,
      steps1: [{
          content: '70+ 高质量组件，覆盖移动端主流场景',
          target: 'target5'
        }]
    });
    return {...toRefs(state)};
    }
}
</script>
<style>
  .nut-tour-content-inner{
    white-space: nowrap
  }
</style>
```
:::


### 设置偏移量

`offset` 可设置镂空遮罩层相对于目标元素的距离，`popoverOffset` 可设置气泡层的偏移量

:::demo
```html
<template>
  <nut-cell title="点击试试" @click="showTour2 = true">
    <template v-slot:link>
      <div class="tour-demo-img" v-for='i in [1,2,3]'>
        <img
             style="width:20px;margin-right:10px"
          id="target6"
          src="https://img14.360buyimg.com/imagetools/jfs/t1/167902/2/8762/791358/603742d7E9b4275e3/e09d8f9a8bf4c0ef.png"
        />
      </div>
    </template>
  </nut-cell>

  <nut-tour
    v-model="showTour2"
    :steps="steps2"
    type="tile"
    bgColor="#f00"
    theme="dark"
    location="bottom-end"
    :offset="[8, 8]"
  ></nut-tour>
</template>


<script>
import { reactive, toRefs } from 'vue';
export default {
  setup() {
    const state = reactive({
      showTour2: false,
      steps2: [
        {
          content: '支持一套代码同时开发多端小程序+H5',
          target: 'target6',
          popoverOffset: [40, 12],
          arrowOffset: -36
        }
      ]
    });
    return {...toRefs(state)};
    }
}
</script>
<style>
  .nut-tour-content-inner{
    white-space: nowrap
  }
</style>

```
:::

### 自定义内容

通过 slot 插槽可自定义气泡层内容

:::demo
```html
<template>
  <nut-cell title="点击试试">
    <template v-slot:link>
      <nut-switch id="target8" v-model="switchValue" @click="showTour4 = true" />
    </template>
  </nut-cell>

  <nut-tour
    v-model="showTour4"
    :steps="steps4"
    type="tile"
    theme="dark"
    location="bottom-end"
    :offset="[8, 8]"
    :closeOnClickOverlay="false"
  >
    <div class="tour-demo-custom-content">
      <div>nutui 4.x 即将发布，敬请期待</div>
      <nut-divider direction="vertical" />
      <div @click="showTour4 = false">知道了</div>
    </div>
  </nut-tour>
</template>

<script lang="ts">
import { reactive, toRefs } from 'vue';
export default {
  setup() {
    const state = reactive({
      switchValue: false,
      showTour4: false,
      steps4: [
        {
          target: 'target8'
        }
      ]
    });
    return {...toRefs(state)};
  }
};
</script>

<style lang="scss">
.tour-demo-custom-content {
  padding: 8px;
  display: flex;
  width: max-content;
  align-items: center;

  .nut-divider {
    border-color: #fff;
  }
}
</style>

```
:::

### 步骤引导

属性 `type` 设置为 `step` 可以进行步骤操作。属性 `Steps` 数组中的每一项代表每步的内容

:::demo
```html
<template>
  <nut-tabbar :bottom="true">
    <nut-tabbar-item id="target1" tab-title="首页"></nut-tabbar-item>
    <nut-tabbar-item id="target2" tab-title="分类"></nut-tabbar-item>
    <nut-tabbar-item id="target3" tab-title="购物车"></nut-tabbar-item>
    <nut-tabbar-item id="target4" tab-title="我的"></nut-tabbar-item>
  </nut-tabbar>
  <nut-cell title="点击试试" @click="showTour = true"></nut-cell>
  <nut-tour
    class="nut-custom-tour"
    v-model="showTour"
    :steps="steps"
    location="top-start"
    :offset="[0, 0]"
    maskWidth="60"
    maskHeight="50"
  ></nut-tour>
</template>

<script>
import { reactive, toRefs } from 'vue';
export default {
  setup() {
    const state = reactive({
      showTour: false,
      steps: [
        {
          content: '70+ 高质量组件，覆盖移动端主流场景',
          target: 'target1'
        },
        {
          content: '支持一套代码同时开发多端小程序+H5',
          target: 'target2'
        },
        {
          content: '基于京东APP 10.0 视觉规范',
          target: 'target3',
          location: 'top-end'
        },
        {
          content: '支持定制主题，内置 700+ 个主题变量',
          target: 'target4',
          location: 'top-end'
        }
      ],
    });
    return {...toRefs(state)};
  }
};
</script>
<style>
  #app{
    padding-top:200px
  }
  .nut-tabbar-item_icon-box_nav-word{
  font-size: 14px;
}
</style>

```
:::


## API
### Props  

| 参数            | 说明                            | 类型     | 默认值      |
|----------------|---------------------------------|---------|------------|
| v-model      | 是否展示引导弹出层                 | boolean  | `false`     |
| type          | 引导类型            | string   | `step`   |
| steps       | 引导步骤内容  | StepOptions[]   | `[]`  |
| offset       | 镂空遮罩相对于目标元素的偏移量  | [number, number]   | `[8, 10]`  |
| current      | 类型为 `step` 时，默认展示第几步  | number  | `0`  |
| custom-class       | 自定义 class 值  | string  | ''  |
| location      | 弹出层位置,同 Popopver 的[location 属性](https://nutui.jd.com/#/zh-CN/component/popover)  |  string  | 'bottom'  |
| next-step-Txt       | 下一步按钮文案  | string   | `'下一步'`  |
| prev-step-Txt        | 上一步按钮文案  | string   | `'上一步' ` |
| complete-txt       | 完成按钮文案  | string   | `'完成'`  |
| mask       | 是否显示镂空遮罩  | boolean  | `true` |
| bg-color       | 自定义背景色  | boolean  | `''` |
| theme       | 气泡遮罩层主题,同 Popopver 的[theme 属性](https://nutui.jd.com/#/zh-CN/component/popover)  | string  | `'light'` |
| mask-width       | 镂空遮罩层宽度  | number \| string  | '' |
| mask-height       | 镂空遮罩层高度  | number \| string  | '' |
| close-on-click-overlay      | 是否在点击镂空遮罩层后关闭,同 Popopver 的[closeOnClickOverlay 属性](https://nutui.jd.com/#/zh-CN/component/popover)  | Boolean  | `true` |
| show-prev-step       | 是否展示上一步按钮  | boolean  | `true` |
| show-title-bar       | 是否展示标题栏  |  boolean  | `false` |

### StepOptions  

| 键名            | 说明                 | 类型      | 默认值  |
|----------------|----------------------|----------|--------|
| target           | 目标对象               | Element   | -      |
| content           | 气泡层内容     | string   | ''     |
| location       | 弹出层位置,同 Popopver 的[location 属性](https://nutui.jd.com/#/zh-CN/component/popover)           | string  | `'bottom'`  |
| popover-offset      | 气泡层偏移量，同 Popopver 的[offset 属性](https://nutui.jd.com/#/zh-CN/component/popover)             | [number, number]   | `[0, 12]`  | 
| arrow-offset      | 小箭头的偏移量，同 Popopver 的[arrowOffset 属性](https://nutui.jd.com/#/zh-CN/component/popover)           | number  | `0`  | 


### Slots

| 名称    | 说明         |
|---------|--------------|
| default | 自定义气泡层内容|
|prev-step | 自定义上一步内容|
|next-step | 自定义下一步内容 |

### Events

| 事件名    | 说明         |
|---------|--------------|
| change | 切换步骤时触发 |
| close   | 气泡层关闭时触发 |