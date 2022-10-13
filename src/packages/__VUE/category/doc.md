# Category 商品分类

### 介绍

用于展示商品分类的组件。

### 安装

```javascript
import { createApp } from "vue";
import { Category, CategoryPane } from "@nutui/nutui";

const app = createApp();
app.use(Category);
app.use(CategoryPane);
```

### 经典分类模式

:::demo

```html
<template>
  <nut-category :category="category" @change="change">
    <nut-categorypane :categoryChild="categoryChild" @onChange="onChange">
    </nut-categorypane>
  </nut-category>
</template>
<script lang="ts">
import { reactive, toRefs, onMounted } from 'vue';

export default {
  setup() {
    const data = reactive({
      categoryInfo: {},
      category: [{}],
      categoryChild: [{}]
    });

    onMounted(() => {
      setTimeout(() => {
        getData();
      }, 500);
    });

    const getData = () => {
      fetch('//storage.360buyimg.com/nutui/3x/categoryData.js')
        .then((response) => response.json())
        .then((res) => {
          const { categoryInfo, categoryChild } = res;
          data.categoryInfo = categoryInfo;
          data.category = categoryInfo.category;
          data.categoryChild = categoryChild;
        })
        .catch((err) => console.log('Oh, error', err)); 
    };

    const change = (index: any) => {
      data.categoryChild = [].concat(data.categoryInfo.category[index + 1].children as any);
    };
    const onChange =()=>{
        console.log("当前分类数据");
    }
    return {
      onChange,
      change,
      ...toRefs(data)
    }
  }
};
</script>
```
:::
### 只显示文字

:::demo

```html
<template>
  <nut-category :category="category" @change="changeText">
    <nut-categorypane
      type="text"
      :categoryChild="categoryChild"
      @onChange="onChange"
    >
    </nut-categorypane
  ></nut-category>
</template>
<script lang="ts">
import { reactive, toRefs, onMounted } from 'vue';

export default {
  setup() {
    const data = reactive({
      categoryInfo: {},
      category: [{}],
      categoryChild: [{}]
    });

    onMounted(() => {
      setTimeout(() => {
        getData();
      }, 500);
    });

    const getData = () => {
      fetch('//storage.360buyimg.com/nutui/3x/categoryData.js')
        .then((response) => response.json())
        .then((res) => {
          console.log('res', res)
          const { categoryInfo, categoryChild } = res;
          data.categoryInfo = categoryInfo;
          data.category = categoryInfo.category;
          data.categoryChild = categoryChild;
        })
        .catch((err) => console.log('Oh, error', err)); 
    };

    const changeText = (index: any) => {
      data.categoryChild = [].concat(data.categoryInfo.category[index + 1].children as any);
    };

    const onChange =()=>{
      console.log("当前分类数据");
    }
    return {
      changeText,
      onChange,
      ...toRefs(data)
    }
  }
};
</script>
```
:::
### 自定义分类

:::demo

```html
<template>
  <nut-category @change="changeCustom"
    ><nut-categorypane
      type="custom"
      :customCategory="customCategory"
      @onChange="changeCustom"
    >
    </nut-categorypane
  ></nut-category>
</template>
<script lang="ts">
import { reactive, toRefs, onMounted } from 'vue';

export default {
  setup() {
    const data = reactive({
       customCategory: [{}],
    });
    onMounted(() => {
      setTimeout(() => {
         getData();
      }, 500);
    });
    const getData = () => {
      fetch('//storage.360buyimg.com/nutui/3x/categoryData.js')
        .then((response) => response.json())
        .then((res) => {
          const { customCategory } = res;
          data.customCategory = customCategory;
        })
        .catch((err) => console.log('Oh, error', err)); 
    };
    const changeCustom = () => {
      console.log('点击分类数据')
    };
    return {
      changeCustom,
      ...toRefs(data)
    }
  }
};
</script>
```
:::
## API

### Category Props

| 参数     | 说明                             | 类型   | 默认值   |
| -------- | -------------------------------- | ------ | -------- |
| type     | 分类模式：`classify`，`text`，`custom` | String | classify |
| category | 左侧导航栏数据列表               | Array  | []       |

### Category Events

| 事件名        | 说明                                             | 回调参数   |
| ------------- | ------------------------------------------------ | ---------- |
| change        | 经典分类，点击左侧导航栏，获取右侧数据列表       | 点击的数据 |
| change-text   | 文本分类模式，更点击左侧导航栏，获取右侧数据列表 | 输入的数据 |
| change-custom | 自定义，点击左侧导航栏，获取右侧数据列表         | 当前数量   |

### CategoryPane Props

| 参数            | 说明                 | 类型  | 默认值 |
| --------------- | -------------------- | ----- | ------ |
| category-child  | 右侧展示当前分类数据 | Array | []     |
| custom-category | 自定义分类数据       | Array | []     |

### CategoryPane Events

| 事件名    | 说明                 | 回调参数   |
| --------- | -------------------- | ---------- |
| on-change | 点击右侧分类数据触发 | 点击的数据 |

### CategoryPane Slots

| 名称    | 说明       |
| ------- | ---------- |
| default | 自定义内容 |
