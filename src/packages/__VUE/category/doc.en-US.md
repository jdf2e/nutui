# Category

### Intro

Component for displaying product categories.

### Install

```javascript
import { createApp } from 'vue';
import { Category, CategoryPane } from '@nutui/nutui';

const app = createApp();
app.use(Category);
app.use(CategoryPane);
```

### Classic Classification Mod

data defination
[categoryData.js](https://storage.360buyimg.com/nutui/3x/categoryData.js)。

:::demo

```html
<template>
  <nut-category :category="category" @change="change">
    <nut-category-pane :categoryChild="categoryChild" @change="onChange"> </nut-category-pane>
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
      const onChange = () => {
        console.log('Click on current category data');
      };
      return {
        onChange,
        change,
        ...toRefs(data)
      };
    }
  };
</script>
```

:::

### Show Text Only

:::demo

```html
<template>
  <nut-category :category="category" @change="changeText">
    <nut-category-pane type="text" :categoryChild="categoryChild" @change="onChange"> </nut-category-pane
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
            console.log('res', res);
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

      const onChange = () => {
        console.log('Click on current category data');
      };
      return {
        changeText,
        onChange,
        ...toRefs(data)
      };
    }
  };
</script>
```

:::

## Category

### Props

| Attribute        | Description                             | Type   | Default                                  |
| ---------------- | --------------------------------------- | ------ | ---------------------------------------- |
| type             | Classification mode: `classify`, `text` | string | `classify`                               |
| category         | Left navigation bar data list           | Array  | `[]`                                     |
| optionKey`4.1.3` | Custom keys in `category`               | Object | `{ catId: 'catId', catName: 'catName' }` |

### Events

| Event  | Description                                                                                | Arguments    |
| ------ | ------------------------------------------------------------------------------------------ | ------------ |
| change | Classic classification, click on the left navigation bar to get the data list on the right | Clicked data |

## CategoryPane

### Props

| Attribute       | Description                                               | Type  | Default |
| --------------- | --------------------------------------------------------- | ----- | ------- |
| category-child  | The current classification data is displayed on the right | Array | `[]`    |
| custom-category | Custom categorical data                                   | Array | `[]`    |

### Events

| Event  | Description                                | Arguments    |
| ------ | ------------------------------------------ | ------------ |
| change | Click on the right classified data trigger | Clicked data |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name                                          | Default Value              |
| --------------------------------------------- | -------------------------- |
| --nut-category-bg-color                       | _rgba(255, 255, 255, 1)_   |
| --nut-category-list-left-bg-color             | _rgba(246, 247, 249, 1)_   |
| --nut-category-list-item-color                | _var(--nut-title-color)_   |
| --nut-category-list-item-checked-color        | _rgba(255, 255, 255, 1)_   |
| --nut-category-list-item-checked-img-bg-color | _var(--nut-primary-color)_ |
| --nut-category-pane-gray-color                | _#666_                     |
| --nut-category-pane-border-color              | _rgb(153, 153, 153)_       |
| --nut-category-pane-title-color               | _rgba(51, 51, 51, 1)_      |
