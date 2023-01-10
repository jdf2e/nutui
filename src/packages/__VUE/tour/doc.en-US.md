# Tour

### Intro

A bubble component used to guide the user through the product's capabilities. This component has been available since version 4.0.

### Install

```javascript

import { createApp } from 'vue';
import { Tour } from '@nutui/nutui';

const app = createApp();
app.use(Tour);
```


### Basic Usage

At each step, set the id of the target element, and the Tour component looks up the set id value

:::demo
```html
<template>
  <nut-cell title="try click" @click="showTour3 = true">
    <template v-slot:link>
      <nut-switch id="target7" />
    </template>
  </nut-cell>
  <nut-tour
    v-model:visible="showTour3"
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

```
:::

### Custom Style

Through 'maskWidth', 'maskHeight', 'bgColor' can be configured hollow mask size, bubble shell layer background color

:::demo
```html
<template>
  <nut-cell title="try click" @click="showTour1 = true">
    <template v-slot:link>
      <nut-switch id="target5" />
    </template>
  </nut-cell>

  <nut-tour
    class="nut-custom-tour nut-customword-tour nut-customstyle-tour"
    v-model:visible="showTour1"
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

```
:::


### Custom Offset

'offset' sets the distance of the hollow mask relative to the target element, 'popoverOffset' sets the offset of the bubble layer

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
    v-model:visible="showTour2"
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
          content: '这里换成关注和粉丝啦，听歌时长点击头像可见',
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



```
:::

### Custom Content

Can customize the bubble layer through the slot slot

:::demo
```html
<template>
  <nut-cell title="点击试试" @click="showTour4 = true">
    <template v-slot:link>
      <nut-switch id="target8" />
    </template>
  </nut-cell>

  <nut-tour
    v-model:visible="showTour4"
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

<style>
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

### Steps


:::demo
```html
<template>
  <nut-tabbar :bottom="true">
      <nut-tabbar-item
        id="target1"
        tab-title="首页"
        img="https://img13.360buyimg.com/imagetools/jfs/t1/23319/19/18329/3084/62e7c346E957c54ef/6c3e8a49e52b76f2.png"
        activeImg="https://img11.360buyimg.com/imagetools/jfs/t1/70423/4/20553/3652/62e74629E23ba550e/aeeed0e3b9f43ae6.png"
      ></nut-tabbar-item>
      <nut-tabbar-item
        id="target2"
        tab-title="分类"
        img="https://img13.360buyimg.com/imagetools/jfs/t1/202062/32/25149/5246/62e7c353E5a51db17/b82b940e6eb22ec3.png"
        activeImg="https://img11.360buyimg.com/imagetools/jfs/t1/162634/35/26732/5502/62e747a8E5330f029/3ea00a0c140beb38.png"
      ></nut-tabbar-item>
      <nut-tabbar-item
        id="target3"
        tab-title="购物车"
        img="https://img12.360buyimg.com/imagetools/jfs/t1/60552/28/20576/5585/62e7c2ddE2e0b48a7/70eefb366b85f3e4.png"
        activeImg="https://img11.360buyimg.com/imagetools/jfs/t1/138362/15/28011/5802/62e747a4E4139ef2f/9a79a1c0f6a273b4.png"
      ></nut-tabbar-item>
      <nut-tabbar-item
        id="target4"
        tab-title="我的"
        img="https://img14.360buyimg.com/imagetools/jfs/t1/156023/30/29042/4257/62e7c34aE71f32967/690e2db242e2a97f.png"
        activeImg="https://img13.360buyimg.com/imagetools/jfs/t1/144283/8/28420/4851/62e74784Eaa8549fe/80535de2961b812e.png"
      ></nut-tabbar-item>
    </nut-tabbar>
  <nut-cell title="点击试试" @click="showTour = true"></nut-cell>
  <nut-tour
    class="nut-custom-tour"
    v-model:visible="showTour"
    :steps="steps"
    location="top-start"
    :offset="[0, 0]"
    maskWidth="50"
    maskHeight="50"
  ></nut-tour>
</template>

<script lang="ts">
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

```
:::


## API
### Props  

| Attribute | Description | Type | Default |
|----------------|---------------------------------|---------|------------|
| visible      | Whether to display the boot eject layer                 | boolean  | `false`     |
| type          | Tour type            | string   | `step`   |
| steps       | Boot Step Content  | StepOptions[]   | `[]`  |
| offset       | The offset of the hollow mask relative to the target element  | [number, number]   | `[8, 10]`  |
| current      | When the type is' step ', the number of steps is displayed by default  | number  | `0`  |
| custom-class  | Custom class  | string  | ''  |
| location      | Location of popover,[location](https://nutui.jd.com/#/zh-CN/component/popover)  |  string  | `'bottom'`  |
| next-step-Txt       | Next step text | string   | `'next'`  |
| prev-step-Txt        | Prev step text  | string   | `'prev' ` |
| complete-txt       | Complete text  | string   | `'complete'`  |
| mask       | Whether to display cutout mask  | boolean  | `true` |
| bg-color       | Custom background color  | boolean  | '' |
| theme   | Theme style, can be set to dark light,[theme](https://nutui.jd.com/#/zh-CN/component/popover)  | string  | `'light'` |
| mask-width       | Width of hollow mask  | number \| string  | '' |
| mask-height       | Hollow mask height  | number \| string  | '' |
| close-on-click-overlay      | Whether to close when clicking overlay,[closeOnClickOverlay](https://nutui.jd.com/#/zh-CN/component/popover)  | boolean  | `true` |
| show-prev-step       | Whether to show prev button  | boolean  | `true` |
| show-title-bar       | Whether to show title bar  |  boolean  | `false` |

### StepOptions  

| Attribute | Description | Type | Default |
|----------------|----------------------|----------|--------|
| target           | target dom               | Element   | -      |
| content           | popover content     | String   | ''     |
| location       | Location of popover,[location](https://nutui.jd.com/#/zh-CN/component/popover)           | string  | `'bottom'`  |
| popover-offset | Offset of popopver [offset](https://nutui.jd.com/#/zh-CN/component/popover)     | [number, number]   | `[0, 12]`  | 
| arrow-offset      | Offset of arrow [arrowOffset](https://nutui.jd.com/#/zh-CN/component/popover)           | number  | `0`  | 


### Slots

| Name   | Description           |
|---------|--------------|
| default | Custom popover content |
| prevStep | Custom prev strep content|
| nextStep |  Custom prev strep content |

### Events

| Event   | Description           |
|---------|--------------|
| change | Emit when step change |
| close   | Emit when popover close |