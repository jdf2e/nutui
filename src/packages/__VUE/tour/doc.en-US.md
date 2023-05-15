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
  <nut-cell title="try click">
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

### Custom Style

Through 'maskWidth', 'maskHeight', 'bgColor' can be configured hollow mask size, bubble shell layer background color

:::demo
```html
<template>
  <nut-cell title="try click">
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

### Custom Content

Can customize the bubble layer through the slot slot

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

### Steps


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

| Attribute | Description | Type | Default |
|----------------|---------------------------------|---------|------------|
| v-model      | Whether to display the boot eject layer                 | boolean  | `false`     |
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
| content           | popover content     | string   | ''     |
| location       | Location of popover,[location](https://nutui.jd.com/#/zh-CN/component/popover)           | string  | `'bottom'`  |
| popover-offset | Offset of popopver [offset](https://nutui.jd.com/#/zh-CN/component/popover)     | [number, number]   | `[0, 12]`  | 
| arrow-offset      | Offset of arrow [arrowOffset](https://nutui.jd.com/#/zh-CN/component/popover)           | number  | `0`  | 


### Slots

| Name   | Description           |
|---------|--------------|
| default | Custom popover content |
| prev-step | Custom prev strep content|
| next-step |  Custom prev strep content |

### Events

| Event   | Description           |
|---------|--------------|
| change | Emit when step change |
| close   | Emit when popover close |