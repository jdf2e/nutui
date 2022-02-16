# ActionSheet 动作面板


### 介绍
从底部弹出的动作菜单面板。

### 安装

``` javascript
import { createApp } from 'vue';
// vue
import { ActionSheet, Popup } from '@nutui/nutui';
// taro
import { ActionSheet, Popup } from '@nutui/nutui-taro';

const app = createApp();
app.use(ActionSheet).use(Popup);
```

## 基本用法

默认
:::demo
``` html
<template>
  <div>
  <nut-cell
      :show-icon="true"
      :isLink="true"
      @click="switchActionSheet('isVisible')"
     
    >
      <span><label>基础用法</label></span>
      <div v-html="state.val"></div>
    </nut-cell>
     <!-- demo 基础用法 -->
    <nut-actionsheet
      v-model:visible="state.isVisible"
      :menu-items="menuItems"
      @choose="chooseItem"
    >
    </nut-actionsheet>
    </div>
</template>
<script>
import { reactive } from 'vue';
export default {
  setup() {
  const state = reactive({
      isVisible: false,
      val: '',
    });
     const menuItems = [
      {
        name: '选项一'
      },
      {
        name: '选项二'
      },
      {
        name: '选项三'
      }
    ];
    const switchActionSheet = ( param ) => {
      state.isVisible = !state.isVisible;
    };
      const chooseItem = (itemParams) => {
      state.val = itemParams.name;
    };
    return {
      state,
      switchActionSheet,
      menuItems,
      chooseItem,
    };
  }
}
 </script>
```
:::

## 展示取消按钮
:::demo
``` html
<template>
  <div>
  <nut-cell
      :show-icon="true"
      :isLink="true"
      @click="switchActionSheet('isVisible')"
    >
      <span><label>基础用法</label></span>
      <div v-html="state.val"></div>
    </nut-cell>
     <!-- demo 基础用法 -->
    <nut-actionsheet
      v-model:visible="state.isVisible"
      :menu-items="menuItems"
      cancel-txt="取消"
      @choose="chooseItem"
    >
    </nut-actionsheet>
    </div>
</template>
<script>
import { reactive } from 'vue';
export default {
  setup() {
  const state = reactive({
      isVisible: false,
      val: '',
    });
     const menuItems = [
      {
        name: '选项一'
      },
      {
        name: '选项二'
      },
      {
        name: '选项三'
      }
    ];
    const switchActionSheet = ( param ) => {
      state.isVisible = !state.isVisible;
    };
      const chooseItem = (itemParams) => {
      state.val = itemParams.name;
    };
    return {
      state,
      switchActionSheet,
      menuItems,
      chooseItem,
    };
  }
}
 </script>
```
:::
## 展示描述信息
:::demo
``` html
<template>
  <div>
  <nut-cell
      :show-icon="true"
      :isLink="true"
      @click="switchActionSheet('isVisible')"
    >
      <span><label>基础用法</label></span>
      <div v-html="state.val"></div>
    </nut-cell>
     <!-- demo 基础用法 -->
    <nut-actionsheet
      v-model:visible="state.isVisible"
      cancel-txt="取消"
      description="这是一段展示信息"
      :menu-items="menuItems"
      @choose="chooseItem"
    >
    </nut-actionsheet>
    </div>
</template>
<script>
import { reactive } from 'vue';
export default {
  setup() {
  const state = reactive({
      isVisible: false,
      val: '',
    });
     const menuItems = [
      {
        name: '选项一'
      },
      {
        name: '选项二'
      },
      {
        name: '选项三',
        subname: '描述信息'
      }
    ];
    const switchActionSheet = ( param ) => {
      state.isVisible = !state.isVisible;
    };
      const chooseItem = (itemParams) => {
      state.val = itemParams.name;
    };
    return {
      state,
      switchActionSheet,
      menuItems,
      chooseItem,
    };
  }
}
 </script>
```
:::

## 选项状态

:::demo
``` html
<template>
  <div>
  <nut-cell
      :show-icon="true"
      :isLink="true"
      @click="switchActionSheet('isVisible')"
     
    >
      <span><label>基础用法</label></span>
      <div v-html="state.val"></div>
    </nut-cell>
     <!-- demo 基础用法 -->
    <nut-actionsheet
      v-model:visible="state.isVisible"
      :menu-items="menuItems"
      choose-tag-value="着色选项"
      @choose="chooseItem"
       cancel-txt="取消"
    >
    </nut-actionsheet>
    </div>
</template>
<script>
import { reactive } from 'vue';
export default {
  setup() {
  const state = reactive({
      isVisible: false,
      val: '',
    });
     const menuItems = [
      {
        name: '着色选项'
      },
      {
        name: '禁用选项',
        disable: true
      }
    ];
    const switchActionSheet = ( param ) => {
      state.isVisible = !state.isVisible;
    };
      const chooseItem = (itemParams) => {
      state.val = itemParams.name;
    };
    return {
      state,
      switchActionSheet,
      menuItems,
      chooseItem,
    };
  }
}
 </script>
```
:::

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