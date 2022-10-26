# Tabs 选项卡切换

### 介绍

常用于平级区域大块内容的的收纳和展现，支持内嵌标签形式和渲染循环数据形式

### 安装

``` javascript
import { createApp } from 'vue';
// vue
import { Tabs, TabPane } from '@nutui/nutui';
// taro
import { Tabs, TabPane } from '@nutui/nutui-taro';

const app = createApp();
app.use(Tabs);
app.use(TabPane);
```

### 基础用法
:::demo
```html
<template>
<nut-tabs v-model="state.tab1value">
  <nut-tabpane title="Tab 1">
    Tab 1
  </nut-tabpane>
  <nut-tabpane title="Tab 2">
    Tab 2
  </nut-tabpane>
  <nut-tabpane title="Tab 3">
    Tab 3
  </nut-tabpane>
</nut-tabs>
</template>
<script lang="ts">
import { reactive } from 'vue';
export default {
  setup() {
    const state = reactive({
      tab1value: '0',
    });
    return { state };
  }
};
</script>
```
:::

### 基础用法-微笑曲线
:::demo
```html
<template>
<nut-tabs v-model="state.tab11value" type="smile">
  <nut-tabpane title="Tab 1">
    Tab 1
  </nut-tabpane>
  <nut-tabpane title="Tab 2">
    Tab 2
  </nut-tabpane>
  <nut-tabpane title="Tab 3">
    Tab 3
  </nut-tabpane>
</nut-tabs>
</template>
<script lang="ts">
import { reactive } from 'vue';
export default {
  setup() {
    const state = reactive({
      tab11value: '0',
    });
    return { state };
  }
};
</script>
```
:::

### 通过 pane-key 匹配

:::demo
```html
<template>
<nut-tabs v-model="state.tab2value">
  <nut-tabpane title="Tab 1" pane-key="0">
    Tab 1
  </nut-tabpane>
  <nut-tabpane title="Tab 2" pane-key="1" :disabled="true">
    Tab 2
  </nut-tabpane>
  <nut-tabpane title="Tab 3" pane-key="2">
    Tab 3
  </nut-tabpane>
</nut-tabs>
</template>
<script lang="ts">
import { reactive } from 'vue';
export default {
  setup() {
    const state = reactive({
      tab2value: '0',
    });
    return { state };
  }
};
</script>
```
:::

### Tabpane 自动高度

自动高度。设置为 true 时，nut-tabs 和 nut-tabs__content 会随着当前 nut-tabpane 的高度而发生变化。

:::demo
```html
<template>
  <nut-tabs v-model="state.tab2value" :auto-height="true">
    <nut-tabpane title="Tab 1" pane-key="0">
      <p>Tab 1</p>
      <p>Tab 1</p>
      <p>Tab 1</p>
      <p>Tab 1</p>
    </nut-tabpane>
    <nut-tabpane title="Tab 2" pane-key="1"> Tab 2 </nut-tabpane>
    <nut-tabpane title="Tab 3" pane-key="2"> Tab 3 </nut-tabpane>
  </nut-tabs>
</template>
<script lang="ts">
import { reactive } from 'vue';
export default {
  setup() {
    const state = reactive({
      tab2value: '0',
    });
    return { state };
  }
};
</script>
```
:::

### 数据异步渲染 3s

:::demo
```html
<template>
<nut-tabs v-model="state.tab3value">
  <nut-tabpane v-for="item in state.list3" :title="'Tab '+ item">
    Tab {{item}}
  </nut-tabpane>
</nut-tabs>
</template>
<script lang="ts">
import { reactive } from 'vue';
export default {
  setup() {
    const state = reactive({
      tab3value: '0',
      list3: Array.from(new Array(2).keys()),
    });
    setTimeout(() => {
      state.list3.push(999);
      state.tab3value = '2';
    }, 3000);
    return { state };
  }
};
</script>
```
:::

### 数量多,滚动操作

:::demo
```html
<template>
<nut-tabs v-model="state.tab4value" title-scroll title-gutter="10">
  <nut-tabpane v-for="item in state.list4" :title="'Tab '+ item">
    Tab {{item}}
  </nut-tabpane>
</nut-tabs>
</template>
<script lang="ts">
import { reactive } from 'vue';
export default {
  setup() {
    const state = reactive({
      tab1value: '0',
      list4: Array.from(new Array(10).keys()),
    });
    return { state };
  }
};
</script>
```
:::

### 左右布局

:::demo
```html
<template>
<nut-tabs style="height:300px" v-model="state.tab5value" title-scroll direction="vertical">
  <nut-tabpane v-for="item in state.list5" :title="'Tab '+ item">
    Tab {{item}}
  </nut-tabpane>
</nut-tabs>
</template>
<script lang="ts">
import { reactive } from 'vue';
export default {
  setup() {
    const state = reactive({
      tab5value: '0',
      list5: Array.from(new Array(2).keys()),
    });
    return { state };
  }
};
</script>
```
:::

### 左右布局-微笑曲线

:::demo
```html
<template>
<nut-tabs style="height:300px" v-model="state.tab6value" type="smile" title-scroll direction="vertical">
  <nut-tabpane v-for="item in state.list5" :title="'Tab '+ item">
    Tab {{item}}
  </nut-tabpane>
</nut-tabs>
</template>
<script lang="ts">
import { reactive } from 'vue';
export default {
  setup() {
    const state = reactive({
      tab6value: '0',
      list5: Array.from(new Array(2).keys()),
    });
    return { state };
  }
};
</script>
```
:::

### 标签栏字体尺寸 large normal small
:::demo
```html
<template>
<nut-tabs v-model="state.tab1value" size="large">
  <nut-tabpane title="Tab 1"> Tab 1 </nut-tabpane>
  <nut-tabpane title="Tab 2"> Tab 2 </nut-tabpane>
  <nut-tabpane title="Tab 3"> Tab 3 </nut-tabpane>
</nut-tabs>
<nut-tabs v-model="state.tab1value" size="normal">
  <nut-tabpane title="Tab 1"> Tab 1 </nut-tabpane>
  <nut-tabpane title="Tab 2"> Tab 2 </nut-tabpane>
  <nut-tabpane title="Tab 3"> Tab 3 </nut-tabpane>
</nut-tabs>
<nut-tabs v-model="state.tab1value" size="small">
  <nut-tabpane title="Tab 1"> Tab 1 </nut-tabpane>
  <nut-tabpane title="Tab 2"> Tab 2 </nut-tabpane>
  <nut-tabpane title="Tab 3"> Tab 3 </nut-tabpane>
</nut-tabs>
</template>
<script lang="ts">
import { reactive } from 'vue';
export default {
  setup() {
    const state = reactive({
      tab1value: '0',
    });
    return { state };
  }
};
</script>
```
:::

### 自定义标签栏
:::demo
```html
<template>
<nut-tabs v-model="state.tab7value">
  <template v-slot:titles>
    <div class="nut-tabs__titles-item" @click="state.tab7value=item.paneKey"
      :class="{active:state.tab7value==item.paneKey}" :key="item.paneKey" v-for="item in state.list6">
      <nut-icon v-if="item.icon" :name="item.icon" />
      <span class="nut-tabs__titles-item__text">{{item.title}}</span>
      <span class="nut-tabs__titles-item__line"></span>
    </div>
  </template>
  <nut-tabpane v-for="item in state.list6" :pane-key="item.paneKey">
    {{item.title}}
  </nut-tabpane>
</nut-tabs>
</template>
<script lang="ts">
import { reactive } from 'vue';
export default {
  setup() {
    const state = reactive({
      tab7value: 'c1',
       list6: [
        {
          title: '自定义 1',
          paneKey: 'c1',
          icon: 'dongdong'
        },
        {
          title: '自定义 2',
          paneKey: 'c2',
          icon: 'JD'
        },
        {
          title: '自定义 3',
          paneKey: 'c3'
        }
      ]
    });
    return { state };
  }
};
</script>
```
:::

## API

### Tabs Props

| 参数                 | 说明                                                                                              | 类型          | 默认值     |
|----------------------|---------------------------------------------------------------------------------------------------|---------------|------------|
| v-model              | 绑定当前选中标签的标识符                                                                          | number,string | 0          |
| color                | 标签选中色                                                                                        | string        | #1a1a1a    |
| background           | 标签栏背景颜色                                                                                    | string        | #f5f5f5    |
| direction            | 使用横纵方向 可选值 horizontal、vertical                                                          | string        | horizontal |
| type                 | 选中底部展示样式 可选值 line、smile                                                               | string        | line       |
| title-scroll         | 标签栏是否可以滚动                                                                                | boolean       | false      |
| ellipsis             | 是否省略过长的标题文字                                                                            | boolean       | true       |
| animated-time        | 切换动画时长,单位 ms 0 代表无动画                                                                 | number,string | 300        |
| title-gutter         | 标签间隙                                                                                          | number,string | 0          |
| size`v3.1.13`        | 标签栏字体尺寸大小 可选值  large normal small                                                     | string        | normal     |
| auto-height`v3.1.21` | 自动高度。设置为 true 时，nut-tabs 和 nut-tabs__content 会随着当前 nut-tabpane 的高度而发生变化。 | boolean       | false      |
| sticky`v3.2.3` `小程序不支持` | 是否使用粘性布局 | boolean       | false      |
| top`v3.2.3` `小程序不支持` | 粘性布局下的吸顶距离 | number       | 0      |

### Tabs Slots

| 名称    | 说明           |
|---------|----------------|
| titles  | 自定义导航区域 |
| default | 自定义内容     |

### Tabpane Props

| 参数     | 说明                    | 类型    | 默认值           |
|----------|-------------------------|---------|------------------|
| title    | 标题                    | string  |                  |
| pane-key | 标签 Key , 匹配的标识符 | string  | 默认索引0,1,2... |
| disabled | 是否禁用标签            | boolean | false            |


### Tabpane Slots

| 名称    | 说明       |
|---------|------------|
| default | 自定义内容 |

### Tabs Events

| 事件名 | 说明                     | 回调参数                 |
|--------|--------------------------|--------------------------|
| click  | 点击标签时触发           | {title,paneKey,disabled} |
| change | 当前激活的标签改变时触发 | {title,paneKey,disabled} |

