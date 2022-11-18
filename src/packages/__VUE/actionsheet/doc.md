# ActionSheet 动作面板

### 介绍
从底部弹出的动作菜单面板。

### 安装

``` javascript
import { createApp } from 'vue';
// vue
import { ActionSheet, Popup, OverLay } from '@nutui/nutui';
// taro
import { ActionSheet, Popup, OverLay } from '@nutui/nutui-taro';

const app = createApp();
app.use(ActionSheet);
app.use(Popup);
app.use(OverLay);
```

### 基础用法

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

### 展示取消按钮
:::demo
``` html
<template>
  <div>
  <nut-cell
      :show-icon="true"
      :isLink="true"
      @click="switchActionSheet('isVisible')"
    >
      <span><label>展示取消按钮</label></span>
      <div v-html="state.val"></div>
    </nut-cell>
     <!-- demo 展示取消按钮 -->
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
### 展示描述信息
:::demo
``` html
<template>
  <div>
  <nut-cell
      :show-icon="true"
      :isLink="true"
      @click="switchActionSheet('isVisible')"
    >
      <span><label>展示描述信息</label></span>
      <div v-html="state.val"></div>
    </nut-cell>
     <!-- demo 展示描述信息 -->
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

### 选项状态

:::demo
``` html
<template>
  <div>
  <nut-cell
      :show-icon="true"
      :isLink="true"
      @click="switchActionSheet('isVisible')"
     
    >
      <span><label>选项状态</label></span>
      <div v-html="state.val"></div>
    </nut-cell>
     <!-- demo 选项状态 -->
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



### 自定义内容

:::demo
``` html
<template>
  <div>
  <nut-cell
      :show-icon="true"
      :isLink="true"
      @click="switchActionSheet('isVisible')"
     
    >
      <span><label>自定义内容</label></span>
    </nut-cell>
     <nut-actionsheet v-model:visible="state.isVisible" title="标题">
      <div class="custom-content">自定义内容</div>
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
    const switchActionSheet = ( param ) => {
      state.isVisible = !state.isVisible;
    };
    return {
      state,
      switchActionSheet,
    };
  }
}
 </script>
 <style lang="scss" scoped>
.custom-content {
  padding: 10px 10px 160px;
}
</style>

```
:::

## API
### Props

| 字段             | 说明                                   | 类型    | 默认值    |
|------------------|----------------------------------------|---------|-----------|
| v-model:visible       | 是否展示动作面板                             | Boolean | false|
| menu-items       | 列表项                                 | Array   | [ ]       |
| option-tag       | 设置列表项标题展示使用参数                 | String  | 'name'    |
| option-sub-tag   | 设置列表项二级标题展示使用参数             | String  | 'subname' |
| choose-tag-value | 设置选中项的值，和'option-tag'的值对应 | String  | ''        |
| color            | 选中项颜色，当 choose-tag-value == option-tag的值 生效  | String  | '#ee0a24' |
| title            | 设置列表项标题                         | String  | ''        |
| description      | 设置列表项副标题/描述                  | String  | ''        |
| cancel-txt       | 取消文案                               | String  | '取消'   |
| close-abled      | 遮罩层是否可关闭                       | Boolean | true      |

### MenuItems 数据结构

| 字段   | 说明               | 类型                          |
|--------|--------------------|-----------------------------------|
| name | 标题      | String    |
| subname | 二级标题 | String          |
| color | 选项字体颜色（选中项颜色层级>选项字体颜色） | String          |
| loading | 是否为loading状态 | Boolean          |
| disable | 是否为禁用状态 | Boolean       |

### Events

| 字段   | 说明               | 回调参数                          |
|--------|--------------------|-----------------------------------|
| choose | 选择之后触发       | 选中列表项item, 选中的索引值index |
| cancel | 点击取消文案时触发 | 无                                |
| close | 点击遮罩层时触发 | event: Event                              |
