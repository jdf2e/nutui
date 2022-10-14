# Collapse 折叠面板


### 介绍

将内容放置在多个折叠面板中，点击面板标题可展开或收缩内容。

### 安装

``` javascript
import { createApp } from 'vue';
// vue
import { Collapse,CollapseItem } from '@nutui/nutui';
// taro
import { Collapse,CollapseItem } from '@nutui/nutui-taro';

const app = createApp();
app.use(Collapse);
app.use(CollapseItem);
```

### 基础用法

通过`v-model`控制展开的面板列表，`activeNames`为数组格式
:::demo

```html
<template>
<nut-collapse v-model:active="activeNames" icon="down-arrow">
  <nut-collapse-item :name="1">
    <template v-slot:mTitle>
      {{title1}}
    </template>
    NutUI是一套拥有京东风格的轻量级的 Vue 组件库
  </nut-collapse-item>
  <nut-collapse-item :title="title2" :name="2">
    在产品的功能、体验、易用性和灵活性等各个方面做了全面的升级！
  </nut-collapse-item>
  <nut-collapse-item :title="title3" :name="3" disabled>
  </nut-collapse-item>
</nut-collapse>
</template>
<script>
import { reactive, toRefs } from 'vue';
export default {
  setup() {
    const activeNames = reactive([1, 2]);
    const title = reactive({
      title1: '标题1',
      title2: '标题2',
      title3: '标题3',
    })
    return {
      activeNames,
      ...toRefs(title)
    };
  }
}

```
:::
### 无icon样式
:::demo

```html
<template>
  <nut-collapse v-model:active="activeName" :accordion="true">
    <nut-collapse-item :title="title1" :name="1">
    引入Vue3新特性 Composition API、Teleport、Emits 等
    </nut-collapse-item>
    <nut-collapse-item :title="title2" :name="2">
      全面使用 TypeScipt
    </nut-collapse-item>
  </nut-collapse>
</template>
<script>
import { reactive, ref, toRefs } from 'vue';
export default {
  setup() {
    const activeName = ref(1);
    const title = reactive({
      title1: '标题1',
      title2: '标题2',
      title3: '标题3',
    })
    return {
      activeName,
      ...toRefs(title)
    };
  }
}
</script>
```
:::
### 手风琴

通过`accordion`可以设置为手风琴模式，最多展开一个面板，此时`activeName`为字符串格式；`subTitle`可以设置副标题的内容

:::demo

```html
<template>
  <nut-collapse v-model:active="activeName" :accordion="true" icon="down-arrow">
    <nut-collapse-item :title="title1" :name="1">
      基于京东设计语言体系，构建场景
    </nut-collapse-item>
    <nut-collapse-item :title="title2" :name="2" :sub-title="subTitle">
      提高界⾯的模块化通用程度
    </nut-collapse-item>
    <nut-collapse-item :title="title3" :name="3">
      采用组合式 API Composition 语法重构，结构清晰，功能模块化
    </nut-collapse-item>
  </nut-collapse>
</template>
<script>
import { reactive, ref, toRefs } from 'vue';
export default {
  setup() {
    const activeName = ref(1);
    const subTitle = '副标题';
    const title = reactive({
      title1: '标题1',
      title2: '标题2',
      title3: '标题3',
    })
    return {
      activeName,
      subTitle,
      ...toRefs(title)
    };
  }
}
</script>
```

:::
### 自定义折叠图标

通过icon设置自定义图标，rotate设置图标旋转的角度

:::demo

```html
<template>
  <nut-collapse
    v-model:active="activeName"
    :accordion="true"
    icon="arrow-right2"
    rotate="90"
  >
    <nut-collapse-item :title="title1" :name="1">
      <template v-slot:sTitle>
        文本测试
      </template>
      NUTUI3.0重新思考其内在的一致性和可组合性
    </nut-collapse-item>
    <nut-collapse-item :title="title2" :name="2" sub-title="文本内容">
      提⾼产研输出对接的效率，降低输出工作量
    </nut-collapse-item>
  </nut-collapse>
</template>
<script>
import { reactive, ref, toRefs } from 'vue';
export default {
  setup() {
    const activeName = ref(1);
    const title = reactive({
      title1: '标题1',
      title2: '标题2',
    })
    return {
      activeName,
      ...toRefs(title)
    };
  }
}
</script>
```
:::

### 自定义标题图标

通过icon设置自定义图标，rotate设置图标旋转的角度
:::demo

```html
<template>
  <nut-collapse
    v-model:active="activeName"
    title-icon="issue"
    title-icon-color="red"
    title-icon-size="20px"
    title-icon-position="left"
    icon="down-arrow"
    :accordion="true"
  >
    <nut-collapse-item :title="title1" :name="1">
    组件 emits 事件单独提取，增强代码可读性
    </nut-collapse-item>
    <nut-collapse-item :title="title2" :name="2" sub-title="文本内容">
    使用 Teleport 新特性重构挂载类组件
    </nut-collapse-item>
  </nut-collapse>
</template>
<script>
import { reactive, ref, toRefs } from 'vue';
export default {
  setup() {
    const activeName = ref(1);
    const title = reactive({
      title1: '标题1',
      title2: '标题2',
    })
    return {
      activeName,
      ...toRefs(title)
    };
  }
}
</script>
```
:::
### 设置固定内容（不折叠）

通过 slot:extraRender 设置内容
:::demo

```html
<template>
  <nut-collapse v-model:active="activeName" icon="down-arrow" :accordion="true">
    <nut-collapse-item :title="title1" :name="1">
      <template v-slot:extraRender>固定内容</template>
      NutUI是一套拥有京东风格的轻量级的 Vue 组件库
    </nut-collapse-item>
    <nut-collapse-item :title="title2" :name="2">
      在产品的功能、体验、易用性和灵活性等各个方面做了全面的升级！
    </nut-collapse-item>
  </nut-collapse>
</template>
<script>
import { reactive, ref, toRefs } from 'vue';
export default {
  setup() {
    const activeName = ref(1);
    const title = reactive({
      title1: '标题1',
      title2: '标题2',
    })
    return {
      activeName,
      ...toRefs(title)
    };
  }
}
</script>
```
:::

## API
### Collapse Props

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| v-model | 当前展开面板的 name | 手风琴模式：string \| number<br>非手风琴模式：(string \| number)[] | - |
| accordion | 是否开启手风琴模式 | boolean | false |
| icon | 图标链接/或使用 NutUI 的 icon | string | ‘’ |
| icon-size | 图标大小 | string | 16px |
| icon-color | 图标颜色 | string | '' |
| title-icon | 标题图标链接/或使用 NutUI 的 icon | string | ‘’ |
| title-icon-size | 标题图标大小 | string | 16px |
| title-icon-color | 标题图标颜色 | string | ’‘ |
| title-icon-position | 标题图标位置 | string | ‘left' |
| rotate | 点击折叠和展开的旋转角度,在自定义图标模式下生效 | string \ number | 180 |


### CollapseItem Props
| 参数 | 说明 | 类型 | 默认值 | 
|------|------|------|------|
| name | 唯一标识符，必填 | string \ number | -1 |
| title | 标题栏左侧内容，支持插槽传入（props传入的优先级更高） | string | - |
| sub-title | 标题栏副标题，支持插槽传入（props传入的优先级更高） | string | - |
| disabled | 标题栏是否禁用 | boolean | false |
| slot:extraRender `v3.1.20`| 设置标题下固定内容（不折叠） | - | ’‘ |


### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| change | 切换面板时触发 | 类型与 v-model 绑定的值一致 |