# Category 商品分类

### 介绍

用于展示商品分类的组件

### 安装

```javascript
import { createApp } from "vue";
import { Category, CategoryPane } from "@nutui/nutui";

const app = createApp();
app.use(Category);
app.use(CategoryPane);
```

## 代码演示

### 经典分类模式

```html
<nutbiz-category :category="category" @change="change">
  <nutbiz-categorypane :categoryChild="categoryChild" @onChange="onChange">
  </nutbiz-categorypane>
</nutbiz-category>
```

```javascript
  // category.js 文件点击右上角‘下载数据结构’下载
  import { categoryChild, categoryInfo } from "./category";

  setup() {
    const data = reactive({
      category: [{}],
      categoryChild: [{}],
    });

    onMounted(() => {
      setTimeout(() => {
        data.category = categoryInfo.category;
        data.categoryChild = categoryChild;
      }, 500);
    });

    const change = (index: any) => {
      data.categoryChild = [].concat(
        categoryInfo.category[index+1].children as any
      );
    };
    const onChange =()=>{
        console.log("当前分类数据");
    }
    return {
      onChange，
      change,
      ...toRefs(data)
    }
```

### 只显示文字

```html
<nutbiz-category :category="category" @change="changeText">
  <nutbiz-categorypane
    type="text"
    :categoryChild="categoryChild"
    @onChange="onChange"
  >
  </nutbiz-categorypane
></nutbiz-category>
```

```javascript
  // category.js 文件点击右上角‘下载数据结构’下载
  import { categoryChild, categoryInfo } from "./category";

  setup() {
    const data = reactive({
      category: [{}],
      categoryChild: [{}],
    });

    onMounted(() => {
      setTimeout(() => {
        data.category = categoryInfo.category;
        data.categoryChild = categoryChild;
      }, 500);
    });

    const changeText = (index: any) => {
      data.categoryChild = [].concat(
        categoryInfo.category[index+1].children as any
      );
    };

    const onChange =()=>{
        console.log("当前分类数据");
    }
    return {
      changeText,
      onChange,
      ...toRefs(data)
    }
```

### 自定义分类

```html
<nutbiz-category @change="changeCustom"
  ><nutbiz-categorypane
    type="custom"
    :customCategory="customCategory"
    @onChange="changeCustom"
  >
  </nutbiz-categorypane
></nutbiz-category>
```

```javascript
  // category.js 文件点击右上角‘下载数据结构’下载
  import { categoryChild, categoryInfo } from "./category";
  setup() {
    const data = reactive({
       customCategory: [{}],
    });
    onMounted(() => {
      setTimeout(() => {
         data.customCategory = customCategory;
      }, 500);
    });
    const changeCustom = () => {
      console.log('点击分类数据')
    };
    return {
      changeCustom,
      ...toRefs(data)
    }
```

## API

### Category Props

| 参数     | 说明                             | 类型   | 默认值   |
| -------- | -------------------------------- | ------ | -------- |
| type     | 分类模式：classify，text，custom | String | classify |
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

## CategoryPane Slots

| 名称    | 说明       |
| ------- | ---------- |
| default | 自定义内容 |
